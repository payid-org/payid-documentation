(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(7),i=(a(0),a(95)),o={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},p={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!0,title:"Getting Started",description:"PayID is a simple, web-based protocol designed to make it as easy to send someone money as it is to send them an email. This guide walks you through the following.",source:"@site/docs/getting-started.md",permalink:"/payid-documentation/review-apps/segment/2077e4/",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/getting-started.md",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Welcome to PayID",permalink:"/payid-documentation/review-apps/segment/2077e4/welcome-to-payid"},next:{title:"Get Started with Verifiable PayID",permalink:"/payid-documentation/review-apps/segment/2077e4/verifiable-payid-tutorial"}},c=[{value:"Experiment with the PayID Sandbox",id:"experiment-with-the-payid-sandbox",children:[]},{value:"Run a PayID Server",id:"run-a-payid-server",children:[]},{value:"Create a PayID",id:"create-a-payid",children:[]},{value:"Request a PayID",id:"request-a-payid",children:[]},{value:"RippleX Dev Kit Integration",id:"ripplex-dev-kit-integration",children:[]},{value:"Learn More",id:"learn-more",children:[]}],l={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"PayID is a simple, web-based protocol designed to make it as easy to send someone money as it is to send them an email. This guide walks you through the following."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#experiment-with-the-payid-sandbox"}),"Experiment With the PayID Sandbox")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#run-a-payid-server"}),"Run a PayID Server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#create-a-payid"}),"Create a PayID")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#request-a-payid"}),"Request a PayID")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#learn-more"}),"Learn More")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#ripplex-dev-kit-integration"}),"RippleX Dev Kit Integration"))),Object(i.b)("p",null,"Your contributions are welcome. Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid"}),"PayID repository on GitHub"),", and note the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/blob/master/CONTRIBUTING.md"}),"Contributing")," guidelines."),Object(i.b)("h2",{id:"experiment-with-the-payid-sandbox"},"Experiment with the PayID Sandbox"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://payid.org/sandbox"}),"PayID Sandbox")," lets you experiment with PayID in a test environment. Your work is not saved between sessions, and the sandbox may be reset at any time."),Object(i.b)("p",null,"To use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://payid.org/sandbox"}),"PayID Sandbox"),", log in with your Github account and follow the prompts. You can quickly set up a virtual test server, and then create users with simple PayID addresses that map to addresses on various networks such as XRPL, Interledger, BTC, and ETH. Using the provided cURL or Javascript code, you can create, update, and delete users, and get payment information about a PayID address. While the session is running, you can also run operations from your command line."),Object(i.b)("h2",{id:"run-a-payid-server"},"Run a PayID Server"),Object(i.b)("p",null,"To familiarize yourself and experiment with PayID, you can set up a local PayID server. Here is a simple method. For more options, including PayID deployment for production environments, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"intro-deploy"}),"Deployment Overview"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you haven't already, install ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docks.docker.com/get-docker/"}),"Docker")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node")," on your machine.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The reference implementation server is available at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid"}),"https://github.com/payid-org/payid"),". You can download the reference implementation server by cloning the repository at the command line:\n",Object(i.b)("inlineCode",{parentName:"p"},"git clone https://github.com/payid-org/payid.git"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to the ",Object(i.b)("inlineCode",{parentName:"p"},"/payid")," directory that you just created:\n",Object(i.b)("inlineCode",{parentName:"p"},"cd payid"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Boot up the PayID HTTP server and a Postgres database to develop against:\n",Object(i.b)("inlineCode",{parentName:"p"},"npm run devEnvUp")))),Object(i.b)("h2",{id:"create-a-payid"},"Create a PayID"),Object(i.b)("p",null,"Now that you have a PayID server running, you can create a PayID. If your server is publicly accessible, other people could query your account information from your PayID server."),Object(i.b)("p",null,"To create a PayID, with an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://xrpl.org/xrp-testnet-faucet.html"}),"XRP Ledger Testnet account"),", send this request to your server:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl --location --request POST \'http://127.0.0.1:8081/users\' \\\n  --header \'PayID-API-Version: 2020-06-18\' \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n       "payId": "alice$127.0.0.1",\n       "addresses": [\n           {\n               "paymentNetwork": "XRPL",\n               "environment": "TESTNET",\n               "details": {\n                   "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS",\n                   "tag": "123"\n               }\n           }\n       ]\n   }\'\n')),Object(i.b)("p",null,"PayID supports various payment networks. To create a second user with a Bitcoin testnet account, send this request to your server:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl --location --request POST \'http://127.0.0.1:8081/users\' \\\n  --header \'PayID-API-Version: 2020-06-18\' \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n       "payId": "bob$127.0.0.1",\n       "addresses": [\n           {\n               "paymentNetwork": "BTC",\n               "environment": "TESTNET",\n               "details": {\n                   "address": "mxNEbRXokcdJtT6sbukr1CTGVx8Tkxk3DB"\n               }\n           }\n       ]\n   }\'\n')),Object(i.b)("h2",{id:"request-a-payid"},"Request a PayID"),Object(i.b)("p",null,"After setting up a server and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#create-a-payid"}),"creating a PayID")," on the server, the next step is to request the PayID from the server. The PayID Protocol is what allows you to make these requests. And, when the server is publicly available, other wallets and entities can make similar requests to query any PayID and related account information stored on the server."),Object(i.b)("p",null,"To request the PayID you created for Alice:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://127.0.0.1:8080/alice' \\\n   --header 'PayID-Version: 1.0' \\\n   --header 'Accept: application/xrpl-testnet+json'\n")),Object(i.b)("p",null,"The response should have the following payload:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "payId": "alice$127.0.0.1",\n  "addresses": [\n    {\n      "paymentNetwork": "XRPL",\n      "environment": "TESTNET",\n      "addressDetailsType": "CryptoAddressDetails",\n      "addressDetails": {\n        "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS",\n        "tag:": "123"\n      }\n    }\n  ]\n}\n')),Object(i.b)("p",null,"To request the PayID you created for Bob:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://127.0.0.1:8080/bob' \\\n   --header 'PayID-Version: 1.0' \\\n   --header 'Accept: application/btc-testnet+json'\n")),Object(i.b)("p",null,"That's it! You've set up a PayID server locally, created new PayIDs on your server, and requested those PayIDs by using the PayID Protocol."),Object(i.b)("p",null,"If you want to clean up the Docker containers, you can run ",Object(i.b)("inlineCode",{parentName:"p"},"npm run devDown"),"."),Object(i.b)("p",null,"Now that you've set up the basics, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#learn-more"}),"learn more")," about PayID and what you can do with it."),Object(i.b)("h2",{id:"ripplex-dev-kit-integration"},"RippleX Dev Kit Integration"),Object(i.b)("p",null,"PayID support is integrated into ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/xpring-eng/ripplex-dev-kit"}),"RippleX Dev Kit"),"."),Object(i.b)("p",null,"RippleX Dev Kit provides the ability to work with PayID. It provides three language libraries:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/xpring-eng/xpring-js"}),"JavaScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/xpring-eng/xpring4j"}),"Java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/xpring-eng/xpringkit"}),"Swift"))),Object(i.b)("p",null,"These libraries help you connect your application to PayID without having to worry about the specifics of PayID. Try ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"ripplex-dev-kit-payid-get-started"}),"Get Started With RippleX Dev Kit and PayID"),"."),Object(i.b)("h2",{id:"learn-more"},"Learn More"),Object(i.b)("p",null,"You now have a good foundation for learning more about the PayID Protocol. Here are some next steps you can take:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/xpring-eng/xpring-js#usage-payid"}),"How to convert")," the ",Object(i.b)("inlineCode",{parentName:"li"},"user$domain.com")," format to a URL"),Object(i.b)("li",{parentName:"ul"},"Learn how to use relevant ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"payid-headers"}),"HTTP headers")),Object(i.b)("li",{parentName:"ul"},"Learn how to handle different types of ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://api.payid.org/?version=latest"}),"responses")," you could receive from a PayID server")),Object(i.b)("p",null,"You can use extended PayID features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"verifiable-payid"}),"Get Started With Verifiable PayID"),". Verifiable PayID enhances security for PayID."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"payid-cli"}),"Use PayID CLI"),". PayID CLI is a convenient tool to work with PayID addresses.")),Object(i.b)("p",null,"Learn about:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/payid-org/payid/blob/master/CONTRIBUTING.md"}),"How to contribute to PayID")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/payid-org/rfcs"}),"PayID RFCs"),", which discuss potential changes and additions to the PayID Protocol"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://payid.org/whitepaper.pdf"}),"PayID Whitepaper"),", which provides background context around the problems that PayID solves")))}s.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,h=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(h,p(p({ref:t},l),{},{components:a})):r.a.createElement(h,p({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);