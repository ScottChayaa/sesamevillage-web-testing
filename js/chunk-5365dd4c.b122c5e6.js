(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5365dd4c","chunk-7470f487"],{"2fe3":function(t,e,i){},"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("9ab4"),n=i("1b40"),r=i("0d59"),o=i("93f3"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e}return Object(s["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==o["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,r["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={grade:t,token:this.token},[4,r["c"].getLevel(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(t,e){return Object(s["a"])(this,void 0,void 0,(function(){var i,n;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return i={grade:t,level:e,token:this.token},[4,r["c"].getUnit(i)];case 1:return n=s.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getAllCity=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,r["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={cid:t,token:this.token},[4,r["c"].getRegion(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,r["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={sid:t,token:this.token},[4,r["c"].getCity(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={cid:t,token:this.token},[4,r["c"].getSchool(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var n,o;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={type:t,sid:e,clid:i,token:this.token},[4,r["f"].getClass(n)];case 1:return o=s.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var n,o;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={type:t,clid:e,tid:i,token:this.token},[4,r["f"].getClassTeacher(n)];case 1:return o=s.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e}(n["d"]),a=c.instance},"62ce":function(t,e,i){"use strict";i.r(e),i.d(e,"SearchForm",(function(){return h}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"rollcall"}}),i("div",{staticClass:"main"},[i("h1",[t._v("線上點名管理")]),i("div",{staticClass:"search-signle"},[i("form",{attrs:{method:"get"}},[i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.cid,expression:"searchForm.cid"}],staticClass:"select-sty w200",attrs:{name:"cid",id:"cid"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"cid",e.target.multiple?i:i[0])},function(e){return t.getSchool(t.searchForm.cid)}]}},[i("option",{attrs:{value:""}},[t._v("請選擇上課分校縣市")]),t._l(t.cityList,(function(e,s){return i("option",{key:s,domProps:{value:e.cid}},[t._v(t._s(e.city))])}))],2)]),i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.sid,expression:"searchForm.sid"}],staticClass:"select-sty w150",attrs:{name:"sid",id:"sid"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"sid",e.target.multiple?i:i[0])},function(e){return t.getClass(t.searchForm.sid)}]}},[i("option",{attrs:{value:""}},[t._v("請選擇上課分校")]),t._l(t.schoolList,(function(e,s){return i("option",{key:s,domProps:{value:e.sid}},[t._v(t._s(e.name))])}))],2)]),i("div",{staticClass:"search-ui-box"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.clid,expression:"searchForm.clid"}],staticClass:"select-sty w150",attrs:{name:"clid",id:"clid"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"clid",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇上課班級")]),t._l(t.classList,(function(e,s){return i("option",{key:s,domProps:{value:e.clid}},[t._v(t._s(e.name))])}))],2)]),i("div",{staticClass:"search-ui-box"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.time,expression:"searchForm.time"}],staticClass:"input-sty w200",attrs:{type:"date",name:"time",id:"time"},domProps:{value:t.searchForm.time},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"time",e.target.value)}}})]),i("div",{staticClass:"btn-area"},[i("div",{staticClass:"btn btn-submit"},[i("i",{staticClass:"fa fa-search"}),t._v(" 搜尋 "),i("input",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.getRollcallList()}}})])])])]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn",attrs:{to:"/admin/rollcall/add"}},[i("i",{staticClass:"fa fa-plus"}),t._v(" 新增點名表 ")])],1),i("ul",{staticClass:"list"},[t._m(1),t._l(t.rollcallList,(function(e,s){return i("li",{key:s},[i("router-link",{staticClass:"group-box-83",attrs:{to:"/admin/rollcall/record?rid="+e.rid,title:"紀錄",alt:"紀錄"}},[i("div",{staticClass:"box-14"},[t._v(t._s(e.class))]),i("div",{staticClass:"box-12"},[t._v(t._s(e.school))]),i("div",{staticClass:"box-12"},[t._v(t._s(e.city))]),i("div",{staticClass:"box-16"},[t._v(t._s(e.teacher))]),i("div",{staticClass:"box-20"},[t._v(t._s(e.time))]),i("div",{staticClass:"box-20"},[t._v(t._s(e.note))])]),i("div",{staticClass:"box-15"},[i("router-link",{staticClass:"btn h-mr10",attrs:{to:"/admin/rollcall/record?rid="+e.rid}},[t._v("點名紀錄")]),i("a",{attrs:{title:"刪除",alt:"刪除",disabled:t.doubleClick},on:{click:function(i){return i.preventDefault(),t.delRollcall(e.rid)}}},[i("i",{staticClass:"fa fa-times"})])],1)],1)})),i("p",{staticClass:"h-mt10"},[t._v("共"+t._s(t.num)+"筆資料")])],2),i("div",{staticClass:"pagination"},[i("div",{staticClass:"pagination-table"},[i("div",{staticClass:"pagination-text"},[i("div",{staticClass:"pagination-numbers",domProps:{innerHTML:t._s(t.pageHtml)}})])])])]),i("ConfirmDelete",{on:{submitDelete:t.deleteRollcall}}),i("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",[t._v("點名日期")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"title"},[i("div",{staticClass:"group-box-83"},[i("div",{staticClass:"box-14"},[t._v("班級名稱")]),i("div",{staticClass:"box-12"},[t._v("分校名稱")]),i("div",{staticClass:"box-12"},[t._v("縣市")]),i("div",{staticClass:"box-16"},[t._v("上課老師")]),i("div",{staticClass:"box-20"},[t._v("上課日期及時間")]),i("div",{staticClass:"box-20"},[t._v("點名備註")])]),i("div",{staticClass:"box-15"},[t._v("操作")])])}],r=i("9ab4"),o=i("1b40"),c=i("4f4c"),a=i("3617"),l=i("93f3"),u=i("0d59"),d=i("60b9"),h=function(){function t(){this.time="",this.clid="",this.sid="",this.cid=""}return t}(),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.searchForm=new h,e.cityList={},e.schoolList={},e.classList={},e.rollcallList={},e.num=0,e.pageHtml="",e.rid=0,e.errNo=0,e.errorMsg="",e.openLB=!1,e.identity=window.localStorage.getItem("admin_identity"),e.sid=window.localStorage.getItem("admin_sid"),e.cid="",e.token=window.localStorage.getItem("adminToken"),e}return Object(r["c"])(e,t),e.prototype.created=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e,i;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return"1"!=this.identity?[3,2]:(t=this,[4,d["a"].getSchoolCity()]);case 1:return t.cityList=s.sent(),[3,4];case 2:return e=this,[4,d["a"].getCity(this.sid)];case 3:e.cityList=s.sent(),this.cid=this.cityList[0].cid,this.searchForm.cid=this.cid,i=window.localStorage.getItem("admin_school"),this.schoolList[0]={sid:this.sid,name:i},this.searchForm.sid=this.sid,this.getClass(this.sid),s.label=4;case 4:return this.getRollcallList(),[2]}}))}))},e.prototype.getSchool=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return"1"!=this.identity?[3,2]:(this.searchForm.sid="",this.searchForm.clid="",e=this,[4,d["a"].getSchool(t)]);case 1:e.schoolList=i.sent(),this.classList=[],i.label=2;case 2:return[2]}}))}))},e.prototype.getClass=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return this.searchForm.clid="",e=this,[4,d["a"].getClass(2,t,0)];case 1:return e.classList=i.sent(),[2]}}))}))},e.prototype.getRollcallList=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return"2"!=this.identity||""!=this.searchForm.cid&&""!=this.searchForm.sid||(this.searchForm.cid=this.cid,this.searchForm.sid=this.sid,this.getClass(this.sid)),t={page:this.$route.query.page,time:this.searchForm.time,clid:this.searchForm.clid,sid:this.searchForm.sid,cid:this.searchForm.cid,token:this.token},[4,u["g"].getList(t)];case 1:return e=i.sent(),d["a"].checkToken(e.ERR_CODE),this.num=e.num,this.rollcallList=e.list,this.pageHtml=e.pageHtml,[2]}}))}))},e.prototype.delRollcall=function(t){this.$emit("openConfirmDelete",!0),this.rid=t},e.prototype.deleteRollcall=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return this.doubleClick?[3,2]:(this.doubleClick=!0,t={rid:this.rid,token:this.token},e=this,[4,u["g"].del(t)]);case 1:e.errNo=i.sent(),this.$emit("closeConfirmDelete",!1),d["a"].checkToken(this.errNo),this.errorMsg=l["b"][this.errNo],this.openLB=!0,this.doubleClick=!1,i.label=2;case 2:return[2]}}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===l["a"].Success&&this.$router.go(0)},e=Object(r["b"])([Object(o["a"])({components:{SideNav:c["e"],ConfirmDelete:a["h"],Lightbox:a["i"]}})],e),e}(o["d"]),m=v,f=(i("2fe3"),i("2877")),p=Object(f["a"])(m,s,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-5365dd4c.b122c5e6.js.map