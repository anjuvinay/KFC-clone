(this["webpackJsonpreusable-comps"]=this["webpackJsonpreusable-comps"]||[]).push([[92],{740:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(28),r=a(4),i=a(49),s=a(69),l=a(804),o=a(225),d=a(797),u=a(224),j=a(10),O=a(7),b=a(3),h=a(95),f=a(5),v=function(e){var t=e.contentData,a=void 0===t?{}:t,n=e.isMobile,c=void 0!==n&&n,r=e.userParams,v=void 0===r?{}:r,N=e.tenantReducerData,m=void 0===N?{}:N,p=e.paymentHeader,T=void 0!==p&&p,I=e.checkoutHeader,x=void 0!==I&&I,g=e.navigateHandler,_=void 0===g?null:g,C=e.history,E=m.basic,k=d.a.LOGGEDIN_USER_SINGIN_TEXT,L=d.a.BACK_TO_CART,A=d.a.Go_TO_HOME_PAGE,R=u.a.ArrowIcon,S=u.a.HeaderLogo,G=Object(O.zc)(Object(l.a)(a,E)),H=G.navRight,y=void 0===H?[]:H,U=G.kfcLogo,D=void 0===U?{}:U,K=function(e){e.stopPropagation(),e.preventDefault(),C.push({pathname:"/cart"})};return Object(f.jsxs)(f.Fragment,{children:[x&&Object(f.jsxs)("div",{className:"d-flex align-items-center justify-content-between secondaryChekoutheader",children:[Object(f.jsx)("div",{className:"secondary-header-element",children:c?Object(f.jsx)(i.a,{className:"btn",onClickHandler:function(e){return K(e)},children:Object(f.jsx)(s.a,{srcFile:R,alt:"Back to Cart"})}):Object(f.jsx)(i.a,{className:"button whiteButton blackBorder",onClickHandler:function(e){return K(e)},"data-testid":"Back-Button-checkout",ariaLable:Object(j.e)(L),children:Object(j.e)(L)})}),Object(f.jsx)(o.a,{className:"headerLogo secondary","data-testid":"desktop-navigate-handler",onClickHandler:_,children:Object(f.jsx)("span",{children:c?Object(f.jsx)("h3",{className:"textualLogo",children:Object(j.e)("cartCheckout")}):Object(f.jsx)(s.a,{srcFile:Object(O.xc)(D.src,S),alt:Object(O.xc)(D.alt,"KFC LOGO")})})}),Object(f.jsxs)("div",{className:"d-flex secondary-header-element",children:[Object(f.jsxs)(o.a,{className:"needHelpDesk",href:"/help",children:[Object(f.jsx)("span",{"aria-hidden":"true",className:"roundedQmark",children:"?"}),!c&&Object(f.jsx)("label",{className:"needHelp",children:"Need Help?"})]}),function(){var e=null;return y&&y.length&&(e=y.filter((function(e){if("Sign In"===e.name)return e}))[0]),e&&Object(f.jsxs)("div",{className:"signinLink ml-4","data-testid":"SignIn",tabIndex:"0",onClick:function(){return function(e,t){t.loggedIn?C.push({pathname:"/account"}):Object(h.b)()}(0,v)},children:[Object(f.jsx)(s.a,{"data-id":b.M.CHECKOUT_SIGN_IN_ATTR_DATA_ID,srcFile:e.url||e.imageUrl,className:"navRightIcons"}),!c&&Object(f.jsx)("span",{className:"notcarticon",children:e.name&&v.loggedIn?k:e.name})]})}()]})]}),T&&Object(f.jsx)("div",{className:"payment-header",children:c?Object(f.jsxs)("div",{className:"headerItems",children:[Object(f.jsx)("span",{children:Object(f.jsx)(o.a,{className:"needHelpDeskClose",href:b.Wc.HOME_PAGE,children:Object(f.jsx)("span",{className:"backIcon",children:Object(f.jsx)("img",{src:R,alt:"back-btn"})})})}),Object(f.jsx)("span",{className:"TrackOrder",children:"Track Order"}),Object(f.jsx)("span",{children:Object(f.jsx)(o.a,{className:"needHelpDesk",href:b.Wc.HELP,children:Object(f.jsx)("span",{className:"roundedQuesmark",children:"?"})})})]}):Object(f.jsxs)("div",{className:"d-flex align-items-center justify-content-between payment-header-content",children:[Object(f.jsx)("div",{className:"secondary-header-element",children:Object(f.jsx)(i.a,{className:"button whiteButton blackBorder",onClickHandler:function(e){return function(e){e.stopPropagation(),e.preventDefault(),localStorage.setItem("orderComplete",!0),C.push({pathname:"/"})}(e)},"data-testid":"Back-Button",ariaLable:Object(j.e)(A),children:Object(j.e)(A)})}),Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"headerLogo paymentHeader",tabIndex:"0",onClick:_,children:Object(f.jsx)(s.a,{srcFile:Object(O.xc)(D.src,S),alt:Object(O.xc)(D.alt,"KFC LOGO")})})}),Object(f.jsx)("div",{className:"d-flex secondary-header-element",children:Object(f.jsxs)(o.a,{className:"needHelpDesk",href:"/help",children:[Object(f.jsx)("span",{"aria-hidden":"true",className:"roundedQmark",children:"?"}),!c&&Object(f.jsx)("label",{className:"needHelp",children:"Need Help?"})]})})]})})]})},N=a(44);t.default=Object(N.j)((function(e){var t=e.contentData,a=void 0===t?{}:t,i=e.history,s=Object(r.useState)(Object(O.Uc)(window.innerWidth)),l=Object(c.a)(s,2),o=l[0],d=l[1],u=function(){var e=Object(O.Uc)(window.innerWidth);d(e)};Object(r.useEffect)((function(){window.addEventListener("resize",u)}),[o]);return Object(f.jsx)("div",{className:"".concat(o?"mobile header":"desktop header"),"data-testid":"HeaderItems-component",children:Object(f.jsx)(v,Object(n.a)({contentData:a,isMobile:o,navigateHandler:function(){i.push({pathname:"/"})}},e))})}))},797:function(e,t,a){"use strict";t.a={HEADER_LOGO:"HEADER LOGO",MENU_LINK:"MENU LINK",DEALS_LINK:"DEALS LINK",CATERING_LINK:"CATERING LINK",SIGN_IN_LINK:"SIGN IN LINK",CART_ICON:"CART ICON",LANGUAGE_SELECTOR:"LANGUAGE SELECTOR",SUPPORT_LINK:"SUPPORT SECTION",GUEST_USER_SINGIN_TEXT:"signInSignUp",LOGGEDIN_USER_SINGIN_TEXT:"account",CART_ICON_100_PERCENT:"CART ICON ANIMATION_100%",CART_ICON_120_PERCENT:"CART ICON ANIMATION_120%",BACK_TO_CART:"backToCart",USER_SINGIN_TEXT:"Sign In",Go_TO_HOME_PAGE:"GoToHomePage",ZERO:0,CART_ALT_TEXT:"Cart"}},804:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return T}));var n=a(8),c=a(0),r=a(71),i=a(2),s=a.n(i),l=a(797),o=a(848),d=a(24),u=a(7),j=a(14),O=function(e,t,a){var n=l.a.HEADER_LOGO,i=l.a.MENU_LINK,s=l.a.DEALS_LINK,o=l.a.CATERING_LINK,d=l.a.SIGN_IN_LINK,u=l.a.CART_ICON_100_PERCENT,j=l.a.CART_ICON_120_PERCENT,O=l.a.SUPPORT_LINK,f={kfcLogo:{},navLeft:[],navRight:[],navMobileMenu:{}};if(e&&e.headerSection&&e.subHeaderSection){var N,m=Object(r.a)(e.headerSection);try{for(m.s();!(N=m.n()).done;){var T=N.value,I=T.fields.title,x=(void 0===I?"":I).toUpperCase().trim();if(x===i||x===s||x===o)f.navLeft.push(Object(c.a)(Object(c.a)({},b(T.fields)),{},{altText:T.fields.linkText}));else if(x===d){var g=h(T.fields.icon.fields),_=g.altText,C=g.url;f.navRight.push(Object(c.a)(Object(c.a)({},b(T.fields)),{},{title:x,altText:_,imageUrl:C}))}else if(x===u||x===j)f.navRight.push(Object(c.a)(Object(c.a)({},h(T.fields)),{},{title:x,altText:T.fields.title}));else if(x===n){var E=h(T.fields),k=E.url,L=E.altText;f.kfcLogo={src:k,alt:L}}}}catch(H){m.e(H)}finally{m.f()}var A,R=Object(r.a)(e.subHeaderSection);try{for(R.s();!(A=R.n()).done;){var S=A.value,G=S.fields.title;(void 0===G?"":G).toUpperCase()===O&&(f.navMobileMenu.supportCategory=v(S.fields))}}catch(H){R.e(H)}finally{R.f()}"INDIA"!==a&&f.navRight.unshift(Object(c.a)({},p(t)))}return f},b=function(e){var t=e.linkText,a=e.url,n=e.icon,c=(void 0===n?null:n).fields,r=c&&h(c)||{},i=r.url,s=void 0===i?"":i,l=r.altText;return{name:t,linkTo:a,imageUrl:s,altText:void 0===l?"":l}},h=function(e){var t=e.desktopImage;return t&&f(t)||{}},f=function(e){var t=e.fields&&e.fields.file&&e.fields.file||{},a=t.url,n=void 0===a?"":a,c=t.altText;return{url:n,altText:void 0===c?"":c}},v=function(e){var t=[],a=e.category,n=e.links;return(void 0===n?[]:n).map((function(e){t.push(N(e.fields))})),{categoryHeaderText:a,subCategories:t}},N=function(e){return{name:e.linkText,linkTo:e.url,internalurl:e.internalurl,externalurl:e.externalurl}},m=function(e){var t,a=l.a.LANGUAGE_SELECTOR,n=void 0===a?"":a,c={},i=Object(r.a)(e);try{for(i.s();!(t=i.n()).done;){var s=t.value;s.type&&s.type.toUpperCase()===n&&(c=s)}}catch(o){i.e(o)}finally{i.f()}return c},p=function(e){var t=Object(c.a)({},o.a.contentData.headerContent.navRight[0]);t.options=[];var a=(e||{allowedLanguages:[{value:""}]}).allowedLanguages;if(a.length>0){var n,i=Object(r.a)(a);try{for(i.s();!(n=i.n()).done;){var s=n.value;t.options.push(s.value)}}catch(l){i.e(l)}finally{i.f()}return t}return{}},T=function(){var e=Object(n.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.registerEvent(null===(a=j.a.topNavigationLinks)||void 0===a?void 0:a.name,{"%event%":"topNavigationLinks","%navigationLink%":t.headerItemSelected},u.lb);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},847:function(e,t,a){"use strict";t.a=a.p+"static/media/Bucket-Cart.6eee8cbb.svg"},848:function(e,t,a){"use strict";var n=a(847),c={contentData:{headerContent:{kfcLogo:{src:"",alt:""},navLeft:[{name:"Menu",linkTo:"",imageUrl:""},{name:"Deals",linkTo:"",imageUrl:""},{name:"Catering",linkTo:"",imageUrl:""}],navRight:[{name:"",linkTo:"",url:"",type:"Language Selector",options:["Eng","Fr","De"]},{name:"Sign In",linkTo:"",url:a.p+"static/media/Icon_Account.13e97818.svg"},{name:"",linkTo:"",url:n.a}],navMobileMenu:{threeLineIcon:{src:"",alt:""},letsGetCookingText:{name:"letsgetcook"}}}}};t.a=c}}]);