(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fef8b100","chunk-358bf7e3"],{"135c":function(t,e,i){t.exports=i.p+"img/role01.86aa94e6.png"},"4c63":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var s=i("9ab4"),a=i("1b40"),r=i("0d59"),c=i("93f3"),n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("teacherToken"),e}return Object(s["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/teacher/login"},e.prototype.checkToken=function(t){t!==c["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,r["c"].teGetGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={grade:t,token:this.token},[4,r["c"].teGetLevel(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTECity=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={tid:t,token:this.token},[4,r["c"].getTECity(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTESchool=function(t,e){return Object(s["a"])(this,void 0,void 0,(function(){var i,a;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return i={cid:t,tid:e,token:this.token},[4,r["c"].getTESchool(i)];case 1:return a=s.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e.prototype.getTEClass=function(t,e){return Object(s["a"])(this,void 0,void 0,(function(){var i,a;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return i={sid:t,tid:e,token:this.token},[4,r["c"].getTEClass(i)];case 1:return a=s.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var a,c;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return a={type:t,clid:e,tid:i,token:this.token},[4,r["c"].teGetTeacher(a)];case 1:return c=s.sent(),this.checkToken(c.ERR_CODE),[2,c.list]}}))}))},e}(a["d"]),o=n.instance},"6c04":function(t,e,i){"use strict";i.r(e),i.d(e,"SearchForm",(function(){return d}));var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",{attrs:{currentPage:"homework"}}),s("div",{staticClass:"c-wrap1400"},[s("div",{staticClass:"c-tab"},[s("h3",{staticClass:"c-tit"},[t._v("作業管理 / 組題管理")]),s("div",{staticClass:"c-tab-group"},[s("router-link",{staticClass:"c-tab-red",attrs:{to:"/teacher/homework/question"}},[t._v("題目管理")]),s("router-link",{staticClass:"c-tab-blue  act",attrs:{to:"/teacher/homework/paper"}},[t._v("作業組題管理")]),s("router-link",{staticClass:"c-tab-orange",attrs:{to:"/teacher/homework/verify"}},[t._v("作業審核管理")])],1)]),s("div",{staticClass:"c-search-group"},[s("div",{staticClass:"c-search"},[s("div",{staticClass:"search-ui-box h-mr10"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.active,expression:"searchForm.active"}],staticClass:"select-sty h-w180",attrs:{name:"active",id:"active"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"active",e.target.multiple?i:i[0])}}},[s("option",{attrs:{value:""}},[t._v("請選擇狀態")]),s("option",{attrs:{value:"1"}},[t._v("啟用")]),s("option",{attrs:{value:"2"}},[t._v("停用")])])]),s("div",{staticClass:"search-ui-box h-mr10"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.cid,expression:"searchForm.cid"}],staticClass:"select-sty h-w200",attrs:{name:"cid",id:"cid"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"cid",e.target.multiple?i:i[0])},t.getTESchool]}},[s("option",{attrs:{value:""}},[t._v("請選擇上課分校縣市")]),t._l(t.cityList,(function(e,i){return s("option",{key:i,domProps:{value:e.cid}},[t._v(t._s(e.city))])}))],2)]),s("div",{staticClass:"search-ui-box h-mr10"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.sid,expression:"searchForm.sid"}],staticClass:"select-sty h-w200",attrs:{name:"sid",id:"sid"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"sid",e.target.multiple?i:i[0])},t.getTEClass]}},[s("option",{attrs:{value:""}},[t._v("請選擇上課分校")]),t._l(t.schoolList,(function(e,i){return s("option",{key:i,domProps:{value:e.sid}},[t._v(t._s(e.name))])}))],2)]),s("div",{staticClass:"search-ui-box h-mr10"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.clid,expression:"searchForm.clid"}],staticClass:"select-sty h-w180",attrs:{name:"clid",id:"clid"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"clid",e.target.multiple?i:i[0])},t.getTeacher]}},[s("option",{attrs:{value:""}},[t._v("請選擇班級")]),t._l(t.classList,(function(e,i){return s("option",{key:i,domProps:{value:e.clid}},[t._v(t._s(e.name))])}))],2)]),s("div",{staticClass:"search-ui-box h-mr10"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.tid,expression:"searchForm.tid"}],staticClass:"select-sty h-w200",attrs:{name:"tid",id:"tid"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"tid",e.target.multiple?i:i[0])}}},[s("option",{attrs:{value:""}},[t._v("請選擇組題老師")]),t._l(t.teacherList,(function(e,i){return s("option",{key:i,domProps:{value:e.tid}},[t._v(t._s(e.name))])}))],2)]),s("div",{staticClass:"search-ui-box"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.date,expression:"searchForm.date"}],staticClass:"input-sty h-w200",attrs:{type:"date",name:"date",id:"date"},domProps:{value:t.searchForm.date},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"date",e.target.value)}}})]),s("div",{staticClass:"c-btn-area"},[s("a",{staticClass:"c-btn c-btn-search",on:{click:function(e){return e.preventDefault(),t.getPaperList.apply(null,arguments)}}},[t._v("搜尋")])])]),s("img",{staticClass:"img-role01",attrs:{src:i("135c")}})]),s("div",{staticClass:"c-btn-area h-txt-r"},[s("router-link",{staticClass:"c-btn",attrs:{to:"/teacher/homework/paper/add"}},[s("i",{staticClass:"fa fa-plus"}),t._v(" 新增作業")])],1),s("ul",{staticClass:"c-list"},[t._m(1),t._l(t.paperList,(function(e,i){return s("li",{key:i},[s("div",{staticClass:"group-box-83",attrs:{title:"查看",alt:"查看"}},[s("div",{staticClass:"box-20"},[t._v(t._s(e.name))]),s("div",{staticClass:"box-14"},[t._v(t._s(e.school))]),s("div",{staticClass:"box-10"},[t._v(t._s(e.city))]),s("div",{staticClass:"box-14"},[t._v(t._s(e.class))]),s("div",{staticClass:"box-14"},[t._v(t._s(e.teacher))]),s("div",{staticClass:"box-20"},[t._v(t._s(e.date))]),s("div",{staticClass:"box-8"},[t._v(t._s(e.activeShow))])]),s("div",{staticClass:"box-16 c-operate"},[e.tid==t.tid?s("router-link",{attrs:{to:"/teacher/homework/paper/edit?hid="+e.hid,title:"編輯",alt:"編輯"}},[s("i",{staticClass:"fa fa-pencil"})]):t._e(),e.tid==t.tid?s("a",{attrs:{disabled:t.doubleClick,title:"刪除",alt:"刪除"},on:{click:function(i){return i.preventDefault(),t.delPaper(e.hid)}}},[s("i",{staticClass:"fa fa-times"})]):t._e(),s("router-link",{staticClass:"c-list-btn",attrs:{to:"/teacher/homework/paper/info?hid="+e.hid}},[t._v(" 查看作業 ")])],1)])})),s("p",{staticClass:"h-mt25 h-txt-grey"},[t._v("共"+t._s(t.num)+"筆資料")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.num>t.perpage,expression:"num > perpage"}],staticClass:"c-pagination"},[s("a",{staticClass:"c-page-prev",on:{click:function(e){return e.preventDefault(),t.getPageList(t.page-1)}}},[s("img",{attrs:{src:i("bbc6"),alt:"前一頁"}})]),t._l(t.maxPage,(function(e){return s("a",{key:e,class:{act:e==t.page},on:{click:function(i){return i.preventDefault(),t.getPageList(e)}}},[t._v(t._s(e))])})),s("a",{on:{click:function(e){return e.preventDefault(),t.getPageList(t.page+1)}}},[s("img",{attrs:{src:i("bbc6"),alt:"下一頁"}})])],2)],2)]),s("APLightbox",{attrs:{message:t.errorMsg}}),s("APConfirmDelete",{on:{submitDelete:t.deletePaper}}),s("Footer")],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",[t._v("作業日期")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"title"},[i("div",{staticClass:"group-box-83"},[i("div",{staticClass:"box-20"},[t._v("作業名稱")]),i("div",{staticClass:"box-14"},[t._v("分校名稱")]),i("div",{staticClass:"box-10"},[t._v("縣市")]),i("div",{staticClass:"box-14"},[t._v("班級名稱")]),i("div",{staticClass:"box-14"},[t._v("組題老師")]),i("div",{staticClass:"box-20"},[t._v("作業日期")]),i("div",{staticClass:"box-8"},[t._v("狀態")])]),i("div",{staticClass:"box-16"},[t._v("操作")])])}],r=i("9ab4"),c=i("1b40"),n=i("4f4c"),o=i("3617"),l=i("93f3"),u=i("0d59"),h=i("4c63"),d=function(){function t(){this.date="",this.tid="",this.clid="",this.sid="",this.cid="",this.active=""}return t}(),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.searchForm=new d,e.cityList={},e.schoolList={},e.classList={},e.teacherList={},e.paperList={},e.num=0,e.page=1,e.perpage=50,e.maxPage=0,e.hid=0,e.errorMsg="",e.tid=window.localStorage.getItem("teacher_tid"),e.token=window.localStorage.getItem("teacherToken"),e}return Object(r["c"])(e,t),e.prototype.created=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return this.getPaperList(),t=this,[4,h["a"].getTECity(this.tid)];case 1:return t.cityList=e.sent(),[2]}}))}))},e.prototype.getTESchool=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return this.searchForm.sid="",this.searchForm.clid="",this.searchForm.tid="",t=this.searchForm.cid,e=this,[4,h["a"].getTESchool(t,this.tid)];case 1:return e.schoolList=i.sent(),this.classList=[],this.teacherList=[],[2]}}))}))},e.prototype.getTEClass=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return this.searchForm.clid="",this.searchForm.tid="",t=this.searchForm.sid,e=this,[4,h["a"].getTEClass(t,this.tid)];case 1:return e.classList=i.sent(),this.teacherList=[],[2]}}))}))},e.prototype.getTeacher=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return this.searchForm.tid="",t=this.searchForm.clid,e=this,[4,h["a"].getTeacher(2,t,0)];case 1:return e.teacherList=i.sent(),[2]}}))}))},e.prototype.getPaperList=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return t={page:this.page,perpage:this.perpage,date:this.searchForm.date,tid:this.searchForm.tid,clid:this.searchForm.clid,sid:this.searchForm.sid,cid:this.searchForm.cid,active:this.searchForm.active,teacher:this.tid,token:this.token},[4,u["d"].teGetPaperList(t)];case 1:return e=i.sent(),h["a"].checkToken(e.ERR_CODE),this.num=e.num,this.paperList=e.list,this.maxPage=Math.ceil(this.num/this.perpage),[2]}}))}))},e.prototype.getPageList=function(t){this.page=t<1?1:t>this.maxPage?this.maxPage:t,this.getPaperList()},e.prototype.delPaper=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,i;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return e={hid:t,token:this.token},[4,u["d"].teCheckPaper(e)];case 1:switch(i=s.sent(),i){case l["a"].InvalidToken:h["a"].logout();break;case 3:this.$emit("openConfirmDelete",!0,"此作業已有學生填寫，確認刪除?");break;default:this.$emit("openConfirmDelete",!0);break}return this.hid=t,[2]}}))}))},e.prototype.deletePaper=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return this.doubleClick?[3,2]:(this.doubleClick=!0,t={hid:this.hid,token:this.token},[4,u["d"].teDelPaper(t)]);case 1:switch(e=i.sent(),this.$emit("closeConfirmDelete",!1),e){case l["a"].InvalidToken:h["a"].logout();break;case l["a"].Success:this.doubleClick=!1,this.$router.go(0);break;default:this.errorMsg=l["b"][e],this.$emit("openAPLightbox",!0),this.doubleClick=!1;break}i.label=2;case 2:return[2]}}))}))},e=Object(r["b"])([Object(c["a"])({components:{Header:n["b"],APLightbox:o["c"],APConfirmDelete:o["b"],Footer:n["a"]}})],e),e}(c["d"]),p=v,m=(i("f7c1"),i("2877")),f=Object(m["a"])(p,s,a,!1,null,null,null);e["default"]=f.exports},bbc6:function(t,e,i){t.exports=i.p+"img/iocn_arrow.89c14ccc.svg"},f7c1:function(t,e,i){}}]);
//# sourceMappingURL=chunk-fef8b100.d5647091.js.map