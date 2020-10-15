(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(7),b=(a(0),a(95)),c={id:"payid-headers",title:"Headers",sidebar_label:"Headers"},i={unversionedId:"payid-headers",id:"payid-headers",isDocsHomePage:!1,title:"Headers",description:"See also: PayID API Reference.",source:"@site/docs/payid-headers.md",permalink:"/payid-documentation/review-apps/segment/2077e4/payid-headers",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/payid-headers.md",sidebar_label:"Headers",sidebar:"docs",previous:{title:"PayID CLI Reference",permalink:"/payid-documentation/review-apps/segment/2077e4/payid-cli-reference"},next:{title:"Interfaces",permalink:"/payid-documentation/review-apps/segment/2077e4/payid-interfaces"}},d=[{value:"Request headers",id:"request-headers",children:[]},{value:"Headers for GET requests",id:"headers-for-get-requests",children:[{value:"Header for all addresses",id:"header-for-all-addresses",children:[]},{value:"Headers for XRP",id:"headers-for-xrp",children:[]},{value:"Headers for ACH",id:"headers-for-ach",children:[]},{value:"Headers for BTC",id:"headers-for-btc",children:[]},{value:"Headers for ETH",id:"headers-for-eth",children:[]},{value:"Headers for ILP",id:"headers-for-ilp",children:[]}]}],p={rightToc:d};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"See also: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://api.payid.org"}),"PayID API Reference"),"."),Object(b.b)("p",null,"The PayID protocol has specific header requirements for requests and responses."),Object(b.b)("h3",{id:"request-headers"},"Request headers"),Object(b.b)("p",null,"When you make a request, the HTTP ",Object(b.b)("inlineCode",{parentName:"p"},"Accept")," header of the request specifies the payment network and environment, and PayID is therefore capable of returning a user's address information for any network in which that user participates."),Object(b.b)("p",null,"An example request has this form."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-HTTP"}),"GET /{user} HTTP/1.1\n\nAccept: application/xrpl-testnet+json\n")),Object(b.b)("p",null,"Some different header options are shown here, with example values."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Currency"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Header"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Address payload"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BTC"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"application/btc-mainnet+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"{ address: '1BvBMSEYstWetAu4m4GFg7xJaNVN2' }")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"XRP"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"application/xrpl-mainnet+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'{ address: "rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg", tag: "67298042"}')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ACH"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"application/ach+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"{ account: '363023456079',routing: '011302838'}")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"application/payid+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Variable, depending on the contents of each address")))),Object(b.b)("p",null,"If you create your own Accept header for another currency:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Follow the pattern for BTC Accept headers and use the currency code for the currency, as shown."),Object(b.b)("li",{parentName:"ol"},"Consider creating a ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/payid-org/payid-documentation"}),"PR on the PayID docs site")," to update this list."),Object(b.b)("li",{parentName:"ol"},"Consider updating ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/payid-org/rfcs/blob/master/dist/spec/payid-protocol.txt#L1162"}),"IANA registration section in the PayID protocol RFC for supported Media-types")," by sending an email to ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:rfcs@payid.org"}),"rfcs@payid.org"),".")),Object(b.b)("h2",{id:"headers-for-get-requests"},"Headers for GET requests"),Object(b.b)("p",null,"This launch of PayID includes those headers specific to the XRPL community. Each payment network is free to establish its own standard headers. These headers should be submitted with every GET request, but not POST."),Object(b.b)("h3",{id:"header-for-all-addresses"},"Header for all addresses"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Accept header"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/payid+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns all addresses for a PayID")))),Object(b.b)("h3",{id:"headers-for-xrp"},"Headers for XRP"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Accept header"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/xrpl-mainnet+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns XRPL mainnet classic address (and tag if provided)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/xrpl-testnet+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns XRPL testnet classic address (and tag if provided)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/xrpl-devnet+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns XRPL devnet xAddress classic address (and tag if provided)")))),Object(b.b)("h3",{id:"headers-for-ach"},"Headers for ACH"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Accept header"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/ach+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns account and routing number")))),Object(b.b)("h3",{id:"headers-for-btc"},"Headers for BTC"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Accept header"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/btc-mainnet+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns mainnet address")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/btc-testnet+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns testnet address")))),Object(b.b)("h3",{id:"headers-for-eth"},"Headers for ETH"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Accept header"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/eth-mainnet+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns mainnet address")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/eth-ropsten+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns testnet address")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/eth-kovan+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns testnet address")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/eth-rinkeby+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns testnet address")))),Object(b.b)("p",null,"Ethernet has a number of different testnets. Refer to ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md"}),"EIP 155"),"."),Object(b.b)("h3",{id:"headers-for-ilp"},"Headers for ILP"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Accept header"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/interledger-mainnet+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns mainnet address")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"application/interledger-testnet+json")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Returns testnet address")))))}o.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=o(a),j=r,O=l["".concat(c,".").concat(j)]||l[j]||s[j]||b;return a?n.a.createElement(O,i(i({ref:t},p),{},{components:a})):n.a.createElement(O,i({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);