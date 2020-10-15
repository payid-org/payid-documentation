(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{81:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return d})),n.d(a,"rightToc",(function(){return s})),n.d(a,"default",(function(){return p}));var t=n(2),r=n(6),i=(n(0),n(94)),o={id:"payid-cli",title:"PayID CLI",sidebar_label:"PayID CLI"},d={unversionedId:"payid-cli",id:"payid-cli",isDocsHomePage:!1,title:"PayID CLI",description:"With the PayID CLI, you can run PayID commands from the command line, and access all PayID features.",source:"@site/docs/payid-cli.md",permalink:"/payid-documentation/review-apps/github-actions/be56fa/payid-cli",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/payid-cli.md",sidebar_label:"PayID CLI",sidebar:"docs",previous:{title:"Reference Implementation Overview",permalink:"/payid-documentation/review-apps/github-actions/be56fa/payid-reference-overview"},next:{title:"Enhance Security With Verifiable PayID",permalink:"/payid-documentation/review-apps/github-actions/be56fa/verifiable-payid"}},s=[{value:"PayID CLI setup",id:"payid-cli-setup",children:[]},{value:"Run PayID CLI in interactive or single-command mode",id:"run-payid-cli-in-interactive-or-single-command-mode",children:[]},{value:"Example commands",id:"example-commands",children:[{value:"Load a PayID",id:"load-a-payid",children:[]},{value:"Remove a crypto-address",id:"remove-a-crypto-address",children:[]},{value:"Add a crypto-address",id:"add-a-crypto-address",children:[]},{value:"Create a new PayID",id:"create-a-new-payid",children:[]},{value:"Manage identity keys",id:"manage-identity-keys",children:[]}]}],l={rightToc:s};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"With the PayID CLI, you can run PayID commands from the command line, and access all PayID features."),Object(i.b)("p",null,"View the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/payid-org/payid-cli"}),"PayID CLI project on Github"),"."),Object(i.b)("h2",{id:"payid-cli-setup"},"PayID CLI setup"),Object(i.b)("p",null,"PayID CLI uses TypeScript. Therefore, make sure you have installed ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"node")," and the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.npmjs.com/downloading-and-installing-packages-locally"}),"npm")," package manager locally."),Object(i.b)("p",null,"To install PayID CLI, run:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm install -g @payid-org/payid-cli")),Object(i.b)("p",null,"This command installs PayID CLI as a global npm module and links it as a payid executable, typically under\n",Object(i.b)("inlineCode",{parentName:"p"},"/usr/local/bin/payid"),"."),Object(i.b)("p",null,"To install and run PayID CLI from Docker, run:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker run xpring/payid-cli")),Object(i.b)("h2",{id:"run-payid-cli-in-interactive-or-single-command-mode"},"Run PayID CLI in interactive or single-command mode"),Object(i.b)("p",null,"To run PayID CLI in interactive mode, run ",Object(i.b)("inlineCode",{parentName:"p"},"payid")," to open an interactive session."),Object(i.b)("p",null,"In interactive mode, you can then run PayID CLI commands as desired with the form\n",Object(i.b)("inlineCode",{parentName:"p"},"<command> <arguments>"),", such as:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"load 'nhartner$ripplex.money'")),Object(i.b)("p",null,"To exit interactive mode, run ",Object(i.b)("inlineCode",{parentName:"p"},"exit"),"."),Object(i.b)("p",null,"To run PayID CLI in single-command mode, prefix each command with ",Object(i.b)("inlineCode",{parentName:"p"},"payid"),". Each command takes the form"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"payid <command> <arguments>"),", such as:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"payid load 'nhartner$ripplex.money'")),Object(i.b)("p",null,"Use single-command mode for scripts, or to chain the results of multiple commands together, such as:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"payid init 'my$pay.id' && payid crypto-address add btc mainnet notARealAddress && payid save")),Object(i.b)("p",null,"When you pass a PayID as an argument in non-interactive mode, make sure to escape or quote the PayID to avoid the ",Object(i.b)("inlineCode",{parentName:"p"},"'$'")," being interpolated as a variable by the shell."),Object(i.b)("h2",{id:"example-commands"},"Example commands"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tip"),": If you obtain an XRP testnet wallet, you get a PayID based on your RippleX account that is already linked to an XRP address. This is useful for testing. Visit the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://RippleX.io/portal"}),"RippleX.io portal")," and sign in with Github. The RippleX portal launchpad page opens. Click ",Object(i.b)("strong",{parentName:"p"},"XRP Testnet Wallet")," and follow the steps to create your wallet. Your PayID has the form ",Object(i.b)("inlineCode",{parentName:"p"},"<github-username>$ripplex.money")," and you can use this PayID value in these example commands."),Object(i.b)("h3",{id:"load-a-payid"},"Load a PayID"),Object(i.b)("p",null,"This command loads the specified PayID from a remote server."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"load loisrp$ripplex.money")),Object(i.b)("p",null,"The output fetches all the PayID address mappings for the given PayID from the remote server and displays the resulting JSON. In this example, the PayID has two crypto-addresses attached to it."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "payId": "loisrp$ripplex.money",\n  "version": "1.0",\n  "addresses": [\n    {\n      "paymentNetwork": "XRPL",\n      "environment": "TESTNET",\n      "addressDetailsType": "CryptoAddressDetails",\n      "addressDetails": {\n        "address": "rwcBVJwXdXusY5SgNMjHbMWbR2Nnt2U3R6"\n      }\n    },\n    {\n      "paymentNetwork": "INTERLEDGER",\n      "environment": "TESTNET",\n      "addressDetailsType": "CryptoAddressDetails",\n      "addressDetails": {\n        "address": "$ripplex.money/LoisRP"\n      }\n    }\n  ],\n  "verifiedAddresses": []\n}\n')),Object(i.b)("h3",{id:"remove-a-crypto-address"},"Remove a crypto-address"),Object(i.b)("p",null,"If you have previously loaded a PayID, you can use this command to remove a crypto-address attached to it."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'crypto-address remove "rwcBVJwXdXusY5SgNMjHbMWbR2Nnt2U3R6"')),Object(i.b)("p",null,"The output returns the updated information about the PayID. In this example, the command removed the address on XRP testnet."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "payId": "loisrp$ripplex.money",\n  "version": "1.0",\n  "addresses": [\n    {\n      "paymentNetwork": "INTERLEDGER",\n      "environment": "TESTNET",\n      "addressDetailsType": "CryptoAddressDetails",\n      "addressDetails": {\n        "address": "$ripplex.money/LoisRP"\n      }\n    }\n  ],\n  "verifiedAddresses": []\n}\n')),Object(i.b)("h3",{id:"add-a-crypto-address"},"Add a crypto-address"),Object(i.b)("p",null,"You can add a crypto-address to a PayID. This command does not confirm the validity of the address details."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crypto-address add xrpl mainnet rP3t3JStqWPYd8H88WfBYh3v84qqYzbHQ6 12345")),Object(i.b)("p",null,"The output returns the updated information for the PayID, including the added crypto-address."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "payId": "loisrp$ripplex.money",\n  "addresses": [\n    {\n      "paymentNetwork": "INTERLEDGER",\n      "environment": "TESTNET",\n      "addressDetailsType": "CryptoAddressDetails",\n      "addressDetails": {\n        "address": "$ripplex.money/LoisRP"\n      }\n    },\n    {\n      "paymentNetwork": "XRPL",\n      "environment": "MAINNET",\n      "addressDetailsType": "CryptoAddressDetails",\n      "addressDetails": {\n        "address": "rP3t3JStqWPYd8H88WfBYh3v84qqYzbHQ6",\n        "tag": 12345\n      }\n    }\n  ],\n  "verifiedAddresses": []\n}\n')),Object(i.b)("h3",{id:"create-a-new-payid"},"Create a new PayID"),Object(i.b)("p",null,"The following set of commands demonstrates how to create a new PayID, attach multiple address mappings, and save the result to a JSON file."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"init cleopatra$example.com\ncrypto-address add xrpl mainnet rP3t3JStqWPYd8H88WfBYh3v84qqYzbHQ6 12345\ncrypto-address add btc mainnet 3M2CH71P6uZTra1PsjiEhNFB7kCENShCgt\nsave\n")),Object(i.b)("p",null,"The PayID JSON representation specified here is saved to the local filesystem as example.json."),Object(i.b)("h3",{id:"manage-identity-keys"},"Manage identity keys"),Object(i.b)("p",null,"The PayID protocol supports signing address mappings using one or more cryptographic keys. PayID CLI provides several commands to generate and load keys. Once a key is generated or loaded by PayID CLI, it is retained in PayID CLI's local storage for use when you sign your PayID."),Object(i.b)("p",null,"You can generate multiple identity keys by using the ",Object(i.b)("inlineCode",{parentName:"p"},"keys generate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"keys load")," commands."),Object(i.b)("p",null,"To remove all loaded keys from the CLI's local storage, use the ",Object(i.b)("inlineCode",{parentName:"p"},"keys clear")," command. To see all keys currently loaded into PayID CLI, use the ",Object(i.b)("inlineCode",{parentName:"p"},"keys list")," command."),Object(i.b)("h4",{id:"generate-a-new-key-run"},"Generate a new key run"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"keys generate\n")),Object(i.b)("p",null,"This generates a new key and saves it to a file named identity-key.pem. To load a previously created identity key, run\n",Object(i.b)("inlineCode",{parentName:"p"},"keys load </path/to/pem/file>"),"."),Object(i.b)("h4",{id:"sign-a-payid"},"Sign a PayID"),Object(i.b)("p",null,"Before you sign an PayID, you must either load the PayID using the ",Object(i.b)("inlineCode",{parentName:"p"},"load")," command, or create a PayID using the ",Object(i.b)("inlineCode",{parentName:"p"},"init")," command, and you must execute commands to add one or more crypto-addresses to the PayID."),Object(i.b)("p",null,"Once a PayID has been initialized or loaded, you can sign it using an identity key. You must either generate a new key, or load an existing one. Once your PayID has been loaded or initialized, and your identity key has been generated or loaded, you can sign the PayID using the ",Object(i.b)("inlineCode",{parentName:"p"},"sign")," command. The ",Object(i.b)("inlineCode",{parentName:"p"},"sign")," command signs each of your PayID address mappings using the loaded identity keys, and outputs the resulting PayID with a ",Object(i.b)("inlineCode",{parentName:"p"},"verifiedAddress")," field. Run the ",Object(i.b)("inlineCode",{parentName:"p"},"save")," command to save your PayID, with signed addresses, to file."),Object(i.b)("h4",{id:"inspect-a-verified-payid"},"Inspect a Verified PayID"),Object(i.b)("p",null,"Two commands are available to verify a PayID's verified addresses."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"verify")," - Checks if all the verified addresses have valid signatures."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"inspect")," - Displays details information about each verified address and signatures."),Object(i.b)("h4",{id:"create-sign-and-verify-a-payid"},"Create, sign, and verify a PayID"),Object(i.b)("p",null,"With this combination of commands, you can create a PayID, add an address mapping, generate an identity key, sign your PayID address mapping, and then inspect the final result. You can check the output after each command."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"init alexanderthegreat$example.com\ncrypto-address add xrpl mainnet rP3t3JStqWPYd8H88WfBYh3v84qqYzbHQ6\nkeys generate\nsign\ninspect\n")))}p.isMDXComponent=!0},94:function(e,a,n){"use strict";n.d(a,"a",(function(){return c})),n.d(a,"b",(function(){return y}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var a=r.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):d(d({},a),e)),n},c=function(e){var a=p(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=t,y=c["".concat(o,".").concat(m)]||c[m]||b[m]||i;return n?r.a.createElement(y,d(d({ref:a},l),{},{components:n})):r.a.createElement(y,d({ref:a},l))}));function y(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d.mdxType="string"==typeof e?e:t,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);