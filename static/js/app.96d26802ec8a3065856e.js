webpackJsonp([2],{"5OHe":function(t,e){},"7hEE":function(t,e){},"8AWz":function(t,e){},MnNL:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("IvJb"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("vSla")({name:"App"},i,!1,function(t){n("MnNL")},null,null).exports,s=n("zO6J"),r=n("lC5x"),c=n.n(r),l=n("J0Oq"),d=n.n(l),u=n("9rMa"),m=n("oWSD"),p=function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},f=n("wSez"),h=n.n(f),v={name:"swiper",props:["topStories"],data:function(){return{mySwiper:null}},methods:{attachImageUrl:p,goDetail:function(t){this.$router.push({name:"detail",params:{id:t}}),this.$store.state.showGoDetailLoading||f.Indicator.open({text:"加载中",spinnerType:"fading-circle"})}},mounted:function(){this.mySwiper=new m.a(".swiper-container",{loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination"}})},activated:function(){this.mySwiper.autoplay.start()},deactivated:function(){this.mySwiper.autoplay.stop()}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper"},[n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.topStories,function(e){return n("div",{key:e.id,staticClass:"swiper-slide",on:{click:function(n){t.goDetail(e.id)}}},[n("div",{staticClass:"content"},[n("img",{staticClass:"loadImg",attrs:{src:e.image,alt:""},on:{error:function(n){n.target.src=t.attachImageUrl(e.image)}}}),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"mask"})])})),t._v(" "),n("div",{staticClass:"swiper-pagination"})])])},staticRenderFns:[]};var g=n("vSla")(v,_,!1,function(t){n("8AWz")},null,null).exports,w={name:"articleList",props:["articleItem","articleIndex"],data:function(){return{}},methods:{formatTime:function(t){if(t){var e=t.substr(0,4),n=t.substr(4,2),a=t.substr(6);return{y:e,m:n,d:a,n:e+"/"+n+"/"+a}}},getDay:function(t){if(t&&"[object Object]"==={}.toString.call(t)){return"星期"+["日","一","二","三","四","五","六"][new Date(t.n).getDay()]}},isToaday:function(t){if(t&&"[object Object]"==={}.toString.call(t))return new Date(t.n).toDateString()==(new Date).toDateString()?"今日热闻":t.m+"月"+t.d+"日 "+this.getDay(t)},getToday:function(t){var e=this.articleItem.date,n=e.slice(0,4),a=e.slice(4,6),i=e.slice(6);return a+"月"+i+"日 星期"+["日","一","二","三","四","五","六"][new Date(n+"/"+a+"/"+i).getDay()]},showDay:function(t){return 0===t?"今日热闻":this.getToday(t)}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"articleList"},[n("div",{staticClass:"date"},[t._v(t._s(t.showDay(t.articleIndex)))]),t._v(" "),t._l(t.articleItem.stories,function(e){return n("router-link",{key:e.id,staticClass:"list",attrs:{to:{path:"/detail",query:{id:e.id}},tag:"div"}},[n("div",{staticClass:"story"},[n("span",{staticClass:"text"},[t._v(t._s(e.title))]),t._v(" "),n("img",{staticClass:"aticle_pic",attrs:{src:e.images[0]}})])])})],2)},staticRenderFns:[]};var S=n("vSla")(w,x,!1,function(t){n("7hEE")},"data-v-5c0ebf06",null).exports,C={name:"dropload",props:["droploadStatus"],data:function(){return{}},computed:{},methods:{startLoad:function(){this.$emit("load")},isReachBottom:function(){return(document.documentElement.clientHeight||window.innerHeight)+(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop)+50>=document.documentElement.scrollHeight},scrollHandler:function(){this.isReachBottom()&&this.$emit("load")},onPageScroll:function(){window.addEventListener("scroll",this.scrollHandler,!1)}},created:function(){},mounted:function(){this.onPageScroll()},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHandler,!1)}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropload dropload-down"},[n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.droploadStatus,expression:"droploadStatus==1"}],staticClass:"dropload-start",on:{click:t.startLoad}},[t._v("点击查看更多")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2==t.droploadStatus,expression:"droploadStatus==2"}],staticClass:"dropload-load",on:{click:t.startLoad}},[n("span",{staticClass:"d_loading"}),t._v("加载中...")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:3==t.droploadStatus,expression:"droploadStatus==3"}],staticClass:"dropload-noData"},[t._v("已无更多内容")])])},staticRenderFns:[]};var y=n("vSla")(C,b,!1,function(t){n("ZxGh")},"data-v-7c1e04fd",null).exports,E={render:function(){var t=this.$createElement;return(this._self._c||t)("header",{attrs:{id:"head_top"}},[this._t("top_left"),this._v(" "),this._t("top_right")],2)},staticRenderFns:[]};var D=n("vSla")({},E,!1,function(t){n("Qk04")},null,null).exports,L=n("P9l9"),T={name:"index",data:function(){return{indexData:null,indexList:[],loadingShow:!0,noNote:!1,page:1,canLoadMore:!0,droploadStatus:2,onLoadingMore:!1,count:1}},computed:{homeHidden:function(){return this.$store.state.homeHidden}},methods:{showSideBar:function(){var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;this.$refs.sidebar.open(),this.$store.commit("SET_HOME_HIDDEN",{homeHidden:!0,homeScrollTop:t})},getList:function(t){var e=this;return d()(c.a.mark(function n(){var a,i,o,s;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a=e,!t){n.next=10;break}return n.next=4,Object(L.b)();case 4:i=n.sent,a.indexList.push(i),a.indexData=i,a.droploadStatus=1,n.next=16;break;case 10:return o=e.GetDateStr(--e.count),n.next=13,Object(L.a)({data:o});case 13:s=n.sent,a.onLoadingMore=!1,s.date<"20130520"?(a.canLoadMore=!1,a.droploadStatus=3):(a.indexList.push(s),a.droploadStatus=1);case 16:case"end":return n.stop()}},n,e)}))()},loadMore:function(){var t=this;this.indexList.length&&this.canLoadMore&&!this.onLoadingMore&&(this.onLoadingMore=!0,this.droploadStatus=2,this.$nextTick(function(){t.getList()}))},GetDateStr:function(t){function e(t){return t<10?"0"+t:t}var n=new Date;return n.setDate(n.getDate()+t),e(n.getFullYear())+""+e(n.getMonth()+1)+e(n.getDate())}},created:function(){this.getList(1)},mounted:function(){},components:{swiper:g,articleList:S,dropload:y,headTop:D,sidebar:function(){return n.e(0).then(n.bind(null,"CwAS"))}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index",class:{"home-hidden":t.homeHidden},attrs:{id:"index"}},[n("headTop",[n("section",{staticClass:"top_left",attrs:{slot:"top_left"},slot:"top_left"},[n("i",{staticClass:"iconfont icon-menu",on:{click:t.showSideBar}}),t._v(" "),n("span",{staticClass:"left_title"},[t._v("首页")])]),t._v(" "),n("section",{staticClass:"top_right",attrs:{slot:"top_right"},slot:"top_right"},[n("i",{staticClass:"iconfont icon-bell-fill"}),t._v(" "),n("i",{staticClass:"iconfont icon-more_android_light"})])]),t._v(" "),n("sidebar",{ref:"sidebar"}),t._v(" "),t.indexData?n("swiper",{ref:"swiper",attrs:{"top-stories":t.indexData.top_stories}}):t._e(),t._v(" "),t._l(t.indexList,function(t,e){return n("article-list",{key:e,attrs:{"article-item":t,"article-index":e}})}),t._v(" "),n("dropload",{attrs:{droploadStatus:t.droploadStatus},on:{load:t.loadMore}})],2)},staticRenderFns:[]};var H=n("vSla")(T,k,!1,function(t){n("bDUr")},"data-v-424c9469",null).exports,I=n("4YfN"),N=n.n(I);var O={name:"detail",data:function(){return{res:null,homeFlag:1}},computed:N()({},Object(u.c)({comments:"comments",popularity:function(t){return t.popularity},currentIndex:"currentIndex"})),methods:N()({attachImageUrl:p,goLookComments:function(){var t=this.$route.params.id;this.$router.push({path:"/comment/"+t})}},Object(u.b)({setStoryExtra:"STORY_EXTRA"}),{transNumFormat:function(t){var e=1*t,n=void 0,a=void 0;return e<1e3?e:e<1e4?(a=(n=(e/1e3).toString()).indexOf("."))>0?n.substring(0,a+2)+"k":n+"k":(a=(n=(e/1e4).toString()).indexOf("."))>0?n.substring(0,a+2)+"w":n+"w"}}),created:function(){var t=this;return d()(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.c)({id:t.$route.query.id});case 2:n=e.sent,t.res=n;case 4:case"end":return e.stop()}},e,t)}))()},activated:function(){var t=this;$http({url:"/api/4/story-extra/"+t.$route.params.id,success:function(e){t.setStoryExtra({comments:e.comments,popularity:e.popularity,long_comments:e.long_comments,short_comments:e.short_comments})}})}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.res?n("div",{staticClass:"detail"},[n("div",{staticClass:"header"},[1===t.homeFlag?n("div",{staticClass:"back",on:{click:function(e){t.$router.go(-1)}}},[n("i",{staticClass:"iconfont icon-arrowleft"})]):0===t.homeFlag?n("div",{staticClass:"back",on:{click:function(e){t.$router.push("/")}}},[n("i",{staticClass:"iconfont icon-home1",staticStyle:{"font-size":"20px"}})]):t._e(),t._v(" "),n("div",{staticClass:"icon-wrapper"},[n("div",{staticClass:"icons"},[n("i",{staticClass:"iconfont icon-share"}),t._v(" "),n("i",{staticClass:"iconfont icon-favorfill"}),t._v(" "),n("i",{staticClass:"iconfont icon-comment_light",on:{click:t.goLookComments}},[n("span",{staticClass:"text"},[t._v(t._s(t.transNumFormat(t.comments)))])]),t._v(" "),n("i",{staticClass:"iconfont icon-appreciate_fill_light"},[n("span",{staticClass:"text"},[t._v(t._s(t.transNumFormat(t.popularity)))])])])])]),t._v(" "),n("div",{staticClass:"detail-content"},[1*t.currentIndex<0?n("div",{staticClass:"img-wrap"},[n("h1",{staticClass:"title"},[t._v(t._s(t.res.title))]),t._v(" "),n("span",{staticClass:"img-source"},[t._v(t._s(t.res.image_source))]),t._v(" "),n("img",{attrs:{src:t.res.image,alt:""},on:{error:function(e){e.target.src=t.attachImageUrl(t.res.image)}}}),t._v(" "),n("div",{staticClass:"img-mask"})]):t._e(),t._v(" "),n("div",{staticClass:"detail-body",domProps:{innerHTML:t._s(t.res.body)}})])]):t._e()},staticRenderFns:[]};var R=n("vSla")(O,$,!1,function(t){n("augz")},null,null).exports;a.default.use(s.a);var M,F,U=new s.a({mode:"history",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"/",name:"index",meta:{index:0},component:H},{path:"*",redirect:"/"},{path:"/detail",name:"detail",meta:{index:2},component:R}]}),A=n("a3Yh"),j=n.n(A),z=(M={showGoDetailLoading:!1,comments:"",popularity:"",long_comments:"",short_comments:"",currentIndex:-1,homeScrollTop:0,homeHidden:!1},j()(M,"currentIndex",-1),j()(M,"themeList",[{id:"",thumbnail:"",name:""}]),M),G=(F={},j()(F,"STORY_EXTRA",function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}),j()(F,"SET_THEME_LIST",function(t,e){t.themeList=e}),j()(F,"SET_HOME_HIDDEN",function(t,e){t.homeHidden=e.homeHidden,e.homeScrollTop&&(t.homeScrollTop=e.homeScrollTop)}),j()(F,"CHANGE_CURRENT_INDEX",function(t,e){t.currentIndex=e}),F),P=n("mUbh"),Y=n.n(P);a.default.use(u.a);var B=new u.a.Store({state:z,getters:{homeHidden:function(t){return t.homeHidden},currentIndex:function(t){return t.currentIndex},themeList:function(t){return t.themeList}},actions:Y.a,mutations:G});n("5OHe"),n("UfKn");a.default.config.productionTip=!1,a.default.use(h.a),new a.default({el:"#app",router:U,store:B,components:{App:o},template:"<App/>"}),U.afterEach(function(t,e){var n=t.name;if("index"==n)B.commit("CHANGE_CURRENT_INDEX",-1);else if("theme"==n){var a,i=t.params.id,o=B.state.themeList,s=void 0;for(s=0,a=o.length;s<a;s++)if(1*i==1*o[s].id){B.commit("CHANGE_CURRENT_INDEX",s);break}}})},P9l9:function(t,e,n){"use strict";var a=n("aozt"),i=n.n(a);n.d(e,"b",function(){return o}),n.d(e,"a",function(){return s}),n.d(e,"d",function(){return r}),n.d(e,"c",function(){return c}),i.a.defaults.baseURL="http://news-at.zhihu.com/";var o=function(){var t=("?v="+Math.random()).replace(".","");return i.a.get("/api/4/news/latest"+t).then(function(t){return t.data})},s=function(t){return i.a.get("/api/4/news/before/"+t.data).then(function(t){return t.data})},r=function(){return i.a.get("/api/4/themes").then(function(t){return t.data})},c=function(t){return i.a.get("/api/4/news/"+t.id).then(function(t){return t.data})}},Qk04:function(t,e){},UfKn:function(t,e){},ZxGh:function(t,e){},augz:function(t,e){},bDUr:function(t,e){},mUbh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.96d26802ec8a3065856e.js.map