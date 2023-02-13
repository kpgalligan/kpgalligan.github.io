"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[724],{1986:(e,t,n)=>{n(7294),n(9960),n(4996),n(5999)},1419:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010),r=n(5281),c=n(5130),o=n(7955),s=n(5042);function i(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,c.k)();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,l.Z)(r.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(o.Z,{as:"h1"},n)),a.createElement(s.Z,null,t))}},7887:(e,t,n)=>{n.d(t,{Z:()=>U});var a=n(7294),l=n(6010),r=n(5281),c=n(5130),o=n(5999);function s(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function i(e){let{lastUpdatedBy:t}=e;return a.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function d(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:r.k.common.lastUpdated},a.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(s,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(i,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var m=n(7462);const u="iconEdit_Z9Sw";function f(e){let{className:t,...n}=e;return a.createElement("svg",(0,m.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(u,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function v(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(f,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var p=n(9960);const g="tag_zVej",h="tagRegular_sFm0",E="tagWithCount_h2kH";function b(e){let{permalink:t,label:n,count:r}=e;return a.createElement(p.Z,{href:t,className:(0,l.Z)(g,r?E:h)},n,r&&a.createElement("span",null,r))}const L="tags_jXut",k="tag_QGVx";function N(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(L,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:k},a.createElement(b,{label:t,permalink:n}))}))))}const C="lastUpdated_vwxv";function _(e){return a.createElement("div",{className:(0,l.Z)(r.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(N,e)))}function Z(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:c,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,l.Z)(r.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(v,{editUrl:t})),a.createElement("div",{className:(0,l.Z)("col",C)},(n||c)&&a.createElement(d,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:c})))}function U(){const{metadata:e}=(0,c.k)(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:s,tags:i}=e,d=i.length>0,m=!!(t||n||s);return d||m?a.createElement("footer",{className:(0,l.Z)(r.k.docs.docFooter,"docusaurus-mt-lg")},d&&a.createElement(_,{tags:i}),m&&a.createElement(Z,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:o})):null}},2894:(e,t,n)=>{n(7294),n(125)},8832:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),l=n(5281),r=n(5130),c=n(7462),o=n(6010),s=n(3743);const i="tableOfContents_bqdL";function d(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,o.Z)(i,"thin-scrollbar",t)},a.createElement(s.Z,(0,c.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function m(){const{toc:e,frontMatter:t}=(0,r.k)();return a.createElement(d,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:l.k.docs.docTocDesktop})}},6781:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7294),l=n(6010),r=n(5281),c=n(5130),o=n(6043),s=n(3743),i=n(7462),d=n(5999);const m="tocCollapsibleButton_TO0P",u="tocCollapsibleButtonExpanded_MG3E";function f(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,i.Z)({type:"button"},n,{className:(0,l.Z)("clean-btn",m,!t&&u,n.className)}),a.createElement(d.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const v="tocCollapsible_ETCw",p="tocCollapsibleContent_vkbj",g="tocCollapsibleExpanded_sAul";function h(e){let{toc:t,className:n,minHeadingLevel:r,maxHeadingLevel:c}=e;const{collapsed:i,toggleCollapsed:d}=(0,o.u)({initialState:!0});return a.createElement("div",{className:(0,l.Z)(v,!i&&g,n)},a.createElement(f,{collapsed:i,onClick:d}),a.createElement(o.z,{lazy:!0,className:p,collapsed:i},a.createElement(s.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:c})))}const E="tocMobile_ITEo";function b(){const{toc:e,frontMatter:t}=(0,c.k)();return a.createElement(h,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,l.Z)(r.k.docs.docTocMobile,E)})}},6176:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(7294),l=n(1944),r=n(5130);function c(){const{metadata:e,frontMatter:t,assets:n}=(0,r.k)();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var o=n(9200);function s(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(r.b,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(c,null),a.createElement(o.Z,null,a.createElement(n,null))))}},49:(e,t,n)=>{n(7294),n(5999),n(2244)},4364:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(6010),r=n(5999),c=n(5281),o=n(4477);function s(e){let{className:t}=e;const n=(0,o.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:(e,t,n)=>{n(7294),n(2263),n(9960),n(5999)},3743:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),l=n(7294),r=n(6668);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:c}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),s=i(o,{anchorTopOffset:n.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const f=l.memo(u);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const p=(0,r.L)(),g=d??p.tableOfContents.minHeadingLevel,h=u??p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>o({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:g,maxHeadingLevel:h});return m((0,l.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:g,maxHeadingLevel:h}}),[s,i,g,h])),l.createElement(f,(0,a.Z)({toc:E,className:n,linkClassName:s},v))}},5130:(e,t,n)=>{n.d(t,{b:()=>c,k:()=>o});var a=n(7294),l=n(902);const r=a.createContext(null);function c(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function o(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocProvider");return e}},4477:(e,t,n)=>{n.d(t,{E:()=>o,q:()=>c});var a=n(7294),l=n(902);const r=a.createContext(null);function c(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function o(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);