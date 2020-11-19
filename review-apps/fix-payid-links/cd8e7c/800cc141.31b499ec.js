(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),o=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=o(a),m=n,j=p["".concat(c,".").concat(m)]||p[m]||O[m]||b;return a?r.a.createElement(j,l(l({ref:t},d),{},{components:a})):r.a.createElement(j,l({ref:t},d))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var d=2;d<b;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(7),b=(a(0),a(100)),c={id:"payid-cli-reference",title:"PayID CLI Reference",sidebar_label:"PayID CLI Reference"},l={unversionedId:"payid-cli-reference",id:"payid-cli-reference",isDocsHomePage:!1,title:"PayID CLI Reference",description:"Use these commands with PayID CLI. See PayID CLI for setup information.",source:"@site/docs/payid-cli-reference.md",permalink:"/payid-documentation/review-apps/fix-payid-links/cd8e7c/payid-cli-reference",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/payid-cli-reference.md",sidebar_label:"PayID CLI Reference",sidebar:"docs",previous:{title:"API Reference",permalink:"/payid-documentation/review-apps/fix-payid-links/cd8e7c/api-reference"},next:{title:"Headers",permalink:"/payid-documentation/review-apps/fix-payid-links/cd8e7c/payid-headers"}},i=[],d={rightToc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Use these commands with PayID CLI. See ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"payid-cli"}),"PayID CLI")," for setup information."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Command"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"help [command...]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provides help for a given command.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"exit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Exits application.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"clear")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clears the terminal.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"crypto-address add <paymentNetwork> <environment> <address> [tag]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starts building a new PayID.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"crypto-address remove <address>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Removes an address from the current PayID.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"keys clear")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clears all loaded keys.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"keys generate")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generates and saves a new identity key.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"keys list")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Lists keys that have been loaded.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"keys load <filePath>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Loads identity-key from file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"keys print")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Prints keys that have been loaded in pem format.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"init <payid>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Initializes a new PayID.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"inspect [payId]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Inspects signatures on the loaded PayID or from an optionally specified PayID.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"load <payId>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Loads a PayID from PayID server.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"show")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Shows the currently loaded PayID.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sign")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Signs the loaded PayID with the loaded signing keys.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"verify [payId]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Verifies the loaded PayID or an optionally specified PayID.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"save")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Saves the currently loaded PayID.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"from-url <url>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Converts a URL to a PayID.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"to-url <payId>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Converts a PayID to a URL.")))))}o.isMDXComponent=!0}}]);