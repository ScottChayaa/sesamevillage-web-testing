(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea2dfa9c","chunk-7470f487"],{"0dd9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=o(i("d887"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function s(t,e){var i,o;(0,n.default)(t),"object"===r(e)?(i=e.min||0,o=e.max):(i=arguments[1]||0,o=arguments[2]);var s=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],a=t.length-s.length;return a>=i&&("undefined"===typeof o||a<=o)}t.exports=e.default,t.exports.default=e.default},"2fe3":function(t,e,i){},"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("9ab4"),o=i("1b40"),r=i("0d59"),s=i("93f3"),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e}return Object(n["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==s["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,r["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={grade:t,token:this.token},[4,r["c"].getLevel(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(t,e){return Object(n["a"])(this,void 0,void 0,(function(){var i,o;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return i={grade:t,level:e,token:this.token},[4,r["c"].getUnit(i)];case 1:return o=n.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getAllCity=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,r["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={cid:t,token:this.token},[4,r["c"].getRegion(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,r["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={sid:t,token:this.token},[4,r["c"].getCity(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={cid:t,token:this.token},[4,r["c"].getSchool(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(n["a"])(this,void 0,void 0,(function(){var o,s;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return o={type:t,sid:e,clid:i,token:this.token},[4,r["f"].getClass(o)];case 1:return s=n.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(n["a"])(this,void 0,void 0,(function(){var o,s;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return o={type:t,clid:e,tid:i,token:this.token},[4,r["f"].getClassTeacher(o)];case 1:return s=n.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e}(o["d"]),c=a.instance},c00b:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("472e"),o=i("0dd9"),r=i.n(o),s="maxLength";function a(t,e){return"string"===typeof t&&r()(t,{min:0,max:e})}function c(t,e){return Object(n["a"])({name:s,constraints:[t],validator:{validate:function(t,e){return a(t,e.constraints[0])},defaultMessage:Object(n["b"])((function(t){return t+"$property must be shorter than or equal to $constraint1 characters"}),e)}},e)}},f60b:function(t,e,i){"use strict";i.r(e),i.d(e,"VideoForm",(function(){return p}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"video"}}),i("div",{staticClass:"main"},[i("h1",[t._v("課程影片")]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn",attrs:{to:"/admin/video"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1),i("form",{attrs:{action:""}},[i("div",{staticClass:"input-box"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.videoForm.title,expression:"videoForm.title"}],staticClass:"input-sty",attrs:{type:"text"},domProps:{value:t.videoForm.title},on:{input:function(e){e.target.composing||t.$set(t.videoForm,"title",e.target.value)}}}),""!==t.errorMsgMap["title"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["title"]))]):t._e()]),i("br"),i("div",{staticClass:"input-box"},[t._m(1),i("span",{staticClass:"h-mr10"},[t._v("https://www.youtube.com/embed/")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.videoForm.link,expression:"videoForm.link"}],staticClass:"input-sty required w250",attrs:{type:"text"},domProps:{value:t.videoForm.link},on:{input:function(e){e.target.composing||t.$set(t.videoForm,"link",e.target.value)}}}),""!==t.errorMsgMap["link"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["link"]))]):t._e()]),i("br"),i("div",{staticClass:"input-box"},[t._m(2),i("div",{staticClass:"check-list"},[i("label",{attrs:{for:"active_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.videoForm.active,expression:"videoForm.active"}],staticClass:"required",attrs:{type:"radio",name:"active",id:"active_1",title:"至少選擇一個",value:"1"},domProps:{checked:t._q(t.videoForm.active,"1")},on:{change:function(e){return t.$set(t.videoForm,"active","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("啟用")])]),i("label",{attrs:{for:"active_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.videoForm.active,expression:"videoForm.active"}],staticClass:"radio-box required",attrs:{type:"radio",name:"active",id:"active_2",title:"至少選擇一個",value:"2"},domProps:{checked:t._q(t.videoForm.active,"2")},on:{change:function(e){return t.$set(t.videoForm,"active","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("停用")])]),""!==t.errorMsgMap["active"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["active"]))]):t._e()])]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/video"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")]),i("div",{staticClass:"btn btn-submit"},[i("i",{staticClass:"fa fa-check"}),t._v(" 確認送出 "),i("input",{staticClass:"btn",attrs:{type:"button",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}})])],1)])]),i("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"title"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("影片標題")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("Youtube嵌入")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"active"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("狀態")])}],r=i("9ab4"),s=i("1b40"),a=i("87d7"),c=i("f2fa"),u=i("c00b"),l=i("43e4"),d=i("4f4c"),v=i("3617"),h=i("93f3"),f=i("0d59"),b=i("60b9"),p=function(){function t(){this.title="",this.link="",this.active=2,this.token=window.localStorage.getItem("adminToken")}return Object(r["b"])([Object(a["a"])(),Object(c["a"])({message:"必填"}),Object(u["a"])(30,{message:"最多輸入30字"})],t.prototype,"title",void 0),Object(r["b"])([Object(a["a"])(),Object(c["a"])({message:"必填"}),Object(u["a"])(30,{message:"最多輸入30字"})],t.prototype,"link",void 0),Object(r["b"])([Object(a["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"active",void 0),t}(),m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.videoForm=new p,e.token=window.localStorage.getItem("adminToken"),e.errorMsg="",e.openLB=!1,e.errNo=0,e.errorMsgMap={title:"",link:"",active:""},e}return Object(r["c"])(e,t),e.prototype.validateAndSubmit=function(){var t=this;Object(l["a"])(this.videoForm,{skipMissingProperties:!0}).then((function(e){return Object(r["a"])(t,void 0,void 0,(function(){var t,i,n=this;return Object(r["d"])(this,(function(o){switch(o.label){case 0:return 0!==e.length?(this.errorMsgMap={title:"",link:"",active:""},e.forEach((function(t,e){var i=t.constraints;Object.keys(i).forEach((function(e){n.errorMsgMap[t.property]=i[e]}))})),[2]):this.doubleClick?[3,2]:(this.doubleClick=!0,t=JSON.parse(JSON.stringify(this.videoForm)),i=this,[4,f["l"].add(t)]);case 1:if(i.errNo=o.sent(),this.errNo===h["a"].InvalidToken)return b["a"].logout(),[2];this.openLB=!0,this.doubleClick=!1,this.errorMsg=h["b"][this.errNo],o.label=2;case 2:return[2]}}))}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===h["a"].Success&&this.$router.push("/admin/video")},e=Object(r["b"])([Object(s["a"])({components:{SideNav:d["e"],Lightbox:v["i"]}})],e),e}(s["d"]),k=m,g=(i("2fe3"),i("2877")),y=Object(g["a"])(k,n,o,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-ea2dfa9c.f8d8ef97.js.map