(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b348612","chunk-7470f487"],{"1e9f":function(t,e,i){"use strict";i.r(e),i.d(e,"SearchForm",(function(){return d}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"quiz"}}),i("div",{staticClass:"main"},[i("h1",[t._v("測驗管理")]),i("div",{staticClass:"sub-page"},[i("ul",[i("li",{staticClass:"act"},[i("router-link",{attrs:{to:"/admin/quiz/question"}},[t._v("題目管理")])],1),i("li",[i("router-link",{attrs:{to:"/admin/quiz/paper"}},[t._v("組卷管理")])],1),i("li",[i("router-link",{attrs:{to:"/admin/quiz/result"}},[t._v("測驗結果查詢")])],1)])]),i("div",{staticClass:"search-signle"},[i("form",{attrs:{method:"get"}},[i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.active,expression:"searchForm.active"}],staticClass:"select-sty w150",attrs:{name:"active",id:"active"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"active",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇狀態")]),i("option",{attrs:{value:"1"}},[t._v("啟用")]),i("option",{attrs:{value:"2"}},[t._v("停用")])])]),i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.grade,expression:"searchForm.grade"}],staticClass:"select-sty w150",attrs:{name:"grade"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"grade",e.target.multiple?i:i[0])},t.getLevel]}},[i("option",{attrs:{value:""}},[t._v("請選擇級數")]),t._l(t.gradeList,(function(e,s){return i("option",{key:s,domProps:{value:e.grade}},[t._v(t._s(e.grade))])}))],2)]),i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.level,expression:"searchForm.level"}],staticClass:"select-sty w150",attrs:{name:"level"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"level",e.target.multiple?i:i[0])},t.getUnit]}},[i("option",{attrs:{value:""}},[t._v("請選擇Level")]),t._l(t.levelList,(function(e,s){return i("option",{key:s,domProps:{value:e.level}},[t._v(t._s(e.level))])}))],2)]),i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.unit,expression:"searchForm.unit"}],staticClass:"select-sty w150",attrs:{name:"unit"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"unit",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇單元")]),t._l(t.unitList,(function(e,s){return i("option",{key:s,domProps:{value:e.unit}},[t._v("Unit-"+t._s(e.unit))])}))],2)]),i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.difficulty,expression:"searchForm.difficulty"}],staticClass:"select-sty w150",attrs:{name:"difficulty",id:"difficulty"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"difficulty",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇難易度")]),i("option",{attrs:{value:"1"}},[t._v("難")]),i("option",{attrs:{value:"2"}},[t._v("中")]),i("option",{attrs:{value:"3"}},[t._v("易")])])]),i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.tid,expression:"searchForm.tid"}],staticClass:"select-sty w150",attrs:{name:"tid",id:"tid"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"tid",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("出題老師")]),t._l(t.teacherList,(function(e,s){return i("option",{key:s,domProps:{value:e.tid}},[t._v(t._s(e.name))])}))],2)]),i("div",{staticClass:"search-ui-box"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.question,expression:"searchForm.question"}],staticClass:"input-sty w250",attrs:{type:"text",name:"question",id:"question"},domProps:{value:t.searchForm.question},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"question",e.target.value)}}})]),i("div",{staticClass:"btn-area"},[i("div",{staticClass:"btn btn-submit"},[i("i",{staticClass:"fa fa-search"}),t._v(" 搜尋 "),i("input",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.getQuestionList.apply(null,arguments)}}})])])])]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn",attrs:{to:"/admin/quiz/question/add"}},[i("i",{staticClass:"fa fa-plus"}),t._v(" 新增題目 ")])],1),i("ul",{staticClass:"list"},[t._m(1),t._l(t.questionList,(function(e,s){return i("li",{key:s},[i("router-link",{staticClass:"group-box-83",attrs:{to:"/admin/quiz/question/edit?qqid="+e.qqid,title:"編輯",alt:"編輯"}},[i("div",{staticClass:"box-10"},[t._v(t._s(e.grade))]),i("div",{staticClass:"box-10"},[t._v(t._s(e.level))]),i("div",{staticClass:"box-10"},[t._v("Unit-"+t._s(e.unit))]),i("div",{staticClass:"box-20 h-text-ellipsis"},[t._v(t._s(e.question))]),i("div",{staticClass:"box-8"},[t._v(t._s(e.difficultyShow))]),i("div",{staticClass:"box-8"},[t._v(t._s(e.typeShow))]),i("div",{staticClass:"box-10"},[t._v(t._s(e.teacher))]),i("div",{staticClass:"box-14"},[t._v(t._s(e.createTime))]),i("div",{staticClass:"box-10"},[t._v(t._s(e.activeShow))])]),i("div",{staticClass:"box-15"},[i("router-link",{attrs:{to:"/admin/quiz/question/edit?qqid="+e.qqid,title:"編輯",alt:"編輯"}},[i("i",{staticClass:"fa fa-pencil"})]),i("a",{attrs:{title:"刪除",alt:"刪除",disabled:t.doubleClick},on:{click:function(i){return i.preventDefault(),t.delQuestion(e.qqid)}}},[i("i",{staticClass:"fa fa-times"})])],1)],1)})),i("p",{staticClass:"h-mt10"},[t._v("共"+t._s(t.num)+"筆資料")])],2),i("div",{staticClass:"pagination"},[i("div",{staticClass:"pagination-table"},[i("div",{staticClass:"pagination-text"},[i("div",{staticClass:"pagination-numbers",domProps:{innerHTML:t._s(t.pageHtml)}})])])])]),i("ConfirmDelete",{on:{submitDelete:t.deleteQuestion}}),i("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"question"}},[i("span",[t._v("題目名稱")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"title"},[i("div",{staticClass:"group-box-83"},[i("div",{staticClass:"box-10"},[t._v("級數")]),i("div",{staticClass:"box-10"},[t._v("Level")]),i("div",{staticClass:"box-10"},[t._v("單元")]),i("div",{staticClass:"box-20"},[t._v("題目名稱")]),i("div",{staticClass:"box-8"},[t._v("難易度")]),i("div",{staticClass:"box-8"},[t._v("題型")]),i("div",{staticClass:"box-10"},[t._v("出題老師")]),i("div",{staticClass:"box-14"},[t._v("建立日期")]),i("div",{staticClass:"box-10"},[t._v("狀態")])]),i("div",{staticClass:"box-15"},[t._v("操作")])])}],a=i("9ab4"),r=i("1b40"),o=i("4f4c"),c=i("3617"),l=i("93f3"),u=i("0d59"),v=i("60b9"),d=function(){function t(){this.question="",this.tid="",this.difficulty="",this.grade="",this.level="",this.unit="",this.active=""}return t}(),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.searchForm=new d,e.teacherList={},e.questionList={},e.gradeList={},e.levelList={},e.unitList={},e.num=0,e.pageHtml="",e.qqid=0,e.token=window.localStorage.getItem("adminToken"),e.errorMsg="",e.openLB=!1,e}return Object(a["c"])(e,t),e.prototype.created=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t;return Object(a["d"])(this,(function(e){switch(e.label){case 0:return this.getTeacher(),this.getQuestionList(),t=this,[4,v["a"].getGrade()];case 1:return t.gradeList=e.sent(),[2]}}))}))},e.prototype.getTeacher=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e,i,s;return Object(a["d"])(this,(function(n){switch(n.label){case 0:return t=window.localStorage.getItem("admin_identity"),e=window.localStorage.getItem("admin_sid"),i={type:2,identity:t,sid:e,token:this.token},[4,u["f"].getTeacher(i)];case 1:return s=n.sent(),v["a"].checkToken(s.ERR_CODE),this.teacherList=s.list,[2]}}))}))},e.prototype.getQuestionList=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return t={page:this.$route.query.page,question:this.searchForm.question,tid:this.searchForm.tid,difficulty:this.searchForm.difficulty,grade:this.searchForm.grade,level:this.searchForm.level,unit:this.searchForm.unit,active:this.searchForm.active,token:this.token},[4,u["f"].getQuestionList(t)];case 1:return e=i.sent(),v["a"].checkToken(e.ERR_CODE),this.num=e.num,this.questionList=e.list,this.pageHtml=e.pageHtml,[2]}}))}))},e.prototype.getLevel=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return this.searchForm.level="",this.searchForm.unit="",t=this.searchForm.grade,e=this,[4,v["a"].getLevel(t)];case 1:return e.levelList=i.sent(),this.unitList={},[2]}}))}))},e.prototype.getUnit=function(){this.searchForm.unit="";for(var t=1;t<=25;t++)this.unitList[t]={unit:t}},e.prototype.delQuestion=function(t){this.$emit("openConfirmDelete",!0),this.qqid=t},e.prototype.deleteQuestion=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return this.doubleClick?[3,2]:(this.doubleClick=!0,t={qqid:this.qqid,token:this.token},e=this,[4,u["f"].delQuestion(t)]);case 1:e.errNo=i.sent(),this.$emit("closeConfirmDelete",!1),v["a"].checkToken(this.errNo),this.errorMsg=l["b"][this.errNo],this.openLB=!0,this.doubleClick=!1,i.label=2;case 2:return[2]}}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===l["a"].Success&&this.$router.go(0)},e=Object(a["b"])([Object(r["a"])({components:{SideNav:o["e"],ConfirmDelete:c["h"],Lightbox:c["i"]}})],e),e}(r["d"]),p=h,f=(i("2fe3"),i("2877")),m=Object(f["a"])(p,s,n,!1,null,null,null);e["default"]=m.exports},"2fe3":function(t,e,i){},"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var s=i("9ab4"),n=i("1b40"),a=i("0d59"),r=i("93f3"),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e}return Object(s["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==r["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={grade:t,token:this.token},[4,a["c"].getLevel(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(t,e){return Object(s["a"])(this,void 0,void 0,(function(){var i,n;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return i={grade:t,level:e,token:this.token},[4,a["c"].getUnit(i)];case 1:return n=s.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getAllCity=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={cid:t,token:this.token},[4,a["c"].getRegion(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={sid:t,token:this.token},[4,a["c"].getCity(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={cid:t,token:this.token},[4,a["c"].getSchool(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var n,r;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={type:t,sid:e,clid:i,token:this.token},[4,a["f"].getClass(n)];case 1:return r=s.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var n,r;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={type:t,clid:e,tid:i,token:this.token},[4,a["f"].getClassTeacher(n)];case 1:return r=s.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e}(n["d"]),c=o.instance}}]);
//# sourceMappingURL=chunk-0b348612.762ae6b7.js.map