---
title: "AI Changes the Math on Native Mobile"
pubDate: 2026-09-10
author: "Kevin Galligan"
category: "Essays"
excerpt: "Once a feature exists on one platform, an agent can build it on the other. That breaks the platform silo, turns feature parity into something you monitor, and erodes the case for cross-platform frameworks. Shopify's move back to native makes the same argument."
---

Mobile is a special case for AI coding for one basic reason: **there are two apps, on two platforms, that are generally the same product**. If built as native apps, you have two entirely different implementations of the same thing.

That reality, as well as what AI coding enables, means massive change is potentially coming to mobile development.

The core observations:
- Feature implementations on one platform can serve as a precise spec for the same feature on the other platform, and LLMs are amazing at porting code between languages/platforms.
- LLMs and agents can be used to evaluate and monitor feature parity between platforms, and make alignment dramatically more efficient.
- Developers using agents can be very productive implementing code with platforms and languages they are less familiar with.

The potential implications:
- Cross-platform frameworks reduce code volume and feature drift at the expense of UX quality. AI erodes that value proposition.
- Native mobile teams have remained siloed platform specialists throughout the history of modern native mobile. That situation may finally change.
- AI can assist with overall quality in many ways. A prime example: analytics fidelity. Most or all native mobile app teams struggle to ensure analytics data matches across apps.

We've been working on agent tooling to support native mobile development for the last year+. The underlying models and harnesses have improved dramatically in that time, and the concept is finally going mainstream. I gave [a talk at droidcon USA in July](/blog/native-mobile-and-ai-droidcon-usa-2026) about this topic, and will be giving an updated version at [next.app Berlin](https://www.nextappcon.com/agenda) in a few weeks (Oct 7, 12pm).

This post will outline the basic points from the talk. The new talk will lean a bit more into the cross-platform discussion and how this topic is rapidly taking off.

