"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[570],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={image:"/img/open-source-updates-v1.png",authors:["kpgalligan"]},i="Open Source Updates",s={permalink:"/blog/2023/3/10/oss-updates",editUrl:"https://github.com/kpgalligan/kpgalligan.github.io/tree/main/website/blog/2023-3-10-oss-updates.md",source:"@site/blog/2023-3-10-oss-updates.md",title:"Open Source Updates",description:"We've been heads down for the last few months working on our new professional offerings: SKIE and Touchlab Pro. We'll be posting about them soon. While that work has been the major focus, our open source projects have been mostly getting critical updates. As our new projects have been nearing release, we've finished a bunch of updates to our open source libraries.",date:"2023-03-10T00:00:00.000Z",formattedDate:"March 10, 2023",tags:[],readingTime:5.31,hasTruncateMarker:!0,authors:[{name:"Kevin Galligan",title:"Touchlab person",url:"https://www.kgalligan.com",imageURL:"https://github.com/kpgalligan.png",key:"kpgalligan"}],frontMatter:{image:"/img/open-source-updates-v1.png",authors:["kpgalligan"]},nextItem:{title:"Medical Update",permalink:"/blog/2023/02/28/medical-update"}},l={authorsImageUrls:[void 0]},p=[{value:"KMMBridge",id:"kmmbridge",level:2},{value:"Kermit",id:"kermit",level:2},{value:"New API",id:"new-api",level:3},{value:"Custom API",id:"custom-api",level:3},{value:"Website Update",id:"website-update",level:3},{value:"CrashKiOS",id:"crashkios",level:2},{value:"Changes",id:"changes",level:3},{value:"New Website",id:"new-website",level:3},{value:"Stately",id:"stately",level:2},{value:"What Now?",id:"what-now",level:3},{value:"Documentation Sites",id:"documentation-sites",level:2}],u={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We've been heads down for the last few months working on our new professional offerings: ",(0,n.kt)("a",{parentName:"p",href:"https://get.touchlab.co/skie-touchlab-pro/"},"SKIE and Touchlab Pro"),". We'll be posting about them soon. While that work has been the major focus, our open source projects have been mostly getting critical updates. As our new projects have been nearing release, we've finished a bunch of updates to our open source libraries."),(0,n.kt)("h2",{id:"kmmbridge"},(0,n.kt)("a",{parentName:"h2",href:"https://kmmbridge.touchlab.co/"},"KMMBridge")),(0,n.kt)("p",null,"We've had a few tweaks and updates pending for some time. Those have been pushed with version ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/touchlab/KMMBridge/releases/tag/0.3.7"},"0.3.7"),"."),(0,n.kt)("p",null,"One of the less visible but really important changes is a flag that disables a lot of the \"stuff\" that needs to happen when actually publishing versions. If you opened a project with earlier versions of KMMBridge on a dev machine, several things might happen in the background that really don't need to. Now they won't."),(0,n.kt)("p",null,"Also, if you happen to use S3 as your publish target, there's a bug in the default AWS SDK. This version should fix that for you."),(0,n.kt)("p",null,"Finally, the website has been updated: ",(0,n.kt)("a",{parentName:"p",href:"https://kmmbridge.touchlab.co/"},"kmmbridge.touchlab.co")),(0,n.kt)("h2",{id:"kermit"},(0,n.kt)("a",{parentName:"h2",href:"https://kermit.touchlab.co/"},"Kermit")),(0,n.kt)("p",null,"Kermit's API has gone through a fairly significant update. We've released ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/touchlab/Kermit/releases/tag/2.0.0-RC3"},"2.0.0-RC3")," with the new changes. Feedback is welcome."),(0,n.kt)("h3",{id:"new-api"},"New API"),(0,n.kt)("p",null,"1.x versions had a ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," API that was designed to be called from non-Kotlin environments. For the most part, that meant avoiding default parameters. However, the primary use case is calling from Kotlin. The primary ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," API was updated to be (mostly) source compatible, but now include simpler method definitions with default parameters."),(0,n.kt)("p",null,"In simple terms, that means all log calls can have message, a ",(0,n.kt)("inlineCode",{parentName:"p"},"Throwable"),", and a tag specified."),(0,n.kt)("p",null,"For non-Kotlin environments such as Swift and JS, you can export ",(0,n.kt)("inlineCode",{parentName:"p"},"kermit-simple"),", which provides extension methods to make calling less verbose from those environments (without default parameter support, you'd need to provide each value on each call)."),(0,n.kt)("h3",{id:"custom-api"},"Custom API"),(0,n.kt)("p",null,"We had a lot of feedback about Kermit's API decisions since releasing it. Some has been incorporated, but some is really just personal preference. For example, full names instead of single letter methods for logging calls (",(0,n.kt)("inlineCode",{parentName:"p"},"info()")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"i()"),"). You can't make everybody happy."),(0,n.kt)("p",null,"However, most of the functionality has been moved to the module ",(0,n.kt)("inlineCode",{parentName:"p"},"kermit-core"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"kemrit")," module is now fairly small, and just represents the public ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," API. That means you can add your own ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," API on top of the Kermit internals. See ",(0,n.kt)("a",{parentName:"p",href:"https://kermit.touchlab.co/docs/details/CUSTOM_API"},"Custom Logger API")," for more detail."),(0,n.kt)("h3",{id:"website-update"},"Website Update"),(0,n.kt)("p",null,"And, of course, the website has been updated: ",(0,n.kt)("a",{parentName:"p",href:"https://kermit.touchlab.co/"},"kermit.touchlab.co")),(0,n.kt)("h2",{id:"crashkios"},(0,n.kt)("a",{parentName:"h2",href:"https://crashkios.touchlab.co/"},"CrashKiOS")),(0,n.kt)("p",null,"CrashKiOS has had an interesting history. The library allows Crashlytics and Bugsnag to report symbolicated Kotlin crash reports on iOS (and other Darwin/Apple targets). Most of this functionality was moved into Kermit as we had several requests to support Kermit integration."),(0,n.kt)("h3",{id:"changes"},"Changes"),(0,n.kt)("p",null,"However, crash reporting has other features unrelated to logging, such as custom key/value pairs, and automatically catching hard crashes. Also, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rickclephas/NSExceptionKt"},"NSExceptionKt")," tweaked the method being used for reporting hard crashes. This allows reports to be consolidated rather than the earlier dual report method."),(0,n.kt)("p",null,"The crash reporting details from Kermit have been moved back into CrashKiOS, and various parts of ",(0,n.kt)("inlineCode",{parentName:"p"},"NSExceptionKt")," have been integrated, to support crash reporting as a standalone library again. Kermit's support has been simplified. You can add log writers for Crashlytics or Bugsnag, but they both delegate to CrashKiOS."),(0,n.kt)("h3",{id:"new-website"},"New Website"),(0,n.kt)("p",null,"Website also updated: ",(0,n.kt)("a",{parentName:"p",href:"https://crashkios.touchlab.co/"},"crashkios.touchlab.co")),(0,n.kt)("h2",{id:"stately"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/touchlab/Stately"},"Stately")),(0,n.kt)("p",null,"Stately was designed to help developers work with the original strict memory model of Kotlin/Native. That memory model has been deprecated. We've released ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/touchlab/Stately/releases/tag/1.2.5"},"one last version of the original Stately")," built on 1.8.0, for teams that aren't ready to update everything and who would like to continue using Stately as it was in earlier Kotlin versions."),(0,n.kt)("h3",{id:"what-now"},"What Now?"),(0,n.kt)("p",null,"Since the strict memory model has been deprecated, Stately's future has been up in the air. We internally still find some of the concurrency pieces useful, and with the new memory model, there are some utility classes we wanted to have available. It is likely that newer libraries will better handle these cases in the future, but we've added them to Stately for now."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stately-concurrency")," contains structures like locks and atomics. There is functionality similar to Atomic-Fu, and we may eventually deprecate this support in Stately, but for now we continue to use it in our projects."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stately-strict")," contains shared definitions of things like ",(0,n.kt)("inlineCode",{parentName:"p"},"freeze()"),". This is only for use in projects that still have this code in their projects and don't want to remove it. Most projects will be running on the new memory model, and ",(0,n.kt)("inlineCode",{parentName:"p"},"freeze()")," won't really do anything."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stately-concurrent-collections")," is a simple implementation of thread-safe collections. We anticipate somebody will eventually release something more robust, but for now, you can easily include this module to have shared collections in your project."),(0,n.kt)("p",null,"Stately did ",(0,n.kt)("em",{parentName:"p"},"not")," get a website refresh. The future utility of Stately is up in the air, so we didn't prioritize the website update."),(0,n.kt)("h2",{id:"documentation-sites"},"Documentation Sites"),(0,n.kt)("p",null,"We've moved several of our open source projects' documentation to ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". I have been pretty skeptical of these kinds of site generators, but finally took a look at Docusaurus after several team members mentioned it as an option."),(0,n.kt)("p",null,"It is one of my favorite things now. I've even moved my personal site to Docusaurus, just for the blog."),(0,n.kt)("p",null,"There's too much going on to explain ",(0,n.kt)("em",{parentName:"p"},"why")," I love it, but some highlights (some Docusaurus-specific, some just neat hacks)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Docusaurus let's you create custom react components and use them directly in markdown, so we can extend the markdown syntax easily"),(0,n.kt)("li",{parentName:"ul"},"Dark and light mode"),(0,n.kt)("li",{parentName:"ul"},"Code style is highly customizable. Kotlin code has Intellij/Android Studio colors, while Swift looks like Xcode (see ",(0,n.kt)("a",{parentName:"li",href:"https://kermit.touchlab.co/docs/configuration/NON_KOTLIN"},"Kermit docs"),")"),(0,n.kt)("li",{parentName:"ul"},"Our doc build process auto-replaces version strings into code samples. This isn't Dosusaurus specific, but a nice add on. The CI process gets the latest published release string and replaces a template string in the markdown. Anything in ",(0,n.kt)("inlineCode",{parentName:"li"},"gradle.properties")," can be swapped as well.")),(0,n.kt)("p",null,"It's easy to tweak and extend. It's just great."),(0,n.kt)("p",null,"The home page of each doc site is now using a simple react template (from ",(0,n.kt)("a",{parentName:"p",href:"https://cruip.com/"},"cruip.com"),"). That uses tailwind CSS, which is the other new (to me) web thing I'm in love with now. Although there's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/2961"},"been discussion"),", Docusaurus doesn't have a tailwind theme, so the CSS is bit of a blended hack. Once you get started, though, its really easy to develop with it."))}h.isMDXComponent=!0}}]);