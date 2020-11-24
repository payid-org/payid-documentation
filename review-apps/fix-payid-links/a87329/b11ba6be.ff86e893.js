(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(r),m=a,d=l["".concat(o,".").concat(m)]||l[m]||u[m]||i;return r?n.a.createElement(d,c(c({ref:t},p),{},{components:r})):n.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(7),i=(r(0),r(100)),o={id:"community-resources",title:"Community Resources",sidebar_label:"Community Resources"},c={unversionedId:"community-resources",id:"community-resources",isDocsHomePage:!1,title:"Community Resources",description:"Members of the PayID community have created useful resources for using and learning about PayID.",source:"@site/docs/community-resources.md",permalink:"/payid-documentation/review-apps/fix-payid-links/a87329/community-resources",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/community-resources.md",sidebar_label:"Community Resources",sidebar:"docs",previous:{title:"Use RippleX Dev Kit With PayID",permalink:"/payid-documentation/review-apps/fix-payid-links/a87329/ripplex-dev-kit-payid"},next:{title:"Release Notes",permalink:"/payid-documentation/review-apps/fix-payid-links/a87329/release-notes"}},s=[],p={rightToc:s};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Members of the PayID community have created useful resources for using and learning about PayID."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tutorials")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=gpLJp1lylns"}),"PayID Youtube Tutorial by Ken Carabello"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Validators")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://payidvalidator.com/"}),"PayID Validator")," - An ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rswarthout/payid-validator"}),"open-source project")," that validates responses using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.payid.org/payid-interfaces"}),"JSON schemas")," and verifies whether your PayID server follows various ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"payid-best-practices"}),"best practices"),", like:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"payid-headers"}),"HTTP response headers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"payid-best-practices#cache-control"}),"Cache-Control")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"payid-best-practices#set-cors-cross-origin-resource-sharing-headers"}),"CORS accessibility")),Object(i.b)("li",{parentName:"ul"},"Response time"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/RockHoward/python-payid-validator"}),"Python-based PayID validator")," - Validates URI strings to determine if they are valid PayIDs."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"PayID server implementations")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/RockHoward/django-payid-server"}),"Django PayID Server")," - A Django-based PayID server."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/WietseWind/PayID-Static"}),"PayID Static")," - A Node.js PayID server with static configuration (easy to use on Heroku).")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Community resources")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.reddit.com/r/PayIdDevs/"}),"PayID subreddit")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://chat.payid.org"}),"PayID Discord channel"))))}b.isMDXComponent=!0}}]);