Shopify published a post titled [Native is now the future of mobile at Shopify](https://shopify.engineering/back-to-native). They are moving every one of their mobile apps from React Native to Swift and Kotlin. Shopify went all in on React Native in 2020, invested heavily in the ecosystem, and still describe that bet as extremely successful. The post, and their reasons for switching, all seem very familiar to me. AI is changing the cost/benefit comparison. Developers can break out of their silos. It just makes sense. I'm surprised, but also excited, to see such a decisive choice from such a big player. I expected the impact of AI on mobile to take a fairly long time, as that's how general consensus works, but I expect this move to cut that timeline significantly. It'll certainly shift my slides for the Berlin talk :)

## The first platform is the spec

General AI coding is turning natural language into code. How well it works depends on how well the project is set up and how well the model guesses at everything you didn't specify. Various approaches are used to improve how well AI agents can build exactly what you want. Spec-driven development is a good example. It seemed huge last year. Content and products focused on spec-driven development appeared everywhere. If you can have a highly detailed spec, you don't leave much for the LLM to guess about.

That's a logical approach. Of course, in many cases, the spec looked so verbose it seemed like you'd be better off just writing code. But that's a whole different discussion. Detailed spec means better result.

In the case of native mobile, if the first platform has a feature implemented, that's the spec. It's code. Fully functional. Presumably correct. Architecture, edge cases, error states. All of the conversations and compromises made with the product team, designers, backend engineers. That work is all done.

If you have a new checkout screen in iOS, an agent can read that and design the equivalent for Android. The agent needs to follow best practice, both for general Android and team specific rules. But that's just general AI coding skill. All projects should have that configured.

The first product we worked on at Ntive was designed to port an entire app between platforms, using a highly structured approach to deal with scale. One of our production test apps had a Swift line count in the low 6 figures. The port ran for about a week, largely automated. By the end, the app was fully functional, without any manual coding. The only manual work involved some UI polish.

The standard objection is that the output will be slop. It can be, but only if you let it. Any sigificant project needs clear context and guidance, and output verification is a priority. Verification of functionality and quality are the real problems to solve with any agentic coding. Generating code isn't the hard part.

## Specialists and silos

I started working with Android [before there were phones](https://en.wikipedia.org/wiki/Android_Developer_Challenge#Android_Developer_Challenge_I). I've spent considerable time working with the community. From the beginning until today, virtually all teams have been staffed by platform specialists. iOS or Android devs. And from the beginning, there have been calls to break those silos.

I [wrote](https://touchlab.co/kmp-teams-piloting-vs-scaling#merging-teams) [a lot](https://touchlab.co/kmp-teams-scaling-is-hard?ti=305BD8E2A72140F996E83C8B89) about why merging mobile teams was hard back when I was trying to figure out why KMP wasn't really scaling. I'll skip the verbose details.

In summary: native mobile developers are specialists for the same reason any profession has specialists. The complexity of the domain requires deep knowledge and ongoing practice to remain efficient and proficient. That's it.

The current frontier models have that deep knowledge. The situation has changed dramaitcally over the past year or so. Not just for mobile, but quite a few domains. As an engineer, I'd struggle to write professional-grade code in a language and platform that I'm unfamiliar with. But I can read pretty much anything and understand what it's doing. Again, if your project context is maintained, and you have good automated verification, contributing to projects on unfamiliar platforms becomes feasible.

None of this means teams don't need specialists. Trying to ship complex, production code without professionals who know what they're doing would be beyond risky. But most day-to-day work doesn't require that level of specialization. The counter-arguments often get taken to their logical extremes. But most application work generally involves implementing virtually identical features. Often with common design systems.

The obvious benefit of "breaking the silos" is having the same engineer implementing a feature on both platforms. There's much less knowledge transfer required, and significantly reduced opportunity for feature drift. AI is going to enable that reality. Something that almost 20 years of debate never accomplished.

## Parity becomes something you monitor

Two separate implementations of the same product has always had the obvious problem of parity. Do these two apps actually do the same thing? Not just basic features, but error states, edge cases, etc. Native mobile teams have had to develop ceremony and process to mitigate the issue, yet verifying it has always been a painful, time-consuming process.

AI analysis has the potential to automate this situation as well. It is currently one of the problems we're focused on with [Parive](https://parive.ai/). A clear breakdown of app features, and where they drift. Parive intends to solve many other problems. Comprehensive, automated test coverage. Analytics alignment. Anything that a deep comparison between apps can resolve.

The core issue of parity highlights one of the reasons teams chose cross-platform solutions. It's not just a reduction of code and development effort. A single codebase prevents feature drift through a mechanical constraint. That constraint introduced compromises. AI prevents feature drift though automation.

## What this does to cross-platform

The promise of cross platform was always a single codebase, (hopefully) reduced developer effort, a single team, and feature parity enforced by constraint. The tradeoff was always risk and UX compromise.

AI can adress these problems through automation. AI usage can get expensive, but the vast majority of that expense seems to be inefficient use of the technology. Used efficiently, AI is incredibly cheap relative to human labor. The kind of work I'm talking about here is also tedious and error-prone.

The question becomes, if you can build native apps as efficiently as cross-platform apps, how does that impact product decisions?

We'll see. But the Shopify move is going to be, I think, a huge catalyst for change in many product teams.

## Parive and cross-platform transformations

Parive's analysis, in summary, catalogs the features and user stories of an app. It does so in an apples-to-apples way across incompatible languages and frameworks. That works across Android and iOS, but also React Native, Flutter or any other platform it has been tuned to analyze. One of the major goals is to catalog and compare feature parity as apps are ported from cross-platform to native.

Any such conversion is a huge risk. In a pre-AI world, you'd have native specialists attempting to port code from a cross-platform framework they aren't familiar with, and those teams doing so independently. For the reasons discussed above, AI fundamentally changes that work.

It's an idea I've been obsessed with since first using coding agents. Shopify going all in will open the flood gates, and quickly.

## CTA

We're looking for Parive design partners who want their mobile code bases analyzed and cataloged. We have the core tech, but need to iterate on the product. If interested, [reach out](https://parive.ai/#design-partner).
