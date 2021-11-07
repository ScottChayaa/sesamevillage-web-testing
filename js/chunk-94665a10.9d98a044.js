(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94665a10","chunk-358bf7e3"],{"05bf":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s("8b1c"),o=s("e48f"),a=s("4fc0");function r(t,e){return function(s,r){var n={type:i["a"].CONDITIONAL_VALIDATION,target:s.constructor,propertyName:r,constraints:[t],validationOptions:e};Object(a["b"])().addValidationMetadata(new o["a"](n))}}},"0dd9":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=o(s("d887"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function r(t,e){var s,o;(0,i.default)(t),"object"===a(e)?(s=e.min||0,o=e.max):(s=arguments[1]||0,o=arguments[2]);var r=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],n=t.length-r.length;return n>=s&&("undefined"===typeof o||n<=o)}t.exports=e.default,t.exports.default=e.default},"4c63":function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var i=s("9ab4"),o=s("1b40"),a=s("0d59"),r=s("93f3"),n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("teacherToken"),e}return Object(i["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/teacher/login"},e.prototype.checkToken=function(t){t!==r["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,a["c"].teGetGrade(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={grade:t,token:this.token},[4,a["c"].teGetLevel(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getTECity=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={tid:t,token:this.token},[4,a["c"].getTECity(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getTESchool=function(t,e){return Object(i["a"])(this,void 0,void 0,(function(){var s,o;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return s={cid:t,tid:e,token:this.token},[4,a["c"].getTESchool(s)];case 1:return o=i.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getTEClass=function(t,e){return Object(i["a"])(this,void 0,void 0,(function(){var s,o;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return s={sid:t,tid:e,token:this.token},[4,a["c"].getTEClass(s)];case 1:return o=i.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getTeacher=function(t,e,s){return Object(i["a"])(this,void 0,void 0,(function(){var o,r;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return o={type:t,clid:e,tid:s,token:this.token},[4,a["c"].teGetTeacher(o)];case 1:return r=i.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e}(o["d"]),c=n.instance},c00b:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var i=s("472e"),o=s("0dd9"),a=s.n(o),r="maxLength";function n(t,e){return"string"===typeof t&&a()(t,{min:0,max:e})}function c(t,e){return Object(i["a"])({name:r,constraints:[t],validator:{validate:function(t,e){return n(t,e.constraints[0])},defaultMessage:Object(i["b"])((function(t){return t+"$property must be shorter than or equal to $constraint1 characters"}),e)}},e)}},d53a:function(t,e,s){"use strict";s.r(e),s.d(e,"QuestionForm",(function(){return _}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header",{attrs:{currentPage:"quiz"}}),i("div",{staticClass:"c-wrap1400"},[t._m(0),i("form",{attrs:{action:"",method:"post",name:"questionAdd",id:"questionAdd"}},[i("div",{staticClass:"c-item-group"},[i("div",{staticClass:"c-item"},[i("div",{staticClass:"input-box box-16"},[t._m(1),i("select",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.grade,expression:"questionForm.grade"}],staticClass:"select-sty h-mr10 box-100",attrs:{name:"grade"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.questionForm,"grade",e.target.multiple?s:s[0])},t.getLevel]}},[i("option",{attrs:{value:""}},[t._v("請選擇級數")]),t._l(t.gradeList,(function(e,s){return i("option",{key:s,domProps:{value:e.grade}},[t._v(t._s(e.grade))])}))],2),""!==t.errorMsgMap["grade"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["grade"]))]):t._e()]),i("div",{staticClass:"input-box box-16"},[t._m(2),i("select",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.level,expression:"questionForm.level"}],staticClass:"select-sty h-mr10 box-100",attrs:{name:"level"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.questionForm,"level",e.target.multiple?s:s[0])},t.getUnit]}},[i("option",{attrs:{value:""}},[t._v("請選擇Level")]),t._l(t.levelList,(function(e,s){return i("option",{key:s,domProps:{value:e.level}},[t._v(t._s(e.level))])}))],2),""!==t.errorMsgMap["level"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["level"]))]):t._e()]),i("div",{staticClass:"input-box box-16"},[t._m(3),i("select",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.unit,expression:"questionForm.unit"}],staticClass:"select-sty h-mr10 box-100",attrs:{name:"unit"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.questionForm,"unit",e.target.multiple?s:s[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇單元")]),t._l(t.unitList,(function(e,s){return i("option",{key:s,domProps:{value:e.unit}},[t._v("Unit-"+t._s(e.unit))])}))],2),""!==t.errorMsgMap["unit"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["unit"]))]):t._e()]),i("div",{staticClass:"input-box box-16"},[t._m(4),i("select",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.difficulty,expression:"questionForm.difficulty"}],staticClass:"select-sty h-mr10 box-100",attrs:{name:"difficulty",id:"difficulty"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.questionForm,"difficulty",e.target.multiple?s:s[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇難易度")]),i("option",{attrs:{value:"1"}},[t._v("難")]),i("option",{attrs:{value:"2"}},[t._v("中")]),i("option",{attrs:{value:"3"}},[t._v("易")])]),""!==t.errorMsgMap["difficulty"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["difficulty"]))]):t._e()]),i("div",{staticClass:"input-box box-16"},[i("label",{attrs:{for:"tit"}},[t._v("出題老師")]),i("span",[t._v(t._s(t.name))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.tid,expression:"questionForm.tid"}],attrs:{type:"hidden",name:"tid",id:"tid"},domProps:{value:t.questionForm.tid},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"tid",e.target.value)}}})])]),i("img",{staticClass:"img-role02",attrs:{src:s("d965")}})]),i("div",{staticClass:"c-tit-bar"},[t._v("題目內容")]),i("div",{staticClass:"input-box input-box-w"},[t._m(5),i("div",{staticClass:"check-list"},[i("label",{attrs:{for:"type_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type,expression:"questionForm.type"}],attrs:{type:"radio",name:"type",id:"type_1",value:"1"},domProps:{checked:t._q(t.questionForm.type,"1")},on:{change:function(e){return t.$set(t.questionForm,"type","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("選擇題")])]),i("label",{attrs:{for:"type_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type,expression:"questionForm.type"}],staticClass:"radio-box",attrs:{type:"radio",name:"type",id:"type_2",value:"2"},domProps:{checked:t._q(t.questionForm.type,"2")},on:{change:function(e){return t.$set(t.questionForm,"type","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("是非題")])]),i("label",{attrs:{for:"type_3"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type,expression:"questionForm.type"}],staticClass:"radio-box",attrs:{type:"radio",name:"type",id:"type_3",value:"3"},domProps:{checked:t._q(t.questionForm.type,"3")},on:{change:function(e){return t.$set(t.questionForm,"type","3")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("問答題")])]),""!==t.errorMsgMap["type"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["type"]))]):t._e()])]),i("div",{staticClass:"input-box input-box-w"},[i("label",{attrs:{for:"question"}},[t._v("題目音檔")]),i("div",{staticClass:"note"},[t._v("格式限mp3，檔案大小限5M內")]),i("div",{staticClass:"upload-form-file"},[i("div",{staticClass:"form-file"},[i("input",{attrs:{type:"file",name:"audio",id:"audio",accept:".mp3"},on:{change:function(e){return t.previewfile(e)}}}),i("i",{staticClass:"fa fa-cloud-upload"}),t._v(" 上傳檔案 ")]),i("span",{staticClass:"file-name",attrs:{id:"fileNameBox"}},[t._v(t._s(t.questionForm.audio))])])]),i("div",{staticClass:"input-box"},[t._m(6),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.question,expression:"questionForm.question"}],staticClass:"input-sty h-h310 desc-info",attrs:{name:"question",id:"question"},domProps:{value:t.questionForm.question},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"question",e.target.value)}}}),""!==t.errorMsgMap["question"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["question"]))]):t._e()]),i("div",{staticClass:"input-box"},[i("label",{attrs:{for:""}},[t._v("題目圖片")]),i("div",{staticClass:"upload-img"},[i("div",{staticClass:"exam-box upload-box-sty",on:{click:function(e){return t.$refs.file.click()}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic,expression:"questionForm.pic != ''"}],staticClass:"del",on:{click:function(e){return t.delPic()}}},[i("i",{staticClass:"fa fa-times"})]),i("input",{ref:"file",staticClass:"upload-pic",attrs:{type:"file",name:"pic",id:"pic",accept:"image/*"},on:{change:function(e){return t.previewPic(e)}}}),i("div",{staticClass:"upload-click-area",attrs:{id:"previews"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic,expression:"questionForm.pic != ''"}],attrs:{src:t.questionForm.pic,alt:""}})])])]),i("div",{staticClass:"note h-mt10"},[t._v("建議尺寸 500 x 280 以上，格式限jpg、png、gif、jpeg，檔案大小限3M ")])]),"1"===t.questionForm.type||"2"===t.questionForm.type?i("div",{staticClass:"input-box input-box-w"},[t._m(7),i("div",{staticClass:"check-list"},["1"===t.questionForm.type?i("label",{staticClass:"h-flex",attrs:{for:"answer_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_1",value:"1"},domProps:{checked:t._q(t.questionForm.answer,"1")},on:{change:function(e){return t.$set(t.questionForm,"answer","1")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"h-w120"},[t._v("選為答案")]),i("div",{staticClass:"check-list second-check-list"},[i("label",{attrs:{for:"option_1_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type1,expression:"questionForm.type1"}],staticClass:"radio-box",attrs:{type:"radio",name:"option[1][type]",id:"option_1_1",value:"1"},domProps:{checked:t._q(t.questionForm.type1,"1")},on:{change:function(e){return t.$set(t.questionForm,"type1","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("圖形")])]),i("label",{attrs:{for:"option_1_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type1,expression:"questionForm.type1"}],staticClass:"radio-box",attrs:{type:"radio",name:"option[1][type]",id:"option_1_2",value:"2"},domProps:{checked:t._q(t.questionForm.type1,"2")},on:{change:function(e){return t.$set(t.questionForm,"type1","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("文字")])]),""!==t.errorMsgMap["type1"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["type1"]))]):t._e()]),i("span",{staticClass:"w20"},[t._v("1")]),"1"===t.questionForm.type1?i("div",{staticClass:"upload-img"},[i("div",{staticClass:"options-box upload-box-sty",on:{click:function(e){return t.$refs.file1.click()}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic1,expression:"questionForm.pic1 != ''"}],staticClass:"del",on:{click:function(e){return t.delPic(1)}}},[i("i",{staticClass:"fa fa-times"})]),i("input",{ref:"file1",staticClass:"upload-pic",attrs:{type:"file",name:"pic1",id:"pic1",accept:"image/*"},on:{change:function(e){return t.previewPic(e,1)}}}),i("div",{staticClass:"upload-click-area",attrs:{id:"previews"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic1,expression:"questionForm.pic1 != ''"}],attrs:{src:t.questionForm.pic1,alt:""}})])])]):t._e(),"2"===t.questionForm.type1?i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.text1,expression:"questionForm.text1"}],staticClass:"input-sty input-width",attrs:{type:"text",name:"option[1][text]"},domProps:{value:t.questionForm.text1},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"text1",e.target.value)}}}):t._e(),""!==t.errorMsgMap["pic1"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pic1"]))]):t._e(),""!==t.errorMsgMap["text1"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["text1"]))]):t._e()]):t._e(),"1"===t.questionForm.type?i("label",{staticClass:"h-flex",attrs:{for:"answer_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_2",value:"2"},domProps:{checked:t._q(t.questionForm.answer,"2")},on:{change:function(e){return t.$set(t.questionForm,"answer","2")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"h-w120"},[t._v("選為答案")]),i("div",{staticClass:"check-list second-check-list"},[i("label",{attrs:{for:"option_2_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type2,expression:"questionForm.type2"}],staticClass:"radio-box",attrs:{type:"radio",name:"option[2][type]",id:"option_2_1",value:"1"},domProps:{checked:t._q(t.questionForm.type2,"1")},on:{change:function(e){return t.$set(t.questionForm,"type2","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("圖形")])]),i("label",{attrs:{for:"answer_2_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type2,expression:"questionForm.type2"}],staticClass:"radio-box",attrs:{type:"radio",name:"option[2][type]",id:"answer_2_2",value:"2"},domProps:{checked:t._q(t.questionForm.type2,"2")},on:{change:function(e){return t.$set(t.questionForm,"type2","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("文字")])]),""!==t.errorMsgMap["type2"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["type2"]))]):t._e()]),i("span",{staticClass:"w20"},[t._v("2")]),"1"===t.questionForm.type2?i("div",{staticClass:"upload-img"},[i("div",{staticClass:"options-box upload-box-sty",on:{click:function(e){return t.$refs.file2.click()}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic2,expression:"questionForm.pic2 != ''"}],staticClass:"del",on:{click:function(e){return t.delPic(2)}}},[i("i",{staticClass:"fa fa-times"})]),i("input",{ref:"file2",staticClass:"upload-pic",attrs:{type:"file",name:"pic2",id:"pic2",accept:"image/*"},on:{change:function(e){return t.previewPic(e,2)}}}),i("div",{staticClass:"upload-click-area",attrs:{id:"previews"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic2,expression:"questionForm.pic2 != ''"}],attrs:{src:t.questionForm.pic2,alt:""}})])])]):t._e(),"2"===t.questionForm.type2?i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.text2,expression:"questionForm.text2"}],staticClass:"input-sty input-width",attrs:{type:"text",name:"option[2][text]"},domProps:{value:t.questionForm.text2},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"text2",e.target.value)}}}):t._e(),""!==t.errorMsgMap["pic2"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pic2"]))]):t._e(),""!==t.errorMsgMap["text2"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["text2"]))]):t._e()]):t._e(),"1"===t.questionForm.type?i("label",{staticClass:"h-flex",attrs:{for:"answer_3"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_3",value:"3"},domProps:{checked:t._q(t.questionForm.answer,"3")},on:{change:function(e){return t.$set(t.questionForm,"answer","3")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"h-w120"},[t._v("選為答案")]),i("div",{staticClass:"check-list second-check-list"},[i("label",{attrs:{for:"option_3_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type3,expression:"questionForm.type3"}],staticClass:"radio-box",attrs:{type:"radio",name:"option[3][type]",id:"option_3_1",value:"1"},domProps:{checked:t._q(t.questionForm.type3,"1")},on:{change:function(e){return t.$set(t.questionForm,"type3","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("圖形")])]),i("label",{attrs:{for:"answer_3_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type3,expression:"questionForm.type3"}],staticClass:"radio-box",attrs:{type:"radio",name:"option[3][type]",id:"answer_3_2",value:"2"},domProps:{checked:t._q(t.questionForm.type3,"2")},on:{change:function(e){return t.$set(t.questionForm,"type3","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("文字")])]),""!==t.errorMsgMap["type3"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["type3"]))]):t._e()]),i("span",{staticClass:"w20"},[t._v("3")]),"1"===t.questionForm.type3?i("div",{staticClass:"upload-img"},[i("div",{staticClass:"options-box upload-box-sty",on:{click:function(e){return t.$refs.file3.click()}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic3,expression:"questionForm.pic3 != ''"}],staticClass:"del",on:{click:function(e){return t.delPic(3)}}},[i("i",{staticClass:"fa fa-times"})]),i("input",{ref:"file3",staticClass:"upload-pic",attrs:{type:"file",name:"pic3",id:"pic3",accept:"image/*"},on:{change:function(e){return t.previewPic(e,3)}}}),i("div",{staticClass:"upload-click-area",attrs:{id:"previews"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic3,expression:"questionForm.pic3 != ''"}],attrs:{src:t.questionForm.pic3,alt:""}})])])]):t._e(),"2"===t.questionForm.type3?i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.text3,expression:"questionForm.text3"}],staticClass:"input-sty input-width",attrs:{type:"text",name:"option[3][text]"},domProps:{value:t.questionForm.text3},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"text3",e.target.value)}}}):t._e(),""!==t.errorMsgMap["pic3"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pic3"]))]):t._e(),""!==t.errorMsgMap["text3"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["text3"]))]):t._e()]):t._e(),"1"===t.questionForm.type?i("label",{staticClass:"h-flex",attrs:{for:"answer_4"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_4",value:"4"},domProps:{checked:t._q(t.questionForm.answer,"4")},on:{change:function(e){return t.$set(t.questionForm,"answer","4")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"h-w120"},[t._v("選為答案")]),i("div",{staticClass:"check-list second-check-list"},[i("label",{attrs:{for:"option_4_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type4,expression:"questionForm.type4"}],staticClass:"radio-box",attrs:{type:"radio",name:"option[4][type]",id:"option_4_1",value:"1"},domProps:{checked:t._q(t.questionForm.type4,"1")},on:{change:function(e){return t.$set(t.questionForm,"type4","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("圖形")])]),i("label",{attrs:{for:"answer_4_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type4,expression:"questionForm.type4"}],staticClass:"radio-box",attrs:{type:"radio",name:"option[4][type]",id:"answer_4_2",value:"2"},domProps:{checked:t._q(t.questionForm.type4,"2")},on:{change:function(e){return t.$set(t.questionForm,"type4","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("文字")])]),""!==t.errorMsgMap["type4"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["type4"]))]):t._e()]),i("span",{staticClass:"w20"},[t._v("4")]),"1"===t.questionForm.type4?i("div",{staticClass:"upload-img"},[i("div",{staticClass:"options-box upload-box-sty",on:{click:function(e){return t.$refs.file4.click()}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic4,expression:"questionForm.pic4 != ''"}],staticClass:"del",on:{click:function(e){return t.delPic(4)}}},[i("i",{staticClass:"fa fa-times"})]),i("input",{ref:"file4",staticClass:"upload-pic",attrs:{type:"file",name:"pic4",id:"pic4",accept:"image/*"},on:{change:function(e){return t.previewPic(e,4)}}}),i("div",{staticClass:"upload-click-area",attrs:{id:"previews"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic4,expression:"questionForm.pic4 != ''"}],attrs:{src:t.questionForm.pic4,alt:""}})])])]):t._e(),"2"===t.questionForm.type4?i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.text4,expression:"questionForm.text4"}],staticClass:"input-sty input-width",attrs:{type:"text",name:"option[4][text]"},domProps:{value:t.questionForm.text4},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"text4",e.target.value)}}}):t._e(),""!==t.errorMsgMap["pic4"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pic4"]))]):t._e(),""!==t.errorMsgMap["text4"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["text4"]))]):t._e()]):t._e(),"1"===t.questionForm.type?i("label",{staticClass:"h-flex",attrs:{for:"answer_5"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_5",value:"5"},domProps:{checked:t._q(t.questionForm.answer,"5")},on:{change:function(e){return t.$set(t.questionForm,"answer","5")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"h-w120"},[t._v("選為答案")]),i("div",{staticClass:"check-list second-check-list"},[i("label",{attrs:{for:"option_5_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type5,expression:"questionForm.type5"}],staticClass:"radio-box",attrs:{type:"radio",name:"option[5][type]",id:"option_5_1",value:"1"},domProps:{checked:t._q(t.questionForm.type5,"1")},on:{change:function(e){return t.$set(t.questionForm,"type5","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("圖形")])]),i("label",{attrs:{for:"answer_5_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type5,expression:"questionForm.type5"}],staticClass:"radio-box",attrs:{type:"radio",name:"option[5][type]",id:"answer_5_2",value:"2"},domProps:{checked:t._q(t.questionForm.type5,"2")},on:{change:function(e){return t.$set(t.questionForm,"type5","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("文字")])]),""!==t.errorMsgMap["type5"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["type5"]))]):t._e()]),i("span",{staticClass:"w20"},[t._v("5")]),"1"===t.questionForm.type5?i("div",{staticClass:"upload-img"},[i("div",{staticClass:"options-box upload-box-sty",on:{click:function(e){return t.$refs.file5.click()}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic5,expression:"questionForm.pic5 != ''"}],staticClass:"del",on:{click:function(e){return t.delPic(5)}}},[i("i",{staticClass:"fa fa-times"})]),i("input",{ref:"file5",staticClass:"upload-pic",attrs:{type:"file",name:"pic5",id:"pic5",accept:"image/*"},on:{change:function(e){return t.previewPic(e,5)}}}),i("div",{staticClass:"upload-click-area",attrs:{id:"previews"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic5,expression:"questionForm.pic5 != ''"}],attrs:{src:t.questionForm.pic5,alt:""}})])])]):t._e(),"2"===t.questionForm.type5?i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.text5,expression:"questionForm.text5"}],staticClass:"input-sty input-width",attrs:{type:"text",name:"option[5][text]"},domProps:{value:t.questionForm.text5},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"text5",e.target.value)}}}):t._e(),""!==t.errorMsgMap["pic5"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pic5"]))]):t._e(),""!==t.errorMsgMap["text5"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["text5"]))]):t._e()]):t._e(),"2"===t.questionForm.type?i("label",{staticClass:"h-flexCenter-ai",attrs:{for:"answer_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_1",value:"1"},domProps:{checked:t._q(t.questionForm.answer,"1")},on:{change:function(e){return t.$set(t.questionForm,"answer","1")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"h-w120"},[t._v("選為答案")]),i("span",{staticClass:"w20"},[t._v("1")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.option1,expression:"questionForm.option1"}],staticClass:"input-sty input-width2",attrs:{type:"text",name:"option[1]"},domProps:{value:t.questionForm.option1},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"option1",e.target.value)}}}),""!==t.errorMsgMap["option1"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["option1"]))]):t._e()]):t._e(),"2"===t.questionForm.type?i("label",{staticClass:"h-flexCenter-ai",attrs:{for:"answer_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_2",value:"2"},domProps:{checked:t._q(t.questionForm.answer,"2")},on:{change:function(e){return t.$set(t.questionForm,"answer","2")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"h-w120"},[t._v("選為答案")]),i("span",{staticClass:"w20"},[t._v("2")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.option2,expression:"questionForm.option2"}],staticClass:"input-sty input-width2",attrs:{type:"text",name:"option[2]"},domProps:{value:t.questionForm.option2},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"option2",e.target.value)}}}),""!==t.errorMsgMap["option2"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["option2"]))]):t._e()]):t._e(),""!==t.errorMsgMap["answer"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["answer"]))]):t._e()])]):t._e(),i("div",{staticClass:"input-box"},[t._m(8),i("div",{staticClass:"check-list"},[i("label",{attrs:{for:"active_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.active,expression:"questionForm.active"}],attrs:{type:"radio",name:"active",id:"active_1",value:"1"},domProps:{checked:t._q(t.questionForm.active,"1")},on:{change:function(e){return t.$set(t.questionForm,"active","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("啟用")])]),i("label",{attrs:{for:"active_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.active,expression:"questionForm.active"}],staticClass:"radio-box",attrs:{type:"radio",name:"active",id:"active_2",value:"2"},domProps:{checked:t._q(t.questionForm.active,"2")},on:{change:function(e){return t.$set(t.questionForm,"active","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("停用")])]),""!==t.errorMsgMap["active"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["active"]))]):t._e()])]),i("div",{staticClass:"c-btn-area"},[i("router-link",{staticClass:"c-btn c-btn-cancel h-mr30",attrs:{to:"/teacher/quiz/question"}},[t._v("取消")]),i("a",{staticClass:"c-btn",attrs:{disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}},[t._v("確認")])],1)])]),i("APLightbox",{attrs:{message:t.errorMsg}}),i("Footer")],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-tab"},[s("h3",{staticClass:"c-tit"},[t._v("測驗管理 / 題目資料")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"grade"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("級數")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("Level")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"unit"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("單元")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("難易度")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("題型")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("題目名稱")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("答案選項")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"active"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("狀態")])}],a=s("9ab4"),r=s("1b40"),n=s("87d7"),c=s("f2fa"),u=s("c00b"),l=s("05bf"),p=s("43e4"),d=s("4f4c"),m=s("3617"),v=s("93f3"),f=s("0d59"),b=s("4c63"),_=function(){function t(){this.grade="",this.level="",this.unit="",this.difficulty="",this.tid=window.localStorage.getItem("teacher_tid"),this.type="1",this.question="",this.audio="",this.pic="",this.type1="1",this.pic1="",this.text1="",this.type2="1",this.pic2="",this.text2="",this.type3="1",this.pic3="",this.text3="",this.type4="1",this.pic4="",this.text4="",this.type5="1",this.pic5="",this.text5="",this.option1="",this.option2="",this.answer="",this.active="1"}return Object(a["b"])([Object(n["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"grade",void 0),Object(a["b"])([Object(n["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"level",void 0),Object(a["b"])([Object(n["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"unit",void 0),Object(a["b"])([Object(n["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"difficulty",void 0),Object(a["b"])([Object(n["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"type",void 0),Object(a["b"])([Object(n["a"])(),Object(c["a"])({message:"必填"}),Object(u["a"])(1e3,{message:"最多輸入1000字"})],t.prototype,"question",void 0),Object(a["b"])([Object(l["a"])((function(t){return"1"===t.type})),Object(c["a"])({message:"必填"})],t.prototype,"type1",void 0),Object(a["b"])([Object(l["a"])((function(t){return"1"===t.type&&"1"===t.type1})),Object(c["a"])({message:"必填"})],t.prototype,"pic1",void 0),Object(a["b"])([Object(l["a"])((function(t){return"1"===t.type&&"2"===t.type1})),Object(c["a"])({message:"必填"})],t.prototype,"text1",void 0),Object(a["b"])([Object(l["a"])((function(t){return"1"===t.type})),Object(c["a"])({message:"必填"})],t.prototype,"type2",void 0),Object(a["b"])([Object(l["a"])((function(t){return"1"===t.type&&"1"===t.type2})),Object(c["a"])({message:"必填"})],t.prototype,"pic2",void 0),Object(a["b"])([Object(l["a"])((function(t){return"1"===t.type&&"2"===t.type2})),Object(c["a"])({message:"必填"})],t.prototype,"text2",void 0),Object(a["b"])([Object(l["a"])((function(t){return"2"===t.type})),Object(c["a"])({message:"必填"})],t.prototype,"option1",void 0),Object(a["b"])([Object(l["a"])((function(t){return"2"===t.type})),Object(c["a"])({message:"必填"})],t.prototype,"option2",void 0),Object(a["b"])([Object(l["a"])((function(t){return"1"===t.type||"2"===t.type})),Object(c["a"])({message:"必填"})],t.prototype,"answer",void 0),Object(a["b"])([Object(n["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"active",void 0),t}(),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.questionForm=new _,e.gradeList={},e.levelList={},e.unitList={},e.name=window.localStorage.getItem("teacher_name"),e.token=window.localStorage.getItem("teacherToken"),e.errorMsg="",e.errorMsgMap={grade:"",unit:"",level:"",difficulty:"",type:"",question:"",type1:"",pic1:"",text1:"",type2:"",pic2:"",text2:"",type3:"",pic3:"",text3:"",type4:"",pic4:"",text4:"",type5:"",pic5:"",text5:"",option1:"",option2:"",answer:"",active:""},e}return Object(a["c"])(e,t),e.prototype.created=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t;return Object(a["d"])(this,(function(e){switch(e.label){case 0:return t=this,[4,b["a"].getGrade()];case 1:return t.gradeList=e.sent(),[2]}}))}))},e.prototype.getLevel=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(s){switch(s.label){case 0:return this.questionForm.level="",this.questionForm.unit="",t=this.questionForm.grade,e=this,[4,b["a"].getLevel(t)];case 1:return e.levelList=s.sent(),this.unitList={},[2]}}))}))},e.prototype.getUnit=function(){this.questionForm.unit="";for(var t=1;t<=25;t++)this.unitList[t]={unit:t}},e.prototype.previewfile=function(t){var e=this,s=t.target.files[0];if(s){var i=s.name.substring(s.name.lastIndexOf(".")+1);if("mp3"!==i)return this.errorMsg="上傳檔案只能是 mp3 格式！",void this.$emit("openAPLightbox",!0);var o=s.size/1024/1024<5;if(!o)return this.errorMsg="上傳檔案不能超過 5MB！",void this.$emit("openAPLightbox",!0);var a=new FileReader;a.onload=function(t){e.questionForm.audio=s.name},a.readAsDataURL(s)}},e.prototype.previewPic=function(t,e){var s=this,i=t.target.files[0];if(i){var o=i.name.substring(i.name.lastIndexOf(".")+1);if("jpg"!==o&&"png"!==o&&"gif"!==o&&"jpeg"!==o)return this.errorMsg="上傳檔案只能是 jpg、png、gif、jpeg 格式！",void this.$emit("openAPLightbox",!0);var a=i.size/1024/1024<3;if(!a)return this.errorMsg="上傳檔案不能超過 3MB！",void this.$emit("openAPLightbox",!0);var r=new FileReader;r.onload=function(t){switch(e){case 1:s.questionForm.pic1=t.target.result;break;case 2:s.questionForm.pic2=t.target.result;break;case 3:s.questionForm.pic3=t.target.result;break;case 4:s.questionForm.pic4=t.target.result;break;case 5:s.questionForm.pic5=t.target.result;break;default:s.questionForm.pic=t.target.result;break}},r.readAsDataURL(i)}},e.prototype.delPic=function(t){switch(t){case 1:this.questionForm.pic1="";break;case 2:this.questionForm.pic2="";break;case 3:this.questionForm.pic3="";break;case 4:this.questionForm.pic4="";break;case 5:this.questionForm.pic5="";break;default:this.questionForm.pic="";break}},e.prototype.validateAndSubmit=function(){var t=this;Object(p["a"])(this.questionForm,{skipMissingProperties:!0}).then((function(e){return Object(a["a"])(t,void 0,void 0,(function(){var t,s,i,o=this;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return 0!==e.length?(this.errorMsgMap={grade:"",unit:"",level:"",difficulty:"",type:"",question:"",type1:"",pic1:"",text1:"",type2:"",pic2:"",text2:"",type3:"",pic3:"",text3:"",type4:"",pic4:"",text4:"",type5:"",pic5:"",text5:"",option1:"",option2:"",answer:"",active:""},e.forEach((function(t,e){var s=t.constraints;Object.keys(s).forEach((function(e){o.errorMsgMap[t.property]=s[e]}))})),[2]):this.doubleClick?[3,2]:(this.doubleClick=!0,t=document.getElementById("questionAdd"),s=new FormData(t),s.append("token",this.token),[4,f["f"].teAddQuestion(s)]);case 1:switch(i=a.sent(),this.doubleClick=!1,i){case v["a"].InvalidToken:b["a"].logout();break;case v["a"].Success:this.$router.push("/teacher/quiz/question");break;default:this.errorMsg=v["b"][i],this.$emit("openAPLightbox",!0);break}a.label=2;case 2:return[2]}}))}))}))},e=Object(a["b"])([Object(r["a"])({components:{Header:d["b"],APLightbox:m["c"],Footer:d["a"]}})],e),e}(r["d"]),y=h,g=(s("f7c1"),s("2877")),q=Object(g["a"])(y,i,o,!1,null,null,null);e["default"]=q.exports},d965:function(t,e,s){t.exports=s.p+"img/role02.ade3ec66.png"},f7c1:function(t,e,s){}}]);
//# sourceMappingURL=chunk-94665a10.9d98a044.js.map