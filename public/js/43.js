(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"ce5e7e48-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/ap/teacher/quiz/PaperEdit.vue?vue&type=template&id=ba813642&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ce5e7e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ap/teacher/quiz/PaperEdit.vue?vue&type=template&id=ba813642& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"Header\", { attrs: { currentPage: \"quiz\" } }),\n      _c(\"div\", { staticClass: \"c-wrap1400\" }, [\n        _vm._m(0),\n        _c(\"div\", { staticClass: \"c-item2 h-flex-column\" }, [\n          _c(\"div\", { staticClass: \"h-flex\" }, [\n            _c(\"div\", { staticClass: \"input-box h-col-30\" }, [\n              _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"測驗名稱\")]),\n              _c(\"span\", [_vm._v(_vm._s(_vm.paperForm.name))])\n            ]),\n            _c(\"div\", { staticClass: \"input-box h-col-30\" }, [\n              _vm._m(1),\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.paperForm.beginTime,\n                    expression: \"paperForm.beginTime\"\n                  }\n                ],\n                staticClass: \"input-sty h-w250\",\n                attrs: { type: \"datetime-local\", name: \"beginTime\" },\n                domProps: { value: _vm.paperForm.beginTime },\n                on: {\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.$set(_vm.paperForm, \"beginTime\", $event.target.value)\n                  }\n                }\n              }),\n              _vm.errorMsgMap[\"beginTime\"] !== \"\"\n                ? _c(\"label\", { staticClass: \"error\" }, [\n                    _vm._v(_vm._s(_vm.errorMsgMap[\"beginTime\"]))\n                  ])\n                : _vm._e(),\n              _vm._v(\" ～ \"),\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.paperForm.endTime,\n                    expression: \"paperForm.endTime\"\n                  }\n                ],\n                staticClass: \"input-sty h-w250 h-mt10\",\n                attrs: { type: \"datetime-local\", name: \"endTime\" },\n                domProps: { value: _vm.paperForm.endTime },\n                on: {\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.$set(_vm.paperForm, \"endTime\", $event.target.value)\n                  }\n                }\n              }),\n              _vm.errorMsgMap[\"endTime\"] !== \"\"\n                ? _c(\"label\", { staticClass: \"error\" }, [\n                    _vm._v(_vm._s(_vm.errorMsgMap[\"endTime\"]))\n                  ])\n                : _vm._e()\n            ]),\n            _c(\"div\", { staticClass: \"input-box h-col-30\" }, [\n              _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"組卷老師\")]),\n              _c(\"span\", [_vm._v(_vm._s(_vm.name))])\n            ])\n          ]),\n          _c(\"div\", { staticClass: \"h-mt40\" }, [\n            _c(\"div\", { staticClass: \"input-box h-col-30\" }, [\n              _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"測驗分校\")]),\n              _c(\"span\", [_vm._v(_vm._s(_vm.paperForm.city))]),\n              _vm._v(\"  \"),\n              _c(\"span\", [_vm._v(_vm._s(_vm.paperForm.school))])\n            ]),\n            _c(\"div\", { staticClass: \"input-box h-col-30\" }, [\n              _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"測驗班級\")]),\n              _c(\"span\", [_vm._v(_vm._s(_vm.paperForm.class))])\n            ])\n          ])\n        ]),\n        _vm._m(2),\n        _c(\"div\", { staticClass: \"input-box-w\" }, [\n          _c(\"div\", { staticClass: \"input-box h-main-label h-col-30\" }, [\n            _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"級數\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.paperForm.grade))])\n          ]),\n          _c(\"div\", { staticClass: \"input-box h-main-label h-col-30\" }, [\n            _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"Level\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.paperForm.level))])\n          ]),\n          _c(\"div\", { staticClass: \"input-box h-main-label h-col-30\" }, [\n            _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"單元\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.paperForm.unit))])\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"input-box h-main-label input-box-w\" }, [\n          _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"題數\")]),\n          _c(\"div\", { staticClass: \"h-flexCenter-ai\" }, [\n            _c(\"div\", { staticClass: \"h-mr10\" }, [\n              _c(\"span\", [_vm._v(_vm._s(_vm.paperForm.num))])\n            ])\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"input-box h-main-label\" }, [\n          _c(\"label\", { attrs: { for: \"articleTime\" } }, [_vm._v(\"狀態\")]),\n          _c(\"div\", { staticClass: \"check-list\" }, [\n            _c(\"label\", { attrs: { for: \"active_1\" } }, [\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.paperForm.active,\n                    expression: \"paperForm.active\"\n                  }\n                ],\n                attrs: {\n                  type: \"radio\",\n                  name: \"active\",\n                  id: \"active_1\",\n                  value: \"1\",\n                  disabled: \"\"\n                },\n                domProps: { checked: _vm._q(_vm.paperForm.active, \"1\") },\n                on: {\n                  change: function($event) {\n                    return _vm.$set(_vm.paperForm, \"active\", \"1\")\n                  }\n                }\n              }),\n              _c(\"div\", { staticClass: \"radio-box\" }),\n              _c(\"span\", [_vm._v(\"啟用\")])\n            ]),\n            _c(\"label\", { attrs: { for: \"active_2\" } }, [\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.paperForm.active,\n                    expression: \"paperForm.active\"\n                  }\n                ],\n                staticClass: \"radio-box\",\n                attrs: {\n                  type: \"radio\",\n                  name: \"active\",\n                  id: \"active_2\",\n                  value: \"2\",\n                  disabled: \"\"\n                },\n                domProps: { checked: _vm._q(_vm.paperForm.active, \"2\") },\n                on: {\n                  change: function($event) {\n                    return _vm.$set(_vm.paperForm, \"active\", \"2\")\n                  }\n                }\n              }),\n              _c(\"div\", { staticClass: \"radio-box\" }),\n              _c(\"span\", [_vm._v(\"停用\")])\n            ])\n          ])\n        ]),\n        _c(\n          \"div\",\n          { staticClass: \"c-btn-area\" },\n          [\n            _c(\n              \"router-link\",\n              {\n                staticClass: \"c-btn c-btn-cancel h-mr30\",\n                attrs: { to: \"/teacher/quiz/paper\" }\n              },\n              [_vm._v(\"取消\")]\n            ),\n            _c(\n              \"a\",\n              {\n                staticClass: \"c-btn\",\n                attrs: { disabled: _vm.doubleClick },\n                on: {\n                  click: function($event) {\n                    $event.preventDefault()\n                    return _vm.validateAndSubmit()\n                  }\n                }\n              },\n              [_vm._v(\"確認\")]\n            )\n          ],\n          1\n        )\n      ]),\n      _c(\"APLightbox\", {\n        attrs: { message: _vm.lightbox.errorMsg, showLB: _vm.lightbox.showLB },\n        on: { closeAPLightbox: _vm.closeLB }\n      }),\n      _c(\"Footer\")\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"c-tab\" }, [\n      _c(\"h3\", { staticClass: \"c-tit\" }, [_vm._v(\"測驗管理 / 組卷資料\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"label\", { attrs: { for: \"tit\" } }, [\n      _c(\"span\", { staticClass: \"h-txt-red\" }, [_vm._v(\"*\")]),\n      _vm._v(\"測驗日期\")\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"h-relative\" }, [\n      _c(\"div\", { staticClass: \"c-tit-bar\" }, [_vm._v(\"組卷設定\")]),\n      _c(\"img\", {\n        staticClass: \"img-role03\",\n        attrs: { src: __webpack_require__(/*! @/img/role03.png */ \"./src/img/role03.png\") }\n      })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/ap/teacher/quiz/PaperEdit.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22ce5e7e48-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/controllers/ap/teacher/Common.ts":
/*!**********************************************!*\
  !*** ./src/controllers/ap/teacher/Common.ts ***!
  \**********************************************/
