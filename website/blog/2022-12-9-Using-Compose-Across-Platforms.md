---
title: Using Compose Across Platforms
authors: [julia-jakubcova]
image: /blog/Compose-across-platforms.png
tags: [kotlin-multiplatform, compose]
---

Let’s look at the differences you’ll encounter when using Compose for different platforms. <!--truncate--> I have spent more time with some (Android) than the others, but I have experienced how it has progressed from its early states to the current versions. The initial frustration quickly turned into enjoyment. Here are answers to some basic questions you might have such as: How hard is it to set up, use and debug, what is unique for each platform? And what else can Compose be used for?

<tlContactUs
link="https://touchlab.co/contact-us/"
message="Compose is an important part of any developer’s toolkit. Learn more about how tools like Compose and KMM will help your team meet their goals." 
buttonMessage="Contact Us"/>

## Show a repo

<github org="touchlab" repo="KaMPKit"/>

## The Best Thing About Compose UI Is Shareable code[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#shareable-code)

One of the best things about using Compose UI is the ability to share code between different platforms. As shown in [the Droidcon app](https://github.com/touchlab/DroidconKotlin), we managed to share the majority of views between Android and iOS applications. You can read more about the experience [here](https://touchlab.co/compose-ui-for-ios/). It’s even easier to share views between Android and Desktop, since both are JVM targets and thus share more functions. But not everything can be shared. Some components you want to use are platform specific, or maybe you want some parts of the views different for each platform, for these occasions there are [expect/actual declarations](https://kotlinlang.org/docs/multiplatform-connect-to-apis.html) that enable us to use different implementations for platforms. But the basic components like Column, Row, Box, Text … can be shared between all the platforms (in Compose for Web these primitives and widgets are still experimental, and it’s just a small subset when compared to Desktop and Android).

## Platform Specific components[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#specific-components)

This is not a complete list of platform specific components, just examples of things I stumbled upon and found useful or interesting.

### Android[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#android)

There are some [Accompanist libraries](https://google.github.io/accompanist/) that are specific to Android, but they are slowly being added to the Compose foundation library. For example, [Insets](https://google.github.io/accompanist/insets/) has been deprecated and added to Compose itself just recently. Usage of XML layouts is also specific to Android; you can use `AndroidView` when you want to use an XML layout in your Compose function (for times when you either don’t want to rewrite it in Compose or the component doesn’t exist yet) ([interoperability guide](https://developer.android.com/jetpack/compose/interop/interop-apis#views-in-compose)). I had this problem when I wanted to use star rating and a range slider, but that was some time ago.

### Desktop[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#desktop)

User experience when working with a desktop app is different from a mobile app, so there are some specific components that can be used when creating the UI. One such component is `Window`, it’s the main thing you create to have a place where your content will show. It has many properties, such as window state (What’s the position and size? Is the window fullscreen?) or resizable. For adding a menu that opens on right click use ContextMenuArea with ContextMenuItems as options. We can also specify groups and options in the top menu with the component called MenuBar, or create multiple menus, add separators and add custom keyboard shortcuts to items. Don’t forget, anywhere you need to add user interactions, you can use keyboard shortcuts. In Android development we are limited to click, double click and long click, but here we can use any combination of keys and mouse buttons, like Alt + Left Click (it took me some time to get used to these new options).

### iOS[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#ios)

In iOS module in Kotlin projects, we have access to UIKit components such as `UIImage` and other iOS specific classes.

### Web[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#web)

You can use the same tags in Compose as you would in HTML or JSX, such as `P`, `A`, or `Div`. JetBrains is also designing a typesafe DSL for style sheets for express CSS rules in Kotlin code.

## Is Compose UI Production Ready?[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#production-ready)

Are apps with Compose being used in production? Should you?

### Android[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#android-1)

A stable version of Jetpack compose for Android was [announced](https://android-developers.googleblog.com/2021/07/jetpack-compose-announcement.html) at the end of July 2021. According to [Google’s blog post](https://android-developers.googleblog.com/2022/10/whats-new-in-jetpack-compose.html), since this year’s Google I/O event the number of top 1000 apps on Google Play using Compose has increased by 50%. Many companies, big and small, use Compose for their apps and report significant reduction in lines of code and increase in performance and developer productivity. Even [Google Play Store](https://android-developers.googleblog.com/2022/03/play-time-with-jetpack-compose.html) decided to adopt Jetpack Compose as it’s UI framework when in 2020 the entire tech stack was revised, with success: “The Play Store’s adoption of Compose has been a boon for our team’s developer happiness, and a big step-up for code quality and health”.

### Desktop and Web[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#desktop-and-web)

Compose Multiplatform UI framework by JetBrains is in stable 1.2.1 version as of writing this post, with the first stable version 1.0 released in December 2021.

However, Compose for web is very low-level right now and doesn’t have any of the higher level web framework support that we have come to expect. Everything feels very experimental.

### iOS[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#ios-1)

Even though the first iOS application built in Compose UI in App Store (Droidcon New York) was published by Touchlab in August 2022, Compose UI for iOS is not production ready yet, for now it’s still in the development state, so we need to be patient.

## How to Set up Compose UI[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#setup)

### Android[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#android-2)

When creating a project in Android Studio, Compose can be added automatically. In case you want to migrate an existing project, you can follow [this guide](https://developer.android.com/jetpack/compose/interop) to set up Compose.

If you want to add compose manually, in module’s `build.gradle` inside the `android` set

```kotlin
buildFeatures {
   compose = true
}

composeOptions {
    kotlinCompilerExtensionVersion = "${VERSION}"
}
```
and add [dependencies](https://developer.android.com/jetpack/androidx/releases/compose) (`ui`, `foundation`, `material`, etc.).

For navigation, you can use [Navigation Component](https://developer.android.com/jetpack/compose/navigation), that is similar to Navigation Component used with XMLs.

### Desktop[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#desktop-1)

To use Compose in a desktop application you need to use the [Compose Multiplatform framework by JetBrains](https://www.jetbrains.com/lp/compose-mpp/). IntelliJ IDEA (version 2020.3 and newer) comes with a wizard that will configure the project with Compose for you at creation.

When adding it manually add

```kotlin
maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
```

to your plugin management repositories in `settings.gradle` and

```kotlin
plugins {
   id("org.jetbrains.compose") version "${VERSION}"
}

compose.desktop {
   application {
       mainClass = "MainKt"
   }
}
```

to `build.gradle`. For a full setup guide visit [Getting Started](https://github.com/JetBrains/compose-jb/tree/master/tutorials/Getting_Started).

### iOS[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#ios-2)

You will need a Kotlin project that will be included in your Swift build. Set up Compose Multiplatform JetBrains framework in Kotlin project’s `build.gradle` similarly to desktop. Then you will need to create an entry point function, which will be called from Swift code

```kotlin
fun getRootController(viewModel: ApplicationViewModel) = Application("MainComposeView") {
   MainComposeView(viewModel)
}
```

For more info about our app with Compose for iOS visit [this blogpost](https://touchlab.co/compose-ui-for-ios/).

### Web[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#web-1)

As with iOS and desktop you will need [the framework by JetBrains](https://github.com/jetbrains/compose-jb). Set up the project in IntelliJ IDEA with wizard by selecting `Compose Mutliplatform` and `Platform: Web`. You can find the full guide [here](https://github.com/JetBrains/compose-jb/tree/master/tutorials/Web/Getting_Started).

## Preview support[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#preview-support)

When working in compose, especially if you are just starting, it’s nice to immediately see what you are working on. Previews work for all the platforms in IntelliJ IDEA and for Android in Android Studio quite well. You just need to create a function tagged with @Preview and @Composable and call the function you want to see the preview of.

```kotlin
@Preview
@Composable
fun MyScreenPreview() {
   MyScreen()
}
```

Sometimes loading the preview takes time, and sometimes it requires you to rebuild the project, but (at the time of writing) it works pretty well. The only problem is if you get some data in your composable function through input parameters, you would need to have mock data to pass in inside the preview.

## Testing[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#testing) Compose UI

### UI testing[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#ui-testing)

[Testing UI](https://developer.android.com/jetpack/compose/testing) written in compose is different from testing a view-based UI. It uses semantics to interact with the view hierarchy. The semantics tree is generated alongside the UI hierarchy, and describes it. Setting up a Compose content for tests is done through AndroidComposeTestRule. In the tests there are three APIs for interaction with elements: finders, assertions and actions.

### Paparazzi[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#paparazzi)

[Paparazzi by Square](https://github.com/cashapp/paparazzi) is a library for rendering application screens without a physical device or emulator. It is used when doing snapshot (screenshot) testing – this testing detects if the UI has changed unintentionally. First a screenshot is saved of a screen or component after it is built. Then when verifying, the snapshot test takes a new screenshot and compares them. The snapshot test fails if they are not identical.

## Useful libraries and tools[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#useful-libraries-and-tools)

### Molecule[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#molecule)

[Molecule by Square](https://github.com/cashapp/molecule) is a library for turning Flows into StateFlows so that you don’t need to mix business logic with display logic in the UI layer by setting up a default value when observing the Flow in Compose.

### Aurora[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#aurora)

[Aurora](https://github.com/kirill-grouchnikov/aurora) is a collection of libraries for writing modern, elegant, and fast desktop Compose applications.

### xcode-kotlin[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#xcode-kotlin)

[Xcode-kotlin](https://github.com/touchlab/xcode-kotlin) is a plugin that enables iOS developers to debug kotlin code directly from Xcode.

### KMMBridge[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#kmmbridge)

[KMMBridge](https://github.com/touchlab/KMMBridge) is another tool that helps iOS developers transition more easily to KMM development. It is a set of Gradle tooling that facilitates publishing and consuming pre-built KMM (Kotlin Multiplatform Mobile) Xcode Framework binaries. The modules can be published to various back ends, public or private, and (currently) consumed by either CocoaPods or Swift Package Manager.

### Relay (Figma)[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#relay-figma)

[Relay by Google](https://developer.android.com/jetpack/compose/tooling/relay) is a tool for creating Compose layouts from UI designs. There is a plugin for Figma that enables designers to annotate and package UI components for developer use, including information about layout, styling, dynamic content, and interaction behavior. There is also an Android Studio plugin for importing these UI Packages and generating Compose code.

## Other things to do with Compose[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#other-things-to-do-with-compose)

### Redwood[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#redwood)

[Redwood by Square](https://github.com/cashapp/redwood) is a library for implementing a shared UI for Android, iOS and Web built on the fact that the Compose compiler can be used without Compose UI. It allows declaring common UI widgets and then declaring how those widgets are implemented on each platform. That way the final UI can be native, but driven using the common Redwood code. Additionally, Redwood gives you the option to change application behavior without waiting for users to update their apps. With Kotlin/JS you may download an update of your composable functions at application launch time, and run them in a JavaScript VM.

### Mosaic[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#mosaic)

[Mosaic by Jake Wharton](https://github.com/JakeWharton/mosaic) is an experimental tool for building console UI in Kotlin using the Jetpack Compose compiler/runtime.

## Personal opinion[](https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#personal-opinion)

Since I started using Compose UI over a year ago it has changed and matured a lot. Yes, there were some complications, especially before the stable version, but I can say it has been a lot of fun developing in Compose. I would advise everyone, not just Android developers, to try it out, you might enjoy it as much as I do.

<tlNewsletter/>