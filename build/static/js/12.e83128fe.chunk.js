/*! For license information please see 12.e83128fe.chunk.js.LICENSE.txt */
(this.webpackJsonponitir=this.webpackJsonponitir||[]).push([[12],{319:function(e,t,n){"use strict";n.r(t);var i=n(38),r=n(39),c=n(41),o=n(40),a=n(0),s=n(48),l=n.n(s),u=n(45),d=n(47),f=n(43),m=n(80),b=n(10),j=n(65),p=n(54),h=n(62),O=n(85),x=n.n(O),v=n(1),y=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleClick=function(e){var t=[];t=-1===e?p:p.filter((function(t){return t.category.includes(e)})),r.setState({filteredProducts:t,activeItem:e})},r.state={filteredProducts:p,activeItem:-1},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.filteredProducts.map((function(e,t){return Object(v.jsx)("div",{className:"col-lg-4 col-sm-6 masonry-item",children:Object(v.jsxs)("div",{className:"portfolio-box",children:[Object(v.jsx)("div",{className:"portfolio-img",style:{backgroundImage:"url(/dcwebtech/"+e.img+")"}}),Object(v.jsxs)("div",{className:"portfolio-desc",children:[Object(h.a)(e.category).slice(0,1).map((function(e,t){return Object(v.jsx)("span",{className:"portfolio-cat",children:e.title},t)})),Object(v.jsx)("h4",{children:Object(v.jsx)(b.b,{to:"/portfolio-details/"+e.id,children:e.title})})]})]})},t)}));return Object(v.jsxs)(a.Fragment,{children:[Object(v.jsx)("section",{className:"portfolio-section pt-120 pb-90",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsx)("div",{className:"col-lg-8",children:Object(v.jsx)("div",{className:"portfolio-filter masonry-filter",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{className:-1===this.state.activeItem?"active":"",onClick:this.handleClick.bind(this,-1),children:"All works"}),j.map((function(t){return Object(v.jsx)("li",{className:e.state.activeItem===parseInt(t.id)?"active":"",onClick:e.handleClick.bind(e,t.id),children:t.title},t.id)}))]})})})}),Object(v.jsx)(x.a,{className:"row portfolio-masonary-loop masonry-items",imagesLoadedOptions:{itemSelector:".masonry-item",percentPosition:!0,resize:!0,fitWidth:!0},children:t})]})}),Object(v.jsx)("section",{className:"call-to-action cta-style-two mb-120",children:Object(v.jsx)(m.a,{})})]})}}]),n}(a.Component),g="Portfolio Masonry",w=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(a.Fragment,{children:[Object(v.jsxs)(l.a,{children:[Object(v.jsxs)("title",{children:["Onitir - React Template | ",g]}),Object(v.jsx)("meta",{name:"description",content:"#"})]}),Object(v.jsx)(u.a,{}),Object(v.jsx)(d.a,{breadcrumb:{pagename:g}}),Object(v.jsx)(y,{}),Object(v.jsx)(f.a,{footer:{style:"footer-style-three",logo:"assets/img/logo.png"}})]})}}]),n}(a.Component);t.default=w},38:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return i}))},39:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n.d(t,"a",(function(){return r}))},40:function(e,t,n){"use strict";function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}));var c=n(52);function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(c.a)(e):t}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var c=i(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return o(this,n)}}},41:function(e,t,n){"use strict";function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}n.d(t,"a",(function(){return r}))},42:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var c=typeof i;if("string"===c||"number"===c)e.push(i);else if(Array.isArray(i)&&i.length){var o=r.apply(null,i);o&&e.push(o)}else if("object"===c)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},43:function(e,t,n){"use strict";var i=n(38),r=n(39),c=n(41),o=n(40),a=n(0),s=n(10),l=n(61),u=n(44),d=n(1),f=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(l.a,{}),Object(d.jsxs)("footer",{className:this.props.footer.style,children:[Object(d.jsx)("div",{className:"footer-top",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row align-items-center",children:[Object(d.jsx)("div",{className:"col-sm-4",children:Object(d.jsx)("div",{className:"logo text-center text-sm-left",children:Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("img",{src:"/dcwebtech/"+this.props.footer.logo,alt:"logo"})})})}),Object(d.jsx)("div",{className:"col-sm-8",children:Object(d.jsxs)("div",{className:"social-icon text-center text-sm-right",children:[Object(d.jsx)(s.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-facebook-f"})}),Object(d.jsx)(s.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-twitter"})}),Object(d.jsx)(s.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-behance"})}),Object(d.jsx)(s.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-linkedin"})}),Object(d.jsx)(s.b,{to:"#",children:Object(d.jsx)("i",{className:"fab fa-youtube"})})]})})]})})}),Object(d.jsx)("div",{className:"footer-widget-area",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-2 col-md-6 col-sm-6",children:Object(d.jsx)("div",{className:"widget nav-widget d-flex justify-content-start",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"widget-title",children:"Company"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Leadership"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Blog"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Careers"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Partners"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Referral Program"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Press"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Legal"})})]})]})})}),Object(d.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6",children:Object(d.jsx)("div",{className:"widget nav-widget d-flex justify-content-start justify-content-lg-center",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"widget-title",children:"Community"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Tutorials"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Meetups"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Q&A"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Write for DOnations"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Droplets for Demos"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Hatch Startup Program"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Shop Swag"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Research Program"})})]})]})})}),Object(d.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6",children:Object(d.jsx)("div",{className:"widget nav-widget d-flex justify-content-start justify-content-lg-center",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"widget-title",children:"Solutions"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Web & Mobile Apps"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Website Hosting"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Big Data"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Managed Services"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Business Solutions"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Research Program"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Currents Research"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"#",children:"Open Source"})})]})]})})}),Object(d.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:Object(d.jsx)("div",{className:"widget recent-post",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"widget-title",children:"news feeds"}),Object(d.jsx)("div",{className:"post-loop",children:u.slice(0,3).map((function(e,t){return Object(d.jsxs)("div",{className:"post",children:[Object(d.jsx)("div",{className:"post-img",children:Object(d.jsx)("img",{src:"/dcwebtech/"+e.image[0],alt:e.title})}),Object(d.jsxs)("div",{className:"post-desc",children:[Object(d.jsxs)("span",{className:"time",children:[Object(d.jsx)("i",{className:"fal fa-calendar-alt"})," ",e.postdate]}),Object(d.jsx)("h5",{children:Object(d.jsx)(s.b,{to:"/blog-details/"+e.id,children:e.title})})]})]},t)}))})]})})})]})})}),Object(d.jsx)("div",{className:"copy-right-area",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"copyrigt-text d-sm-flex justify-content-between",children:[Object(d.jsxs)("p",{children:["Copyright By@",Object(d.jsx)(s.b,{to:"#",children:"Yourweb"})," - 2021"]}),Object(d.jsxs)("p",{children:["Design By@",Object(d.jsx)(s.b,{to:"#",children:"Yourweb"})," - 2021"]})]})})})]})]})}}]),n}(a.Component);t.a=f},45:function(e,t,n){"use strict";var i=n(38),r=n(39),c=n(41),o=n(40),a=(n(0),n(10)),s=n(57),l=n(58),u=n(42),d=n.n(u),f=n(59),m=n(60),b=n(1),j=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isTop?"sticky":"";return Object(b.jsx)("header",{className:"header-absolute header-three sticky-header "+t,id:"can-sticky",children:Object(b.jsxs)("div",{className:"container-fluid custom-container-two",children:[Object(b.jsx)("div",{className:"mainmenu-area",children:Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(b.jsxs)("nav",{className:"main-menu",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsxs)(a.b,{to:"/",children:[Object(b.jsx)("img",{src:"/dcwebtech/assets/img/logo-white.png",alt:"logo",className:"normal-logo"}),Object(b.jsx)("img",{src:"/dcwebtech/assets/img/logo.png",alt:"logo",className:"sticky-logo"})]})}),Object(b.jsx)("div",{className:"menu-items",children:Object(b.jsx)("ul",{children:l.length>0?l.map((function(t,n){return Object(b.jsxs)("li",{className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild,children:[t.child?Object(b.jsxs)(a.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",t.linkText," "]}):Object(b.jsxs)(a.b,{to:t.link,children:[" ",t.linkText," "]}),t.child?Object(b.jsx)("ul",{className:"submenu",role:"menu",children:t.submenu.map((function(e,t){return Object(b.jsxs)("li",{className:"menu-item ".concat(e.child?"menu-item-has-children":""," "),children:[e.child?Object(b.jsxs)(a.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",e.linkText," "]}):Object(b.jsxs)(a.b,{to:e.link,children:[" ",e.linkText," "]}),e.submenu?Object(b.jsx)("ul",{className:"submenu",children:e.submenu.map((function(e,t){return Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)(a.b,{to:e.link,children:e.linkText})},t)}))}):null]},t)}))}):null]},n)})):null})})]}),Object(b.jsxs)("div",{className:"main-right",children:[Object(b.jsx)(a.b,{to:"/contact",className:"main-btn btn-filled",children:"Get A Quote"}),Object(b.jsx)(a.b,{to:"#",className:"offcanvas-trigger",onClick:this.canvasToggle,children:Object(b.jsx)("i",{className:"far fa-ellipsis-v"})}),Object(b.jsxs)("div",{className:d()("off-canvas-wrap",{"show-off-canvas":this.state.canvasmethod}),children:[Object(b.jsx)("div",{className:d()("overly",{"show-overly":this.state.canvasmethod}),onClick:this.canvasToggle}),Object(b.jsxs)("div",{className:"off-canvas-widget",children:[Object(b.jsx)(a.b,{to:"#",className:"off-canvas-close",onClick:this.canvasToggle,children:Object(b.jsx)("i",{className:"fal fa-times"})}),Object(b.jsx)(f.a,{})]})]})]}),Object(b.jsx)("div",{className:d()("hamburgerbtn",{active:this.state.navToggle}),onClick:this.toggleNav,children:Object(b.jsxs)("div",{className:"menubtn",children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{})]})})]})}),Object(b.jsxs)("div",{className:d()("mobile-menu",{open:this.state.navToggle}),children:[Object(b.jsx)("button",{className:"close-nav",onClick:this.toggleNav,children:"X"}),Object(b.jsx)(m.a,{})]})]})})}}]),n}(s.a);t.a=j},46:function(e){e.exports=JSON.parse('[{"id":1,"img":"assets/img/team/01.jpg","name":"Rosalina D. Willaimson","designation":"Founder & Ceo","shortdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.","longdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.","social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"www.domain.com/username"},{"icon":"fab fa-twitter","title":"Twitter","url":"www.domain.com/username"},{"icon":"fab fa-behance","title":"Behance","url":"www.domain.com/username"},{"icon":"fab fa-linkedin","title":"Linked In","url":"www.domain.com/username"},{"icon":"fab fa-youtube","title":"YouTube","url":"www.domain.com/username"}],"contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":["+(123) 456-7890 8","+987 868 6578 648"]},{"icon":"fas fa-envelope","title":"Email","text":["info@example.com","job@example.com"]},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":["24 Fifth st., New York, US"]}]},{"id":2,"img":"assets/img/team/02.jpg","name":"Hilixer D. Dilimmah","designation":"Founder & UX Designer","shortdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.","longdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.","social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"www.domain.com/username"},{"icon":"fab fa-twitter","title":"Twitter","url":"www.domain.com/username"},{"icon":"fab fa-behance","title":"Behance","url":"www.domain.com/username"},{"icon":"fab fa-linkedin","title":"Linked In","url":"www.domain.com/username"},{"icon":"fab fa-youtube","title":"YouTube","url":"www.domain.com/username"}],"contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":["+(123) 456-7890 8","+987 868 6578 648"]},{"icon":"fas fa-envelope","title":"Email","text":["info@example.com","job@example.com"]},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":["24 Fifth st., New York, US"]}]},{"id":3,"img":"assets/img/team/03.jpg","name":"Hilixer B. Browni","designation":"Co-founder","shortdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.","longdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.","social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"www.domain.com/username"},{"icon":"fab fa-twitter","title":"Twitter","url":"www.domain.com/username"},{"icon":"fab fa-behance","title":"Behance","url":"www.domain.com/username"},{"icon":"fab fa-linkedin","title":"Linked In","url":"www.domain.com/username"},{"icon":"fab fa-youtube","title":"YouTube","url":"www.domain.com/username"}],"contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":["+(123) 456-7890 8","+987 868 6578 648"]},{"icon":"fas fa-envelope","title":"Email","text":["info@example.com","job@example.com"]},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":["24 Fifth st., New York, US"]}]},{"id":4,"img":"assets/img/team/04.jpg","name":"Pokoloko K. Kilix","designation":"Manager","shortdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.","longdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.","social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"www.domain.com/username"},{"icon":"fab fa-twitter","title":"Twitter","url":"www.domain.com/username"},{"icon":"fab fa-behance","title":"Behance","url":"www.domain.com/username"},{"icon":"fab fa-linkedin","title":"Linked In","url":"www.domain.com/username"},{"icon":"fab fa-youtube","title":"YouTube","url":"www.domain.com/username"}],"contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":["+(123) 456-7890 8","+987 868 6578 648"]},{"icon":"fas fa-envelope","title":"Email","text":["info@example.com","job@example.com"]},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":["24 Fifth st., New York, US"]}]},{"id":5,"img":"assets/img/team/05.jpg","name":"Pokoloko K. Kilix","designation":"Manager","shortdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.","longdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.","social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"www.domain.com/username"},{"icon":"fab fa-twitter","title":"Twitter","url":"www.domain.com/username"},{"icon":"fab fa-behance","title":"Behance","url":"www.domain.com/username"},{"icon":"fab fa-linkedin","title":"Linked In","url":"www.domain.com/username"},{"icon":"fab fa-youtube","title":"YouTube","url":"www.domain.com/username"}],"contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":["+(123) 456-7890 8","+987 868 6578 648"]},{"icon":"fas fa-envelope","title":"Email","text":["info@example.com","job@example.com"]},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":["24 Fifth st., New York, US"]}]}]')},47:function(e,t,n){"use strict";var i=n(38),r=n(39),c=n(41),o=n(40),a=n(0),s=n(10),l=n(1),u=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("section",{className:"breadcrumb-section",style:{backgroundImage:"url(/dcwebtech/assets/img/breadcrumb.jpg)"},children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"breadcrumb-text",children:[Object(l.jsx)("h1",{children:this.props.breadcrumb.pagename}),Object(l.jsx)("p",{children:"Your Partner for Software Innovation"})]}),Object(l.jsxs)("ul",{className:"breadcrumb-nav",children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:this.props.breadcrumb.pagename})]}),Object(l.jsx)("span",{className:"btg-text",children:"onitir"})]}),Object(l.jsx)("div",{className:"breadcrumb-shape",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none",children:Object(l.jsx)("path",{d:"M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"})})})]})}}]),n}(a.Component);t.a=u},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var i=o(n(49)),r=o(n(50)),c=o(n(56));function o(e){return e&&e.__esModule?e:{default:e}}var a=r.default;t.default=a},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(0));function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=(0,i.createContext)({});t.MetaContext=u;var d=function(e){function t(){return c(this,t),a(this,s(t).apply(this,arguments))}var n,r,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return i.default.createElement(u.Provider,{value:{extract:this.props.extract}},i.Children.only(this.props.children))}}])&&o(n.prototype,r),d&&o(n,d),t}(i.Component);t.default=d},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(0)),c=(i=n(15))&&i.__esModule?i:{default:i},o=n(55),a=n(49);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return l(this,t),d(this,f(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&c.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);c.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var i=Array.prototype.slice.call(n.children),r=document.head,c=r.innerHTML;(i=(i=i.filter((function(e){return-1===c.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,o.getDuplicateTitle)();n&&(0,o.removeChild)(r,n)}else if(e.id){var i=(0,o.getDuplicateElementById)(e);i&&(0,o.removeChild)(r,i)}else if("meta"===t){var c=(0,o.getDuplicateMeta)(e);c&&(0,o.removeChild)(r,c)}else if("link"===t&&"canonical"===e.rel){var a=(0,o.getDuplicateCanonical)(e);a&&(0,o.removeChild)(r,a)}})),(0,o.appendChild)(document.head,i)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(n.prototype,i),a&&u(n,a),t}(r.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(b,"contextType",a.MetaContext);var j=b;t.default=j,e.exports=t.default},51:function(e){e.exports=JSON.parse('[{"id":1,"title":"Popular"},{"id":2,"title":"Design"},{"id":3,"title":"UX"},{"id":4,"title":"Usability"},{"id":5,"title":"Develope"},{"id":6,"title":"Icon"},{"id":7,"title":"Business"},{"id":8,"title":"Consult"},{"id":9,"title":"Kit"},{"id":10,"title":"Keyboard"},{"id":11,"title":"Mouse"},{"id":12,"title":"Technology"}]')},52:function(e,t,n){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return i}))},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,i=[],o=[];return e.forEach((function(e){var r=e.type,c=e.props;"title"===r?t=e:"link"===r&&"canonical"===c.rel?n=e:"meta"===r?i.push(e):o.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};c.forEach((function(e){t[e]=[]}));for(var n=[],i=function(i){var o=e[i],a=o.props.id;(a?!t.id[a]:0===r.filter((function(e){var n=o.props[e],i=t[e][n];return i&&!i.props.id})).length)&&(n.unshift(o),c.forEach((function(e){var n=o.props[e];n&&(t[e][n]=o)})))},o=e.length-1;o>=0;o--)i(o);return n}(i)),[n],o)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return i.reduce((function(n,i){var r,c=e.getAttribute(i);return c?n.concat((r=t.querySelectorAll("[".concat(i,' = "').concat(c,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),i=0,r=t.length;i<r;i++)n.appendChild(t[i]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,i=t.length;n<i;n++)e.removeChild(t[n])};var i=["property","name","itemprop"],r=i.concat(["itemProp"]),c=r.concat(["id"])},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(0)),c=(i=n(50))&&i.__esModule?i:{default:i};function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return a(this,t),l(this,u(t).apply(this,arguments))}var n,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){return r.default.createElement(c.default,null,r.default.createElement("title",null,this.props.title))}}])&&s(n.prototype,i),o&&s(n,o),t}(r.Component);t.default=f,e.exports=t.default},62:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l}));var i=n(54),r=n(65),c=n(51),o=n(46);function a(e){return r.filter((function(t){return e.includes(t.id)}))}function s(e){return c.filter((function(t){return e.includes(t.id)}))}function l(e){return o.filter((function(t){return e.includes(t.id)}))}function u(e){return i.filter((function(t){return t.id===parseInt(e)}))[0]}},80:function(e,t,n){"use strict";var i=n(38),r=n(39),c=n(41),o=n(40),a=n(0),s=n(10),l=n(1),u=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"cta-inner",children:[Object(l.jsx)("div",{className:"cat-img",children:Object(l.jsx)("div",{className:"cat-shape shape-two",children:Object(l.jsx)("img",{src:"/dcwebtech/assets/img/cta/cta-img-2.png",alt:"img"})})}),Object(l.jsx)("div",{className:"cta-text diff-bg",children:Object(l.jsxs)("div",{className:"row align-items-center justify-content-end",children:[Object(l.jsx)("div",{className:"col-lg-6 col-md-7 col-sm-10",children:Object(l.jsxs)("div",{className:"section-title pl-30 left-border",children:[Object(l.jsx)("span",{className:"title-tag",children:"need consultation"}),Object(l.jsx)("h2",{children:"We are here for your estimate price."})]})}),Object(l.jsx)("div",{className:"col-xl-3 col-lg-2 col-md-2 col-sm-2",children:Object(l.jsx)("div",{className:"link-wrap text-center",children:Object(l.jsx)(s.b,{to:"/contact",className:"cat-link",children:Object(l.jsx)("i",{className:"fal fa-long-arrow-right"})})})})]})})]})})}}]),n}(a.Component);t.a=u}}]);
//# sourceMappingURL=12.e83128fe.chunk.js.map