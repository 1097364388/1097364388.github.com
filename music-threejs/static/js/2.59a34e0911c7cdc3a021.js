webpackJsonp([2],{"0aAL":function(e,s,t){"use strict";var a=t("AA3o"),r=t.n(a);s.a=function e(s){var t=s.id,a=s.name,i=s.avatar,n=s.aliaName;r()(this,e),this.id=t,this.name=a,this.avatar=i,this.aliaName=n}},"3XfF":function(e,s){},"8stH":function(e,s,t){"use strict";s.b=function(e,s){var t=i.b+"/search?keywords="+e+"&offset="+s;return r.a.get(t)},s.c=function(e){var s=i.b+"/search/suggest?keywords="+e;return r.a.get(s)},s.d=function(e){var s=i.b+"/song/detail?ids="+e;return r.a.get(s)},s.a=function(e){var s=i.b+"/search/hot";return r.a.get(s)};var a=t("aozt"),r=t.n(a),i=t("W/7t")},UyGh:function(e,s){},YOyO:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("qwAB"),r=t("IGeD"),i={props:{placeholder:{type:String,default:"搜索歌曲、歌手"}},data:function(){return{query:"",clickInfo:"搜索"}},created:function(){var e=this;this.$watch("query",Object(r.a)(function(s){e.$emit("query",s)},300))},methods:{clear:function(){this.query=""},setQuery:function(e){this.query=e}}},n={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"search-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"box",attrs:{placeholder:e.placeholder,type:"text"},domProps:{value:e.query},on:{input:function(s){s.target.composing||(e.query=s.target.value)}}}),e._v(" "),t("i",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],staticClass:"icon-delete",on:{click:e.clear}})])},staticRenderFns:[]};var c=t("C7Lr")(i,n,!1,function(e){t("UyGh")},"data-v-232d8b04",null).exports,o=t("4YfN"),h=t.n(o),u=t("y/jF"),l=t("0aAL"),v=t("8stH"),g=t("PvFA"),f=t("9rMa"),d={props:{query:{type:String,default:""},showSinger:{type:Boolean,default:!0},showList:{type:Boolean,default:!0}},data:function(){return{singer:{},songs:[],suggest:{},searchShow:!0,page:0,update:!0,haveMore:!0}},computed:{},methods:h()({selectList:function(e){console.log("item",e);var s={};s.name=e.name,s.id=e.id,s.picUrl=e.coverImgUrl,s.playCount=e.playCount,this.$router.push({path:"/search/list/"+s.id}),this.setMusicList(s),this.$emit("select")},selectItem:function(e){var s=new l.a({id:e.id,name:e.name,avatar:e.img1v1Url});this.$router.push({path:"/search/singer/"+s.id}),this.setSinger(s),this.$emit("select")},selectSong:function(e){var s=this;Object(v.d)(e.id).then(function(t){e.image=t.data.songs[0].al.picUrl,s.insertSong(e)}),this.$emit("select")},search:function(){var e=this;this.searchShow=!1,this.haveMore=!0,Object(v.b)(this.query,this.page).then(function(s){if(s.data.result.songs){var t=[];s.data.result.songs.forEach(function(e){t.push(Object(g.c)(e))}),e.songs=t,e.$emit("refresh")}else e.haveMore=!1}),this.page+=30,Object(v.c)(this.query).then(function(s){e.suggest=s.data.result})},searchMore:function(){var e=this;console.log("searchMore"),this.haveMore&&this.songs.length&&Object(v.b)(this.query,this.page).then(function(s){var t=s.data.result.songs;if(s.data.result.songs){var a=[];t.forEach(function(e){a.push(Object(g.c)(e))}),e.songs=e.songs.concat(a),e.$emit("refresh"),e.page+=30}else e.haveMore=!1})}},Object(f.d)({setSinger:"SET_SINGER",setMusicList:"SET_MUSIC_LIST"}),Object(f.b)(["insertSong"])),watch:{query:function(e){if(""===e)return this.suggest={},this.songs=[],void(this.haveMore=!1);this.suggest={},this.songs=[],this.searchShow=!0,this.page=0,this.haveMore=!0,this.search()},songs:function(e){}},components:{Loading:u.a}},p={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"suggest"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.searchShow&&e.query&&e.songs.length>0,expression:"!searchShow && query && songs.length > 0"}],staticClass:"search-suggest"},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.showSinger&&e.showList,expression:"showSinger && showList"}],staticClass:"title"},[e._v("最佳匹配")]),e._v(" "),e.suggest.artists&&e.showSinger?t("div",{staticClass:"search-suggest-item",on:{click:function(s){e.selectItem(e.suggest.artists[0])}}},[t("img",{attrs:{src:e.suggest.artists[0].img1v1Url,width:"50",height:"50"}}),e._v(" "),t("span",[e._v("歌手："+e._s(e.suggest.artists[0].name))])]):e._e(),e._v(" "),e.suggest.playlists&&e.showList?t("div",{staticClass:"search-suggest-item",on:{click:function(s){e.selectList(e.suggest.playlists[0])}}},[t("img",{attrs:{src:e.suggest.playlists[0].coverImgUrl,width:"50",height:"50"}}),e._v(" "),t("div",{staticClass:"text"},[t("p",[e._v("歌单："+e._s(e.suggest.playlists[0].name))]),e._v(" "),t("p",{staticClass:"singer"},[e._v(e._s(e.suggest.albums[0].artist.name))])])]):e._e()]),e._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:!e.searchShow,expression:"!searchShow"}],ref:"suggestList",staticClass:"suggest-list"},[e._l(e.songs,function(s,a){return t("li",{key:a,staticClass:"suggest-item",on:{click:function(t){e.selectSong(s)}}},[e._m(0,!0),e._v(" "),t("div",{staticClass:"name"},[t("p",{staticClass:"song"},[e._v(e._s(s.name))]),e._v(" "),t("p",{staticClass:"singer"},[e._v(e._s(s.singer))])])])}),e._v(" "),t("loading",{directives:[{name:"show",rawName:"v-show",value:e.haveMore&&e.query,expression:"haveMore && query"}]})],2),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.haveMore&&!e.songs.length&&e.query,expression:"!haveMore && !songs.length && query"}],staticClass:"no-result-wrapper"},[e._v("\n    抱歉，暂无搜索结果\n  ")])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"icon"},[s("i")])}]};var m=t("C7Lr")(d,p,!1,function(e){t("dyvh")},"data-v-5e5fbd18",null).exports,y=t("XEAW"),w={props:{searches:{type:Array}},methods:{selectItem:function(e){this.$emit("select",e)},deleteOne:function(e){this.$emit("delete",e)}}},_={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.searches.length,expression:"searches.length"}],staticClass:"search-list"},[t("transition-group",{attrs:{name:"list",tag:"ul"}},e._l(e.searches,function(s){return t("li",{key:s,staticClass:"search-item",on:{click:function(t){e.selectItem(s)}}},[t("span",{staticClass:"text"},[e._v(e._s(s))]),e._v(" "),t("span",{staticClass:"icon",on:{click:function(t){t.stopPropagation(),e.deleteOne(s)}}},[t("i",{staticClass:"icon-delete"})])])}),0)],1)},staticRenderFns:[]};var C=t("C7Lr")(w,_,!1,function(e){t("kr/2")},"data-v-52e75a06",null).exports,S=t("F4+m"),b={mixins:[S.b,S.a],data:function(){return{pullup:!0,hots:[]}},created:function(){this._getSearchHot()},methods:{back:function(){this.$router.back(),this.$refs.searchBox.clear()},showConfirm:function(){this.$refs.confirm.show()},_getSearchHot:function(){var e=this;Object(v.a)().then(function(s){e.hots=s.data.result.hots})},onQueryChange:function(e){this.query=e},addQuery:function(e){this.$refs.searchBox.setQuery(e)},saveSearch:function(){this.saveSearchHistory(this.query)},searchMore:function(){this.$refs.suggest.searchMore()},refresh:function(){var e=this;setTimeout(function(){e.$refs.scroll.refresh()},20)},handlePlaylist:function(e){var s=e.length>0?"60px":"";this.$refs.searchWrapper.style.bottom=s,this.refresh()}},components:{Scroll:a.a,SearchBox:c,Suggest:m,SearchList:C,Confirm:y.a}},q={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("transition",{attrs:{name:"search"}},[t("div",{ref:"searchWrapper",staticClass:"search"},[t("div",{staticClass:"search-box-wrapper"},[t("i",{staticClass:"fa fa-angle-left",on:{click:e.back}}),e._v(" "),t("search-box",{ref:"searchBox",on:{query:e.onQueryChange}})],1),e._v(" "),t("scroll",{ref:"scroll",staticClass:"search-scroll-wrapper",attrs:{pullup:e.pullup},on:{scrollToEnd:e.searchMore}},[t("div",{ref:"search"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.query,expression:"!query"}],staticClass:"search-hots"},[t("p",{staticClass:"title"},[e._v("热门搜索")]),e._v(" "),e._l(e.hots,function(s){return t("span",{key:s.id,staticClass:"search-hots-item",on:{click:function(t){e.addQuery(s.first)}}},[e._v("\n            "+e._s(s.first)+"\n          ")])})],2),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.query,expression:"!query"}],staticClass:"shortcut-wrapper"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[t("h1",{staticClass:"title"},[t("span",{staticClass:"text"},[e._v("搜索历史")]),e._v(" "),t("span",{staticClass:"clear",on:{click:e.showConfirm}},[t("i",{staticClass:"icon-clear"})])]),e._v(" "),t("search-list",{attrs:{searches:e.searchHistory},on:{select:e.addQuery,delete:e.deleteSearchHistory}})],1)]),e._v(" "),t("div",{staticClass:"search-result"},[t("suggest",{ref:"suggest",attrs:{query:e.query},on:{select:e.saveSearch,refresh:e.refresh}})],1)])]),e._v(" "),t("confirm",{ref:"confirm",attrs:{text:"是否清空历史记录？",confirmBtnText:"清空"},on:{confirm:e.clearSearchHistory}}),e._v(" "),t("router-view")],1)])},staticRenderFns:[]};var x=t("C7Lr")(b,q,!1,function(e){t("3XfF")},"data-v-71f6b7e8",null);s.default=x.exports},dyvh:function(e,s){},"kr/2":function(e,s){}});
//# sourceMappingURL=2.59a34e0911c7cdc3a021.js.map