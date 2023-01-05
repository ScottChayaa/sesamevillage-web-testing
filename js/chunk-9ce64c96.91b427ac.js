(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ce64c96","chunk-74c42831"],{"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var s=i("9ab4"),n=i("1b40"),o=i("0d59"),a=i("93f3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e.admin_identity=window.localStorage.getItem("admin_identity"),e}return Object(s["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==a["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={grade:t,token:this.token},[4,o["c"].getLevel(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return("/admin/quiz/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/quiz/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/homework/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/homework/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)?(t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},t[28]={unit:"VIDEO Q"},t[29]={unit:"WORKSHOP"},[2,t]):[2,t]}))}))},e.prototype.getAllCity=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getRegion(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={sid:t,token:this.token},[4,o["c"].getCity(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getSchool(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var n,a;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={type:t,sid:e,clid:i,token:this.token},[4,o["f"].getClass(n)];case 1:return a=s.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var n,a;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={type:t,clid:e,tid:i,token:this.token},[4,o["f"].getClassTeacher(n)];case 1:return a=s.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e}(n["d"]),c=r.instance},"8cf3":function(t,e,i){},"97e4":function(t,e,i){"use strict";i.r(e),i.d(e,"QuizForm",(function(){return h}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"quiz"}}),i("div",{staticClass:"main"},[i("h1",[t._v("測驗管理-組卷資料")]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn",attrs:{to:"/admin/quiz/result"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1),i("form",{attrs:{action:""}},[i("div",{staticClass:"input-box box-16"},[i("label",{attrs:{for:"tit"}},[t._v("學生姓名")]),i("span",[t._v(t._s(t.quizForm.student))])]),i("div",{staticClass:"input-box box-16"},[i("label",{attrs:{for:"tit"}},[t._v("測驗分校")]),i("span",[t._v(t._s(t.quizForm.city)+" "+t._s(t.quizForm.school))])]),i("div",{staticClass:"input-box box-16"},[i("label",{attrs:{for:"tit"}},[t._v("測驗班級")]),i("span",[t._v(t._s(t.quizForm.class))])]),i("div",{staticClass:"input-box box-16"},[i("label",{attrs:{for:"tit"}},[t._v("測驗名稱")]),i("span",[t._v(t._s(t.quizForm.name))])]),i("div",{staticClass:"input-box box-16"}),i("div",{staticClass:"input-box box-16"},[i("label",{attrs:{for:"tit"}},[t._v("級數")]),i("span",[t._v(t._s(t.quizForm.grade))])]),i("div",{staticClass:"input-box box-16"},[i("label",{attrs:{for:"tit"}},[t._v("Level")]),i("span",[t._v(t._s(t.quizForm.level))])]),i("div",{staticClass:"input-box box-16"},[i("label",{attrs:{for:"tit"}},[t._v("單元")]),i("span",[t._v(t._s(t.quizForm.unit))])]),i("div",{staticClass:"input-box box-16"},[i("label",{attrs:{for:"tit"}},[t._v("測驗日期")]),i("span",[t._v(t._s(t.quizForm.completeDate))])]),i("div",{staticClass:"input-box box-16"},[i("label",{attrs:{for:"tit"}},[t._v("正確率")]),i("span",[t._v(t._s("1"===t.quizForm.active?"":t.quizForm.accuracy+"%"))])]),t._l(t.quizForm.question,(function(e,s){return i("div",{key:s,staticClass:"input-box input-box-w exam-group"},[0==s?i("label",[t._v("答題內容")]):t._e(),i("div",{staticClass:"h-flexSpaceB-ju"},[i("div",{staticClass:"h-flexColumn h-box100"},[i("div",{staticClass:"input-box input-box-w"},[i("p",{staticClass:"exam-tit",domProps:{innerHTML:t._s(s+1+". "+e.question.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>"))}})]),"3"!==e.type?i("div",{staticClass:"check-list"},t._l(Object.keys(e.option).length,(function(n){return i("label",{key:n,staticClass:"h-flexStart-ai exam-option-box",attrs:{for:"option"+(s+1)+"_"+n}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.studentAnswer,expression:"item.studentAnswer"}],staticClass:"radio-box",attrs:{type:"radio",name:"option"+(s+1),id:"option"+(s+1)+"_"+n,disabled:""},domProps:{value:n,checked:t._q(e.studentAnswer,n)},on:{change:function(i){return t.$set(e,"studentAnswer",n)}}}),i("div",{staticClass:"radio-box"}),"1"===e.type&&"2"===e.option[n].type||"2"===e.type?i("span",{staticClass:"exam-option box-85"},[t._v(t._s("1"===e.type?e.option[n].text:e.option[n]))]):t._e(),"1"===e.type&&"1"===e.option[n].type?i("div",{staticClass:"box-85"},[i("img",{staticClass:"img-exam-option",attrs:{src:e.option[n].pic,alt:""}})]):t._e(),e.answer==n?i("label",{staticClass:"correct"},[t._v("正確")]):t._e(),e.studentAnswer==n&&e.studentAnswer!=e.answer?i("label",{staticClass:"error"},[t._v("錯誤")]):t._e()])})),0):t._e(),"3"===e.type?i("div",{staticClass:"input-box input-box-w"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.studentAnswer,expression:"item.studentAnswer"}],staticClass:"input-sty desc-info",attrs:{name:"note"+(s+1),id:"note"+(s+1),disabled:""},domProps:{value:e.studentAnswer},on:{input:function(i){i.target.composing||t.$set(e,"studentAnswer",i.target.value)}}}),i("div",{staticClass:"check-list"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.verify,expression:"item.verify"}],staticClass:"radio-box",attrs:{type:"radio",name:"verify"+(s+1),value:"1"},domProps:{checked:t._q(e.verify,"1")},on:{change:function(i){return t.$set(e,"verify","1")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"exam-option"},[t._v("正確")])]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.verify,expression:"item.verify"}],staticClass:"radio-box",attrs:{type:"radio",name:"verify"+(s+1),value:"2"},domProps:{checked:t._q(e.verify,"2")},on:{change:function(i){return t.$set(e,"verify","2")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"exam-option"},[t._v("錯誤")])])]),i("p",{staticClass:"h-pt10 h-my10"},[t._v("參考答案")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.suggestAns,expression:"item.suggestAns"}],staticClass:"input-sty desc-info",attrs:{name:"suggestAns"+(s+1),id:"suggestAns"+(s+1),disabled:""},domProps:{value:e.suggestAns},on:{input:function(i){i.target.composing||t.$set(e,"suggestAns",i.target.value)}}})]):t._e()]),""!=e.audio||""!=e.pic?i("div",{staticClass:"h-flexColumn h-box100"},[i("div",{staticClass:"btn-area h-p0"},[i("a",{staticClass:"btn active",on:{click:function(e){return t.$refs.audio[s].play()}}},[i("i",{staticClass:"fa fa-play"}),t._v(" 播放題目音檔 ")]),i("audio",{ref:"audio",refInFor:!0,attrs:{controls:"controls",src:e.audio,hidden:""}})]),i("img",{staticClass:"img-paper h-mt30",attrs:{src:e.pic,alt:""}})]):t._e()])])})),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/quiz/result"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")]),1==t.quizForm.active?i("div",{staticClass:"btn btn-submit"},[i("i",{staticClass:"fa fa-check"}),t._v(" 確認送出 "),i("input",{staticClass:"btn",attrs:{type:"button",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}})]):t._e()],1)],2)]),i("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},n=[],o=i("9ab4"),a=i("1b40"),r=i("4f4c"),c=i("0d59"),u=i("60b9"),l=i("93f3"),d=i("3617"),h=function(){function t(){this.sqid="",this.name="",this.student="",this.city="",this.school="",this.class="",this.grade="",this.unit="",this.level="",this.question=[],this.total=0,this.accuracy=0,this.completeDate="",this.active="",this.token=window.localStorage.getItem("adminToken")}return t}(),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.quizForm=new h,e.token=window.localStorage.getItem("adminToken"),e.errorMsg="",e.openLB=!1,e.errNo=0,e}return Object(o["c"])(e,t),e.prototype.created=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e;return Object(o["d"])(this,(function(i){switch(i.label){case 0:return t={sqid:this.$route.query.sqid,token:this.token},[4,c["f"].getResult(t)];case 1:return e=i.sent(),this.assignDataToForm(e),[2]}}))}))},e.prototype.assignDataToForm=function(t){u["a"].checkToken(t.ERR_CODE);var e=t.info;this.quizForm.sqid=e.sqid,this.quizForm.name=e.name,this.quizForm.student=e.student,this.quizForm.city=e.city,this.quizForm.school=e.school,this.quizForm.class=e.class,this.quizForm.grade=e.grade,this.quizForm.unit=e.unit,this.quizForm.level=e.level,this.quizForm.completeDate=e.completeDate,this.quizForm.question=e.question,this.quizForm.total=e.total,this.quizForm.accuracy=e.accuracy,this.quizForm.active=e.active},e.prototype.validateAndSubmit=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e,i,s,n,a,r;return Object(o["d"])(this,(function(o){switch(o.label){case 0:if(this.doubleClick)return[3,2];for(this.doubleClick=!0,t={token:this.token,sqid:this.quizForm.sqid,teacherVerify:{}},e=0,i=Object.entries(this.quizForm.question);e<i.length;e++)s=i[e],n=s[0],a=s[1],3==a["type"]&&(t.teacherVerify[n]={qqid:a["qqid"],verify:a["verify"]});return r=this,[4,c["f"].verify(t)];case 1:r.errNo=o.sent(),u["a"].checkToken(this.errNo),this.openLB=!0,this.doubleClick=!1,this.errorMsg=l["b"][this.errNo],o.label=2;case 2:return[2]}}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===l["a"].Success&&this.$router.push("/admin/quiz/result")},e=Object(o["b"])([Object(a["a"])({components:{SideNav:r["e"],Lightbox:d["i"]}})],e),e}(a["d"]),p=v,m=(i("8cf3"),i("2877")),b=Object(m["a"])(p,s,n,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-9ce64c96.91b427ac.js.map