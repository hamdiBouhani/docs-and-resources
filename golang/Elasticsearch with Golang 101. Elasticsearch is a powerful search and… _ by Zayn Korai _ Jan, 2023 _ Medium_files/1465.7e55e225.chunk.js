(self.webpackChunklite=self.webpackChunklite||[]).push([[1465],{57682:(e,n,i)=>{"use strict";i.d(n,{BG:()=>l,ZD:()=>o,mr:()=>d});var t=i(67294),a=i(77355),l=52,o=48,r={xs:"24px",sm:"24px",md:"".concat(l,"px"),lg:"".concat(l,"px"),xl:"".concat(l,"px")},c={xs:"24px",sm:"24px",md:"".concat(o,"px"),lg:"".concat(o,"px"),xl:"".concat(o,"px")},d=function(e){var n=e.heading,i=e.navbar,l=e.marginBottom,o=e.navbarMargin,d=l?{xs:"24px",sm:"24px",md:"".concat(l,"px"),lg:"".concat(l,"px"),xl:"".concat(l,"px")}:c;return t.createElement(a.x,{marginTop:r,marginBottom:d},t.createElement(a.x,{marginBottom:o||"40px"},n),i)}},81360:(e,n,i)=>{"use strict";i.d(n,{J:()=>v});var t=i(63038),a=i.n(t),l=i(23279),o=i.n(l),r=i(67294),c=i(77355),d=i(14646),s=i(31889),m=i(34135),u=i(97),k=i(87879),p=function(){return{display:"flex",alignItems:"center",overflowX:"scroll",overflowY:"hidden",padding:"2px 0","::-webkit-scrollbar":{width:0,background:"transparent"}}},v=function(e){var n=e.children,i=e.childrenWidth,t=(0,d.I)(),l=(0,r.useState)(!1),c=a()(l,2),s=c[0],u=c[1],k=(0,r.useState)(!1),v=a()(k,2),g=v[0],S=v[1],h=(0,r.useState)(),b=a()(h,2),x=b[0],N=b[1],y=(0,r.useCallback)((function(e){e&&N(e)}),[]),E=(0,r.useCallback)((function(){x&&x.scrollWidth>x.clientWidth&&u(!0)}),[x]);(0,r.useEffect)((function(){return m.V6.on("resize",E),E(),function(){return m.V6.off("resize",E)}}),[E]);var F=(0,r.useCallback)((function(e){x&&x.scrollBy({left:e,behavior:"smooth"})}),[x]),C=(0,r.useCallback)((function(){F(100)}),[F]),w=(0,r.useCallback)((function(){F(-100)}),[F]),T=(0,r.useCallback)(o()((function(){if(x){var e=x.scrollWidth-(x.clientWidth+x.scrollLeft);u(e>0),S(x.scrollLeft>0)}}),100),[x]);return(0,r.useEffect)((function(){T()}),[T]),(0,r.useEffect)((function(){x&&i&&u(i>x.clientWidth)}),[i,null==x?void 0:x.clientWidth]),r.createElement("div",{ref:y,onScroll:T,className:t(p)},n,s&&r.createElement(f,{onClick:C,isRight:!0}),g&&r.createElement(f,{onClick:w}))},g={border:"none",padding:"0",margin:"2px",cursor:"pointer"},f=function(e){var n=e.isRight,i=e.onClick,t=(0,s.F)(),a=(0,d.I)(),l=t.backgroundColor,o=(0,k.bv)(l,0);return r.createElement(c.x,{position:"absolute",right:n?"0":void 0,left:n?void 0:"0",top:"0",bottom:"12px",paddingLeft:n?"42px":void 0,paddingRight:n?void 0:"42px",background:"linear-gradient(".concat(n?90:270,"deg, ").concat(o," 0px, ").concat(l," 50%)"),display:"flex",alignItems:"center"},r.createElement("button",{className:a(g),onClick:i,"aria-label":n?"next sections":"previous sections"},r.createElement(u.Z,{height:"26px",width:"26px",style:n?{transform:"rotate(180deg)"}:void 0,"aria-hidden":"true"})))}},42139:(e,n,i)=>{"use strict";i.d(n,{R:()=>u});var t=i(67294),a=i(77355),l=i(66411),o=i(14646),r=i(31889),c=i(63038),d=i.n(c),s=i(81360),m=i(47172),u=function(e){var n,i,c,u,k,p=e.items,v=e.isSearchPage,g=(0,o.I)(),f=(0,r.F)(),S="scroller-items",h=(n="#".concat(S),i=t.useState(),c=d()(i,2),u=c[0],k=c[1],t.useEffect((function(){var e=new ResizeObserver((function(e){var n,i,t=null===(n=e[0])||void 0===n||null===(i=n.contentRect)||void 0===i?void 0:i.width;t&&k(t)})),i=document.querySelector(n);return i&&e.observe(i),function(){e.disconnect()}}),[n]),{width:u}).width;return t.createElement(a.x,{position:"relative",height:"39px",boxShadow:"inset 0 -1px 0 ".concat(f.baseColor.border.lighter),overflow:"hidden"},t.createElement(s.J,{childrenWidth:h},t.createElement("div",{id:S,className:g({display:"flex"})},p.map((function(e,n){var i=n===p.length-1?"50px":e.marginRight,a=e.text,o=e.onClick,r=e.isActive,c=e.target,d=e.tabIndex,s=e.ariaControls,u=e.href;return t.createElement(l.cW,{source:{index:n},extendSource:!0,key:"page-navigation-tab-".concat(a,"-").concat(n)},t.createElement(m.v,{text:a,href:u,onClick:o,isActive:r,target:c,tabIndex:d,ariaControls:s,marginRight:i,isSearchPage:v}))})))))}},47172:(e,n,i)=>{"use strict";i.d(n,{v:()=>k});var t=i(67294),a=i(5977),l=i(77355),o=i(93310),r=i(87691),c=i(14646),d=i(43487),s=i(75101),m=i(42140),u=function(e){return{":hover":{color:"".concat(e.baseColor.fill.darker," !important")}}},k=function(e){var n=(0,c.I)(),i=(0,s.G)(),k=e.target,p=e.text,v=e.isSearchPage,g=e.marginRight,f=void 0===g?"32px":g,S="href"in e?e.href:void 0,h="onClick"in e?e.onClick:void 0,b="tabIndex"in e?e.tabIndex:void 0,x="ariaControls"in e?e.ariaControls:void 0,N="isActive"in e?e.isActive:i(S||""),y=(0,d.v9)((function(e){return e.navigation.currentLocation})),E=(0,a.TH)(),F=(0,m.dD)(E.search).q,C="".concat(y,"?q=").concat(F),w=v?S===C:N||i(null!=S?S:"");return t.createElement(l.x,{marginRight:f,paddingBottom:"16px",minWidth:"max-content",borderBottom:w?"BASE_DARKER":"BASE_LIGHTER"},t.createElement(o.r,{role:"tab",onClick:h,href:S,target:k,tabIndex:b,"aria-controls":x,className:n({border:"none",cursor:"pointer",padding:"0px"})},t.createElement(r.F,{scale:"M",color:w?"DARKER":"LIGHTER"},t.createElement("span",{className:n(u)},p))))}},73486:(e,n,i)=>{"use strict";i.d(n,{d:()=>oe,m:()=>le});var t=i(67294),a=i(5977),l=i(937),o=i(20113),r=i(14646),c=function(e){var n=e.publisher,i=e.scale,a=void 0===i?"XS":i,l=(0,r.I)();return n.name?t.createElement(o.X6,{playwrightClassName:"pw-author-name",scale:a},t.createElement("span",{className:l({wordBreak:"break-word"})},n.name)):null},d=i(41987),s=i(63038),m=i.n(s),u=i(38460),k=i(25468),p=i(65590),v=i(319),g=i.n(v),f=i(13085),S=i(14337),h=i(54341),b=i(84683),x=i(19308),N={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionTooltip_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}}]}}].concat(g()(b.d.definitions),g()(x.I.definitions))},y={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FollowedEntity"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherAvatar_publisher"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasDomain"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}}]}}]}}].concat(g()(S.v.definitions),g()(h.O.definitions),g()(N.definitions))},E=([{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsList_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}}]}}].concat(g()(f.b.definitions)),{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserFollowsListQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userFollows"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"}}]}}]}}].concat(g()(y.definitions))}),F=i(71652),C=i(82405),w=i(77355),T=i(87691),I=function(e){var n=e.collection,i=e.buttonSize,a=e.buttonStyleFn,l=n.name,r=n.description;return t.createElement(w.x,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},t.createElement(w.x,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"BASE_LIGHTER",paddingBottom:"10px",marginBottom:"10px"},t.createElement(w.x,{display:"flex",flexDirection:"column",paddingRight:"5px"},t.createElement(o.X6,{scale:"S"},l),t.createElement(T.F,{scale:"S"},r)),t.createElement(w.x,null,t.createElement(F.v,{collection:n,link:!0}))),t.createElement(w.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},t.createElement(T.F,{scale:"M"},"Followed by ",n.subscriberCount," people"),t.createElement(C.F,{collection:n,buttonSize:i,buttonStyleFn:a,susiEntry:"follow_card"})))},_=i(78757),D=i(30826),B=i(28695),A=i(93310),R=i(73917),L=i(42130),V=i(68894),P=function(e){return{"& path":{fill:e.baseColor.text.lighter},":hover path":{fill:e.baseColor.fill.darker},":focus path":{fill:e.baseColor.fill.darker},":hover":{background:e.baseColor.background.normal},padding:"4px",borderRadius:"6px"}},U=function(e){var n=e.popoverRenderFn,i=e.ariaId,a=e.role,l=(0,V.O)(!1),o=m()(l,4),r=o[0],c=o[2],d=o[3];return t.createElement(R.J,{ariaId:i,isVisible:r,placement:"top",targetDistance:10,role:a,popoverRenderFn:n,hide:c,hideOnOutsideClick:!0,noPortal:!0},t.createElement(A.r,{onClick:d,rules:P,"aria-controls":i,"aria-expanded":r},t.createElement(L.Z,null)))},M=function(e){return{"& p":{wordBreak:"break-all"},":hover p":{textDecoration:"underline",color:e.baseColor.text.light}}},H=function(e){var n=e.entity,i=(0,_.P)(n),a=(0,t.useCallback)((function(){return"User"===n.__typename?t.createElement(B.K,{user:n}):t.createElement(I,{collection:n,buttonSize:"COMPACT",buttonStyleFn:function(e){return e?"OBVIOUS":"STRONG"}})}),[n]);return t.createElement(w.x,{tag:"li",display:"flex",justifyContent:"space-between",alignItems:"center"},t.createElement(A.r,{href:i,rules:M},t.createElement(w.x,{display:"flex",paddingRight:"10px"},t.createElement(w.x,{paddingRight:"12px"},t.createElement(D.G,{publisher:n,scale:"XXXS"})),t.createElement(T.F,{clamp:1,scale:"S",color:"LIGHTER"},n.name))),t.createElement(U,{popoverRenderFn:a,ariaId:"creatorInfoPopover-".concat(n.id),role:"dialog"}))},G=i(6443),O=i(18627),X=i(66411),W=i(18122),z=i(97217),Y=i(21372),q=function(e){var n,i=e.user,a=i.id,l=i.customStyleSheet,r=(0,G.H)().value,c=a===(null==r?void 0:r.id),d=(0,O.Av)(),s=(0,W.g)({onPresentedFn:function(){return d.event("sidebar.blogrollViewed",{viewerIsAuthor:c})}}),v=(0,u.t)(E,{ssr:!0,variables:{userId:a,limit:5}}),g=m()(v,2),f=g[0],S=g[1],h=S.called,b=S.loading,x=S.error,N=S.data,y=(N=void 0===N?{userFollows:void 0}:N).userFollows,F=(0,k.g)(i),C=F.isFollowingCountVisible,I=F.followingCount,_=(0,t.useState)(),D=m()(_,2),B=D[0],R=D[1],L=(0,t.useState)(!1),V=m()(L,2),P=V[0],U=V[1],M=(0,t.useCallback)((function(){return U(!0)}),[]),q=(0,t.useCallback)((function(){return U(!1)}),[]);if((null==l||null===(n=l.blogroll)||void 0===n?void 0:n.visibility)===z.n$.BLOGROLL_VISIBILITY_HIDDEN)return null;if(!h)return f(),null;if(b||x||!y||!y.length||I<5)return null;var j=C?"See all (".concat((0,Y.rR)(I),")"):"See all";return t.createElement(X.cW,{extendSource:!0,source:{name:"blogrolls_sidebar"}},t.createElement(w.x,{ref:s,position:"relative"},t.createElement(o.X6,{scale:"XS",tag:"span"},"Following"),t.createElement(w.x,{marginTop:"16px",marginBottom:"16px",tag:"ul"},y.map((function(e){return t.createElement(H,{key:null==e?void 0:e.id,entity:e,isTooltipActive:B===e.id,onMouseEnter:function(){return R(e.id)}})}))),t.createElement(T.F,{scale:"S"},t.createElement(A.r,{linkStyle:"SUBTLE",onClick:M},j)),t.createElement(p.A,{hide:q,publisher:i,followingCount:I,isVisible:P})))},j=i(84739),J=i(32223),K=i(5422),Z=i(72550),Q=i(64238),$=i(25735),ee=i(14818),ne=i(24330),ie=i(92661),te=i(87498),ae=i(78870),le=88,oe=function(e){var n=e.includeBlogRoll,i=e.user,o=(0,G.H)().value,r=o&&o.id===i.id,s=(0,j.B)(i),m=(0,Q.o)(i),u=(0,$.VB)({name:"enable_lite_user_settings",placeholder:!1}),k=(0,ie.H2)(),p=k("ShowSettings",{}),v=(0,ae.Rk)(k("ShowSettingsTab",{setting:J.B.Account}),{},K.e),g=u?v:p,f=(0,a.TH)(),S=(0,ie.$B)(f.pathname),h="ShowUserFollowers"===(null==S?void 0:S.route.name);return t.createElement(t.Fragment,null,t.createElement(A.r,{href:s},t.createElement(ee.z,{alt:i.name||"",miroId:i.imageId||te.gG,diameter:le})),t.createElement(w.x,{marginTop:"16px"},t.createElement(A.r,{href:s},t.createElement(c,{publisher:i}))),t.createElement(w.x,{marginTop:"4px"},t.createElement(d.e,{publisher:i,disableLink:h})),t.createElement(w.x,{marginTop:"12px"},m&&t.createElement(Z.G,{withText:!0,marginTop:"24px",marginBottom:"10px",size:"M"}),t.createElement(l.y,{publisher:i})),r?t.createElement(w.x,{marginTop:"24px",marginBottom:"46px"},t.createElement(T.F,{scale:"S",color:"ACCENT"},t.createElement(A.r,{href:g},"Edit profile"))):t.createElement(X.cW,{source:{name:"publisher_header_actions"},extendSource:!0},t.createElement(w.x,{display:"flex",marginBottom:"40px",marginTop:"24px"},t.createElement(ne.N,{creator:i,followButtonSize:"REGULAR",susiEntry:"follow_profile",showMembershipUpsellModal:!0,width:"auto"}))),n&&!h&&t.createElement(q,{user:i}))}},1279:(e,n,i)=>{"use strict";i.d(n,{m:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherDescription_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bio"}}]}}]}}]}},937:(e,n,i)=>{"use strict";i.d(n,{y:()=>r});var t=i(67294),a=i(14294),l=i(38882),o=i(87691),r=function(e){var n=e.publisher,i="Collection"===n.__typename?n.description:n.bio;return i?t.createElement(o.F,{scale:"M"},t.createElement(l.c.Provider,{value:!0},t.createElement(a.P,{wrapLinks:!0},i))):null}},13085:(e,n,i)=>{"use strict";i.d(n,{b:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowingCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followingCount"}},{kind:"Field",name:{kind:"Name",value:"collectionFollowingCount"}}]}},{kind:"Field",name:{kind:"Name",value:"username"}}]}}]}}]}},25468:(e,n,i)=>{"use strict";i.d(n,{g:()=>d,D:()=>s});var t=i(63038),a=i.n(t),l=i(67294),o=i(65590),r=i(93310),c=i(21372),d=function(e){var n,i,t,a,l=0;return"User"===e.__typename&&(l=(null!==(n=null===(i=e.socialStats)||void 0===i?void 0:i.followingCount)&&void 0!==n?n:0)+(null!==(t=null===(a=e.socialStats)||void 0===a?void 0:a.collectionFollowingCount)&&void 0!==t?t:0)),{followingCount:l,isFollowingCountVisible:l>0}},s=function(e){var n=e.publisher,i=e.linkStyle,t=void 0===i?"SUBTLE":i,s=d(n),m=s.followingCount,u=s.isFollowingCountVisible,k=(0,l.useState)(!1),p=a()(k,2),v=p[0],g=p[1];if(!u)return null;var f="".concat((0,c.pY)(m)," Following");return l.createElement(l.Fragment,null,l.createElement(r.r,{linkStyle:t,onClick:function(){return g(!0)}},f),l.createElement(o.A,{hide:function(){return g(!1)},publisher:n,followingCount:m,isVisible:v}))}},65590:(e,n,i)=>{"use strict";i.d(n,{A:()=>p});var t=i(6479),a=i.n(t),l=i(64718),o=i(67294),r=i(19262),c=i(319),d=i.n(c),s=i(69387),m=i(84683),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DialogCollectionEntity_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}}].concat(d()(m.d.definitions))},k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherFollowingDialogUserQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"followingEntityConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entities"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"DialogUserEntity_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"DialogCollectionEntity_collection"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"next"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"to"}},{kind:"Field",name:{kind:"Name",value:"limit"}},{kind:"Field",name:{kind:"Name",value:"from"}}]}}]}}]}}]}}]}}].concat(d()(s.U.definitions),d()(u.definitions))},p=function(e){var n,i,t,c,d,s=e.publisher,m=e.followingCount,u=e.isVisible,p=e.hide,v=(0,l.a)(k,{variables:{id:s.id,pagingInfo:{limit:10}},ssr:!1}),g=v.data,f=v.error,S=v.fetchMore,h=null==g||null===(n=g.user)||void 0===n||null===(i=n.followingEntityConnection)||void 0===i?void 0:i.entities,b=null==g||null===(t=g.user)||void 0===t||null===(c=t.followingEntityConnection)||void 0===c||null===(d=c.pagingInfo)||void 0===d?void 0:d.next;return f||0===m?null:o.createElement(r.L,{hide:p,isVisible:u,heading:"".concat(m," Following"),entities:h,pagingInfoNext:b,handleFetchMore:function(){if(b){b.__typename;var e=a()(b,["__typename"]);S({variables:{pagingInfo:e}})}}})}},32064:(e,n,i)=>{"use strict";i.d(n,{y:()=>l});var t=i(67294),a=i(77355),l=function(e){var n=e.children,i=e.marginTop,l=void 0===i?"40px":i,o=e.paddingBottom,r=void 0===o?"0px":o,c=e.showBorderBottom,d=void 0!==c&&c;return t.createElement(a.x,{marginTop:l,paddingBottom:r,borderBottom:d?"BASE_LIGHTER":"NONE"},n)}},986:(e,n,i)=>{"use strict";i.d(n,{c:()=>d});var t=i(67294),a=i(52439),l=i(89636),o=i(53232),r=i(77355),c=i(35010),d=function(e){var n=e.children,i=(0,t.useRef)(0),d=(0,t.useRef)(null),s=(0,t.useRef)("stickyToTop"),m=(0,t.useRef)(null),u=(0,l.v)(),k=u.fullNavbarHeight,p=u.addHeightChangeHandler,v=u.removeHeightChangeHandler;return(0,c.L)((function(){var e=function(e){var n=e.currentHeight;d.current&&m.current&&("notSticky"!==s.current&&(d.current.style.top="".concat(n,"px")),m.current.style.minHeight="calc(100vh - ".concat(n,"px)"))};return p(e),function(){v(e)}}),[]),(0,c.L)((function(){var e=function(){if(d.current){var e=window.scrollY>i.current;i.current=window.scrollY;var n=window.innerHeight,t=d.current.offsetHeight-n,a=o.fp;t<=20||(e?("notSticky"===s.current&&window.scrollY>=d.current.offsetTop+t+a&&(s.current="stickyToBottom",d.current.style.position="sticky",d.current.style.top="".concat(-t,"px")),"stickyToTop"===s.current&&(s.current="notSticky",d.current.style.position="relative",d.current.style.top="0px",d.current.style.marginTop="0px",d.current.style.marginTop="".concat(Math.max(i.current-d.current.offsetTop,0),"px"))):("notSticky"===s.current&&window.scrollY<=d.current.offsetTop&&(s.current="stickyToTop",d.current.style.position="sticky",d.current.style.top="".concat(a,"px"),d.current.style.marginTop="0px"),"stickyToBottom"===s.current&&(s.current="notSticky",d.current.style.position="relative",d.current.style.top="0px",d.current.style.marginTop="0px",d.current.style.marginTop="".concat(i.current-t-d.current.offsetTop-a,"px"))))}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),t.createElement(r.x,{position:"sticky",top:"".concat(k,"px"),ref:d},t.createElement(r.x,{display:"flex",flexDirection:"column",minHeight:"calc(100vh - ".concat(k,"px)"),ref:m},t.createElement(r.x,{flexGrow:"1"},n),t.createElement(a.q,{detailScale:"XS",spacing:"XS"})))}},32223:(e,n,i)=>{"use strict";i.d(n,{B:()=>t,N:()=>p});var t,a=i(67294),l=i(70405),o=i(57682),r=i(42139),c=i(35225),d=i(96370),s=i(77355),m=i(92661),u=i(43487),k=i(71341);!function(e){e.Account="account",e.Publishing="publishing",e.Notifications="notifications",e.Membership="membership",e.Security="security"}(t||(t={}));var p=function(e){var n=e.children,i=e.activeTab,p=(0,k.h)(),v=(0,m.di)("ShowSettings",{}),g=(0,m.di)("ShowSettingsTab",{setting:t.Publishing}),f=(0,m.di)("ShowSettingsTab",{setting:t.Notifications}),S=(0,m.di)("ShowSettingsTab",{setting:t.Membership}),h=(0,m.di)("ShowSettingsTab",{setting:t.Security}),b=(0,a.useMemo)((function(){return[{text:"Account",onClick:function(){return p(v)},isActive:i===t.Account},{text:"Publishing",onClick:function(){return p(g)},isActive:i===t.Publishing},{text:"Notifications",onClick:function(){return p(f)},isActive:i===t.Notifications},{text:"Membership and payment",onClick:function(){return p(S)},isActive:i===t.Membership},{text:"Security and apps",onClick:function(){return p(h)},isActive:i===t.Security}]}),[i,p]),x=(0,u.v9)((function(e){return e.config.productName})),N=(0,a.useMemo)((function(){return a.createElement(c.V,null,"Settings")}),[]);return a.createElement(d.P,{size:"app"},a.createElement(l.ql,null,a.createElement("title",null,"Settings",x?" - ".concat(x):null)),a.createElement(s.x,{paddingBottom:"32px"},a.createElement(o.mr,{heading:N,navbarMargin:{xs:"32px",sm:"32px",md:"56px",lg:"56px",xl:"56px"},navbar:a.createElement(r.R,{items:b})}),n))}},5422:(e,n,i)=>{"use strict";i.d(n,{e:()=>t});var t="#profileInformation"},35225:(e,n,i)=>{"use strict";i.d(n,{V:()=>r});var t=i(67294),a=i(77355),l=i(20113),o={xs:"M",sm:"M",md:"XL",lg:"XL",xl:"XL"},r=function(e){var n=e.children;return t.createElement(a.x,null,t.createElement(l.X6,{scale:o,tag:"h1",clamp:1},n))}},14337:(e,n,i)=>{"use strict";i.d(n,{v:()=>r});var t=i(319),a=i.n(t),l=i(84683),o=i(27048),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherAvatar_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}]}}].concat(a()(l.d.definitions),a()(o.W.definitions))}},30826:(e,n,i)=>{"use strict";i.d(n,{G:()=>o});var t=i(67294),a=i(71652),l=i(17193),o=function(e){var n=e.link,i=void 0!==n&&n,o=e.scale,r=void 0===o?"M":o,c=e.publisher;switch(c.__typename){case"User":return t.createElement(l.Yt,{link:i,scale:r,user:c});case"Collection":return t.createElement(a.v,{link:i,size:l.wC[r],collection:c});default:return null}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1465.7e55e225.chunk.js.map