(this["webpackJsonpreusable-comps"]=this["webpackJsonpreusable-comps"]||[]).push([[82],{1043:function(e,t,n){"use strict";var r=n(28),c=n(10),o=n(843),a=n(4),d=n(7),i=n(779),s=n(5);t.a=function(e){var t=i.a.CURRENT_ORDER,n=void 0===t?"":t,u=i.a.PROCESSING,O=void 0===u?"":u,E=i.a.PROCESSING_YOUR,R=void 0===E?"":E,l=i.a.ORDER_READY_IN_JUST,_=void 0===l?"":l,v=i.a.SECOND,N=void 0===v?"":v,T=i.a.CONFIRMING_YOUR_ORDER,A=void 0===T?"":T,b=i.a.READY_IN_JUST_A_SECOND,j=void 0===b?"":b,C=Object(a.useState)(Object(d.Uc)(window.innerWidth)),S=Object(r.a)(C,2),D=S[0],f=S[1],I=function(){var e=Object(d.Uc)(window.innerWidth);f(e)};return Object(a.useEffect)((function(){window.addEventListener("resize",I)}),[D]),Object(a.useEffect)((function(){if(e.retryCount>=0&&e.retryCount<=o.a){var t=document.getElementById("progressBarContainer"),n=document.getElementById("progressBar");console.log(t.offsetWidth);var r=t.offsetWidth/o.a*(e.retryCount+1);console.log(r),n.style.width=r+"px"}}),[e.retryCount]),Object(s.jsx)("div",{children:D?Object(s.jsx)("div",{className:"orderConfirmScreenMob","data-testid":"orderConfirmItems-component",children:Object(s.jsxs)("div",{className:"statusBar",children:[Object(s.jsx)("div",{className:"currentStatusMob",children:Object(c.e)(n)}),Object(s.jsx)("div",{id:"progressBarContainer",className:"ProgressMob",children:Object(s.jsx)("div",{id:"progressBar",className:"barMob","data-testid":"load-component"})}),Object(s.jsx)("div",{className:"progressBarMob",children:Object(c.e)(O)}),Object(s.jsx)("div",{className:"confirmOrderMobile",children:Object(c.e)(R)}),Object(s.jsxs)("div",{className:"confirmOrderMobile",children:[" ",Object(c.e)(_)]}),Object(s.jsxs)("div",{className:"confirmOrderMobile",children:[" ",Object(c.e)(N)]})]})}):Object(s.jsx)("div",{className:"orderConfirmScreen","data-testid":"orderConfirmItems-component",children:Object(s.jsxs)("div",{className:"statusBar",children:[Object(s.jsx)("div",{className:"currentStatus",children:Object(c.e)(n)}),Object(s.jsx)("div",{id:"progressBarContainer",className:"Progress",children:Object(s.jsx)("div",{id:"progressBar",className:"bar"})}),Object(s.jsx)("div",{className:"progressBar",children:Object(c.e)(O)}),Object(s.jsx)("div",{className:"confirmOrder",children:Object(c.e)(A)}),Object(s.jsxs)("div",{className:"confirmOrder",children:[" ",Object(c.e)(j)," "]})]})})})}},1044:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(0),c=n(4),o=n.n(c),a=n(37),d=n(774),i=n(768),s=n(7),u=n(5),O=function(e){return function(t){var n=null,c=null,d=Object(a.c)((function(e){var t,n;return{homePageContent:Object(s.Dc)(null===e||void 0===e||null===(t=e.contentReducer)||void 0===t?void 0:t.response),marketPageContent:Object(s.Dc)(null===e||void 0===e||null===(n=e.marketConfigReducer)||void 0===n?void 0:n.response),tenantReducerContent:Object(s.Dc)(null===e||void 0===e?void 0:e.tenantReducer)}}));if(d.marketPageContent&&d.tenantReducerContent&&d.homePageContent){var i;Object(s.Hb)(d.homePageContent);var O=Object(s.zc)(null===d||void 0===d||null===(i=d.marketPageContent)||void 0===i?void 0:i.headerData),l=O.header,_=void 0===l?{}:l,v=O.tenant,N=void 0===v?[]:v,T=O.footer,A=void 0===T?{}:T;n=Object(s.Ib)(_),c=Object(s.Ab)(A),Object(s.kc)(N)}var b=Object(a.c)((function(e){return e.appStateReducer.userStatus}));return Object(u.jsxs)(o.a.Fragment,{children:[E(n,d,b,!0,!1),Object(u.jsx)(e,Object(r.a)({},t)),R(c,t.history,d)," "]})}},E=function(e,t,n,r,c){return Object(s.Qc)(e)&&Object(u.jsx)(d.b,{contentData:e,tenantReducerData:t.tenantReducerContent,userParams:n,paymentHeader:r,checkoutHeader:c})},R=function(e,t,n){return Object(s.Qc)(e)&&Object(u.jsx)(i.a,{contentData:e,history:t,tenantReducerData:n.tenantReducerContent})}},1273:function(e,t,n){"use strict";n.r(t);var r=n(28),c=n(4),o=n(37),a=n(815),d=n(7),i=n(3),s=n(1043),u=n(5),O=n(1044);t.default=Object(O.a)((function(e){var t,n=Object(o.b)(),O=Object(o.c)((function(e){return e})),E=O.tenantReducer,R=O.paymentsReducer,l=O.orderReducer,_=Object(c.useState)(!1),v=Object(r.a)(_,2),N=v[0],T=v[1];return Object(c.useEffect)((function(){var t,r;localStorage.getItem("postPaymentType")===i.Cc.PAYTM?null!==E&&void 0!==E&&E.tenantId&&null!==l&&void 0!==l&&l.response&&null!==R&&void 0!==R&&null!==(t=R.response)&&void 0!==t&&t.transactionId&&(!function(e,t,n,r){var c=(null===r||void 0===r?void 0:r.order).customer,o={tenantId:t,transactionId:n,customerId:null===c||void 0===c?void 0:c.id};e(Object(a.a)(o))}(n,null===E||void 0===E?void 0:E.tenantId,null===R||void 0===R||null===(r=R.response)||void 0===r?void 0:r.transactionId,null===l||void 0===l?void 0:l.response),T(!0)):Object(d.Jd)(e)}),[null===E||void 0===E?void 0:E.tenantId,null===l||void 0===l?void 0:l.response,null===R||void 0===R?void 0:R.response]),Object(c.useEffect)((function(){var t;localStorage.getItem("postPaymentType")===i.Cc.PAYTM?null!==R&&void 0!==R&&R.paytmStatusData&&N&&(T(!1),"success"===(null===R||void 0===R||null===(t=R.paytmStatusData)||void 0===t?void 0:t.status)?Object(d.Jd)(e):Object(d.Id)(e)):console.log("useEffect")}),[N,null===R||void 0===R||null===(t=R.paytmStatusData)||void 0===t?void 0:t.status]),Object(u.jsx)("div",{className:"PostPaymentProcessComponent",children:Object(u.jsx)(s.a,{showLoader:"false"})})}))},768:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),c=n(134),o=n(5),a=function(e){return Object(o.jsx)(c.a,Object(r.a)({testId:"account-container-test",importPath:"FOOTER_PAGE"},e))}},774:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return d}));var r=n(0),c=n(134),o=n(5),a=function(e){return Object(o.jsx)(c.a,Object(r.a)({testId:"header-container-test",importPath:"HEADER_CONTAINER"},e))},d=function(e){return Object(o.jsx)(c.a,Object(r.a)({testId:"header-container-test",importPath:"SECONDARY_HEADER_CONTAINER"},e))}},779:function(e,t,n){"use strict";t.a={SAVE_ORDER_NAME_ERROR:"OccasionNameValidation",FAVORITES_ORDERS_REGEX:/^(?!\s)[A-Za-z0-9 ]{1,50}$/,CURRENT_ORDER:"currentOrder",PROCESSING:"processing",PROCESSING_YOUR:"processingYour",ORDER_READY_IN_JUST:"orderReadyInJust",SECOND:"aSecondText",CONFIRMING_YOUR_ORDER:"confirmYourOrder",READY_IN_JUST_A_SECOND:"readyInJustASecond",YOUR_ORDER:"yourOrder",ORDER:"order#",COMPLETED:"completed",DELIVER_TO:"deliveryTo",PAYMENT:"payment",ORDER_FROM:"orderFrom",GET_DIRECTION:"getDirection",SUB_TOTAL:"subTotal",DISCOUNT:"discount",TOTAL:"total",ORDERS:"order",YOUR_SET:"YOU\u2019RE ALL SET",DELEIVERED_AROUND:" will be delivered around",PICKUP_AROUND:"willBeReadyForPickup",READY_FOR_PICKUP:"readyForPickup",NAME_ORDER_NUMBER:"GIVE US YOUR NAME OR ORDER NUMBER",WHEN_YOURE_HERE:"WHEN YOU\u2019RE HERE.",SAVE_YOUR_ORDERS_AND_CHECKOUT_FASTER:"SAVE YOUR ORDERS AND CHECKOUT FASTER",SAVED_TO_FAVORITE_MENU:"Saved this order in My Favorite Menu.",CREATE_AND_ACCOUNT_SAVE_ORDERS:"CREATE AN ACCOUNT TO SAVE YOUR ORDERS AND",CHECKOUT_FASTER:"CHECKOUT FASTER",SAVE_THIS_Order:"Save This Order",ORDER_FROM_CAPS:"ORDER FROM",VIEW_MORE:"View More Details",BACK_TO_CART:"backToCart",THAT_AINT_RIGHT:"thatNotRight",FAILED_MSG:"unsuccessfulPayment",FEEDBACK_EMAIL:"FeedbackEmail",PHONE_NUMBER:"phoneNumber",BACK_TO_CART_MSG:"GoBackToCart",ORDER_ACCEPTED:"orderAccepted",SIGN_UP:"signAndSaveOrder",RESTAURANT_HANDLING_CHARGE:"cartIncluTax",READY_FOR_DINEIN:"readyForDineIn",DINEIN_AROUND:"dineInText",PICKUP:"PICKUP",DELIVERY:"DELIVERY",ONLY_IMAGE:"Only image",DELIVERY_FEE:"deliveryFee",DISCOUNT_TEXT:"DiscountText",THANKYOU:"saveOrderThankYou",WE_SAVED:"weSaved",GIVE_A_NAME:"giveAName",SCHEDULE_ORDER:"savedOrderScheduleOrder",ORDER_DETAIL:"orderDetails",SCHEDULED:"scheduled",GST:"cartGst",largeCarryBagText:"largeCarryBag",addHopeText:"addhope",SEARCH_IN_CART:"SEARCH_IN_CART",HH_MM:"hh mm",HH_MM_A:"hh:mma",H_MM_A:"h:mma",TOTAL_GST_INCLUDED:"gstIncluded",REORDER_FAVOURITES:"reorderFavourites",CREATE_KFC_ACCOUNT:"createKfcAccount"}},815:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(1);function c(e){return{type:r.GET_NETBANKING_CONFIGURATIONS,payload:e}}function o(e){return{type:r.PAYMENT_USING_NETBANKING,payload:e}}function a(){return{type:r.RESET_PAYMENT_STATUS}}function d(e){return{type:r.PAYMENT_USING_PHONEPE,payload:e}}function i(e){return{type:r.GET_PAYTM_TOKEN_CALL,payload:e}}function s(e){return{type:r.PAYTM_STATUS_CHECK,payload:e}}function u(e){return{type:r.FETCH_OTHER_WALLETS_LIST,payload:e}}},843:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return a}));var r=20,c=5e3,o=15e3,a=18e4}}]);