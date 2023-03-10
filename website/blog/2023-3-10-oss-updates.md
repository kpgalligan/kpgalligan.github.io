---
image: /img/open-source-updates-v1.png
authors: [kpgalligan]
---

# Open Source Updates

We've been heads down for the last few months working on our new professional offerings: [SKIE and Touchlab Pro](https://get.touchlab.co/skie-touchlab-pro/). We'll be posting about them soon. While that work has been the major focus, our open source projects have been mostly getting critical updates. As our new projects have been nearing release, we've finished a bunch of updates to our open source libraries.

<!--truncate-->

## [KMMBridge](https://kmmbridge.touchlab.co/)

We've had a few tweaks and updates pending for some time. Those have been pushed with version [0.3.7](https://github.com/touchlab/KMMBridge/releases/tag/0.3.7).

One of the less visible but really important changes is a flag that disables a lot of the "stuff" that needs to happen when actually publishing versions. If you opened a project with earlier versions of KMMBridge on a dev machine, several things might happen in the background that really don't need to. Now they won't.

Also, if you happen to use S3 as your publish target, there's a bug in the default AWS SDK. This version should fix that for you.

Finally, the website has been updated: [kmmbridge.touchlab.co](https://kmmbridge.touchlab.co/)

## [Kermit](https://kermit.touchlab.co/)

Kermit's API has gone through a fairly significant update. We've released [2.0.0-RC3](https://github.com/touchlab/Kermit/releases/tag/2.0.0-RC3) with the new changes. Feedback is welcome.

### New API

1.x versions had a `Logger` API that was designed to be called from non-Kotlin environments. For the most part, that meant avoiding default parameters. However, the primary use case is calling from Kotlin. The primary `Logger` API was updated to be (mostly) source compatible, but now include simpler method definitions with default parameters.

In simple terms, that means all log calls can have message, a `Throwable`, and a tag specified.

For non-Kotlin environments such as Swift and JS, you can export `kermit-simple`, which provides extension methods to make calling less verbose from those environments (without default parameter support, you'd need to provide each value on each call).

### Custom API

We had a lot of feedback about Kermit's API decisions since releasing it. Some has been incorporated, but some is really just personal preference. For example, full names instead of single letter methods for logging calls (`info()` instead of `i()`). You can't make everybody happy.

However, most of the functionality has been moved to the module `kermit-core`. The `kemrit` module is now fairly small, and just represents the public `Logger` API. That means you can add your own `Logger` API on top of the Kermit internals. See [Custom Logger API](https://kermit.touchlab.co/docs/details/CUSTOM_API) for more detail.

### Website Update

And, of course, the website has been updated: [kermit.touchlab.co](https://kermit.touchlab.co/)

## [CrashKiOS](https://crashkios.touchlab.co/)

CrashKiOS has had an interesting history. The library allows Crashlytics and Bugsnag to report symbolicated Kotlin crash reports on iOS (and other Darwin/Apple targets). Most of this functionality was moved into Kermit as we had several requests to support Kermit integration.

### Changes

However, crash reporting has other features unrelated to logging, such as custom key/value pairs, and automatically catching hard crashes. Also, [NSExceptionKt](https://github.com/rickclephas/NSExceptionKt) tweaked the method being used for reporting hard crashes. This allows reports to be consolidated rather than the earlier dual report method.

The crash reporting details from Kermit have been moved back into CrashKiOS, and various parts of `NSExceptionKt` have been integrated, to support crash reporting as a standalone library again. Kermit's support has been simplified. You can add log writers for Crashlytics or Bugsnag, but they both delegate to CrashKiOS.

### New Website

Website also updated: [crashkios.touchlab.co](https://crashkios.touchlab.co/)

## [Stately](https://github.com/touchlab/Stately)

Stately was designed to help developers work with the original strict memory model of Kotlin/Native. That memory model has been deprecated. We've released [one last version of the original Stately](https://github.com/touchlab/Stately/releases/tag/1.2.5) built on 1.8.0, for teams that aren't ready to update everything and who would like to continue using Stately as it was in earlier Kotlin versions.

### What Now?

Since the strict memory model has been deprecated, Stately's future has been up in the air. We internally still find some of the concurrency pieces useful, and with the new memory model, there are some utility classes we wanted to have available. It is likely that newer libraries will better handle these cases in the future, but we've added them to Stately for now.

`stately-concurrency` contains structures like locks and atomics. There is functionality similar to Atomic-Fu, and we may eventually deprecate this support in Stately, but for now we continue to use it in our projects.

`stately-strict` contains shared definitions of things like `freeze()`. This is only for use in projects that still have this code in their projects and don't want to remove it. Most projects will be running on the new memory model, and `freeze()` won't really do anything.

`stately-concurrent-collections` is a simple implementation of thread-safe collections. We anticipate somebody will eventually release something more robust, but for now, you can easily include this module to have shared collections in your project.

Stately did *not* get a website refresh. The future utility of Stately is up in the air, so we didn't prioritize the website update.

## Documentation Sites

We've moved several of our open source projects' documentation to [Docusaurus](https://docusaurus.io/). I have been pretty skeptical of these kinds of site generators, but finally took a look at Docusaurus after several team members mentioned it as an option.

It is one of my favorite things now. I've even moved my personal site to Docusaurus, just for the blog.

There's too much going on to explain *why* I love it, but some highlights (some Docusaurus-specific, some just neat hacks)

* Docusaurus let's you create custom react components and use them directly in markdown, so we can extend the markdown syntax easily
* Dark and light mode
* Code style is highly customizable. Kotlin code has Intellij/Android Studio colors, while Swift looks like Xcode (see [Kermit docs](https://kermit.touchlab.co/docs/configuration/NON_KOTLIN))
* Our doc build process auto-replaces version strings into code samples. This isn't Dosusaurus specific, but a nice add on. The CI process gets the latest published release string and replaces a template string in the markdown. Anything in `gradle.properties` can be swapped as well.

It's easy to tweak and extend. It's just great.

The home page of each doc site is now using a simple react template (from [cruip.com](https://cruip.com/)). That uses tailwind CSS, which is the other new (to me) web thing I'm in love with now. Although there's [been discussion](https://github.com/facebook/docusaurus/issues/2961), Docusaurus doesn't have a tailwind theme, so the CSS is bit of a blended hack. Once you get started, though, its really easy to develop with it.
