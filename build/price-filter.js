this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var r,i,a=t[0],u=t[1],l=t[2],b=0,p=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={27:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;return o.push([783,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(8),c=n.n(r),o=n(25),i=n(14),a=n(0),u=n(36),l=n.n(u),s=n(58),b=n(143),p=n(71),d=function(e){var t=Object(p.a)();e=e||t;var n=Object(i.useSelect)((function(t){return t(o.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),r=Object(i.useDispatch)(o.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[n,Object(a.useCallback)((function(t){r(e,t)}),[e,r])]},f=function(e,t,n){var r=Object(p.a)();n=n||r;var c=Object(i.useSelect)((function(r){return r(o.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)}),[n,e]),u=Object(i.useDispatch)(o.QUERY_STATE_STORE_KEY).setQueryValue;return[c,Object(a.useCallback)((function(t){u(n,e,t)}),[n,e,u])]},m=function(e,t){var n=Object(p.a)(),r=d(t=t||n),o=c()(r,2),i=o[0],u=o[1],f=Object(s.a)(i),m=Object(s.a)(e),O=Object(b.a)(m),v=Object(a.useRef)(!1);return Object(a.useEffect)((function(){l()(O,m)||(u(Object.assign({},f,m)),v.current=!0)}),[f,m,O,u]),v.current?[i,u]:[e,u]}},11:function(e,t){e.exports=window.React},116:function(e,t){},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return i}));var r=function(e){return"number"==typeof e},c=function(e){return"string"==typeof e},o=function(e){return!function(e){return null===e}(e)&&e instanceof Object&&e.constructor===Object};function i(e,t){return o(e)&&t in e}},12:function(e,t){e.exports=window.wp.blockEditor},121:function(e,t,n){"use strict";var r=n(16),c=n.n(r),o=n(17),i=n.n(o),a=n(18),u=n.n(a),l=n(19),s=n.n(l),b=n(9),p=n.n(b),d=n(0),f=n(7),m=n(1),O=n(3);function v(e){var t=e.level,n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(d.createElement)(O.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(d.createElement)(O.Path,{d:n[t]})):null}var h=function(e){u()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p()(t);if(n){var c=p()(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return s()(this,e)});function o(){return c()(this,o),r.apply(this,arguments)}return i()(o,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:Object(d.createElement)(v,{level:e}),title:Object(m.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(m.__)("Heading %d","woo-gutenberg-products-block"),e),isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,r=void 0===n||n,c=t.minLevel,o=t.maxLevel,i=t.selectedLevel,a=t.onChange;return Object(d.createElement)(O.ToolbarGroup,{isCollapsed:r,icon:Object(d.createElement)(v,{level:i}),controls:Object(f.range)(c,o).map((function(t){return e.createLevelControl(t,i,a)}))})}}]),o}(d.Component);t.a=h},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(8),c=n.n(r),o=n(0),i=function(){var e=Object(o.useState)(),t=c()(e,2)[1];return Object(o.useCallback)((function(e){t((function(){throw e}))}),[])}},14:function(e,t){e.exports=window.wp.data},141:function(e,t,n){"use strict";var r=n(0),c=(n(2),n(12)),o=n(20),i=n(1);n(194),t.a=Object(o.withInstanceId)((function(e){var t=e.className,n=e.headingLevel,o=e.onChange,a=e.heading,u=e.instanceId,l="h".concat(n);return Object(r.createElement)(l,{className:t},Object(r.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-".concat(u)},Object(i.__)("Block title","woo-gutenberg-products-block")),Object(r.createElement)(c.PlainText,{id:"block-title-".concat(u),className:"wc-block-editor-components-title",value:a,onChange:o}))}))},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(11);function c(e,t){var n=Object(r.useRef)();return Object(r.useEffect)((function(){n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,t]),n.current}},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(25),c=n(14),o=n(0),i=n(58),a=n(127),u=function(e){var t=e.namespace,n=e.resourceName,u=e.resourceValues,l=void 0===u?[]:u,s=e.query,b=void 0===s?{}:s,p=e.shouldSelect,d=void 0===p||p;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");var f=Object(o.useRef)({results:[],isLoading:!0}),m=Object(i.a)(b),O=Object(i.a)(l),v=Object(a.a)(),h=Object(c.useSelect)((function(e){if(!d)return null;var c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,m,O],i=c.getCollectionError.apply(c,o);return i&&v(i),{results:c.getCollection.apply(c,o),isLoading:!c.hasFinishedResolution("getCollection",o)}}),[t,n,O,m,d]);return null!==h&&(f.current=h),f.current}},162:function(e,t,n){"use strict";var r=n(0),c=n(27),o=Object(r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(r.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(r.createElement)("g",{mask:"url(#external-mask)"},Object(r.createElement)("path",{d:"M0 0h24v24H0z"})));t.a=o},179:function(e,t,n){"use strict";var r=n(0),c=n(1),o=(n(2),n(6)),i=n.n(o),a=n(42),u=(n(241),function(e){var t=e.className,n=e.disabled,o=e.label,u=void 0===o?Object(c.__)("Go","woo-gutenberg-products-block"):o,l=e.onClick,s=e.screenReaderLabel,b=void 0===s?Object(c.__)("Apply filter","woo-gutenberg-products-block"):s;return Object(r.createElement)("button",{type:"submit",className:i()("wc-block-filter-submit-button","wc-block-components-filter-submit-button",t),disabled:n,onClick:l},Object(r.createElement)(a.a,{label:u,screenReaderLabel:b}))});u.defaultProps={disabled:!1},t.a=u},186:function(e,t){},194:function(e,t){},20:function(e,t){e.exports=window.wp.compose},24:function(e,t){e.exports=window.wp.blocks},241:function(e,t){},25:function(e,t){e.exports=window.wc.wcBlocksData},27:function(e,t){e.exports=window.wp.primitives},3:function(e,t){e.exports=window.wp.components},327:function(e,t,n){"use strict";var r=n(0),c=n(27),o=Object(r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(r.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(r.createElement)("path",{d:"M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"}));t.a=o},36:function(e,t){e.exports=window.wp.isShallowEqual},37:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return a})),n.d(t,"n",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"h",(function(){return O})),n.d(t,"a",(function(){return v})),n.d(t,"i",(function(){return h})),n.d(t,"b",(function(){return g}));var r,c=n(4),o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",a=o.pluginUrl+"build/",u=o.buildPhase,l=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,s=c.STORE_PAGES.checkout.id,b=c.STORE_PAGES.checkout.permalink,p=c.STORE_PAGES.privacy.permalink,d=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),f=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),m=c.STORE_PAGES.cart.permalink,O=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),v=Object(c.getSetting)("allowedCountries",{}),h=Object(c.getSetting)("shippingStates",{}),g=Object(c.getSetting)("allowedStates",{})},4:function(e,t){e.exports=window.wc.wcSettings},42:function(e,t,n){"use strict";var r=n(5),c=n.n(r),o=n(0),i=n(6),a=n.n(i);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t,n=e.label,r=e.screenReaderLabel,c=e.wrapperElement,i=e.wrapperProps,u=void 0===i?{}:i,s=null!=n,b=null!=r;return!s&&b?(t=c||"span",u=l(l({},u),{},{className:a()(u.className,"screen-reader-text")}),Object(o.createElement)(t,u,r)):(t=c||o.Fragment,s&&b&&n!==r?Object(o.createElement)(t,u,Object(o.createElement)("span",{"aria-hidden":"true"},n),Object(o.createElement)("span",{className:"screen-reader-text"},r)):Object(o.createElement)(t,u,n))}},487:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(5),c=n.n(r),o=n(34),i=n.n(o),a=n(43),u=n.n(a),l=n(8),s=n.n(l),b=n(0),p=n(364),d=n(7),f=n(58),m=n(104),O=n(149),v=n(71);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.queryAttribute,n=e.queryPrices,r=e.queryStock,c=e.queryState,o=Object(v.a)();o="".concat(o,"-collection-data");var a=Object(m.a)(o),l=s()(a,1)[0],h=Object(m.b)("calculate_attribute_counts",[],o),j=s()(h,2),w=j[0],_=j[1],y=Object(m.b)("calculate_price_range",null,o),k=s()(y,2),E=k[0],x=k[1],P=Object(m.b)("calculate_stock_status_counts",null,o),S=s()(P,2),C=S[0],N=S[1],F=Object(f.a)(t||{}),R=Object(f.a)(n),T=Object(f.a)(r);Object(b.useEffect)((function(){"object"===u()(F)&&Object.keys(F).length&&(w.find((function(e){return e.taxonomy===F.taxonomy}))||_([].concat(i()(w),[F])))}),[F,w,_]),Object(b.useEffect)((function(){E!==R&&void 0!==R&&x(R)}),[R,x,E]),Object(b.useEffect)((function(){C!==T&&void 0!==T&&N(T)}),[T,N,C]);var V=Object(b.useState)(!1),L=s()(V,2),M=L[0],B=L[1],D=Object(p.a)(M,200),H=s()(D,1)[0];M||B(!0);var I=Object(b.useMemo)((function(){return function(e){var t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(d.sortBy)(e.calculate_attribute_counts.map((function(e){return{taxonomy:e.taxonomy,query_type:e.queryType}})),["taxonomy","query_type"])),t}(l)}),[l]);return Object(O.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:g(g({},c),{},{page:void 0,per_page:void 0,orderby:void 0,order:void 0},I),shouldSelect:H})}},50:function(e,t){e.exports=window.wc.priceFormat},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(36),o=n.n(c);function i(e){var t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},59:function(e,t,n){"use strict";var r=n(10),c=n.n(r),o=n(5),i=n.n(o),a=n(21),u=n.n(a),l=n(0),s=n(178),b=n(6),p=n.n(b),d=(n(186),["className","value","currency","onValueChange","displayType"]);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.className,n=e.value,r=e.currency,o=e.onValueChange,i=e.displayType,a=void 0===i?"text":i,b=u()(e,d),f="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(f))return null;var O=f/Math.pow(10,r.minorUnit);if(!Number.isFinite(O))return null;var v=p()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),h=m(m(m({},b),function(e){return{thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0}}(r)),{},{value:void 0,currency:void 0,onValueChange:void 0}),g=o?function(e){var t=e.value*Math.pow(10,r.minorUnit);o(t)}:function(){};return Object(l.createElement)(s.a,c()({className:v,displayType:a},h,{value:O,onValueChange:g}))}},61:function(e,t,n){"use strict";var r=n(5),c=n.n(r),o=n(21),i=n.n(o),a=n(0),u=["srcElement","size"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.srcElement,n=e.size,r=void 0===n?24:n,o=i()(e,u);return Object(a.isValidElement)(t)?Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},o)):null}},7:function(e,t){e.exports=window.lodash},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=Object(r.createContext)("page"),o=function(){return Object(r.useContext)(c)};c.Provider},783:function(e,t,n){e.exports=n(852)},784:function(e,t){},785:function(e,t){},83:function(e,t,n){"use strict";var r=n(10),c=n.n(r),o=n(16),i=n.n(o),a=n(17),u=n.n(a),l=n(13),s=n.n(l),b=n(18),p=n.n(b),d=n(19),f=n.n(d),m=n(9),O=n.n(m),v=n(0),h=n(7),g=n(6),j=n.n(g),w=n(3),_=n(20);n(116);var y=function(e){p()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=O()(t);if(n){var c=O()(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return f()(this,e)});function o(){var e;return i()(this,o),(e=r.apply(this,arguments)).onClick=e.onClick.bind(s()(e)),e}return u()(o,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.label,o=n.checked,i=n.instanceId,a=n.className,u=n.help,l=n.options,s=n.value,b="inspector-toggle-button-control-".concat(i);return u&&(e=Object(h.isFunction)(u)?u(o):u),Object(v.createElement)(w.BaseControl,{id:b,help:e,className:j()("components-toggle-button-control",a)},Object(v.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},r),Object(v.createElement)(w.ButtonGroup,{"aria-labelledby":b+"__label"},l.map((function(e,n){var o={};return s===e.value?(o.isPrimary=!0,o["aria-pressed"]=!0):(o.isSecondary=!0,o["aria-pressed"]=!1),Object(v.createElement)(w.Button,c()({key:"".concat(e.label,"-").concat(e.value,"-").concat(n),value:e.value,onClick:t.onClick,"aria-label":r+": "+e.label},o),e.label)}))))}}]),o}(v.Component);t.a=Object(_.withInstanceId)(y)},852:function(e,t,n){"use strict";n.r(t);var r=n(10),c=n.n(r),o=n(0),i=n(1),a=n(24),u=n(6),l=n.n(u),s=n(61),b=n(327),p=n(12),d=n(3),f=n(4),m=n(37),O=n(121),v=n(141),h=n(83),g=n(162),j=n(8),w=n.n(j),_=n(143),y=n(104),k=n(487),E=(n(2),n(59)),x=n(117),P=(n(785),function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=parseInt(e[0],10),i=parseInt(e[1],10);return Number.isFinite(o)||(o=t||0),Number.isFinite(i)||(i=n||r),Number.isFinite(t)&&t>o&&(o=t),Number.isFinite(n)&&n<=o&&(o=n-r),Number.isFinite(t)&&t>=i&&(i=t+r),Number.isFinite(n)&&n<i&&(i=n),!c&&o>=i&&(o=i-r),c&&i<=o&&(i=o+r),[o,i]}),S=n(179),C=function(e){var t=e.minPrice,n=e.maxPrice,r=e.minConstraint,c=e.maxConstraint,a=e.onChange,u=void 0===a?function(){}:a,s=e.step,b=e.currency,p=e.showInputFields,d=void 0===p||p,f=e.showFilterButton,m=void 0!==f&&f,O=e.isLoading,v=void 0!==O&&O,h=e.onSubmit,g=void 0===h?function(){}:h,j=Object(o.useRef)(),_=Object(o.useRef)(),y=s||10*Math.pow(10,b.minorUnit),k=Object(o.useState)(t),C=w()(k,2),N=C[0],F=C[1],R=Object(o.useState)(n),T=w()(R,2),V=T[0],L=T[1];Object(o.useEffect)((function(){F(t)}),[t]),Object(o.useEffect)((function(){L(n)}),[n]);var M=Object(o.useMemo)((function(){return isFinite(r)&&isFinite(c)}),[r,c]),B=Object(o.useMemo)((function(){return isFinite(t)&&isFinite(n)&&M?{"--low":Math.round((t-r)/(c-r)*100)-.5+"%","--high":Math.round((n-r)/(c-r)*100)+.5+"%"}:{"--low":"0%","--high":"100%"}}),[t,n,r,c,M]),D=Object(o.useCallback)((function(e){if(!v&&M){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=j.current.offsetWidth,o=j.current.value,i=_.current.offsetWidth,a=_.current.value,u=r*(o/c),l=i*(a/c);Math.abs(n-u)>Math.abs(n-l)?(j.current.style.zIndex=20,_.current.style.zIndex=21):(j.current.style.zIndex=21,_.current.style.zIndex=20)}}),[v,c,M]),H=Object(o.useCallback)((function(e){var o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=e.target.value,a=o?[Math.round(i/y)*y,n]:[t,Math.round(i/y)*y],l=P(a,r,c,y,o);u([parseInt(l[0],10),parseInt(l[1],10)])}),[u,t,n,r,c,y]),I=Object(o.useCallback)((function(e){if(!(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))){var t=e.target.classList.contains("wc-block-price-filter__amount--min"),n=P([N,V],null,null,y,t);u([parseInt(n[0],10),parseInt(n[1],10)])}}),[u,y,N,V]),z=l()("wc-block-price-filter","wc-block-components-price-slider",d&&"wc-block-price-filter--has-input-fields",d&&"wc-block-components-price-slider--has-input-fields",m&&"wc-block-price-filter--has-filter-button",m&&"wc-block-components-price-slider--has-filter-button",v&&"is-loading",!M&&"is-disabled"),A=Object(x.b)(j.current)?j.current.ownerDocument.activeElement:void 0,U=A&&A===j.current?y:1,G=A&&A===_.current?y:1,q=N/Math.pow(10,b.minorUnit),Y=V/Math.pow(10,b.minorUnit);return Object(o.createElement)("div",{className:z},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-wrapper wc-block-components-price-slider__range-input-wrapper",onMouseMove:D,onFocus:D},M&&Object(o.createElement)("div",{"aria-hidden":d},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:B}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),"aria-valuetext":q,value:Number.isFinite(t)?t:r,onChange:H,step:U,min:r,max:c,ref:j,disabled:v,tabIndex:d?"-1":"0"}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),"aria-valuetext":Y,value:Number.isFinite(n)?n:c,onChange:H,step:G,min:r,max:c,ref:_,disabled:v,tabIndex:d?"-1":"0"}))),Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},d&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(E.a,{currency:b,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),onValueChange:function(e){e!==N&&F(e)},onBlur:I,disabled:v||!M,value:N}),Object(o.createElement)(E.a,{currency:b,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),onValueChange:function(e){e!==V&&L(e)},onBlur:I,disabled:v||!M,value:V})),!d&&!v&&Number.isFinite(t)&&Number.isFinite(n)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(i.__)("Price","woo-gutenberg-products-block"),":  ",Object(o.createElement)(E.a,{currency:b,value:t})," – ",Object(o.createElement)(E.a,{currency:b,value:n})),m&&Object(o.createElement)(S.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",disabled:v||!M,onClick:g,screenReaderLabel:Object(i.__)("Apply price filter","woo-gutenberg-products-block")})))},N=n(201),F=n(50),R=function(e,t,n){var r,c=10*Math.pow(10,t);"ROUND_UP"===n?r=isNaN(e)?null:Math.ceil(parseFloat(e,10)/c)*c:"ROUND_DOWN"===n&&(r=isNaN(e)?null:Math.floor(parseFloat(e,10)/c)*c);var o=Object(_.a)(r,Number.isFinite);return Number.isFinite(r)?r:o},T=function(e){var t=e.attributes,n=e.isEditor,r=void 0!==n&&n,c=Object(y.b)("min_price",null),i=w()(c,2),a=i[0],u=i[1],l=Object(y.b)("max_price",null),s=w()(l,2),b=s[0],p=s[1],d=Object(y.a)(),f=w()(d,1)[0],m=Object(k.a)({queryPrices:!0,queryState:f}),O=m.results,v=m.isLoading,h=Object(o.useState)(),g=w()(h,2),j=g[0],E=g[1],x=Object(o.useState)(),P=w()(x,2),S=P[0],T=P[1],V=Object(F.getCurrencyFromPriceResponse)(O.price_range),L=function(e){var t=e.maxPrice,n=e.minorUnit;return{minConstraint:R(e.minPrice,n,"ROUND_DOWN"),maxConstraint:R(t,n,"ROUND_UP")}}({minPrice:O.price_range?O.price_range.min_price:void 0,maxPrice:O.price_range?O.price_range.max_price:void 0,minorUnit:V.minorUnit}),M=L.minConstraint,B=L.maxConstraint,D=Object(o.useCallback)((function(e,t){u(e===M?void 0:e),p(t===B?void 0:t)}),[M,B,u,p]),H=Object(N.a)(D,500),I=w()(H,1)[0],z=Object(o.useCallback)((function(e){e[0]!==j&&E(e[0]),e[1]!==S&&T(e[1])}),[j,S,E,T]);Object(o.useEffect)((function(){t.showFilterButton||I(j,S)}),[j,S,t.showFilterButton,I]);var A=Object(_.a)(a),U=Object(_.a)(b),G=Object(_.a)(M),q=Object(_.a)(B);if(Object(o.useEffect)((function(){(!Number.isFinite(j)||a!==A&&a!==j||M!==G&&M!==j)&&E(Number.isFinite(a)?a:M),(!Number.isFinite(S)||b!==U&&b!==S||B!==q&&B!==S)&&T(Number.isFinite(b)?b:B)}),[j,S,a,b,M,B,G,q,A,U]),!v&&(null===M||null===B||M===B))return null;var Y="h".concat(t.headingLevel);return Object(o.createElement)(o.Fragment,null,!r&&t.heading&&Object(o.createElement)(Y,{className:"wc-block-price-filter__title"},t.heading),Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(C,{minConstraint:M,maxConstraint:B,minPrice:j,maxPrice:S,currency:V,showInputFields:t.showInputFields,showFilterButton:t.showFilterButton,onChange:z,onSubmit:function(){return D(j,S)},isLoading:v})))};n(784),Object(a.registerBlockType)("woocommerce/price-filter",{title:Object(i.__)("Filter Products by Price","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(s.a,{srcElement:b.a}),foreground:"#7f54b3"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Allow customers to filter the products by choosing a lower or upper price limit. Works in combination with the All Products block.","woo-gutenberg-products-block"),supports:{html:!1,multiple:!1},example:{},attributes:{showInputFields:{type:"boolean",default:!0},showFilterButton:{type:"boolean",default:!1},heading:{type:"string",default:Object(i.__)("Filter by price","woo-gutenberg-products-block")},headingLevel:{type:"number",default:3}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=t.className,c=t.heading,a=t.headingLevel,u=t.showInputFields,l=t.showFilterButton;return Object(o.createElement)(o.Fragment,null,0===m.o.productCount?Object(o.createElement)(d.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(s.a,{srcElement:b.a}),label:Object(i.__)("Filter Products by Price","woo-gutenberg-products-block"),instructions:Object(i.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},Object(o.createElement)("p",null,Object(i.__)("Products with prices are needed for filtering by price. You haven't created any products yet.","woo-gutenberg-products-block")),Object(o.createElement)(d.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:Object(f.getAdminLink)("post-new.php?post_type=product")},Object(i.__)("Add new product","woo-gutenberg-products-block")+" ",Object(o.createElement)(s.a,{srcElement:g.a})),Object(o.createElement)(d.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(i.__)("Learn more","woo-gutenberg-products-block"))):Object(o.createElement)("div",{className:r},Object(o.createElement)(p.InspectorControls,{key:"inspector"},Object(o.createElement)(d.PanelBody,{title:Object(i.__)("Block Settings","woo-gutenberg-products-block")},Object(o.createElement)(h.a,{label:Object(i.__)("Price Range","woo-gutenberg-products-block"),value:u?"editable":"text",options:[{label:Object(i.__)("Editable","woo-gutenberg-products-block"),value:"editable"},{label:Object(i.__)("Text","woo-gutenberg-products-block"),value:"text"}],onChange:function(e){return n({showInputFields:"editable"===e})}}),Object(o.createElement)(d.ToggleControl,{label:Object(i.__)("Filter button","woo-gutenberg-products-block"),help:l?Object(i.__)("Products will only update when the button is pressed.","woo-gutenberg-products-block"):Object(i.__)("Products will update when the slider is moved.","woo-gutenberg-products-block"),checked:l,onChange:function(){return n({showFilterButton:!l})}}),Object(o.createElement)("p",null,Object(i.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(O.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:a,onChange:function(e){return n({headingLevel:e})}}))),Object(o.createElement)(v.a,{className:"wc-block-price-filter__title",headingLevel:a,heading:c,onChange:function(e){return n({heading:e})}}),Object(o.createElement)(d.Disabled,null,Object(o.createElement)(T,{attributes:t,isEditor:!0}))))},save:function(e){var t=e.attributes,n=t.className,r={"data-showinputfields":t.showInputFields,"data-showfilterbutton":t.showFilterButton,"data-heading":t.heading,"data-heading-level":t.headingLevel};return Object(o.createElement)("div",c()({className:l()("is-loading",n)},r),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})}});