(function(e){function t(t){for(var n,s,l=t[0],r=t[1],o=t[2],d=0,g=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&g.push(c[s][0]),c[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(g.length)g.shift()();return a.push.apply(a,o||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,l=1;l<i.length;l++){var r=i[l];0!==c[r]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},c={app:0},a=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=r;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0f1a":function(e,t,i){e.exports=i.p+"img/image8.93a8c6c7.jpg"},"110c":function(e,t,i){e.exports=i.p+"img/image9.8bec2d42.jpg"},1530:function(e,t,i){e.exports=i.p+"img/image17.1ad14c21.jpg"},1641:function(e,t,i){e.exports=i.p+"img/image12.305e610d.jpg"},"1d34":function(e,t,i){e.exports=i.p+"img/socials.79fbd15d.svg"},2670:function(e,t,i){e.exports=i.p+"img/image14.5f21fc5b.jpg"},"2e13":function(e,t,i){},"37ff":function(e,t,i){e.exports=i.p+"img/image15.73a835e3.jpg"},"384c":function(e,t,i){e.exports=i.p+"img/image11.0bca3e24.jpg"},"3f91":function(e,t,i){e.exports=i.p+"img/image13.4d2f1c50.jpg"},"409b":function(e,t,i){e.exports=i.p+"img/image2.e7d356db.jpg"},"41d5":function(e,t,i){e.exports=i.p+"img/image18.4c186388.jpg"},5208:function(e,t,i){},5350:function(e,t,i){e.exports=i.p+"img/image5.05e543bc.jpg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),c={"data-scroll":""},a={"data-scroll-content":"",ref:"mainContent"};function s(e,t,i,s,l,r){var o=Object(n["r"])("preloader"),u=Object(n["r"])("Hero"),d=Object(n["r"])("FirstGallery"),g=Object(n["r"])("About"),b=Object(n["r"])("SecondGallery"),m=Object(n["r"])("Info"),f=Object(n["r"])("ThirdGallery"),v=Object(n["r"])("ContactSection");return Object(n["l"])(),Object(n["e"])("div",c,[Object(n["i"])("div",a,[Object(n["i"])(o),Object(n["i"])(u),Object(n["i"])(d),Object(n["i"])(g),Object(n["i"])(b),Object(n["i"])(m),Object(n["i"])(f),Object(n["i"])(v)],512)])}var l={class:"preloader",ref:"preloader"},r={key:0},o={class:"progress-bar"};function u(e,t,i,c,a,s){return Object(n["l"])(),Object(n["e"])("div",l,[a.loadingPercent<100?(Object(n["l"])(),Object(n["e"])("div",r,[Object(n["i"])("div",o,[Object(n["i"])("div",{class:"fill",style:{width:s.loaded}},Object(n["s"])(s.loaded),5)])])):Object(n["f"])("",!0)],512)}var d={data:function(){return{loadingPercent:0,loadTime:0,interval:null}},created:function(){var e=window.performance.timing,t=Math.abs(e.loadEventEnd-e.navigationStart);this.loadTime=100*parseInt(t/1e3%60),this.doProgress(),this.removeScrolling()},methods:{doProgress:function(){var e=this,t=this.loadTime/100;this.interval=setInterval((function(){e.loadingPercent++}),t)},removeScrolling:function(){var e=document.body;e.classList.add("loading")}},computed:{loaded:function(){return this.loadingPercent+"%"}},watch:{loadingPercent:function(e){if(e>=100){var t=document.body;t.classList.remove("loading"),this.gsap.to(".preloader",{yPercent:-100,duration:1}),clearInterval(this.interval)}}}};i("87dd");d.render=u;var g=d,b=Object(n["x"])("data-v-e8bcef74");Object(n["n"])("data-v-e8bcef74");var m={class:"hero"},f=Object(n["i"])("h2",{class:"hero-subtitle"},"Photographer, Videographer",-1),v=Object(n["i"])("h1",{class:"hero-title"},"Matthias Weiss",-1),p=Object(n["i"])("div",{class:"pagination"},"01",-1);Object(n["m"])();var j=b((function(e,t,i,c,a,s){return Object(n["l"])(),Object(n["e"])("section",m,[f,v,p])})),h={name:"Hero"};h.render=j,h.__scopeId="data-v-e8bcef74";var O=h,y=Object(n["x"])("data-v-995ed2c4");Object(n["n"])("data-v-995ed2c4");var k={class:"tiles tiles-rotated"},x={class:"tiles-wrap"},_={class:"tiles-line first-gallery__odd"},w={class:"tiles-line first-gallery__even"},P={class:"tiles-line first-gallery__odd"},S={class:"tiles-line first-gallery__even"},C={class:"tiles-line first-gallery__odd"};Object(n["m"])();var T=y((function(e,t,c,a,s,l){return Object(n["l"])(),Object(n["e"])("section",k,[Object(n["i"])("div",x,[Object(n["i"])("div",_,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("bae9")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("409b")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("7f72")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("714c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("5350")+")"}},null,4)]),Object(n["i"])("div",w,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("b8cb")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("5a92")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("0f1a")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("110c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("7a2e")+")"}},null,4)]),Object(n["i"])("div",P,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("384c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("1641")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("3f91")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("2670")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("37ff")+")"}},null,4)]),Object(n["i"])("div",S,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("d682")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("1530")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("41d5")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("945c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("c11f")+")"}},null,4)]),Object(n["i"])("div",C,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("bae9")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("409b")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("7f72")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("714c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("5350")+")"}},null,4)])])])})),I={name:"FirstGallery",mounted:function(){var e=this.gsap.timeline({scrollTrigger:{trigger:".tiles",start:"top bottom",end:"bottom",scrub:1}});e.to(".first-gallery__odd",{xPercent:10},0),e.to(".first-gallery__even",{xPercent:-10},0)}};I.render=T,I.__scopeId="data-v-995ed2c4";var E=I,M=Object(n["x"])("data-v-5cc7da64");Object(n["n"])("data-v-5cc7da64");var q={class:"about"},L=Object(n["i"])("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem at pulvinar lobortis. Nullam dapibus porta erat volutpat varius. Etiam sed sem sed ipsum dignissim iaculis porta sit amet mauris. Maecenas posuere leo eu pharetra mattis. Mauris sodales vulputate ultricies. Aliquam sollicitudin ex nec ex aliquam, id vehicula risus hendrerit. Donec iaculis, velit eu scelerisque euismod, nisl felis varius neque, vel lacinia libero neque sit amet eros. Morbi et ex faucibus, lacinia lacus vitae, feugiat dui. Etiam nisi lectus, tincidunt sit amet eros eu, fringilla pulvinar libero.",-1),z=Object(n["i"])("div",{class:"pagination"},"02",-1);Object(n["m"])();var U=M((function(e,t,i,c,a,s){return Object(n["l"])(),Object(n["e"])("section",q,[L,z])})),A={name:"About"};A.render=U,A.__scopeId="data-v-5cc7da64";var H=A,B=Object(n["x"])("data-v-08cd961e");Object(n["n"])("data-v-08cd961e");var F={class:"tiles tiles-second"},G={class:"tiles-wrap"},R={class:"tiles-line second-gallery__odd"},W={class:"tiles-line second-gallery__even"},N={class:"tiles-line second-gallery__odd"};Object(n["m"])();var V=B((function(e,t,c,a,s,l){return Object(n["l"])(),Object(n["e"])("section",F,[Object(n["i"])("div",G,[Object(n["i"])("div",R,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("bae9")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("409b")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("7f72")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("714c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("5350")+")"}},null,4)]),Object(n["i"])("div",W,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("b8cb")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("5a92")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("0f1a")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("110c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("7a2e")+")"}},null,4)]),Object(n["i"])("div",N,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("384c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("1641")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("3f91")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("2670")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("37ff")+")"}},null,4)])])])})),Y={name:"SecondGallery",mounted:function(){var e=this.gsap.timeline({scrollTrigger:{trigger:".tiles-second",start:"top bottom",end:"bottom",scrub:1}});e.to(".second-gallery__odd",{xPercent:-3},0),e.to(".second-gallery__even",{xPercent:-6},0)}};Y.render=V,Y.__scopeId="data-v-08cd961e";var D=Y,$=Object(n["x"])("data-v-61de4e2c");Object(n["n"])("data-v-61de4e2c");var J={class:"info"},K=Object(n["g"])('<div class="text-sliding" data-v-61de4e2c><h2 class="info-title" data-v-61de4e2c>endless acceleration toward infinity</h2><h3 class="info-subtitle" data-v-61de4e2c>the greatest barrier to your enlightenment</h3></div><div class="info-text" data-v-61de4e2c><p data-v-61de4e2c>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem at pulvinar lobortis. Nullam dapibus porta erat volutpat varius. Etiam sed sem sed ipsum dignissim iaculis porta sit amet mauris. Maecenas posuere leo eu pharetra mattis. Mauris sodales vulputate ultricies. Aliquam sollicitudin ex nec ex aliquam, id vehicula risus.</p></div><div class="pagination" data-v-61de4e2c>03</div>',3);Object(n["m"])();var Q=$((function(e,t,i,c,a,s){return Object(n["l"])(),Object(n["e"])("section",J,[K])})),X=i("cffa"),Z=i("1dac");X["a"].registerPlugin(Z["a"]);var ee={name:"Info",mounted:function(){var e=X["a"].timeline({scrollTrigger:{trigger:".text-sliding",start:"top bottom",end:"bottom",scrub:1}});e.to(".info-title",{xPercent:-3},0),e.to(".info-subtitle",{xPercent:2},0)}};ee.render=Q,ee.__scopeId="data-v-61de4e2c";var te=ee,ie=Object(n["x"])("data-v-35e5613c");Object(n["n"])("data-v-35e5613c");var ne={class:"tiles tiles-third"},ce={class:"tiles-wrap"},ae={class:"tiles-line column-gallery__odd"},se={class:"tiles-line column-gallery__even"},le={class:"tiles-line column-gallery__odd"},re={class:"tiles-line column-gallery__even"};Object(n["m"])();var oe=ie((function(e,t,c,a,s,l){return Object(n["l"])(),Object(n["e"])("section",ne,[Object(n["i"])("div",ce,[Object(n["i"])("div",ae,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("bae9")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("409b")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("7f72")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("714c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("5350")+")"}},null,4)]),Object(n["i"])("div",se,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("b8cb")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("5a92")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("0f1a")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("110c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("7a2e")+")"}},null,4)]),Object(n["i"])("div",le,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("384c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("1641")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("3f91")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("2670")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("37ff")+")"}},null,4)]),Object(n["i"])("div",re,[Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("d682")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("1530")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("41d5")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("945c")+")"}},null,4),Object(n["i"])("div",{class:"tiles-img",style:{"background-image":"url("+i("c11f")+")"}},null,4)])])])})),ue={name:"ThirdGallery",mounted:function(){var e=this.gsap.timeline({scrollTrigger:{trigger:"#tiles-third",start:"top bottom",end:"bottom",scrub:1}});e.to(".column-gallery__odd",{yPercent:-85},0),e.to(".column-gallery__even",{yPercent:-20},0)}};ue.render=oe,ue.__scopeId="data-v-35e5613c";var de=ue,ge=Object(n["x"])("data-v-30913379");Object(n["n"])("data-v-30913379");var be={class:"hello"},me=Object(n["h"])(" Contact"),fe=Object(n["i"])("span",null,"i",-1),ve=Object(n["h"])("me "),pe={key:0,class:"contact-wrapper"},je=Object(n["i"])("svg",{width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(n["i"])("rect",{x:"0.00146484",y:"28.7358",width:"40.2302",height:"2.87358",transform:"rotate(-45 0.00146484 28.7358)",fill:"#888888"}),Object(n["i"])("rect",{x:"2.30029",width:"40.2302",height:"2.87358",transform:"rotate(45 2.30029 0)",fill:"#888888"})],-1),he=Object(n["i"])("p",null,"Close",-1),Oe=Object(n["i"])("div",{class:"contact-title"},[Object(n["i"])("p",{class:"contact-title__upper"},"Contact form"),Object(n["i"])("p",{class:"contact-title__lower"}," — Matthias Weiss")],-1),ye={class:"contact-main"},ke=Object(n["i"])("h4",{class:"contact-question"},"What can i do for you?",-1),xe={class:"contact-info"},_e=Object(n["i"])("p",{class:"contact-info__text"},[Object(n["h"])("Tell me about your vision: "),Object(n["i"])("br"),Object(n["h"])("Which challenges are you facing? What are your goals and expectations? What would success look like and how much do you plan to spend to get there?")],-1),we={class:"contact-socials"},Pe={class:"ic24"};Object(n["m"])();var Se=ge((function(e,t,i,c,a,s){var l=Object(n["r"])("ContactForm");return Object(n["l"])(),Object(n["e"])("div",be,[Object(n["i"])("button",{onClick:t[1]||(t[1]=function(){return s.openContact&&s.openContact.apply(s,arguments)}),id:"contactMe",ref:"contactMe"},[me,fe,ve],512),Object(n["i"])(n["b"],{mode:"out-in",css:!1,onBeforeEnter:s.beforeEnter,onEnter:s.enter,onBeforeLeave:s.beforeLeave,onLeave:s.leave},{default:ge((function(){return[a.show?(Object(n["l"])(),Object(n["e"])("div",pe,[Object(n["i"])("div",{class:"contact-close",onClick:t[2]||(t[2]=function(){return s.closeContact&&s.closeContact.apply(s,arguments)})},[je,he]),Oe,Object(n["i"])("div",ye,[ke,Object(n["i"])(l),Object(n["i"])("div",xe,[_e,Object(n["i"])("div",we,[(Object(n["l"])(!0),Object(n["e"])(n["a"],null,Object(n["q"])(a.socials,(function(e,t){return Object(n["l"])(),Object(n["e"])("div",{class:"social-icon",key:"item_"+t},[(Object(n["l"])(),Object(n["e"])("svg",Pe,[Object(n["i"])("use",{"xlink:href":s.getIcon("socials",e)},null,8,["xlink:href"])]))])})),128))])])])])):Object(n["f"])("",!0)]})),_:1},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave"])])})),Ce=i("afb7"),Te=(i("b0c0"),{class:"checkboxes"}),Ie={class:"custom-fields"},Ee=Object(n["i"])("div",null,[Object(n["i"])("input",{type:"submit",value:"Send Request",class:"send_btn"})],-1);function Me(e,t,i,c,a,s){var l=Object(n["r"])("InputCheckbox"),r=Object(n["r"])("ResizeByClass");return Object(n["l"])(),Object(n["e"])("form",{class:"vue-form",onSubmit:t[7]||(t[7]=Object(n["w"])((function(){return e.submit&&e.submit.apply(e,arguments)}),["prevent"]))},[Object(n["i"])("div",Te,[Object(n["i"])(l,{fieldId:"Portrait",names:c.names,"onUpdate:names":t[1]||(t[1]=function(e){return c.names=e}),value:"Portrait"},null,8,["names"]),Object(n["i"])(l,{fieldId:"E-Commerce",names:c.names,"onUpdate:names":t[2]||(t[2]=function(e){return c.names=e}),value:"E-Commerce"},null,8,["names"]),Object(n["i"])(l,{fieldId:"Lifestyle",names:c.names,"onUpdate:names":t[3]||(t[3]=function(e){return c.names=e}),value:"Lifestyle"},null,8,["names"]),Object(n["i"])(l,{fieldId:"Other",names:c.names,"onUpdate:names":t[4]||(t[4]=function(e){return c.names=e}),value:"Other"},null,8,["names"])]),Object(n["i"])("div",Ie,[Object(n["i"])("div",null,[Object(n["v"])(Object(n["i"])("input",{type:"text",name:"name","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.name=e}),id:"name",placeholder:"Your Name"},null,512),[[n["t"],a.name]])]),Object(n["i"])("div",null,[Object(n["v"])(Object(n["i"])("input",{type:"email",name:"email","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.email=e}),id:"email",required:"",placeholder:"Your Email"},null,512),[[n["t"],a.email]])]),Object(n["i"])(r)]),Ee],32)}var qe={class:"wrapper message"},Le={class:"counter"};function ze(e,t,i,c,a,s){return Object(n["l"])(),Object(n["e"])("div",qe,[Object(n["v"])(Object(n["i"])("textarea",{class:"textarea js-autoresize",placeholder:"Photoshoot details","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.message.text=e}),maxlength:a.message.maxlength,rows:"1"},null,8,["maxlength"]),[[n["t"],a.message.text]]),Object(n["i"])("span",Le,Object(n["s"])(a.message.text.length)+" / "+Object(n["s"])(a.message.maxlength),1)])}i("4160"),i("159b");function Ue(){this.style.height="auto",this.style.height="".concat(this.scrollHeight,"px")}var Ae=function(e,t){var i=e.querySelectorAll(t);i.forEach((function(e){e.style.height="".concat(e.scrollHeight,"px"),e.addEventListener("input",Ue)}))},He={name:"ResizeByClass",data:function(){return{message:{text:"",maxlength:255}}},mounted:function(){Ae(this.$el,".js-autoresize")}};i("8edf");He.render=ze;var Be=He,Fe={class:"single-checkbox"};function Ge(e,t,i,c,a,s){return Object(n["l"])(),Object(n["e"])("div",Fe,[Object(n["i"])("input",Object(n["k"])({onInput:t[1]||(t[1]=function(e){return c.check()}),type:"checkbox",checked:c.checked,id:i.fieldId,class:"mr-2 hidden"},e.$attrs),null,16,["checked","id"]),Object(n["i"])("label",{for:i.fieldId,class:"custom-checkbox"},Object(n["s"])(i.value),9,["for"])])}i("caad"),i("c975"),i("a434"),i("2532");var Re=i("2909"),We={emits:["update:names"],props:{value:{type:String,required:!0},fieldId:{type:String,required:!0},names:{type:Array,required:!0}},setup:function(e,t){var i=Object(n["c"])((function(){return e.names.includes(e.value)}));function c(){var i=Object(Re["a"])(e.names);this.checked?i.splice(i.indexOf(e.value),1):i.push(e.value),t.emit("update:names",i)}return{check:c,checked:i}}};We.render=Ge;var Ne=We,Ve={name:"ContactForm",components:{ResizeByClass:Be,InputCheckbox:Ne},data:function(){return{name:"",email:""}},setup:function(){var e=Object(n["p"])([]);return{names:e}},methods:{},mounted:function(){}};i("9201");Ve.render=Me;var Ye=Ve,De={name:"Contact Form",data:function(){return{show:!1,socials:["facebook","twitters","linkedin","dribbble","behance","instagram"]}},components:{ContactForm:Ye},methods:{getIcon:function(e,t){return i("6f32")("./".concat(e,".svg"))+"#"+t},openContact:function(){this.show=!this.show},closeContact:function(){this.show=!this.show},beforeEnter:function(){this.contactMe=new Ce["a"](this.$refs.contactMe,{type:"chars"}),this.gsap.to(this.contactMe.chars,{yPercent:-100,duration:.4,stagger:.014})},enter:function(e,t){this.titleUp=new Ce["a"](".contact-title__upper",{type:"chars"}),this.titleLow=new Ce["a"](".contact-title__lower",{type:"chars"}),this.gsap.fromTo(this.titleUp.chars,{yPercent:-100},{yPercent:0,duration:.5,stagger:.014}),this.gsap.fromTo(this.titleLow.chars,{yPercent:-100},{yPercent:0,duration:.5,stagger:.014}),this.gsap.fromTo(".contact-question",{opacity:0},{opacity:1,duration:1}),this.gsap.fromTo(".vue-form",{opacity:0},{opacity:1,duration:1.45}),this.gsap.fromTo(".contact-info__text",{opacity:0},{opacity:1,duration:1.25}),this.gsap.fromTo(".ic24",{opacity:0},{opacity:1,duration:.6,stagger:.15,onComplete:t}),this.gsap.to(e,{duration:1})},beforeLeave:function(){},leave:function(e,t){this.gsap.to(this.contactMe.chars,{yPercent:0,duration:.5,stagger:.014}),this.gsap.fromTo(this.titleUp.chars,{yPercent:0},{yPercent:100,duration:.5,stagger:.014}),this.gsap.fromTo(this.titleLow.chars,{yPercent:0},{yPercent:100,duration:.5,stagger:.014}),this.gsap.fromTo(".contact-question",{opacity:1},{opacity:0,duration:.5}),this.gsap.fromTo(".contact-info__text",{opacity:1},{opacity:0,duration:.6}),this.gsap.fromTo(".vue-form",{opacity:1},{opacity:0,duration:.6}),this.gsap.fromTo(".ic24",{opacity:1},{opacity:0,duration:.4,stagger:.1,onComplete:t}),this.gsap.to(e,{duration:1})}},mounted:function(){}};i("ff57");De.render=Se,De.__scopeId="data-v-30913379";var $e=De,Je=i("d4ec"),Ke=i("bee2"),Qe=i("c0e2"),Xe=i.n(Qe),Ze=new Xe.a;function et(e,t,i){return e*(1-i)+t*i}var tt=function(){function e(){Object(Je["a"])(this,e),this.target=0,this.current=0,this.currentRounded=0,this.ease=.115,this.init()}return Object(Ke["a"])(e,[{key:"tick",value:function(){this.current=et(this.current,this.target,this.ease),this.currentRounded=Math.round(100*this.current)/100,Ze.emit("tick",{target:this.target,current:this.currentRounded})}},{key:"onScroll",value:function(e){var t=e.y;this.target=t}},{key:"on",value:function(){X["a"].ticker.add(this.tick.bind(this)),Ze.on("scroll",this.onScroll.bind(this))}},{key:"init",value:function(){this.on()}}]),e}(),it=(new tt,function(){function e(){Object(Je["a"])(this,e),this.init()}return Object(Ke["a"])(e,[{key:"onScroll",value:function(){Ze.emit("scroll",{y:window.scrollY})}},{key:"on",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"init",value:function(){this.on()}}]),e}()),nt=(new it,function(){function e(){Object(Je["a"])(this,e),this.init()}return Object(Ke["a"])(e,[{key:"onResize",value:function(){Ze.emit("resize")}},{key:"on",value:function(){window.addEventListener("resize",this.onResize)}},{key:"init",value:function(){this.on()}}]),e}()),ct=(new nt,function(){function e(){Object(Je["a"])(this,e),this.bindMethods(),this.dom={el:document.querySelector("[data-scroll]"),content:document.querySelector("[data-scroll-content]")},this.init()}return Object(Ke["a"])(e,[{key:"bindMethods",value:function(){var e=this;["scroll","run","resize"].forEach((function(t){return e[t]=e[t].bind(e)}))}},{key:"setStyles",value:function(){Object.assign(this.dom.el.style,{position:"fixed",top:0,left:0,height:"100%",width:"100%",overflow:"hidden"})}},{key:"setHeight",value:function(){document.body.style.height="".concat(this.dom.content.clientHeight,"px")}},{key:"resize",value:function(){this.setHeight(),this.scroll()}},{key:"scroll",value:function(){this.data.current=window.scrollY}},{key:"run",value:function(e){var t=e.current,i=e.target,n=i-t;window.innerWidth;this.dom.content.style.transform="translate3d(0, -".concat(t,"px, 0)")}},{key:"on",value:function(){this.setStyles(),this.setHeight(),Ze.on("tick",this.run),Ze.on("resize",this.resize)}},{key:"off",value:function(){Ze.off("tick",this.run),Ze.off("resize",this.resize)}},{key:"destroy",value:function(){document.body.style.height="",this.data=null,this.removeEvents(),this.cancelAnimationFrame()}},{key:"resize",value:function(){this.setHeight()}},{key:"init",value:function(){this.on()}}]),e}()),at={name:"App",components:{preloader:g,Hero:O,FirstGallery:E,About:H,SecondGallery:D,Info:te,ThirdGallery:de,ContactSection:$e},methods:{},mounted:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?console.log("No smooth scroll for you!"):setTimeout((function(){new ct}),500)}};i("b7ed");at.render=s;var st=at,lt=i("5502"),rt=Object(lt["a"])({state:{},mutations:{},actions:{},modules:{}}),ot=(i("c1c3"),i("1dce")),ut=i.n(ot);X["a"].registerPlugin(Z["a"]);var dt={created:function(){this.gsap=X["a"]}},gt=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(gt,"px")),Object(n["d"])(st).use(rt).use(ut.a).mixin(dt).mount("#app")},"5a92":function(e,t,i){e.exports=i.p+"img/image7.a25431ac.jpg"},"6f32":function(e,t,i){var n={"./socials.svg":"1d34"};function c(e){var t=a(e);return i(t)}function a(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=a,e.exports=c,c.id="6f32"},"714c":function(e,t,i){e.exports=i.p+"img/image4.51914a81.jpg"},"7a2e":function(e,t,i){e.exports=i.p+"img/image10.40410294.jpg"},"7f72":function(e,t,i){e.exports=i.p+"img/image3.1958b729.jpg"},"87dd":function(e,t,i){"use strict";i("b09a")},"89f5":function(e,t,i){},"8edf":function(e,t,i){"use strict";i("5208")},9201:function(e,t,i){"use strict";i("2e13")},"945c":function(e,t,i){e.exports=i.p+"img/image19.8b6a09ee.jpg"},b09a:function(e,t,i){},b7ed:function(e,t,i){"use strict";i("e795")},b8cb:function(e,t,i){e.exports=i.p+"img/image6.bb9a4be4.jpg"},bae9:function(e,t,i){e.exports=i.p+"img/image1.2f565819.jpg"},c11f:function(e,t,i){e.exports=i.p+"img/image20.832f7a1c.jpg"},c1c3:function(e,t,i){},d682:function(e,t,i){e.exports=i.p+"img/image16.7e194ba6.jpg"},e795:function(e,t,i){},ff57:function(e,t,i){"use strict";i("89f5")}});
//# sourceMappingURL=app.ec24d463.js.map