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

<tlNewsletter/>