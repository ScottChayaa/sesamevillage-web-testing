(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"ce5e7e48-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/quiz/PaperEdit.vue?vue&type=template&id=40263b94&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ce5e7e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/quiz/PaperEdit.vue?vue&type=template&id=40263b94& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"wrap\" },\n    [\n      _c(\"SideNav\", { attrs: { currentPage: \"quiz\" } }),\n      _c(\"div\", { staticClass: \"main\" }, [\n        _c(\"h1\", [_vm._v(\"測驗管理-組卷資料\")]),\n        _c(\n          \"div\",\n          { staticClass: \"btn-area\" },\n          [\n            _c(\n              \"router-link\",\n              { staticClass: \"btn\", attrs: { to: \"/admin/quiz/paper\" } },\n              [_c(\"i\", { staticClass: \"fa fa-chevron-left\" }), _vm._v(\" 返回 \")]\n            )\n          ],\n          1\n        ),\n        _c(\"form\", { attrs: { action: \"\" } }, [\n          _c(\"div\", { staticClass: \"input-box\" }, [\n            _c(\"label\", { attrs: { for: \"name\" } }, [_vm._v(\"測驗名稱\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.quizForm.name))])\n          ]),\n          _c(\"div\", { staticClass: \"input-box\" }, [\n            _vm._m(0),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.quizForm.beginTime,\n                  expression: \"quizForm.beginTime\"\n                }\n              ],\n              staticClass: \"input-sty w250\",\n              attrs: { type: \"datetime-local\", name: \"beginTime\" },\n              domProps: { value: _vm.quizForm.beginTime },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.quizForm, \"beginTime\", $event.target.value)\n                }\n              }\n            }),\n            _vm.errorMsgMap[\"beginTime\"] !== \"\"\n              ? _c(\"label\", { staticClass: \"error\" }, [\n                  _vm._v(_vm._s(_vm.errorMsgMap[\"beginTime\"]))\n                ])\n              : _vm._e(),\n            _vm._v(\" ～ \"),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.quizForm.endTime,\n                  expression: \"quizForm.endTime\"\n                }\n              ],\n              staticClass: \"input-sty w250\",\n              attrs: { type: \"datetime-local\", name: \"endTime\" },\n              domProps: { value: _vm.quizForm.endTime },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.quizForm, \"endTime\", $event.target.value)\n                }\n              }\n            }),\n            _vm.errorMsgMap[\"endTime\"] !== \"\"\n              ? _c(\"label\", { staticClass: \"error\" }, [\n                  _vm._v(_vm._s(_vm.errorMsgMap[\"endTime\"]))\n                ])\n              : _vm._e()\n          ]),\n          _c(\"div\", { staticClass: \"input-box input-box-w\" }, [\n            _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"測驗分校\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.quizForm.city))]),\n            _vm._v(\"  \"),\n            _c(\"span\", [_vm._v(_vm._s(_vm.quizForm.school))])\n          ]),\n          _c(\"div\", { staticClass: \"input-box input-box-w\" }, [\n            _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"測驗班級\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.quizForm.class))])\n          ]),\n          _c(\"div\", { staticClass: \"input-box input-box-w\" }, [\n            _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"組卷老師\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.quizForm.teacher))])\n          ]),\n          _c(\"div\", { staticClass: \"input-box input-box-w\" }, [\n            _c(\"label\", { attrs: { for: \"tit\" } }, [_vm._v(\"級數\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.quizForm.grade))])\n          ]),\n          _c(\"div\", { staticClass: \"input-box input-box-w\" }, [\n            _c(\"label\", { attrs: { for: \"level\" } }, [_vm._v(\"Level\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.quizForm.level))])\n          ]),\n          _c(\"div\", { staticClass: \"input-box input-box-w\" }, [\n            _c(\"label\", { attrs: { for: \"unit\" } }, [_vm._v(\"單元\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.quizForm.unit))])\n          ]),\n          _c(\"div\", { staticClass: \"input-box input-box-w\" }, [\n            _c(\"label\", { attrs: { for: \"level\" } }, [_vm._v(\"題數\")]),\n            _c(\"span\", [_vm._v(_vm._s(_vm.quizForm.num))])\n          ]),\n          _c(\"div\", { staticClass: \"input-box\" }, [\n            _c(\"label\", { attrs: { for: \"active\" } }, [_vm._v(\"狀態\")]),\n            _c(\"div\", { staticClass: \"check-list\" }, [\n              _c(\"label\", { attrs: { for: \"active_1\" } }, [\n                _c(\"input\", {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: _vm.quizForm.active,\n                      expression: \"quizForm.active\"\n                    }\n                  ],\n                  staticClass: \"required\",\n                  attrs: {\n                    type: \"radio\",\n                    name: \"active\",\n                    id: \"active_1\",\n                    title: \"至少選擇一個\",\n                    value: \"1\",\n                    disabled: \"\"\n                  },\n                  domProps: { checked: _vm._q(_vm.quizForm.active, \"1\") },\n                  on: {\n                    change: function($event) {\n                      return _vm.$set(_vm.quizForm, \"active\", \"1\")\n                    }\n                  }\n                }),\n                _c(\"div\", { staticClass: \"radio-box\" }),\n                _c(\"span\", [_vm._v(\"啟用\")])\n              ]),\n              _c(\"label\", { attrs: { for: \"active_2\" } }, [\n                _c(\"input\", {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: _vm.quizForm.active,\n                      expression: \"quizForm.active\"\n                    }\n                  ],\n                  staticClass: \"radio-box required\",\n                  attrs: {\n                    type: \"radio\",\n                    name: \"active\",\n                    id: \"active_2\",\n                    title: \"至少選擇一個\",\n                    value: \"2\",\n                    disabled: \"\"\n                  },\n                  domProps: { checked: _vm._q(_vm.quizForm.active, \"2\") },\n                  on: {\n                    change: function($event) {\n                      return _vm.$set(_vm.quizForm, \"active\", \"2\")\n                    }\n                  }\n                }),\n                _c(\"div\", { staticClass: \"radio-box\" }),\n                _c(\"span\", [_vm._v(\"停用\")])\n              ])\n            ])\n          ]),\n          _c(\n            \"div\",\n            { staticClass: \"btn-area\" },\n            [\n              _c(\n                \"router-link\",\n                {\n                  staticClass: \"btn btn-cancel\",\n                  attrs: { to: \"/admin/quiz/paper\" }\n                },\n                [\n                  _c(\"i\", { staticClass: \"fa fa-chevron-left\" }),\n                  _vm._v(\" 取消\")\n                ]\n              ),\n              _c(\"div\", { staticClass: \"btn btn-submit\" }, [\n                _c(\"i\", { staticClass: \"fa fa-check\" }),\n                _vm._v(\" 確認送出 \"),\n                _c(\"input\", {\n                  staticClass: \"btn\",\n                  attrs: { type: \"button\", disabled: _vm.doubleClick },\n                  on: {\n                    click: function($event) {\n                      $event.preventDefault()\n                      return _vm.validateAndSubmit()\n                    }\n                  }\n                })\n              ])\n            ],\n            1\n          )\n        ])\n      ]),\n      _c(\"Lightbox\", {\n        attrs: { message: _vm.errorMsg, openLB: _vm.openLB },\n        on: { closeLightbox: _vm.closeLB }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"label\", { attrs: { for: \"date\" } }, [\n      _c(\"span\", { staticClass: \"h-txt-red\" }, [_vm._v(\"*\")]),\n      _vm._v(\"測驗日期\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/admin/quiz/PaperEdit.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22ce5e7e48-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/controllers/admin/Common.ts":
/*!*****************************************!*\
  !*** ./src/controllers/admin/Common.ts ***!
  \*****************************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Common\", function() { return common; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-property-decorator */ \"./node_modules/vue-property-decorator/lib/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models */ \"./src/models/index.ts\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constant */ \"./src/constant/index.ts\");\n\r\n\r\n\r\n\r\nvar Common = /** @class */ (function (_super) {\r\n    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__extends\"])(Common, _super);\r\n    function Common() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.token = window.localStorage.getItem('adminToken');\r\n        return _this;\r\n    }\r\n    Object.defineProperty(Common, \"instance\", {\r\n        get: function () {\r\n            if (!Common.sInstance) {\r\n                Common.sInstance = new Common();\r\n            }\r\n            return Common.sInstance;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Common.prototype.logout = function () {\r\n        // Cookie.delCookie(\"adminToken\", '/admin');\r\n        // Cookie.delCookie(\"admin_aaid\", '/admin');\r\n        // Cookie.delCookie(\"admin_name\", '/admin');\r\n        // Cookie.delCookie(\"admin_identity\", '/admin');\r\n        // Cookie.delCookie(\"admin_sid\", '/admin');\r\n        // Cookie.delCookie(\"admin_school\", '/admin');\r\n        // Cookie.delCookie(\"admin_authority\", '/admin');\r\n        window.localStorage.clear();\r\n        window.location.href = \"/admin/login\";\r\n    };\r\n    Common.prototype.checkToken = function (errNo) {\r\n        if (errNo === _constant__WEBPACK_IMPORTED_MODULE_3__[\"ErrorCode\"].InvalidToken) {\r\n            this.logout();\r\n            return;\r\n        }\r\n        return;\r\n    };\r\n    //取得級數\r\n    Common.prototype.getGrade = function () {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getGrade(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得該級數下的等級\r\n    Common.prototype.getLevel = function (grade) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            grade: grade,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getLevel(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得該等級下的單元\r\n    Common.prototype.getUnit = function (grade, level) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            grade: grade,\r\n                            level: level,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getUnit(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得所有縣市\r\n    Common.prototype.getAllCity = function () {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getAllCity(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得該縣市之鄉鎮市區\r\n    Common.prototype.getRegion = function (cid) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            cid: cid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getRegion(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得有分校之縣市\r\n    Common.prototype.getSchoolCity = function () {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getSchoolCity(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得 權限為分校之該分校之縣市\r\n    Common.prototype.getCity = function (sid) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            sid: sid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getCity(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    //取得該縣市之分校\r\n    Common.prototype.getSchool = function (cid) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            cid: cid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"CommonModel\"].getSchool(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    // 取得 該分校的班級列表\r\n    Common.prototype.getClass = function (type, sid, clid) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            type: type,\r\n                            sid: sid,\r\n                            clid: clid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"QuizModel\"].getClass(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    // 取得 該班級的老師列表\r\n    Common.prototype.getTeacher = function (type, clid, tid) {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, data;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            type: type,\r\n                            clid: clid,\r\n                            tid: tid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_2__[\"QuizModel\"].getClassTeacher(item)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        this.checkToken(data.ERR_CODE);\r\n                        return [2 /*return*/, data.list];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return Common;\r\n}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[\"Vue\"]));\r\nvar common = Common.instance;\r\n\r\n\n\n//# sourceURL=webpack:///./src/controllers/admin/Common.ts?");

