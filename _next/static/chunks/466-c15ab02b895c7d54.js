(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[466],{8030:function(e,t,n){"use strict";var r,o;n.r(t),n.d(t,{DataContext:function(){return R},DataCtxReader:function(){return I},DataProvider:function(){return k},PageParamsProvider:function(){return L},PlasmicCanvasContext:function(){return y},PlasmicCanvasHost:function(){return _},applySelector:function(){return j},mkMetaName:function(){return S},mkMetaValue:function(){return x},registerComponent:function(){return F},registerGlobalContext:function(){return H},registerTrait:function(){return K},repeatedElement:function(){return $},unstable_registerFetcher:function(){return D},useDataEnv:function(){return O},usePlasmicCanvasContext:function(){return g},useSelector:function(){return A},useSelectors:function(){return M}});var a=n(7294),i=n(3935);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=globalThis;null==f.__PlasmicHostVersion&&(f.__PlasmicHostVersion="2");var p=[],d=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,p.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function m(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var v=0;function h(e){v++,d.set(e)}var y=(0,a.createContext)(!1),g=function(){return(0,a.useContext)(y)};function b(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),o=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,u=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!o,l=function(){var e=(0,a.useState)(0)[1];return(0,a.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,a.useLayoutEffect)((function(){return p.push(l),function(){var e=p.indexOf(l);e>=0&&p.splice(e,1)}}),[l]),(0,a.useEffect)((function(){u&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=m();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[u,n]),(0,a.useEffect)((function(){if(!u&&!document.querySelector("#getlibs")&&o){var e=document.createElement("script");e.id="getlibs",e.src=m()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[u]),!n)return null;if(r||o){var c=document.querySelector("#plasmic-app.__wab_user-body");c||((c=document.createElement("div")).id="plasmic-app",c.classList.add("__wab_user-body"),document.body.appendChild(c));var s=new URLSearchParams(location.hash),f=!!r&&{componentName:s.get("componentName")};return(0,i.createPortal)((0,a.createElement)(w,{key:""+v},(0,a.createElement)(y.Provider,{value:f},d.get())),c,"plasmic-app")}return u&&window.parent===window?(0,a.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var _=function(e){var t=e.enableWebpackHmr,n=(0,a.useState)(null),r=n[0],o=n[1];return(0,a.useEffect)((function(){o((0,a.createElement)(b,null))}),[]),(0,a.createElement)(a.Fragment,null,!t&&(0,a.createElement)(P,null),r)},E=[];function C(e){return E.push(e),function(){var t=E.indexOf(e);t>=0&&E.splice(t,1)}}var w=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var o=r.prototype;return o.componentDidCatch=function(e){E.forEach((function(t){return t(e)}))},o.render=function(){return this.state.error?(0,a.createElement)("div",null,"Error: ",""+this.state.error.message):(0,a.createElement)(a.Fragment,null,this.props.children)},r}(a.Component);function P(){return null}var R=(0,a.createContext)(void 0);function S(e){return"__plasmic_meta_"+e}function x(e){return e}function j(e,t){if(t){for(var n,r=e,o=s(t.split("."));!(n=o()).done;){var a,i=n.value;r=null==(a=r)?void 0:a[i]}return r}}function A(e){return j(O(),e)}function M(e){void 0===e&&(e={});var t=O();return Object.fromEntries(Object.entries(e).filter((function(e){var t=e[0],n=e[1];return!!t&&!!n})).map((function(e){var n=e[0],r=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}(n,j(t,r))})))}function O(){return(0,a.useContext)(R)}function k(e){var t,n,r=e.name,o=e.data,i=e.hidden,l=e.children,c=null!=(t=O())?t:{};return r?a.createElement(R.Provider,{value:u({},c,(n={},n[r]=o,n[S(r)]={hidden:i},n))},l):a.createElement(a.Fragment,null,l)}function L(e){var t=e.children,n=e.params,r=void 0===n?{}:n,o=e.query,i=void 0===o?{}:o;return a.createElement(k,{name:"params",data:r},a.createElement(k,{name:"query",data:i},t))}function I(e){return(0,e.children)(O())}var T=globalThis;function D(e,t){T.__PlasmicFetcherRegistry.push({fetcher:e,meta:t})}T.__PlasmicFetcherRegistry=[];var U=globalThis;function F(e,t){U.__PlasmicComponentRegistry.push({component:e,meta:t})}null==U.__PlasmicComponentRegistry&&(U.__PlasmicComponentRegistry=[]);var N=globalThis;function H(e,t){N.__PlasmicContextRegistry.push({component:e,meta:t})}null==N.__PlasmicContextRegistry&&(N.__PlasmicContextRegistry=[]);var V,q,G=globalThis;function K(e,t){G.__PlasmicTraitRegistry.push({trait:e,meta:t})}function $(e,t){return z(e,t)}null==G.__PlasmicTraitRegistry&&(G.__PlasmicTraitRegistry=[]);var z=function(e,t){return e?t:Array.isArray(t)?t.map((function(t){return $(e,t)})):t&&(0,a.isValidElement)(t)&&"string"!==typeof t?(0,a.cloneElement)(t):t},B=globalThis,W=null!=(V=null==B||null==(q=B.__Sub)?void 0:q.setRepeatedElementFn)?V:function(e){z=e},J={__proto__:null,PlasmicCanvasContext:y,PlasmicCanvasHost:_,usePlasmicCanvasContext:g,unstable_registerFetcher:D,registerComponent:F,registerGlobalContext:H,registerTrait:K,repeatedElement:$,DataContext:R,mkMetaName:S,mkMetaValue:x,applySelector:j,useSelector:A,useSelectors:M,useDataEnv:O,DataProvider:k,PageParamsProvider:L,DataCtxReader:I},Q=globalThis;null==Q.__Sub&&(console.log("Plasmic: Setting up app host dependencies"),Q.__Sub=u({React:r||(r=n.t(a,2)),ReactDOM:o||(o=n.t(i,2)),hostModule:J,hostVersion:"1.0.57",hostUtils:{setPlasmicRootNode:h,registerRenderErrorListener:C,setRepeatedElementFn:W},setPlasmicRootNode:h,registerRenderErrorListener:C,setRepeatedElementFn:W},J))},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},u=n(6273),l=n(387),c=n(7190);var s={};function f(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var p=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?u.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),p=a.href,d=a.as,m=e.children,v=e.replace,h=e.shallow,y=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,_=o(c.useIntersection({rootMargin:"200px"}),2),E=_[0],C=_[1],w=i.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);i.default.useEffect((function(){var e=C&&n&&u.isLocalURL(p),t="undefined"!==typeof g?g:r&&r.locale,o=s[p+"%"+d+(t?"%"+t:"")];e&&!o&&f(r,p,d,{locale:t})}),[d,p,C,g,n,r]);var P={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,r,p,d,v,h,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(p)&&f(r,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof g?g:r&&r.locale,S=r&&r.isLocaleDomain&&u.getDomainLocale(d,R,r&&r.locales,r&&r.domainLocales);P.href=S||u.addBasePath(u.addLocale(d,R,r&&r.defaultLocale))}return i.default.cloneElement(t,P)};t.default=p},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,r=a.useRef(),c=o(a.useState(!1),2),s=c[0],f=c[1],p=a.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||s||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return a.useEffect((function(){if(!u&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[p,s]};var a=n(7294),i=n(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map},7575:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}}]);