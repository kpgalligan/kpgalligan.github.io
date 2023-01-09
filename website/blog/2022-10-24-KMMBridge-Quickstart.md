---
title: Quickstart Guide to KMMBridge
authors: [kpgalligan]
image: /blog/Quickstart-Guide-to-KMMBridge.png
tags: [kotlin-multiplatform, devops, kmmbridge]
---

Staying true to our goal of making it easier for teams to get the benefits of Kotlin Multiplatform Mobile more quickly, this tutorial will help many of you get a basic integration working in about an hour or less.

<!-- truncate -->

The tooling available for KMM and KMP has been mostly focused around local dev, but as adoption continues to increase, tooling for teams needs to mature as well. That’s one of the reasons Touchlab built KMMBridge, a Gradle tool that will build and publish an Xcode Framework from Kotlin, that can then be integrated directly into an Xcode project without needing to compile Kotlin locally.

Our experience has shown us that one of the more difficult things to do when getting started with Kotlin Multiplatform is configuring projects and Gradle builds. This is difficult enough to do with new “Greenfield” projects. Trying to modify and integrate within an existing production system can be significantly more difficult.

## Pre-Start Checklist

Because production system config tends to be fairly complex, regardless of the technical ecosystem in question, there’s a limit to how easy we can realistically make any particular situation. However, if your team’s setup fits the following three criteria, you should be able to get a basic integration working in about an hour or less….

1. Your team uses GitHub for your code
2. You’re using CocoaPods or Swift Package Manager (SPM) for iOS dependencies
3. You’re OK using GitHub Actions for CI, at least for right now

Of course, your experience level with these tools and the complexity of your environment can impact the outcome, but let’swe’ll start with a positive outlook and see how it goes 🙂

## INFO