/***/ }),

/***/ "./src/controllers/admin/quiz/PaperEdit.ts?v=2.0":
/*!********************************************************************************!*\
  !*** ./src/controllers/admin/quiz/PaperEdit.ts?v=2.0?vue&type=script&lang=ts& ***!
  \********************************************************************************/
/*! exports provided: QuizForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QuizForm\", function() { return QuizForm; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-property-decorator */ \"./node_modules/vue-property-decorator/lib/index.js\");\n/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-validator */ \"./node_modules/class-validator/esm5/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layout */ \"./src/layout/index.ts\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models */ \"./src/models/index.ts\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common */ \"./src/controllers/admin/Common.ts\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constant */ \"./src/constant/index.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar QuizForm = /** @class */ (function () {\r\n    function QuizForm() {\r\n        this.name = '';\r\n        this.beginTime = '';\r\n        this.endTime = '';\r\n        this.city = '';\r\n        this.school = '';\r\n        this.class = '';\r\n        this.teacher = \"\";\r\n        this.grade = '';\r\n        this.level = \"\";\r\n        this.unit = \"\";\r\n        this.num = 0;\r\n        this.active = \"\";\r\n        this.qid = '';\r\n        this.token = window.localStorage.getItem('adminToken');\r\n    }\r\n    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\r\n        Object(class_validator__WEBPACK_IMPORTED_MODULE_2__[\"IsDefined\"])(),\r\n        Object(class_validator__WEBPACK_IMPORTED_MODULE_2__[\"IsNotEmpty\"])({ message: \"必填\" })\r\n    ], QuizForm.prototype, \"beginTime\", void 0);\r\n    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\r\n        Object(class_validator__WEBPACK_IMPORTED_MODULE_2__[\"IsDefined\"])(),\r\n        Object(class_validator__WEBPACK_IMPORTED_MODULE_2__[\"IsNotEmpty\"])({ message: \"必填\" })\r\n    ], QuizForm.prototype, \"endTime\", void 0);\r\n    return QuizForm;\r\n}());\r\n\r\nvar AdminQuizPaperEditController = /** @class */ (function (_super) {\r\n    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__extends\"])(AdminQuizPaperEditController, _super);\r\n    function AdminQuizPaperEditController() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        /*定義data 變數 */\r\n        _this.doubleClick = false;\r\n        _this.quizForm = new QuizForm();\r\n        _this.token = window.localStorage.getItem('adminToken');\r\n        _this.errorMsg = \"\";\r\n        _this.openLB = false;\r\n        _this.errorMsgMap = {\r\n            beginTime: '',\r\n            endTime: '',\r\n        };\r\n        return _this;\r\n    }\r\n    AdminQuizPaperEditController.prototype.created = function () {\r\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\r\n            var item, editData;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        item = {\r\n                            qid: this.$route.query.qid,\r\n                            token: this.token,\r\n                        };\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_5__[\"QuizModel\"].getPaper(item)];\r\n                    case 1:\r\n                        editData = _a.sent();\r\n                        this.assignDataToForm(editData);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    AdminQuizPaperEditController.prototype.assignDataToForm = function (data) {\r\n        _Common__WEBPACK_IMPORTED_MODULE_6__[\"Common\"].checkToken(data.ERR_CODE);\r\n        var item = data.info;\r\n        this.quizForm.qid = item.qid;\r\n        this.quizForm.name = item.name;\r\n        this.quizForm.beginTime = item.beginTime;\r\n        this.quizForm.endTime = item.endTime;\r\n        this.quizForm.city = item.city;\r\n        this.quizForm.school = item.school;\r\n        this.quizForm.class = item.class;\r\n        this.quizForm.teacher = item.teacher;\r\n        this.quizForm.grade = item.grade;\r\n        this.quizForm.unit = item.unit;\r\n        this.quizForm.level = item.level;\r\n        this.quizForm.num = item.num;\r\n        this.quizForm.active = item.active;\r\n    };\r\n    AdminQuizPaperEditController.prototype.validateAndSubmit = function () {\r\n        var _this = this;\r\n        Object(class_validator__WEBPACK_IMPORTED_MODULE_2__[\"validate\"])(this.quizForm, { skipMissingProperties: true }).then(function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(_this, void 0, void 0, function () {\r\n            var _a;\r\n            var _this = this;\r\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        if (result.length !== 0) {\r\n                            this.errorMsgMap = {\r\n                                beginTime: '',\r\n                                endTime: '',\r\n                            };\r\n                            result.forEach(function (item, index) {\r\n                                var error = item.constraints;\r\n                                Object.keys(error).forEach(function (key) {\r\n                                    _this.errorMsgMap[item.property] = error[key]; //放入error message\r\n                                });\r\n                            });\r\n                            return [2 /*return*/];\r\n                        }\r\n                        if (!!this.doubleClick) return [3 /*break*/, 2];\r\n                        this.doubleClick = true;\r\n                        _a = this;\r\n                        return [4 /*yield*/, _models__WEBPACK_IMPORTED_MODULE_5__[\"QuizModel\"].editPaper(this.quizForm)];\r\n                    case 1:\r\n                        _a.errNo = _b.sent();\r\n                        _Common__WEBPACK_IMPORTED_MODULE_6__[\"Common\"].checkToken(this.errNo);\r\n                        this.openLB = true;\r\n                        this.doubleClick = false;\r\n                        this.errorMsg = _constant__WEBPACK_IMPORTED_MODULE_7__[\"ErrorMessage\"][this.errNo];\r\n                        _b.label = 2;\r\n                    case 2: return [2 /*return*/];\r\n                }\r\n            });\r\n        }); });\r\n    };\r\n    AdminQuizPaperEditController.prototype.closeLB = function () {\r\n        this.openLB = false;\r\n        if (this.errNo === _constant__WEBPACK_IMPORTED_MODULE_7__[\"ErrorCode\"].Success) {\r\n            this.$router.push(\"/admin/quiz/paper\");\r\n        }\r\n    };\r\n    AdminQuizPaperEditController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\r\n        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[\"Component\"])({\r\n            components: {\r\n                SideNav: _layout__WEBPACK_IMPORTED_MODULE_3__[\"SideNav\"], Lightbox: _components__WEBPACK_IMPORTED_MODULE_4__[\"Lightbox\"]\r\n            }\r\n        })\r\n    ], AdminQuizPaperEditController);\r\n    return AdminQuizPaperEditController;\r\n}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[\"Vue\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminQuizPaperEditController);\r\n\n\n//# sourceURL=webpack:///./src/controllers/admin/quiz/PaperEdit.ts?");

