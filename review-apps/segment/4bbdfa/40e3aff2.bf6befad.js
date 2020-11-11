(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return s}));var i=a(2),n=a(7),r=(a(0),a(99)),o={id:"verifiable-payid-tutorial",title:"Get Started with Verifiable PayID",sidebar_label:"Get Started with Verifiable PayID"},l={unversionedId:"verifiable-payid-tutorial",id:"verifiable-payid-tutorial",isDocsHomePage:!1,title:"Get Started with Verifiable PayID",description:"In this guide, you will deploy a local PayID server, create a PayID, sign and verify the PayID, and test it using calls to the PayID Admin API. If you want to use base PayID without verification, see Getting Started.",source:"@site/docs/verifiable-payid-tutorial.md",permalink:"/payid-documentation/review-apps/segment/4bbdfa/verifiable-payid-tutorial",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/verifiable-payid-tutorial.md",sidebar_label:"Get Started with Verifiable PayID",sidebar:"docs",previous:{title:"Get Started With PayID CLI",permalink:"/payid-documentation/review-apps/segment/4bbdfa/payid-cli"},next:{title:"Get Started with RippleX Dev Kit and PayID",permalink:"/payid-documentation/review-apps/segment/4bbdfa/ripplex-dev-kit-payid-get-started"}},d=[],p={rightToc:d};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this guide, you will deploy a local PayID server, create a PayID, sign and verify the PayID, and test it using calls to the PayID Admin API. If you want to use base PayID without verification, see ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/"}),"Getting Started"),"."),Object(r.b)("p",null,"For more information about Verifiable PayID, see ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"verifiable-payid"}),"Enhance Security With Verifiable PayID"),"."),Object(r.b)("p",null,"Before you begin:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deploy a PayID server locally. See ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/#run-a-payid-server"}),"Getting Started: Deploy a PayID Server"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"payid-cli"}),"Install PayID CLI"),". You will use the command line to perform the tasks in this tutorial.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open the command line. Enter ",Object(r.b)("inlineCode",{parentName:"li"},"payid"),". You can now enter commands in interactive mode."),Object(r.b)("li",{parentName:"ol"},"See the available commands: enter ",Object(r.b)("inlineCode",{parentName:"li"},"help"),". Note the commands related to signing and verifying PayIDs."),Object(r.b)("li",{parentName:"ol"},"Create an empty PayID: ",Object(r.b)("inlineCode",{parentName:"li"},"init verifiabledemo$127.0.0.1"),"."),Object(r.b)("li",{parentName:"ol"},"Add a crypto address:",Object(r.b)("inlineCode",{parentName:"li"},"crypto-address add XRPL TESTNET rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS"),". This command specifies the relevant ",Object(r.b)("inlineCode",{parentName:"li"},"paymentNetwork"),", ",Object(r.b)("inlineCode",{parentName:"li"},"environment"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"address")," for your ledger."),Object(r.b)("li",{parentName:"ol"},"Generate a user identity key:",Object(r.b)("inlineCode",{parentName:"li"},"keys generate"),". This key is stored locally at the specified location. Make sure you keep the key in a safe place."),Object(r.b)("li",{parentName:"ol"},"Sign the PayID with the user identity key to create a verified PayID and address payload: ",Object(r.b)("inlineCode",{parentName:"li"},"sign"),"."),Object(r.b)("li",{parentName:"ol"},"Remove the unverified crypto address: ",Object(r.b)("inlineCode",{parentName:"li"},"crypto-address remove rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS"),". The output payload should have this format:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'{\n  "payId": "verifiabledemo$127.0.0.1",\n  "addresses": [],\n  "verifiedAddresses": [\n    {\n      "payload": "{\\"payId\\":\\"test$example.com\\",\\"payIdAddress\\":{\\"paymentNetwork\\":\\"XRPL\\",\\"environment\\":\\"TESTNET\\",\\"addressDetailsType\\":\\"CryptoAddressDetails\\",\\"addressDetails\\":{\\"address\\":\\"rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS\\"}}}",\n      "signatures": [\n        {\n          "protected": "eyJuYW1lIjoiaWRlbnRpdHlLZXkiLCJhbGciOiJFUzI1NksiLCJ0eXAiOiJKT1NFK0pTT04iLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCIsIm5hbWUiXSwiandrIjp7ImNydiI6InNlY3AyNTZrMSIsIngiOiI2S0dtcEF6WUhWUm9qVmU5UEpfWTVyZHltQ21kTy1xaVRHem1Edl9waUlvIiwieSI6ImhxS3Vnc1g3Vjk3eFRNLThCMTBONUQxcW44MUZWMjItM1p0TURXaXZfSnciLCJrdHkiOiJFQyIsImtpZCI6Im4zNlhTc0M1TjRnNUtCVzRBWXJ5d1ZtRE1kUWNEV1BJX0RfNUR1UlNhNDAifX0",\n          "signature": "rsoKeVLzwg2PpGRK0S10fpmh5WNtttF9dyJgSv3USEr4aN3bUBzp5ImRQo8wlh3E00GtZ2cse-lhoQ4zJKj0Jw"\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Upload the verified PayID. If you are using the PayID Admin API version from 2020-08-25 or later, POST the payload from Step 7 to the Admin API endpoint. See ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://api.payid.org"}),"PayID API Reference"),". As mentioned, you must have a PayID server deployed to use this API.\nIf you use the PayID Admin API version from before 2020-08-25, then you must modify this payload.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"identityKey")," should have the contents of the ",Object(r.b)("inlineCode",{parentName:"li"},"protected")," field in Step 7."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"verifiedAddresses")," should be the un-stringified JSON contents of the ",Object(r.b)("inlineCode",{parentName:"li"},"payload")," field in Step 7."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"identityKeySignature")," should be the ",Object(r.b)("inlineCode",{parentName:"li"},"signature")," field in Step 7.\nThe payload for older versions of the PayID Admin API appears as follows:")))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'{\n   "payId": "verifiabledemo$127.0.0.1",\n   "identityKey": "eyJuYW1lIjoiaWRlbnRpdHlLZXkiLCJhbGciOiJFUzI1NksiLCJ0eXAiOiJKT1NFK0pTT04iLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCIsIm5hbWUiXSwiandrIjp7ImNydiI6InNlY3AyNTZrMSIsIngiOiI2S0dtcEF6WUhWUm9qVmU5UEpfWTVyZHltQ21kTy1xaVRHem1Edl9waUlvIiwieSI6ImhxS3Vnc1g3Vjk3eFRNLThCMTBONUQxcW44MUZWMjItM1p0TURXaXZfSnciLCJrdHkiOiJFQyIsImtpZCI6Im4zNlhTc0M1TjRnNUtCVzRBWXJ5d1ZtRE1kUWNEV1BJX0RfNUR1UlNhNDAifX0",\n   "addresses": [],\n   "verifiedAddresses": [\n       {\n           "paymentNetwork": "XRPL",\n           "environment": "TESTNET",\n           "details": {\n               "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS"\n           },\n           "identityKeySignature": "rsoKeVLzwg2PpGRK0S10fpmh5WNtttF9dyJgSv3USEr4aN3bUBzp5ImRQo8wlh3E00GtZ2cse-lhoQ4zJKj0Jw"\n       }\n   ]\n}\n')),Object(r.b)("ol",{start:9},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Retrieve and verify the verified PayID using PayID CLI. These commands do not use interactive mode."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"   payid load verifiabledemo$127.0.0.11\n   payid inspect\n   payid verify\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Verify the PayID from the PayID Public API endpoint with GET. See ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://api.payid.org/"}),"API Reference"),". You can also use a JWS library like ",Object(r.b)("inlineCode",{parentName:"p"},"jose")," to verify the ",Object(r.b)("inlineCode",{parentName:"p"},"verifiedAddress")," object(s).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If operating through a trust on first use (TOFU) model, safely store the identity key after successful verification, and use this key to verify subsequent addresses retrieved from the same PayID."))))}s.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return y}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(a),m=i,y=c["".concat(o,".").concat(m)]||c[m]||b[m]||r;return a?n.a.createElement(y,l(l({ref:t},p),{},{components:a})):n.a.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);