/*! exports provided: TeCommon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TeCommon\", function() { return teCommon; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-property-decorator */ \"./node_modules/vue-property-decorator/lib/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models */ \"./src/models/index.ts\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constant */ \"./src/constant/index.ts\");\n\r\n\r\n\r\n\r\nvar TeCommon = /** @class */ (function (_super) {\r\n    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__extends\"])(TeCommon, _super);\r\n    function TeCommon() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.token = window.localStorage.getItem('teacherToken');\r\n        return _this;\r\n    }\r\n    Object.defineProperty(TeCommon, \"instance\", {\r\n        get: function () {\r\n            if (!TeCommon.sInstance) {\r\n                TeCommon.sInstance = new TeCommon();\r\n            }\r\n            return TeCommon.sInstance;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    TeCommon.prototype.logout = function () {\r\n        window.localStorage.clear();\r\n        window.location.href = \"/teacher/login\";\r\n    };\r\n    TeCommon.prototype.checkToken = function (errNo) {\r\n        if (errNo === _constant__WEBPACK_IMPORTED_MODULE_3__[\"ErrorCode\"].InvalidToken) {\r\n            this.logout();\r\n            return;\r\n        }\r\n        return;\r\n    };\r\n    //取得級數\r\n    TeCommon.prototype.getGrade = function () {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].teGetGrade(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得該級數下的等級\r\n    TeCommon.prototype.getLevel = function (grade) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            grade: grade,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].teGetLevel(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得該老師所屬班級的所有縣市\r\n    TeCommon.prototype.getTECity = function (tid) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            tid: tid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getTECity(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得該老師所屬班級之該縣市分校列表\r\n    TeCommon.prototype.getTESchool = function (cid, tid) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            cid: cid,\r\n                            tid: tid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getTESchool(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得該老師所屬班級之該分校班級列表\r\n    TeCommon.prototype.getTEClass = function (sid, tid) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            sid: sid,\r\n                            tid: tid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getTEClass(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    // 取得 該班級的老師列表\r\n    TeCommon.prototype.getTeacher = function (type, clid, tid) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            type: type,\r\n                            clid: clid,\r\n                            tid: tid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].teGetTeacher(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return TeCommon;\r\n}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[\"Vue\"]));\r\nvar teCommon = TeCommon.instance;\r\n\r\n\n\n//# sourceURL=webpack:///./src/controllers/ap/teacher/Common.ts?");