/***/ }),

/***/ "./src/views/admin/quiz/PaperEdit.vue":
/*!********************************************!*\
  !*** ./src/views/admin/quiz/PaperEdit.vue ***!
  \********************************************/
/*! exports provided: QuizForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PaperEdit_vue_vue_type_template_id_40263b94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaperEdit.vue?vue&type=template&id=40263b94& */ \"./src/views/admin/quiz/PaperEdit.vue?vue&type=template&id=40263b94&\");\n/* harmony import */ var _controllers_admin_quiz_PaperEdit_v_2_0_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/controllers/admin/quiz/PaperEdit?v=2.0?vue&type=script&lang=ts& */ \"./src/controllers/admin/quiz/PaperEdit.ts?v=2.0\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"QuizForm\", function() { return _controllers_admin_quiz_PaperEdit_v_2_0_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"QuizForm\"]; });\n\n/* harmony import */ var _assets_css_backend_css_v_2_0_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/css/backend.css?v=2.0?vue&type=style&index=0&lang=css& */ \"./src/assets/css/backend.css?v=2.0\");\n/* harmony import */ var _assets_css_backend_css_v_2_0_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_backend_css_v_2_0_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _controllers_admin_quiz_PaperEdit_v_2_0_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _PaperEdit_vue_vue_type_template_id_40263b94___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _PaperEdit_vue_vue_type_template_id_40263b94___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/admin/quiz/PaperEdit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/admin/quiz/PaperEdit.vue?");

/***/ }),

/***/ "./src/views/admin/quiz/PaperEdit.vue?vue&type=template&id=40263b94&":
/*!***************************************************************************!*\
  !*** ./src/views/admin/quiz/PaperEdit.vue?vue&type=template&id=40263b94& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_ce5e7e48_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaperEdit_vue_vue_type_template_id_40263b94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"ce5e7e48-vue-loader-template\"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaperEdit.vue?vue&type=template&id=40263b94& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"ce5e7e48-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/quiz/PaperEdit.vue?vue&type=template&id=40263b94&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_ce5e7e48_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaperEdit_vue_vue_type_template_id_40263b94___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_ce5e7e48_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaperEdit_vue_vue_type_template_id_40263b94___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/admin/quiz/PaperEdit.vue?");

/***/ })

}]);