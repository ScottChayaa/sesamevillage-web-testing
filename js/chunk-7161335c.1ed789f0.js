(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7161335c","chunk-358bf7e3"],{"135c":function(t,e,i){t.exports=i.p+"img/role01.86aa94e6.png"},"41ce":function(t,e,i){"use strict";i.r(e),i.d(e,"SearchForm",(function(){return h}));var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",{attrs:{currentPage:"homework"}}),s("div",{staticClass:"c-wrap1400"},[s("div",{staticClass:"c-tab"},[s("h3",{staticClass:"c-tit"},[t._v("作業管理 / 題目管理")]),s("div",{staticClass:"c-tab-group"},[s("router-link",{staticClass:"c-tab-red act",attrs:{to:"/teacher/homework/question"}},[t._v("題目管理")]),s("router-link",{staticClass:"c-tab-blue",attrs:{to:"/teacher/homework/paper"}},[t._v("作業組題管理")]),s("router-link",{staticClass:"c-tab-orange",attrs:{to:"/teacher/homework/verify"}},[t._v("作業審核管理")])],1)]),s("div",{staticClass:"c-search-group"},[s("div",{staticClass:"c-search"},[s("div",{staticClass:"search-ui-box h-mr10"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.active,expression:"searchForm.active"}],staticClass:"select-sty h-w150",attrs:{name:"active",id:"active"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"active",e.target.multiple?i:i[0])}}},[s("option",{attrs:{value:""}},[t._v("請選擇狀態")]),s("option",{attrs:{value:"1"}},[t._v("啟用")]),s("option",{attrs:{value:"2"}},[t._v("停用")])])]),s("div",{staticClass:"search-ui-box h-mr10"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.grade,expression:"searchForm.grade"}],staticClass:"select-sty h-w150",attrs:{name:"grade"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"grade",e.target.multiple?i:i[0])},t.getLevel]}},[s("option",{attrs:{value:""}},[t._v("請選擇級數")]),t._l(t.gradeList,(function(e,i){return s("option",{key:i,domProps:{value:e.grade}},[t._v(t._s(e.grade))])}))],2)]),s("div",{staticClass:"search-ui-box h-mr10"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.level,expression:"searchForm.level"}],staticClass:"select-sty h-w150",attrs:{name:"level",id:"level"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"level",e.target.multiple?i:i[0])},t.getUnit]}},[s("option",{attrs:{value:""}},[t._v("請選擇Level")]),t._l(t.levelList,(function(e,i){return s("option",{key:i,domProps:{value:e.level}},[t._v(t._s(e.level))])}))],2)]),s("div",{staticClass:"search-ui-box h-mr10"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.unit,expression:"searchForm.unit"}],staticClass:"select-sty h-w150",attrs:{name:"unit",id:"unit"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"unit",e.target.multiple?i:i[0])}}},[s("option",{attrs:{value:""}},[t._v("請選擇單元")]),t._l(t.unitList,(function(e,i){return s("option",{key:i,domProps:{value:e.unit}},[t._v("Unit-"+t._s(e.unit))])}))],2)]),s("div",{staticClass:"search-ui-box h-mr10"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.difficulty,expression:"searchForm.difficulty"}],staticClass:"select-sty h-w180",attrs:{name:"difficulty",id:"difficulty"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"difficulty",e.target.multiple?i:i[0])}}},[s("option",{attrs:{value:""}},[t._v("請選擇難易度")]),s("option",{attrs:{value:"1"}},[t._v("難")]),s("option",{attrs:{value:"2"}},[t._v("中")]),s("option",{attrs:{value:"3"}},[t._v("易")])])]),s("div",{staticClass:"search-ui-box"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.tid,expression:"searchForm.tid"}],staticClass:"select-sty h-w150",attrs:{name:"tid",id:"tid"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"tid",e.target.multiple?i:i[0])}}},[s("option",{attrs:{value:""}},[t._v("出題老師")]),t._l(t.teacherList,(function(e,i){return s("option",{key:i,domProps:{value:e.tid}},[t._v(t._s(e.name))])}))],2)]),s("div",{staticClass:"search-ui-box h-flex"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.question,expression:"searchForm.question"}],staticClass:"input-sty",attrs:{type:"text",name:"question",id:"question"},domProps:{value:t.searchForm.question},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"question",e.target.value)}}})]),s("div",{staticClass:"c-btn-area"},[s("a",{staticClass:"c-btn c-btn-search",on:{click:function(e){return e.preventDefault(),t.getQuestionList.apply(null,arguments)}}},[t._v("搜尋")])])]),s("img",{staticClass:"img-role01",attrs:{src:i("135c")}})]),s("div",{staticClass:"c-btn-area h-txt-r"},[s("router-link",{staticClass:"c-btn",attrs:{to:"/teacher/homework/question/add"}},[s("i",{staticClass:"fa fa-plus"}),t._v(" 新增題目")])],1),s("ul",{staticClass:"c-list"},[t._m(1),t._l(t.questionList,(function(e,i){return s("li",{key:i},[s("div",{staticClass:"group-box-88",attrs:{title:"編輯",alt:"編輯"}},[s("div",{staticClass:"box-8"},[t._v(t._s(e.grade))]),s("div",{staticClass:"box-10"},[t._v(t._s(e.level))]),s("div",{staticClass:"box-10"},[t._v("Unit-"+t._s(e.unit))]),s("div",{staticClass:"box-14 h-text-ellipsis"},[t._v(t._s(e.question))]),s("div",{staticClass:"box-10"},[s("span",{staticClass:"difficulty",class:{"difficulty-h":1==e.difficulty,"difficulty-m":2==e.difficulty,"difficulty-e":3==e.difficulty}},[t._v(t._s(e.difficultyShow))])]),s("div",{staticClass:"box-10"},[t._v(t._s(e.typeShow))]),s("div",{staticClass:"box-12"},[t._v(t._s(e.teacher))]),s("div",{staticClass:"box-16"},[t._v(t._s(e.createTime))]),s("div",{staticClass:"box-10"},[t._v(t._s(e.activeShow))])]),e.tid==t.tid?s("div",{staticClass:"box-10 c-operate"},[s("router-link",{attrs:{to:"/teacher/homework/question/edit?hqid="+e.hqid,title:"編輯",alt:"編輯"}},[s("i",{staticClass:"fa fa-pencil"})]),s("a",{attrs:{title:"刪除",alt:"刪除",disabled:t.doubleClick},on:{click:function(i){return i.preventDefault(),t.delQuestion(e.hqid)}}},[s("i",{staticClass:"fa fa-times"})])],1):t._e()])})),s("p",{staticClass:"h-mt25 h-txt-grey"},[t._v("共"+t._s(t.num)+"筆資料")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.num>t.perpage,expression:"num > perpage"}],staticClass:"c-pagination"},[s("a",{staticClass:"c-page-prev",on:{click:function(e){return e.preventDefault(),t.getPageList(t.page-1)}}},[s("img",{attrs:{src:i("bbc6"),alt:"前一頁"}})]),t._l(t.maxPage,(function(e){return s("a",{key:e,class:{act:e==t.page},on:{click:function(i){return i.preventDefault(),t.getPageList(e)}}},[t._v(t._s(e))])})),s("a",{on:{click:function(e){return e.preventDefault(),t.getPageList(t.page+1)}}},[s("img",{attrs:{src:i("bbc6"),alt:"下一頁"}})])],2)],2)]),s("APLightbox",{attrs:{message:t.errorMsg}}),s("APConfirmDelete",{on:{submitDelete:t.deleteQuestion}}),s("Footer")],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",[t._v("題目名稱")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"title"},[i("div",{staticClass:"group-box-88"},[i("div",{staticClass:"box-8"},[t._v("級數")]),i("div",{staticClass:"box-10"},[t._v("Level")]),i("div",{staticClass:"box-10"},[t._v("單元")]),i("div",{staticClass:"box-14"},[t._v("題目名稱")]),i("div",{staticClass:"box-10"},[t._v("難易度")]),i("div",{staticClass:"box-10"},[t._v("題型")]),i("div",{staticClass:"box-12"},[t._v("出題老師")]),i("div",{staticClass:"box-16"},[t._v("建立日期")]),i("div",{staticClass:"box-10"},[t._v("狀態")])]),i("div",{staticClass:"box-10"},[t._v("操作")])])}],r=i("9ab4"),n=i("1b40"),o=i("4f4c"),c=i("3617"),l=i("93f3"),u=i("0d59"),v=i("4c63"),h=function(){function t(){this.question="",this.tid="",this.difficulty="",this.grade="",this.level="",this.unit="",this.active=""}return t}(),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.searchForm=new h,e.teacherList={},e.questionList={},e.gradeList={},e.levelList={},e.unitList={},e.num=0,e.page=1,e.perpage=50,e.maxPage=0,e.hqid=0,e.errorMsg="",e.tid=window.localStorage.getItem("teacher_tid"),e.token=window.localStorage.getItem("teacherToken"),e}return Object(r["c"])(e,t),e.prototype.created=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return this.getTeacher(),this.getQuestionList(),t=this,[4,v["a"].getGrade()];case 1:return t.gradeList=e.sent(),[2]}}))}))},e.prototype.getTeacher=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,u["f"].teGetAllTeacher(t)];case 1:return e=i.sent(),v["a"].checkToken(e.ERR_CODE),this.teacherList=e.list,[2]}}))}))},e.prototype.getQuestionList=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return t={page:this.page,perpage:this.perpage,question:this.searchForm.question,tid:this.searchForm.tid,difficulty:this.searchForm.difficulty,grade:this.searchForm.grade,level:this.searchForm.level,unit:this.searchForm.unit,active:this.searchForm.active,token:this.token},[4,u["d"].teGetQuestionList(t)];case 1:return e=i.sent(),v["a"].checkToken(e.ERR_CODE),this.num=e.num,this.questionList=e.list,this.maxPage=Math.ceil(this.num/this.perpage),[2]}}))}))},e.prototype.getPageList=function(t){this.page=t<1?1:t>this.maxPage?this.maxPage:t,this.getQuestionList()},e.prototype.getLevel=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return this.searchForm.level="",this.searchForm.unit="",t=this.searchForm.grade,e=this,[4,v["a"].getLevel(t)];case 1:return e.levelList=i.sent(),this.unitList={},[2]}}))}))},e.prototype.getUnit=function(){this.searchForm.unit="";for(var t=1;t<=25;t++)this.unitList[t]={unit:t}},e.prototype.delQuestion=function(t){this.$emit("openConfirmDelete",!0),this.hqid=t},e.prototype.deleteQuestion=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return this.doubleClick?[3,2]:(this.doubleClick=!0,t={hqid:this.hqid,token:this.token},[4,u["d"].teDelQuestion(t)]);case 1:switch(e=i.sent(),this.$emit("closeConfirmDelete",!1),e){case l["a"].InvalidToken:v["a"].logout();break;case l["a"].Success:this.doubleClick=!1,this.$router.go(0);break;default:this.errorMsg=l["b"][e],this.$emit("openAPLightbox",!0),this.doubleClick=!1;break}i.label=2;case 2:return[2]}}))}))},e=Object(r["b"])([Object(n["a"])({components:{Header:o["b"],APLightbox:c["c"],APConfirmDelete:c["b"],Footer:o["a"]}})],e),e}(n["d"]),p=d,f=(i("f7c1"),i("2877")),m=Object(f["a"])(p,s,a,!1,null,null,null);e["default"]=m.exports},"4c63":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var s=i("9ab4"),a=i("1b40"),r=i("0d59"),n=i("93f3"),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("teacherToken"),e}return Object(s["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/teacher/login"},e.prototype.checkToken=function(t){t!==n["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,r["c"].teGetGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={grade:t,token:this.token},[4,r["c"].teGetLevel(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTECity=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={tid:t,token:this.token},[4,r["c"].getTECity(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTESchool=function(t,e){return Object(s["a"])(this,void 0,void 0,(function(){var i,a;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return i={cid:t,tid:e,token:this.token},[4,r["c"].getTESchool(i)];case 1:return a=s.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e.prototype.getTEClass=function(t,e){return Object(s["a"])(this,void 0,void 0,(function(){var i,a;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return i={sid:t,tid:e,token:this.token},[4,r["c"].getTEClass(i)];case 1:return a=s.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var a,n;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return a={type:t,clid:e,tid:i,token:this.token},[4,r["c"].teGetTeacher(a)];case 1:return n=s.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e}(a["d"]),c=o.instance},bbc6:function(t,e,i){t.exports=i.p+"img/iocn_arrow.89c14ccc.svg"},f7c1:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7161335c.1ed789f0.js.map