/***/ }),

/***/ "./src/controllers/ap/teacher/quiz/PaperEdit.ts?v=3.0":
/*!*************************************************************************************!*\
  !*** ./src/controllers/ap/teacher/quiz/PaperEdit.ts?v=3.0?vue&type=script&lang=ts& ***!
  \*************************************************************************************/
/*! exports provided: PaperForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PaperForm\", function() { return PaperForm; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-property-decorator */ \"./node_modules/vue-property-decorator/lib/index.js\");\n/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-validator */ \"./node_modules/class-validator/esm5/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layout */ \"./src/layout/index.ts\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models */ \"./src/models/index.ts\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common */ \"./src/controllers/ap/teacher/Common.ts\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constant */ \"./src/constant/index.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar PaperForm = /** @class */ (function () {\r\n    function PaperForm() {\r\n        this.name = '';\r\n        this.beginTime = '';\r\n        this.endTime = '';\r\n        this.city = \"\";\r\n        this.school = \"\";\r\n        this.class = \"\";\r\n        this.teacher = \"\";\r\n        this.grade = '';\r\n        this.level = \"\";\r\n        this.unit = \"\";\r\n        this.num = 0;\r\n        this.active = \"\";\r\n        this.qid = '';\r\n        this.token = window.localStorage.getItem('teacherToken');\r\n    }\r\n    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\r\n        Object(class_validator__WEBPACK_IMPORTED_MODULE_2__[\"IsDefined\"])(),\r\n        Object(class_validator__WEBPACK_IMPORTED_MODULE_2__[\"IsNotEmpty\"])({ message: \"必填\" })\r\n    ], PaperForm.prototype, \"beginTime\", void 0);\r\n    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\r\n        Object(class_validator__WEBPACK_IMPORTED_MODULE_2__[\"IsDefined\"])(),\r\n        Object(class_validator__WEBPACK_IMPORTED_MODULE_2__[\"IsNotEmpty\"])({ message: \"必填\" })\r\n    ], PaperForm.prototype, \"endTime\", void 0);\r\n    return PaperForm;\r\n}());\r\n\r\nvar ApTeacherTestPaperAddController = /** @class */ (function (_super) {\r\n    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__extends\"])(ApTeacherTestPaperAddController, _super);\r\n    function ApTeacherTestPaperAddController() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        /*定義data 變數 */\r\n        _this.paperForm = new PaperForm();\r\n        _this.doubleClick = false;\r\n        _this.name = window.localStorage.getItem('teacher_name');\r\n        _this.token = window.localStorage.getItem('teacherToken');\r\n        _this.lightbox = {\r\n            showLB: false,\r\n            errorMsg: '',\r\n        };\r\n        _this.errorMsgMap = {\r\n            beginTime: '',\r\n            endTime: '',\r\n        };\r\n        return _this;\r\n    }\r\n    ApTeacherTestPaperAddController.prototype.created = function () {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, editData;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            qid: this.$route.query.qid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_5__[\"QuizModel\"].teGetPaper(item)];\r\n                    case 1:\r\n                        editData = _a.sent();\r\n                        this.assignDataToForm(editData);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ApTeacherTestPaperAddController.prototype.assignDataToForm = function (data) {\r\n        _Common__WEBPACK_IMPORTED_MODULE_6__[\"TeCommon\"].checkToken(data.ERR_CODE);\r\n        var item = data.info;\r\n        this.paperForm.qid = item.qid;\r\n        this.paperForm.name = item.name;\r\n        this.paperForm.beginTime = item.beginTime;\r\n        this.paperForm.endTime = item.endTime;\r\n        this.paperForm.city = item.city;\r\n        this.paperForm.school = item.school;\r\n        this.paperForm.class = item.class;\r\n        this.paperForm.teacher = item.teacher;\r\n        this.paperForm.grade = item.grade;\r\n        this.paperForm.unit = item.unit;\r\n        this.paperForm.level = item.level;\r\n        this.paperForm.num = item.num;\r\n        this.paperForm.active = item.active;\r\n    };\r\n    ApTeacherTestPaperAddController.prototype.validateAndSubmit = function () {\r\n        var _this = this;\r\n        Object(class_validator__WEBPACK_IMPORTED_MODULE_2__[\"validate\"])(this.paperForm, { skipMissingProperties: true }).then(function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(_this, void 0, void 0, function () {\r\n            var errNo;\r\n            var _this = this;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (result.length !== 0) {\r\n                            this.errorMsgMap = {\r\n                                beginTime: '',\r\n                                endTime: '',\r\n                            };\r\n                            result.forEach(function (item, index) {\r\n                                var error = item.constraints;\r\n                                Object.keys(error).forEach(function (key) {\r\n                                    _this.errorMsgMap[item.property] = error[key]; //放入error message\r\n                                });\r\n                            });\r\n                            return [2 /*return*/];\r\n                        }\r\n                        if (!!this.doubleClick) return [3 /*break*/, 2];\r\n                        this.doubleClick = true;\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_5__[\"QuizModel\"].teEditPaper(this.paperForm)];\r\n                    case 1:\r\n                        errNo = _a.sent();\r\n                        switch (errNo) {\r\n                            case _constant__WEBPACK_IMPORTED_MODULE_7__[\"ErrorCode\"].InvalidToken:\r\n                                _Common__WEBPACK_IMPORTED_MODULE_6__[\"TeCommon\"].logout();\r\n                                break;\r\n                            case _constant__WEBPACK_IMPORTED_MODULE_7__[\"ErrorCode\"].Success:\r\n                                this.doubleClick = false;\r\n                                this.$router.push(\"/teacher/quiz/paper\");\r\n                                break;\r\n                            default:\r\n                                this.lightbox.errorMsg = _constant__WEBPACK_IMPORTED_MODULE_7__[\"ErrorMessage\"][errNo];\r\n                                this.lightbox.showLB = true;\r\n                                this.doubleClick = false;\r\n                                break;\r\n                        }\r\n                        _a.label = 2;\r\n                    case 2: return [2 /*return*/];\r\n                }\r\n            });\r\n        }); });\r\n    };\r\n    ApTeacherTestPaperAddController.prototype.closeLB = function () {\r\n        this.lightbox.showLB = false;\r\n    };\r\n    ApTeacherTestPaperAddController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\r\n        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[\"Component\"])({\r\n            components: {\r\n                Header: _layout__WEBPACK_IMPORTED_MODULE_3__[\"Header\"], APLightbox: _components__WEBPACK_IMPORTED_MODULE_4__[\"APLightbox\"], Footer: _layout__WEBPACK_IMPORTED_MODULE_3__[\"Footer\"]\r\n            }\r\n        })\r\n    ], ApTeacherTestPaperAddController);\r\n    return ApTeacherTestPaperAddController;\r\n}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[\"Vue\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApTeacherTestPaperAddController);\r\n\n\n//# sourceURL=webpack:///./src/controllers/ap/teacher/quiz/PaperEdit.ts?");

