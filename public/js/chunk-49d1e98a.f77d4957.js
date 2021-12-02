(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49d1e98a"],{"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("9ab4"),s=i("1b40"),o=i("0d59"),a=i("93f3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e.admin_identity=window.localStorage.getItem("admin_identity"),e}return Object(n["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==a["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={grade:t,token:this.token},[4,o["c"].getLevel(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return("/admin/quiz/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/quiz/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)?(t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]):[2,t]}))}))},e.prototype.getAllCity=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getRegion(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={sid:t,token:this.token},[4,o["c"].getCity(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getSchool(e)];case 1:return i=n.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(n["a"])(this,void 0,void 0,(function(){var s,a;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return s={type:t,sid:e,clid:i,token:this.token},[4,o["f"].getClass(s)];case 1:return a=n.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(n["a"])(this,void 0,void 0,(function(){var s,a;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return s={type:t,clid:e,tid:i,token:this.token},[4,o["f"].getClassTeacher(s)];case 1:return a=n.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e}(s["d"]),c=r.instance},"7d1c":function(t,e,i){"use strict";i.r(e),i.d(e,"QuizForm",(function(){return l}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"quiz"}}),i("div",{staticClass:"main"},[i("h1",[t._v("測驗管理-組卷資料")]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn",attrs:{to:"/admin/quiz/paper"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1),i("form",{attrs:{action:""}},[i("div",{staticClass:"input-box box-20"},[i("label",{attrs:{for:"tit"}},[t._v("測驗分校")]),i("span",[t._v(t._s(t.quizForm.city)+" "+t._s(t.quizForm.school))])]),i("div",{staticClass:"input-box box-20"},[i("label",{attrs:{for:"tit"}},[t._v("測驗班級")]),i("span",[t._v(t._s(t.quizForm.class))])]),i("div",{staticClass:"input-box box-20"},[i("label",{attrs:{for:"tit"}},[t._v("測驗名稱")]),i("span",[t._v(t._s(t.quizForm.name))])]),i("div",{staticClass:"input-box box-20"},[i("label",{attrs:{for:"tit"}},[t._v("級數")]),i("span",[t._v(t._s(t.quizForm.grade))])]),i("div",{staticClass:"input-box box-20"},[i("label",{attrs:{for:"tit"}},[t._v("Level")]),i("span",[t._v(t._s(t.quizForm.level))])]),i("div",{staticClass:"input-box box-20"},[i("label",{attrs:{for:"tit"}},[t._v("單元")]),i("span",[t._v(t._s(t.quizForm.unit))])]),i("div",{staticClass:"input-box box-20"},[i("label",{attrs:{for:"tit"}},[t._v("測驗日期")]),i("span",[t._v(t._s(t.quizForm.beginTime)+" ～ "+t._s(t.quizForm.endTime))])]),t._l(t.questionList,(function(e,n){return i("div",{key:n,staticClass:"input-box input-box-w exam-group"},[n+1===1?i("label",{attrs:{for:"tit"}},[t._v("題目內容")]):t._e(),i("div",{staticClass:"h-flexSpaceB-ju"},[i("div",{staticClass:"h-flexColumn h-box100"},[i("div",{staticClass:"input-box input-box-w"},[i("p",{staticClass:"exam-tit",domProps:{innerHTML:t._s(n+1+". "+e.question.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>"))}})]),"3"!==e.type?i("div",{staticClass:"check-list"},t._l(Object.keys(e.option).length,(function(s){return i("label",{key:s,staticClass:"h-flexStart-ai exam-option-box",attrs:{for:"option"+(n+1)+"_"+s}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"item.answer"}],staticClass:"radio-box required",attrs:{type:"radio",name:"option"+(n+1),id:"option"+(n+1)+"_"+s,disabled:""},domProps:{value:s,checked:t._q(e.answer,s)},on:{change:function(i){return t.$set(e,"answer",s)}}}),i("div",{staticClass:"radio-box"}),"1"===e.type&&"2"===Object.values(e.option[s])[0]||"2"===e.type?i("span",{staticClass:"exam-option box-85"},[t._v(t._s("1"===e.type?Object.values(e.option[s])[2]:e.option[s]))]):t._e(),"1"===e.type&&"1"===Object.values(e.option[s])[0]?i("div",{staticClass:"box-85"},[i("img",{staticClass:"img-exam-option",attrs:{src:e.option[s].pic,alt:""}})]):t._e(),e.answer==s?i("label",{staticClass:"correct"},[t._v("正確")]):t._e()])})),0):t._e(),"3"===e.type?i("div",{staticClass:"input-box input-box-w"},[i("textarea",{staticClass:"input-sty desc-info required",attrs:{name:"",id:"",disabled:""}}),i("p",{staticClass:"h-pt10 h-my10"},[t._v("參考答案")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.suggestAns,expression:"item.suggestAns"}],staticClass:"input-sty desc-info",attrs:{name:"suggestAns",id:"suggestAns",disabled:""},domProps:{value:e.suggestAns},on:{input:function(i){i.target.composing||t.$set(e,"suggestAns",i.target.value)}}})]):t._e()]),""!=e.audio||""!=e.pic?i("div",{staticClass:"h-flexColumn h-box100"},[i("div",{staticClass:"btn-area h-p0"},[i("a",{staticClass:"btn active",on:{click:function(e){return t.$refs.audio[n].play()}}},[i("i",{staticClass:"fa fa-play"}),t._v(" 播放題目音檔 ")]),i("audio",{ref:"audio",refInFor:!0,attrs:{controls:"controls",src:e.audio,hidden:""}})]),i("img",{staticClass:"img-paper h-mt30",attrs:{src:e.pic,alt:""}})]):t._e()])])})),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/quiz/paper"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")])],1)],2)])],1)},s=[],o=i("9ab4"),a=i("1b40"),r=i("4f4c"),c=i("0d59"),u=i("60b9"),l=function(){function t(){this.name="",this.beginTime="",this.endTime="",this.city="",this.school="",this.class="",this.teacher="",this.grade="",this.unit="",this.level="",this.num=0,this.qid=""}return t}(),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.quizForm=new l,e.questionList={},e.token=window.localStorage.getItem("adminToken"),e}return Object(o["c"])(e,t),e.prototype.created=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e;return Object(o["d"])(this,(function(i){switch(i.label){case 0:return t={qid:this.$route.query.qid,token:this.token},[4,c["f"].getPaperInfo(t)];case 1:return e=i.sent(),this.assignDataToForm(e),[2]}}))}))},e.prototype.assignDataToForm=function(t){u["a"].checkToken(t.ERR_CODE);var e=t.info;this.quizForm.qid=e.qid,this.quizForm.name=e.name,this.quizForm.beginTime=e.beginTime,this.quizForm.endTime=e.endTime,this.quizForm.city=e.city,this.quizForm.school=e.school,this.quizForm.class=e.class,this.quizForm.teacher=e.teacher,this.quizForm.grade=e.grade,this.quizForm.unit=e.unit,this.quizForm.level=e.level,this.quizForm.num=e.num,this.questionList=t.list},e=Object(o["b"])([Object(a["a"])({components:{SideNav:r["e"]}})],e),e}(a["d"]),h=d,p=(i("8cf3"),i("2877")),b=Object(p["a"])(h,n,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-49d1e98a.f77d4957.js.map