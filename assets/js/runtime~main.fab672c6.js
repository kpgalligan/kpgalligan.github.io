(()=>{"use strict";var e,t,r,o,a,c={},f={};function n(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return c[e].call(r.exports,r,r.exports,n),r.exports}n.m=c,e=[],n.O=(t,r,o,a)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var f=!0,d=0;d<r.length;d++)(!1&a||c>=a)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(f=!1,a<c&&(c=a));if(f){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);n.r(a);var c={};t=t||[null,r({}),r([]),r(r)];for(var f=2&o&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,n.d(a,c),a},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({0:"4a19e2e6",13:"01a85c17",53:"935f2afb",59:"61809400",74:"8cd4be58",75:"18874b20",89:"a6aa9e1f",103:"ccc49370",237:"1df93b7f",269:"54e3e822",449:"f079715b",453:"c2c33197",514:"1be78505",535:"814f3328",589:"6d8d5af3",608:"9e4087bc",610:"6875c492",661:"141dcf82",671:"0e384e19",773:"d8411cbd",799:"f952b53f",846:"710d6d2e",918:"17896441",979:"c7b852d7"}[e]||e)+"."+{0:"b03e9800",13:"419c36ab",53:"654ad641",59:"19bb828b",74:"9df2fd3c",75:"57b3026e",89:"3b74e11c",103:"f21eb484",237:"7fae6de2",269:"3b8bc0af",364:"5698f0d1",449:"f75fb658",453:"595fd317",514:"e30f58ef",535:"7f26505f",589:"94718d03",608:"c27864bd",610:"0a00c103",661:"7a38a7ae",671:"1c0b494c",724:"7f16b940",773:"a7c9b02f",799:"d32ead01",846:"9eacf9b9",918:"776a7313",972:"320d2edb",979:"98a5d660"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="touchlab:",n.l=(e,t,r,c)=>{if(o[e])o[e].push(t);else{var f,d;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var b=i[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==a+r){f=b;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",a+r),f.src=e),o[e]=[t];var l=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),d&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/website/",n.gca=function(e){return e={17896441:"918",61809400:"59","4a19e2e6":"0","01a85c17":"13","935f2afb":"53","8cd4be58":"74","18874b20":"75",a6aa9e1f:"89",ccc49370:"103","1df93b7f":"237","54e3e822":"269",f079715b:"449",c2c33197:"453","1be78505":"514","814f3328":"535","6d8d5af3":"589","9e4087bc":"608","6875c492":"610","141dcf82":"661","0e384e19":"671",d8411cbd:"773",f952b53f:"799","710d6d2e":"846",c7b852d7:"979"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var c=n.p+n.u(t),f=new Error;n.l(c,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",f.name="ChunkLoadError",f.type=a,f.request=c,o[1](f)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,c=r[0],f=r[1],d=r[2],i=0;if(c.some((t=>0!==e[t]))){for(o in f)n.o(f,o)&&(n.m[o]=f[o]);if(d)var u=d(n)}for(t&&t(r);i<c.length;i++)a=c[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunktouchlab=self.webpackChunktouchlab||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();