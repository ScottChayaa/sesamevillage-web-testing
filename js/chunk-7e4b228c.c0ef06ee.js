(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e4b228c","chunk-358bf7e3"],{"4c63":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n("9ab4"),i=n("1b40"),r=n("0d59"),o=n("93f3"),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("teacherToken"),e}return Object(c["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/teacher/login"},e.prototype.checkToken=function(t){t!==o["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["d"])(this,(function(n){switch(n.label){case 0:return t={token:this.token},[4,r["c"].teGetGrade(t)];case 1:return e=n.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(c["a"])(this,void 0,void 0,(function(){var e,n;return Object(c["d"])(this,(function(c){switch(c.label){case 0:return e={grade:t,token:this.token},[4,r["c"].teGetLevel(e)];case 1:return n=c.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getTECity=function(t){return Object(c["a"])(this,void 0,void 0,(function(){var e,n;return Object(c["d"])(this,(function(c){switch(c.label){case 0:return e={tid:t,token:this.token},[4,r["c"].getTECity(e)];case 1:return n=c.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getTESchool=function(t,e){return Object(c["a"])(this,void 0,void 0,(function(){var n,i;return Object(c["d"])(this,(function(c){switch(c.label){case 0:return n={cid:t,tid:e,token:this.token},[4,r["c"].getTESchool(n)];case 1:return i=c.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTEClass=function(t,e){return Object(c["a"])(this,void 0,void 0,(function(){var n,i;return Object(c["d"])(this,(function(c){switch(c.label){case 0:return n={sid:t,tid:e,token:this.token},[4,r["c"].getTEClass(n)];case 1:return i=c.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTeacher=function(t,e,n){return Object(c["a"])(this,void 0,void 0,(function(){var i,o;return Object(c["d"])(this,(function(c){switch(c.label){case 0:return i={type:t,clid:e,tid:n,token:this.token},[4,r["c"].teGetTeacher(i)];case 1:return o=c.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e}(i["d"]),s=a.instance},"9cff":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{currentPage:"textbook"}}),n("div",{staticClass:"c-wrap1400"},[n("div",{staticClass:"c-tab"},[n("h3",{staticClass:"c-tit"},[t._v("教材使用")]),n("div",{staticClass:"c-tab-group"},t._l(t.gradeList,(function(e,c){return n("a",{key:c,class:[{act:t.grade===e.grade},t.classColor[e.grade]],on:{click:function(n){return n.preventDefault(),t.changeGrade(e.grade)}}},[t._v(t._s(e.grade))])})),0)]),n("div",{staticClass:"c-textbook-group"},t._l(t.textbookList,(function(e,c){return n("a",{key:c,staticClass:"c-textbook-item",attrs:{href:e.pdf,target:"_blank"}},[n("img",{attrs:{src:e.pic}}),n("p",[t._v(t._s(e.level))]),n("p",[t._v("Unit-"+t._s(e.unit))])])})),0),n("p",{staticClass:"h-mt25 h-txt-grey"},[t._v("共"+t._s(t.textbookList.length)+"筆資料")])]),n("Footer")],1)},i=[],r=n("9ab4"),o=n("1b40"),a=n("4f4c"),s=n("3617"),u=n("0d59"),l=n("4c63"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.textbookList={},e.gradeList={},e.token=window.localStorage.getItem("teacherToken"),e.tid=window.localStorage.getItem("teacher_tid"),e.grade="undefined"===typeof e.$route.query.grade?"K1":e.$route.query.grade,e.classColor={K1:"c-tab-k1",K2:"c-tab-k2",K3:"c-tab-k3",P1:"c-tab-p1",P2:"c-tab-p2",P3:"c-tab-p3",P4:"c-tab-p4",P5:"c-tab-p5",P6:"c-tab-p6"},e}return Object(r["c"])(e,t),e.prototype.created=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return this.getList(),t=this,[4,l["a"].getGrade()];case 1:return t.gradeList=e.sent(),[2]}}))}))},e.prototype.getList=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(n){switch(n.label){case 0:return t={grade:this.grade,tid:this.tid,token:this.token},[4,u["k"].teGetList(t)];case 1:return e=n.sent(),l["a"].checkToken(e.ERR_CODE),this.textbookList=e.list,[2]}}))}))},e.prototype.changeGrade=function(t){this.grade=t,this.getList()},e=Object(r["b"])([Object(o["a"])({components:{Header:a["b"],APLightbox:s["c"],Footer:a["a"]}})],e),e}(o["d"]),h=d,b=(n("f7c1"),n("2877")),f=Object(b["a"])(h,c,i,!1,null,null,null);e["default"]=f.exports},f7c1:function(t,e,n){}}]);
//# sourceMappingURL=chunk-7e4b228c.c0ef06ee.js.map