If you are using other CI/CD tools and/or other artifact managers, please reach out in our Kotlin Slack channel [#touchlab-tools](https://kotlinlang.slack.com/archives/CTJB58X7X). Your feedback will help drive future development efforts. We are currently working on examples for GitLab, have a community PR for GitHub Enterprise, and have more integrations coming soon. Keep in touch!

Also, you’ll need to do some prep work before you get started:

- Make sure you have admin access to your Github org.
- You’ll need to create another repo, and more detailed config will require other admin steps.
- Make sure you’re able to use GitHub Actions for builds and Github Packages for artifact hosting.
- Once you get this up and running, you can move builds and config to other CI/CD services and publish artifacts to other back ends (Artifactory, etc), but using GitHub for everything will let you get started very quickly.

## Start The Clock!

### 1) Use Our Template Repo to Create Your Kotlin Repo

We have a starter template project here:

<github org="touchlab" repo="KMMBridgeKickStart"/>

Click “Use Template”, give your repo a name, and create it. It can be public or private.

### 2) Edit GROUP

**Very Important!!!** You’ll need to add a group string to your repo before you can do anything with it. You can open `gradle.properties` and edit `GROUP`. The value for `GROUP` needs to be a valid maven coordinate string. Generally speaking, it should be reverse domain (“com.whatever”) and a name for the project, all lower case.

### 2b) Add a CocoaPods Podspec repo

CocoaPods publishing takes a bit of extra work, so it is disabled by default. If you would like to publish to CocoaPods, you will need to create a podspec repo in GitHub. If you know for sure that you only want SPM, skip to step 3.

Create a repo in your org. We’ll call ours “KotlinPodspecs”. It can be public or private.

**Important!!!** Add at least one commit to this repo. The easiest option is to create a README.

Next, create an SSH key and add it to the deploy keys. Add the private key to secrets, then make sure to edit the Github Actions build file.

[Follow those steps in detail here](https://touchlab.github.io/KMMBridge/cocoapods/COCOAPODS_GITHUB_PODSPEC#create-deploy-keys)

After you configure your keys, add the podspec repo to the `kmmbride` config block in `<your repo>/allshared/build.gradle.kts`:

```kotlin
kmmbridge {
    mavenPublishArtifacts()
    githubReleaseVersions()
    spm() // Delete this line if you don't need SPM
    cocoapods("https://github.com/[your org]/KotlinPodspecs.git") // Add your podspec repo here
}
```

Then, assuming you added the key secret in your Kotlin repo and called it `PODSPEC_SSH_KEY`, open `.github/workflows/All-publish.yml` and uncomment the secret param:

```yaml
name: All Publish
on:
  workflow_dispatch:
jobs:
  call-kmmbridge-publish:
    uses: touchlab/KMMBridgeGithubWorkflow/.github/workflows/faktorybuildbranches.yml@v0.6
    with:
      publishTask: # etc
    secrets:                                            # <- Uncomment this
      PODSPEC_SSH_KEY: ${{ secrets.PODSPEC_SSH_KEY }}   # <- and this
```

Setting up the CocoaPods podspec has a lot of parts, so it is more likely that things will fail here. If you get issues, make sure to come back and check everything in this section!

### 3) Publish A Build

After the repo has been created and `GROUP` has been specified, go to “Actions” and run one of the available CI workflows. They’re both very similar. `KMM Bridge/iOS Publish` will build and publish just the iOS SDK. `All Publish` Will publish iOS and Android binaries. Which you pick kind of depends on some things you need to worry about later, but to make it easy run `All Publish`.

## All Together…

Here is a video showing how to use the template and make a build (without the CocoaPods steps):

<youtube videoUrl="https://www.youtube.com/embed/46hhFJ5YMJs"/>

## Check In #1 (~15 minutes)

Assuming no major surprises, you should have your first build processing. The build will take a fair bit of time. 10-15 minutes.

While the build is running we can set up binary access for iOS.

## WARNING

If you followed those steps and have an error, please reach out to our Kotlin Slack channel [#touchlab-tools](https://kotlinlang.slack.com/archives/CTJB58X7X), or create an issue in the template repo. If you are publishing CocoaPods, please go back through those steps again. Each individual step is easy, but they all need to be perfect 🙂

## Configure Xcode Clients

If your repo is public, you should be able to access the binary that you just published without any auth configuration. If it is private, and in most cases it will be, you’ll need to let Xcode access the binary. There are 2 ways to do that: netrc and Keychain Access.

**Note:** Every user accessing your builds with Xcode will need to do this configuration on their local machine.

You’ll want to generate a Personal Access Token with `repo` access and `read:packages`:

![Screenshot of creating a  new personal access token](https://touchlab.wpenginepowered.com/wp-content/uploads/2022/10/personal-access-token-800x667.png)

That will give you a PAT string. Create or open `~/.netrc`, and add the following:

```shell
machine maven.pkg.github.com
  login [your username]
  password [your PAT]
```

Put your username in the `login` field, and the PAT you just created in the `password` field.

Alternatively, you can use the Mac’s keychain to manage access. See [this blog post for more detail](https://medium.com/geekculture/xcode-13-3-supports-spm-binary-dependency-in-private-github-release-8d60a47d5e45). Also, a big thanks to the author of that post for connecting a lot of the dots for Xcode binary config!

## Check In #2 (~30 minutes-ish)

Check the GitHub Actions panel to see if your build is done. If it is still processing, please wait till it is complete before moving on to the next steps.

## Add the Framework to Xcode

### Swift Package Manager (SPM)

To add your Framework to Xcode with SPM, do the following:

1. Get the GitHub URL from your new repo (I generally copy the clone https URL)
2. In Xcode, go to `File > Add Packages` to open the SPM tool
3. Paste your GitHub URL in the “Search or Enter Package URL”
4. Select your repo and for “Dependency Rule”, select “Up to Next Major Version”. Xcode should auto-detect the version.

Important!!! The sample Kotlin code needs to link to Sqlite on iOS, and the SPM support doesn’t have a way to specify those dependencies yet. You’ll need to open “Build Settings”, find “other linker flags”, and add -lsqlite3.

That’s it! You should be able to import your Kotlin code now. Watch the video to see how to use the SPM library:

<youtube videoUrl="https://www.youtube.com/embed/9A7i7KXM5_o"/>

### CocoaPods

You’ll need to add the podsepc source repo, then include the project. Assuming your local GitHub access is configured, you should just need to edit your `Podfile`.

See [this doc](https://touchlab.github.io/KMMBridge/cocoapods/IOS_COCOAPODS#add-podspec-repo) for more detail.

```ruby
platform :ios, '13.5'
source 'https://github.com/[your org]/KotlinPodspecs.git'

target '[Your iOS app target]' do
  pod 'allshared', '~> 0.1'
end
```

Run `pod install`, then open the `.xcworkspace` file in Xcode.

https://www.youtube.com/embed/AgAByLvUFVY?feature=oembed&amp;amp;wmode=opaque

## Build and Run

In your iOS project, you should be able to create a simple test class to see that everything works together nicely. In our case, we’re using the default `ContentView.swift` from the Xcode SwiftUi template project. First add `import allshared`, get a reference to our SDK `CallbackBreedRepositoryKt.startBreedSDK()`, then say hello `...makeHello().sayHello()`:

```swift
import SwiftUI
import allshared // <- import our new module

struct ContentView: View {
    var body: some View {
        Text(CallbackBreedRepositoryKt.startBreedSDK().makeHello().sayHello()) // <- Say Hello!
            .padding()
    }
}
```

## Final Check In (less than an hour, hopefully 😎)

Congratulations, you’ve now built, published, and consumed iOS Xcode dependencies. That pretty much covers the special sauce of what KMMBridge does. Hopefully, you found that to be quick, useful, and straightforward; please do let us know how your experience was.

For the rest of this post we’ll discuss some Android-side decisions you need to make, then direct you towards next steps.

## Android?

At this point, you need to decide how you’ll access the Android part of the shared Kotlin code. There are 2 basic options: a project module dependency, and a published binary. The choice really depends on how you want to organize your code and edit the Kotlin. A project module dependency generally means you’ll put your KMM code in the same repo as your Android code (I usually recommend this), and a published binary generally means you have your KMM code in it’s own repo.

Right now, you have your code in a separate repo, and if you ran All Publish earlier, you have a published Android AAR binary. For our demo, it was easier to use a template to create a new repo and run the publish workflow for both. We’ll explain how to access the Android binary below.

However, I generally prefer to co-locate the KMM code in the Android repo because that will allow you to access it with a project(“:somemodule”) style dependency, and having the shared code editable in your Android project makes editing KMM simpler and faster. How to set that up will be the subject of future posts, but if you are somewhat familiar with Gradle and Android configuration, it shouldn’t be too difficult to do.

But I digress. To see your KMM code in your Android project, for this demo, you’ll need to add the published AAR binary. Just like your iOS binary, your Android binary has been published to GitHub Packages. You’ll need to tell Gradle about your binary maven repository. In your Android project’s Gradle build file, add the following:

```kotlin
repositories {
  maven {
    name = "GitHubPackages"
    url = "https://maven.pkg.github.com/[your org]/[your repo]"
    credentials {
      username = <username from CI or properties>
      password = <GitHub PAT or CI GitHub Token>
    }
  }
}
```

**Important:** If the repo is public, you can remove the `credentials` block. For private repos, you’ll need to pass in some values for username and password. The password on your local machine will be your GitHub PAT. I generally use Gradle properties and set them externally with `~/.gradle/gradle.properties`.

To add the dependencies, you’ll need the coordinates, which should look something like:

implementation**(**"[Group Id]:analytics-android-debug:0.1"**)**

implementation**(**"[Group Id]:breeds-android-debug:0.1"**)**

To find the exact coordinates, go to your new Kotlin repo, look for “Packages” on the right, and click on the ones ending in `*-android-debug`. (Hint, if you set your group to `com.mygroup`, and changed nothing else, they should be `com.mygroup:analytics-android-debug:0.1` and `com.mygroup:breeds-android-debug:0.1`).

Adding that dependency to your Android build should pull in your new KMM code.

## Next Steps

Here are a few things to check on now that you’re done.

- Check out the [KMMBridge Doc](https://touchlab.github.io/KMMBridge/intro) on GitHub for some more info.
- Join [#touchlab-tools](https://kotlinlang.slack.com/archives/CTJB58X7X) on the KotlinLang slack to discuss with other developers
- Sign up for [our newsletter](https://form.typeform.com/to/MJTpmm) to keep up with our other projects for multiplatform teams
- Apply to become a Touchlab Insider so you can test out tools like this before everyone else