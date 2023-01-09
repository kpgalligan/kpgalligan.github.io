---
title: Lots of Swift Code
authors: [julia-jakubcova]
image: /blog/Compose-across-platforms.png
tags: [kotlin-multiplatform, compose]
---

Let’s look at the differences you’ll encounter when using Compose for different platforms. <!--truncate--> I have spent more time with some (Android) than the others, but I have experienced how it has progressed from its early states to the current versions. The initial frustration quickly turned into enjoyment. Here are answers to some basic questions you might have such as: How hard is it to set up, use and debug, what is unique for each platform? And what else can Compose be used for?

<tlContactUs
link="https://touchlab.co/contact-us/"
message="Compose is an important part of any developer’s toolkit. Learn more about how tools like Compose and KMM will help your team meet their goals." 
buttonMessage="Contact Us"/>

Hello

```swift
//
//  ContentView.swift
//  KMMBridgeSKIEApp
//
//  Created by Kevin Galligan on 12/22/22.
//

import SwiftUI
import KMMBridgeKickStart

struct ContentView: View {
    let sdk = StartSDKKt.startSDK(analytics: SwiftAnalytics())
    var body: some View {
        Button(action: {
            let okok = TestSkie()
            let myenum = okok.goEnums(myarg: .arst1)
            switch(myenum){
                
            case .arst1:
                print("arst1")
            case .arst2:
                print("arst2")
            case .haha:
                print("haha")
            }
            
            let wow = okok.goWow()
            
            switch(onEnum(of: wow)){
                
            case .WowObject(_):
                print("WowObject")
            case .WowString(let s):
                print("WowString \(s.myString)")
            }
            
            let helloOut = sdk.breedRepository.randyEnumWrapped(passin: .hello1)
            
            switch(helloOut){
            case .hello1:
                print("Hello1")
            case .hello2:
                print("Hello2")
            case .goodbye:
                print("Goodbye")
            }
        }){
        Text("Hello, world!")
            .padding()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

class SwiftAnalytics:Analytics{
    func sendEvent(eventName: String, eventArgs: [String : Any]) {
        print("analytics \(eventName)")
    }
}
```
    
More 

```swift
//
//  AppDelegate.swift
//  KaMPKitiOS
//
//  Created by Kevin Schildhorn on 12/18/19.
//  Copyright © 2019 Touchlab. All rights reserved.
//

import SwiftUI
import shared

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    // Lazy so it doesn't try to initialize before startKoin() is called
    lazy var log = koin.loggerWithTag(tag: "AppDelegate")

    func application(_ application: UIApplication, didFinishLaunchingWithOptions
        launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

        startKoin()

        let viewController = UIHostingController(rootView: BreedListScreen())

        self.window = UIWindow(frame: UIScreen.main.bounds)
        self.window?.rootViewController = viewController
        self.window?.makeKeyAndVisible()

        log.v(message: {"App Started"})
        return true
    }
}
```
Hello

```swift
//
//  BreedListView.swift
//  KaMPKitiOS
//
//  Created by Russell Wolf on 7/26/21.
//  Copyright © 2021 Touchlab. All rights reserved.
//

import Combine
import SwiftUI
import shared

private let log = koin.loggerWithTag(tag: "ViewController")

class ObservableBreedModel: ObservableObject {
    private var viewModel: BreedCallbackViewModel?

    @Published
    var loading = false

    @Published
    var breeds: [Breed]?

    @Published
    var error: String?

    private var cancellables = [AnyCancellable]()

    func activate() {
        let viewModel = KotlinDependencies.shared.getBreedViewModel()

        doPublish(viewModel.breeds) { [weak self] dogsState in
            self?.loading = dogsState.isLoading
            self?.breeds = dogsState.breeds
            self?.error = dogsState.error

            if let breeds = dogsState.breeds {
                log.d(message: {"View updating with \(breeds.count) breeds"})
            }
            if let errorMessage = dogsState.error {
                log.e(message: {"Displaying error: \(errorMessage)"})
            }
        }.store(in: &cancellables)

        self.viewModel = viewModel
    }

    func deactivate() {
        cancellables.forEach { $0.cancel() }
        cancellables.removeAll()

        viewModel?.clear()
        viewModel = nil
    }

    func onBreedFavorite(_ breed: Breed) {
        viewModel?.updateBreedFavorite(breed: breed)
    }

    func refresh() {
        viewModel?.refreshBreeds()
    }
}

struct BreedListScreen: View {
    @StateObject
    var observableModel = ObservableBreedModel()

    var body: some View {
        BreedListContent(
            loading: observableModel.loading,
            breeds: observableModel.breeds,
            error: observableModel.error,
            onBreedFavorite: { observableModel.onBreedFavorite($0) },
            refresh: { observableModel.refresh() }
        )
        .onAppear(perform: {
            observableModel.activate()
        })
        .onDisappear(perform: {
            observableModel.deactivate()
        })
    }
}

struct BreedListContent: View {
    var loading: Bool
    var breeds: [Breed]?
    var error: String?
    var onBreedFavorite: (Breed) -> Void
    var refresh: () -> Void

    var body: some View {
        ZStack {
            VStack {
                if let breeds = breeds {
                    List(breeds, id: \.id) { breed in
                        BreedRowView(breed: breed) {
                            onBreedFavorite(breed)
                        }
                    }
                }
                if let error = error {
                    Text(error)
                        .foregroundColor(.red)
                }
                Button("Refresh") {
                    refresh()
                }
            }
            if loading { Text("Loading...") }
        }
    }
}

struct BreedRowView: View {
    var breed: Breed
    var onTap: () -> Void

    var body: some View {
        Button(action: onTap) {
            HStack {
                Text(breed.name)
                    .padding(4.0)
                Spacer()
                Image(systemName: (!breed.favorite) ? "heart" : "heart.fill")
                    .padding(4.0)
            }
        }
    }
}

struct BreedListScreen_Previews: PreviewProvider {
    static var previews: some View {
        BreedListContent(
            loading: false,
            breeds: [
                Breed(id: 0, name: "appenzeller", favorite: false),
                Breed(id: 1, name: "australian", favorite: true)
            ],
            error: nil,
            onBreedFavorite: { _ in },
            refresh: {}
        )
    }
}
```

<tlNewsletter/>