(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6d1811e","chunk-74c42831"],{"045b":function(t,e,i){"use strict";i.r(e),i.d(e,"PaperForm",(function(){return p}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"homework"}}),i("div",{staticClass:"main"},[i("h1",[t._v("作業管理-組題資料")]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn",attrs:{to:"/admin/homework/paper"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1),i("form",{attrs:{action:""}},[i("div",{staticClass:"input-box"},[i("label",{attrs:{for:"name"}},[t._v("作業名稱")]),i("span",[t._v(t._s(t.paperForm.name))])]),i("div",{staticClass:"input-box"},[i("label",{attrs:{for:"date"}},[t._v("作業日期")]),i("span",[t._v(t._s(t.paperForm.date))])]),i("div",{staticClass:"input-box input-box-w"},[i("label",{attrs:{for:"tit"}},[t._v("上課分校")]),i("span",[t._v(t._s(t.paperForm.city))]),t._v("  "),i("span",[t._v(t._s(t.paperForm.school))])]),i("div",{staticClass:"input-box input-box-w"},[i("label",{attrs:{for:"tit"}},[t._v("上課班級")]),i("span",[t._v(t._s(t.paperForm.class))])]),i("div",{staticClass:"input-box input-box-w"},[i("label",{attrs:{for:"tit"}},[t._v("組題老師")]),i("span",[t._v(t._s(t.paperForm.teacher))])]),i("div",{staticClass:"input-box input-box-w"},[i("label",{attrs:{for:"tit"}},[t._v("級數")]),i("span",[t._v(t._s(t.paperForm.grade))])]),i("div",{staticClass:"input-box input-box-w"},[i("label",{attrs:{for:"tit"}},[t._v("Level")]),i("span",[t._v(t._s(t.paperForm.level))])]),i("div",{staticClass:"input-box input-box-w"},[i("label",{attrs:{for:"tit"}},[t._v("單元")]),i("span",[t._v(t._s(t.paperForm.unit))])]),i("div",{staticClass:"input-box input-box-w"},[i("label",{attrs:{for:"num"}},[t._v("題數")]),i("span",[t._v(t._s(t.paperForm.num))])]),i("div",{staticClass:"input-box"},[i("label",{attrs:{for:"articleTime"}},[t._v("狀態")]),i("div",{staticClass:"check-list"},[i("label",{attrs:{for:"active_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.paperForm.active,expression:"paperForm.active"}],attrs:{type:"radio",name:"active",id:"active_1",value:"1"},domProps:{checked:t._q(t.paperForm.active,"1")},on:{change:function(e){return t.$set(t.paperForm,"active","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("啟用")])]),i("label",{attrs:{for:"active_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.paperForm.active,expression:"paperForm.active"}],staticClass:"radio-box",attrs:{type:"radio",name:"active",id:"active_2",value:"2"},domProps:{checked:t._q(t.paperForm.active,"2")},on:{change:function(e){return t.$set(t.paperForm,"active","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("停用")])])])]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/homework/paper"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")])],1)])]),i("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},a=[],o=i("9ab4"),r=i("1b40"),s=i("4f4c"),c=i("3617"),u=i("0d59"),l=i("60b9"),p=function(){function t(){this.name="",this.date="",this.city="",this.school="",this.class="",this.teacher="",this.grade="",this.unit="",this.level="",this.num=0,this.active="",this.hid=""}return t}(),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.paperForm=new p,e.errorMsg="",e.openLB=!1,e.token=window.localStorage.getItem("adminToken"),e}return Object(o["c"])(e,t),e.prototype.created=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e;return Object(o["d"])(this,(function(i){switch(i.label){case 0:return t={hid:this.$route.query.hid,token:this.token},[4,u["d"].getPaper(t)];case 1:return e=i.sent(),this.assignDataToForm(e),[2]}}))}))},e.prototype.assignDataToForm=function(t){l["a"].checkToken(t.ERR_CODE);var e=t.info;this.paperForm.hid=e.hid,this.paperForm.name=e.name,this.paperForm.date=e.date,this.paperForm.city=e.city,this.paperForm.school=e.school,this.paperForm.class=e.class,this.paperForm.teacher=e.teacher,this.paperForm.grade=e.grade,this.paperForm.unit=e.unit,this.paperForm.level=e.level,this.paperForm.num=e.num,this.paperForm.active=e.active},e.prototype.closeLB=function(){this.openLB=!1},e=Object(o["b"])([Object(r["a"])({components:{SideNav:s["e"],Lightbox:c["i"]}})],e),e}(r["d"]),h=d,v=(i("8cf3"),i("2877")),m=Object(v["a"])(h,n,a,!1,null,null,null);e["default"]=m.exports},"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("9ab4"),a=i("1b40"),o=i("0d59"),r=i("93f3"),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e.admin_identity=window.localStorage.getItem("admin_identity"),e}return Object(n["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==r["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={grade:t,token:this.token},[4,o["c"].getLevel(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return("/admin/quiz/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/quiz/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/homework/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/homework/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)?(t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},t[28]={unit:"VIDEO Q"},t[29]={unit:"WORKSHOP"},[2,t]):[2,t]}))}))},e.prototype.getAllCity=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getRegion(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={sid:t,token:this.token},[4,o["c"].getCity(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getSchool(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(n["a"])(this,void 0,void 0,(function(){var a,r;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return a={type:t,sid:e,clid:i,token:this.token},[4,o["f"].getClass(a)];case 1:return r=n.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(n["a"])(this,void 0,void 0,(function(){var a,r;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return a={type:t,clid:e,tid:i,token:this.token},[4,o["f"].getClassTeacher(a)];case 1:return r=n.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e}(a["d"]),c=s.instance},"8cf3":function(t,e,i){}}]);
//# sourceMappingURL=chunk-e6d1811e.b36ca0ed.js.map