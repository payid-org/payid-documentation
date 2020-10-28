(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(97)),o={id:"payid-best-practices",title:"Security Best Practices",sidebar_label:"Security Best Practices"},s={unversionedId:"payid-best-practices",id:"payid-best-practices",isDocsHomePage:!1,title:"Security Best Practices",description:"The PayID protocol is flexible and supports a wide range of implementations. To ensure security, follow these best practices.",source:"@site/docs/best-practices.md",permalink:"/payid-documentation/review-apps/loisrp-sandbox-tutorial/4def42/payid-best-practices",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/best-practices.md",sidebar_label:"Security Best Practices",sidebar:"docs",previous:{title:"Discover a PayID",permalink:"/payid-documentation/review-apps/loisrp-sandbox-tutorial/4def42/payid-discovery"},next:{title:"Integrate Existing User Databases",permalink:"/payid-documentation/review-apps/loisrp-sandbox-tutorial/4def42/integrate-payid-users"}},c=[{value:"Requirements",id:"requirements",children:[{value:"Limit Admin API exposure",id:"limit-admin-api-exposure",children:[]},{value:"Set CORS (Cross-Origin Resource Sharing) Headers",id:"set-cors-cross-origin-resource-sharing-headers",children:[]},{value:"Cache-Control",id:"cache-control",children:[]},{value:"Use TLS 1.3",id:"use-tls-13",children:[]}]},{value:"Best practices for PayID implementation",id:"best-practices-for-payid-implementation",children:[{value:"Harden Docker",id:"harden-docker",children:[]},{value:"Recommendations for open-source implementation libraries",id:"recommendations-for-open-source-implementation-libraries",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The PayID protocol is flexible and supports a wide range of implementations. To ensure security, follow these best practices."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"When implementing PayID, you must meet the following requirements."),Object(i.b)("h3",{id:"limit-admin-api-exposure"},"Limit Admin API exposure"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.payid.org/?version=latest#7a19329b-80eb-451f-bbb8-d9656892a788"}),"Admin PayID API")," does not currently include authentication. Therefore, this API ",Object(i.b)("strong",{parentName:"p"},"MUST")," only be exposed to trusted IP ranges, and ",Object(i.b)("strong",{parentName:"p"},"MUST NOT")," be exposed publicly."),Object(i.b)("h3",{id:"set-cors-cross-origin-resource-sharing-headers"},"Set CORS (Cross-Origin Resource Sharing) Headers"),Object(i.b)("p",null,"PayID servers should be easily accessible. To allow browser scripts to hit a PayID server, you should set the following CORS headers."),Object(i.b)("p",null,"The PayID reference implementation server already sets these headers, but if you are rolling your own implementation or using a reverse proxy like nginx, you should ensure these headers are set or passed through."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-http"}),"Access-Control-Allow-Origin: '*'\nAccess-Control-Allow-Methods: 'POST, GET, OPTIONS'\nAccess-Control-Allow-Headers: 'PayID-Version'\nAccess-Control-Expose-Headers: 'PayID-Version, PayID-Server-Version'\n")),Object(i.b)("p",null,"If you want to verify whether CORS is correctly set up for your PayID server, you can modify the following HTML file to point to your PayID server, open it up in a web browser, and inspect the console."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<html>\n  <script>\n    const headers = new Headers()\n    headers.append('Accept', 'application/xrpl-mainnet+json')\n    headers.append('PayID-Version', '1.0')\n\n    fetch(new Request('https://ripplex.money/alice'), {\n      method: 'GET',\n      headers,\n      mode: 'cors',\n    })\n      .then((response) => response.json())\n      .then(console.log)\n  <\/script>\n</html>\n")),Object(i.b)("h3",{id:"cache-control"},"Cache-Control"),Object(i.b)("p",null,"Because the PayID server deals with payment addresses, you want to ensure that payment addresses don't get cached. That way, the payment address is always up to date, and money won't be set to the incorrect address."),Object(i.b)("p",null,"The PayID reference implementation server already sets this header, but if you are rolling your own implementation or using a reverse proxy like nginx, you should ensure this header is set or passed through."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-http"}),"Cache-Control: no-store\n")),Object(i.b)("h3",{id:"use-tls-13"},"Use TLS 1.3"),Object(i.b)("p",null,"As stated in the requirements, your implementation of PayID must use TLS. To ensure security, both the PayID client and the PayID server should use the latest TLS 1.3, as described in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc8446"}),"RFC 8446"),". TLS 1.3 is faster and safer than its predecessors, and offers these advantages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reduces handshake latency"),Object(i.b)("li",{parentName:"ul"},"Encrypts more of the handshake"),Object(i.b)("li",{parentName:"ul"},"Improves resiliency to cross-protocol attacks"),Object(i.b)("li",{parentName:"ul"},"Removes legacy features")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," TLS 1.3 (RFC 8446) and its implementations provide considerable flexibility in the selection of cipher suites. Cryptographic algorithms weaken over time as cryptanalysis improves: algorithms that are considered strong today may become weak tomorrow. Therefore, you must prepare to phase out such algorithms over time, and replace with more secure cipher suites as those become available."),Object(i.b)("h2",{id:"best-practices-for-payid-implementation"},"Best practices for PayID implementation"),Object(i.b)("p",null,"The following best practices are strongly recommended."),Object(i.b)("h3",{id:"harden-docker"},"Harden Docker"),Object(i.b)("p",null,"Consider adding further Docker hardening steps, such as using the ",Object(i.b)("inlineCode",{parentName:"p"},"no-new-privileges")," security option to help prevent privilege escalation attacks through the misuse of ",Object(i.b)("inlineCode",{parentName:"p"},"setuid")," and ",Object(i.b)("inlineCode",{parentName:"p"},"setgid")," programs."),Object(i.b)("h3",{id:"recommendations-for-open-source-implementation-libraries"},"Recommendations for open-source implementation libraries"),Object(i.b)("p",null,"Many open-source implementation libraries support TLS 1.3. See the comprehensive list ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Comparison_of_TLS_implementations"}),"on Wikipedia"),"."),Object(i.b)("p",null,"Use an existing library rather than rolling your own implementation."),Object(i.b)("p",null,"Among the various options available, use an Elliptic-Curve Cryptography (ECC) implementation for these reasons:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Short keys: ECC provides greater security for a given key-size.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Better performance: The smaller key size also makes possible more compact implementations for a given level of security. This means faster cryptographic operations. ECC has very fast key generation and signature algorithms.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Efficient implementations: ECC exponentiation operations have extremely efficient, compact hardware implementations available, and these offer potential reductions in the implementation footprint even beyond those due to the smaller key length alone."))),Object(i.b)("h4",{id:"key-exchange-recommendations"},"Key exchange recommendations"),Object(i.b)("p",null,"Use the Elliptic-Curve-Diffie-Hellman (ECDH) key exchange in ephemeral mode as it provides forward secrecy, as explained in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc8446#section-7.4.2"}),"RFC 8442, Section 7.4.2"),". Use one of the following curves:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"secp256r1 or NIST P-256 (must be supported for key exchange for any TLS-compliant application)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"X25519 (should be supported for key exchange for any TLS-compliant application)"))),Object(i.b)("p",null,"Each of these curves provides a 128-bit security level. For a 192-bit security level, use curve secp384r1."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Arguably, the extra security provided by P-384 is unnecessary, because the more efficient P-256 curve already provides security that cannot be broken through a sufficiently large accumulation of computing power."),Object(i.b)("h4",{id:"digital-signature-algorithm-recommendations"},"Digital signature algorithm recommendations"),Object(i.b)("p",null,"Use one of the following digital signature algorithms:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ecdsa_secp256r1_sha256 (This digital signature algorithm must be supported by any TLS-compliant application.)"),Object(i.b)("li",{parentName:"ul"},"ecdsa_secp384r1_sha384")),Object(i.b)("h4",{id:"cipher-suites-recommendations"},"Cipher suites recommendations"),Object(i.b)("p",null,"Use one of the following cipher suites:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"TLS_AES_128_GCM_SHA256 (This cipher suite must be implemented for any TLS-compliant application.)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"TLS_AES_256_GCM_SHA384 and TLS_CHACHA20_POLY1305_SHA256 (these are SHOULD be implemented cipher suites )"))),Object(i.b)("h4",{id:"additional-recommendations"},"Additional Recommendations"),Object(i.b)("p",null,"Do not use the 0-RTT (Zero Round Trip Time Resumption (0-RTT) mode of operation. 0-RTT encryption keys do not provide\nfull-forward secrecy, and the server cannot guarantee uniqueness of the handshake (non-replayability) without keeping potentially undue amounts of state. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc8446#appendix-E.1.3"}),"RFC 8446, Appendix E.1.3"),"."))}p.isMDXComponent=!0},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);