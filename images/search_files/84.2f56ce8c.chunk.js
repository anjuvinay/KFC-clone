(this["webpackJsonpreusable-comps"]=this["webpackJsonpreusable-comps"]||[]).push([[84,127],{1266:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var a=n(4),c=n.n(a),i=n(37),o=n(44),l=n(60),s=n(97),r=n(943),d=n(778),u=n(774),b=n(768),j=n(777),O=n(678),h=n(12),v=n(770),m=n(7),p=n(96),f=n(28),x=n.p+"static/media/getHelp.c28c1243.svg",N=n(49),C=n(69),g=n(5),E=function(e){var t,n,a,c,i,o,l,s,r,d,u,b,j,O,h=null!==(t=JSON.parse(localStorage.getItem("storeInfo")))&&void 0!==t?t:{},v=e.contentData,p=e.isLocalized,f=e.isMobile,x=e.history,E=e.onStartOrderClick,T=v.faqSectionDetails,S=v.helpSectionCallDetails,R=v.helpSectionContactDetails,A=v.helpSectionHeadline,I=v.helpSectionNearestKFC,_=v.surveyDetails,D=function(e){console.log("clicked",e.target.textContent),localStorage.setItem("SelectedFaqItem",e.target.textContent),x.push({pathname:"/faq"})},k=function(e){var t="";if(Object(m.Qc)(e)){var n=e.contacts;(void 0===n?[]:n).forEach((function(e){var n=e.key,a=e.value;"phoneNumber"===n&&(t=a)}))}return t};return Object(g.jsxs)("div",{className:"get-help-section",children:[Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h2",{className:"help-text",children:A}),Object(g.jsxs)("div",{className:"help-block-container",children:[Object(g.jsxs)("div",{className:"get-help-block mr5 mb-5",children:[Object(g.jsx)("h3",{className:"header-text",children:Object(g.jsx)("span",{children:I})}),!f&&p&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{"data-testid":"nearest-kfc",className:"nearest-kfc-details",children:[Object(g.jsx)("span",{className:"section-text font-bold",children:null===h||void 0===h||null===(n=h.name)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.value}),Object(g.jsx)("span",{className:"section-text font-bold",children:null===h||void 0===h||null===(c=h.addresses)||void 0===c||null===(i=c[0])||void 0===i||null===(o=i.address)||void 0===o||null===(l=o.addressLines)||void 0===l?void 0:l[0]}),Object(g.jsxs)("span",{className:"section-text font-bold",children:["Call. ",Object(g.jsx)("span",{className:"deepBlack",children:k(h)})]})]})}),f&&p&&Object(g.jsxs)("div",{className:"section-text ContactUsButton",children:[Object(g.jsxs)("div",{className:"nearest-kfc-details mb-1rem",children:[Object(g.jsx)("span",{className:"section-text font-bold",children:null===h||void 0===h||null===(s=h.name)||void 0===s||null===(r=s[0])||void 0===r?void 0:r.value}),Object(g.jsx)("span",{className:"section-text font-bold",children:null===h||void 0===h||null===(d=h.addresses)||void 0===d||null===(u=d[0])||void 0===u||null===(b=u.address)||void 0===b||null===(j=b.addressLines)||void 0===j?void 0:j[0]})]}),Object(g.jsx)("a",{"data-testid":"nearest-kfc-localised",href:"tel:".concat(k(h)),className:"anchorTags",children:Object(g.jsxs)(N.a,{ariaLable:"",className:"deepBlack font-bold button whiteButton blkBorder ",children:[Object(g.jsx)(C.a,{srcFile:null===S||void 0===S?void 0:S.icon,alt:"desktopImage",className:"Messageimage"}),"Call Restaurant"]})})]}),!p&&Object(g.jsx)("div",{"data-testid":"find-kfc",className:"section-text mt-5 ContactUsButton",children:Object(g.jsx)(N.a,{ariaLable:"find a kfc","data-testid":"start-order-click",className:"deepBlack font-bold button whiteButton blkBorder ",onClick:function(){return E()},children:"Find a KFC"})})]}),Object(g.jsxs)("div",{className:"get-help-block mr5 mb-5",children:[Object(g.jsx)("h3",{className:"header-text",children:Object(g.jsx)("span",{children:null===S||void 0===S?void 0:S.title})}),Object(g.jsx)("span",{className:"section-text",children:null===S||void 0===S?void 0:S.description}),!f&&Object(g.jsx)("span",{"data-testid":"contact-no-text",className:"section-text font-bold deepBlack",children:null===S||void 0===S?void 0:S.contactNo}),f&&Object(g.jsx)("a",{"data-testid":"contact-no-btn",href:"tel:".concat(null===S||void 0===S?void 0:S.contactNo),className:"anchorTags",children:Object(g.jsx)("div",{className:"section-text mt-adjust ContactUsButton",children:Object(g.jsxs)(N.a,{ariaLable:"",className:"deepBlack font-bold button whiteButton blkBorder ",children:[Object(g.jsx)(C.a,{srcFile:null===S||void 0===S?void 0:S.icon,alt:"desktopImage",className:"Messageimage"}),null===S||void 0===S?void 0:S.buttonText]})})})]}),Object(g.jsxs)("div",{className:"get-help-block mb-5",children:[Object(g.jsx)("h3",{className:"header-text",children:Object(g.jsx)("span",{children:null===R||void 0===R?void 0:R.title})}),Object(g.jsx)("span",{className:"section-text",children:null===R||void 0===R?void 0:R.description}),Object(g.jsx)("div",{className:"section-text mt-5 ContactUsButton",children:Object(g.jsxs)(N.a,{ariaLable:"contact us","data-testid":"contact-us-btn",className:"deepBlack font-bold button whiteButton blkBorder ",onClick:function(){return e=null===R||void 0===R?void 0:R.linkUrl,void x.push({pathname:e});var e},children:[Object(g.jsx)(C.a,{srcFile:null===R||void 0===R?void 0:R.desktopImage,alt:" ",className:"Messageimage"}),null===R||void 0===R?void 0:R.linkText]})})]})]})]}),T.length>0&&Object(g.jsxs)("div",{className:"faq-survey-section mb-5",children:[Object(g.jsxs)("div",{class:"faq-survey-block  m1-adjust",children:[Object(g.jsx)("h3",{className:"header-text",children:null===T||void 0===T?void 0:T.title}),Object(g.jsx)("span",{className:"section-text",children:null===T||void 0===T?void 0:T.description}),Object(g.jsx)("div",{className:"faq-text-block",children:null===T||void 0===T||null===(O=T.topics)||void 0===O?void 0:O.map((function(e){return Object(g.jsx)(N.a,{ariaLable:e,tabindex:"0","data-testid":"topic-item",className:"section-text",onClick:D,children:e})}))}),Object(g.jsx)("span",{className:"section-text mt-5",children:Object(g.jsx)(N.a,{ariaLable:"view all faq","data-testid":"view-all-faq",className:"deepBlack font-bold help-btn image-full-text-btn button whiteButton blkBorder",onClick:function(){return e=null===T||void 0===T?void 0:T.linkUrl,void x.push({pathname:e});var e},children:null===T||void 0===T?void 0:T.btnText})})]}),Object(g.jsxs)("div",{class:"faq-survey-block  m-adjust",children:[Object(g.jsx)("p",{className:"header-text",children:null===_||void 0===_?void 0:_.title}),Object(g.jsx)("div",{className:"section-text faq-text-block",children:null===_||void 0===_?void 0:_.description}),Object(g.jsx)("span",{className:"section-text mt-5",children:Object(g.jsx)("a",{href:null===_||void 0===_?void 0:_.linkUrl,"aria-hidden":"true",tabindex:"-1",target:"_blank",className:"anchorTags",rel:"noopener noreferrer",children:(null===_||void 0===_?void 0:_.btnText)&&Object(g.jsx)(N.a,{className:"deepBlack font-bold help-btn image-full-text-btn button whiteButton blkBorder",children:null===_||void 0===_?void 0:_.btnText})})})]})]})]})},T=function(e){var t=e.onStartOrderClick,n=Object(a.useState)(Object(m.Uc)(window.innerWidth)),c=Object(f.a)(n,2),o=c[0],l=c[1],s=Object(i.c)((function(e){return e.appStateReducer.userStatus})).localized,r=void 0!==s&&s;Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(a.useEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}));var d=function(){l(Object(m.Uc)(window.innerWidth))};return Object(g.jsxs)("div",{className:"get-help-container-section",children:[Object(g.jsx)("div",{style:{backgroundImage:"url(".concat(x,")")},className:"get-help-header-image",children:Object(g.jsx)("h1",{className:"get-help-image-text",children:e.contentData.bannerTitle})}),Object(g.jsx)("div",{className:"get-help-offers-container",children:Object(g.jsx)(E,{onStartOrderClick:t,contentData:e.contentData,history:e.history,isLocalized:r,isMobile:o})})]})},S=n(38),R=function(e){var t,n,f,x,N,C=Object(i.c)((function(e){return e.appStateReducer.userStatus})),E=h.a.DISPOSITION_DATA,R=Object(a.useContext)(l.a),A=R.userOrderState,I=R.userOrderStateDispatch,_=Object(o.g)(),D=null,k=null,y=null,w=null,L=O.default.DISPOSITION,P=Object(i.b)(),F=Object(i.c)((function(e){return{homePageContent:e.contentReducer.response||null,marketPageContent:e.marketConfigReducer.response||null,tenantReducerContent:e.tenantReducer||null,getHelpContent:e.helpReducer.helpResponse||null}}));if(F.marketPageContent&&F.tenantReducerContent&&F.homePageContent){var M;D=Object(m.Hb)(F.homePageContent);var H=(null===(M=F.marketPageContent)||void 0===M?void 0:M.headerData)||{},B=H.header,G=void 0===B?{}:B,U=H.tenant,W=void 0===U?[]:U,Y=H.footer,q=void 0===Y?{}:Y;k=Object(m.Ib)(G),w=Object(m.Ab)(q),Object(m.kc)(W),y=Object(m.Jb)(F.getHelpContent)}return Object(a.useEffect)((function(){var e;P(Object(d.a)({object:Object(p.a)(),contentFull:{content_type:"marketConfig","fields.location":null===F||void 0===F||null===(e=F.tenantReducerContent)||void 0===e?void 0:e.country,"fields.channel":S.b.channel,include:5}})),P(Object(s.c)({object:Object(p.a)(),contentFull:{content_type:"landingPage","fields.pageType":"HomePage","fields.channel":S.b.channel,include:"5"},userParams:C}))}),[null===F||void 0===F||null===(t=F.tenantReducerContent)||void 0===t?void 0:t.country,P,C]),Object(a.useEffect)((function(){P(Object(r.a)({object:Object(p.a)(),contentFull:{content_type:"staticLandingPage","fields.page":"Help",include:"5"}}))}),[]),Object(g.jsxs)(c.a.Fragment,{children:[Object(m.Qc)(k)&&Object(g.jsx)(u.a,{contentData:k,tenantReducerData:F.tenantReducerContent,userParams:C})||null,Object(g.jsx)(j.a,{contentData:{segmentedHomePageData:null!==(n=null===(f=D)||void 0===f?void 0:f[L])&&void 0!==n?n:{},contentDispositionData:null!==(x=null===(N=D)||void 0===N?void 0:N[L])&&void 0!==x?x:{}},userParams:C}),Object(m.Qc)(y)&&Object(g.jsx)(T,{"data-testid":"get-help-container",onStartOrderClick:function(){I({type:E,value:{showDisposition:!0}})},contentData:y,history:_}),Object(m.Qc)(w)&&Object(g.jsx)(b.a,{history:_,contentData:w,tenantReducerData:F.tenantReducerContent})||null,A.showCartClearAlert?Object(g.jsx)(v.a,{}):null]})}},678:function(e,t,n){"use strict";n.r(t);t.default={GENERAL_ROUTING:"General Routing/Communication",HOME_PAGE_OFFERS:"Home Page Offers",MARKETING_HERO_3:"Marketing Hero 3",CRM_SIGNUP:"CRM SignUP",BROWSER_CATEGORIES:"Browser Categories",OFFERS_DEALS:"Offers and Deals",DISPOSITION:"disposition",CAROUSAL:"carousalComponent",ORDERSERV:"orderServComponent",ROUTING:"routingComponent",CRM:"crmSignUp",ORDER_IT_AGAIN:"Order it again",WELCOME_MESSAGE:"Welcome Message",RECOMMENDATION:"Recommendation",INDIA:"INDIA",PAYMENT_FAILED_MESSAGE:"paymentdeclined",PAYMENT_PRE_VALIDATION_FAILED_MESSAGE:"paymentPreValidationFailed",SERVICE_CHANNEL:"web",OFFERS_DEALS_MODE:"Web",KFC_Gift_Card:"KFC Gift Card",LOGIN_ACTION:"login-actions/registration?client_id=",REDIRECT_PATH_NAME:"redirect_path_name",SIGNOUT:"/signout",OPEN_ID_CONNECT:"/openid-connect/",CODE_CHALLENGE:"code_challenge",CODE_VERIFIER:"code_verifier",REGISTRATIONS:"registrations?"}},759:function(e,t,n){"use strict";t.a={contentData:{scheduleOrderHeaderText:"scheduleOrder",changeScheduleOrderHeaderText:"changeYourOrderTitle",scheduleOrderModalContent:{formContent:{orderTypeTitle:"orderType",restaurantTitle:"YourKFCLocation",yourLocationTitle:"yourLocation",editTitle:"edit",scheduleDateTitle:"scheduleForYourOrder",dateTitle:"date",timeTitle:"time",buttonText:"confirm",dateOptions:["Today","23/03/2021","24/03/2021"],timeOptions:[9.3,10,10.3,11]}},DELIVERY_NA_WARNING_MESSAGE:"noStoresWithDeliveryHeader",DELIVERY_PICKUP_NA_MESSAGE:"deliverystoresWithoutAnyServiceHeader",SWITCH_TO_TAKEAWAY:"switchToTakeaway",errorMessageInactive:"errorMessageInactive",errorMessageClosed:"errorMessageClosed"},timingsSampleData:{operatingHours:[{day:"EVERYDAY",availableHours:{from:"10:00",to:"23:00"}}],asap:{isAvailable:!0,promiseTime:0},scheduled:{date:"2021-05-05",periods:[{startEndTime:{from:"11:30",to:"23:00"},interval:15}],unavailibilities:[]},futureDates:["2021-05-06"]}}},768:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),c=n(134),i=n(5),o=function(e){return Object(i.jsx)(c.a,Object(a.a)({testId:"account-container-test",importPath:"FOOTER_PAGE"},e))}},770:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(4),c=n(37),i=n(114),o=n(135),l=n(60),s={MSGTXT1:"clearCartAwareText",MSGTXT2:"clearCartActionText",MSGTXT3:"clearCartCompleteText"},r="continue",d="cancel",u=n(12),b=n(10),j=n(105),O=n(7),h=n(31),v=n(5),m=function(e){var t=(Object(c.c)((function(e){return e.cartReducer}))||{}).cartData,n=void 0===t?{}:t,m=(Object(c.c)((function(e){return e.tenantReducer}))||{}).tenantId,p=void 0===m?"":m,f=Object(a.useContext)(l.a),x=f.userOrderState,N=f.userOrderStateDispatch,C=x.modalToOpenOnConfirm,g=x.modalOpenFrom,E=x.confirmCallBack,T=Object(c.b)(),S=s,R=r,A=d,I=u.a.SHOW_CLEAR_CART_ALERT,_=u.a.DISPOSITION_DATA,D=u.a.SEARCH_ORDER_DATA,k=u.a.SCHEDULE_ORDER_DATA,y=u.a.clearCartChangeFlag,w=u.a.orderTypeAlertTitle,L=u.a.searchStoreAlertTitle,P=Object(O.Pc)(x.dispositionNew)?JSON.parse(localStorage.getItem("dispositionNew")):x.dispositionNew,F=function(){N({type:I,value:{showCartClearAlert:!1}}),g===y&&N({type:k,value:{showScheduleOrder:!0,selectedStoreInfo:P.store,changeFlow:!0}})};return Object(v.jsx)(o.a,{handleClose:F,classNames:"clear-cart-modal",CartAlertForm:Object(v.jsx)(i.a,{splitTitle:S,imageSrc:j.a,altText:"cart-error",confirmButtonText:Object(b.e)(R),cancelButtonText:Object(b.e)(A),cancelHandler:F,confirmHandler:function(){if(n.discountLines.length>0){var e=n.discountLines.map((function(e){return e.id}));T(Object(h.m)({params:{basketId:n.id},tenantId:p,shouldClearCart:!0},e))}else T(Object(h.n)({basketId:n.id,tenantId:p}));T(Object(h.t)(new Date)),N({type:I,value:{showCartClearAlert:!1}}),E&&E(),C===w?N({type:_,value:{showDisposition:!0}}):C===L&&N({type:D,value:{showSearchStore:!0}})}})})}},774:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var a=n(0),c=n(134),i=n(5),o=function(e){return Object(i.jsx)(c.a,Object(a.a)({testId:"header-container-test",importPath:"HEADER_CONTAINER"},e))},l=function(e){return Object(i.jsx)(c.a,Object(a.a)({testId:"header-container-test",importPath:"SECONDARY_HEADER_CONTAINER"},e))}},778:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1);function c(e){return{type:a.GET_MARKET_CONFIG_CONTENT,payload:e}}},943:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1);function c(e){return{type:a.GET_HELP_CONTENT,payload:e}}}}]);