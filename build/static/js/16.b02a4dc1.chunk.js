/*! For license information please see 16.b02a4dc1.chunk.js.LICENSE.txt */
(this.webpackJsonponitir=this.webpackJsonponitir||[]).push([[16],{317:function(e,t,n){"use strict";n.r(t);var r=n(38),c=n(39),i=n(41),o=n(40),s=n(0),l=n(48),a=n.n(l),u=n(45),d=n(47),j=n(43),b=n(80),f=n(10),h=n(65),p=n(54),m=n(85),O=n.n(m),x=n(1),v=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).handleClick=function(e){var t=[];t=-1===e?p:p.filter((function(t){return t.category.includes(e)})),c.setState({filteredProducts:t,activeItem:e})},c.state={filteredProducts:p,activeItem:-1},c}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.filteredProducts.map((function(e,t){return Object(x.jsx)("div",{className:"col-lg-4 col-sm-6 masonry-item",children:Object(x.jsxs)("div",{className:"portfolio-grid-box",children:[Object(x.jsx)("div",{className:"portfolio-img",style:{backgroundImage:"url(/dcwebtech/"+e.img+")"}}),Object(x.jsx)(f.b,{to:"/portfolio-details/"+e.id,className:"portfolio-link",children:Object(x.jsx)("i",{className:"far fa-expand"})})]})},t)}));return Object(x.jsxs)(s.Fragment,{children:[Object(x.jsx)("section",{className:"portfolio-section pt-120 pb-90",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"row justify-content-center",children:Object(x.jsx)("div",{className:"col-lg-8",children:Object(x.jsx)("div",{className:"portfolio-filter grid-filter",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:-1===this.state.activeItem?"active":"",onClick:this.handleClick.bind(this,-1),children:"All works"}),h.map((function(t){return Object(x.jsx)("li",{className:e.state.activeItem===parseInt(t.id)?"active":"",onClick:e.handleClick.bind(e,t.id),children:t.title},t.id)}))]})})})}),Object(x.jsx)(O.a,{className:"row portfolio-grid-loop grid-isotope",imagesLoadedOptions:{itemSelector:".masonry-item",percentPosition:!0,resize:!0,fitWidth:!0},children:t})]})}),Object(x.jsx)("section",{className:"call-to-action cta-style-two mb-120",children:Object(x.jsx)(b.a,{})})]})}}]),n}(s.Component),y="Portfolio Grid",g=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(s.Fragment,{children:[Object(x.jsxs)(a.a,{children:[Object(x.jsxs)("title",{children:["Onitir - React Template | ",y]}),Object(x.jsx)("meta",{name:"description",content:"#"})]}),Object(x.jsx)(u.a,{}),Object(x.jsx)(d.a,{breadcrumb:{pagename:y}}),Object(x.jsx)(v,{}),Object(x.jsx)(j.a,{footer:{style:"footer-style-three",logo:"assets/img/logo.png"}})]})}}]),n}(s.Component);t.default=g},38:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},39:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return c}))},40:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return s}));var i=n(52);function o(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?Object(i.a)(e):t}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=r(e);if(t){var i=r(this).constructor;n=Reflect.construct(c,arguments,i)}else n=c.apply(this,arguments);return o(this,n)}}},41:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return c}))},42:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=c.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},43:function(e,t,n){"use strict";var r=n(38),c=n(39),i=n(41),o=n(40),s=n(0),l=n(10),a=n(61),u=n(44),d=n(1),j=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(a.a,{}),Object(d.jsxs)("footer",{className:this.props.footer.style,children:[Object(d.jsx)("div",{className:"footer-top",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row align-items-center",children:[Object(d.jsx)("div",{className:"col-sm-4",children:Object(d.jsx)("div",{className:"logo text-center text-sm-left",children:Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("img",{src:"/dcwebtech/"+this.props.footer.logo,alt:"logo"})})})}),Object(d.jsx)("div",{className:"col-sm-8",children:Object(d.jsxs)("div",{className:"social-icon text-center text-sm-right",children:[Object(d.jsx)(l.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-facebook-f"})}),Object(d.jsx)(l.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-twitter"})}),Object(d.jsx)(l.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-behance"})}),Object(d.jsx)(l.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-linkedin"})}),Object(d.jsx)(l.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-youtube"})})]})})]})})}),Object(d.jsx)("div",{className:"footer-widget-area",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-2 col-md-6 col-sm-6",children:Object(d.jsx)("div",{className:"widget nav-widget d-flex justify-content-start",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"widget-title",children:"Company"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Leadership"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Blog"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Careers"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Partners"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Referral Program"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Press"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Legal"})})]})]})})}),Object(d.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6",children:Object(d.jsx)("div",{className:"widget nav-widget d-flex justify-content-start justify-content-lg-center",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"widget-title",children:"Community"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Tutorials"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Meetups"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Q&A"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Write for DOnations"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Droplets for Demos"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Hatch Startup Program"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Shop Swag"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Research Program"})})]})]})})}),Object(d.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6",children:Object(d.jsx)("div",{className:"widget nav-widget d-flex justify-content-start justify-content-lg-center",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"widget-title",children:"Solutions"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Web & Mobile Apps"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Website Hosting"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Big Data"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Managed Services"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Business Solutions"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Research Program"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Currents Research"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"#",children:"Open Source"})})]})]})})}),Object(d.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:Object(d.jsx)("div",{className:"widget recent-post",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"widget-title",children:"news feeds"}),Object(d.jsx)("div",{className:"post-loop",children:u.slice(0,3).map((function(e,t){return Object(d.jsxs)("div",{className:"post",children:[Object(d.jsx)("div",{className:"post-img",children:Object(d.jsx)("img",{src:"/dcwebtech/"+e.image[0],alt:e.title})}),Object(d.jsxs)("div",{className:"post-desc",children:[Object(d.jsxs)("span",{className:"time",children:[Object(d.jsx)("i",{className:"fal fa-calendar-alt"})," ",e.postdate]}),Object(d.jsx)("h5",{children:Object(d.jsx)(l.b,{to:"/blog-details/"+e.id,children:e.title})})]})]},t)}))})]})})})]})})}),Object(d.jsx)("div",{className:"copy-right-area",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"copyrigt-text d-sm-flex justify-content-between",children:[Object(d.jsxs)("p",{children:["Copyright By@",Object(d.jsx)(l.b,{to:"#",children:"Yourweb"})," - 2021"]}),Object(d.jsxs)("p",{children:["Design By@",Object(d.jsx)(l.b,{to:"#",children:"Yourweb"})," - 2021"]})]})})})]})]})}}]),n}(s.Component);t.a=j},45:function(e,t,n){"use strict";var r=n(38),c=n(39),i=n(41),o=n(40),s=(n(0),n(10)),l=n(57),a=n(58),u=n(42),d=n.n(u),j=n(59),b=n(60),f=n(1),h=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isTop?"sticky":"";return Object(f.jsx)("header",{className:"header-absolute header-three sticky-header "+t,id:"can-sticky",children:Object(f.jsxs)("div",{className:"container-fluid custom-container-two",children:[Object(f.jsx)("div",{className:"mainmenu-area",children:Object(f.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(f.jsxs)("nav",{className:"main-menu",children:[Object(f.jsx)("div",{className:"logo",children:Object(f.jsxs)(s.b,{to:"/",children:[Object(f.jsx)("img",{src:"/dcwebtech/assets/img/logo-white.png",alt:"logo",className:"normal-logo"}),Object(f.jsx)("img",{src:"/dcwebtech/assets/img/logo.png",alt:"logo",className:"sticky-logo"})]})}),Object(f.jsx)("div",{className:"menu-items",children:Object(f.jsx)("ul",{children:a.length>0?a.map((function(t,n){return Object(f.jsxs)("li",{className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild,children:[t.child?Object(f.jsxs)(s.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",t.linkText," "]}):Object(f.jsxs)(s.b,{to:t.link,children:[" ",t.linkText," "]}),t.child?Object(f.jsx)("ul",{className:"submenu",role:"menu",children:t.submenu.map((function(e,t){return Object(f.jsxs)("li",{className:"menu-item ".concat(e.child?"menu-item-has-children":""," "),children:[e.child?Object(f.jsxs)(s.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",e.linkText," "]}):Object(f.jsxs)(s.b,{to:e.link,children:[" ",e.linkText," "]}),e.submenu?Object(f.jsx)("ul",{className:"submenu",children:e.submenu.map((function(e,t){return Object(f.jsx)("li",{className:"menu-item",children:Object(f.jsx)(s.b,{to:e.link,children:e.linkText})},t)}))}):null]},t)}))}):null]},n)})):null})})]}),Object(f.jsxs)("div",{className:"main-right",children:[Object(f.jsx)(s.b,{to:"/contact",className:"main-btn btn-filled",children:"Get A Quote"}),Object(f.jsx)(s.b,{to:"#",className:"offcanvas-trigger",onClick:this.canvasToggle,children:Object(f.jsx)("i",{className:"far fa-ellipsis-v"})}),Object(f.jsxs)("div",{className:d()("off-canvas-wrap",{"show-off-canvas":this.state.canvasmethod}),children:[Object(f.jsx)("div",{className:d()("overly",{"show-overly":this.state.canvasmethod}),onClick:this.canvasToggle}),Object(f.jsxs)("div",{className:"off-canvas-widget",children:[Object(f.jsx)(s.b,{to:"#",className:"off-canvas-close",onClick:this.canvasToggle,children:Object(f.jsx)("i",{className:"fal fa-times"})}),Object(f.jsx)(j.a,{})]})]})]}),Object(f.jsx)("div",{className:d()("hamburgerbtn",{active:this.state.navToggle}),onClick:this.toggleNav,children:Object(f.jsxs)("div",{className:"menubtn",children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]})})]})}),Object(f.jsxs)("div",{className:d()("mobile-menu",{open:this.state.navToggle}),children:[Object(f.jsx)("button",{className:"close-nav",onClick:this.toggleNav,children:"X"}),Object(f.jsx)(b.a,{})]})]})})}}]),n}(l.a);t.a=h},47:function(e,t,n){"use strict";var r=n(38),c=n(39),i=n(41),o=n(40),s=n(0),l=n(10),a=n(1),u=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("section",{className:"breadcrumb-section",style:{backgroundImage:"url(/dcwebtech/assets/img/breadcrumb.jpg)"},children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"breadcrumb-text",children:[Object(a.jsx)("h1",{children:this.props.breadcrumb.pagename}),Object(a.jsx)("p",{children:"Your Partner for Software Innovation"})]}),Object(a.jsxs)("ul",{className:"breadcrumb-nav",children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:this.props.breadcrumb.pagename})]}),Object(a.jsx)("span",{className:"btg-text",children:"onitir"})]}),Object(a.jsx)("div",{className:"breadcrumb-shape",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none",children:Object(a.jsx)("path",{d:"M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"})})})]})}}]),n}(s.Component);t.a=u},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var r=o(n(49)),c=o(n(50)),i=o(n(56));function o(e){return e&&e.__esModule?e:{default:e}}var s=c.default;t.default=s},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=(0,r.createContext)({});t.MetaContext=u;var d=function(e){function t(){return i(this,t),s(this,l(t).apply(this,arguments))}var n,c,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,e),n=t,(c=[{key:"render",value:function(){return r.default.createElement(u.Provider,{value:{extract:this.props.extract}},r.Children.only(this.props.children))}}])&&o(n.prototype,c),d&&o(n,d),t}(r.Component);t.default=d},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=(r=n(15))&&r.__esModule?r:{default:r},o=n(55),s=n(49);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return a(this,t),d(this,j(t).apply(this,arguments))}var n,r,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&i.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=c.default.createElement("div",{className:"react-head-temp"},t);i.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),c=document.head,i=c.innerHTML;(r=(r=r.filter((function(e){return-1===i.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,o.getDuplicateTitle)();n&&(0,o.removeChild)(c,n)}else if(e.id){var r=(0,o.getDuplicateElementById)(e);r&&(0,o.removeChild)(c,r)}else if("meta"===t){var i=(0,o.getDuplicateMeta)(e);i&&(0,o.removeChild)(c,i)}else if("link"===t&&"canonical"===e.rel){var s=(0,o.getDuplicateCanonical)(e);s&&(0,o.removeChild)(c,s)}})),(0,o.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(n.prototype,r),s&&u(n,s),t}(c.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(f,"contextType",s.MetaContext);var h=f;t.default=h,e.exports=t.default},52:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],o=[];return e.forEach((function(e){var c=e.type,i=e.props;"title"===c?t=e:"link"===c&&"canonical"===i.rel?n=e:"meta"===c?r.push(e):o.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};i.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var o=e[r],s=o.props.id;(s?!t.id[s]:0===c.filter((function(e){var n=o.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(o),i.forEach((function(e){var n=o.props[e];n&&(t[e][n]=o)})))},o=e.length-1;o>=0;o--)r(o);return n}(r)),[n],o)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return r.reduce((function(n,r){var c,i=e.getAttribute(r);return i?n.concat((c=t.querySelectorAll("[".concat(r,' = "').concat(i,'"]')),(c=Array.prototype.slice.call(c||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,c=t.length;r<c;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],c=r.concat(["itemProp"]),i=c.concat(["id"])},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=(r=n(50))&&r.__esModule?r:{default:r};function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){return s(this,t),a(this,u(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return c.default.createElement(i.default,null,c.default.createElement("title",null,this.props.title))}}])&&l(n.prototype,r),o&&l(n,o),t}(c.Component);t.default=j,e.exports=t.default},80:function(e,t,n){"use strict";var r=n(38),c=n(39),i=n(41),o=n(40),s=n(0),l=n(10),a=n(1),u=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"cta-inner",children:[Object(a.jsx)("div",{className:"cat-img",children:Object(a.jsx)("div",{className:"cat-shape shape-two",children:Object(a.jsx)("img",{src:"/dcwebtech/assets/img/cta/cta-img-2.png",alt:"img"})})}),Object(a.jsx)("div",{className:"cta-text diff-bg",children:Object(a.jsxs)("div",{className:"row align-items-center justify-content-end",children:[Object(a.jsx)("div",{className:"col-lg-6 col-md-7 col-sm-10",children:Object(a.jsxs)("div",{className:"section-title pl-30 left-border",children:[Object(a.jsx)("span",{className:"title-tag",children:"need consultation"}),Object(a.jsx)("h2",{children:"We are here for your estimate price."})]})}),Object(a.jsx)("div",{className:"col-xl-3 col-lg-2 col-md-2 col-sm-2",children:Object(a.jsx)("div",{className:"link-wrap text-center",children:Object(a.jsx)(l.b,{to:"/contact",className:"cat-link",children:Object(a.jsx)("i",{className:"fal fa-long-arrow-right"})})})})]})})]})})}}]),n}(s.Component);t.a=u}}]);
//# sourceMappingURL=16.b02a4dc1.chunk.js.map