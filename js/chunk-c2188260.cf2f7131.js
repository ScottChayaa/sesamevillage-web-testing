(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2188260","chunk-7470f487"],{"2fe3":function(t,e,s){},4639:function(t,e,s){"use strict";s.r(e),s.d(e,"SearchForm",(function(){return d}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("SideNav",{attrs:{currentPage:"quiz"}}),s("div",{staticClass:"main"},[s("h1",[t._v("測驗管理")]),s("div",{staticClass:"sub-page"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/admin/quiz/question"}},[t._v("題目管理")])],1),s("li",[s("router-link",{attrs:{to:"/admin/quiz/paper"}},[t._v("組卷管理")])],1),s("li",{staticClass:"act"},[s("router-link",{attrs:{to:"/admin/quiz/result"}},[t._v("測驗結果查詢")])],1)])]),s("div",{staticClass:"search-signle"},[s("form",{attrs:{method:"get"}},[s("div",{staticClass:"search-ui-box"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.grade,expression:"searchForm.grade"}],staticClass:"select-sty w150",attrs:{name:"grade",id:"grade"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"grade",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("請選擇級數")]),t._l(t.gradeList,(function(e,i){return s("option",{key:i,domProps:{value:e.grade}},[t._v(t._s(e.grade))])}))],2)]),s("div",{staticClass:"search-ui-box"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.cid,expression:"searchForm.cid"}],staticClass:"select-sty w200",attrs:{name:"cid",id:"cid"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"cid",e.target.multiple?s:s[0])},function(e){return t.getSchool(t.searchForm.cid)}]}},[s("option",{attrs:{value:""}},[t._v("請選擇上課分校縣市")]),t._l(t.cityList,(function(e,i){return s("option",{key:i,domProps:{value:e.cid}},[t._v(t._s(e.city))])}))],2)]),s("div",{staticClass:"search-ui-box"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.sid,expression:"searchForm.sid"}],staticClass:"select-sty w200",attrs:{name:"sid",id:"sid"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"sid",e.target.multiple?s:s[0])},function(e){return t.getClass(t.searchForm.sid)}]}},[s("option",{attrs:{value:""}},[t._v("請選擇上課分校")]),t._l(t.schoolList,(function(e,i){return s("option",{key:i,domProps:{value:e.sid}},[t._v(t._s(e.name))])}))],2)]),s("div",{staticClass:"search-ui-box"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.clid,expression:"searchForm.clid"}],staticClass:"select-sty w150",attrs:{name:"clid",id:"clid"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"clid",e.target.multiple?s:s[0])},function(e){return t.getTeacher(t.searchForm.clid)}]}},[s("option",{attrs:{value:""}},[t._v("請選擇班級")]),t._l(t.classList,(function(e,i){return s("option",{key:i,domProps:{value:e.clid}},[t._v(t._s(e.name))])}))],2)]),s("div",{staticClass:"search-ui-box"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.tid,expression:"searchForm.tid"}],staticClass:"select-sty w200",attrs:{name:"tid",id:"tid"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"tid",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("請選擇組卷老師")]),t._l(t.teacherList,(function(e,i){return s("option",{key:i,domProps:{value:e.tid}},[t._v(t._s(e.name))])}))],2)]),s("div",{staticClass:"search-ui-box"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.date,expression:"searchForm.date"}],staticClass:"input-sty w200",attrs:{type:"date",name:"date",id:"date"},domProps:{value:t.searchForm.date},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"date",e.target.value)}}})]),s("br"),s("div",{staticClass:"search-ui-box"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.student,expression:"searchForm.student"}],staticClass:"input-sty w200",attrs:{type:"text",name:"student",id:"student"},domProps:{value:t.searchForm.student},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"student",e.target.value)}}})]),s("div",{staticClass:"search-ui-box"},[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.name,expression:"searchForm.name"}],staticClass:"input-sty w200",attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.searchForm.name},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"name",e.target.value)}}})]),s("div",{staticClass:"btn-area"},[s("div",{staticClass:"btn btn-submit"},[s("i",{staticClass:"fa fa-search"}),t._v(" 搜尋 "),s("input",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.getResultList.apply(null,arguments)}}})])])])]),s("div",{staticClass:"btn-area"},[s("a",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.exportList.apply(null,arguments)}}},[t._v("匯出excel")])]),s("ul",{staticClass:"list"},[t._m(3),t._l(t.resultList,(function(e,i){return s("li",{key:i},[s("router-link",{staticClass:"group-box-83",attrs:{to:"/admin/quiz/result/info?sqid="+e.sqid,title:"查看",alt:"查看"}},[s("div",{staticClass:"box-16"},[t._v(t._s(e.name))]),s("div",{staticClass:"box-8"},[t._v(t._s(e.grade))]),s("div",{staticClass:"box-10"},[t._v(t._s(e.school))]),s("div",{staticClass:"box-10"},[t._v(t._s(e.city))]),s("div",{staticClass:"box-10"},[t._v(t._s(e.class))]),s("div",{staticClass:"box-10"},[t._v(t._s(e.teacher))]),s("div",{staticClass:"box-10"},[t._v(t._s(e.student))]),s("div",{staticClass:"box-8"},[t._v(t._s("1"===e.active?"":e.accuracy+"%"))]),s("div",{staticClass:"box-14"},[t._v(t._s(e.completeDate))])]),s("div",{staticClass:"box-15"},[s("router-link",{attrs:{to:"/admin/quiz/result/info?sqid="+e.sqid,title:"查看",alt:"查看"}},[s("i",{staticClass:"fa fa-eye"})])],1)],1)})),s("p",{staticClass:"h-mt10"},[t._v("共"+t._s(t.num)+"筆資料")])],2),s("div",{staticClass:"pagination"},[s("div",{staticClass:"pagination-table"},[s("div",{staticClass:"pagination-text"},[s("div",{staticClass:"pagination-numbers",domProps:{innerHTML:t._s(t.pageHtml)}})])])])]),s("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",[t._v("測驗日期")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",[t._v("學生姓名")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",[t._v("測驗名稱")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"title"},[s("div",{staticClass:"group-box-83"},[s("div",{staticClass:"box-16"},[t._v("測驗名稱")]),s("div",{staticClass:"box-8"},[t._v("級數")]),s("div",{staticClass:"box-10"},[t._v("分校名稱")]),s("div",{staticClass:"box-10"},[t._v("縣市")]),s("div",{staticClass:"box-10"},[t._v("班級名稱")]),s("div",{staticClass:"box-10"},[t._v("組卷老師")]),s("div",{staticClass:"box-10"},[t._v("學生姓名")]),s("div",{staticClass:"box-8"},[t._v("正確率")]),s("div",{staticClass:"box-14"},[t._v("測驗日期")])]),s("div",{staticClass:"box-15"},[t._v("查看試卷")])])}],r=s("9ab4"),n=s("1b40"),c=s("4f4c"),o=s("3617"),l=s("0d59"),u=s("60b9"),d=function(){function t(){this.grade="",this.cid="",this.sid="",this.clid="",this.tid="",this.student="",this.date="",this.name=""}return t}(),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.searchForm=new d,e.cityList={},e.schoolList={},e.classList={},e.teacherList={},e.resultList={},e.gradeList={},e.num=0,e.pageHtml="",e.identity=window.localStorage.getItem("admin_identity"),e.sid=window.localStorage.getItem("admin_sid"),e.cid="",e.token=window.localStorage.getItem("adminToken"),e.errorMsg="",e.openLB=!1,e}return Object(r["c"])(e,t),e.prototype.created=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e,s,i;return Object(r["d"])(this,(function(a){switch(a.label){case 0:return"1"!=this.identity?[3,2]:(t=this,[4,u["a"].getSchoolCity()]);case 1:return t.cityList=a.sent(),[3,4];case 2:return e=this,[4,u["a"].getCity(this.sid)];case 3:e.cityList=a.sent(),this.cid=this.cityList[0].cid,this.searchForm.cid=this.cid,s=window.localStorage.getItem("admin_school"),this.schoolList[0]={sid:this.sid,name:s},this.searchForm.sid=this.sid,this.getClass(this.sid),a.label=4;case 4:return this.getResultList(),i=this,[4,u["a"].getGrade()];case 5:return i.gradeList=a.sent(),[2]}}))}))},e.prototype.getSchool=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return"1"!=this.identity?[3,2]:(this.searchForm.sid="",this.searchForm.clid="",this.searchForm.tid="",e=this,[4,u["a"].getSchool(t)]);case 1:e.schoolList=s.sent(),this.classList=[],this.teacherList=[],s.label=2;case 2:return[2]}}))}))},e.prototype.getClass=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return this.searchForm.clid="",this.searchForm.tid="",e=this,[4,u["a"].getClass(2,t,0)];case 1:return e.classList=s.sent(),this.teacherList=[],[2]}}))}))},e.prototype.getTeacher=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return this.searchForm.tid="",e=this,[4,u["a"].getTeacher(2,t,0)];case 1:return e.teacherList=s.sent(),[2]}}))}))},e.prototype.getResultList=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return"2"!=this.identity||""!=this.searchForm.cid&&""!=this.searchForm.sid||(this.searchForm.cid=this.cid,this.searchForm.sid=this.sid,this.getClass(this.sid)),t={page:this.$route.query.page,grade:this.searchForm.grade,cid:this.searchForm.cid,sid:this.searchForm.sid,clid:this.searchForm.clid,tid:this.searchForm.tid,student:this.searchForm.student,date:this.searchForm.date,name:this.searchForm.name,token:this.token},[4,l["f"].getResultList(t)];case 1:return e=s.sent(),u["a"].checkToken(e.ERR_CODE),this.num=e.num,this.resultList=e.list,this.pageHtml=e.pageHtml,[2]}}))}))},e.prototype.exportList=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return"2"!=this.identity||""!=this.searchForm.cid&&""!=this.searchForm.sid||(this.searchForm.cid=this.cid,this.searchForm.sid=this.sid,this.getClass(this.sid)),t={page:this.$route.query.page,grade:this.searchForm.grade,cid:this.searchForm.cid,sid:this.searchForm.sid,clid:this.searchForm.clid,tid:this.searchForm.tid,student:this.searchForm.student,date:this.searchForm.date,name:this.searchForm.name,token:this.token},[4,l["f"].exportList(t)];case 1:return e=s.sent(),window.location.href=e,[2]}}))}))},e.prototype.closeLB=function(){this.openLB=!1},e=Object(r["b"])([Object(n["a"])({components:{SideNav:c["e"],Lightbox:o["i"]}})],e),e}(n["d"]),v=h,m=(s("2fe3"),s("2877")),p=Object(m["a"])(v,i,a,!1,null,null,null);e["default"]=p.exports},"60b9":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s("9ab4"),a=s("1b40"),r=s("0d59"),n=s("93f3"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e}return Object(i["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==n["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,r["c"].getGrade(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={grade:t,token:this.token},[4,r["c"].getLevel(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getUnit=function(t,e){return Object(i["a"])(this,void 0,void 0,(function(){var s,a;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return s={grade:t,level:e,token:this.token},[4,r["c"].getUnit(s)];case 1:return a=i.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e.prototype.getAllCity=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,r["c"].getAllCity(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={cid:t,token:this.token},[4,r["c"].getRegion(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,r["c"].getSchoolCity(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={sid:t,token:this.token},[4,r["c"].getCity(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getSchool=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={cid:t,token:this.token},[4,r["c"].getSchool(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getClass=function(t,e,s){return Object(i["a"])(this,void 0,void 0,(function(){var a,n;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return a={type:t,sid:e,clid:s,token:this.token},[4,r["f"].getClass(a)];case 1:return n=i.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getTeacher=function(t,e,s){return Object(i["a"])(this,void 0,void 0,(function(){var a,n;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return a={type:t,clid:e,tid:s,token:this.token},[4,r["f"].getClassTeacher(a)];case 1:return n=i.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e}(a["d"]),o=c.instance}}]);
//# sourceMappingURL=chunk-c2188260.cf2f7131.js.map