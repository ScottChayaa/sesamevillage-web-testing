(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-127ad6c1","chunk-7470f487"],{"0dd9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=a(n("d887"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function i(t,e){var n,a;(0,r.default)(t),"object"===s(e)?(n=e.min||0,a=e.max):(n=arguments[1]||0,a=arguments[2]);var i=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],o=t.length-i.length;return o>=n&&("undefined"===typeof a||o<=a)}t.exports=e.default,t.exports.default=e.default},"2fe3":function(t,e,n){},"60b9":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("9ab4"),a=n("1b40"),s=n("0d59"),i=n("93f3"),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e}return Object(r["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==i["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(n){switch(n.label){case 0:return t={token:this.token},[4,s["c"].getGrade(t)];case 1:return e=n.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={grade:t,token:this.token},[4,s["c"].getLevel(e)];case 1:return n=r.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getUnit=function(t,e){return Object(r["a"])(this,void 0,void 0,(function(){var n,a;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return n={grade:t,level:e,token:this.token},[4,s["c"].getUnit(n)];case 1:return a=r.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e.prototype.getAllCity=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(n){switch(n.label){case 0:return t={token:this.token},[4,s["c"].getAllCity(t)];case 1:return e=n.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={cid:t,token:this.token},[4,s["c"].getRegion(e)];case 1:return n=r.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(n){switch(n.label){case 0:return t={token:this.token},[4,s["c"].getSchoolCity(t)];case 1:return e=n.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={sid:t,token:this.token},[4,s["c"].getCity(e)];case 1:return n=r.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getSchool=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={cid:t,token:this.token},[4,s["c"].getSchool(e)];case 1:return n=r.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getClass=function(t,e,n){return Object(r["a"])(this,void 0,void 0,(function(){var a,i;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return a={type:t,sid:e,clid:n,token:this.token},[4,s["f"].getClass(a)];case 1:return i=r.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTeacher=function(t,e,n){return Object(r["a"])(this,void 0,void 0,(function(){var a,i;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return a={type:t,clid:e,tid:n,token:this.token},[4,s["f"].getClassTeacher(a)];case 1:return i=r.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e}(a["d"]),c=o.instance},7966:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;var r=c(n("d887")),a=c(n("e409")),s=c(n("f754")),i=c(n("7f64")),o=c(n("8476"));function c(t){return t&&t.__esModule?t:{default:t}}var u={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1},l=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,d=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,p=/^[a-z\d]+$/,f=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,m=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,v=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,h=254;function b(t){var e=t.replace(/^"(.+)"$/,"$1");if(!e.trim())return!1;var n=/[\.";<>]/.test(e);if(n){if(e===t)return!1;var r=e.split('"').length===e.split('\\"').length;if(!r)return!1}return!0}function g(t,e){if((0,r.default)(t),e=(0,a.default)(e,u),e.require_display_name||e.allow_display_name){var n=t.match(l);if(n){var c=n[1];if(t=t.replace(c,"").replace(/(^<|>$)/g,""),c.endsWith(" ")&&(c=c.substr(0,c.length-1)),!b(c))return!1}else if(e.require_display_name)return!1}if(!e.ignore_max_length&&t.length>h)return!1;var g=t.split("@"),_=g.pop(),y=g.join("@"),x=_.toLowerCase();if(e.domain_specific_validation&&("gmail.com"===x||"googlemail.com"===x)){y=y.toLowerCase();var F=y.split("+")[0];if(!(0,s.default)(F.replace(".",""),{min:6,max:30}))return!1;for(var C=F.split("."),O=0;O<C.length;O++)if(!p.test(C[O]))return!1}if(!1===e.ignore_max_length&&(!(0,s.default)(y,{max:64})||!(0,s.default)(_,{max:254})))return!1;if(!(0,i.default)(_,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!(0,o.default)(_)){if(!_.startsWith("[")||!_.endsWith("]"))return!1;var j=_.substr(1,_.length-2);if(0===j.length||!(0,o.default)(j))return!1}}if('"'===y[0])return y=y.slice(1,y.length-1),e.allow_utf8_local_part?v.test(y):f.test(y);for(var w=e.allow_utf8_local_part?m:d,k=y.split("."),M=0;M<k.length;M++)if(!w.test(k[M]))return!1;return!e.blacklisted_chars||-1===y.search(new RegExp("[".concat(e.blacklisted_chars,"]+"),"g"))}t.exports=e.default,t.exports.default=e.default},"7f64":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=s(n("d887")),a=s(n("e409"));function s(t){return t&&t.__esModule?t:{default:t}}var i={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};function o(t,e){(0,r.default)(t),e=(0,a.default)(e,i),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var n=t.split("."),s=n[n.length-1];if(e.require_tld){if(n.length<2)return!1;if(!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(s))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(s))return!1}return!(!e.allow_numeric_tld&&/^\d+$/.test(s))&&n.every((function(t){return!(t.length>63)&&(!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(t)&&(!/[\uff01-\uff5e]/.test(t)&&(!/^-|-$/.test(t)&&!(!e.allow_underscores&&/_/.test(t)))))}))}t.exports=e.default,t.exports.default=e.default},8476:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=a(n("d887"));function a(t){return t&&t.__esModule?t:{default:t}}var s="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",i="(".concat(s,"[.]){3}").concat(s),o=new RegExp("^".concat(i,"$")),c="(?:[0-9a-fA-F]{1,4})",u=new RegExp("^("+"(?:".concat(c,":){7}(?:").concat(c,"|:)|")+"(?:".concat(c,":){6}(?:").concat(i,"|:").concat(c,"|:)|")+"(?:".concat(c,":){5}(?::").concat(i,"|(:").concat(c,"){1,2}|:)|")+"(?:".concat(c,":){4}(?:(:").concat(c,"){0,1}:").concat(i,"|(:").concat(c,"){1,3}|:)|")+"(?:".concat(c,":){3}(?:(:").concat(c,"){0,2}:").concat(i,"|(:").concat(c,"){1,4}|:)|")+"(?:".concat(c,":){2}(?:(:").concat(c,"){0,3}:").concat(i,"|(:").concat(c,"){1,5}|:)|")+"(?:".concat(c,":){1}(?:(:").concat(c,"){0,4}:").concat(i,"|(:").concat(c,"){1,6}|:)|")+"(?::((?::".concat(c,"){0,5}:").concat(i,"|(?::").concat(c,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,r.default)(t),e=String(e),!e)return l(t,4)||l(t,6);if("4"===e){if(!o.test(t))return!1;var n=t.split(".").sort((function(t,e){return t-e}));return n[3]<=255}return"6"===e&&!!u.test(t)}t.exports=e.default,t.exports.default=e.default},"9fd3":function(t,e,n){"use strict";n.r(e),n.d(e,"StudentForm",(function(){return b}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("SideNav",{attrs:{currentPage:"student"}}),n("div",{staticClass:"main"},[n("h1",[t._v("學生資料")]),n("div",{staticClass:"btn-area"},[n("router-link",{staticClass:"btn",attrs:{to:"/admin/student"}},[n("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1),n("form",{attrs:{action:"",method:"post",name:"studentForm",id:"studentForm"}},[n("div",{staticClass:"input-box"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.acc,expression:"studentForm.acc"}],staticClass:"input-sty",attrs:{type:"text",name:"acc",id:"acc",maxlehgth:50},domProps:{value:t.studentForm.acc},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"acc",e.target.value)}}}),""!==t.errorMsgMap["acc"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["acc"]))]):t._e()]),n("div",{staticClass:"input-box"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.name,expression:"studentForm.name"}],staticClass:"input-sty",attrs:{type:"text",name:"name",id:"name",maxlehgth:30},domProps:{value:t.studentForm.name},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"name",e.target.value)}}}),""!==t.errorMsgMap["name"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["name"]))]):t._e()]),n("div",{staticClass:"input-box"},[t._m(2),n("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.phone,expression:"studentForm.phone"}],staticClass:"input-sty",attrs:{type:"text",name:"phone",id:"phone",maxlehgth:20},domProps:{value:t.studentForm.phone},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"phone",e.target.value)}}}),""!==t.errorMsgMap["phone"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["phone"]))]):t._e()]),n("div",{staticClass:"input-box"},[t._m(3),n("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.parentName,expression:"studentForm.parentName"}],staticClass:"input-sty",attrs:{type:"text",name:"parentName",id:"parentName",maxlehgth:30},domProps:{value:t.studentForm.parentName},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"parentName",e.target.value)}}}),""!==t.errorMsgMap["parentName"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["parentName"]))]):t._e()]),n("div",{staticClass:"input-box"},[t._m(4),n("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.parentPhone,expression:"studentForm.parentPhone"}],staticClass:"input-sty",attrs:{type:"text",name:"parentPhone",id:"parentPhone",maxlehgth:20},domProps:{value:t.studentForm.parentPhone},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"parentPhone",e.target.value)}}}),""!==t.errorMsgMap["parentPhone"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["parentPhone"]))]):t._e()]),n("div",{staticClass:"input-box input-box-w"},[t._m(5),n("select",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.cid,expression:"studentForm.cid"}],staticClass:"select-sty h-mr10 w250",attrs:{name:"cid",id:"cid"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.studentForm,"cid",e.target.multiple?n:n[0])},t.getRegion]}},[n("option",{attrs:{value:""}},[t._v("請選擇縣市")]),t._l(t.cityList,(function(e,r){return n("option",{key:r,domProps:{value:e.cid}},[t._v(t._s(e.city))])}))],2),""!==t.errorMsgMap["cid"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["cid"]))]):t._e(),n("select",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.crid,expression:"studentForm.crid"}],staticClass:"select-sty h-mr10 w250",attrs:{name:"crid",id:"crid"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.studentForm,"crid",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v("請選擇區域")]),t._l(t.regionList,(function(e,r){return n("option",{key:r,domProps:{value:e.crid}},[t._v(t._s(e.region))])}))],2),""!==t.errorMsgMap["crid"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["crid"]))]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.address,expression:"studentForm.address"}],staticClass:"input-sty required w500",attrs:{type:"text",name:"address",id:"address"},domProps:{value:t.studentForm.address},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"address",e.target.value)}}}),""!==t.errorMsgMap["address"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["address"]))]):t._e()]),n("div",{staticClass:"input-box input-box-w"},[t._m(6),n("div",{staticClass:"note"},[t._v("建議尺寸 500x500 以上，格式限jpg、png、jpeg，檔案大小限3M ")]),n("div",{staticClass:"upload-img"},[n("div",{staticClass:"head-box upload-box-sty",on:{click:function(e){return t.$refs.file.click()}}},[n("input",{ref:"file",staticClass:"upload-pic required",attrs:{type:"file",name:"pic",id:"pic",accept:"image/*"},on:{change:function(e){return t.changefile(e)}}}),n("div",{staticClass:"upload-click-area",attrs:{id:"previews"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.studentForm.pic,expression:"studentForm.pic != ''"}],attrs:{src:t.studentForm.pic,alt:""}})])])]),""!==t.errorMsgMap["pic"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pic"]))]):t._e()]),n("div",{staticClass:"input-box input-box-w"},[t._m(7),n("select",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"select-sty h-mr10 w250",attrs:{name:"city",id:"city"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.city=e.target.multiple?n:n[0]},function(e){return t.getSchool(t.city)}]}},[n("option",{attrs:{value:""}},[t._v("請選擇縣市")]),t._l(t.schoolCityList,(function(e,r){return n("option",{key:r,domProps:{value:e.cid}},[t._v(t._s(e.city))])}))],2),n("select",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.sid,expression:"studentForm.sid"}],staticClass:"select-sty h-mr10 w250",attrs:{name:"sid",id:"sid"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.studentForm,"sid",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v("請選擇分校")]),t._l(t.schoolList,(function(e,r){return n("option",{key:r,domProps:{value:e.sid}},[t._v(t._s(e.name))])}))],2),""!==t.errorMsgMap["sid"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["sid"]))]):t._e()]),n("div",{staticClass:"input-box input-box-w"},[n("label",{attrs:{for:"desc"}},[t._v("備註")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.note,expression:"studentForm.note"}],staticClass:"input-sty desc-info required",attrs:{name:"note",id:"note"},domProps:{value:t.studentForm.note},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"note",e.target.value)}}}),""!==t.errorMsgMap["note"]?n("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["note"]))]):t._e()]),n("div",{staticClass:"input-box"},[t._m(8),n("div",{staticClass:"check-list"},[n("label",{attrs:{for:"active_1"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.active,expression:"studentForm.active"}],staticClass:"required",attrs:{type:"radio",name:"active",id:"active_1",value:"1"},domProps:{checked:t._q(t.studentForm.active,"1")},on:{change:function(e){return t.$set(t.studentForm,"active","1")}}}),n("div",{staticClass:"radio-box"}),n("span",[t._v("啟用")])]),n("label",{attrs:{for:"active_2"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.active,expression:"studentForm.active"}],staticClass:"radio-box required",attrs:{type:"radio",name:"active",id:"active_2",value:"2"},domProps:{checked:t._q(t.studentForm.active,"2")},on:{change:function(e){return t.$set(t.studentForm,"active","2")}}}),n("div",{staticClass:"radio-box"}),n("span",[t._v("停用")])])])]),n("div",{staticClass:"btn-area"},[n("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/student"}},[n("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")]),n("div",{staticClass:"btn btn-submit"},[n("i",{staticClass:"fa fa-check"}),t._v(" 確認送出 "),n("input",{staticClass:"btn",attrs:{type:"button",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}})])],1)])]),n("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"tit"}},[n("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("帳號")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"tit"}},[n("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("學生姓名")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"tit"}},[n("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("學生連絡電話")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"tit"}},[n("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("家長姓名")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"tit"}},[n("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("家長連絡電話")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"tit"}},[n("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("地址")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"pic"}},[n("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("上傳頭像")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:""}},[n("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("上課分校")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"articleTime"}},[n("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("狀態")])}],s=n("9ab4"),i=n("1b40"),o=n("87d7"),c=n("f2fa"),u=n("c00b"),l=n("c130"),d=n("43e4"),p=n("4f4c"),f=n("3617"),m=n("93f3"),v=n("0d59"),h=n("60b9"),b=function(){function t(){this.acc="",this.name="",this.phone="",this.parentName="",this.parentPhone="",this.cid="",this.crid="",this.address="",this.pic="",this.sid="",this.note="",this.active=1}return Object(s["b"])([Object(o["a"])(),Object(c["a"])({message:"必填"}),Object(u["a"])(50,{message:"最多輸入50字"}),Object(l["a"])({},{message:"請輸入有效信箱"})],t.prototype,"acc",void 0),Object(s["b"])([Object(o["a"])(),Object(c["a"])({message:"必填"}),Object(u["a"])(30,{message:"最多輸入30字"})],t.prototype,"name",void 0),Object(s["b"])([Object(o["a"])(),Object(c["a"])({message:"必填"}),Object(u["a"])(20,{message:"最多輸入20字"})],t.prototype,"phone",void 0),Object(s["b"])([Object(o["a"])(),Object(c["a"])({message:"必填"}),Object(u["a"])(30,{message:"最多輸入30字"})],t.prototype,"parentName",void 0),Object(s["b"])([Object(o["a"])(),Object(c["a"])({message:"必填"}),Object(u["a"])(20,{message:"最多輸入20字"})],t.prototype,"parentPhone",void 0),Object(s["b"])([Object(o["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"cid",void 0),Object(s["b"])([Object(o["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"crid",void 0),Object(s["b"])([Object(o["a"])(),Object(c["a"])({message:"必填"}),Object(u["a"])(50,{message:"最多輸入50字"})],t.prototype,"address",void 0),Object(s["b"])([Object(o["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"pic",void 0),Object(s["b"])([Object(o["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"sid",void 0),Object(s["b"])([Object(o["a"])(),Object(u["a"])(200,{message:"最多輸入200字"})],t.prototype,"note",void 0),t}(),g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.studentForm=new b,e.cityList={},e.regionList={},e.schoolCityList={},e.schoolList={},e.token=window.localStorage.getItem("adminToken"),e.identity=window.localStorage.getItem("admin_identity"),e.city="",e.errorMsg="",e.openLB=!1,e.errNo=0,e.errorMsgMap={acc:"",name:"",phone:"",parentName:"",parentPhone:"",cid:"",crid:"",address:"",pic:"",sid:"",note:""},e}return Object(s["c"])(e,t),e.prototype.created=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e,n,r,a;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return t=this,[4,h["a"].getAllCity()];case 1:return t.cityList=s.sent(),"1"!==this.identity?[3,3]:(e=this,[4,h["a"].getSchoolCity()]);case 2:return e.schoolCityList=s.sent(),[3,5];case 3:return n=window.localStorage.getItem("admin_sid"),r=this,[4,h["a"].getCity(n)];case 4:r.schoolCityList=s.sent(),this.city=this.schoolCityList[0].cid,a=window.localStorage.getItem("admin_school"),this.schoolList[0]={sid:n,name:a},this.studentForm.sid=n,s.label=5;case 5:return[2]}}))}))},e.prototype.getRegion=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(n){switch(n.label){case 0:return this.studentForm.crid="",t=this.studentForm.cid,e=this,[4,h["a"].getRegion(t)];case 1:return e.regionList=n.sent(),[2]}}))}))},e.prototype.getSchool=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e;return Object(s["d"])(this,(function(n){switch(n.label){case 0:return"1"!=this.identity?[3,2]:(this.studentForm.sid="",e=this,[4,h["a"].getSchool(t)]);case 1:e.schoolList=n.sent(),n.label=2;case 2:return[2]}}))}))},e.prototype.changefile=function(t){var e=this,n=t.target.files[0];if(n){var r=n.name.substring(n.name.lastIndexOf(".")+1);if("jpg"!==r&&"png"!==r&&"jpeg"!==r)return this.errorMsg="上傳檔案只能是 jpg、png、jpeg 格式！",void(this.openLB=!0);var a=n.size/1024/1024<3;if(!a)return this.errorMsg="上傳檔案不能超過 3MB！",void(this.openLB=!0);var s=new FileReader;s.onload=function(t){e.studentForm.pic=t.target.result},s.readAsDataURL(n)}},e.prototype.validateAndSubmit=function(){var t=this;Object(d["a"])(this.studentForm,{skipMissingProperties:!0}).then((function(e){return Object(s["a"])(t,void 0,void 0,(function(){var t,n,r,a=this;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return 0!==e.length?(this.errorMsgMap={acc:"",name:"",phone:"",parentName:"",parentPhone:"",cid:"",crid:"",address:"",pic:"",sid:"",note:""},e.forEach((function(t,e){var n=t.constraints;Object.keys(n).forEach((function(e){a.errorMsgMap[t.property]=n[e]}))})),[2]):this.doubleClick?[3,2]:(this.doubleClick=!0,t=document.getElementById("studentForm"),n=new FormData(t),n.append("token",this.token),r=this,[4,v["i"].add(n)]);case 1:r.errNo=s.sent(),h["a"].checkToken(this.errNo),this.openLB=!0,this.doubleClick=!1,this.errorMsg=m["b"][this.errNo],s.label=2;case 2:return[2]}}))}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===m["a"].Success&&this.$router.push("/admin/student")},e=Object(s["b"])([Object(i["a"])({components:{SideNav:p["e"],Lightbox:f["i"]}})],e),e}(i["d"]),_=g,y=(n("2fe3"),n("2877")),x=Object(y["a"])(_,r,a,!1,null,null,null);e["default"]=x.exports},c00b:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("472e"),a=n("0dd9"),s=n.n(a),i="maxLength";function o(t,e){return"string"===typeof t&&s()(t,{min:0,max:e})}function c(t,e){return Object(r["a"])({name:i,constraints:[t],validator:{validate:function(t,e){return o(t,e.constraints[0])},defaultMessage:Object(r["b"])((function(t){return t+"$property must be shorter than or equal to $constraint1 characters"}),e)}},e)}},c130:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("472e"),a=n("7966"),s=n.n(a),i="isEmail";function o(t,e){return"string"===typeof t&&s()(t,e)}function c(t,e){return Object(r["a"])({name:i,constraints:[t],validator:{validate:function(t,e){return o(t,e.constraints[0])},defaultMessage:Object(r["b"])((function(t){return t+"$property must be an email"}),e)}},e)}},e409:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var n in e)"undefined"===typeof t[n]&&(t[n]=e[n]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,t.exports=e.default,t.exports.default=e.default},f754:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=a(n("d887"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function i(t,e){var n,a;(0,r.default)(t),"object"===s(e)?(n=e.min||0,a=e.max):(n=arguments[1],a=arguments[2]);var i=encodeURI(t).split(/%..|./).length-1;return i>=n&&("undefined"===typeof a||i<=a)}t.exports=e.default,t.exports.default=e.default}}]);
//# sourceMappingURL=chunk-127ad6c1.684e49f6.js.map