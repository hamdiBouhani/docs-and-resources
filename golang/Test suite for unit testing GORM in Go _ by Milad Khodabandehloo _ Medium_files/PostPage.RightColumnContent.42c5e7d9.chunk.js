(self.webpackChunklite=self.webpackChunklite||[]).push([[1888],{69100:(e,n,t)=>{var i=t(99489),a=t(57067);function o(n,t,r){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,n,t){var a=[null];a.push.apply(a,n);var o=new(Function.bind.apply(e,a));return t&&i(o,t.prototype),o},o.apply(null,arguments)}e.exports=o},70430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},57067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},65957:(e,n,t)=>{var i=t(29754),a=t(99489),o=t(70430),r=t(69100);function l(n){var t="function"==typeof Map?new Map:void 0;return e.exports=l=function(e){if(null===e||!o(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return r(e,arguments,i(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)},l(n)}e.exports=l},42130:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var i=t(67294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var o=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z",fill:"#000"});const r=function(e){return i.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),o)}},76972:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var i=t(59910),a=t(13882),o=36e5;function r(e,n){(0,a.Z)(2,arguments);var t=(0,i.Z)(e,n)/o;return t>0?Math.floor(t):Math.ceil(t)}},11849:(e,n,t)=>{"use strict";t.r(n),t.d(n,{RightColumnContent:()=>y,useLoader:()=>h});var i=t(64718),a=t(67294),o=t(71262),r=t(319),l=t.n(r),d=t(9273),c=t(15013),u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"RecircSidebarQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"recirc"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"4"}}]}},{kind:"Argument",name:{kind:"Name",value:"postId"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RexRecircItem"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ReadNextPostCard_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPresentationTracker_post"}}]}},{kind:"Field",name:{kind:"Name",value:"feedId"}}]}}]}}]}}]}}].concat(l()(d.Q.definitions),l()(c.h.definitions))},s=t(94986),m=t(43487),p=t(50458),k=t(27628),f=t(10774),v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PostPageRightColumnQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostResultError_postResult"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostRightColumn_post"}}]}}]}}]}}].concat(l()(k.i.definitions),l()(f.w.definitions))},h=function(e){var n=(0,a.useMemo)((function(){return(0,p.mrd)({params:e})}),[e.postId]),t=(0,m.v9)((function(e){return e.client.viewerIsBot})),o=(0,i.a)(v,{variables:{postId:n||""},skip:!n}),r=(0,i.a)(u,{variables:{postId:n},skip:!n,ssr:t});return(0,a.useMemo)((function(){return{loading:o.loading||r.loading,postRightColumnQueryResult:o,recircSidebarQueryResult:r}}),[o,r])},y=function(e){var n,t=e.postRightColumnQueryResult,i=e.recircSidebarQueryResult,r=null===(n=t.data)||void 0===n?void 0:n.postResult,l=i.data,d=i.refetch;return(0,s.r)(r)?null:a.createElement(o.J,{post:r,recircData:l,recircRefetch:d})}},9970:(e,n,t)=>{"use strict";t.d(n,{g:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherName_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}},78757:(e,n,t)=>{"use strict";t.d(n,{P:()=>o});var i=t(68427),a=t(84739),o=function(e){var n=(0,i.B)(),t=(0,a.I)();return"Collection"===e.__typename?n(e):"User"===e.__typename?t(e):""}},82405:(e,n,t)=>{"use strict";t.d(n,{F:()=>w});var i=t(63038),a=t.n(i),o=t(21919),r=t(67294),l=t(5977),d=t(77520),c=t(20297),u=t(25550),s=t(25267),m=t(67701),p=t(26350),k=t(50563),f=t(93310),v=t(77355),h=t(47230),y=t(18627),g=t(66411),S=t(92661),b=t(43487),N=t(50458),w=function(e){var n,t=e.buttonSize,i=e.buttonStyleFn,N=e.collection,w=e.post,F=e.simpleLink,C=e.susiEntry,R=void 0===C?"follow_card":C,x=e.preventParentClick,I=(0,b.v9)((function(e){return e.config.authDomain})),D=(0,u.r)().viewerId,_=(0,y.Av)(),M=(0,g.pK)(),T=(0,l.TH)(),P=(0,S.$B)(T.pathname),U=null==P||null===(n=P.route)||void 0===n?void 0:n.name,A=(0,m.gY)(N),B=A.viewerEdge,O=A.loading,L=function(e,n){var t=(0,o.D)(c.e),i=a()(t,1)[0];return r.useCallback((function(){return i({variables:{id:e.id},optimisticResponse:{followCollection:{__typename:"Collection",id:e.id,name:e.name,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e.id,"-viewerId:").concat(n),isFollowing:!0}}},update:function(t){t.modify({id:"User:".concat(n),fields:{missionControl:(0,k.im)("followedCollections",!0),followingCollectionConnection:(0,k.Hc)(e.id)}})}})}),[e.id])}(N,D),z=function(e,n){var t=(0,o.D)(c.X),i=a()(t,1)[0];return r.useCallback((function(){return i({variables:{id:e.id},optimisticResponse:{unfollowCollection:{__typename:"Collection",id:e.id,name:e.name,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e.id,"-viewerId:").concat(n),isFollowing:!1}}},update:function(e){e.modify({id:"User:".concat(n),fields:{missionControl:(0,k.im)("followedCollections",!1)}})}})}),[e.id])}(N,D),V=r.useCallback((function(e){x&&e.preventDefault(),_.event("collection.followed",{collectionId:N.id,followSource:M}),L()}),[N,x,M,_]),q=r.useCallback((function(e){x&&e.preventDefault(),_.event("collection.unfollowed",{collectionId:N.id,followSource:M}),z()}),[x,M,_]),Q=!(null==B||!B.isFollowing),W=i?i(!!Q):Q?"OBVIOUS":"STRONG";return F?r.createElement(f.r,{onClick:Q?q:V},r.createElement(v.x,{display:"flex",flexDirection:"row"},Q?"Unfollow publication":"Follow publication")):r.createElement(s.I,null,(function(e){return e?r.createElement(h.z,{size:t,onClick:Q?q:V,buttonStyle:W,loading:O},Q?"Following":"Follow"):r.createElement(p.R,{collection:N,buttonStyle:Q?"OBVIOUS":"STRONG",isButton:!0,buttonSize:"REGULAR",operation:"register",actionUrl:E(I,N,w)||"",susiEntry:R,pageSource:(0,d.x)(U,"register")},Q?"Following":"Follow")}))},E=function(e,n,t){return n.slug&&(t&&t.id?(0,N.TAb)(e,n.slug,t.id):(0,N.LlO)(e,n.slug))}},27628:(e,n,t)=>{"use strict";t.d(n,{i:()=>o});var i=t(319),a=t.n(i),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostResultError_postResult"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostResult"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"}}]}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]))}},94986:(e,n,t)=>{"use strict";t.d(n,{I:()=>E,r:()=>w});var i=t(67294),a=t(83447),o=t(29747),r=t(34575),l=t.n(r),d=t(2205),c=t.n(d),u=t(78585),s=t.n(u),m=t(29754),p=t.n(m),k=t(65957);var f=function(e){c()(a,e);var n,t,i=(n=a,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=p()(n);if(t){var a=p()(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return s()(this,e)});function a(){return l()(this,a),i.call(this,"Expected postResult to exist.\n       For more detail, try checking for GraphQL server errors with the same x-request-id.")}return a}(t.n(k)()(Error)),v=t(43683),h=t(2808),y=t(49216),g=t(57815);function S(e){var n=e.errorData,t=e.showMetabar;return i.createElement(v.q,{code:451,title:"451 Not available — Medium",lumenId:n.lumenId,showMetabar:t},"This story is subject to a DMCA copyright or other legal or government claim.")}function b(e){var n=e.errorData,t=e.showMetabar;return i.createElement(v.q,{code:451,title:"451 Not available in your country — Medium",lumenId:n.lumenId,showMetabar:t},"This page is not available in your country.")}var N=t(59764),w=function(e){return!(0,N.f)(e)},E=function(e){var n=e.postResult,t=e.showMetabar;if(!n)return i.createElement(h.C,{error:new f});switch(n.__typename){case"Unauthorized":return i.createElement(o.N,{opt_isDraft:!0});case"NotFound":return t?i.createElement(y.$,null):i.createElement(a.$,null);case"AccountDeleted":return i.createElement(v.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:t},"User deactivated or deleted their account.");case"AccountSuspended":return i.createElement(g.y,{suspension:"account",showMetabar:t});case"PostSuspended":return i.createElement(g.y,{suspension:"post",showMetabar:t});case"Blocked":return i.createElement(v.q,{code:403,title:"403 Blocked — Medium",showMetabar:t},"This user had blocked you from following them or viewing their stories.");case"RemovedByUser":return i.createElement(v.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:t},"The author deleted this Medium story.");case"UnavailableForLegalReasons":return i.createElement(S,{errorData:n,showMetabar:t});case"WithheldInCountry":return i.createElement(b,{errorData:n,showMetabar:t});default:return i.createElement(h.C,{error:new Error("Unsupported postResult: ".concat(n.__typename)),showMetabar:t})}}},29747:(e,n,t)=>{"use strict";t.d(n,{N:()=>u});var i=t(67294),a=t(90833),o=t(18839),r=t(66411),l=t(43487),d=t(78870),c=t(50458),u=function(e){var n=e.opt_isDraft,t=e.opt_params,u=e.operation,s=e.opt_hash,m=e.opt_location,p=(0,l.v9)((function(e){return e.config.authDomain})),k=(0,l.v9)((function(e){return e.navigation.currentLocation})),f=(0,r.pK)(),v=(0,r.hp)(),h=(0,d.Rk)((0,c.Kkz)(p),{operation:u||"login",redirect:(0,o.hQ)(m||k,f,v,null,null,t,s),isDraft:n?"1":"0"});return i.createElement(a.l,{to:h,temporary:!0})}},12643:(e,n,t)=>{"use strict";t.d(n,{G:()=>o});var i=t(67294),a=t(77355),o=i.forwardRef((function(e,n){var t=e.height,o=void 0===t?1:t,r=e.width,l=void 0===r?1:r,d=e.backgroundColor,c=void 0===d?"BASE_NORMAL":d,u=e.children,s=(l=l||1)/(o=o||1);return i.createElement(a.x,{position:"relative",margin:"auto",backgroundColor:c,ref:n,overflow:"hidden"},i.createElement(a.x,{paddingBottom:"".concat(100/s,"%"),height:"0"},u))}))},84492:(e,n,t)=>{"use strict";t.d(n,{i:()=>l});var i=t(319),a=t.n(i),o=t(78693),r=t(71069),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserSubscribeButton_user"}}]}}].concat(a()(o.s.definitions),a()(r.w.definitions))}},15013:(e,n,t)=>{"use strict";t.d(n,{h:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPresentationTracker_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"previewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFullContent"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}}]}}]}},43683:(e,n,t)=>{"use strict";t.d(n,{q:()=>b});var i=t(67294),a=t(70405),o=t(5977),r=t(59713),l=t.n(r),d=t(77355),c=t(14199),u=t(14646),s=t(97489),m={fontSize:"20px",textTransform:"uppercase"},p=function(e){return l()({display:"block",fontSize:"192px",lineHeight:"200px"},s.sm(e),{fontSize:"150px"})},k=function(e){var n=e.errorCode,t=(0,u.I)(),a=(0,c.n)({name:"brand",scale:"XXXL",color:"DARKER"});return i.createElement(d.x,{display:"flex",flexDirection:"column"},i.createElement("div",{className:t(m)},"Error"),i.createElement("div",{className:t([a,p])},n))},f=t(46580),v=t(96370),h=t(93310),y=t(6402),g=t(21638),S={fontSize:"24px"};function b(e){var n=e.code,t=e.title,r=e.children,l=e.lumenId,c=e.showMetabar,s=void 0===c||c,m=(0,u.I)();return(0,i.useEffect)((function(){y.k.debug({status:n},"[".concat(n,"]: ").concat(t))}),[]),i.createElement(o.AW,{render:function(e){var o=e.staticContext;return o&&(o.statusCode=n),i.createElement("div",null,i.createElement(a.ql,null,i.createElement("title",null,t)),s&&i.createElement(f.k,null),i.createElement(d.x,{tag:"section",paddingTop:"60px",paddingBottom:"60px"},i.createElement(v.P,{size:"inset"},i.createElement(d.x,{display:"flex",alignItems:"flex-start",flexWrap:"wrap"},i.createElement(k,{errorCode:n}),i.createElement("div",{className:m((0,g.rJ)())},i.createElement(d.x,{marginBottom:"28px"},i.createElement("div",{className:m(S)},r)),l?i.createElement("div",{className:m(S)},"A report is available on"," ",i.createElement(h.r,{href:"https://lumendatabase.org/notices/".concat(l),display:"inline-block",inline:!0,target:"_blank",linkStyle:"OBVIOUS"},"Lumen"),"."):null)))))}})}},57815:(e,n,t)=>{"use strict";t.d(n,{y:()=>u});var i=t(67294),a=t(77355),o=t(47230),r=t(90586),l=t(18627),d=t(43683),c=t(43487),u=function(e){var n=e.suspension,t=e.showMetabar,u=(0,l.Av)(),s=(0,c.v9)((function(e){return e.config.authDomain}));return i.createElement(d.q,{code:410,title:"410 ".concat(n," suspended — Medium"),showMetabar:t},i.createElement(a.x,{display:"flex",marginTop:"-30px"},i.createElement(r.QE,{scale:"S"},"This ",n," is under investigation or was found in violation of the Medium Rules."," ")),i.createElement(a.x,{display:"flex",marginTop:"80px"},i.createElement(r.QE,{color:"DARKER",scale:"M"},"There are thousands of stories to read on Medium. Visit our homepage ",i.createElement("br",null)," to find one that’s right for you.")),i.createElement(a.x,{display:"flex",marginTop:"15px"},i.createElement(o.z,{buttonStyle:"SUBTLE",href:"https://".concat(s),onClick:function(){u.event("suspendedPage.backToHomeClicked",{})}},"Take me to Medium")))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/PostPage.RightColumnContent.42c5e7d9.chunk.js.map