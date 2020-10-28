(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(97)),s={id:"integrate-payid-users",title:"Integrate Existing User Databases",sidebar_label:"Integrate Existing User Databases"},o={unversionedId:"integrate-payid-users",id:"integrate-payid-users",isDocsHomePage:!1,title:"Integrate Existing User Databases",description:"If you have an existing user database, you can take the following steps to integrate PayID functionality into your product.",source:"@site/docs/integrate-payid-users.md",permalink:"/payid-documentation/review-apps/loisrp-sandbox-tutorial/4def42/integrate-payid-users",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/integrate-payid-users.md",sidebar_label:"Integrate Existing User Databases",sidebar:"docs",previous:{title:"Security Best Practices",permalink:"/payid-documentation/review-apps/loisrp-sandbox-tutorial/4def42/payid-best-practices"},next:{title:"Metrics",permalink:"/payid-documentation/review-apps/loisrp-sandbox-tutorial/4def42/metrics"}},c=[{value:"Extend existing database tables with new columns",id:"extend-existing-database-tables-with-new-columns",children:[]},{value:"Match column names in data access functions",id:"match-column-names-in-data-access-functions",children:[]},{value:"Change the type of database",id:"change-the-type-of-database",children:[]},{value:"Set environment variables",id:"set-environment-variables",children:[]},{value:"Update database migrations",id:"update-database-migrations",children:[]},{value:"Update SQL files",id:"update-sql-files",children:[]}],d={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you have an existing user database, you can take the following steps to integrate PayID functionality into your product."),Object(i.b)("h2",{id:"extend-existing-database-tables-with-new-columns"},"Extend existing database tables with new columns"),Object(i.b)("p",null,"The PayID ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/blob/master/src/db/schema/01_account.sql"}),"account schema")," is used to define a table for users."),Object(i.b)("p",null,"The account table contains two fields: ",Object(i.b)("inlineCode",{parentName:"p"},"id")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pay_id"),". The address table uses a foreign key column called ",Object(i.b)("inlineCode",{parentName:"p"},"account_id")," which depends on ",Object(i.b)("inlineCode",{parentName:"p"},"id")," as a foreign key to associate addresses with individual accounts. The second column is ",Object(i.b)("inlineCode",{parentName:"p"},"pay_id")," which is where we store the string identifier (such as ",Object(i.b)("inlineCode",{parentName:"p"},"alice$wallet.com"),")."),Object(i.b)("p",null,"With an existing user database, you will need to add the ",Object(i.b)("inlineCode",{parentName:"p"},"pay_id")," column. Your user database might already have the equivalent of an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," field, but if not, add this column so that each address can reference a specific user."),Object(i.b)("p",null,"The PayID account schema has three constraints that could be useful to apply to your existing user database. Two constraints guarantee that all entered PayIDs are lowercase and are not empty strings. The final and most important constraint is that the regex constraint ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/blob/master/src/db/schema/01_account.sql#L17"}),"valid_pay_id")," guarantees that all entered PayIDs are in compliance with the format outlined in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://payid.org/whitepaper.pdf"}),"PayID whitepaper"),"."),Object(i.b)("p",null,"The PayID ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/blob/master/src/db/schema/02_address.sql"}),"address schema")," is used to define a table of addresses associated with users."),Object(i.b)("p",null,"Whenever a PayID is queried, the payment network and environment are sent via an Accept header. Therefore, it is important that each address stored has an associated payment network and environment. For example, upon receipt of the accept header ",Object(i.b)("inlineCode",{parentName:"p"},"application/xrpl-testnet+json")," you should query your address table for the address associated with the ",Object(i.b)("inlineCode",{parentName:"p"},"xrpl")," payment network and ",Object(i.b)("inlineCode",{parentName:"p"},"testnet")," environment."),Object(i.b)("h2",{id:"match-column-names-in-data-access-functions"},"Match column names in data access functions"),Object(i.b)("p",null,"All functions that query the database are located in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/tree/master/src/data-access"}),"src/data-access"),". If you use column names that do not match the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/tree/master/src/db/schema"}),"schema"),", then you must reflect those changes in the data access functions. The following table lists the files contained within ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/tree/master/src/data-access"}),"src/data-access")," and the corresponding column names they use:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"File name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Columns used"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/payid-org/payid/blob/master/src/data-access/payIds.ts"}),"payIds.ts")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"address.payment_network, address.environment, address.details")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/payid-org/payid/blob/master/src/data-access/reports.ts"}),"reports.ts")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"address.payment_network, address.environment")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/payid-org/payid/blob/master/src/data-access/users.ts"}),"users.ts")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"account.pay_id, account.id, address.account_id, address.payment_network, address.environment, address.details")))),Object(i.b)("h2",{id:"change-the-type-of-database"},"Change the type of database"),Object(i.b)("p",null,"The reference implementation described in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/"}),"Getting Started")," uses a Postgres database. To use a different type of database, either update the settings in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/blob/master/src/db/knex.ts"}),"knexfile"),", or replace the use of ",Object(i.b)("inlineCode",{parentName:"p"},"knex")," throughout the repository with your preferred database connection tool."),Object(i.b)("h2",{id:"set-environment-variables"},"Set environment variables"),Object(i.b)("p",null,"PayID depends on environment variables. All of these environment variables are read in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/blob/master/src/config.ts"}),"src/config.ts")," and assigned to variables. During integration, look through all of the environment variables used in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/blob/master/src/config.ts"}),"src/config.ts")," to ensure all are set properly for your environment."),Object(i.b)("h2",{id:"update-database-migrations"},"Update database migrations"),Object(i.b)("p",null,"If you use your own database, there are migration files written specifically for the tables outlined in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/tree/master/src/db/schema"}),"src/db/schema"),". Either remove these migration files, or update them to match your database."),Object(i.b)("h2",{id:"update-sql-files"},"Update SQL files"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".sql")," files within ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/tree/master/src/db"}),"src/db")," are each executed by the function ",Object(i.b)("inlineCode",{parentName:"p"},"syncDatabaseSchema")," located in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/blob/master/src/db/syncDatabaseSchema.ts"}),"db/syncDatabaseSchema.ts"),". To integrate into an existing system, be sure to look through the directories in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/blob/master/src/db/"}),"src/db")," to identify any ",Object(i.b)("inlineCode",{parentName:"p"},".sql")," files that you need to modify to fit your existing system, or to remove because they do not apply."))}b.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(s,".").concat(u)]||p[u]||l[u]||i;return a?r.a.createElement(m,o(o({ref:t},d),{},{components:a})):r.a.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);