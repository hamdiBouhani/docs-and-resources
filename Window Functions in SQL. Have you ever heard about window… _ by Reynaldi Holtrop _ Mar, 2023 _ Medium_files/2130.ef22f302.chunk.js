(self.webpackChunklite=self.webpackChunklite||[]).push([[2130],{66802:(e,n,t)=>{"use strict";t.d(n,{R4:()=>i,Ue:()=>l,xG:()=>o,Hp:()=>s});var r=t(93661),i=function(e,n,t){var r,i;return"undefined"!=typeof window&&e&&n&&!!(window.ApplePaySession&&null!==(r=window.ApplePaySession)&&void 0!==r&&r.supportsVersion(t)&&null!==(i=window.ApplePaySession)&&void 0!==i&&i.canMakePayments())},l=function(e){return e===r.FM.Monthly?"monthly":"yearly"};function o(e){var n=e.amount,t=e.currency,r=e.locale,i=e.floatingDigits,l=void 0===i?[2,2]:i,o=e.isLongFormat,s=void 0!==o&&o,a=r||"undefined"!=typeof window&&window.navigator.language||"en-US",u=t||"USD";if(!Intl)return"".concat(n," ").concat(u);var c=n%1!=0;try{var d=new Intl.NumberFormat(a,{style:"currency",currency:u,minimumFractionDigits:c&&l[1]>0?l[1]:l[0],maximumFractionDigits:l[1],currencyDisplay:"narrowSymbol"}).format(n);return s?"".concat(d," ").concat(t):d}catch(e){return String(n)}}var s=function(e,n,t){var r=String(e);return t?"".concat(r," ").concat(n):r}},84683:(e,n,t)=>{"use strict";t.d(n,{d:()=>o});var r=t(319),i=t.n(r),l=t(68216),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionAvatar_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"avatar"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}}].concat(i()(l.nf.definitions))}},19308:(e,n,t)=>{"use strict";t.d(n,{b:()=>s,I:()=>a});var r=t(319),i=t.n(r),l=t(68216),o=t(98007),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_collection"}}]}}].concat(i()(l.nf.definitions),i()(o.Os.definitions))}},76107:(e,n,t)=>{"use strict";t.d(n,{b:()=>r});var r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MembershipUpsellModal_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}},61279:(e,n,t)=>{"use strict";t.d(n,{DI:()=>F,nj:()=>C,oT:()=>_});var r=t(59713),i=t.n(r),l=t(63038),o=t.n(l),s=t(28655),a=t.n(s),u=t(82492),c=t.n(u),d=t(92471),m=t(21919),v=t(67294),f=t(25735),p=t(9354),b=t(75880),w=t(18627),S=t(66411),h=t(78285);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(){var e=a()(["\n  mutation fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe($userId: ID!) {\n    fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe(userId: $userId) {\n      __typename\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return E=function(){return e},e}function k(){var e=a()(["\n  mutation unsubscribeNewsletterV3($newsletterV3Id: ID!) {\n    unsubscribeNewsletterV3(newsletterV3Id: $newsletterV3Id)\n  }\n"]);return k=function(){return e},e}function V(){var e=a()(["\n  mutation subscribeNewsletterV3($newsletterV3Id: ID!, $shouldRecordConsent: Boolean) {\n    subscribeNewsletterV3(\n      newsletterV3Id: $newsletterV3Id\n      shouldRecordConsent: $shouldRecordConsent\n    )\n  }\n"]);return V=function(){return e},e}function N(){var e=a()(["\n  fragment useNewsletterV3Subscription_newsletterV3_viewerEdge on NewsletterV3 {\n    viewerEdge {\n      id\n      isSubscribed\n    }\n  }\n"]);return N=function(){return e},e}function P(){var e=a()(["\n  fragment useNewsletterV3Subscription_user on User {\n    id\n    username\n    newsletterV3 {\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return P=function(){return e},e}function O(){var e=a()(["\n  fragment useNewsletterV3Subscription_newsletterV3 on NewsletterV3 {\n    id\n    type\n    slug\n    name\n    collection {\n      slug\n    }\n    user {\n      id\n      name\n      username\n      newsletterV3 {\n        id\n      }\n    }\n  }\n"]);return O=function(){return e},e}var F=(0,d.Ps)(O()),C=(0,d.Ps)(P(),F),M=((0,d.Ps)(N()),(0,d.Ps)(V())),x=(0,d.Ps)(k()),D=(0,d.Ps)(E(),F),_=function(e){var n=e.newsletterV3,t=e.creator,r=e.newsletterName,i=e.hideLinkInConfirmationToast,l=void 0!==i&&i,s=n||{},a=s.id,u=s.type,d=s.slug,g=s.collection,E=(null==n?void 0:n.user)||t,k=null!=r?r:null==n?void 0:n.name,V=v.useState(!1),N=o()(V,2),P=N[0],O=N[1],F=(0,p.T)({newsletterSlug:d,collectionSlug:null==g?void 0:g.slug,username:null==E?void 0:E.username}),_=F.viewerEdge,U=F.loading,I=(0,f.VB)({name:"enable_auto_follow_on_subscribe",placeholder:!1}),T=v.useState(!1),R=o()(T,2),A=R[0],B=R[1];v.useEffect((function(){B(!(null==_||!_.isSubscribed))}),[null==_?void 0:_.isSubscribed]);var L=(0,w.Av)(),Y=(0,S.Qi)(),j=(0,h.w)();P&&L.event("newsletterV3.subscribe.error",{newsletterV3Id:a});var G=function(e,n,t){if(t){var r={id:"User:".concat(null==E?void 0:E.id),fragment:C,fragmentName:"useNewsletterV3Subscription_user"},i=e.readFragment(r);e.writeFragment(y(y({},r),{},{data:y(y({},i),{},{newsletterV3:t})}))}if(_){var l=e.readQuery({query:p.p,variables:{newsletterSlug:d,collectionSlug:null==g?void 0:g.slug,username:null==E?void 0:E.username}}),o=c()({},l,{newsletterV3:{viewerEdge:{isSubscribed:n}}});e.writeQuery({query:p.p,variables:{newsletterSlug:d||"",collectionSlug:null==g?void 0:g.slug,username:null==E?void 0:E.username},data:o})}n&&null!=E&&E.id&&I&&(0,b.I0)(e,E.id,{isFollowing:!0})},$=(0,m.D)(M,{onCompleted:function(e){var n=e.subscribeNewsletterV3;O(!n),n&&(L.event("newsletterV3.subscribeClicked",{newsletterV3Id:a,source:Y}),B(!0))},update:function(e){G(e,!0)}}),z=o()($,1)[0],H=(0,m.D)(x,{onCompleted:function(e){var n=e.unsubscribeNewsletterV3;O(!n),n&&(B(!1),j({duration:l?5e3:"NEXTPAGE",toastStyle:"NEWSLETTER_UNSUBSCRIBE",extraParams:{newsletterName:k||null,newsletterType:u||null,unsubscribeFn:function(){return B(!1)},hideEmailSettingsLink:l,hideCloseButton:l}}))},update:function(e){G(e,!1)}}),W=o()(H,1)[0],Q=(0,m.D)(D,{onCompleted:function(e){var n=e.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe;O(!n),n&&(L.event("newsletterV3.subscribeClicked",{newsletterV3Id:n.id,source:Y}),B(!0))},update:function(e,n){var t,r=y({},null===(t=n.data)||void 0===t?void 0:t.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe);G(e,!0,r)}}),K=o()(Q,1)[0];return{isSubscribed:A,hasError:P,setSubscribe:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];O(!1),e&&!n&&null!=t&&t.id?K({variables:{userId:null==t?void 0:t.id}}):e&&null!=n&&n.id?z({variables:{newsletterV3Id:null==n?void 0:n.id,shouldRecordConsent:r}}):null!=n&&n.id?W({variables:{newsletterV3Id:null==n?void 0:n.id}}):O(!0)},loading:U}}},93661:(e,n,t)=>{"use strict";t.d(n,{FM:()=>i,kr:()=>c,OS:()=>d});var r,i,l,o=t(59713),s=t.n(o),a=t(66802);!function(e){e.Monthly="monthly",e.Yearly="yearly",e.YearlyCrossout="yearlyCrossout",e.YearlyStaff="yearlyStaff",e.YearlyPriceSaved="yearlyPriceSaved",e.YearlyStaffPriceSaved="YearlyStaffPriceSaved",e.FiftyPercentOffOneYearDiscountPrice="FiftyPercentOffOneYearDiscountPrice",e.FiftyPercentOffOneYearDiscountCrossoutPrice="FiftyPercentOffOneYearDiscountCrossoutPrice",e.FiftyPercentOffOneYearDiscountSavedMembershipPrice="FiftyPercentOffOneYearDiscountSavedMembershipPrice"}(i||(i={})),function(e){e[e.NoDiscount=0]="NoDiscount",e[e.FiftyPercentOffOneYear=1]="FiftyPercentOffOneYear"}(l||(l={}));var u={plan:(r={},s()(r,i.Monthly,5),s()(r,i.Yearly,50),s()(r,i.YearlyCrossout,60),s()(r,i.YearlyStaff,1),s()(r,i.YearlyPriceSaved,10),s()(r,i.YearlyStaffPriceSaved,49),s()(r,i.FiftyPercentOffOneYearDiscountPrice,25),s()(r,i.FiftyPercentOffOneYearDiscountCrossoutPrice,50),s()(r,i.FiftyPercentOffOneYearDiscountSavedMembershipPrice,25),r),currency:"USD"},c=function(e){var n=e.membershipType,t=u.currency,r=u.plan[n||i.Yearly];if(!r)throw new Error("Unavailable membership price");return{amount:r,currency:t}},d=function(e){var n=e.membershipType,t=e.excludeCurrencySign,r=void 0!==t&&t,i=e.isLongFormat,l=void 0!==i&&i,o=c({membershipType:n}),s=o.amount,u=o.currency;return r?(0,a.Hp)(s,u,l):(0,a.xG)({amount:s,currency:u,floatingDigits:[0,0],isLongFormat:l})}},9354:(e,n,t)=>{"use strict";t.d(n,{T:()=>a,p:()=>u});var r=t(28655),i=t.n(r),l=t(64718),o=t(92471);function s(){var e=i()(["\n  query NewsletterV3ViewerEdge($newsletterSlug: ID!, $collectionSlug: ID, $username: ID) {\n    newsletterV3(\n      newsletterSlug: $newsletterSlug\n      collectionSlug: $collectionSlug\n      username: $username\n    ) {\n      ... on NewsletterV3 {\n        id\n        viewerEdge {\n          id\n          isSubscribed\n        }\n      }\n    }\n  }\n"]);return s=function(){return e},e}var a=function(e){var n,t=e.newsletterSlug,r=void 0===t?"":t,i=e.collectionSlug,o=e.username,s=(0,l.a)(u,{variables:{newsletterSlug:r,collectionSlug:i,username:o},ssr:!1,skip:!r&&!o}),a=s.loading,c=s.error,d=s.data;return a?{loading:a}:c?{error:c}:{viewerEdge:null==d||null===(n=d.newsletterV3)||void 0===n?void 0:n.viewerEdge}},u=(0,o.Ps)(s())},24330:(e,n,t)=>{"use strict";t.d(n,{N:()=>u});var r=t(63038),i=t.n(r),l=t(67294),o=t(32317),s=t(69116),a=t(77355),u=function(e){var n=e.creator,t=e.followButtonSize,r=void 0===t?"REGULAR":t,u=e.shouldHideTooltip,c=void 0!==u&&u,d=e.post,m=e.showMembershipUpsellModal,v=e.susiEntry,f=e.isVisible,p=e.width,b=e.isSubscribeCompact,w=void 0!==b&&b,S=l.useState(!1),h=i()(S,2),g=h[0],y=h[1];return l.createElement(l.Fragment,null,l.createElement(o.Bv,{buttonSize:r,onClick:function(){n.viewerEdge.isFollowing||y(!0)},post:d,user:n,susiEntry:v,width:p}),l.createElement(a.x,{marginLeft:w?"4px":"8px"},l.createElement(s.X,{user:n,showMembershipUpsellModal:m,showPostFollowSubscribeTooltip:g&&!c,hidePostFollowSubscribeTooltip:function(){return y(!1)},isVisible:f,isCompact:w})))}},69116:(e,n,t)=>{"use strict";t.d(n,{X:()=>se,w:()=>ae});var r=t(28655),i=t.n(r),l=t(63038),o=t.n(l),s=t(92471),a=t(67294),u=t(21919),c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateUserPostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userUpdatePostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}}]}}]}}]},d=t(6443),m=t(14818),v=t(13791),f=t(77355),p=t(54945),b=t(87691),w=t(18627),S=t(66411),h=t(43487),g=t(87498),y=t(78870),E=t(50458),k="after_subscribe_membership_upsell",V=function(e){var n=e.user,t=e.isVisible,r=e.hide,i=(0,h.v9)((function(e){return e.config.authDomain})),l=(0,w.Av)(),s=(0,d.H)(),V=s.value,N=s.loading;a.useEffect((function(){var e;N||null!=V&&V.postSubscribeMembershipUpsellShownAt||(l.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:null===(e=n.newsletterV3)||void 0===e?void 0:e.id,source:k}),O())}),[N]);var P=(0,u.D)(c,{optimisticResponse:{userUpdatePostSubscribeMembershipUpsellShownAt:{__typename:"User",id:(null==V?void 0:V.id)||"",postSubscribeMembershipUpsellShownAt:(new Date).getTime()}}}),O=o()(P,1)[0];return a.createElement(S.cW,{source:{name:k}},a.createElement(v.v,{isVisible:t,hide:r,withCloseButton:!0,withAnimation:!0,buttonStyle:"STRONG",buttonSize:"REGULAR",cancelText:"Not now",confirmText:"Become a member",onConfirm:function(){var e,t;l.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:null===(e=n.newsletterV3)||void 0===e?void 0:e.id,source:k}),t=(0,y.Rk)((0,E.c5p)(i),{subscribeToUserId:n.id,source:k}),window.location.href=t},showCancelButton:!0,isDestructiveAction:!1},a.createElement(f.x,{marginBottom:"24px"},a.createElement(m.z,{miroId:n.imageId||g.gG,alt:n.name||"",diameter:80,freezeGifs:!1})),a.createElement(f.x,{marginBottom:{xs:"8px",sm:"8px",md:"16px",lg:"16px",xl:"16px"}},a.createElement(p.H2,{scale:{xs:"S",sm:"S",md:"L",lg:"L",xl:"L"}},"You’re subscribed to get email updates. Become a member for more.")),a.createElement(f.x,{marginBottom:"32px"},a.createElement(b.F,{tag:"span",scale:{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},"Your membership fee directly supports ",n.name," and other writers you read. Get full access to every story on Medium."))))},N=t(76107),P=t(77280),O=t(61279),F=t(93661),C=t(98863),M=t(26350),x=t(43822),D=t(47230),_=t(73917),U=t(26244),I=t(1383),T=t(14646),R=t(31889),A=t(34135),B=t(97217),L=t(78285);function Y(){return(Y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var j=a.createElement("path",{d:"M14 7.29L15.6 9 18 6M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),G=a.createElement("path",{d:"M6 8.44l5.27 3.87 1.4-1.06.7-.52"});const $=function(e){return a.createElement("svg",Y({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),j,G)};function z(){return(z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var H=a.createElement("path",{d:"M24 13l2 2 3-3.5M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),W=a.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const Q=function(e){return a.createElement("svg",z({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),H,W)};function K(){return(K=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var X=a.createElement("path",{d:"M14.58 6.89h3.92M16.39 9V5.08M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),q=a.createElement("path",{d:"M6 8.44l5.27 3.87 2.81-2.11"});const J=function(e){return a.createElement("svg",K({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),X,q)};function Z(){return(Z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var ee=a.createElement("rect",{x:26.25,y:9.25,width:.5,height:6.5,rx:.25}),ne=a.createElement("rect",{x:29.75,y:12.25,width:.5,height:6.5,rx:.25,transform:"rotate(90 29.75 12.25)"}),te=a.createElement("path",{d:"M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),re=a.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const ie=function(e){return a.createElement("svg",Z({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),ee,ne,te,re)};var le=t(68894);function oe(){var e=i()(["\n  fragment UserSubscribeButton_user on User {\n    id\n    isPartnerProgramEnrolled\n    name\n    viewerEdge {\n      id\n      isFollowing\n      isUser\n    }\n    viewerIsUser\n    newsletterV3 {\n      id\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n    ...useNewsletterV3Subscription_user\n    ...MembershipUpsellModal_user\n  }\n  ","\n  ","\n  ","\n"]);return oe=function(){return e},e}var se=function(e){var n=e.user,t=e.showMembershipUpsellModal,r=void 0!==t&&t,i=e.showPostFollowSubscribeTooltip,l=void 0!==i&&i,s=e.hidePostFollowSubscribeTooltip,u=e.isVisible,c=void 0===u||u,m=e.isCompact,v=void 0!==m&&m,p=a.useRef(null),g=(0,T.I)(),k=(0,R.F)(),N=(0,d.H)().value,Y=(0,le.O)(!1),j=o()(Y,3),G=j[0],z=j[1],H=j[2],W=n.newsletterV3,K=(0,L.w)(),X=(0,w.Av)(),q=(0,S.pK)(),Z=(0,S.Qi)(),ee=(0,P.PM)(),ne=(0,O.oT)({newsletterV3:W,creator:n,newsletterName:n.name||void 0}),te=ne.isSubscribed,re=ne.hasError,oe=ne.loading,se=ne.setSubscribe,ae=(0,h.v9)((function(e){return e.config.authDomain})),ue=(0,y.Rk)((0,E.c5p)(ae),{subscribeToUserId:n.id,source:Z}),ce=!(null==N||!N.mediumMemberAt),de=a.useState(!1),me=o()(de,2),ve=me[0],fe=me[1],pe=a.useState(!1),be=o()(pe,2),we=be[0],Se=be[1],he=(0,S.P7)(ee||"").susiEntry,ge=void 0===he?"":he,ye=["newsletter_v3_promo","writer_subscription_landing"].includes(ge),Ee=["newsletter_v3_promo"].includes(ge),ke=(0,F.OS)({membershipType:F.FM.Monthly}),Ve=!1,Ne=function(){var e;!Ve&&c&&Pe()&&(X.event("newsletterV3.subscribePresented",{newsletterV3Id:(null===(e=n.newsletterV3)||void 0===e?void 0:e.id)||"",source:q}),Ve=!0)},Pe=function(){var e;if(!p.current)return!1;var n=null===(e=p.current)||void 0===e?void 0:e.getBoundingClientRect(),t=n.top+n.height/2;return t>=0&&t<=window.innerHeight};a.useEffect((function(){return Ne(),window&&A.V6.on("scroll",Ne),function(){A.V6.off("scroll",Ne)}}),[]),a.useEffect((function(){Ne()}),[c]);var Oe=(0,le.O)(!1),Fe=o()(Oe,3),Ce=Fe[0],Me=Fe[1],xe=Fe[2],De=function(e,n){var t=(0,d.H)(),r=t.value,i=t.loading,l=a.useRef(null),o=!(null==r||!r.mediumMemberAt),s=(0,P.PM)(),u=(0,S.P7)(s||"").susiEntry,c=["newsletter_v3_promo","writer_subscription_landing","subscribe_user"].includes(void 0===u?"":u);if(i)return!1;if(null!==l.current)return l.current;var m=c&&!o&&!e.viewerEdge.isUser&&!!e.isPartnerProgramEnrolled&&!(null!=r&&r.postSubscribeMembershipUpsellShownAt);return l.current=m,m}(n),_e=a.useState(!1),Ue=o()(_e,2),Ie=Ue[0],Te=Ue[1];a.useEffect((function(){r&&te&&!Ie&&De?Me():xe()}),[te,Ie,De]),a.useEffect((function(){ee&&!De&&ye&&te&&(!Ee&&Z===ge||Ee)&&K({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:n.name,newsletterType:B.Rr.NEWSLETTER_TYPE_AUTHOR,unsubscribeFn:function(){return se(!1)}}})}),[ee,te]),a.useEffect((function(){if(te&&we&&W){var e=!ce&&!!n.isPartnerProgramEnrolled;e&&X.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:W.id,source:Z}),fe(e),Se(!1)}}),[te,we,W]);var Re=(0,C.f)().isWorkingPreview;if(re||n.viewerEdge.isUser&&!Re)return null;var Ae,Be=te?"OBVIOUS":"STRONG",Le=function(e,n){return function(t){return{stroke:n?t.baseColor.background.normal:e,height:v?"23px":"36px",width:v?"23px":"36px"}}},Ye=g(Le(k.accentColor.fill.normal,oe)),je=g(Le(k.accentColor.background,oe));Ae=te?v?a.createElement($,{className:Ye}):a.createElement(Q,{className:Ye}):v?a.createElement(J,{className:je}):a.createElement(ie,{className:je});var Ge=a.createElement(D.z,{loading:oe,buttonStyle:Be,onClick:function(){var e;Se(!te),N?te?se(!1):N&&N.allowEmailAddressSharingEditorWriter?se(!0,!1):z():null!==(e=n.newsletterV3)&&void 0!==e&&e.id?X.event("newsletterV3.subscribeClicked",{newsletterV3Id:n.newsletterV3.id,source:Z}):X.event("user.LOSubscribeClicked",{targetUserId:n.id,source:Z})},padding:"0","aria-label":"Subscribe"},Ae),$e=function(){return a.createElement(f.x,{padding:"14px 12px 20px",maxWidth:"220px"},a.createElement(b.F,{tag:"div",scale:"S",color:"DARKER"},a.createElement("strong",null,"You're subscribed to ",n.name,". Become a member for more.")," Get full access to every story on Medium for ",ke," a month."),a.createElement(f.x,{paddingTop:"8px"},a.createElement(x.a,{isButton:!0,buttonStyle:"STRONG",buttonSize:"SMALL",redirectUrl:ue,width:"150px",onClick:function(){X.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:W.id,source:Z})}},a.createElement(f.x,{textAlign:"center"},a.createElement(b.F,{scale:"S",color:"WHITE"},"Become a member")))))},ze=function(){return a.createElement(f.x,{padding:"10px 12px",maxWidth:"166px"},a.createElement(b.F,{tag:"div",scale:"S",color:"DARKER"},"Subscribe to get an email whenever ",n.name," publishes."))},He=function(e){var n=e.children;return a.createElement(_.J,{isVisible:!!s&&!te,hide:s,placement:"bottom",popoverRenderFn:ze,targetDistance:10,role:"tooltip"},n)},We=function(e){var n=e.children;return a.createElement(_.J,{isVisible:!oe&&ve,hide:function(){return fe(!1)},placement:"bottom",popoverRenderFn:$e,targetDistance:10,role:"tooltip"},n)},Qe=function(e){var n=e.children;return a.createElement(U.$,{isVisible:!oe&&!te,hideOnClick:!0,noPortal:!0,mouseEnterDelay:500,mouseLeaveDelay:0,placement:"bottom",popoverRenderFn:ze,role:"tooltip",targetDistance:10},n)},Ke=function(e){var n=e.children;return l&&!te?a.createElement(He,null,n):ve?a.createElement(We,null,n):a.createElement(Qe,null,n)};return a.createElement("div",{ref:p},a.createElement(Ke,null,a.createElement(f.x,null,N&&a.createElement(I.Q,{onConfirm:function(){se(!0,!0)},isVisible:G,hide:H,titleText:"Confirm your subscription to ".concat(n.name),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"When you subscribe to a writer or publication, your email address will be shared with them so they can stay in contact with you outside of Medium. Opt out any time by unsubscribing in Settings."),N?Ge:a.createElement(M.R,{operation:"register",newsletterV3:W,user:n,actionUrl:W?(0,E.Zul)(W.id):(0,E.lcz)(n.id),susiEntry:"subscribe_user"},Ge))),Ce&&a.createElement(V,{user:n,isVisible:Ce,hide:function(){Te(!0),xe()}}))},ae=(0,s.Ps)(oe(),O.DI,O.nj,N.b)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2130.ef22f302.chunk.js.map