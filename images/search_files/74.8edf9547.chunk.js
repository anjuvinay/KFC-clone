/*! For license information please see 74.8edf9547.chunk.js.LICENSE.txt */
(this["webpackJsonpreusable-comps"]=this["webpackJsonpreusable-comps"]||[]).push([[74],{1102:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(1);function i(e){return{type:o.GET_TERMS_OF_USE,payload:e}}},1103:function(e,t,n){"use strict";(function(e){var o,i,a,r,c=n(801),d=(n(4),n(846)),l=n(7),s=n(802),u=n(275),p=n(5),O=null===(o=e)||void 0===o||null===(i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_TENANT_CODE:"in",REACT_APP_API_BASE_URL:"https://online.kfc.co.in"}))||void 0===i||null===(a=i.REACT_APP_TENANT_CODE)||void 0===a?void 0:a.toUpperCase(),f=null===s.m||void 0===s.m?void 0:s.m[O],E=d.b.div(r||(r=Object(c.a)(["\n  ","\n"])),Object(l.v)(f));t.a=function(e){var t=e.headerData,n=(t=void 0===t?{}:t).description,o=t.title,i=e.userParams;return Object(p.jsxs)(E,{className:"terms-header-container".concat(null!==i&&void 0!==i&&i.localized?" localized":""),children:[Object(p.jsx)("img",{src:u.a,className:"terms-icon",alt:" "}),Object(p.jsx)("h4",{className:"terms-header",children:o}),Object(p.jsx)("div",{className:"terms-and-condition-data",children:n})]})}}).call(this,n(85))},1115:function(e,t,n){"use strict";var o=n(28),i=n(4),a=n(7),r=n(60),c=n(1103),d=n(757),l=n(763),s=n(5),u=function(e){var t=e.questionList,n=void 0===t?[]:t,o=e.headerData,i=(o=void 0===o?{}:o).title,a=e.isMobile,r=function(e){var t=e.target.parentElement.parentElement.parentElement;t.classList.contains("terms-accordian-open")?t.classList.remove("terms-accordian-open"):t.classList.add("terms-accordian-open")};return Object(s.jsx)("div",{children:n.map((function(e,t){return Object(s.jsx)("div",{className:"terms-accordian",id:a&&n[0].question===e.question?"removeLine":"",children:Object(s.jsx)(d.a,{"data-testId":"acordian-handle",header:"Terms of Use"===i?"".concat(e.question):"".concat(t+1,". ").concat(e.question),onClickHandler:r,children:Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:Object(l.documentToHtmlString)(e.answer)},className:"terms-accordian-answer"})})})}))})},p=n(770);t.a=function(e){var t=e.contentData,n=(t=void 0===t?{}:t).headerData,d=void 0===n?{}:n,l=t.questionList,O=void 0===l?[]:l,f=e.userParams,E=Object(i.useState)(Object(a.Uc)(window.innerWidth)),b=Object(o.a)(E,2),L=b[0],h=b[1],S=Object(i.useContext)(r.a).userOrderState,m=function(){var e=Object(a.Uc)(window.innerWidth);h(e)};Object(i.useEffect)((function(){window.addEventListener("resize",m)}),[L]);return L?Object(s.jsxs)("div",{className:"terms-mobile-container ".concat(a.ad&&"terms-au"),children:[Object(s.jsx)("div",{className:"terms-mobile-header",children:Object(s.jsx)(c.a,{headerData:d})}),Object(s.jsx)("div",{className:"terms-mobile-questions",children:Object(s.jsx)(u,{questionList:O,headerData:d,isMobile:L})}),S.showCartClearAlert?Object(s.jsx)(p.a,{}):null]}):Object(s.jsxs)("div",{className:"terms-desktop-container ".concat(a.ad&&"terms-au"),children:[Object(s.jsx)("div",{className:"terms-section-left",children:Object(s.jsx)(c.a,{headerData:d,userParams:f})}),Object(s.jsx)("div",{className:"terms-section-right",children:Object(s.jsx)("div",{className:"terms-questions-desktop",children:Object(s.jsx)(u,{questionList:O,headerData:d,isMobile:L})})}),S.showCartClearAlert?Object(s.jsx)(p.a,{}):null]})}},747:function(e,t,n){"use strict";n.r(t);var o=n(28),i=n(4),a=n(37),r=n(44),c=n(1102),d=n(10),l=n(7),s=n(96),u=n(87),p="Terms of Use",O="terms-of-use",f="Terms and Conditions",E=n(34),b=n.n(E),L=n(276),h=n(1115),S=n(783),m=n(5);t.default=function(e){var t=Object(d.e)(u.r),n=Object(a.b)(),E=Object(a.c)((function(e){return e.appStateReducer.userStatus})),v=Object(r.h)();Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(i.useEffect)((function(){v.pathname.includes(u.s)&&Object(d.e)(u.r)&&(document.title=t)}),[t,v.pathname]);var _=Object(l.mc)(v.pathname.includes(O),p,f),j=v.pathname.includes(O),T=Object(a.c)((function(e){var t;return{termsOfUseContent:null===e||void 0===e||null===(t=e.termsOfUseReducer)||void 0===t?void 0:t.response}}));Object(i.useEffect)((function(){n(Object(c.a)({object:Object(s.a)(),contentFull:{content_type:"staticLandingPage","fields.page":_,include:"5"}}))}),[n,_,v.pathname]);var C=JSON.stringify(null===T||void 0===T?void 0:T.termsOfUseContent),N=Object(i.useState)(null),g=Object(o.a)(N,2),A=g[0],B=g[1];return Object(i.useEffect)((function(){var e,t,n,o,i=Object(l.lc)(null===T||void 0===T||null===(e=T.termsOfUseContent)||void 0===e||null===(t=e.termsResponseData)||void 0===t||null===(n=t.items)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.fields);B(i)}),[C]),Object(m.jsxs)(m.Fragment,{children:[j&&Object(m.jsx)(r.b,{component:L.a}),!j&&!b()(A)&&Object(m.jsxs)(m.Fragment,{children:[A.seoTemplate&&Object(m.jsx)(S.a,{seoTemplate:A.seoTemplate}),Object(m.jsx)(h.a,{contentData:A,userParams:E})]})]})}},757:function(e,t,n){"use strict";var o=n(28),i=n(4),a=n(3),r=n(224),c=n(7),d=n(5);t.a=function(e){var t=e.header,n=e.subHeader,l=e.onClickHandler,s=e.isDarkMode,u=void 0!==s&&s,p=e.isBlackArrow,O=void 0!==p&&p,f=e.cssClass,E=void 0===f?"":f,b=e.open,L=e.key,h=e.shouldDefaultOpen,S=void 0!==h&&h,m=e.dataTestId,v=void 0===m?"":m,_=e.footerActiveMenu,j=e.subHeaderText,T=void 0===j?"":j,C=e.subHeaderClass,N=void 0===C?"":C,g=Object(i.useState)(S),A=Object(o.a)(g,2),B=A[0],D=A[1],I=function(e){D(!B),l&&l(e)};Object(i.useEffect)((function(){b&&D(!B)}),[b]),Object(i.useEffect)((function(){void 0!==_&&D(_)}),[_]);return Object(d.jsxs)("div",{className:"global-accordian-container ".concat(E),"data-testid":"global-accordian",onKeyPress:function(e){var t=a.Rd.KEY_CHAR_CODE.ENTER;e.charCode===t&&(D(!B),l&&l(e))},children:[Object(d.jsxs)("button",{type:"button","aria-expanded":"false",className:"global-accordian-header-container",children:[Object(d.jsx)("span",{className:"global-accordian-header",onClick:I,"data-testid":v,children:t}),u?Object(d.jsx)("img",{src:Object(c.mc)(B,r.a.AccordianUpDark,r.a.AccordianDownDark),alt:"",onClick:I,className:"global-accordian-arrow","data-testid":"acordian-handle-dark"}):O?Object(d.jsx)("img",{src:Object(c.mc)(B,r.a.AccordianUPBlack,r.a.AccordianDownBlack),alt:"",onClick:I,className:"global-accordian-arrow","data-testid":"acordian-handle-dark"}):Object(d.jsx)("img",{src:Object(c.mc)(B,r.a.SingleArrowBlackExpand,r.a.SingleArrowBlack),alt:"",onClick:I,className:"global-accordian-arrow","data-testid":"acordian-handle"})]}),n&&!B?Object(d.jsx)("ul",{className:"global-accordion-subheader cart-food-modifier",children:n.map((function(e,t){return Object(d.jsxs)("li",{children:[e,t===n.length-1?Object(d.jsx)("span",{children:"..."}):null]})}))}):null,T?Object(d.jsx)("div",{className:"global-accordion-subheadertext ".concat(N),children:T}):null,B&&Object(d.jsx)("div",{className:"global-accordian-content",children:e.children})]},L)}},763:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return n=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},o=/["'&<>]/,i=function(e){var t,n=""+e,i=o.exec(n);if(!i)return n;var a="",r=0,c=0;for(r=i.index;r<n.length;r++){switch(n.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==r&&(a+=n.substring(c,r)),c=r+1,a+=t}return c!==r?a+n.substring(c,r):a};var a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function c(e,t){return e(t={exports:{}},t.exports),t.exports}var d=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));r(d);d.BLOCKS;var l=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));r(l);l.INLINES;var s=c((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(n||(n={})),t.default=n}));r(s);var u=c((function(e,t){var n,o=a&&a.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,i=0,a=t.length;i<a;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0,t.TOP_LEVEL_BLOCKS=[d.BLOCKS.PARAGRAPH,d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6,d.BLOCKS.OL_LIST,d.BLOCKS.UL_LIST,d.BLOCKS.HR,d.BLOCKS.QUOTE,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET,d.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[d.BLOCKS.PARAGRAPH,d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6,d.BLOCKS.OL_LIST,d.BLOCKS.UL_LIST,d.BLOCKS.HR,d.BLOCKS.QUOTE,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[d.BLOCKS.TABLE,d.BLOCKS.TABLE_ROW,d.BLOCKS.TABLE_CELL,d.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[d.BLOCKS.HR,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[d.BLOCKS.OL_LIST]=[d.BLOCKS.LIST_ITEM],n[d.BLOCKS.UL_LIST]=[d.BLOCKS.LIST_ITEM],n[d.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[d.BLOCKS.QUOTE]=[d.BLOCKS.PARAGRAPH],n[d.BLOCKS.TABLE]=[d.BLOCKS.TABLE_ROW],n[d.BLOCKS.TABLE_ROW]=[d.BLOCKS.TABLE_CELL,d.BLOCKS.TABLE_HEADER_CELL],n[d.BLOCKS.TABLE_CELL]=[d.BLOCKS.PARAGRAPH],n[d.BLOCKS.TABLE_HEADER_CELL]=[d.BLOCKS.PARAGRAPH],n),t.HEADINGS=[d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=o([d.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[d.BLOCKS.DOCUMENT,d.BLOCKS.PARAGRAPH,d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6,d.BLOCKS.OL_LIST,d.BLOCKS.UL_LIST,d.BLOCKS.LIST_ITEM,d.BLOCKS.HR,d.BLOCKS.QUOTE,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET,l.INLINES.HYPERLINK,l.INLINES.ENTRY_HYPERLINK,l.INLINES.ASSET_HYPERLINK,l.INLINES.EMBEDDED_ENTRY,"text"]}));r(u);u.V1_NODE_TYPES,u.TEXT_CONTAINERS,u.HEADINGS,u.CONTAINERS,u.VOID_BLOCKS,u.TABLE_BLOCKS,u.LIST_ITEM_BLOCKS,u.TOP_LEVEL_BLOCKS;var p=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));r(p);var O=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));r(O);var f=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:d.BLOCKS.DOCUMENT,data:{},content:[{nodeType:d.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));r(f);var E=c((function(e,t){function n(e,t){for(var n=0,o=Object.keys(e);n<o.length;n++){if(t===e[o[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(l.INLINES,e.nodeType)},t.isBlock=function(e){return n(d.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));r(E);E.isText,E.isBlock,E.isInline;var b=c((function(e,t){var n=a&&a.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),o=a&&a.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=a&&a.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||n(t,e,o)},r=a&&a.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return o(t,e),t},c=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return d.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return l.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return c(s).default}}),i(u,t),i(p,t),i(O,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return c(f).default}});var b=r(E);t.helpers=b}));r(b);var L,h,S=b.helpers,m=(b.EMPTY_DOCUMENT,b.MARKS),v=b.INLINES,_=b.BLOCKS,j=((L={})[_.PARAGRAPH]=function(e,t){return"<p>"+t(e.content)+"</p>"},L[_.HEADING_1]=function(e,t){return"<h1>"+t(e.content)+"</h1>"},L[_.HEADING_2]=function(e,t){return"<h2>"+t(e.content)+"</h2>"},L[_.HEADING_3]=function(e,t){return"<h3>"+t(e.content)+"</h3>"},L[_.HEADING_4]=function(e,t){return"<h4>"+t(e.content)+"</h4>"},L[_.HEADING_5]=function(e,t){return"<h5>"+t(e.content)+"</h5>"},L[_.HEADING_6]=function(e,t){return"<h6>"+t(e.content)+"</h6>"},L[_.EMBEDDED_ENTRY]=function(e,t){return"<div>"+t(e.content)+"</div>"},L[_.UL_LIST]=function(e,t){return"<ul>"+t(e.content)+"</ul>"},L[_.OL_LIST]=function(e,t){return"<ol>"+t(e.content)+"</ol>"},L[_.LIST_ITEM]=function(e,t){return"<li>"+t(e.content)+"</li>"},L[_.QUOTE]=function(e,t){return"<blockquote>"+t(e.content)+"</blockquote>"},L[_.HR]=function(){return"<hr/>"},L[_.TABLE]=function(e,t){return"<table>"+t(e.content)+"</table>"},L[_.TABLE_ROW]=function(e,t){return"<tr>"+t(e.content)+"</tr>"},L[_.TABLE_HEADER_CELL]=function(e,t){return"<th>"+t(e.content)+"</th>"},L[_.TABLE_CELL]=function(e,t){return"<td>"+t(e.content)+"</td>"},L[v.ASSET_HYPERLINK]=function(e){return C(v.ASSET_HYPERLINK,e)},L[v.ENTRY_HYPERLINK]=function(e){return C(v.ENTRY_HYPERLINK,e)},L[v.EMBEDDED_ENTRY]=function(e){return C(v.EMBEDDED_ENTRY,e)},L[v.HYPERLINK]=function(e,t){var n="string"===typeof e.data.uri?e.data.uri:"";return"<a href="+('"'+n.replace(/"/g,"&quot;")+'">')+t(e.content)+"</a>"},L),T=((h={})[m.BOLD]=function(e){return"<b>"+e+"</b>"},h[m.ITALIC]=function(e){return"<i>"+e+"</i>"},h[m.UNDERLINE]=function(e){return"<u>"+e+"</u>"},h[m.CODE]=function(e){return"<code>"+e+"</code>"},h),C=function(e,t){return"<span>type: "+i(e)+" id: "+i(t.data.target.sys.id)+"</span>"};function N(e,t){var n=t.renderNode,o=t.renderMark;return e.map((function(e){return function(e,t){var n=t.renderNode,o=t.renderMark;if(S.isText(e)){var a=i(e.value);return e.marks.length>0?e.marks.reduce((function(e,t){return o[t.type]?o[t.type](e):e}),a):a}var r=function(e){return N(e,{renderMark:o,renderNode:n})};return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,r):""}(e,{renderNode:n,renderMark:o})})).join("")}t.documentToHtmlString=function(e,t){return void 0===t&&(t={}),e&&e.content?N(e.content,{renderNode:n(n({},j),t.renderNode),renderMark:n(n({},T),t.renderMark)}):""}}).call(this,n(63))},770:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var o=n(4),i=n(37),a=n(114),r=n(135),c=n(60),d={MSGTXT1:"clearCartAwareText",MSGTXT2:"clearCartActionText",MSGTXT3:"clearCartCompleteText"},l="continue",s="cancel",u=n(12),p=n(10),O=n(105),f=n(7),E=n(31),b=n(5),L=function(e){var t=(Object(i.c)((function(e){return e.cartReducer}))||{}).cartData,n=void 0===t?{}:t,L=(Object(i.c)((function(e){return e.tenantReducer}))||{}).tenantId,h=void 0===L?"":L,S=Object(o.useContext)(c.a),m=S.userOrderState,v=S.userOrderStateDispatch,_=m.modalToOpenOnConfirm,j=m.modalOpenFrom,T=m.confirmCallBack,C=Object(i.b)(),N=d,g=l,A=s,B=u.a.SHOW_CLEAR_CART_ALERT,D=u.a.DISPOSITION_DATA,I=u.a.SEARCH_ORDER_DATA,x=u.a.SCHEDULE_ORDER_DATA,K=u.a.clearCartChangeFlag,k=u.a.orderTypeAlertTitle,R=u.a.searchStoreAlertTitle,H=Object(f.Pc)(m.dispositionNew)?JSON.parse(localStorage.getItem("dispositionNew")):m.dispositionNew,y=function(){v({type:B,value:{showCartClearAlert:!1}}),j===K&&v({type:x,value:{showScheduleOrder:!0,selectedStoreInfo:H.store,changeFlow:!0}})};return Object(b.jsx)(r.a,{handleClose:y,classNames:"clear-cart-modal",CartAlertForm:Object(b.jsx)(a.a,{splitTitle:N,imageSrc:O.a,altText:"cart-error",confirmButtonText:Object(p.e)(g),cancelButtonText:Object(p.e)(A),cancelHandler:y,confirmHandler:function(){if(n.discountLines.length>0){var e=n.discountLines.map((function(e){return e.id}));C(Object(E.m)({params:{basketId:n.id},tenantId:h,shouldClearCart:!0},e))}else C(Object(E.n)({basketId:n.id,tenantId:h}));C(Object(E.t)(new Date)),v({type:B,value:{showCartClearAlert:!1}}),T&&T(),_===k?v({type:D,value:{showDisposition:!0}}):_===R&&v({type:I,value:{showSearchStore:!0}})}})})}},783:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var o=n(0),i=n(28),a=n(4),r=n(37),c=n(106),d=n(236),l=n(18),s=n(763),u=n(5),p=function(e,t){if(e&&t){var n={};e.replace(/%(.*?)%/g,(function(e,t){n[e]=t})),Object.entries(n).forEach((function(n){var o,a=Object(i.a)(n,2),r=a[0],c=a[1],d=null!==(o=t[c])&&void 0!==o?o:"N/A";if("string"==typeof d){var l=new RegExp(r,"ig");e=e.replace(l,d)}else{var s=JSON.parse(e);for(var u in s)s[u]===r&&(s[u]=d);e=JSON.stringify(s)}}))}return e},O=function(e){var t=e.page,n=e.seoObj,O=e.seoTemplate,f=Object(a.useState)(null),E=Object(i.a)(f,2),b=E[0],L=E[1],h=Object(a.useState)(""),S=Object(i.a)(h,2),m=S[0],v=S[1],_=Object(r.c)((function(e){var t,n,o;return{seoContent:null!==(t=null===e||void 0===e||null===(n=e.contentReducer)||void 0===n||null===(o=n.response)||void 0===o?void 0:o.seoStructureData)&&void 0!==t?t:null}})).seoContent;return Object(a.useEffect)((function(){var e,i,a,r,c,u,f=Object(o.a)(Object(o.a)({},n),{},{PageURL:null!==(e=null===(i=window)||void 0===i||null===(a=i.location)||void 0===a?void 0:a.href)&&void 0!==e?e:"",HomeURL:null!==(r=null===(c=window)||void 0===c||null===(u=c.location)||void 0===u?void 0:u.origin)&&void 0!==r?r:"/"});if(!Object(l.isEmpty)(_)){var E,b,h=(null!==(E=null!==O&&void 0!==O?O:null===_||void 0===_||null===(b=_.seo)||void 0===b?void 0:b.find((function(e){var n;return(null===(n=e.fields)||void 0===n?void 0:n.title)===t})))&&void 0!==E?E:{}).fields,S=(h=void 0===h?{}:h).templateData,m=void 0===S?{}:S,j=h.data,T=void 0===j?{}:j,C=(null!==_&&void 0!==_?_:{}).template,N=void 0===C?{}:C,g=Object(s.documentToHtmlString)(N);if(!Object(l.isEmpty)(g)){var A=Object(d.a)(g.replace(/<p>|<\/p>/gi,""));A=p(A,m),A=p(A,f);var B=Object(d.a)(A);v(B)}if(!Object(l.isEmpty)(T)){var D=JSON.stringify(T);D=p(D,f),L(D)}}}),[t,_,n,O]),Object(u.jsxs)(c.a,{children:[m,Object(u.jsx)("script",{type:"application/ld+json",children:b})]})};O.defaultProps={page:"",seoTemplate:null,seoObj:null}},801:function(e,t,n){"use strict";function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return o}))},802:function(e,t,n){"use strict";n.d(t,"n",(function(){return _})),n.d(t,"e",(function(){return j})),n.d(t,"k",(function(){return T})),n.d(t,"j",(function(){return C})),n.d(t,"b",(function(){return N})),n.d(t,"d",(function(){return g})),n.d(t,"l",(function(){return A})),n.d(t,"f",(function(){return B})),n.d(t,"g",(function(){return D})),n.d(t,"a",(function(){return I})),n.d(t,"c",(function(){return x})),n.d(t,"h",(function(){return K})),n.d(t,"m",(function(){return k})),n.d(t,"i",(function(){return R}));var o,i,a,r,c,d,l,s,u,p,O=n(0),f=n(33),E=n(3),b="#fff",L="#202124",h="#dbdbdb",S="National 2 Regular",m=E.H.AU,v=E.H.IN,_=function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var i=null===n||void 0===n||null===(e=n.reduce)||void 0===e?void 0:e.call(n,(function(e,t){var n;return t?e+ +(null===t||void 0===t||null===(n=t.split("px"))||void 0===n?void 0:n[0]):e}),0);return isNaN(i)?null===n||void 0===n?void 0:n[0]:"".concat(i,"px")},j=(o={},Object(f.a)(o,m,{desktop:{height:"100px",backgroundColor:b,maxWidth:"1180px",margin:"0 auto",display:"flex",overflowX:"hidden"},mobile:{height:"45px"},classNames:{localized:{desktop:{top:"22px"},mobile:{top:"100px"}}}}),Object(f.a)(o,v,{desktop:{height:"100px",backgroundColor:b,width:"100%",display:"flex",overflowX:"hidden"},mobile:{height:"45px"}}),o),T=(i={},Object(f.a)(i,m,{desktop:{display:"flex",backgroundColor:L,height:"68px"},mobile:{height:"118px",display:"flex",position:"fixed",width:"100%",bottom:"0",fontSize:"16px",lineHeight:"20px",letterSpacing:"1px",padding:"5px"}}),Object(f.a)(i,v,{desktop:{display:"flex",backgroundColor:L,height:"68px"},mobile:{height:"100px",display:"flex",width:"100%",bottom:"0",fontSize:"16px",lineHeight:"20px",letterSpacing:"1px",padding:"5px"}}),i),C=(a={},Object(f.a)(a,m,{desktop:{border:"1.5px solid rgb(228, 0, 43)",fontFamily:S,lineHeight:"24px",fontSize:"14px",fontWeight:500},mobile:{marginTop:"16px",width:"99%",marginBottom:"21px",maxWidth:"242px"}}),Object(f.a)(a,v,{desktop:{border:"1.5px solid rgb(228, 0, 43)",fontFamily:S,lineHeight:"24px",fontSize:"14px",fontWeight:500},mobile:{marginTop:"16px",width:"75%",marginBottom:"21px"}}),a),N=(r={},Object(f.a)(r,m,{desktop:{display:"flex",backgroundColor:L,height:"50px"},mobile:{height:"fit-content",display:"flex",width:"100%",fontSize:"16px",lineHeight:"20px",letterSpacing:"1px",padding:"5px"}}),Object(f.a)(r,v,{desktop:{display:"flex",backgroundColor:L,height:"68px"},mobile:{height:"68px",display:"flex",width:"100%",bottom:"0",fontSize:"16px",lineHeight:"20px",letterSpacing:"1px",padding:"7px 20px"}}),r),g=(c={},Object(f.a)(c,m,{classNames:{localized:{mobile:{paddingBottom:"0px !important"}}}}),Object(f.a)(c,v,{mobile:{paddingBottom:"10%"}}),c),A=(d={},Object(f.a)(d,m,{desktop:{topLocalized:_(j[m].desktop.height,N[m].desktop.height),topNonLocalized:_(j[m].desktop.height,T[m].desktop.height)},mobile:{topLocalized:j[m].mobile.height,topNonLocalized:j[m].mobile.height}}),Object(f.a)(d,v,{desktop:{topLocalized:j[v].desktop.height,topNonLocalized:j[v].desktop.height},mobile:{topLocalized:j[v].mobile.height,topNonLocalized:j[v].mobile.height}}),d),B=(l={},Object(f.a)(l,m,{desktop:{height:"100vh",width:"18vw",position:"sticky",marginLeft:"0.8%",top:A[m].desktop.topNonLocalized},classNames:{localized:{desktop:{top:A[m].desktop.topLocalized}}}}),Object(f.a)(l,v,{desktop:{height:"100vh",width:"18vw",position:"sticky",marginLeft:"0.8%",top:A[v].desktop.topNonLocalized}}),l),D=(s={},Object(f.a)(s,m,{mobile:{flexWrap:"nowrap !important",marginLeft:"0 !important",paddingLeft:"10px",paddingTop:"5px",borderBottom:"1px solid ".concat(h),overflowY:"hidden",zIndex:"".concat(9998),width:"100%",backgroundColor:b,marginTop:"0",marginBottom:"5px"},classNames:{"hide-mob-nav-row":{width:"0",height:"0"}}}),Object(f.a)(s,v,{mobile:{flexWrap:"nowrap !important",marginLeft:"0 !important",paddingLeft:"10px",paddingTop:"5px",borderBottom:"1px solid ".concat(h),overflowY:"hidden",zIndex:"".concat(9998),width:"100%",backgroundColor:b,marginTop:"0",marginBottom:"5px"}}),s),I=(u={},Object(f.a)(u,m,{desktop:{position:"sticky",top:A[m].desktop.topNonLocalized},classNames:{localized:{desktop:{top:A[m].desktop.topLocalized}}}}),Object(f.a)(u,v,{desktop:{position:"sticky",top:A[v].desktop.topNonLocalized},classNames:{localized:{desktop:{top:A[v].desktop.topLocalized}}}}),u),x=(p={},Object(f.a)(p,m,{desktop:{height:"auto",maxHeight:"180vh",width:"18vw",position:"sticky",marginLeft:"0.8%",marginRight:"30px",top:A[m].desktop.topNonLocalized},mobile:{position:"sticky",backgroundColor:b,top:A[m].mobile.topNonLocalized,height:"unset",maxHeight:"unset",width:"unset",marginLeft:"unset",marginRight:"unset"},classNames:{localized:{desktop:{top:A[m].desktop.topLocalized},mobile:{top:A[m].mobile.topLocalized}}}}),Object(f.a)(p,v,{desktop:{height:"auto",maxHeight:"180vh",width:"18vw",position:"sticky",marginLeft:"0.8%",marginRight:"30px",top:A[v].desktop.topNonLocalized},mobile:{position:"sticky",backgroundColor:b,top:A[v].mobile.topNonLocalized,height:"unset",maxHeight:"unset",width:"unset",marginLeft:"unset",marginRight:"unset"},classNames:{localized:{desktop:{top:A[v].desktop.topLocalized},mobile:{top:A[v].mobile.topLocalized}}}}),p),K=Object(O.a)({},I),k=(Object(O.a)({},I),Object(O.a)({},I)),R=Object(O.a)({},I)}}]);