/***/ }),

/***/ "./src/img/role03.png":
/*!****************************!*\
  !*** ./src/img/role03.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/role03.dd05bea6.png\";\n\n//# sourceURL=webpack:///./src/img/role03.png?");

/***/ }),

/***/ "./src/views/ap/teacher/quiz/PaperEdit.vue":
/*!*************************************************!*\
  !*** ./src/views/ap/teacher/quiz/PaperEdit.vue ***!
  \*************************************************/
/*! exports provided: PaperForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PaperEdit_vue_vue_type_template_id_ba813642___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaperEdit.vue?vue&type=template&id=ba813642& */ \"./src/views/ap/teacher/quiz/PaperEdit.vue?vue&type=template&id=ba813642&\");\n/* harmony import */ var _controllers_ap_teacher_quiz_PaperEdit_v_3_0_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/controllers/ap/teacher/quiz/PaperEdit?v=3.0?vue&type=script&lang=ts& */ \"./src/controllers/ap/teacher/quiz/PaperEdit.ts?v=3.0\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PaperForm\", function() { return _controllers_ap_teacher_quiz_PaperEdit_v_3_0_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"PaperForm\"]; });\n\n/* harmony import */ var _assets_css_main_css_v_2_0_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/css/main.css?v=2.0?vue&type=style&index=0&lang=css& */ \"./src/assets/css/main.css?v=2.0?0084\");\n/* harmony import */ var _assets_css_main_css_v_2_0_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_css_v_2_0_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _controllers_ap_teacher_quiz_PaperEdit_v_3_0_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _PaperEdit_vue_vue_type_template_id_ba813642___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _PaperEdit_vue_vue_type_template_id_ba813642___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/ap/teacher/quiz/PaperEdit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/ap/teacher/quiz/PaperEdit.vue?");

/***/ }),

/***/ "./src/views/ap/teacher/quiz/PaperEdit.vue?vue&type=template&id=ba813642&":
/*!********************************************************************************!*\
  !*** ./src/views/ap/teacher/quiz/PaperEdit.vue?vue&type=template&id=ba813642& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_ce5e7e48_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaperEdit_vue_vue_type_template_id_ba813642___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"ce5e7e48-vue-loader-template\"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaperEdit.vue?vue&type=template&id=ba813642& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"ce5e7e48-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/ap/teacher/quiz/PaperEdit.vue?vue&type=template&id=ba813642&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_ce5e7e48_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaperEdit_vue_vue_type_template_id_ba813642___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_ce5e7e48_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaperEdit_vue_vue_type_template_id_ba813642___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/ap/teacher/quiz/PaperEdit.vue?");

/***/ })

}]);