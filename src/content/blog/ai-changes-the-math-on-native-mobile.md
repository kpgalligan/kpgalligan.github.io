---
title: "AI Changes the Math on Native Mobile"
pubDate: 2026-09-10
author: "Kevin Galligan"
category: "Essays"
excerpt: "Once a feature exists on one platform, an agent can build it on the other. That breaks the platform silo, turns feature parity into something you monitor, and erodes the case for cross-platform frameworks. Shopify's move back to native makes the same argument."
readTime: "9 min read"
---

Mobile is a special case for AI coding for one reason: two apps do the same thing. Once a feature is fully built on one platform, that code is a complete and precise spec for the other, and replicating it with a coding agent is now a relatively small job. That one fact has three consequences. Native mobile engineers have always been platform specialists, and agents let them be productive on the platform they don't know, which will break down the silos between iOS and Android teams that nothing else has managed to break. Keeping two apps in sync stops being a manual chase, because agents can continuously analyze both codebases, flag where features have drifted apart, and produce the fix. And with those two problems largely handled, the central argument for cross-platform frameworks like React Native and Flutter, that you only build it once, loses most of its force.

Today Shopify published a post titled [Native is now the future of mobile at Shopify](https://shopify.engineering/back-to-native). They are moving every one of their mobile apps from React Native to Swift and Kotlin. Shopify went all in on React Native in 2020, invested heavily in the ecosystem, and still describe that bet as extremely successful. Their reason for reversing it is the one above: coding agents changed the cost of building the same feature twice. Coming from the company most associated with React Native at scale, that carries real weight, and I expect it to accelerate a shift the industry was going to make anyway. It is also the problem we are building for. [Parive](https://parive.ai/) shows teams exactly where and when their iOS and Android apps have drifted, and it is built to port apps from React Native or Flutter to native and then keep the resulting pair in sync. The rest of this post expands on each of these points. I gave a longer version as [a talk at droidcon USA in July](/blog/native-mobile-and-ai-droidcon-usa-2026), if you prefer video.

## The first platform is the spec

General AI coding is turning natural language into code. How well it works depends on how well the project is set up and how well the model guesses at everything you didn't specify. Spec-driven development was a reaction to that gap, and some of the specs got so detailed that writing the code would have been faster. Code is already a precise, complete spec. It just happens to be written for a machine.

Mobile gets that spec for free. Whatever you build first, in Kotlin or Swift, defines the feature in full: every state, every edge case, every analytics event, every awkward compromise the product team argued about. Translating a complete implementation is a very different task from inventing one, and language models are excellent translators. They know both platforms' idioms and libraries better than most developers know the platform they don't work on.

The numbers have moved quickly. In early 2025 we ported a roughly 100,000 line iOS codebase, not especially well structured, using off-the-shelf tools of the Sonnet 3.7 era. It took about six weeks of handholding, against an estimate of six months to do it by hand. This summer a similar-sized app took about a week, one person, with no hand-written code until some UI tweaks at the end, using multimodal image comparison to close the visual gaps.

Shopify's experience with the Shop app follows the same curve. One engineer working with agents had a working native iOS proof of concept in a week. Twelve weeks later the rebuilt native apps were in the stores. Their write-up includes the line that matters most: "agents were particularly effective when they had an existing implementation to work from." That is the whole premise.

The standard objection is that the output will be slop. It can be. It isn't when the project is set up well and the output is verified, and verification is where the real engineering now goes. Shopify built a review loop that requires each checkpoint to prove behavior with tests, match the running app in a visual comparison, survive two adversarial code reviewers, and get human approval before the next phase starts. It assumes the first attempt is wrong and refuses to move on until it isn't. That is the right mental model. Not "trust the agent," but "make verification cheap enough that you don't have to."

## Specialists and silos

Native mobile engineers are specialists for good reasons. Each platform has its own language, IDE, UI toolkit, concurrency model, and a long list of lifecycle quirks you only learn by being burned. For close to twenty years people have called for breaking down the silos between iOS and Android teams, and most organizations above a certain size still have them. The calls mostly misunderstood why the silos exist. Specialists exist in every field because depth matters.

What changes is where the depth is needed. Almost all the code I produce at the moment is TypeScript, a language I would fail a whiteboard interview in. An Android developer may never write Swift to an iOS team's standard, but they can read it, and reading and reviewing is a different job from writing. With an agent doing the writing, a developer can carry a feature across to the other platform without becoming an expert in it. Shopify describes the same effect: agents let developers contribute outside their primary areas of expertise.

This doesn't eliminate the specialist. Someone still has to know what good looks like on each platform, and that person is the reviewer. But a feature no longer waits for the other platform's team to have capacity, and the person who understands the feature best can be the one who moves it.

## Parity becomes something you monitor

Porting is the visible problem. The larger one is what happens afterward. Two apps, two teams, two release trains, and within months the apps quietly differ: a validation rule added on Android, an empty state redesigned on iOS, an analytics event that fires with different parameters. Agents make this worse before they make it better, because a team that [ships faster drifts faster](https://parive.ai/blog/you-ship-faster-you-drift-faster/). Traditionally you find out from a bug report, a support ticket, or a product manager's spreadsheet.

Agents change this because analysis becomes cheap and repeatable. To a user, an app is screens and features. In code, it is a pile of views and view models that differ per platform. It is now practical to normalize both codebases into a feature-level description, compare them, rank the differences by how much they matter, trace the git history to find out how each gap opened, and produce a plan a coding agent can execute. Run that on a schedule and drift gets caught while it is still small.

Shopify's Shop team built tooling that captures screenshots and event windows from both apps at named checkpoints and compares them, and their post states the rule plainly: Android and iOS must be at feature parity at all times. Parity stops being a goal you chase and becomes a property you check.

## What this does to cross-platform

The pitch for React Native and Flutter has always been the same: build it once. Everything else, the JavaScript ecosystem, hot reload, web developers contributing to the app, is secondary. If native apps can be built and kept in sync for a similar effort, who chooses cross-platform? Given the choice, most users and most product people prefer native. Shopify's numbers for the rebuilt Shop app show why:

- iOS startup 23% faster, Android startup 50% faster
- Crash-free sessions from 99.5% to 99.95%, roughly a tenfold reduction in crashes
- Android app size down 37%

None of that is React Native failing. It is what you get from removing a layer. A design partner of ours, on a team moving off React Native, put it well: "React Native is an elegant solution to an old problem."

Some honesty is due here. Two codebases is still two codebases. Translating is cheap, but it isn't free, and the cost is weight and risk rather than tokens. Translated code needs verification that genuinely shared code doesn't. Shopify says the same thing: native still means building and maintaining software on two platforms, and that cost has not disappeared. What changed is that it is no longer the deciding factor. React Native also isn't going away. Shopify calls it an excellent framework, anecdotally the traffic still runs in both directions, and there are teams where the web-skills argument outweighs the native one. Predictions about mobile tooling have a poor track record, mine included.

The same question gets asked of Kotlin Multiplatform, and the answer is more complicated, because shared code sidesteps the verification problem entirely. I spent a good part of the talk on it and will leave it there.

## Why Shopify matters

Shopify did not dabble in React Native. After the 2020 decision, hundreds of their engineers worked in it over six years. They migrated their largest app to it and wrote about the process in detail. They built and maintained FlashList, which sees around two million downloads a week, along with React Native Skia and Restyle. If any company had the sunk cost and the community standing to keep going, it was this one.

They are now moving everything. Shop is done. The Shopify app, with more than 300 screens plus widgets, a watch app, and Siri shortcuts, ships native later this year. Point of Sale and Inbox follow. Their explanation is a single sentence: "LLMs changed one of the core assumptions behind our 2020 decision, so we reevaluated our mobile stack from first principles."

It is worth looking at what that 2020 decision was for. Shopify lists three goals: stop building the same features twice, let developers work across the stack, and spend less time on feature parity. Those are exactly the three things this post argues agents now address natively. The framework didn't stop delivering on them. The problems it was solving got cheaper to solve another way.

Teams follow the large microphones. When the reference example for "we went all in on React Native and it worked" says the math has changed, teams that were on the fence will start doing their own math. The shift would happen regardless as the tools spread through the industry. A post like this compresses the timeline.

## What we're building

We started with a port tool that moved a large production app in one long run. Then we realized the harder and more valuable problem is what happens after: keeping two apps in sync for years. That became [Parive](https://parive.ai/).

Parive reads both native codebases and lines them up: every screen, feature, and behavior, aligned concept by concept, with a severity on each difference and evidence from your commit history showing where and when the drift happened. The same analysis produces documentation most teams have never had: a full inventory of both apps, covering screens, features, a domain dictionary, and user stories, each traceable back to source and refreshed as new features land. From there you pick a difference worth closing, a planning agent builds the plan, and an implementation agent writes the code and tests. What comes out is reviewable work: a plan you approved, a diff you can read, and tests that prove behavior parity. If you would rather keep people on the keyboard, assign the approved plan to an engineer instead.

The same machinery applies to teams moving off React Native or Flutter. The cross-platform app is the spec, the port produces a native pair, and the parity analysis is what keeps that pair aligned once the framework is gone.

The analysis is running in a [public preview](https://preview.parive.ai/app) against Wikipedia's open-source iOS and Android apps, with real code and no signup. The planning and implementation agents run in private demos for now. We are also working with [a small group of design partners](https://parive.ai/#design-partner) who have native iOS and Android in production. If that describes your team, or you have a React Native or Flutter app you are considering moving, we would like to talk.
