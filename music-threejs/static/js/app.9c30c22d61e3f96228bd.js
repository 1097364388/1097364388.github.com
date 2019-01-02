webpackJsonp([1],{NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("+VlJ"),o={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=t("C7Lr")({name:"App"},o,!1,function(e){t("UKid")},null,null).exports,r=t("KGCO"),s=t("AA3o"),c=t.n(s),l=t("xSur"),d=t.n(l),u=window.THREE,h=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.fieldOfView,a=void 0===t?60:t,o=n.nearPlane,i=void 0===o?1:o,r=n.farPlane,s=void 0===r?2e3:r,l=n.canvasWidth,d=void 0===l?1024:l,h=n.canvasHeight,v=void 0===h?960:h;c()(this,e);var m=d/v;this.camera=new u.PerspectiveCamera(a,m,i,s),this.init()}return d()(e,[{key:"init",value:function(){this.camera.position.x=0,this.camera.position.z=1e3,this.camera.position.y=300,this.camera.lookAt(new u.Vector3(0,0,0))}}]),e}(),v=window.THREE,m=function e(n){var t=n.canvasHeight,a=n.canvasWidth,o=n.canvasFatherId;c()(this,e),this.render=new v.WebGLRenderer({alpha:!0,antialias:!0}),this.render.setSize(a,t),this.render.shadowMapEnabled=!0,document.getElementById(o).appendChild(this.render.domElement)},p=window.THREE,f=function(){function e(){c()(this,e),this.listener=new p.AudioListener,this.audioLoader=new p.AudioLoader,this.sound=new p.Audio(this.listener),this.analyser=new p.AudioAnalyser(this.sound,512),this.sound.setVolume(1),this.playing=!1}return d()(e,[{key:"loadFile",value:function(e){var n=this,t=this;t.audioLoader.load(e,function(e){t.sound.setBuffer(e),t.sound.setLoop(!0),t.sound.setVolume(1),t.sound.play(),n.playing=!0})}},{key:"loadSong",value:function(e){var n=this,t=e.name,a=window.URL.createObjectURL(e);this.audioLoader.load(a,function(e){n.sound.setBuffer(e),n.sound.setLoop(!0),n.sound.setVolume(1),n.playing&&n.sound.stop(),n.sound.play(),n.playing=!0},function(e){var n=e.loaded/e.total*100,a="Loading "+t+": "+Math.floor(n)+"%";console.log(a)},function(e){console.log(e)})}}]),e}(),g=window.THREE,w=null;function y(){var e=window.innerHeight,n=window.innerWidth;w.lmrender.render.setSize(n,e),w.lmcamera.camera.aspect=n/e,w.lmcamera.camera.updateProjectionMatrix()}function E(e){}function L(e){}function b(e){}function H(e){}function F(e){}function R(e){}var k=function(){function e(n){var t=n.canvasHeight,a=n.canvasWidth,o=n.canvasFatherId;c()(this,e),w=this,window.THREE=g,this.scene=null,this.lmcamera=null,this.lmrender=null,this.lmaudio=null,this.initScene(),this.initCamera(),this.initRender({canvasHeight:t,canvasWidth:a,canvasFatherId:o}),this.initAudio(),this.controls=new g.TrackballControls(this.lmcamera.camera)}return d()(e,[{key:"initScene",value:function(){this.scene=new g.Scene,this.scene.background=new g.Color(655398)}},{key:"initCamera",value:function(){this.lmcamera=new h}},{key:"initRender",value:function(e){var n=e.canvasHeight,t=e.canvasWidth,a=e.canvasFatherId;this.lmrender=new m({canvasHeight:n,canvasWidth:t,canvasFatherId:a})}},{key:"initAudio",value:function(){this.lmaudio=new f}},{key:"initBroserInterface",value:function(){window.addEventListener("resize",y,!1),document.addEventListener("mousemove",E,!1),document.addEventListener("mousedown",L,!1),document.addEventListener("mouseup",b,!1),document.addEventListener("touchstart",H,!1),document.addEventListener("touchend",F,!1),document.addEventListener("touchmove",R,!1)}}]),e}(),A=[{pct:0,color:{r:244,g:238,b:66}},{pct:.5,color:{r:65,g:244,b:104}},{pct:1,color:{r:65,g:223,b:244}}],x=function(){function e(n,t){c()(this,e);var a=document.getElementsByClassName(t)[0];this.Bars=[];for(var o=1/n*100+"%",i=0;i<n;i++){var r=document.createElement("div");r.classList.add("bar"),r.style.width=o,a.appendChild(r),this.Bars.push(r)}this.colorRange=A}return d()(e,[{key:"update",value:function(e){var n=this,t=0;e.forEach(function(e){var a=.8*e;n.Bars[t].style.height=a+"px",n.Bars[t].style.background=n.color(e/255),t++})}},{key:"color",value:function(e){for(var n=1;n<this.colorRange.length-1&&!(e<this.colorRange[n].pct);n++);var t=this.colorRange[n-1],a=this.colorRange[n],o=a.pct-t.pct,i=(e-t.pct)/o,r=1-i,s=i,c={r:Math.floor(t.color.r*r+a.color.r*s),g:Math.floor(t.color.g*r+a.color.g*s),b:Math.floor(t.color.b*r+a.color.b*s)};return"#"+this.componentToHex(c.r)+this.componentToHex(c.g)+this.componentToHex(c.b)}},{key:"componentToHex",value:function(e){var n=e.toString(16);return 1==n.length?"0"+n:n}}]),e}(),C=(t("aozt"),null),T=null,B=null,S={mounted:function(){B=this;var e=(C=new k({canvasHeight:500,canvasWidth:800,canvasFatherId:"canvasFather"})).lmaudio.analyser.getFrequencyData().length;T=new x(e,"bar-container"),this.loop()},methods:{uploadFile:function(e){var n=e.target.files[0];C.lmaudio.loadSong(n),console.error(e.target.files[0])},loop:function(){if(C.controls.update(),C.lmrender.render.render(C.scene,C.lmcamera.camera),C.lmaudio.playing){var e=C.lmaudio.analyser.getFrequencyData();T.update(e)}requestAnimationFrame(B.loop)},loadFile:function(e){C.lmaudio.loadFile(e)}}},W={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"box"},[n("div",{attrs:{id:"canvasFather"}}),this._v(" "),n("div",{staticClass:"bar-container"}),this._v(" "),n("input",{attrs:{type:"file"},on:{change:this.uploadFile}})])},staticRenderFns:[]};var I=t("C7Lr")(S,W,!1,function(e){t("x7O6")},null,null).exports;a.a.use(r.a);var _=new r.a({routes:[{path:"/",component:I}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:_,components:{App:i},template:"<App/>"})},UKid:function(e,n){},x7O6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.9c30c22d61e3f96228bd.js.map