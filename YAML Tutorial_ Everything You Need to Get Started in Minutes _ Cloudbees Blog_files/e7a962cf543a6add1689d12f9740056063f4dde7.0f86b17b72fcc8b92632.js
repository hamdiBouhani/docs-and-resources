(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{AdYv:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var o=n("q1tI"),a=n("KQPQ"),i=n("EGGI"),s=n("TSYQ"),l=n.n(s),c=n("JYgz"),r=n("hRPy"),d=n("34It"),u=n("m1+h"),v=n("9GWI"),m=o.createElement,g=function(e){var t,n=function(e){var t,n=e.contentfulMetadata.tags.filter((function(e){var t;return null===e||void 0===e||null===(t=e.id)||void 0===t?void 0:t.includes("industry")}));if(n&&0!==n.length){var o,a=n[0],i=null===a||void 0===a||null===(t=a.id)||void 0===t?void 0:t.split("industry");if(2===(null===i||void 0===i?void 0:i.length))return null===(o=i[1].match(/[A-Z][a-z]+/g))||void 0===o?void 0:o.join(" ")}}(e),o=null===(t=e.content)||void 0===t?void 0:t.__typename,s=function(e){var t,n=null,o=!1;"ExternalNews"===(null===(t=e.content)||void 0===t?void 0:t.__typename)?n=e.content.date:(n=e.publishedDate,o=!0);var a=n?Object(u.a)(n):void 0;return a&&o&&(a="Release Date: ".concat(a)),a}(e),g=function(e){var t,n=Object(c.a)(e),o={width:800,height:540,fit:"pad"},a="p-3_5";switch(null===(t=e.content)||void 0===t?void 0:t.__typename){case"Blog":o={width:822,height:562,fit:"fill"},a=void 0;break;case"VideoPage":var s,l,r=null===(s=e.content)||void 0===s||null===(l=s.video)||void 0===l?void 0:l.videoId;if(r)return m(d.ComponentWistiaThumbnail,{size:{width:320,height:260},srcSets:[{width:800,height:540,breakpoint:991}],videoId:r});break;case"ExternalNews":case"News":case"SecurityAdvisory":return}return m(i.Image,{resize:o,cssClasses:a,asset:n})}(e),h="ExternalNews"===o?e.content.newsOutlet:null;return m(a.a,{target:"ExternalNews"===o?"_blank":"_self",href:Object(r.d)(e),className:l()(g?"borderless align-self-baseline":"flex-grow-1","d-flex flex-column align-self-stretch flex-lg-row card resources-card rounded-1 action-depth")},g?m("div",{className:"media-container p-lg-2"},m("div",{className:"card-media media-resource-item rounded-1 border"},g)):m("div",{className:"hover-treatment d-none d-lg-block"}),m("div",{className:"content-container flex-grow-1 pt-4_5 pb-4 px-2 px-lg-4_5"},m("div",{className:"d-flex flex-column h-100"},m("h4",{className:"title display-5 m-0 p-0"},function(e){var t,n;switch(null===(t=e.content)||void 0===t?void 0:t.__typename){case"Blog":case"CustomerStory":case"ExternalNews":case"News":return e.content.title||"";case"VideoPage":return(null===(n=e.content.video)||void 0===n?void 0:n.title)||"";case"SecurityAdvisory":var o,a="CloudBees";return 1===(null===(o=e.content.categories)||void 0===o?void 0:o.length)&&(a=e.content.categories[0]||""),"".concat(a," Security Advisory");case"Whitepaper":return e.content.title||"";default:return""}}(e)),m("div",{className:"meta-footer pt-2_5"},m("div",{className:"meta-container d-md-flex align-items-end"},m("div",{className:"meta-categories"},m("div",{className:"page-type"},m("div",{className:l()("accent-line sm mb-2"),"aria-hidden":"true"}),m("small",{className:"meta-item meta-primary text-uppercase d-block pt-1"},Object(c.b)(e))),n&&m("small",{className:"meta-item meta-secondary d-block pt-1"},n)),function(e,t){return!(!e||!t)&&["News","SecurityAdvisory","ExternalNews"].includes(t)}(s,o)&&m("div",{className:"d-flex align-items-center w-100 pb-md-0 border-md-bottom-0"},m("svg",{width:16,height:16,className:"mr-2",viewBox:v.a.viewBox,preserveAspectRatio:"xMidYMin"},m("use",{xlinkHref:"#".concat(v.a.id)})),m("div",{className:"small text-nowrap"},s)),function(e){var t,n,o=void 0;if("CustomerStory"===(null===(t=e.content)||void 0===t?void 0:t.__typename)||"Blog"===(null===(n=e.content)||void 0===n?void 0:n.__typename)){var a=e.content.readingTime;a&&(o=m("small",{className:"text-muted"},a," min read"))}return o&&m("div",{className:"hidden-content ml-md-auto mt-1_5 mr-1_5 align-self-end"},m("small",null,o))}(e)),"ExternalNews"===o&&m("div",{className:"mt-2"},m("span",{className:"badge badge-dark background-gray-dark rounded-3 px-1_5"},h))))))}},JYgz:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n("yiHq"),a=function(e){var t,n;if("fields"in e)switch(null===(t=e.fields.content)||void 0===t?void 0:t.sys.contentType.sys.id){case"customerStory":return"Customer Story";case"blog":return"Blog";default:return"Content"}else switch(null===(n=e.content)||void 0===n?void 0:n.__typename){case"CustomerStory":return"Customer Story";case"Blog":return"Blog";case"VideoPage":return"Video";default:return""}},i=function(e){var t,n,a,i,s,l,c,r,d,u,v,m;if("fields"in e)switch(null===(t=e.fields.content)||void 0===t?void 0:t.sys.contentType.sys.id){case"customerStory":return null===(n=e.fields.content.fields.company)||void 0===n||null===(a=n.fields)||void 0===a?void 0:a.logo;case"blog":return e.fields.content.fields.heroImage;case"news":var g=e.fields.content.fields.content;return g?Object(o.getFirstImage)(g):void 0}else switch(null===(i=e.content)||void 0===i?void 0:i.__typename){case"Whitepaper":return{fields:{file:{url:null===(s=e.content)||void 0===s||null===(l=s.whitepaper)||void 0===l||null===(c=l.image)||void 0===c?void 0:c.url}}};case"CustomerStory":return{fields:{file:{url:null===(r=e.content)||void 0===r||null===(d=r.company)||void 0===d||null===(u=d.logo)||void 0===u?void 0:u.url}}};case"Blog":return{fields:{file:{url:null===(v=e.content)||void 0===v||null===(m=v.heroImage)||void 0===m?void 0:m.url}}}}}},QVl8:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var o=n("HALo"),a=n("q1tI"),i=n("4BeY"),s=n.n(i),l=n("IaFt"),c=n.n(l),r=new s.a({id:"social-icons-sharing-tools-email",use:"social-icons-sharing-tools-email-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="social-icons-sharing-tools-email"><path d="M21.4 0H2.6C1.2 0 0 1.2 0 2.6v18.9C0 22.8 1.2 24 2.6 24h18.9c1.4 0 2.6-1.2 2.6-2.6V2.6C24 1.2 22.8 0 21.4 0zM20 17.2c0 .9-.7 1.6-1.6 1.6H5.6c-.9 0-1.6-.7-1.6-1.6V7.6C4 6.7 4.7 6 5.6 6h12.8c.9 0 1.6.7 1.6 1.6v9.6zM5.6 7.6v1.6l6.4 4 6.4-4V7.6l-6.4 4-6.4-4z" /></symbol>'}),d=(c.a.add(r),r),u=new s.a({id:"social-icons-sharing-tools-facebook",use:"social-icons-sharing-tools-facebook-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="social-icons-sharing-tools-facebook">\n  <defs></defs>\n  <path fill-rule="evenodd" d="M21.4286 0H2.5714C1.1513 0 0 1.1513 0 2.5714v18.8572C0 22.8487 1.1513 24 2.5714 24h7.3527v-8.1595h-3.375V12h3.375V9.0729c0-3.3295 1.9822-5.1686 5.018-5.1686 1.454 0 2.9743.2593 2.9743.2593v3.2678h-1.6751c-1.6506 0-2.1654 1.0243-2.1654 2.0748V12h3.6846l-.5892 3.8405h-3.0954V24h7.3527C22.8487 24 24 22.8487 24 21.4286V2.5714C24 1.1513 22.8487 0 21.4286 0z" />\n</symbol>'}),v=(c.a.add(u),u),m=new s.a({id:"social-icons-sharing-tools-linkedin",use:"social-icons-sharing-tools-linkedin-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="social-icons-sharing-tools-linkedin">\n  <defs></defs>\n  <path fill-rule="evenodd" d="M22.2857 0H1.709C.7661 0 0 .7768 0 1.7304v20.5392C0 23.2232.766 24 1.709 24h20.5767C23.2286 24 24 23.2232 24 22.2696V1.7304C24 .7768 23.2286 0 22.2857 0zM7.2536 20.5714H3.6964V9.118H7.259v11.4535h-.0053zM5.475 7.5536c-1.141 0-2.0625-.9268-2.0625-2.0625s.9214-2.0625 2.0625-2.0625c1.1357 0 2.0625.9268 2.0625 2.0625 0 1.141-.9214 2.0625-2.0625 2.0625zm15.1125 13.0178h-3.5571V15c0-1.3286-.0268-3.0375-1.8483-3.0375-1.8535 0-2.1375 1.4464-2.1375 2.941v5.668H9.4875V9.1178H12.9v1.5642h.0482c.4768-.9 1.6393-1.8482 3.3697-1.8482 3.6 0 4.2696 2.3732 4.2696 5.459v6.2785z" />\n</symbol>'}),g=(c.a.add(m),m),h=new s.a({id:"social-icons-sharing-tools-reddit",use:"social-icons-sharing-tools-reddit-usage",viewBox:"0 0 25 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" id="social-icons-sharing-tools-reddit">\n  <defs></defs>\n  <path fill-rule="evenodd" d="M15.8444 16.7946c.1447.1447.1447.3643 0 .4929-1.3125 1.3125-5.025 1.3179-6.3428 0-.1447-.1286-.1447-.3482 0-.4929.1285-.1285.3482-.1285.4768 0 1.0017 1.0286 4.3392 1.05 5.3839 0 .1286-.1232.3536-.1232.4821 0zm-4.891-2.8821c0-.7982-.6375-1.4357-1.4197-1.4357a1.429 1.429 0 00-1.4357 1.4357c0 .7821.6375 1.4196 1.4357 1.4196.7822 0 1.4197-.6375 1.4197-1.4196zm4.8589-1.4357c-.7822 0-1.4197.6375-1.4197 1.4357 0 .7821.6375 1.4196 1.4197 1.4196.7982 0 1.4357-.6375 1.4357-1.4196a1.429 1.429 0 00-1.4357-1.4357zm8.8607-9.9054v18.8572c0 1.4196-1.1518 2.5714-2.5714 2.5714H3.2444C1.8248 24 .673 22.8482.673 21.4286V2.5714C.673 1.1518 1.8248 0 3.2444 0h18.8572c1.4196 0 2.5714 1.1518 2.5714 2.5714zm-5.341 7.5322c-.5411 0-1.018.225-1.3715.5732-1.291-.8947-3.0268-1.4679-4.9554-1.5322L14.007 4.634l3.1875.7179c0 .7821.6375 1.4196 1.4197 1.4196.7982 0 1.4357-.6535 1.4357-1.4357 0-.7821-.6375-1.4357-1.4357-1.4357-.5572 0-1.034.3321-1.275.7982l-3.5197-.7821c-.1768-.0482-.3482.0803-.3964.2571l-1.0982 4.9714c-1.9125.0804-3.6322.6536-4.9232 1.5483-.3482-.3643-.8465-.5893-1.3875-.5893-2.009 0-2.6679 2.7-.8304 3.616a4.124 4.124 0 00-.0964.8947c0 3.0268 3.4125 5.4803 7.6018 5.4803 4.2053 0 7.6178-2.4535 7.6178-5.4803 0-.3054-.0321-.6214-.1125-.9107 1.8-.9215 1.1357-3.6-.8625-3.6z" />\n</symbol>'}),f=(c.a.add(h),h),p=new s.a({id:"social-icons-sharing-tools-twitter",use:"social-icons-sharing-tools-twitter-usage",viewBox:"0 0 25 25",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="social-icons-sharing-tools-twitter">\n  <defs></defs>\n  <path fill-rule="evenodd" d="M22.2966.35H3.4394C2.0198.35.868 1.5018.868 2.9214v18.8572c0 1.4196 1.1518 2.5714 2.5714 2.5714h18.8572c1.4196 0 2.5714-1.1518 2.5714-2.5714V2.9214C24.868 1.5018 23.7162.35 22.2966.35zm-2.6197 8.5071c.0107.15.0107.3054.0107.4554 0 4.6446-3.5357 9.9964-9.9964 9.9964-1.9928 0-3.841-.5785-5.3946-1.575.2839.0322.5571.0429.8464.0429 1.6446 0 3.1554-.5572 4.3607-1.5-1.5428-.0322-2.8393-1.0447-3.284-2.4375.5412.0803 1.0287.0803 1.5858-.0643-1.6071-.3268-2.8125-1.741-2.8125-3.45v-.0429c.466.2625 1.0125.4233 1.5857.4447a3.506 3.506 0 01-1.5643-2.925c0-.6536.1715-1.2536.4768-1.7732a9.9763 9.9763 0 007.2429 3.675c-.4982-2.384 1.2857-4.3179 3.4285-4.3179 1.0125 0 1.9233.4232 2.5661 1.109.7929-.15 1.5536-.4447 2.2286-.8465a3.5043 3.5043 0 01-1.5429 1.934c.7072-.075 1.3929-.2733 2.025-.5465a7.3955 7.3955 0 01-1.7625 1.8214z" />\n</symbol>'}),w=(c.a.add(p),p),x=n("TSYQ"),y=n.n(x),b=n("hRPy"),N=a.createElement,_=function(e){var t=e.onlyIcons,n=e.socialIcon,o=e.socialText,a=e.row,i=o;return"gmail"===o&&(i="google_gmail"),N("li",{className:y()("list-group-item bg-transparent border-0 py-1 px-xl-1_5",{"px-1_5":a})},N("a",{href:"#",className:"a2a_button_".concat(i)},N("svg",{width:24,height:24,className:"social-icon",viewBox:"".concat(n.viewBox),preserveAspectRatio:"xMidYMin"},N("use",{xlinkHref:"#".concat(n.id)})),!t&&N("span",{className:"text-capitalize small py-1 px-3 d-inline-block d-xl-none"},o)))},C=function(e){var t=void 0;return e.url&&(t="string"===typeof e.url?e.url:"https://cloudbees.com".concat(Object(b.d)(e.url))),N("ul",{"data-a2a-url":t,"data-a2a-title":e.text,className:y()("social-widget text-nowrap list-group d-flex flex-xl-row a2a_kit a2a_kit_size_24 a2a_default_style justify-content-center",{"flex-row":e.row})},N(_,Object(o.a)({},e,{socialIcon:v,socialText:"facebook"})),N(_,Object(o.a)({},e,{socialIcon:w,socialText:"twitter"})),N(_,Object(o.a)({},e,{socialIcon:f,socialText:"reddit"})),N(_,Object(o.a)({},e,{socialIcon:g,socialText:"linkedin"})),N(_,Object(o.a)({},e,{socialIcon:d,socialText:"gmail"})))}},Sndc:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n("xvhg"),a=n("q1tI"),i=n("QVl8"),s=n("TSYQ"),l=n.n(s),c=n("4BeY"),r=n.n(c),d=n("IaFt"),u=n.n(d),v=new r.a({id:"social-icons-sharing-tools-share",use:"social-icons-sharing-tools-share-usage",viewBox:"0 0 18 20",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" id="social-icons-sharing-tools-share">\n  <defs></defs>\n  <path d="M15 14.1c-.8 0-1.4.3-2 .8l-7.1-4.2c.1-.2.1-.5.1-.7s0-.5-.1-.7L13 5.2c.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .2 0 .5.1.7L5 7.8C4.5 7.3 3.8 7 3 7c-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.8l7.1 4.2c-.1.2-.1.4-.1.6 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9-1.2-2.9-2.8-2.9z" />\n</symbol>'}),m=(u.a.add(v),v),g=a.createElement,h=function(e){var t=e.className,n=e.url,s=a.useState(!1),c=Object(o.a)(s,2),r=c[0],d=c[1];return g("div",{className:"social-widget px-2 py-2 p-md-2 py-lg-4"},g("div",{className:"dropdown d-flex justify-content-md-center",onClick:function(){d(!r)}},g("button",{className:l()(t,"btn btn-share d-block text-nowrap"),"aria-expanded":"true","aria-haspopup":"true","data-toggle":"dropdown",type:"button"},g("svg",{width:16,height:16,className:"social-icon mr-3",viewBox:m.viewBox,preserveAspectRatio:"xMidYMin"},g("use",{xlinkHref:"#".concat(m.id)})),g("span",null,"Share")),g("div",{"aria-labelledby":"dropdownMenuButton",className:"dropdown-menu p-3 ".concat(r?"show":"d-none")},g(i.a,{url:n}))))}},cQPN:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("AdYv"),a=n("q1tI"),i=a.createElement,s=function(e){var t=e.pages,n=e.title;return i("div",{className:"mw-16 my-5 my-lg-7 px-2_5"},i("h4",{className:"text-center display-4"},void 0===n?"Related Content":n),i("div",{className:"resource-list-container pt-4 pt-md-5","data-test":"container.resourceList.relatedContent"},i("div",{className:"row no-gutters"},null===t||void 0===t?void 0:t.map((function(e){return i("div",{key:e.slug,className:"col-md-6 col-xxl-4 px-2 px-md-3_5 px-lg-2 px-xl-3_5 mb-4_5 mb-lg-5_5"},i(o.a,e))})))))}},"m1+h":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("sWYD"),a=n("4+6U"),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/dd/yyyy",n=e.substring(0,10);return Object(o.a)(Object(a.a)(n),t)}}}]);