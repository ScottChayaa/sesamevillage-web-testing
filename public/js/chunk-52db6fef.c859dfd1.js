(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52db6fef"],{"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("9ab4"),s=i("1b40"),a=i("0d59"),c=i("93f3"),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e.admin_identity=window.localStorage.getItem("admin_identity"),e}return Object(n["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==c["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={grade:t,token:this.token},[4,a["c"].getLevel(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return("/admin/quiz/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/quiz/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)?(t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]):[2,t]}))}))},e.prototype.getAllCity=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={cid:t,token:this.token},[4,a["c"].getRegion(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={sid:t,token:this.token},[4,a["c"].getCity(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={cid:t,token:this.token},[4,a["c"].getSchool(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(n["a"])(this,void 0,void 0,(function(){var s,c;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return s={type:t,sid:e,clid:i,token:this.token},[4,a["f"].getClass(s)];case 1:return c=n.sent(),this.checkToken(c.ERR_CODE),[2,c.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(n["a"])(this,void 0,void 0,(function(){var s,c;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return s={type:t,clid:e,tid:i,token:this.token},[4,a["f"].getClassTeacher(s)];case 1:return c=n.sent(),this.checkToken(c.ERR_CODE),[2,c.list]}}))}))},e}(s["d"]),r=o.instance},dde0:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"student"}}),i("div",{staticClass:"main"},[i("h1",[t._v("學生資料")]),t._m(0),i("div",{staticClass:"sub-page"},[i("ul",[i("li",[i("a",{attrs:{href:"/admin/student/edit?stid="+t.stid}},[t._v("基本資料")])]),i("li",{staticClass:"act"},[i("a",{attrs:{href:"/admin/student/learning?stid="+t.stid}},[t._v("學習歷程")])])])]),i("ul",{staticClass:"list"},[t._m(1),t._l(t.resultList,(function(e,n){return i("li",{key:n},[i("div",{staticClass:"group-box-83"},[i("div",{staticClass:"box-20"},[t._v(t._s(e.name))]),i("div",{staticClass:"box-8"},[t._v(t._s(e.grade))]),i("div",{staticClass:"box-10"},[t._v(t._s(e.school))]),i("div",{staticClass:"box-10"},[t._v(t._s(e.city))]),i("div",{staticClass:"box-14"},[t._v(t._s(e.class))]),i("div",{staticClass:"box-10"},[t._v(t._s(e.teacher))]),i("div",{staticClass:"box-10"},[t._v(t._s("1"===e.active?"":e.accuracy+"%"))]),i("div",{staticClass:"box-16"},[t._v(t._s(e.completeDate))])]),i("div",{staticClass:"box-15"},[i("a",{attrs:{href:"/admin/quiz/result/info?sqid="+e.sqid,title:"查看",alt:"查看"}},[i("i",{staticClass:"fa fa-pencil"})])])])})),i("p",{staticClass:"h-mt10"},[t._v("共"+t._s(t.num)+"筆資料")])],2),i("div",{staticClass:"pagination"},[i("div",{staticClass:"pagination-table"},[i("div",{staticClass:"pagination-text"},[i("div",{staticClass:"pagination-numbers",domProps:{innerHTML:t._s(t.pageHtml)}})])])])])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn-area"},[i("a",{staticClass:"btn",attrs:{href:"/admin/student"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"title"},[i("div",{staticClass:"group-box-83"},[i("div",{staticClass:"box-20"},[t._v("測驗名稱")]),i("div",{staticClass:"box-8"},[t._v("級數")]),i("div",{staticClass:"box-10"},[t._v("分校名稱")]),i("div",{staticClass:"box-10"},[t._v("縣市")]),i("div",{staticClass:"box-14"},[t._v("班級名稱")]),i("div",{staticClass:"box-10"},[t._v("組卷老師")]),i("div",{staticClass:"box-10"},[t._v("正確率")]),i("div",{staticClass:"box-16"},[t._v("測驗日期")])]),i("div",{staticClass:"box-15"},[t._v("查看試卷")])])}],a=i("9ab4"),c=i("1b40"),o=i("4f4c"),r=i("0d59"),u=i("60b9"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.resultList={},e.num=0,e.pageHtml="",e.stid=e.$route.query.stid,e.token=window.localStorage.getItem("adminToken"),e}return Object(a["c"])(e,t),e.prototype.created=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return t={page:this.$route.query.page,stid:this.stid,token:this.token},[4,r["f"].getLearningResultList(t)];case 1:return e=i.sent(),u["a"].checkToken(e.ERR_CODE),this.num=e.num,this.resultList=e.list,this.pageHtml=e.pageHtml,[2]}}))}))},e=Object(a["b"])([Object(c["a"])({components:{SideNav:o["e"]}})],e),e}(c["d"]),d=l,h=(i("8cf3"),i("2877")),v=Object(h["a"])(d,n,s,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-52db6fef.c859dfd1.js.map