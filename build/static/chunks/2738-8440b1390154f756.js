(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2738],{48418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,l=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var l,s=(l=n(67294))&&l.__esModule?l:{default:l},i=n(76273),c=n(90387),o=n(57190);var u={};function f(e,r,n,t){if(e&&i.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=c.useRouter(),l=s.default.useMemo((function(){var r=a(i.resolveHref(t,e.href,!0),2),n=r[0],l=r[1];return{href:n,as:e.as?i.resolveHref(t,e.as):l||n}}),[t,e.href,e.as]),d=l.href,h=l.as,m=e.children,v=e.replace,p=e.shallow,x=e.scroll,g=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var j=(r=s.default.Children.only(m))&&"object"===typeof r&&r.ref,b=a(o.useIntersection({rootMargin:"200px"}),2),y=b[0],N=b[1],k=s.default.useCallback((function(e){y(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,y]);s.default.useEffect((function(){var e=N&&n&&i.isLocalURL(d),r="undefined"!==typeof g?g:t&&t.locale,a=u[d+"%"+h+(r?"%"+r:"")];e&&!a&&f(t,d,h,{locale:r})}),[h,d,N,g,n,t]);var w={ref:k,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,l,s,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&t.indexOf("#")>=0&&(s=!1),r[a?"replace":"push"](n,t,{shallow:l,locale:c,scroll:s}))}(e,t,d,h,v,p,x,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var C="undefined"!==typeof g?g:t&&t.locale,E=t&&t.isLocaleDomain&&i.getDomainLocale(h,C,t&&t.locales,t&&t.domainLocales);w.href=E||i.addBasePath(i.addLocale(h,C,t&&t.defaultLocale))}return s.default.cloneElement(r,w)};r.default=d},57190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,l=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!i,o=l.useRef(),u=a(l.useState(!1),2),f=u[0],d=u[1],h=a(l.useState(r?r.current:null),2),m=h[0],v=h[1],p=l.useCallback((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=c.get(r);if(n)return n;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(r,n={id:r,observer:a,elements:t}),n}(n),a=t.id,l=t.observer,s=t.elements;return s.set(e,r),l.observe(e),function(){s.delete(e),l.unobserve(e),0===s.size&&(l.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{root:m,rootMargin:n}))}),[t,m,n,f]);return l.useEffect((function(){if(!i&&!f){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),l.useEffect((function(){r&&v(r.current)}),[r]),[p,f]};var l=n(67294),s=n(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},33391:function(e,r,n){"use strict";var t=n(85893);n(67294);r.Z=function(e){var r=e.hideBGCOLOR;return(0,t.jsx)("footer",{className:"".concat(r?"":"sub-bg"),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item md-mb50",children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h5",{children:"Contact Us"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"TERMEZ"}),(0,t.jsx)("p",{children:"TERMEZ"})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-mail"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Email Us"}),(0,t.jsx)("p",{children:"twolines.digital@gmail.com"})]})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsx)("div",{className:"item md-mb50"})}),(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)("img",{src:"/img/logo-light.png",alt:""})}),(0,t.jsxs)("div",{className:"social",children:[(0,t.jsx)("a",{href:"#0",children:(0,t.jsx)("i",{className:"fab fa-facebook-f fa-lg"})}),(0,t.jsx)("a",{href:"#0",children:(0,t.jsx)("i",{className:"fab fa-twitter fa-lg"})}),(0,t.jsx)("a",{href:"#0",children:(0,t.jsx)("i",{className:"fab fa-instagram fa-lg"})}),(0,t.jsx)("a",{href:"#0",children:(0,t.jsx)("i",{className:"fab fa-youtube fa-lg"})})]})]})})]})})})}},65895:function(e,r,n){"use strict";var t=n(85893),a=(n(67294),n(41664));r.Z=function(e){var r=e.lr,n=e.nr,l=e.theme;return(0,t.jsx)("nav",{ref:n,className:"navbar navbar-expand-lg change ".concat("themeL"===l?"light":""),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{className:"logo",children:l&&"themeL"===l?(0,t.jsx)("img",{ref:r,src:"/img/logo-dark.png",alt:"logo"}):(0,t.jsx)("img",{ref:r,src:"/img/logo-light.png",alt:"logo"})})}),(0,t.jsx)("button",{className:"navbar-toggler",type:"button",onClick:function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")},"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,t.jsx)("span",{className:"icon-bar",children:(0,t.jsx)("i",{className:"fas fa-bars"})})}),(0,t.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(a.default,{href:"/homepage/home5-dark",children:(0,t.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(a.default,{href:"/works2/works2-dark",children:(0,t.jsx)("a",{className:"nav-link",children:"Portfolio"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(a.default,{href:"/about/about-dark",children:(0,t.jsx)("a",{className:"nav-link",children:"About"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(a.default,{href:"/contact/contact-dark",children:(0,t.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})})}},4671:function(e,r,n){"use strict";var t=n(85893);n(67294);r.Z=function(e){var r=e.sliderRef;return(0,t.jsx)("header",{ref:r,className:"works-header fixed-slider hfixd valign sub-bg",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)("div",{className:"col-lg-7 col-md-9 static",children:(0,t.jsxs)("div",{className:"capt mt-50",children:[(0,t.jsxs)("div",{className:"parlx text-center",children:[(0,t.jsx)("h1",{className:"color-font",children:"amazing works"}),(0,t.jsx)("p",{children:"Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before."})]}),(0,t.jsx)("div",{className:"bactxt custom-font valign",children:(0,t.jsx)("span",{className:"full-width",children:"Works"})})]})})})})})}},41664:function(e,r,n){e.exports=n(48418)}}]);