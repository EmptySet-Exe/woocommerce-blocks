(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[2],{100:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},101:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},105:function(e,t,r){"use strict";r(163),t.a=function(){return React.createElement("span",{className:"wc-block-components-spinner","aria-hidden":"true"})}},127:function(e,t,r){"use strict";r.d(t,"b",(function(){return y})),r.d(t,"a",(function(){return g}));var n=r(18),o=r.n(n),c=r(7),a=r.n(c),s=r(13),i=r.n(s),u=r(8),l=r.n(u),f=r(0),d=r(9),p=r(22),b=r.n(p);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){var t=function(e,t){if("object"!==o()(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o()(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o()(t)?t:String(t)}var h=Object(f.createContext)({getValidationError:function(){return""},setValidationErrors:function(e){},clearValidationError:function(e){},clearAllValidationErrors:function(){},hideValidationError:function(){},showValidationError:function(){},showAllValidationErrors:function(){},hasValidationErrors:!1,getValidationErrorId:function(e){return e}}),y=function(){return Object(f.useContext)(h)},g=function(e){var t=e.children,r=Object(f.useState)({}),n=l()(r,2),o=n[0],c=n[1],s=Object(f.useCallback)((function(e){return o[e]}),[o]),u=Object(f.useCallback)((function(e){var t=o[e];return!t||t.hidden?"":"validate-error-".concat(e)}),[o]),p=Object(f.useCallback)((function(e){c((function(t){return t[e]?(t[e],i()(t,[e].map(O))):t}))}),[]),m=Object(f.useCallback)((function(){c({})}),[]),y=Object(f.useCallback)((function(e){e&&c((function(t){return e=Object(d.pickBy)(e,(function(e,r){return!("string"!=typeof e.message||t.hasOwnProperty(r)&&b()(t[r],e))})),0===Object.values(e).length?t:v(v({},t),e)}))}),[]),g=Object(f.useCallback)((function(e,t){c((function(r){if(!r.hasOwnProperty(e))return r;var n=v(v({},r[e]),t);return b()(r[e],n)?r:v(v({},r),{},a()({},e,n))}))}),[]),j={getValidationError:s,setValidationErrors:y,clearValidationError:p,clearAllValidationErrors:m,hideValidationError:Object(f.useCallback)((function(e){g(e,{hidden:!0})}),[g]),showValidationError:Object(f.useCallback)((function(e){g(e,{hidden:!1})}),[g]),showAllValidationErrors:Object(f.useCallback)((function(){c((function(e){var t={};return Object.keys(e).forEach((function(r){e[r].hidden&&(t[r]=v(v({},e[r]),{},{hidden:!1}))})),0===Object.values(t).length?e:v(v({},e),t)}))}),[]),hasValidationErrors:Object.keys(o).length>0,getValidationErrorId:u};return React.createElement(h.Provider,{value:j},t)}},129:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n,o=r(7),c=r.n(o),a=r(9);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback"}(n||(n={}));var u={addEventCallback:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(a.uniqueId)(),type:n.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:r}},removeEventCallback:function(e,t){return{id:t,type:n.REMOVE_EVENT_CALLBACK,eventType:e}}},l={},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,r=t.type,o=t.eventType,a=t.id,s=t.callback,u=t.priority,f=e.hasOwnProperty(o)?new Map(e[o]):new Map;switch(r){case n.ADD_EVENT_CALLBACK:return f.set(a,{priority:u,callback:s}),i(i({},e),{},c()({},o,f));case n.REMOVE_EVENT_CALLBACK:return f.delete(a),i(i({},e),{},c()({},o,f))}}},163:function(e,t){},166:function(e,t){},167:function(e,t){},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r(3);var n=r(127),o=(r(166),function(e){var t=e.errorMessage,r=void 0===t?"":t,o=e.propertyName,c=void 0===o?"":o,a=e.elementId,s=void 0===a?"":a,i=Object(n.b)(),u=i.getValidationError,l=i.getValidationErrorId;if(!r||"string"!=typeof r){var f=u(c)||{};if(!f.message||f.hidden)return null;r=f.message}return React.createElement("div",{className:"wc-block-components-validation-error",role:"alert"},React.createElement("p",{id:l(s)},r))})},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){var r=[];return Object.keys(e).forEach((function(n){if(void 0!==t[n])switch(e[n].type){case"boolean":r[n]="false"!==t[n]&&!1!==t[n];break;case"number":r[n]=parseInt(t[n],10);break;case"array":case"object":r[n]=JSON.parse(t[n]);break;default:r[n]=t[n]}else r[n]=e[n].default})),r}},216:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(129),o=function(e,t){return function(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,c=n.a.addEventCallback(e,r,o);return t(c),function(){t(n.a.removeEventCallback(e,c.id))}}}},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(18),o=r.n(n),c=r(56),a=r.n(c),s=r(26),i=r.n(s),u=function(e,t){return e[t]?Array.from(e[t].values()).sort((function(e,t){return e.priority-t.priority})):[]},l=r(49);function f(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return d(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw c}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=function(){var e=a()(i.a.mark((function e(t,r,n){var c,a,s,l,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=u(t,r),a=[],s=f(c),e.prev=3,s.s();case 5:if((l=s.n()).done){e.next=19;break}return d=l.value,e.prev=7,e.next=10,Promise.resolve(d.callback(n));case 10:p=e.sent,"object"===o()(p)&&a.push(p),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.error(e.t0);case 17:e.next=5;break;case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(3),s.e(e.t1);case 24:return e.prev=24,s.f(),e.finish(24);case 27:return e.abrupt("return",!a.length||a);case 28:case"end":return e.stop()}}),e,null,[[3,21,24,27],[7,14]])})));return function(_x,t,r){return e.apply(this,arguments)}}(),b=function(){var e=a()(i.a.mark((function e(t,r,n){var c,a,s,d,p,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=[],a=u(t,r),s=f(a),e.prev=3,s.s();case 5:if((d=s.n()).done){e.next=28;break}return p=d.value,e.prev=7,e.next=10,Promise.resolve(p.callback(n));case 10:if(b=e.sent,"object"===o()(b)&&null!==b){e.next=13;break}return e.abrupt("continue",26);case 13:if(b.hasOwnProperty("type")){e.next=15;break}throw new Error("Returned objects from event emitter observers must return an object with a type property");case 15:if(!Object(l.a)(b)&&!Object(l.b)(b)){e.next=18;break}return c.push(b),e.abrupt("return",c);case 18:c.push(b),e.next=26;break;case 21:return e.prev=21,e.t0=e.catch(7),console.error(e.t0),c.push({type:"error"}),e.abrupt("return",c);case 26:e.next=5;break;case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(3),s.e(e.t1);case 33:return e.prev=33,s.f(),e.finish(33);case 36:return e.abrupt("return",c);case 37:case"end":return e.stop()}}),e,null,[[3,30,33,36],[7,21]])})));return function(t,r,n){return e.apply(this,arguments)}}()},293:function(e,t,r){"use strict";var n=r(27),o=React.createElement(n.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},React.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),React.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}));t.a=o},298:function(e,t,r){"use strict";var n=r(10),o=r.n(n),c=r(204);t.a=function(e){return function(t){return function(r){var n=Object(c.a)(e,r);return React.createElement(t,o()({},r,n))}}}},305:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(8),o=r.n(n),c=r(0),a=r(12),s=r(15),i=r(17),u=r(39),l=r(55),f=function(e,t){var r=e.find((function(e){return e.id===t}));return r?r.quantity:0},d=function(e){var t=Object(a.useDispatch)(s.CART_STORE_KEY).addItemToCart,r=Object(u.a)(),n=r.cartItems,d=r.cartIsLoading,p=Object(l.a)(),b=p.addErrorNotice,m=p.removeNotice,v=Object(c.useState)(!1),O=o()(v,2),h=O[0],y=O[1],g=Object(c.useRef)(f(n,e));return Object(c.useEffect)((function(){var t=f(n,e);t!==g.current&&(g.current=t)}),[n,e]),{cartQuantity:Number.isFinite(g.current)?g.current:0,addingToCart:h,cartIsLoading:d,addToCart:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return y(!0),t(e,r).then((function(){m("add-to-cart")})).catch((function(e){b(Object(i.decodeEntities)(e.message),{context:"wc/all-products",id:"add-to-cart",isDismissible:!0})})).finally((function(){y(!1)}))}}}},311:function(e,t){},312:function(e,t){},321:function(e,t,r){"use strict";r.r(t);var n=r(298),o=(r(3),r(5)),c=r.n(o),a=r(8),s=r.n(a),i=r(0),u=r(1),l=r(50),f=function(e){return e.is_purchasable||!1},d={status:"pristine",hasError:!1,quantity:1,processingResponse:null,requestParams:{}},p=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=e?"set_has_error":"set_no_error";return{type:t}},b=r(7),m=r.n(b);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h="idle",y=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,r=arguments.length>1?arguments[1]:void 0,n=r.quantity,o=r.type,c=r.data;switch(o){case"set_pristine":e=d;break;case"set_idle":e=t.status!==h?O(O({},t),{},{status:h}):t;break;case"set_disabled":e="disabled"!==t.status?O(O({},t),{},{status:"disabled"}):t;break;case"set_quantity":e=n!==t.quantity?O(O({},t),{},{quantity:n}):t;break;case"set_request_params":e=O(O({},t),{},{requestParams:O(O({},t.requestParams),c)});break;case"set_processing_response":e=O(O({},t),{},{processingResponse:c});break;case"set_processing":e=!1===(e="processing"!==t.status?O(O({},t),{},{status:"processing",hasError:!1}):t).hasError?e:O(O({},e),{},{hasError:!1});break;case"set_before_processing":e="before_processing"!==t.status?O(O({},t),{},{status:"before_processing",hasError:!1}):t;break;case"set_after_processing":e="after_processing"!==t.status?O(O({},t),{},{status:"after_processing"}):t;break;case"set_has_error":e=t.hasError?t:O(O({},t),{},{hasError:!0}),e="processing"===t.status||"before_processing"===t.status?O(O({},e),{},{status:h}):e;break;case"set_no_error":e=t.hasError?O(O({},t),{},{hasError:!1}):t}return e!==t&&"set_pristine"!==o&&"pristine"===e.status&&(e.status=h),e},g=r(129),j=r(216),E=function(e){return{onAddToCartAfterProcessingWithSuccess:Object(j.a)("add_to_cart_after_processing_with_success",e),onAddToCartProcessingWithError:Object(j.a)("add_to_cart_after_processing_with_error",e),onAddToCartBeforeProcessing:Object(j.a)("add_to_cart_before_processing",e)}},_=r(217),w=r(127),P=r(55),k=r(49),R=Object(i.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:function(e){},onAddToCartAfterProcessingWithError:function(e){},onAddToCartBeforeProcessing:function(e){}},dispatchActions:{resetForm:function(){},submitForm:function(){},setQuantity:function(e){},setHasError:function(e){},setAfterProcessing:function(e){},setRequestParams:function(e){}}}),C=function(){return Object(i.useContext)(R)},A=function(e){var t=e.children,r=e.product,n=e.showFormElements,o=Object(i.useReducer)(y,d),c=s()(o,2),a=c[0],b=c[1],m=Object(i.useReducer)(g.b,{}),v=s()(m,2),O=v[0],h=v[1],j=Object(l.a)(O),C=Object(P.a)(),A=C.addErrorNotice,x=C.removeNotices,S=Object(w.b)().setValidationErrors,N=Object(k.c)(),D=N.isSuccessResponse,T=N.isErrorResponse,V=N.isFailResponse,q=Object(i.useMemo)((function(){return{onAddToCartAfterProcessingWithSuccess:E(h).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:E(h).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:E(h).onAddToCartBeforeProcessing}}),[h]),I=Object(i.useMemo)((function(){return{resetForm:function(){b({type:"set_pristine"})},submitForm:function(){b({type:"set_before_processing"})},setQuantity:function(e){b(function(e){return{type:"set_quantity",quantity:e}}(e))},setHasError:function(e){b(p(e))},setRequestParams:function(e){b(function(e){return{type:"set_request_params",data:e}}(e))},setAfterProcessing:function(e){b({type:"set_processing_response",data:e}),b({type:"set_after_processing"})}}}),[]);Object(i.useEffect)((function(){var e=a.status,t=!r.id||!f(r);"disabled"!==e||t?"disabled"!==e&&t&&b({type:"set_disabled"}):b({type:"set_idle"})}),[a.status,r,b]),Object(i.useEffect)((function(){"before_processing"===a.status&&(x("error"),Object(_.a)(j,"add_to_cart_before_processing",{}).then((function(e){!0!==e?(Array.isArray(e)&&e.forEach((function(e){var t=e.errorMessage,r=e.validationErrors;t&&A(t),r&&S(r)})),b({type:"set_idle"})):b({type:"set_processing"})})))}),[a.status,S,A,x,b,j]),Object(i.useEffect)((function(){if("after_processing"===a.status){var e={processingResponse:a.processingResponse},t=function(e){var t=!1;return e.forEach((function(e){var r=e.message,n=e.messageContext;(T(e)||V(e))&&r&&(t=!0,A(r,n?{context:n}:void 0))})),t};if(a.hasError)return void Object(_.b)(j,"add_to_cart_after_processing_with_error",e).then((function(r){if(!t(r)){var n,o=(null===(n=e.processingResponse)||void 0===n?void 0:n.message)||Object(u.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block");A(o,{id:"add-to-cart"})}b({type:"set_idle"})}));Object(_.b)(j,"add_to_cart_after_processing_with_success",e).then((function(e){t(e)?b(p(!0)):b({type:"set_idle"})}))}}),[a.status,a.hasError,a.processingResponse,I,A,T,V,D,j]);var F=function(e){return["simple","variable"].includes(e.type||"simple")}(r),M={product:r,productType:r.type||"simple",productIsPurchasable:f(r),productHasOptions:r.has_options||!1,supportsFormElements:F,showFormElements:n&&F,quantity:a.quantity,minQuantity:1,maxQuantity:r.quantity_limit||99,requestParams:a.requestParams,isIdle:"idle"===a.status,isDisabled:"disabled"===a.status,isProcessing:"processing"===a.status,isBeforeProcessing:"before_processing"===a.status,isAfterProcessing:"after_processing"===a.status,hasError:a.hasError,eventRegistration:q,dispatchActions:I};return React.createElement(R.Provider,{value:M},t)},x=r(61),S=r.n(x),N=r(17),D=r(39);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var V=function(){var e=C(),t=e.dispatchActions,r=e.product,n=e.quantity,o=e.eventRegistration,c=e.hasError,a=e.isProcessing,l=e.requestParams,f=Object(w.b)(),d=f.hasValidationErrors,p=f.showAllValidationErrors,b=Object(P.a)(),v=b.addErrorNotice,O=b.removeNotice,h=Object(D.a)().receiveCart,y=Object(i.useState)(!1),g=s()(y,2),j=g[0],E=g[1],_=!c&&a,k=Object(i.useCallback)((function(){return!d||(p(),{type:"error"})}),[d,p]);Object(i.useEffect)((function(){var e=o.onAddToCartBeforeProcessing(k,0);return function(){e()}}),[o,k]);var R=Object(i.useCallback)((function(){E(!0),O("add-to-cart");var e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:r.id||0,quantity:n},l);S()({path:"/wc/store/cart/add-item",method:"POST",data:e,cache:"no-store",parse:!1}).then((function(e){S.a.setNonce(e.headers),e.json().then((function(r){e.ok?h(r):(r.body&&r.body.message?v(Object(N.decodeEntities)(r.body.message),{id:"add-to-cart"}):v(Object(u.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block"),{id:"add-to-cart"}),t.setHasError()),t.setAfterProcessing(r),E(!1)}))})).catch((function(e){e.json().then((function(e){var r;null!==(r=e.data)&&void 0!==r&&r.cart&&h(e.data.cart),t.setHasError(),t.setAfterProcessing(e),E(!1)}))}))}),[r,v,O,h,t,n,l]);return Object(i.useEffect)((function(){_&&!j&&R()}),[_,R,j]),null},q=function(e){var t=e.children,r=e.product,n=e.showFormElements;return React.createElement(w.a,null,React.createElement(A,{product:r,showFormElements:n},t,React.createElement(V,null)))},I=r(83),F=r(9),M=r(213),B=(r(311),r(88)),L=r(140),Q=r(293),W=r(51),H=r(305),K=function(e){var t=e.className,r=e.href,n=e.text,o=e.onClick;return React.createElement(B.a,{className:t,href:r,onClick:o,rel:"nofollow"},n)},J=function(e){var t=e.className,r=e.quantityInCart,n=e.isProcessing,o=e.isDisabled,c=e.isDone,a=e.onClick;return React.createElement(B.a,{className:t,disabled:o,showSpinner:n,onClick:a},c&&r>0?Object(u.sprintf)(
/* translators: %s number of products in cart. */
Object(u._n)("%d in cart","%d in cart",r,"woo-gutenberg-products-block"),r):Object(u.__)("Add to cart","woo-gutenberg-products-block"),!!c&&React.createElement(L.a,{srcElement:Q.a,alt:Object(u.__)("Done","woo-gutenberg-products-block")}))},U=function(){var e=C(),t=e.showFormElements,r=e.productIsPurchasable,n=e.productHasOptions,o=e.product,c=e.productType,a=e.isDisabled,l=e.isProcessing,f=e.eventRegistration,d=e.hasError,p=e.dispatchActions,b=Object(I.useInnerBlockLayoutContext)().parentName,m=Object(W.a)().dispatchStoreEvent,v=Object(H.a)(o.id||0).cartQuantity,O=Object(i.useState)(!1),h=s()(O,2),y=h[0],g=h[1],j=o.add_to_cart||{url:"",text:""};return Object(i.useEffect)((function(){var e=f.onAddToCartAfterProcessingWithSuccess((function(){return d||g(!0),!0}),0);return function(){e()}}),[f,d]),(t||!n&&"simple"===c)&&r?React.createElement(J,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:v,isDisabled:a,isProcessing:l,isDone:y,onClick:function(){p.submitForm(),m("cart-add-item",{product:o,listName:b})}}):React.createElement(K,{className:"wc-block-components-product-add-to-cart-button",href:j.url,text:j.text||Object(u.__)("View Product","woo-gutenberg-products-block"),onClick:function(){m("product-view-link",{product:o,listName:b})}})},Y=function(e){var t=e.disabled,r=e.min,n=e.max,o=e.value,c=e.onChange;return React.createElement("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:o,min:r,max:n,hidden:1===n,disabled:t,onChange:function(e){c(e.target.value)}})},z=function(e){var t=e.reason,r=void 0===t?Object(u.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block"):t;return React.createElement("div",{className:"wc-block-components-product-add-to-cart-unavailable"},r)},G=function(){var e=C(),t=e.product,r=e.quantity,n=e.minQuantity,o=e.maxQuantity,c=e.dispatchActions,a=e.isDisabled;return t.id&&!t.is_purchasable?React.createElement(z,null):t.id&&!t.is_in_stock?React.createElement(z,{reason:Object(u.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):React.createElement(React.Fragment,null,React.createElement(Y,{value:r,min:n,max:o,disabled:a,onChange:c.setQuantity}),React.createElement(U,null))},X=(r(312),r(53)),$=r.n(X),Z=r(215),ee=r(2),te=r(196),re={value:"",label:Object(u.__)("Select an option","woo-gutenberg-products-block")},ne=function(e){var t=e.attributeName,r=e.options,n=void 0===r?[]:r,o=e.value,a=void 0===o?"":o,s=e.onChange,i=void 0===s?function(){}:s,l=e.errorMessage,f=void 0===l?Object(u.__)("Please select a value.","woo-gutenberg-products-block"):l,d=Object(w.b)(),p=d.getValidationError,b=d.setValidationErrors,v=d.clearValidationError,O=t,h=p(O)||{};return Object(ee.useEffect)((function(){a?v(O):b(m()({},O,{message:f,hidden:!0}))}),[a,O,f,v,b]),Object(ee.useEffect)((function(){return function(){v(O)}}),[O,v]),React.createElement("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},React.createElement(Z.SelectControl,{label:Object(N.decodeEntities)(t),value:a||"",options:[re].concat($()(n)),onChange:i,required:!0,className:c()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":h.message&&!h.hidden})}),React.createElement(te.a,{propertyName:O,elementId:O}))};function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae=function(e,t,r){var n=Object.values(t).map((function(e){return e.id}));if(Object.values(r).every((function(e){return""===e})))return n;var o=Object.keys(e);return n.filter((function(e){return o.every((function(n){var o=r[n]||"",c=t["id:"+e].attributes[n];return""===o||null===c||c===o}))}))};function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=function(e){var t=e.attributes,r=e.variationAttributes,n=e.setRequestParams,o=Object(l.a)(t),c=Object(l.a)(r),a=Object(i.useState)(0),u=s()(a,2),f=u[0],d=u[1],p=Object(i.useState)({}),b=s()(p,2),v=b[0],O=b[1],h=Object(i.useMemo)((function(){return function(e,t,r){var n={},o=Object.keys(e),c=Object.values(r).filter(Boolean).length>0;return o.forEach((function(o){var a=e[o],s=ce(ce({},r),{},m()({},o,null)),i=c?ae(e,t,s):null,u=null!==i?i.map((function(e){return t["id:"+e].attributes[o]})):null;n[o]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map((function(e){var r=e.name,n=e.slug;return null===t||t.includes(null)||t.includes(n)?{value:n,label:Object(N.decodeEntities)(r)}:null})).filter(Boolean)}(a.terms,u)})),n}(o,c,v)}),[v,o,c]);return Object(i.useEffect)((function(){Object.values(v).filter((function(e){return""!==e})).length===Object.keys(o).length?d(function(e,t,r){return ae(e,t,r)[0]||0}(o,c,v)):f>0&&d(0)}),[v,f,o,c]),Object(i.useEffect)((function(){n({id:f,variation:Object.keys(v).map((function(e){return{attribute:e,value:v[e]}}))})}),[n,f,v]),React.createElement("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(o).map((function(e){return React.createElement(ne,{key:e,attributeName:e,options:h[e],value:v[e],onChange:function(t){O(ie(ie({},v),{},m()({},e,t)))}})})))},le=function(e){var t=e.product,r=e.dispatchers,n=function(e){return e?Object(F.keyBy)(Object.values(e).filter((function(e){return e.has_variations})),"name"):{}}(t.attributes),o=function(e){if(!e)return{};var t={};return e.forEach((function(e){var r=e.id,n=e.attributes;t["id:".concat(r)]={id:r,attributes:n.reduce((function(e,t){var r=t.name,n=t.value;return e[r]=n,e}),{})}})),t}(t.variations);return 0===Object.keys(n).length||0===o.length?null:React.createElement(ue,{attributes:n,variationAttributes:o,setRequestParams:r.setRequestParams})},fe=function(){var e=C(),t=e.product,r=e.quantity,n=e.minQuantity,o=e.maxQuantity,c=e.dispatchActions,a=e.isDisabled;return t.id&&!t.is_purchasable?React.createElement(z,null):t.id&&!t.is_in_stock?React.createElement(z,{reason:Object(u.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):React.createElement(React.Fragment,null,React.createElement(le,{product:t,dispatchers:c}),React.createElement(Y,{value:r,min:n,max:o,disabled:a,onChange:c.setQuantity}),React.createElement(U,null))},de=function(){return React.createElement(U,null)},pe=function(){return React.createElement(Z.Placeholder,{className:"wc-block-components-product-add-to-cart-group-list"},"This is a placeholder for the grouped products form element.")},be=function(){return React.createElement(pe,null)},me=function(){var e=C(),t=e.showFormElements,r=e.productType;return t?"variable"===r?React.createElement(fe,null):"grouped"===r?React.createElement(be,null):"external"===r?React.createElement(de,null):"simple"===r||"variation"===r?React.createElement(G,null):null:React.createElement(U,null)},ve=Object(M.withProductDataContext)((function(e){var t=e.className,r=e.showFormElements,n=Object(I.useProductDataContext)().product,o=c()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(F.isEmpty)(n)});return React.createElement(q,{product:n,showFormElements:r},React.createElement("div",{className:o},React.createElement(me,null)))}));t.default=Object(n.a)({showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}})(ve)},49:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return f}));var n,o,c=r(72);!function(e){e.SUCCESS="success",e.FAIL="failure",e.ERROR="error"}(n||(n={})),function(e){e.PAYMENTS="wc/payment-area",e.EXPRESS_PAYMENTS="wc/express-payment-area"}(o||(o={}));var a=function(e,t){return Object(c.b)(e)&&"type"in e&&e.type===t},s=function(e){return a(e,n.SUCCESS)},i=function(e){return a(e,n.ERROR)},u=function(e){return a(e,n.FAIL)},l=function(e){return!Object(c.b)(e)||void 0===e.retry||!0===e.retry},f=function(){return{responseTypes:n,noticeContexts:o,shouldRetry:l,isSuccessResponse:s,isErrorResponse:i,isFailResponse:u}}},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),o=r(22),c=r.n(o);function a(e){var t=Object(n.useRef)(e);return c()(e,t.current)||(t.current=e),t.current}},53:function(e,t,r){var n=r(99),o=r(100),c=r(67),a=r(101);e.exports=function(e){return n(e)||o(e)||c(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},55:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(7),o=r.n(n),c=r(0),a=r(124);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(){var e=Object(a.b)(),t=e.notices,r=e.createNotice,n=e.removeNotice,o=e.setIsSuppressed,s=Object(c.useRef)(t);Object(c.useEffect)((function(){s.current=t}),[t]);var u=Object(c.useMemo)((function(){return{hasNoticesOfType:function(e){return s.current.some((function(t){return t.type===e}))},removeNotices:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;s.current.forEach((function(t){null!==e&&t.status!==e||n(t.id)}))},removeNotice:n}}),[n]),l=Object(c.useMemo)((function(){return{addDefaultNotice:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r("default",e,i({},t))},addErrorNotice:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r("error",e,i({},t))},addWarningNotice:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r("warning",e,i({},t))},addInfoNotice:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r("info",e,i({},t))},addSuccessNotice:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r("success",e,i({},t))}}}),[r]);return i(i(i({notices:t},u),l),{},{setIsSuppressed:o})}},56:function(e,t){function r(e,t,r,n,o,c,a){try{var s=e[c](a),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var a=e.apply(t,n);function s(e){r(a,o,c,s,i,"next",e)}function i(e){r(a,o,c,s,i,"throw",e)}s(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},88:function(e,t,r){"use strict";var n=r(10),o=r.n(n),c=r(13),a=r.n(c),s=r(82),i=r(5),u=r.n(i),l=r(105),f=(r(167),["className","showSpinner","children"]);t.a=function(e){var t=e.className,r=e.showSpinner,n=void 0!==r&&r,c=e.children,i=a()(e,f),d=u()("wc-block-components-button",t,{"wc-block-components-button--loading":n});return React.createElement(s.a,o()({className:d},i),n&&React.createElement(l.a,null),React.createElement("span",{className:"wc-block-components-button__text"},c))}},99:function(e,t,r){var n=r(68);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0}}]);