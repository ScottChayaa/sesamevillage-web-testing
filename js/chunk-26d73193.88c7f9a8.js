(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26d73193","chunk-74c42831"],{"3baa":function(t,e,i){"use strict";i.r(e),i.d(e,"SearchForm",(function(){return h}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"textbook"}}),i("div",{staticClass:"main"},[i("h1",[t._v("教材管理")]),i("div",{staticClass:"search-signle"},[i("form",{attrs:{method:"get"}},[i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.active,expression:"searchForm.active"}],staticClass:"select-sty w150",attrs:{name:"active",id:"active"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"active",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇狀態")]),i("option",{attrs:{value:"1"}},[t._v("啟用")]),i("option",{attrs:{value:"2"}},[t._v("停用")])])]),i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.grade,expression:"searchForm.grade"}],staticClass:"select-sty w200",attrs:{name:"grade"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"grade",e.target.multiple?i:i[0])},t.getLevel]}},[i("option",{attrs:{value:""}},[t._v("請選擇級數")]),t._l(t.gradeList,(function(e,n){return i("option",{key:n,domProps:{value:e.grade}},[t._v(t._s(e.grade))])}))],2)]),i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.level,expression:"searchForm.level"}],staticClass:"select-sty w150",attrs:{name:"level"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"level",e.target.multiple?i:i[0])},t.getUnit]}},[i("option",{attrs:{value:""}},[t._v("請選擇Level")]),t._l(t.levelList,(function(e,n){return i("option",{key:n,domProps:{value:e.level}},[t._v(t._s(e.level))])}))],2)]),i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.unit,expression:"searchForm.unit"}],staticClass:"select-sty w150",attrs:{name:"unit"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"unit",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇單元")]),t._l(t.unitList,(function(e,n){return i("option",{key:n,domProps:{value:e.unit}},[t._v(t._s(e.unit))])}))],2)]),i("div",{staticClass:"btn-area"},[i("div",{staticClass:"btn btn-submit"},[i("i",{staticClass:"fa fa-search"}),t._v(" 搜尋 "),i("input",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.getTextbookList.apply(null,arguments)}}})])])])]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn",attrs:{to:"/admin/textbook/add"}},[i("i",{staticClass:"fa fa-plus"}),t._v(" 新增教材 ")])],1),i("ul",{staticClass:"list"},[t._m(0),t._l(t.textbookList,(function(e,n){return i("li",{key:n},[i("div",{staticClass:"group-box-83",attrs:{title:"編輯",alt:"編輯"}},[i("div",{staticClass:"box-16"},[i("router-link",{attrs:{to:"/admin/textbook/edit?tbid="+e.tbid}},[t._v(t._s(e.updateTime))])],1),i("div",{staticClass:"box-12"},[i("router-link",{attrs:{to:"/admin/textbook/edit?tbid="+e.tbid}},[t._v(t._s(e.grade))])],1),i("div",{staticClass:"box-12"},[i("router-link",{attrs:{to:"/admin/textbook/edit?tbid="+e.tbid}},[t._v(t._s(e.level))])],1),i("div",{staticClass:"box-12"},[i("router-link",{attrs:{to:"/admin/textbook/edit?tbid="+e.tbid}},[t._v(t._s(e.unit))])],1),i("div",{staticClass:"box-20"},[i("router-link",{attrs:{to:"/admin/textbook/edit?tbid="+e.tbid}},[t._v(t._s(e.categoryShow))])],1),i("div",{staticClass:"box-10"},[i("router-link",{attrs:{to:"/admin/textbook/edit?tbid="+e.tbid}},[t._v(t._s(e.activeShow))])],1),i("div",{staticClass:"box-15"},[i("a",{attrs:{href:e.pdf,target:"_blank",title:"查看",alt:"查看"}},[i("i",{staticClass:"fa fa-file-pdf-o"})])])]),i("div",{staticClass:"box-15"},[i("router-link",{attrs:{to:"/admin/textbook/edit?tbid="+e.tbid,title:"編輯",alt:"編輯"}},[i("i",{staticClass:"fa fa-pencil"})]),i("a",{attrs:{title:"刪除",alt:"刪除",disabled:t.doubleClick},on:{click:function(i){return i.preventDefault(),t.delTextbook(e.tbid)}}},[i("i",{staticClass:"fa fa-times"})])],1)])})),i("p",{staticClass:"h-mt10"},[t._v("共"+t._s(t.num)+"筆資料")])],2),i("div",{staticClass:"pagination"},[i("div",{staticClass:"pagination-table"},[i("div",{staticClass:"pagination-text"},[i("div",{staticClass:"pagination-numbers",domProps:{innerHTML:t._s(t.pageHtml)}})])])])]),i("ConfirmDelete",{on:{submitDelete:t.deleteTextbook}}),i("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"title"},[i("div",{staticClass:"group-box-83"},[i("div",{staticClass:"box-16"},[t._v("更新時間")]),i("div",{staticClass:"box-12"},[t._v("級數")]),i("div",{staticClass:"box-12"},[t._v("Level")]),i("div",{staticClass:"box-12"},[t._v("單元")]),i("div",{staticClass:"box-20"},[t._v("使用分校")]),i("div",{staticClass:"box-10"},[t._v("狀態")]),i("div",{staticClass:"box-15"},[t._v("檔案")])]),i("div",{staticClass:"box-15"},[t._v("操作")])])}],a=i("9ab4"),o=i("1b40"),r=i("4f4c"),c=i("3617"),l=i("93f3"),u=i("0d59"),d=i("60b9"),h=function(){function t(){this.unit="",this.level="",this.grade="",this.active=""}return t}(),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.searchForm=new h,e.textbookList={},e.num=0,e.pageHtml="",e.gradeList={},e.levelList={},e.unitList={},e.tbid=0,e.token=window.localStorage.getItem("adminToken"),e.errorMsg="",e.openLB=!1,e}return Object(a["c"])(e,t),e.prototype.created=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t;return Object(a["d"])(this,(function(e){switch(e.label){case 0:return this.getTextbookList(),t=this,[4,d["a"].getGrade()];case 1:return t.gradeList=e.sent(),[2]}}))}))},e.prototype.getTextbookList=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return t={page:this.$route.query.page,active:this.searchForm.active,grade:this.searchForm.grade,level:this.searchForm.level,unit:this.searchForm.unit,token:this.token},[4,u["k"].getList(t)];case 1:return e=i.sent(),d["a"].checkToken(e.ERR_CODE),this.num=e.num,this.textbookList=e.list,this.pageHtml=e.pageHtml,[2]}}))}))},e.prototype.getLevel=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return this.searchForm.level="",this.searchForm.unit="",t=this.searchForm.grade,e=this,[4,d["a"].getLevel(t)];case 1:return e.levelList=i.sent(),this.unitList={},[2]}}))}))},e.prototype.getUnit=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t;return Object(a["d"])(this,(function(e){for(this.searchForm.unit="",t=1;t<=25;t++)this.unitList[t]={unit:"Unit-"+t};return this.unitList[26]={unit:"Midterm Exam"},this.unitList[27]={unit:"Final Exam"},this.unitList[28]={unit:"VIDEO Q"},this.unitList[29]={unit:"WORKSHOP"},[2]}))}))},e.prototype.delTextbook=function(t){this.$emit("openConfirmDelete",!0),this.tbid=t},e.prototype.deleteTextbook=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return this.doubleClick?[3,2]:(this.doubleClick=!0,t={tbid:this.tbid,token:this.token},e=this,[4,u["k"].del(t)]);case 1:e.errNo=i.sent(),this.$emit("closeConfirmDelete",!1),d["a"].checkToken(this.errNo),this.errorMsg=l["b"][this.errNo],this.openLB=!0,this.doubleClick=!1,i.label=2;case 2:return[2]}}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===l["a"].Success&&this.$router.go(0)},e=Object(a["b"])([Object(o["a"])({components:{SideNav:r["e"],ConfirmDelete:c["h"],Lightbox:c["i"]}})],e),e}(o["d"]),b=v,p=(i("8cf3"),i("2877")),m=Object(p["a"])(b,n,s,!1,null,null,null);e["default"]=m.exports},"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("9ab4"),s=i("1b40"),a=i("0d59"),o=i("93f3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e.admin_identity=window.localStorage.getItem("admin_identity"),e}return Object(n["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==o["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={grade:t,token:this.token},[4,a["c"].getLevel(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return("/admin/quiz/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/quiz/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/homework/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/homework/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)?(t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},t[28]={unit:"VIDEO Q"},t[29]={unit:"WORKSHOP"},[2,t]):[2,t]}))}))},e.prototype.getAllCity=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={cid:t,token:this.token},[4,a["c"].getRegion(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={sid:t,token:this.token},[4,a["c"].getCity(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={cid:t,token:this.token},[4,a["c"].getSchool(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(n["a"])(this,void 0,void 0,(function(){var s,o;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return s={type:t,sid:e,clid:i,token:this.token},[4,a["f"].getClass(s)];case 1:return o=n.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(n["a"])(this,void 0,void 0,(function(){var s,o;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return s={type:t,clid:e,tid:i,token:this.token},[4,a["f"].getClassTeacher(s)];case 1:return o=n.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e}(s["d"]),c=r.instance},"8cf3":function(t,e,i){}}]);
//# sourceMappingURL=chunk-26d73193.88c7f9a8.js.map