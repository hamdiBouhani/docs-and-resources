(self.webpackChunklite=self.webpackChunklite||[]).push([[8738],{41298:(e,n,t)=>{"use strict";t.d(n,{e_:()=>K,Pj:()=>q,j2:()=>H});var i=t(6479),a=t.n(i),l=t(67294),o=t(87499),r=function(e){var n=e.children,t=e.omitAnd,i=void 0===t||t,a=e.maxBookAuthors;n=n.filter((function(e){return!!e}));var r=[];if(!a||n.length<=a)return l.createElement(o.H,{children:n,omitAnd:i});var d=n.slice(0,a);return d.forEach((function(e,n){r.push(e),n===d.length-1?r.push(", et al."):r.push(", ")})),r},d=t(97480),m=t(73279),c=t(77355),s=t(93310),u=t(18634),k=t(87691),p=t(20113),v=t(67713),f=t(14646),S=t(40366);function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var h=l.createElement("path",{d:"M4.5 13.5l9-9M6.19 4.5h7.31v7.31",stroke:"#242424",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"});const N=function(e){return l.createElement("svg",g({width:18,height:18,viewBox:"0 0 18 18",fill:"none"},e),h)};var x,E,F=t(59713),b=t.n(F),y=t(4381);!function(e){e.Sidebar="SIDEBAR",e.Featured="FEATURED",e.BooksTab="BOOKS_TAB"}(E||(E={}));var w=(x={},b()(x,E.Sidebar,{mobile:void 0,desktop:55}),b()(x,E.Featured,{mobile:73,desktop:130}),b()(x,E.BooksTab,{mobile:73,desktop:148}),x),D=function(e){return{borderRadius:"2px",filter:e?"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))":void 0,maxWidth:"100%"}},C=function(e){var n=e.book,t=e.width,i=e.marginRight,a=e.marginBottom,o=e.marginLeft,r=e.marginTop,d=e.hasShadow,m=void 0!==d&&d,s=w[t].mobile;return l.createElement(c.x,{marginRight:i,marginLeft:o,marginTop:r,marginBottom:a,width:{xs:s?"".concat(s,"px"):void 0,sm:void 0,md:void 0,lg:void 0,xl:void 0},flexShrink:"0"},l.createElement(y.UV,{miroId:n.coverImageId,width:w[t].desktop,rules:D(m)}))},B=t(18627),_=t(66411),I=t(77280),P=t(43487);function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){b()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A=function(e){var n=e.authorId,t=e.sourceName,i=(0,B.Av)(),a=(0,_.Lk)(),o=(0,I.PM)(),r=(0,P.v9)((function(e){return e.navigation.referrer})),d=(0,P.v9)((function(e){return e.navigation.currentLocation})),m={source:(0,_.f0)(R(R({},a),{},{name:t})),referrer:r||d,referrerSource:o};return{reportBooksClickedEvent:(0,l.useCallback)((function(){i.event("books.clicked",{authorId:n},m)}),[i,m,n])}},O=function(e){return{display:"flex",borderRadius:"4px",backgroundColor:e.baseColor.background.light,border:"1px solid ".concat(e.baseColor.border.lighter),padding:{xs:"16px",sm:"24px",md:"24px",lg:"24px",xl:"24px"}}},j={display:"flex",padding:"14px 0"},L={display:"flex"},U=function(e){return{"& path":{stroke:e.baseColor.fill.normal}}},X={fontFamily:S.u.newFonts.detail.family,fontWeight:S.u.newFonts.detail.weight},W={fontFamily:S.u.newFonts.title.family,fontWeight:S.u.newFonts.title.weight},V={fontFamily:S.u.newFonts.heading.family,fontWeight:S.u.newFonts.heading.weight},M=function(e){var n=e.book,t=e.color,i=void 0===t?"LIGHTER":t,a=(0,f.I)(),o=n.publicationDate?new Date(n.publicationDate).getUTCFullYear():void 0,d=(0,l.useMemo)((function(){return n.authors.map((function(e){return l.createElement("span",{key:e.name,className:a(X)},e.name)}))}),[n.authors]);return l.createElement(c.x,{display:"flex",alignItems:"center"},o&&l.createElement(l.Fragment,null,l.createElement(k.F,{scale:{xs:"XS",sm:"S",md:"S",lg:"S",xl:"S"},color:i},l.createElement("span",{className:a(X)},o)),l.createElement(m.O,{margin:"0 4px",scale:{xs:"XS",sm:"S",md:"S",lg:"S",xl:"S"},color:i})),l.createElement(k.F,{scale:{xs:"XS",sm:"S",md:"S",lg:"S",xl:"S"},color:i},l.createElement(u.y,{xs:!0},l.createElement(r,{maxBookAuthors:1},d)),l.createElement(u.y,{sm:!0,md:!0,lg:!0,xl:!0},l.createElement(r,{maxBookAuthors:2},d))))},K=function(e){var n,t=e.book,i=e.isFeatured,a=void 0!==i&&i,o=(0,f.I)(),r=A({authorId:(null===(n=t.authors[0].user)||void 0===n?void 0:n.id)||"",sourceName:a?"featured_book":"books_tab"}).reportBooksClickedEvent,d=(0,v.n)({name:"title",scale:"XS",color:"DARKER",clamp:3}),m=(0,v.n)({name:"title",scale:"S",color:"DARKER"});return l.createElement(s.r,{href:t.links[0].url,onClick:r,target:"_blank"},l.createElement("div",{className:o(a?O:L)},l.createElement(C,{book:t,width:a?E.Featured:E.BooksTab,hasShadow:!a}),l.createElement(c.x,{display:"flex",flexDirection:"column",justifyContent:"space-between",marginLeft:{xs:"16px",sm:"24px",md:"24px",lg:"24px",xl:"24px"},width:"100%"},l.createElement(c.x,{maxWidth:{xs:"100%",sm:"433px",md:"433px",lg:"433px",xl:"433px"}},l.createElement(u.y,{xs:!0},l.createElement("span",{className:o([d,W])},t.title)),l.createElement(u.y,{sm:!0,md:!0,lg:!0,xl:!0},l.createElement("span",{className:o([m,W])},t.title)),!a&&l.createElement(u.y,{xs:!0},l.createElement(c.x,{paddingTop:"8px"},l.createElement(M,{book:t,color:"DARKER"}))),t.description&&l.createElement(u.y,{sm:!0,md:!0,lg:!0,xl:!0},l.createElement(c.x,{marginTop:"16px"},l.createElement(k.F,{scale:"S",color:"DARKER"},l.createElement("span",{className:o(X)},t.description))))),l.createElement(c.x,{display:"flex",justifyContent:{xs:a?"space-between":"flex-end",sm:"space-between",md:"space-between",lg:"space-between",xl:"space-between"},alignItems:"center",paddingTop:{xs:void 0,sm:"8px",md:"8px",lg:"8px",xl:"8px"}},l.createElement(c.x,{display:{xs:a?"block":"none",sm:"block",md:"block",lg:"block",xl:"block"}},l.createElement(M,{book:t})),l.createElement(u.y,{xs:!0},l.createElement(N,{height:"18",width:"18",className:o(U)})),l.createElement(u.y,{sm:!0,md:!0,lg:!0,xl:!0},l.createElement(N,{height:"24",width:"24",className:o(U)}))))))},G={xs:"24px",sm:"32px",md:"32px",lg:"32px",xl:"32px"},H=function(e){var n=e.isFirstElement,t=e.isLastElement,i=a()(e,["isFirstElement","isLastElement"]);return l.createElement(l.Fragment,null,l.createElement(c.x,{paddingTop:n?void 0:G,paddingBottom:G},l.createElement(K,i)),!t&&l.createElement(d.E,null))},q=function(e){var n,t=e.book,i=(0,f.I)(),a=A({authorId:(null===(n=t.authors[0].user)||void 0===n?void 0:n.id)||"",sourceName:"post_sidebar"}).reportBooksClickedEvent,o=t.publicationDate?new Date(t.publicationDate).getUTCFullYear():void 0;return l.createElement(s.r,{href:t.links[0].url,onClick:a,target:"_blank"},l.createElement("div",{className:i(j)},l.createElement(C,{book:t,width:E.Sidebar}),l.createElement(c.x,{display:"flex",flexDirection:"column",justifyContent:"space-between",marginLeft:"16px",width:"100%"},l.createElement(c.x,{display:"flex",flexDirection:"column",justifyContent:"space-between"},l.createElement(p.X6,{scale:"XS",clamp:2},l.createElement("span",{className:i(V)},t.title)),l.createElement(c.x,{marginTop:"8px"},l.createElement(k.F,{scale:"XS",color:"DARKER"},l.createElement("span",{className:i(X)},o)))),l.createElement(c.x,{display:"flex",justifyContent:"flex-end"},l.createElement(N,{height:"18",width:"18",className:i(U)})))))}},38306:(e,n,t)=>{"use strict";t.d(n,{pr:()=>o,Bu:()=>r});var i=t(319),a=t.n(i),l=[{kind:"FragmentDefinition",name:{kind:"Name",value:"BookCover_authorBook"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AuthorBook"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverImageId"}}]}}],o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BookWidget_authorBook"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AuthorBook"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"links"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}},{kind:"Field",name:{kind:"Name",value:"publicationDate"}},{kind:"FragmentSpread",name:{kind:"Name",value:"BookCover_authorBook"}}]}}].concat(a()(l))},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SidebarBookWidget_authorBook"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AuthorBook"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"publicationDate"}},{kind:"Field",name:{kind:"Name",value:"links"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}},{kind:"Field",name:{kind:"Name",value:"authors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"BookCover_authorBook"}}]}}].concat(a()(l))}},98844:(e,n,t)=>{"use strict";t.d(n,{x:()=>s});var i=t(319),a=t.n(i),l=t(91515),o=t(18821),r=t(9970),d=t(57831),m=t(1279),c=t(84492),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AuthorInfo_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"}}]}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isBlocking"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsVerifiedBookAuthor_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherName_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherDescription_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_user"}}]}}].concat(a()(l.qy.definitions),a()(o.H.definitions),a()(r.g.definitions),a()(d.h.definitions),a()(m.m.definitions),a()(c.i.definitions),a()(l.FB.definitions))}},83787:(e,n,t)=>{"use strict";t.d(n,{w:()=>d});var i=t(319),a=t.n(i),l=t(98844),o=t(38306),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AuthorBooks_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"authoredBooks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SidebarBookWidget_authorBook"}}]}}]}}].concat(a()(o.Bu.definitions))},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostRightColumn_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"firstPublishedAt"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AuthorInfo_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AuthorBooks_user"}}]}}]}}].concat(a()(l.x.definitions),a()(r.definitions))}},62532:(e,n,t)=>{"use strict";t.d(n,{J:()=>J});var i=t(67294),a=t(10974),l=t(80921),o=t(32064),r=t(986),d=t(66411),m=t(97217),c=t(77280),s=t(41298),u=t(97480),k=t(77355),p=t(93310),v=t(20113),f=t(87691),S=t(92661),g=function(e){var n=e.user,t=(0,S.H2)(),a=n.authoredBooks,l=n.username,o=a.length;if(0===o)return null;var r=a.slice(0,2);return i.createElement(i.Fragment,null,i.createElement(k.x,{paddingBottom:"10px"},i.createElement(v.X6,{scale:"XS"},"Books from this author")),r.map((function(e,n){return i.createElement(i.Fragment,{key:"book-".concat(n)},0!==n&&i.createElement(u.E,null),i.createElement(s.Pj,{book:e}))})),o>1&&i.createElement(p.r,{href:t("ShowUserBooks",{username:l})},i.createElement(k.x,{marginTop:"4px"},i.createElement(f.F,{scale:"M",color:"ACCENT"},"See all (",o,")"))))},h=t(64718),N=t(84739),x=t(65968),E=t(17193),F=t(28695),b=t(26244),y=function(e){var n=(0,N.I)()(e.author),t=(0,i.useCallback)((function(){return e.author&&i.createElement(F.K,{user:e.author})}),[e.author]);return i.createElement(i.Fragment,null,e.includeAvatar&&i.createElement(k.x,{marginRight:"8px"},i.createElement(p.r,{href:n},i.createElement(E.Yt,{scale:"XXXS",user:e.author}))),i.createElement(k.x,{paddingRight:"4px"},i.createElement(b.$,{targetDistance:15,mouseLeaveDelay:100,placement:"top",role:"tooltip",popoverRenderFn:t},i.createElement(p.r,{href:n},i.createElement(k.x,{display:"flex",alignItems:"center"},i.createElement(f.F,{scale:"S",color:"DARKER",clamp:1},e.author.name),e.isVerifiedBookAuthor&&i.createElement(k.x,{marginLeft:"2px",marginTop:"2px"},i.createElement(x._,{size:"S"})))))))},w=t(25145),D=t(68427),C=t(64238),B=t(12643),_=t(4381),I=t(27323),P=t(52069),T=t(14646),R=t(46696),A=function(e){var n,t,a=e.post,l=e.withFixedWidth,o=void 0===l||l,r=a.collection,d=a.creator,m=(0,C.o)(d),c=(0,w.L)(a),s=a&&a.previewImage||{},u=s.focusPercentX,v=s.focusPercentY,S=s.id,g=s.alt,h=null!==(n=null==a?void 0:a.title)&&void 0!==n?n:"",N=null!==(t=null==r?void 0:r.name)&&void 0!==t?t:null,x=(0,D.B)(),E=S?"170px":"".concat(226,"px"),F=(0,T.I)();return i.createElement(k.x,{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"24px"},i.createElement(k.x,{display:"flex",flexDirection:"row",justifyContent:"space-between"},i.createElement(k.x,{display:"flex",flexDirection:"column",marginRight:"24px",flexGrow:"1",flexBasis:"0%"},d&&i.createElement(k.x,{display:"flex",alignItems:"center",marginBottom:"8px"},i.createElement(y,{author:d,isVerifiedBookAuthor:m,includeAvatar:!0}),r&&r.name&&i.createElement(i.Fragment,null,i.createElement(k.x,{paddingRight:"4px"},i.createElement(f.F,{scale:"S",color:"LIGHTER"},"in")),i.createElement(k.x,null,i.createElement(p.r,{href:x(r)},i.createElement(f.F,{scale:"S",color:"DARKER",clamp:1},N))))),h&&i.createElement(I.P,{href:c},i.createElement(P.Dx,{scale:"XS",clamp:3},i.createElement("div",{className:o?F({width:E}):void 0},h)))),i.createElement(I.P,{href:c},i.createElement(k.x,{width:"56px"},S&&i.createElement(B.G,{height:1,width:1},i.createElement(_.UV,{miroId:S,alt:g||"",aspectRatio:_.Pr.Square,strategy:R._S.Crop,width:56,rules:{borderRadius:"2px"},focusPercentX:u||50,focusPercentY:v||50,freezeGifs:!0}))))))},O=t(32868),j=t(43487),L=t(92305),U=t(50458),X=t(319),W=t.n(X),V=t(68216),M=t(54341),K=t(11836),G={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListRecircQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogById"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"catalogUrl_catalog"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}},{kind:"Field",name:{kind:"Name",value:"itemsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingOptions"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"Field",name:{kind:"Name",value:"entity"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SidebarReadingList_post"}}]}}]}}]}}]}}]}}]}}].concat(W()(V.Ui.definitions),W()(M.O.definitions),W()(K.M.definitions))},H=function(e){var n,t,a=e.catalogId,l=e.currentPostId,o=e.children,r=(0,j.v9)((function(e){return e.config.authDomain})),m=(0,h.a)(G,{variables:{catalogId:a,limit:5}}),c=m.data;if(m.loading)return null;var s=null==c?void 0:c.catalogById;if("Catalog"!==(null==s?void 0:s.__typename))return i.createElement(i.Fragment,null,o);var u=(0,U.yk)(s,r),v=null==s||null===(n=s.itemsConnection)||void 0===n||null===(t=n.items)||void 0===t?void 0:t.map((function(e){var n;return"Post"===(null===(n=e.entity)||void 0===n?void 0:n.__typename)?e.entity:void 0})).filter((function(e){return!!e&&e.id!==l})).slice(0,4);return v.length?i.createElement(d.cW,{extendSource:!0,source:{name:"list_module",catalogId:s.id}},i.createElement(k.x,{marginBottom:"22px"},i.createElement(p.r,{href:u},i.createElement(O.w,{title:"More from the list: ".concat((0,L.Ze)(s)),includeDot:!1})),i.createElement(k.x,{display:"flex",marginTop:"4px"},i.createElement(k.x,{flexShrink:"0",whiteSpace:"nowrap",marginRight:"4px"},i.createElement(f.F,{scale:"S"},"Curated by")),i.createElement(y,{author:s.creator}))),v.map((function(e,n){return i.createElement(A,{key:"".concat(e.id,"-").concat(n),post:e,withFixedWidth:!1})})),i.createElement(f.F,{scale:"S",color:"ACCENT"},i.createElement(p.r,{href:u},"See the full list"))):i.createElement(i.Fragment,null,o)},q=t(25550),Y=t(49608),z=t(18305),Q=function(e){var n,t=e.postId,a=e.recircData,l=e.recircRefetch,o=(0,q.r)(),r=o.viewerId,m=o.loading,c=(0,j.v9)((function(e){return e.config.productName}));(0,i.useEffect)((function(){!m&&(0,Y.Q)(r||"")&&l&&l()}),[m,l]);var s=null==a||null===(n=a.recirc)||void 0===n?void 0:n.items;if(null==s||!s.length||!l)return null;var u=s.slice(0,4);return i.createElement(k.x,null,i.createElement(k.x,{marginTop:"40px",marginBottom:"24px"},i.createElement(v.X6,{scale:"XS"},"More from ",c)),i.createElement(k.x,null,u.map((function(e,n){return null!=e&&e.post?i.createElement(d.cW,{extendSource:!0,source:{name:"read_next_recirc",index:n,feedId:e.feedId||void 0},key:"post-page-read-next-recirc".concat(t,"-").concat(n)},i.createElement(z.o,{post:e.post,presentationContext:"POST_PREVIEW"},i.createElement(A,{post:e.post,withFixedWidth:!1}))):null}))))},$=i.memo(Q),J=function(e){var n=e.post,t=e.recircData,s=e.recircRefetch,u=(0,c.PM)(),k=(0,d.P7)(null!=u?u:"").catalogId,p=!!n.firstPublishedAt&&n.visibility!==m.Wn.UNLISTED;return i.createElement(r.c,null,i.createElement(o.y,null,i.createElement(a.N,null)),n.creator&&i.createElement(o.y,null,i.createElement(l.d,{user:n.creator})),n.creator&&i.createElement(o.y,null,i.createElement(g,{user:n.creator})),k?i.createElement(o.y,null,i.createElement(H,{catalogId:k,currentPostId:n.id},i.createElement($,{postId:n.id,recircData:t,recircRefetch:s}))):p&&i.createElement(o.y,null,i.createElement($,{postId:n.id,recircData:t,recircRefetch:s})))}},87499:(e,n,t)=>{"use strict";t.d(n,{H:()=>i});var i=function(e){var n=e.children,t=e.omitAnd,i=void 0!==t&&t,a=(n=n.filter((function(e){return!!e}))).length,l=[];return 1===a?l.push(n[0]):2===a?l.push(n[0],i?", ":" and ",n[1]):n.forEach((function(e,n){if(l.push(e),n<a-2)l.push(", ");else if(n===a-2){var t=i?", ":", and ";l.push(t)}})),l}},91515:(e,n,t)=>{"use strict";t.d(n,{qy:()=>c,qL:()=>s,FB:()=>u,zH:()=>p});var i=t(319),a=t.n(i),l=t(76430),o=t(71069),r=t(13085),d=t(81712),m=t(68216),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}}]},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"}}]}}].concat(a()(c.definitions))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat(a()(r.b.definitions),a()(m.$m.definitions))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SidebarProfilePic_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserSubscribeButton_user"}}]}}].concat(a()(u.definitions),a()(l.G.definitions),a()(o.w.definitions))},p={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebar_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowButton_publisher"}}]}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"tagline"}}]}}]),a()(k.definitions),a()(r.b.definitions),a()(d.f.definitions))}},76430:(e,n,t)=>{"use strict";t.d(n,{G:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SidebarProfilePic_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}}]}}]}},97480:(e,n,t)=>{"use strict";t.d(n,{E:()=>r});var i=t(67154),a=t.n(i),l=t(67294),o=t(77355),r=function(e){return l.createElement(o.x,a()({height:"0px",width:"100%",borderBottom:"BASE_LIGHTER"},e))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8738.c6d277b7.chunk.js.map