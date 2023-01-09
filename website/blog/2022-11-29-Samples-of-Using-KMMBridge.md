---
title: Samples of Using KMMBridge
image: /blog/Sample-KMMBridge-Code.png
authors: [mfriend]
tags: [kotlin-multiplatform, iOS]
---

What is KMM Bridge?​
KMMBridge is a Gradle plugin by Touchlab that aims to simplify the process of pushing a Kotlin Multiplatform SDK binary to a remote repo, which allows iOS developers to use the shared SDK without installing the Kotlin toolchain or building the Kotlin code on every app build. 

<!--truncate-->

## **What is this Sample?**[****](https://eng.touchlab.dev/blog/2022/10/21/kmmbridge-samples-1#what-is-this-sample)

This sample project showcases our typical project setup for adding Kotlin Multiplatform Mobile code to existing separate Android and iOS apps using KMMBridge. We keep the Android app and the shared code in the same repo and keep the code to an absolute minimum with no dependencies so the project will build faster to speed things up when playing around with custom publish config. To see how to set up a project that keeps the Android app in a separate repo and uses a more realistic structure in shared code, check out the article [Quickstart Guide to KMMBridge](https://touchlab.co/quick-start-with-kmmbridge-1-hour-tutorial/)

## **Sample Repos**[****](https://eng.touchlab.dev/blog/2022/10/21/kmmbridge-samples-1#sample-repos)

The basic KMMBridge sample is split into four repos rather than being a monorepo to emulate the trend we’ve seen. Teams adopting KMM into existing apps have been publishing a KMM library from one repo for iOS apps in other repos to consume. The four repos are:

- [KMMBridgeSampleKotlin](https://github.com/touchlab/KMMBridgeSampleKotlin) aka Kotlin Repo – This is the Kotlin repo with the shared SDK code as well as an Android app that uses it.
- [KMMBridgeSampleCocoaPods](https://github.com/touchlab/KMMBridgeSampleCocoaPods) aka CocoaPods Repo- a repo that pulls down the SDK with CocoaPods to use in an iOS app
- [KMMBridgeSampleSpm](https://github.com/touchlab/KMMBridgeSampleCocoaPods) aka SPM Repo – a repo that pulls down the SDK with Swift Package Manager to use in an iOS app
- [PublicPodspecs](https://github.com/touchlab/PublicPodspecs) aka Podspec Repo – A CocoaPods custom Podspec repo. When publishing for CocoaPods a podspec file will be pushed to this repo in a folder with the version number. See the CocoaPods section for more info on this.

## **KMMBridgeSampleKotlin – The Kotlin Code**[****](https://eng.touchlab.dev/blog/2022/10/21/kmmbridge-samples-1#kmmbridgesamplekotlin---the-kotlin-code)

This repo demonstrates the usual first step for a larger team that wants to try out Kotlin Multiplatform: putting new or existing Kotlin code in a shared module in your Android app repo. This repo also has a standard Android app module that depends on the shared code through a Gradle project dependency.

The 

shared

 module is a Kotlin Multiplatform module and targets android, ios, and iosSimulatorArm64; declared in the kotlin block of the build.gradle.kts.In the kmmbridge config block, we set publishing both with both Swift Package Manager and Cocoapods. For your project you can just include one or the other based on your team’s needs. It also uses githubReleaseVersions to autoincrement versions when publishing a framework. Look over [the docs](https://touchlab.github.io/KMMBridge/general/CONFIGURATION_OVERVIEW) for more configuration options.addGithubPackagesRepository**()**kmmbridge **{**   mavenPublishArtifacts**()**   githubReleaseVersions**()**   spm**()**   cocoapods**(**"git@github.com:touchlab/PublicPodspecs.git"**)**   versionPrefix.set**(**"0.6"**)****}****Publishing Changes to Kotlin Code**[****](https://eng.touchlab.dev/blog/2022/10/21/kmmbridge-samples-1#publishing-changes-to-kotlin-code)Since this publishes frameworks to our GitHub org, you’ll need to fork the repo in order to publish changes. If you’re only using SPM and remove the CocoaPods publishing, this should be enough to start publishing your changes. If you want to use CocoaPods you’ll also need to fork the [Podspec Repo](https://github.com/touchlab/PublicPodspecs) and change the URL passed to the cocoapods**(**...**)** config above to your repo. You’ll also have to set up deploy keys as secrets in your KMM repo. [See Here](https://touchlab.github.io/KMMBridge/cocoapods/COCOAPODS_GITHUB_PODSPEC) for instructions on that.Once these steps are done you should be able to publish a new version of the SDK by manually running the publish job by going to the Actions tab, selecting KMM Bridge Publish Release and clicking Run workflow.