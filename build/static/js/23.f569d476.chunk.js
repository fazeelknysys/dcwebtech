(this.webpackJsonponitir=this.webpackJsonponitir||[]).push([[23],{115:function(e,t,i){"use strict";var s=i(38),c=i(39),n=i(41),a=i(40),l=i(0),o=i(1),r=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(e){var c;return Object(s.a)(this,i),(c=t.call(this,e)).state={name:"",phone:"",email:"",subject:"",message:""},c}return Object(c.a)(i,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onPhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://www.metropolitanhost.com/scripts/sendmail.php",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){""!==e.id?(alert("Message Sent."),t.resetForm()):alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",phone:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return Object(o.jsx)(l.Fragment,{})}}]),i}(l.Component);t.a=r},116:function(e){e.exports=JSON.parse('[{"id":1,"icon":"pe-7s-diamond","title":"IT Design","para":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."},{"id":2,"icon":"pe-7s-arc","title":"IT management","para":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."},{"id":3,"icon":"pe-7s-refresh-2","title":"IT Security","para":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."},{"id":4,"icon":"pe-7s-world","title":"Data Security","para":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."},{"id":5,"icon":"pe-7s-target","title":"Business Reform","para":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."},{"id":6,"icon":"pe-7s-science","title":"Firewall advance","para":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."},{"id":7,"icon":"pe-7s-joy","title":"Game develop","para":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."},{"id":8,"icon":"pe-7s-help2","title":"IT Support","para":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."}]')},292:function(e){e.exports=JSON.parse('[{"id":1,"title":"We Create <span>Perfect</span> Brand Goods <span>Value</span>"},{"id":2,"title":"We Create <span>Perfect</span> Brand Goods <span>Value</span>"},{"id":3,"title":"We Create <span>Perfect</span> Brand Goods <span>Value</span>"}]')},308:function(e,t,i){"use strict";i.r(t);var s=i(38),c=i(39),n=i(41),a=i(40),l=i(0),o=i(48),r=i.n(o),d=i(45),j=i(43),m=i(1),b=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{className:"about-section about-style-three pt-120 pb-120",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row align-items-center justify-content-center",children:[Object(m.jsx)("div",{className:"col-lg-6 col-md-10",children:Object(m.jsxs)("div",{className:"about-text pr-30",children:[Object(m.jsxs)("div",{className:"section-title left-border mb-40",children:[Object(m.jsx)("span",{className:"title-tag",children:"About us"}),Object(m.jsx)("h2",{children:"Onitir help businesses elevate their value."})]}),Object(m.jsx)("p",{children:"Over the years, a wide range of developments and innovations in the global IT arena have led to many new IT-enabled devices and services being produced. Moreover, there is need for IT today, not just in urban areas but rural regions as well."}),Object(m.jsx)("div",{className:"experience-tag mt-40",children:Object(m.jsx)("img",{src:"/dcwebtech/assets/img/experience-tag.png",alt:"img"})})]})}),Object(m.jsx)("div",{className:"col-lg-6 col-md-10 order-first order-lg-last",children:Object(m.jsx)("div",{className:"about-img",children:Object(m.jsx)("img",{src:"/dcwebtech/assets/img/about/about-2.jpg",alt:"img"})})})]})})})}}]),i}(l.Component),h=i(4),u=i(10),x=i(53),O=i.n(x),p=i(292);function f(e){var t=e.onClick;return Object(m.jsx)("div",{className:"slick-arrow next-arrow",onClick:t,children:Object(m.jsxs)("span",{children:["Next",Object(m.jsx)("i",{className:"fal fa-long-arrow-right"})]})})}function g(e){var t=e.onClick;return Object(m.jsx)("div",{className:"slick-arrow prev-arrow",onClick:t,children:Object(m.jsxs)("span",{children:[Object(m.jsx)("i",{className:"fal fa-long-arrow-left"}),"Prev"]})})}var v=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e={infinite:!0,autoplay:!0,autoplaySpeed:5e3,dots:!1,fade:!0,arrows:!0,prevArrow:Object(m.jsx)(g,{}),nextArrow:Object(m.jsx)(f,{}),responsive:[{breakpoint:768,settings:{arrows:!1}}]};return Object(m.jsxs)("section",{className:"banner-section banner-style-three banner-slider-two",style:{backgroundImage:"url(/dcwebtech/assets/img/banner/02.jpg)"},children:[Object(m.jsx)(O.a,Object(h.a)(Object(h.a)({},e),{},{className:"slider-active",id:"bannerSliderTwo",children:p.map((function(e,t){return Object(m.jsx)("div",{className:"single-banner",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-lg-8",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)("h1",{dangerouslySetInnerHTML:{__html:e.title}}),Object(m.jsxs)("div",{className:"btn-wrap",children:[Object(m.jsx)(u.b,{to:"/contact",className:"main-btn btn-filled",children:"Get Started Now"}),Object(m.jsx)(u.b,{to:"/about",className:"main-btn btn-borderd",children:"Learn More"})]})]})})})})},t)}))})),Object(m.jsx)("div",{className:"banner-shape-three",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none",children:Object(m.jsx)("path",{d:"M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"})})})]})}}]),i}(l.Component),N=i(78),w=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"clinet-section",children:Object(m.jsx)("div",{className:"container-fluid custom-width-three",children:Object(m.jsx)(O.a,Object(h.a)(Object(h.a)({},{infinite:!0,autoplay:!1,arrows:!1,dots:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}},{breakpoint:400,settings:{slidesToShow:1}}]}),{},{className:"clinet-slider",children:N.map((function(e,t){return Object(m.jsx)("div",{className:"clinet-item",children:Object(m.jsx)(u.b,{to:"#",children:Object(m.jsx)("img",{src:"/dcwebtech/"+e.image,alt:e.companyname})})},t)}))}))})})}}]),i}(l.Component),y=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-lg-6 col-md-7 col-sm-7",children:Object(m.jsxs)("div",{className:"section-title left-border",children:[Object(m.jsx)("span",{className:"title-tag",children:"Get In Touch"}),Object(m.jsx)("h2",{children:"Get Catch us from here. right now"})]})}),Object(m.jsx)("div",{className:"col-lg-6 col-md-5 col-sm-5 d-none d-sm-block",children:Object(m.jsx)("div",{className:"contact-page-link text-right",children:Object(m.jsx)(u.b,{to:"/contact",className:"main-btn btn-filled",children:"get direction"})})})]}),Object(m.jsx)("div",{className:"contact-form-wrapper mt-80 mb-110",children:Object(m.jsxs)("div",{className:"row no-gutters align-items-center align-items-lg-start justify-content-center",children:[Object(m.jsx)("div",{className:"col-lg-5 col-md-5",children:Object(m.jsxs)("div",{className:"contact-info-list",children:[Object(m.jsxs)("div",{className:"info-box",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("i",{className:"pe-7s-home"})}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h4",{children:"Office Address"}),Object(m.jsxs)("p",{children:["19/A, Cirikon City hall Tower ",Object(m.jsx)("br",{})," New York, NYC"]})]})]}),Object(m.jsxs)("div",{className:"info-box",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("i",{className:"pe-7s-call"})}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h4",{children:"Phone Number"}),Object(m.jsxs)("p",{children:["+987 876 7765 76 519 ",Object(m.jsx)("br",{})," 987 (876) 76 78 89 9"]})]})]}),Object(m.jsxs)("div",{className:"info-box",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("i",{className:"pe-7s-comment"})}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h4",{children:"Email address"}),Object(m.jsxs)("p",{children:["info@example.com ",Object(m.jsx)("br",{})," jobs.example@example.com"]})]})]})]})}),Object(m.jsx)("div",{className:"col-lg-7 col-md-7",children:Object(m.jsx)("div",{className:"contact-form",children:Object(m.jsx)("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST",children:Object(m.jsxs)("div",{className:"row padding-custom",children:[Object(m.jsx)("div",{className:"col-12 col-lg-6",children:Object(m.jsxs)("div",{className:"input-group mb-10",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("i",{className:"fal fa-user"})}),Object(m.jsx)("input",{type:"text",placeholder:"Your Full name",name:"name",value:this.state.name,onChange:this.onNameChange.bind(this),required:!0})]})}),Object(m.jsx)("div",{className:"col-12 col-lg-6",children:Object(m.jsxs)("div",{className:"input-group mb-10",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("i",{className:"fal fa-phone"})}),Object(m.jsx)("input",{type:"text",placeholder:"Your Phone",name:"phone",value:this.state.phone,onChange:this.onPhoneChange.bind(this),required:!0})]})}),Object(m.jsx)("div",{className:"col-12 col-lg-6",children:Object(m.jsxs)("div",{className:"input-group mb-10",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("i",{className:"fal fa-envelope"})}),Object(m.jsx)("input",{type:"email",placeholder:"Your email",name:"email",value:this.state.email,onChange:this.onEmailChange.bind(this),required:!0})]})}),Object(m.jsx)("div",{className:"col-12 col-lg-6",children:Object(m.jsxs)("div",{className:"input-group mb-10",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("i",{className:"fal fa-list"})}),Object(m.jsx)("input",{type:"text",placeholder:"Your Subject",name:"subject",value:this.state.subject,onChange:this.onSubjectChange.bind(this),required:!0})]})}),Object(m.jsx)("div",{className:"col-12",children:Object(m.jsxs)("div",{className:"input-group textarea mb-10",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("i",{className:"fal fa-edit"})}),Object(m.jsx)("textarea",{placeholder:"Enter message",name:"message",value:this.state.message,onChange:this.onMessageChange.bind(this),required:!0})]})}),Object(m.jsx)("div",{className:"col-12 text-center",children:Object(m.jsx)("button",{type:"submit",className:"main-btn btn-filled",children:"Get A QUote"})})]})})})})]})})]})}}]),i}(i(115).a),k=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{className:"call-to-action cta-style-two",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"cta-inner",children:[Object(m.jsx)("div",{className:"cat-img",children:Object(m.jsx)("div",{className:"cat-shape shape-two",children:Object(m.jsx)("img",{src:"/dcwebtech/assets/img/cta/cta-img-2.png",alt:"img"})})}),Object(m.jsx)("div",{className:"cta-text diff-bg",children:Object(m.jsxs)("div",{className:"row align-items-center justify-content-end",children:[Object(m.jsx)("div",{className:"col-lg-6 col-md-7 col-sm-10",children:Object(m.jsxs)("div",{className:"section-title pl-30 left-border",children:[Object(m.jsx)("span",{className:"title-tag",children:"need consultation"}),Object(m.jsx)("h2",{children:"We are here for your estimate price."})]})}),Object(m.jsx)("div",{className:"col-xl-3 col-lg-2 col-md-2 col-sm-2",children:Object(m.jsx)("div",{className:"link-wrap text-center",children:Object(m.jsx)(u.b,{to:"/contact",className:"cat-link",children:Object(m.jsx)("i",{className:"fal fa-long-arrow-right"})})})})]})})]})})})}}]),i}(l.Component),C=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{className:"services-secton featured-service mt-negative",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"services-loop",children:Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-10",children:Object(m.jsxs)("div",{className:"single-service text-center white-bg mt-60",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("img",{src:"/dcwebtech/assets/img/services/icon-1.png",alt:"icon"})}),Object(m.jsx)("h4",{children:"Date Research Analysis"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore."}),Object(m.jsx)(u.b,{to:"/services",className:"service-link",children:"Read More"})]})}),Object(m.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-10",children:Object(m.jsxs)("div",{className:"single-service text-center secondary-bg doted mt-60",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("img",{src:"/dcwebtech/assets/img/services/icon-2.png",alt:"icon"})}),Object(m.jsx)("h4",{children:"Date Research Analysis"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore."}),Object(m.jsx)(u.b,{to:"/services",className:"service-link",children:"Read More"})]})}),Object(m.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-10",children:Object(m.jsxs)("div",{className:"single-service text-center primary-bg mt-60",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("img",{src:"/dcwebtech/assets/img/services/icon-3.png",alt:"icon"})}),Object(m.jsx)("h4",{children:"Maintainance & Data sent"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore."}),Object(m.jsx)(u.b,{to:"/services",className:"service-link",children:"Read More"})]})})]})})})})}}]),i}(l.Component),T=i(54),S=i(62),L=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{className:"portfolio-slider-section pt-120 pb-120",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)(O.a,Object(h.a)(Object(h.a)({},{infinite:!0,autoplay:!1,arrows:!1,dots:!1,slidesToShow:1,slidesToScroll:1,centerMode:!0,speed:900,centerPadding:"25%",responsive:[{breakpoint:1200,settings:{centerPadding:"20%"}},{breakpoint:768,settings:{centerPadding:"10%"}},{breakpoint:576,settings:{centerPadding:"5%"}},{breakpoint:400,settings:{centerPadding:"0"}}]}),{},{className:"row portfolio-slider-loop portfolio-slider",children:T.map((function(e,t){return Object(m.jsx)("div",{className:"col-12",children:Object(m.jsxs)("div",{className:"portfolio-box",children:[Object(m.jsx)("div",{className:"portfolio-img-wrap",children:Object(m.jsx)("div",{className:"portfolio-img",style:{backgroundImage:"url(/dcwebtech/"+e.slideimg+")"}})}),Object(m.jsxs)("div",{className:"portfolio-desc",children:[Object(S.a)(e.category).slice(0,1).map((function(e,t){return Object(m.jsx)("span",{className:"portfolio-cat",children:e.title},t)})),Object(m.jsx)("h2",{children:Object(m.jsx)(u.b,{to:"/portfolio-details/"+e.id,children:e.title})}),Object(m.jsx)(u.b,{to:"/portfolio-details/"+e.id,className:"portfolio-link",children:Object(m.jsx)("i",{className:"fal fa-arrow-right"})})]})]})},t)}))}))})})}}]),i}(l.Component),I=i(116),P=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{className:"services-secton services-secton-two pt-120 pb-120",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row align-items-center justify-content-between",children:[Object(m.jsx)("div",{className:"col-lg-5 col-md-8 col-sm-7",children:Object(m.jsxs)("div",{className:"section-title left-border",children:[Object(m.jsx)("span",{className:"title-tag",children:"our services"}),Object(m.jsx)("h2",{children:"see what we do here with good passions"})]})}),Object(m.jsx)("div",{className:"col-lg-6 col-md-4 col-sm-5 d-none d-sm-block",children:Object(m.jsx)("div",{className:"service-page-link- text-right",children:Object(m.jsx)(u.b,{to:"/services",className:"main-btn btn-filled",children:"learn more"})})})]}),Object(m.jsx)("div",{className:"services-loop mt-50",children:Object(m.jsx)("div",{className:"row justify-content-center",children:I.slice(0,8).map((function(e,t){return Object(m.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6",children:Object(m.jsxs)("div",{className:"single-service-two",children:[Object(m.jsx)("div",{className:"top-icon",children:Object(m.jsx)("i",{className:"fal fa-long-arrow-right"})}),Object(m.jsx)("h4",{children:e.title}),Object(m.jsx)("p",{children:e.para}),Object(m.jsx)("div",{className:"bottom-icon",children:Object(m.jsx)("i",{className:e.icon})})]})},t)}))})})]})})}}]),i}(l.Component),F=i(46),M=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{className:"team-section pt-120 pb-90",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"section-title both-border text-center mb-80",children:[Object(m.jsx)("span",{className:"title-tag",children:"Team"}),Object(m.jsx)("h2",{children:"Our Team Members"})]}),Object(m.jsx)(O.a,Object(h.a)(Object(h.a)({},{infinite:!0,autoplay:!1,arrows:!1,dots:!1,slidesToShow:3,slidesToScroll:2,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),{},{className:"row team-loop team-slider-two",children:F.map((function(e,t){return Object(m.jsx)("div",{className:"col-12",children:Object(m.jsxs)("div",{className:"member-box",children:[Object(m.jsx)("div",{className:"member-img",children:Object(m.jsx)("img",{src:"/dcwebtech/"+e.img,alt:e.name})}),Object(m.jsxs)("div",{className:"member-info",children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("span",{children:e.designation})]}),Object(m.jsx)(u.b,{to:"/team-details/"+e.id,className:"socail-trigger",children:"+"})]})},t)}))}))]})})}}]),i}(l.Component),A=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{className:"video-section video-style-two",style:{backgroundImage:"url(/dcwebtech/assets/img/video-bg-2.jpg)"},children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-xl-6 col-lg-8 col-md-10",children:Object(m.jsxs)("div",{className:"video-text text-center",children:[Object(m.jsx)("div",{className:"video-link-two",children:Object(m.jsx)("a",{rel:"external",href:"https://www.youtube.com/watch?v=TKnufs85hXk",className:"popup-video",children:Object(m.jsx)("i",{className:"fas fa-play"})})}),Object(m.jsx)("p",{children:"These values give us the foundations we need"}),Object(m.jsx)("h1",{children:"our values is only hard working"})]})})})})})}}]),i}(l.Component),D=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsxs)(l.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(C,{}),Object(m.jsx)(b,{}),Object(m.jsx)(P,{}),Object(m.jsx)(L,{}),Object(m.jsx)(k,{}),Object(m.jsx)(M,{}),Object(m.jsx)(A,{}),Object(m.jsxs)("section",{className:"contact-section pt-110 pb-110",children:[Object(m.jsx)(y,{}),Object(m.jsx)(w,{})]})]})}}]),i}(l.Component),B=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(m.jsxs)(l.Fragment,{children:[Object(m.jsxs)(r.a,{children:[Object(m.jsxs)("title",{children:["Onitir - React Template | ","Homepage"]}),Object(m.jsx)("meta",{name:"description",content:"#"})]}),Object(m.jsx)(d.a,{}),Object(m.jsx)(D,{}),Object(m.jsx)(j.a,{footer:{style:"footer-style-three",logo:"assets/img/logo.png"}})]})}}]),i}(l.Component);t.default=B},43:function(e,t,i){"use strict";var s=i(38),c=i(39),n=i(41),a=i(40),l=i(0),o=i(10),r=i(61),d=i(44),j=i(1),m=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(j.jsxs)(l.Fragment,{children:[Object(j.jsx)(r.a,{}),Object(j.jsxs)("footer",{className:this.props.footer.style,children:[Object(j.jsx)("div",{className:"footer-top",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row align-items-center",children:[Object(j.jsx)("div",{className:"col-sm-4",children:Object(j.jsx)("div",{className:"logo text-center text-sm-left",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("img",{src:"/dcwebtech/"+this.props.footer.logo,alt:"logo"})})})}),Object(j.jsx)("div",{className:"col-sm-8",children:Object(j.jsxs)("div",{className:"social-icon text-center text-sm-right",children:[Object(j.jsx)(o.b,{to:"#",children:Object(j.jsx)("i",{className:"fab fa-facebook-f"})}),Object(j.jsx)(o.b,{to:"#",children:Object(j.jsx)("i",{className:"fab fa-twitter"})}),Object(j.jsx)(o.b,{to:"#",children:Object(j.jsx)("i",{className:"fab fa-behance"})}),Object(j.jsx)(o.b,{to:"#",children:Object(j.jsx)("i",{className:"fab fa-linkedin"})}),Object(j.jsx)(o.b,{to:"#",children:Object(j.jsx)("i",{className:"fab fa-youtube"})})]})})]})})}),Object(j.jsx)("div",{className:"footer-widget-area",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-2 col-md-6 col-sm-6",children:Object(j.jsx)("div",{className:"widget nav-widget d-flex justify-content-start",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h5",{className:"widget-title",children:"Company"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Leadership"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Blog"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Careers"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Partners"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Referral Program"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Press"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Legal"})})]})]})})}),Object(j.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6",children:Object(j.jsx)("div",{className:"widget nav-widget d-flex justify-content-start justify-content-lg-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h5",{className:"widget-title",children:"Community"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Tutorials"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Meetups"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Q&A"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Write for DOnations"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Droplets for Demos"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Hatch Startup Program"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Shop Swag"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Research Program"})})]})]})})}),Object(j.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6",children:Object(j.jsx)("div",{className:"widget nav-widget d-flex justify-content-start justify-content-lg-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h5",{className:"widget-title",children:"Solutions"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Web & Mobile Apps"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Website Hosting"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Big Data"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Managed Services"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Business Solutions"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Research Program"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Currents Research"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"#",children:"Open Source"})})]})]})})}),Object(j.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:Object(j.jsx)("div",{className:"widget recent-post",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h5",{className:"widget-title",children:"news feeds"}),Object(j.jsx)("div",{className:"post-loop",children:d.slice(0,3).map((function(e,t){return Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("div",{className:"post-img",children:Object(j.jsx)("img",{src:"/dcwebtech/"+e.image[0],alt:e.title})}),Object(j.jsxs)("div",{className:"post-desc",children:[Object(j.jsxs)("span",{className:"time",children:[Object(j.jsx)("i",{className:"fal fa-calendar-alt"})," ",e.postdate]}),Object(j.jsx)("h5",{children:Object(j.jsx)(o.b,{to:"/blog-details/"+e.id,children:e.title})})]})]},t)}))})]})})})]})})}),Object(j.jsx)("div",{className:"copy-right-area",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"copyrigt-text d-sm-flex justify-content-between",children:[Object(j.jsxs)("p",{children:["Copyright By@",Object(j.jsx)(o.b,{to:"#",children:"Yourweb"})," - 2021"]}),Object(j.jsxs)("p",{children:["Design By@",Object(j.jsx)(o.b,{to:"#",children:"Yourweb"})," - 2021"]})]})})})]})]})}}]),i}(l.Component);t.a=m},45:function(e,t,i){"use strict";var s=i(38),c=i(39),n=i(41),a=i(40),l=(i(0),i(10)),o=i(57),r=i(58),d=i(42),j=i.n(d),m=i(59),b=i(60),h=i(1),u=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e=this,t=this.state.isTop?"sticky":"";return Object(h.jsx)("header",{className:"header-absolute header-three sticky-header "+t,id:"can-sticky",children:Object(h.jsxs)("div",{className:"container-fluid custom-container-two",children:[Object(h.jsx)("div",{className:"mainmenu-area",children:Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(h.jsxs)("nav",{className:"main-menu",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsxs)(l.b,{to:"/",children:[Object(h.jsx)("img",{src:"/dcwebtech/assets/img/logo-white.png",alt:"logo",className:"normal-logo"}),Object(h.jsx)("img",{src:"/dcwebtech/assets/img/logo.png",alt:"logo",className:"sticky-logo"})]})}),Object(h.jsx)("div",{className:"menu-items",children:Object(h.jsx)("ul",{children:r.length>0?r.map((function(t,i){return Object(h.jsxs)("li",{className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild,children:[t.child?Object(h.jsxs)(l.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",t.linkText," "]}):Object(h.jsxs)(l.b,{to:t.link,children:[" ",t.linkText," "]}),t.child?Object(h.jsx)("ul",{className:"submenu",role:"menu",children:t.submenu.map((function(e,t){return Object(h.jsxs)("li",{className:"menu-item ".concat(e.child?"menu-item-has-children":""," "),children:[e.child?Object(h.jsxs)(l.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",e.linkText," "]}):Object(h.jsxs)(l.b,{to:e.link,children:[" ",e.linkText," "]}),e.submenu?Object(h.jsx)("ul",{className:"submenu",children:e.submenu.map((function(e,t){return Object(h.jsx)("li",{className:"menu-item",children:Object(h.jsx)(l.b,{to:e.link,children:e.linkText})},t)}))}):null]},t)}))}):null]},i)})):null})})]}),Object(h.jsxs)("div",{className:"main-right",children:[Object(h.jsx)(l.b,{to:"/contact",className:"main-btn btn-filled",children:"Get A Quote"}),Object(h.jsx)(l.b,{to:"#",className:"offcanvas-trigger",onClick:this.canvasToggle,children:Object(h.jsx)("i",{className:"far fa-ellipsis-v"})}),Object(h.jsxs)("div",{className:j()("off-canvas-wrap",{"show-off-canvas":this.state.canvasmethod}),children:[Object(h.jsx)("div",{className:j()("overly",{"show-overly":this.state.canvasmethod}),onClick:this.canvasToggle}),Object(h.jsxs)("div",{className:"off-canvas-widget",children:[Object(h.jsx)(l.b,{to:"#",className:"off-canvas-close",onClick:this.canvasToggle,children:Object(h.jsx)("i",{className:"fal fa-times"})}),Object(h.jsx)(m.a,{})]})]})]}),Object(h.jsx)("div",{className:j()("hamburgerbtn",{active:this.state.navToggle}),onClick:this.toggleNav,children:Object(h.jsxs)("div",{className:"menubtn",children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]})})]})}),Object(h.jsxs)("div",{className:j()("mobile-menu",{open:this.state.navToggle}),children:[Object(h.jsx)("button",{className:"close-nav",onClick:this.toggleNav,children:"X"}),Object(h.jsx)(b.a,{})]})]})})}}]),i}(o.a);t.a=u},46:function(e){e.exports=JSON.parse('[{"id":1,"img":"assets/img/team/01.jpg","name":"Rosalina D. Willaimson","designation":"Founder & Ceo","shortdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.","longdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.","social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"www.domain.com/username"},{"icon":"fab fa-twitter","title":"Twitter","url":"www.domain.com/username"},{"icon":"fab fa-behance","title":"Behance","url":"www.domain.com/username"},{"icon":"fab fa-linkedin","title":"Linked In","url":"www.domain.com/username"},{"icon":"fab fa-youtube","title":"YouTube","url":"www.domain.com/username"}],"contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":["+(123) 456-7890 8","+987 868 6578 648"]},{"icon":"fas fa-envelope","title":"Email","text":["info@example.com","job@example.com"]},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":["24 Fifth st., New York, US"]}]},{"id":2,"img":"assets/img/team/02.jpg","name":"Hilixer D. Dilimmah","designation":"Founder & UX Designer","shortdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.","longdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.","social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"www.domain.com/username"},{"icon":"fab fa-twitter","title":"Twitter","url":"www.domain.com/username"},{"icon":"fab fa-behance","title":"Behance","url":"www.domain.com/username"},{"icon":"fab fa-linkedin","title":"Linked In","url":"www.domain.com/username"},{"icon":"fab fa-youtube","title":"YouTube","url":"www.domain.com/username"}],"contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":["+(123) 456-7890 8","+987 868 6578 648"]},{"icon":"fas fa-envelope","title":"Email","text":["info@example.com","job@example.com"]},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":["24 Fifth st., New York, US"]}]},{"id":3,"img":"assets/img/team/03.jpg","name":"Hilixer B. Browni","designation":"Co-founder","shortdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.","longdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.","social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"www.domain.com/username"},{"icon":"fab fa-twitter","title":"Twitter","url":"www.domain.com/username"},{"icon":"fab fa-behance","title":"Behance","url":"www.domain.com/username"},{"icon":"fab fa-linkedin","title":"Linked In","url":"www.domain.com/username"},{"icon":"fab fa-youtube","title":"YouTube","url":"www.domain.com/username"}],"contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":["+(123) 456-7890 8","+987 868 6578 648"]},{"icon":"fas fa-envelope","title":"Email","text":["info@example.com","job@example.com"]},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":["24 Fifth st., New York, US"]}]},{"id":4,"img":"assets/img/team/04.jpg","name":"Pokoloko K. Kilix","designation":"Manager","shortdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.","longdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.","social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"www.domain.com/username"},{"icon":"fab fa-twitter","title":"Twitter","url":"www.domain.com/username"},{"icon":"fab fa-behance","title":"Behance","url":"www.domain.com/username"},{"icon":"fab fa-linkedin","title":"Linked In","url":"www.domain.com/username"},{"icon":"fab fa-youtube","title":"YouTube","url":"www.domain.com/username"}],"contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":["+(123) 456-7890 8","+987 868 6578 648"]},{"icon":"fas fa-envelope","title":"Email","text":["info@example.com","job@example.com"]},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":["24 Fifth st., New York, US"]}]},{"id":5,"img":"assets/img/team/05.jpg","name":"Pokoloko K. Kilix","designation":"Manager","shortdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.","longdescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.","social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"www.domain.com/username"},{"icon":"fab fa-twitter","title":"Twitter","url":"www.domain.com/username"},{"icon":"fab fa-behance","title":"Behance","url":"www.domain.com/username"},{"icon":"fab fa-linkedin","title":"Linked In","url":"www.domain.com/username"},{"icon":"fab fa-youtube","title":"YouTube","url":"www.domain.com/username"}],"contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":["+(123) 456-7890 8","+987 868 6578 648"]},{"icon":"fas fa-envelope","title":"Email","text":["info@example.com","job@example.com"]},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":["24 Fifth st., New York, US"]}]}]')},51:function(e){e.exports=JSON.parse('[{"id":1,"title":"Popular"},{"id":2,"title":"Design"},{"id":3,"title":"UX"},{"id":4,"title":"Usability"},{"id":5,"title":"Develope"},{"id":6,"title":"Icon"},{"id":7,"title":"Business"},{"id":8,"title":"Consult"},{"id":9,"title":"Kit"},{"id":10,"title":"Keyboard"},{"id":11,"title":"Mouse"},{"id":12,"title":"Technology"}]')},62:function(e,t,i){"use strict";i.d(t,"c",(function(){return d})),i.d(t,"a",(function(){return l})),i.d(t,"d",(function(){return o})),i.d(t,"b",(function(){return r}));var s=i(54),c=i(65),n=i(51),a=i(46);function l(e){return c.filter((function(t){return e.includes(t.id)}))}function o(e){return n.filter((function(t){return e.includes(t.id)}))}function r(e){return a.filter((function(t){return e.includes(t.id)}))}function d(e){return s.filter((function(t){return t.id===parseInt(e)}))[0]}},78:function(e){e.exports=JSON.parse('[{"id":1,"image":"assets/img/brand/01.png","companyname":"Lorem Ipsum"},{"id":2,"image":"assets/img/brand/02.png","companyname":"Lorem Ipsum"},{"id":3,"image":"assets/img/brand/03.png","companyname":"Lorem Ipsum"},{"id":4,"image":"assets/img/brand/04.png","companyname":"Lorem Ipsum"},{"id":5,"image":"assets/img/brand/05.png","companyname":"Lorem Ipsum"}]')}}]);
//# sourceMappingURL=23.f569d476.chunk.js.map