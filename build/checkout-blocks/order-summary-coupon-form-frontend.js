(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[37],{135:function(e,t,n){"use strict";var o=n(0);n(197),t.a=()=>Object(o.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},137:function(e,t,n){"use strict";var o=n(0),c=n(1),a=n(4),r=n.n(a),s=(n(199),n(135));t.a=e=>{let{children:t,className:n,screenReaderLabel:a,showSpinner:l=!1,isLoading:i=!0}=e;return Object(o.createElement)("div",{className:r()(n,{"wc-block-components-loading-mask":i})},i&&l&&Object(o.createElement)(s.a,null),Object(o.createElement)("div",{className:r()({"wc-block-components-loading-mask__children":i}),"aria-hidden":i},t),i&&Object(o.createElement)("span",{className:"screen-reader-text"},a||Object(c.__)("Loading…","woo-gutenberg-products-block")))}},197:function(e,t){},199:function(e,t){},25:function(e,t,n){"use strict";var o=n(0),c=n(4),a=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:r,wrapperProps:s={}}=e;const l=null!=n,i=null!=c;return!l&&i?(t=r||"span",s={...s,className:a()(s.className,"screen-reader-text")},Object(o.createElement)(t,s,c)):(t=r||o.Fragment,l&&i&&n!==c?Object(o.createElement)(t,s,Object(o.createElement)("span",{"aria-hidden":"true"},n),Object(o.createElement)("span",{className:"screen-reader-text"},c)):Object(o.createElement)(t,s,n))}},262:function(e,t){},263:function(e,t){},264:function(e,t,n){"use strict";var o=n(12),c=n.n(o),a=n(0),r=n(42),s=n(4),l=n.n(s),i=n(135);n(265),t.a=e=>{let{className:t,showSpinner:n=!1,children:o,variant:s="contained",...u}=e;const p=l()("wc-block-components-button",t,s,{"wc-block-components-button--loading":n});return Object(a.createElement)(r.a,c()({className:p},u),n&&Object(a.createElement)(i.a,null),Object(a.createElement)("span",{className:"wc-block-components-button__text"},o))}},265:function(e,t){},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(1),c=n(7),a=n(6),r=n(17),s=n(32),l=n(200);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{cartCoupons:t,cartIsLoading:n}=Object(s.a)(),{createErrorNotice:i}=Object(c.useDispatch)("core/notices"),{createNotice:u}=Object(c.useDispatch)("core/notices"),{setValidationErrors:p}=Object(l.b)(),{applyCoupon:b,removeCoupon:d,isApplyingCoupon:m,isRemovingCoupon:g}=Object(c.useSelect)((e,t)=>{let{dispatch:n}=t;const o=e(a.CART_STORE_KEY),c=n(a.CART_STORE_KEY);return{applyCoupon:c.applyCoupon,removeCoupon:c.removeCoupon,isApplyingCoupon:o.isApplyingCoupon(),isRemovingCoupon:o.isRemovingCoupon(),receiveApplyingCoupon:c.receiveApplyingCoupon}},[i,u]),O=t=>{b(t).then(n=>{!0===n&&u("info",Object(o.sprintf)(
/* translators: %s coupon code. */
Object(o.__)('Coupon code "%s" has been applied to your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(e=>{p({coupon:{message:Object(r.decodeEntities)(e.message),hidden:!1}}),receiveApplyingCoupon("")})},j=t=>{d(t).then(n=>{!0===n&&u("info",Object(o.sprintf)(
/* translators: %s coupon code. */
Object(o.__)('Coupon code "%s" has been removed from your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(t=>{i(t.message,{id:"coupon-form",context:e}),receiveApplyingCoupon("")})};return{appliedCoupons:t,isLoading:n,applyCoupon:O,removeCoupon:j,isApplyingCoupon:m,isRemovingCoupon:g}}},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0),c=n(200);n(262);const a=e=>{let{errorMessage:t="",propertyName:n="",elementId:a=""}=e;const{getValidationError:r,getValidationErrorId:s}=Object(c.b)();if(!t||"string"!=typeof t){const e=r(n)||{};if(!e.message||e.hidden)return null;t=e.message}return Object(o.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(o.createElement)("p",{id:s(a)},t))}},298:function(e,t,n){"use strict";var o=n(12),c=n.n(o),a=n(0),r=n(1),s=n(5),l=n(4),i=n.n(l),u=n(200),p=n(274),b=n(9),d=n(52),m=n(25);n(263);var g=Object(s.forwardRef)((e,t)=>{let{className:n,id:o,type:r="text",ariaLabel:s,ariaDescribedBy:l,label:u,screenReaderLabel:p,disabled:b,help:d,autoCapitalize:g="off",autoComplete:O="off",value:j="",onChange:f,required:E=!1,onBlur:v=(()=>{}),feedback:h,...w}=e;const[_,C]=Object(a.useState)(!1);return Object(a.createElement)("div",{className:i()("wc-block-components-text-input",n,{"is-active":_||j})},Object(a.createElement)("input",c()({type:r,id:o,value:j,ref:t,autoCapitalize:g,autoComplete:O,onChange:e=>{f(e.target.value)},onFocus:()=>C(!0),onBlur:e=>{v(e.target.value),C(!1)},"aria-label":s||u,disabled:b,"aria-describedby":d&&!l?o+"__help":l,required:E},w)),Object(a.createElement)(m.a,{label:u,screenReaderLabel:p||u,wrapperElement:"label",wrapperProps:{htmlFor:o},htmlFor:o}),!!d&&Object(a.createElement)("p",{id:o+"__help",className:"wc-block-components-text-input__help"},d),h)});t.a=Object(b.withInstanceId)(e=>{let{className:t,instanceId:n,id:o,ariaDescribedBy:l,errorId:b,focusOnMount:m=!1,onChange:O,showError:j=!0,errorMessage:f="",value:E="",...v}=e;const[h,w]=Object(s.useState)(!0),_=Object(s.useRef)(null),{getValidationError:C,hideValidationError:k,setValidationErrors:y,clearValidationError:N,getValidationErrorId:R}=Object(u.b)(),I=void 0!==o?o:"textinput-"+n,A=void 0!==b?b:I,L=Object(s.useCallback)((function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=_.current||null;if(!t)return;t.value=t.value.trim();const n=t.checkValidity();n?N(A):y({[A]:{message:t.validationMessage||Object(r.__)("Invalid value.","woo-gutenberg-products-block"),hidden:e}})}),[N,A,y]);Object(s.useEffect)(()=>{var e;h&&m&&(null===(e=_.current)||void 0===e||e.focus()),w(!1)},[m,h,w]),Object(s.useEffect)(()=>{var e,t;(null===(e=_.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.activeElement)!==_.current&&L(!0)},[E,L]),Object(s.useEffect)(()=>()=>{N(A)},[N,A]);const S=C(A)||{};Object(d.a)(f)&&""!==f&&(S.message=f);const x=S.message&&!S.hidden,V=j&&x&&R(A)?R(A):l;return Object(a.createElement)(g,c()({className:i()(t,{"has-error":x}),"aria-invalid":!0===x,id:I,onBlur:()=>{L(!1)},feedback:j&&Object(a.createElement)(p.a,{errorMessage:f,propertyName:A}),ref:_,onChange:e=>{k(A),O(e)},ariaDescribedBy:V,value:E},v))})},313:function(e,t){},377:function(e,t,n){"use strict";var o=n(0),c=n(1),a=n(264),r=n(298),s=n(25),l=n(137),i=n(9),u=n(200),p=n(274),b=n(10);n(313),t.a=Object(i.withInstanceId)(e=>{let{instanceId:t,isLoading:n=!1,initialOpen:i=!1,onSubmit:d=(()=>{})}=e;const[m,g]=Object(o.useState)(""),O=Object(o.useRef)(!1),{getValidationError:j,getValidationErrorId:f}=Object(u.b)(),E=j("coupon");Object(o.useEffect)(()=>{O.current!==n&&(n||!m||E||g(""),O.current=n)},[n,m,E]);const v="wc-block-components-totals-coupon__input-"+t;return Object(o.createElement)(b.Panel,{className:"wc-block-components-totals-coupon",hasBorder:!1,initialOpen:i,title:Object(o.createElement)(s.a,{label:Object(c.__)("Coupon code","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Apply a coupon code","woo-gutenberg-products-block"),htmlFor:v})},Object(o.createElement)(l.a,{screenReaderLabel:Object(c.__)("Applying coupon…","woo-gutenberg-products-block"),isLoading:n,showSpinner:!1},Object(o.createElement)("div",{className:"wc-block-components-totals-coupon__content"},Object(o.createElement)("form",{className:"wc-block-components-totals-coupon__form"},Object(o.createElement)(r.a,{id:v,errorId:"coupon",className:"wc-block-components-totals-coupon__input",label:Object(c.__)("Enter code","woo-gutenberg-products-block"),value:m,ariaDescribedBy:f(v),onChange:e=>{g(e)},focusOnMount:!0,showError:!1}),Object(o.createElement)(a.a,{className:"wc-block-components-totals-coupon__button",disabled:n||!m,showSpinner:n,onClick:e=>{e.preventDefault(),d(m)},type:"submit"},Object(c.__)("Apply","woo-gutenberg-products-block"))),Object(o.createElement)(p.a,{propertyName:"coupon",elementId:v}))))})},459:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(377),a=n(271),r=n(2),s=n(10);t.default=e=>{let{className:t=""}=e;const n=Object(r.getSetting)("couponsEnabled",!0),{applyCoupon:l,isApplyingCoupon:i}=Object(a.a)("wc/checkout");return n?Object(o.createElement)(s.TotalsWrapper,{className:t},Object(o.createElement)(c.a,{onSubmit:l,isLoading:i})):null}}}]);