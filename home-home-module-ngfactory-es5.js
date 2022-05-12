function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module-ngfactory"], {
  /***/
  "../../node_modules/@angular/material/button/index.ngfactory.js":
  /*!***********************************************************************************************!*\
    !*** /Volumes/T7/repos/scully-image/node_modules/@angular/material/button/index.ngfactory.js ***!
    \***********************************************************************************************/

  /*! exports provided: MatButtonModuleNgFactory, RenderType_MatButton, View_MatButton_0, View_MatButton_Host_0, MatButtonNgFactory, RenderType_MatAnchor, View_MatAnchor_0, View_MatAnchor_Host_0, MatAnchorNgFactory */

  /***/
  function node_modulesAngularMaterialButtonIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonModuleNgFactory", function () {
      return MatButtonModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatButton", function () {
      return RenderType_MatButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatButton_0", function () {
      return View_MatButton_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatButton_Host_0", function () {
      return View_MatButton_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonNgFactory", function () {
      return MatButtonNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatAnchor", function () {
      return RenderType_MatAnchor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatAnchor_0", function () {
      return View_MatAnchor_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatAnchor_Host_0", function () {
      return View_MatAnchor_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAnchorNgFactory", function () {
      return MatAnchorNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var MatButtonModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], [])]);
    });

    var styles_MatButton = [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"];

    var RenderType_MatButton = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatButton,
      data: {}
    });

    function View_MatButton_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        ripple: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 212992, [[1, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], {
        centered: [0, "centered"],
        disabled: [1, "disabled"],
        trigger: [2, "trigger"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "div", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.isIconButton;

        var currVal_3 = _co._isRippleDisabled();

        var currVal_4 = _co._getHostElement();

        _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.isRoundButton || _co.isIconButton;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).unbounded;

        _ck(_v, 3, 0, currVal_0, currVal_1);
      });
    }

    function View_MatButton_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, View_MatButton_0, RenderType_MatButton)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    var MatButtonNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]", _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], View_MatButton_Host_0, {
      disabled: "disabled",
      disableRipple: "disableRipple",
      color: "color"
    }, {}, ["*"]);

    var styles_MatAnchor = [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"];

    var RenderType_MatAnchor = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatAnchor,
      data: {}
    });

    function View_MatAnchor_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        ripple: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 212992, [[1, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], {
        centered: [0, "centered"],
        disabled: [1, "disabled"],
        trigger: [2, "trigger"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "div", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.isIconButton;

        var currVal_3 = _co._isRippleDisabled();

        var currVal_4 = _co._getHostElement();

        _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.isRoundButton || _co.isIconButton;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).unbounded;

        _ck(_v, 3, 0, currVal_0, currVal_1);
      });
    }

    function View_MatAnchor_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "a", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, View_MatAnchor_0, RenderType_MatAnchor)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).tabIndex || 0;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled || null;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled.toString();

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    var MatAnchorNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], View_MatAnchor_Host_0, {
      disabled: "disabled",
      disableRipple: "disableRipple",
      color: "color",
      tabIndex: "tabIndex"
    }, {}, ["*"]);
    /***/

  },

  /***/
  "../../node_modules/@angular/material/fesm2015/icon.js":
  /*!**************************************************************************************!*\
    !*** /Volumes/T7/repos/scully-image/node_modules/@angular/material/fesm2015/icon.js ***!
    \**************************************************************************************/

  /*! exports provided: ICON_REGISTRY_PROVIDER, ICON_REGISTRY_PROVIDER_FACTORY, MAT_ICON_LOCATION, MAT_ICON_LOCATION_FACTORY, MatIcon, MatIconModule, MatIconRegistry, getMatIconFailedToSanitizeLiteralError, getMatIconFailedToSanitizeUrlError, getMatIconNameNotFoundError, getMatIconNoHttpProviderError */

  /***/
  function node_modulesAngularMaterialFesm2015IconJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function () {
      return ICON_REGISTRY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function () {
      return ICON_REGISTRY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function () {
      return MAT_ICON_LOCATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function () {
      return MAT_ICON_LOCATION_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIcon", function () {
      return MatIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIconModule", function () {
      return MatIconModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function () {
      return MatIconRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function () {
      return getMatIconFailedToSanitizeLiteralError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function () {
      return getMatIconFailedToSanitizeUrlError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function () {
      return getMatIconNameNotFoundError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function () {
      return getMatIconNoHttpProviderError;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "../../node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/icon-registry.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an exception to be thrown in the case when attempting to
     * load an icon with a name that cannot be found.
     * \@docs-private
     * @param {?} iconName
     * @return {?}
     */


    var _c0 = ["*"];

    function getMatIconNameNotFoundError(iconName) {
      return Error("Unable to find icon with the name \"".concat(iconName, "\""));
    }
    /**
     * Returns an exception to be thrown when the consumer attempts to use
     * `<mat-icon>` without including \@angular/common/http.
     * \@docs-private
     * @return {?}
     */


    function getMatIconNoHttpProviderError() {
      return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
    }
    /**
     * Returns an exception to be thrown when a URL couldn't be sanitized.
     * \@docs-private
     * @param {?} url URL that was attempted to be sanitized.
     * @return {?}
     */


    function getMatIconFailedToSanitizeUrlError(url) {
      return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
    }
    /**
     * Returns an exception to be thrown when a HTML string couldn't be sanitized.
     * \@docs-private
     * @param {?} literal HTML that was attempted to be sanitized.
     * @return {?}
     */


    function getMatIconFailedToSanitizeLiteralError(literal) {
      return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
    }
    /**
     * Options that can be used to configure how an icon or the icons in an icon set are presented.
     * @record
     */


    function IconOptions() {}

    if (false) {}
    /**
     * Configuration for an icon, including the URL and possibly the cached SVG element.
     * \@docs-private
     */


    var SvgIconConfig =
    /**
     * @param {?} data
     * @param {?=} options
     */
    function SvgIconConfig(data, options) {
      _classCallCheck(this, SvgIconConfig);

      this.options = options; // Note that we can't use `instanceof SVGElement` here,
      // because it'll break during server-side rendering.

      if (!!
      /** @type {?} */
      data.nodeName) {
        this.svgElement =
        /** @type {?} */
        data;
      } else {
        this.url =
        /** @type {?} */
        data;
      }
    };

    if (false) {}
    /**
     * Service to register and display icons used by the `<mat-icon>` component.
     * - Registers icon URLs by namespace and name.
     * - Registers icon set URLs by namespace.
     * - Registers aliases for CSS classes, for use with icon fonts.
     * - Loads icons from URLs and extracts individual icons from icon sets.
     */


    var MatIconRegistry =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _httpClient
       * @param {?} _sanitizer
       * @param {?} document
       * @param {?=} _errorHandler
       */
      function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
        _classCallCheck(this, MatIconRegistry);

        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */

        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */

        this._iconSetConfigs = new Map();
        /**
         * Cache for icons loaded by direct URLs.
         */

        this._cachedIconsByUrl = new Map();
        /**
         * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
         */

        this._inProgressUrlFetches = new Map();
        /**
         * Map from font identifiers to their CSS class names. Used for icon fonts.
         */

        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */

        this._defaultFontSetClass = 'material-icons';
        this._document = document;
      }
      /**
       * Registers an icon by URL in the default namespace.
       * @template THIS
       * @this {THIS}
       * @param {?} iconName Name under which the icon should be registered.
       * @param {?} url
       * @param {?=} options
       * @return {THIS}
       */


      _createClass(MatIconRegistry, [{
        key: "addSvgIcon",
        value: function addSvgIcon(iconName, url, options) {
          return (
            /** @type {?} */
            this.addSvgIconInNamespace('', iconName, url, options)
          );
        }
        /**
         * Registers an icon using an HTML string in the default namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} iconName Name under which the icon should be registered.
         * @param {?} literal SVG source of the icon.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconLiteral",
        value: function addSvgIconLiteral(iconName, literal, options) {
          return (
            /** @type {?} */
            this.addSvgIconLiteralInNamespace('', iconName, literal, options)
          );
        }
        /**
         * Registers an icon by URL in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which the icon should be registered.
         * @param {?} iconName Name under which the icon should be registered.
         * @param {?} url
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconInNamespace",
        value: function addSvgIconInNamespace(namespace, iconName, url, options) {
          return (
            /** @type {?} */
            this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, options))
          );
        }
        /**
         * Registers an icon using an HTML string in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which the icon should be registered.
         * @param {?} iconName Name under which the icon should be registered.
         * @param {?} literal SVG source of the icon.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconLiteralInNamespace",
        value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
          /** @type {?} */
          var sanitizedLiteral =
          /** @type {?} */
          this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);

          if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
          }
          /** @type {?} */


          var svgElement =
          /** @type {?} */
          this._createSvgElementForSingleIcon(sanitizedLiteral, options);

          return (
            /** @type {?} */
            this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(svgElement, options))
          );
        }
        /**
         * Registers an icon set by URL in the default namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} url
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSet",
        value: function addSvgIconSet(url, options) {
          return (
            /** @type {?} */
            this.addSvgIconSetInNamespace('', url, options)
          );
        }
        /**
         * Registers an icon set using an HTML string in the default namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} literal SVG source of the icon set.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSetLiteral",
        value: function addSvgIconSetLiteral(literal, options) {
          return (
            /** @type {?} */
            this.addSvgIconSetLiteralInNamespace('', literal, options)
          );
        }
        /**
         * Registers an icon set by URL in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon set.
         * @param {?} url
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSetInNamespace",
        value: function addSvgIconSetInNamespace(namespace, url, options) {
          return (
            /** @type {?} */
            this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, options))
          );
        }
        /**
         * Registers an icon set using an HTML string in the specified namespace.
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon set.
         * @param {?} literal SVG source of the icon set.
         * @param {?=} options
         * @return {THIS}
         */

      }, {
        key: "addSvgIconSetLiteralInNamespace",
        value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
          /** @type {?} */
          var sanitizedLiteral =
          /** @type {?} */
          this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);

          if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
          }
          /** @type {?} */


          var svgElement =
          /** @type {?} */
          this._svgElementFromString(sanitizedLiteral);

          return (
            /** @type {?} */
            this._addSvgIconSetConfig(namespace, new SvgIconConfig(svgElement, options))
          );
        }
        /**
         * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
         * component with the alias as the fontSet input will cause the class name to be applied
         * to the `<mat-icon>` element.
         *
         * @template THIS
         * @this {THIS}
         * @param {?} alias Alias for the font.
         * @param {?=} className Class name override to be used instead of the alias.
         * @return {THIS}
         */

      }, {
        key: "registerFontClassAlias",
        value: function registerFontClassAlias(alias) {
          var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

          /** @type {?} */
          this._fontCssClassesByAlias.set(alias, className);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Returns the CSS class name associated with the alias by a previous call to
         * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
         * @param {?} alias
         * @return {?}
         */

      }, {
        key: "classNameForFontAlias",
        value: function classNameForFontAlias(alias) {
          return this._fontCssClassesByAlias.get(alias) || alias;
        }
        /**
         * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
         * have a fontSet input value, and is not loading an icon by name or URL.
         *
         * @template THIS
         * @this {THIS}
         * @param {?} className
         * @return {THIS}
         */

      }, {
        key: "setDefaultFontSetClass",
        value: function setDefaultFontSetClass(className) {
          /** @type {?} */
          this._defaultFontSetClass = className;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
         * have a fontSet input value, and is not loading an icon by name or URL.
         * @return {?}
         */

      }, {
        key: "getDefaultFontSetClass",
        value: function getDefaultFontSetClass() {
          return this._defaultFontSetClass;
        }
        /**
         * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
         * The response from the URL may be cached so this will not always cause an HTTP request, but
         * the produced element will always be a new copy of the originally fetched icon. (That is,
         * it will not contain any modifications made to elements previously returned).
         *
         * @param {?} safeUrl URL from which to fetch the SVG icon.
         * @return {?}
         */

      }, {
        key: "getSvgIconFromUrl",
        value: function getSvgIconFromUrl(safeUrl) {
          var _this = this;

          /** @type {?} */
          var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);

          if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
          }
          /** @type {?} */


          var cachedIcon = this._cachedIconsByUrl.get(url);

          if (cachedIcon) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
          }

          return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(
          /**
          * @param {?} svg
          * @return {?}
          */
          function (svg) {
            return _this._cachedIconsByUrl.set(
            /** @type {?} */
            url, svg);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} svg
          * @return {?}
          */
          function (svg) {
            return cloneSvg(svg);
          }));
        }
        /**
         * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
         * and namespace. The icon must have been previously registered with addIcon or addIconSet;
         * if not, the Observable will throw an error.
         *
         * @param {?} name Name of the icon to be retrieved.
         * @param {?=} namespace Namespace in which to look for the icon.
         * @return {?}
         */

      }, {
        key: "getNamedSvgIcon",
        value: function getNamedSvgIcon(name) {
          var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          // Return (copy of) cached icon if possible.

          /** @type {?} */
          var key = iconKey(namespace, name);
          /** @type {?} */

          var config = this._svgIconConfigs.get(key);

          if (config) {
            return this._getSvgFromConfig(config);
          } // See if we have any icon sets registered for the namespace.

          /** @type {?} */


          var iconSetConfigs = this._iconSetConfigs.get(namespace);

          if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._svgIconConfigs.clear();

          this._iconSetConfigs.clear();

          this._cachedIconsByUrl.clear();
        }
        /**
         * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_getSvgFromConfig",
        value: function _getSvgFromConfig(config) {
          if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(config.svgElement));
          } else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(
            /**
            * @param {?} svg
            * @return {?}
            */
            function (svg) {
              return config.svgElement = svg;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
            /**
            * @param {?} svg
            * @return {?}
            */
            function (svg) {
              return cloneSvg(svg);
            }));
          }
        }
        /**
         * Attempts to find an icon with the specified name in any of the SVG icon sets.
         * First searches the available cached icons for a nested element with a matching name, and
         * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
         * that have not been cached, and searches again after all fetches are completed.
         * The returned Observable produces the SVG element if possible, and throws
         * an error if no icon with the specified name can be found.
         * @private
         * @param {?} name
         * @param {?} iconSetConfigs
         * @return {?}
         */

      }, {
        key: "_getSvgFromIconSetConfigs",
        value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
          var _this2 = this;

          // For all the icon set SVG elements we've fetched, see if any contain an icon with the
          // requested name.

          /** @type {?} */
          var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

          if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
          } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
          // fetched, fetch them now and look for iconName in the results.

          /** @type {?} */


          var iconSetFetchRequests = iconSetConfigs.filter(
          /**
          * @param {?} iconSetConfig
          * @return {?}
          */
          function (iconSetConfig) {
            return !iconSetConfig.svgElement;
          }).map(
          /**
          * @param {?} iconSetConfig
          * @return {?}
          */
          function (iconSetConfig) {
            return _this2._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(
            /**
            * @param {?} err
            * @return {?}
            */
            function (err) {
              /** @type {?} */
              var url = _this2._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
              // combined Observable won't necessarily fail.

              /** @type {?} */


              var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message); // @breaking-change 9.0.0 _errorHandler parameter to be made required

              if (_this2._errorHandler) {
                _this2._errorHandler.handleError(new Error(errorMessage));
              } else {
                console.error(errorMessage);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
          }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
          // cached SVG element (unless the request failed), and we can check again for the icon.

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var foundIcon = _this2._extractIconWithNameFromAnySet(name, iconSetConfigs);

            if (!foundIcon) {
              throw getMatIconNameNotFoundError(name);
            }

            return foundIcon;
          }));
        }
        /**
         * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
         * tag matches the specified name. If found, copies the nested element to a new SVG element and
         * returns it. Returns null if no matching element is found.
         * @private
         * @param {?} iconName
         * @param {?} iconSetConfigs
         * @return {?}
         */

      }, {
        key: "_extractIconWithNameFromAnySet",
        value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
          // Iterate backwards, so icon sets added later have precedence.
          for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
            /** @type {?} */
            var config = iconSetConfigs[i];

            if (config.svgElement) {
              /** @type {?} */
              var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config.options);

              if (foundIcon) {
                return foundIcon;
              }
            }
          }

          return null;
        }
        /**
         * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
         * from it.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_loadSvgIconFromConfig",
        value: function _loadSvgIconFromConfig(config) {
          var _this3 = this;

          return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} svgText
          * @return {?}
          */
          function (svgText) {
            return _this3._createSvgElementForSingleIcon(svgText, config.options);
          }));
        }
        /**
         * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
         * from it.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_loadSvgIconSetFromConfig",
        value: function _loadSvgIconSetFromConfig(config) {
          var _this4 = this;

          // If the SVG for this icon set has already been parsed, do nothing.
          if (config.svgElement) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(config.svgElement);
          }

          return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} svgText
          * @return {?}
          */
          function (svgText) {
            // It is possible that the icon set was parsed and cached by an earlier request, so parsing
            // only needs to occur if the cache is yet unset.
            if (!config.svgElement) {
              config.svgElement = _this4._svgElementFromString(svgText);
            }

            return config.svgElement;
          }));
        }
        /**
         * Creates a DOM element from the given SVG string, and adds default attributes.
         * @private
         * @param {?} responseText
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_createSvgElementForSingleIcon",
        value: function _createSvgElementForSingleIcon(responseText, options) {
          /** @type {?} */
          var svg = this._svgElementFromString(responseText);

          this._setSvgAttributes(svg, options);

          return svg;
        }
        /**
         * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
         * tag matches the specified name. If found, copies the nested element to a new SVG element and
         * returns it. Returns null if no matching element is found.
         * @private
         * @param {?} iconSet
         * @param {?} iconName
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_extractSvgIconFromSet",
        value: function _extractSvgIconFromSet(iconSet, iconName, options) {
          // Use the `id="iconName"` syntax in order to escape special
          // characters in the ID (versus using the #iconName syntax).

          /** @type {?} */
          var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

          if (!iconSource) {
            return null;
          } // Clone the element and remove the ID to prevent multiple elements from being added
          // to the page with the same ID.

          /** @type {?} */


          var iconElement =
          /** @type {?} */
          iconSource.cloneNode(true);
          iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
          // the content of a new <svg> node.

          if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes(
            /** @type {?} */
            iconElement, options);
          } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
          // that the same could be achieved by referring to it via <use href="#id">, however the <use>
          // tag is problematic on Firefox, because it needs to include the current page path.


          if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement), options);
          } // createElement('SVG') doesn't work as expected; the DOM ends up with
          // the correct nodes, but the SVG content doesn't render. Instead we
          // have to create an empty SVG node using innerHTML and append its content.
          // Elements created using DOMParser.parseFromString have the same problem.
          // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display

          /** @type {?} */


          var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


          svg.appendChild(iconElement);
          return this._setSvgAttributes(svg, options);
        }
        /**
         * Creates a DOM element from the given SVG string.
         * @private
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "_svgElementFromString",
        value: function _svgElementFromString(str) {
          /** @type {?} */
          var div = this._document.createElement('DIV');

          div.innerHTML = str;
          /** @type {?} */

          var svg =
          /** @type {?} */
          div.querySelector('svg');

          if (!svg) {
            throw Error('<svg> tag not found');
          }

          return svg;
        }
        /**
         * Converts an element into an SVG node by cloning all of its children.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_toSvgElement",
        value: function _toSvgElement(element) {
          /** @type {?} */
          var svg = this._svgElementFromString('<svg></svg>');
          /** @type {?} */


          var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

          for (var i = 0; i < attributes.length; i++) {
            var _attributes$i = attributes[i],
                name = _attributes$i.name,
                value = _attributes$i.value;

            if (name !== 'id') {
              svg.setAttribute(name, value);
            }
          }

          for (var _i = 0; _i < element.childNodes.length; _i++) {
            if (element.childNodes[_i].nodeType === this._document.ELEMENT_NODE) {
              svg.appendChild(element.childNodes[_i].cloneNode(true));
            }
          }

          return svg;
        }
        /**
         * Sets the default attributes for an SVG element to be used as an icon.
         * @private
         * @param {?} svg
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_setSvgAttributes",
        value: function _setSvgAttributes(svg, options) {
          svg.setAttribute('fit', '');
          svg.setAttribute('height', '100%');
          svg.setAttribute('width', '100%');
          svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
          svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

          if (options && options.viewBox) {
            svg.setAttribute('viewBox', options.viewBox);
          }

          return svg;
        }
        /**
         * Returns an Observable which produces the string contents of the given URL. Results may be
         * cached, so future calls with the same URL may not cause another HTTP request.
         * @private
         * @param {?} safeUrl
         * @return {?}
         */

      }, {
        key: "_fetchUrl",
        value: function _fetchUrl(safeUrl) {
          var _this5 = this;

          if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
          }

          if (safeUrl == null) {
            throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
          }
          /** @type {?} */


          var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);

          if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
          } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
          // already a request in progress for that URL. It's necessary to call share() on the
          // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.

          /** @type {?} */


          var inProgressFetch = this._inProgressUrlFetches.get(url);

          if (inProgressFetch) {
            return inProgressFetch;
          } // TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
          // Observable. Figure out why and fix it.

          /** @type {?} */


          var req = this._httpClient.get(url, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(
          /**
          * @return {?}
          */
          function () {
            return _this5._inProgressUrlFetches["delete"](url);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());

          this._inProgressUrlFetches.set(url, req);

          return req;
        }
        /**
         * Registers an icon config by name in the specified namespace.
         * @private
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon config.
         * @param {?} iconName Name under which to register the config.
         * @param {?} config Config to be registered.
         * @return {THIS}
         */

      }, {
        key: "_addSvgIconConfig",
        value: function _addSvgIconConfig(namespace, iconName, config) {
          /** @type {?} */
          this._svgIconConfigs.set(iconKey(namespace, iconName), config);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers an icon set config in the specified namespace.
         * @private
         * @template THIS
         * @this {THIS}
         * @param {?} namespace Namespace in which to register the icon config.
         * @param {?} config Config to be registered.
         * @return {THIS}
         */

      }, {
        key: "_addSvgIconSetConfig",
        value: function _addSvgIconSetConfig(namespace, config) {
          /** @type {?} */
          var configNamespace =
          /** @type {?} */
          this._iconSetConfigs.get(namespace);

          if (configNamespace) {
            configNamespace.push(config);
          } else {
            /** @type {?} */
            this._iconSetConfigs.set(namespace, [config]);
          }

          return (
            /** @type {?} */
            this
          );
        }
      }]);

      return MatIconRegistry;
    }();

    MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
      return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], 8));
    };
    /** @nocollapse */


    MatIconRegistry.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };
    /** @nocollapse */


    MatIconRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatIconRegistry_Factory() {
        return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], 8));
      },
      token: MatIconRegistry,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private
     * @param {?} parentRegistry
     * @param {?} httpClient
     * @param {?} sanitizer
     * @param {?=} document
     * @param {?=} errorHandler
     * @return {?}
     */


    function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, document, errorHandler) {
      return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var ICON_REGISTRY_PROVIDER = {
      // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
      provide: MatIconRegistry,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](),
      /** @type {?} */
      _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]],
      useFactory: ICON_REGISTRY_PROVIDER_FACTORY
    };
    /**
     * Clones an SVGElement while preserving type information.
     * @param {?} svg
     * @return {?}
     */

    function cloneSvg(svg) {
      return (
        /** @type {?} */
        svg.cloneNode(true)
      );
    }
    /**
     * Returns the cache key to use for an icon namespace and name.
     * @param {?} namespace
     * @param {?} name
     * @return {?}
     */


    function iconKey(namespace, name) {
      return namespace + ':' + name;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/icon.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatIcon.

    /**
     * \@docs-private
     */


    var MatIconBase =
    /**
     * @param {?} _elementRef
     */
    function MatIconBase(_elementRef) {
      _classCallCheck(this, MatIconBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatIconBase);
    /**
     * Injection token used to provide the current location to `MatIcon`.
     * Used to handle server-side rendering and to stub out during unit tests.
     * \@docs-private
     * @type {?}
     */


    var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-icon-location', {
      providedIn: 'root',
      factory: MAT_ICON_LOCATION_FACTORY
    });
    /**
     * Stubbed out location for `MatIcon`.
     * \@docs-private
     * @record
     */

    function MatIconLocation() {}

    if (false) {}
    /**
     * \@docs-private
     * @return {?}
     */


    function MAT_ICON_LOCATION_FACTORY() {
      /** @type {?} */
      var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]);
      /** @type {?} */


      var _location = _document ? _document.location : null;

      return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname:
        /**
        * @return {?}
        */
        function getPathname() {
          return _location ? _location.pathname + _location.search : '';
        }
      };
    }
    /**
     * SVG attributes that accept a FuncIRI (e.g. `url(<something>)`).
     * @type {?}
     */


    var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

    var ɵ0 =
    /**
    * @param {?} attr
    * @return {?}
    */
    function ɵ0(attr) {
      return "[".concat(attr, "]");
    };
    /**
     * Selector that can be used to find all elements that are using a `FuncIRI`.
     * @type {?}
     */


    var funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
    /**
     * Regex that can be used to extract the id out of a FuncIRI.
     * @type {?}
     */

    var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
    /**
     * Component to display an icon. It can be used in the following ways:
     *
     * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
     *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
     *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
     *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
     *   Examples:
     *     `<mat-icon svgIcon="left-arrow"></mat-icon>
     *     <mat-icon svgIcon="animals:cat"></mat-icon>`
     *
     * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
     *   component. By default the Material icons font is used as described at
     *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
     *   alternate font by setting the fontSet input to either the CSS class to apply to use the
     *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
     *   Examples:
     *     `<mat-icon>home</mat-icon>
     *     <mat-icon fontSet="myfont">sun</mat-icon>`
     *
     * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
     *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
     *   CSS class which causes the glyph to be displayed via a :before selector, as in
     *   https://fortawesome.github.io/Font-Awesome/examples/
     *   Example:
     *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
     */

    var MatIcon =
    /*#__PURE__*/
    function (_MatIconMixinBase2) {
      _inherits(MatIcon, _MatIconMixinBase2);

      var _super = _createSuper(MatIcon);

      /**
       * @param {?} elementRef
       * @param {?} _iconRegistry
       * @param {?} ariaHidden
       * @param {?=} _location
       * @param {?=} _errorHandler
       */
      function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
        var _this6;

        _classCallCheck(this, MatIcon);

        _this6 = _super.call(this, elementRef);
        _this6._iconRegistry = _iconRegistry;
        _this6._location = _location;
        _this6._errorHandler = _errorHandler;
        _this6._inline = false;
        /**
         * Subscription to the current in-progress SVG icon request.
         */

        _this6._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.

        if (!ariaHidden) {
          elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }

        return _this6;
      }
      /**
       * Whether the icon should be inlined, automatically sizing the icon to match the font size of
       * the element the icon is contained in.
       * @return {?}
       */


      _createClass(MatIcon, [{
        key: "_splitIconName",

        /**
         * Splits an svgIcon binding value into its icon set and icon name components.
         * Returns a 2-element array of [(icon set), (icon name)].
         * The separator for the two fields is ':'. If there is no separator, an empty
         * string is returned for the icon set and the entire value is returned for
         * the icon name. If the argument is falsy, returns an array of two empty strings.
         * Throws an error if the name contains two or more ':' separators.
         * Examples:
         *   `'social:cake' -> ['social', 'cake']
         *   'penguin' -> ['', 'penguin']
         *   null -> ['', '']
         *   'a:b:c' -> (throws Error)`
         * @private
         * @param {?} iconName
         * @return {?}
         */
        value: function _splitIconName(iconName) {
          if (!iconName) {
            return ['', ''];
          }
          /** @type {?} */


          var parts = iconName.split(':');

          switch (parts.length) {
            case 1:
              return ['', parts[0]];
            // Use default namespace.

            case 2:
              return (
                /** @type {?} */
                parts
              );

            default:
              throw Error("Invalid icon name: \"".concat(iconName, "\""));
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this7 = this;

          // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.

          /** @type {?} */
          var svgIconChanges = changes['svgIcon'];

          if (svgIconChanges) {
            this._currentIconFetch.unsubscribe();

            if (this.svgIcon) {
              var _this$_splitIconName = this._splitIconName(this.svgIcon),
                  _this$_splitIconName2 = _slicedToArray(_this$_splitIconName, 2),
                  namespace = _this$_splitIconName2[0],
                  iconName = _this$_splitIconName2[1];

              this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(
              /**
              * @param {?} svg
              * @return {?}
              */
              function (svg) {
                return _this7._setSvgElement(svg);
              },
              /**
              * @param {?} err
              * @return {?}
              */
              function (err) {
                /** @type {?} */
                var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message); // @breaking-change 9.0.0 _errorHandler parameter to be made required.

                if (_this7._errorHandler) {
                  _this7._errorHandler.handleError(new Error(errorMessage));
                } else {
                  console.error(errorMessage);
                }
              });
            } else if (svgIconChanges.previousValue) {
              this._clearSvgElement();
            }
          }

          if (this._usingFontIcon()) {
            this._updateFontIconClasses();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // Update font classes because ngOnChanges won't be called if none of the inputs are present,
          // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
          if (this._usingFontIcon()) {
            this._updateFontIconClasses();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          /** @type {?} */
          var cachedElements = this._elementsWithExternalReferences;

          if (cachedElements && this._location && cachedElements.size) {
            /** @type {?} */
            var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
            // the browser doesn't have an API that will let us react on link clicks and
            // we can't depend on the Angular router. The references need to be updated,
            // because while most browsers don't care whether the URL is correct after
            // the first render, Safari will break if the user navigates to a different
            // page and the SVG isn't re-rendered.


            if (newPath !== this._previousPath) {
              this._previousPath = newPath;

              this._prependPathToReferences(newPath);
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._currentIconFetch.unsubscribe();

          if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_usingFontIcon",
        value: function _usingFontIcon() {
          return !this.svgIcon;
        }
        /**
         * @private
         * @param {?} svg
         * @return {?}
         */

      }, {
        key: "_setSvgElement",
        value: function _setSvgElement(svg) {
          this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
          // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
          // Do this before inserting the element into the DOM, in order to avoid a style recalculation.

          /** @type {?} */


          var styleTags =
          /** @type {?} */
          svg.querySelectorAll('style');

          for (var i = 0; i < styleTags.length; i++) {
            styleTags[i].textContent += ' ';
          } // Note: we do this fix here, rather than the icon registry, because the
          // references have to point to the URL at the time that the icon was created.


          if (this._location) {
            /** @type {?} */
            var path = this._location.getPathname();

            this._previousPath = path;

            this._cacheChildrenWithExternalReferences(svg);

            this._prependPathToReferences(path);
          }

          this._elementRef.nativeElement.appendChild(svg);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_clearSvgElement",
        value: function _clearSvgElement() {
          /** @type {?} */
          var layoutElement = this._elementRef.nativeElement;
          /** @type {?} */

          var childCount = layoutElement.childNodes.length;

          if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
          } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
          // we can't use innerHTML, because IE will throw if the element has a data binding.


          while (childCount--) {
            /** @type {?} */
            var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
              layoutElement.removeChild(child);
            }
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateFontIconClasses",
        value: function _updateFontIconClasses() {
          if (!this._usingFontIcon()) {
            return;
          }
          /** @type {?} */


          var elem = this._elementRef.nativeElement;
          /** @type {?} */

          var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

          if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
              elem.classList.remove(this._previousFontSetClass);
            }

            if (fontSetClass) {
              elem.classList.add(fontSetClass);
            }

            this._previousFontSetClass = fontSetClass;
          }

          if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
              elem.classList.remove(this._previousFontIconClass);
            }

            if (this.fontIcon) {
              elem.classList.add(this.fontIcon);
            }

            this._previousFontIconClass = this.fontIcon;
          }
        }
        /**
         * Cleans up a value to be used as a fontIcon or fontSet.
         * Since the value ends up being assigned as a CSS class, we
         * have to trim the value and omit space-separated values.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_cleanupFontValue",
        value: function _cleanupFontValue(value) {
          return typeof value === 'string' ? value.trim().split(' ')[0] : value;
        }
        /**
         * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
         * reference. This is required because WebKit browsers require references to be prefixed with
         * the current path, if the page has a `base` tag.
         * @private
         * @param {?} path
         * @return {?}
         */

      }, {
        key: "_prependPathToReferences",
        value: function _prependPathToReferences(path) {
          /** @type {?} */
          var elements = this._elementsWithExternalReferences;

          if (elements) {
            elements.forEach(
            /**
            * @param {?} attrs
            * @param {?} element
            * @return {?}
            */
            function (attrs, element) {
              attrs.forEach(
              /**
              * @param {?} attr
              * @return {?}
              */
              function (attr) {
                element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
              });
            });
          }
        }
        /**
         * Caches the children of an SVG element that have `url()`
         * references that we need to prefix with the current path.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_cacheChildrenWithExternalReferences",
        value: function _cacheChildrenWithExternalReferences(element) {
          /** @type {?} */
          var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
          /** @type {?} */

          var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

          var _loop = function _loop(i) {
            funcIriAttributes.forEach(
            /**
            * @param {?} attr
            * @return {?}
            */
            function (attr) {
              /** @type {?} */
              var elementWithReference = elementsWithFuncIri[i];
              /** @type {?} */

              var value = elementWithReference.getAttribute(attr);
              /** @type {?} */

              var match = value ? value.match(funcIriPattern) : null;

              if (match) {
                /** @type {?} */
                var attributes = elements.get(elementWithReference);

                if (!attributes) {
                  attributes = [];
                  elements.set(elementWithReference, attributes);
                }

                /** @type {?} */
                attributes.push({
                  name: attr,
                  value: match[1]
                });
              }
            });
          };

          for (var i = 0; i < elementsWithFuncIri.length; i++) {
            _loop(i);
          }
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} inline
         * @return {?}
         */
        ,
        set: function set(inline) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(inline);
        }
        /**
         * Font set that the icon is a part of.
         * @return {?}
         */

      }, {
        key: "fontSet",
        get: function get() {
          return this._fontSet;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fontSet = this._cleanupFontValue(value);
        }
        /**
         * Name of an icon within a font set.
         * @return {?}
         */

      }, {
        key: "fontIcon",
        get: function get() {
          return this._fontIcon;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fontIcon = this._cleanupFontValue(value);
        }
      }]);

      return MatIcon;
    }(_MatIconMixinBase);

    MatIcon.ɵfac = function MatIcon_Factory(t) {
      return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ICON_LOCATION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], 8));
    };

    MatIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatIcon,
      selectors: [["mat-icon"]],
      hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
      hostVars: 4,
      hostBindings: function MatIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
        }
      },
      inputs: {
        color: "color",
        inline: "inline",
        fontSet: "fontSet",
        fontIcon: "fontIcon",
        svgIcon: "svgIcon"
      },
      exportAs: ["matIcon"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatIcon.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: MatIconRegistry
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['aria-hidden']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_ICON_LOCATION]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatIcon.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      svgIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fontSet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fontIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: '<ng-content></ng-content>',
          selector: 'mat-icon',
          exportAs: 'matIcon',
          inputs: ['color'],
          host: {
            'role': 'img',
            'class': 'mat-icon notranslate',
            '[class.mat-icon-inline]': 'inline',
            '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: MatIconRegistry
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['aria-hidden']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_ICON_LOCATION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        svgIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/icon-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatIconModule = function MatIconModule() {
      _classCallCheck(this, MatIconModule);
    };

    MatIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatIconModule
    });
    MatIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatIconModule_Factory(t) {
        return new (t || MatIconModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatIconModule, {
        declarations: function declarations() {
          return [MatIcon];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          declarations: [MatIcon]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/icon/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=icon.js.map

    /***/

  },

  /***/
  "../../node_modules/@angular/material/icon/index.ngfactory.js":
  /*!*********************************************************************************************!*\
    !*** /Volumes/T7/repos/scully-image/node_modules/@angular/material/icon/index.ngfactory.js ***!
    \*********************************************************************************************/

  /*! exports provided: MatIconModuleNgFactory, RenderType_MatIcon, View_MatIcon_0, View_MatIcon_Host_0, MatIconNgFactory */

  /***/
  function node_modulesAngularMaterialIconIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIconModuleNgFactory", function () {
      return MatIconModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatIcon", function () {
      return RenderType_MatIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatIcon_0", function () {
      return View_MatIcon_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatIcon_Host_0", function () {
      return View_MatIcon_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIconNgFactory", function () {
      return MatIconNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var MatIconModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], [])]);
    });

    var styles_MatIcon = [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"];

    var RenderType_MatIcon = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatIcon,
      data: {}
    });

    function View_MatIcon_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
    }

    function View_MatIcon_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, View_MatIcon_0, RenderType_MatIcon)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).inline;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).color !== "warn";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    var MatIconNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-icon", _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], View_MatIcon_Host_0, {
      color: "color",
      inline: "inline",
      svgIcon: "svgIcon",
      fontSet: "fontSet",
      fontIcon: "fontIcon"
    }, {}, ["*"]);
    /***/

  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/home/home.component.ngfactory.js":
  /*!**************************************************!*\
    !*** ./src/app/home/home.component.ngfactory.js ***!
    \**************************************************/

  /*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */

  /***/
  function srcAppHomeHomeComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function () {
      return RenderType_HomeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function () {
      return View_HomeComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function () {
      return View_HomeComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function () {
      return HomeComponentNgFactory;
    });
    /* harmony import */


    var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component.scss.shim.ngstyle */
    "./src/app/home/home.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/icon/index.ngfactory */
    "../../node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
    "../../node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_HomeComponent,
      data: {}
    });

    function View_HomeComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 63, "div", [["class", "page-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "div", [["class", "hero"], ["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Optimize the Things"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        scully-image processes your images at build time generating optimized\n        placeholder images and inlining them into the html. It can also handle\n        resizing and optimizing your images for you.\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Features"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 44, "div", [["class", "features"], ["fxLayout", "row wrap"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 12, "div", [["class", "feature"], ["fxFlex.gt-md", "33.3"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        "fxFlex.gt-md": [0, "fxFlex.gt-md"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "mat-icon", [["aria-hidden", "true"], ["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, "true"], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["collections"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Multiple Placeholder Types"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Choose from a variety of placeholder styles."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 12, "div", [["class", "feature"], ["fxFlex.gt-md", "33.3"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        "fxFlex.gt-md": [0, "fxFlex.gt-md"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "mat-icon", [["aria-hidden", "true"], ["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, "true"], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Highly Configurable"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Change almost every aspect to fit your brand."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 12, "div", [["class", "feature"], ["fxFlex.gt-md", "33.3"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        "fxFlex.gt-md": [0, "fxFlex.gt-md"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 2, "mat-icon", [["aria-hidden", "true"], ["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, "true"], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["check_box"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Easy-to-Use Components"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Spend less time on the boring parts."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 15, "div", [["class", "get-started-now"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 12, "div", [["class", "page-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["What are you waiting for?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 3, "a", [["class", "get-started-now-button mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._haltDisabledEvents($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n        Get Started Now\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 48, "div", [["class", "page-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Placeholder Types"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 42, "div", [["class", "placeholders"], ["fxLayout", "row wrap"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 12, "div", [["class", "placeholder"], ["fxFlex.gt-md", "33.3"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        "fxFlex.gt-md": [0, "fxFlex.gt-md"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 8, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 1, "div", [["class", "blur-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 1, "h3", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Blur Up"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 11, "div", [["class", "placeholder"], ["fxFlex.gt-md", "33.3"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        "fxFlex.gt-md": [0, "fxFlex.gt-md"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](108, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 1, "h3", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Traced SVG"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 11, "div", [["class", "placeholder"], ["fxFlex.gt-md", "33.3"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        "fxFlex.gt-md": [0, "fxFlex.gt-md"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, null, 1, "h3", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Primitives"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = "row wrap";

        _ck(_v, 19, 0, currVal_1);

        var currVal_2 = "33.3";

        _ck(_v, 22, 0, currVal_2);

        _ck(_v, 25, 0);

        var currVal_5 = "33.3";

        _ck(_v, 36, 0, currVal_5);

        _ck(_v, 39, 0);

        var currVal_8 = "33.3";

        _ck(_v, 50, 0, currVal_8);

        _ck(_v, 53, 0);

        var currVal_17 = "/docs/getting-started";

        _ck(_v, 75, 0, currVal_17);

        var currVal_18 = "primary";

        _ck(_v, 76, 0, currVal_18);

        var currVal_19 = "row wrap";

        _ck(_v, 88, 0, currVal_19);

        var currVal_20 = "33.3";

        _ck(_v, 91, 0, currVal_20);

        var currVal_23 = "/docs/components-blur-up";

        _ck(_v, 94, 0, currVal_23);

        var currVal_25 = "33.3";

        _ck(_v, 105, 0, currVal_25);

        var currVal_28 = "/docs/components-traced";

        _ck(_v, 108, 0, currVal_28);

        var currVal_30 = "33.3";

        _ck(_v, 118, 0, currVal_30);

        var currVal_33 = "/docs/components- primitives";

        _ck(_v, 121, 0, currVal_33);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).inline;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).color !== "warn";

        _ck(_v, 24, 0, currVal_3, currVal_4);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).inline;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).color !== "warn";

        _ck(_v, 38, 0, currVal_6, currVal_7);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).inline;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).color !== "warn";

        _ck(_v, 52, 0, currVal_9, currVal_10);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).target;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).href;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).tabIndex || 0;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).disabled || null;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).disabled.toString();

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._animationMode === "NoopAnimations";

        _ck(_v, 74, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94).target;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94).href;

        _ck(_v, 93, 0, currVal_21, currVal_22);

        var currVal_24 = _co.scullyImageLowRes;

        _ck(_v, 97, 0, currVal_24);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).target;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).href;

        _ck(_v, 107, 0, currVal_26, currVal_27);

        var currVal_29 = _co.scullyImageTraced;

        _ck(_v, 110, 0, currVal_29);

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).target;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).href;

        _ck(_v, 120, 0, currVal_31, currVal_32);

        var currVal_34 = _co.scullyImagePrimitives;

        _ck(_v, 123, 0, currVal_34);
      });
    }

    function View_HomeComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/home/home.component.scss.shim.ngstyle.js":
  /*!**********************************************************!*\
    !*** ./src/app/home/home.component.scss.shim.ngstyle.js ***!
    \**********************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppHomeHomeComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%]   .hero[_ngcontent-%COMP%] {\n  min-height: 400px;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #3aa860;\n  font-size: 72px;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 80px 0 50px;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #3aa860;\n  font-weight: 700;\n}\n[_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #3aa860;\n  font-size: 150px;\n  height: 150px;\n  width: 150px;\n  margin: 0 auto;\n  display: block;\n  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);\n}\n[_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 220px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .placeholders[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .placeholders[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .placeholders[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 100%;\n  height: 200px;\n  display: block;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .placeholders[_ngcontent-%COMP%]   .blur-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: auto;\n  max-width: 100%;\n  height: 200px;\n}\n[_nghost-%COMP%]   .placeholders[_ngcontent-%COMP%]   .blur-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: blur(20px);\n}\n[_nghost-%COMP%]   .placeholders[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .placeholders[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: block;\n}\n[_nghost-%COMP%]   .get-started-now[_ngcontent-%COMP%] {\n  background: rgba(58, 168, 96, 0.05);\n  text-align: center;\n  margin-left: -10px;\n  padding: 40px 0;\n}\n[_nghost-%COMP%]   .get-started-now[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .get-started-now[_ngcontent-%COMP%]   .get-started-now-button[_ngcontent-%COMP%] {\n  color: #fafbfc;\n  background: #3aa860;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Q3L3JlcG9zL3NjdWxseS1pbWFnZS9wcm9qZWN0cy9kb2N1bWVudGF0aW9uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZG9jdW1lbnRhdGlvbi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Wb2x1bWVzL1Q3L3JlcG9zL3NjdWxseS1pbWFnZS9wcm9qZWN0cy9kb2N1bWVudGF0aW9uL3NyYy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGSjtBRElJO0VBQ0UsY0VUUztFRlVULGVBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FES0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNITjtBRE9FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0xKO0FEUUU7RUFDRSxjRTFCVztFRjJCWCxnQkFBQTtBQ05KO0FEVUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ1JOO0FEVU07RUFDRSxrQkFBQTtBQ1JSO0FEV007RUFDRSxjRXhDTztFRnlDUCxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtBQ1RSO0FEWU07RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ1ZSO0FEZUU7RUFDRSxrQkFBQTtBQ2JKO0FEZUk7RUFDRSxjQUFBO0FDYk47QURnQkk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ2ROO0FEaUJJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNmTjtBRGlCTTtFQUNFLGtCQUFBO0FDZlI7QURtQkk7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNqQk47QURvQkk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNsQk47QURzQkU7RUFDRSxtQ0V0RmdCO0VGdUZoQixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3BCSjtBRHNCSTtFQUNFLG1CQUFBO0FDcEJOO0FEdUJJO0VBQ0UsY0VuR1k7RUZvR1osbUJFekdTO0VGMEdULGNBQUE7QUNyQk4iLCJmaWxlIjoicHJvamVjdHMvZG9jdW1lbnRhdGlvbi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuaGVybyB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAkc2N1bGx5LWdyZWVuO1xyXG4gICAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogODBweCAwIDUwcHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogJHNjdWxseS1ncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZXMge1xyXG4gICAgLmZlYXR1cmUge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICRzY3VsbHktZ3JlZW47XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wbGFjZWhvbGRlcnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuYmx1ci13cmFwcGVyIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5nZXQtc3RhcnRlZC1ub3cge1xyXG4gICAgYmFja2dyb3VuZDogJHNjdWxseS1ncmVlbi13YXNoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgcGFkZGluZzogNDBweCAwO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2V0LXN0YXJ0ZWQtbm93LWJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2N1bGx5LW9mZndoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkc2N1bGx5LWdyZWVuO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLmhlcm8ge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuaGVybyBoMSB7XG4gIGNvbG9yOiAjM2FhODYwO1xuICBmb250LXNpemU6IDcycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuaGVybyAuY29udGVudCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogODBweCAwIDUwcHg7XG59XG46aG9zdCBoMyB7XG4gIGNvbG9yOiAjM2FhODYwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOmhvc3QgLmZlYXR1cmVzIC5mZWF0dXJlIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46aG9zdCAuZmVhdHVyZXMgLmZlYXR1cmUgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuZmVhdHVyZXMgLmZlYXR1cmUgLm1hdC1pY29uIHtcbiAgY29sb3I6ICMzYWE4NjA7XG4gIGZvbnQtc2l6ZTogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuOmhvc3QgLmZlYXR1cmVzIC5mZWF0dXJlIHAge1xuICB3aWR0aDogMjIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgLnBsYWNlaG9sZGVycyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5wbGFjZWhvbGRlcnMgLnBsYWNlaG9sZGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46aG9zdCAucGxhY2Vob2xkZXJzIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjpob3N0IC5wbGFjZWhvbGRlcnMgLmJsdXItd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG46aG9zdCAucGxhY2Vob2xkZXJzIC5ibHVyLXdyYXBwZXIgaW1nIHtcbiAgZmlsdGVyOiBibHVyKDIwcHgpO1xufVxuOmhvc3QgLnBsYWNlaG9sZGVycyBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0IC5wbGFjZWhvbGRlcnMgLm5hbWUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC5nZXQtc3RhcnRlZC1ub3cge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDU4LCAxNjgsIDk2LCAwLjA1KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cbjpob3N0IC5nZXQtc3RhcnRlZC1ub3cgaDIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOmhvc3QgLmdldC1zdGFydGVkLW5vdyAuZ2V0LXN0YXJ0ZWQtbm93LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmFmYmZjO1xuICBiYWNrZ3JvdW5kOiAjM2FhODYwO1xuICBkaXNwbGF5OiBibG9jaztcbn0iLCIkc2N1bGx5LWdyZWVuOiAjM2FhODYwO1xuJHNjdWxseS1icmlnaHRncmVlbjogIzZjY2U3YTtcbiRzY3VsbHktbmlnaHQ6ICMyMzJkMmE7XG4kc2N1bGx5LWRhcmtncmF5OiAjNGM2MTViO1xuJHNjdWxseS1saWdodGdyYXk6ICNkM2QzZDM7XG4kc2N1bGx5LW9mZndoaXRlOiAjZmFmYmZjO1xuJHNjdWxseS13aGl0ZTogI2ZmZjtcbiRzY3VsbHktYmxhY2s6ICMwMDA7XG4kc2N1bGx5LWdyZWVuLXdhc2g6IHJnYmEoNTgsIDE2OCwgOTYsIDAuMDUpO1xuXG4kYnJlYWtwb2ludC1tb2JpbGU6IDQ4MHB4O1xuJGJyZWFrcG9pbnQtdGFibGV0OiA3MjBweDtcbiRicmVha3BvaW50LW1lZGl1bTogOTYwcHg7XG4kYnJlYWtwb2ludC1sYXJnZTogMTIwMHB4O1xuJGJyZWFrcG9pbnQteGw6IDEzNjBweDtcbiRicmVha3BvaW50LXh4bDogMTYwMHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNTBweDtcbiRmb290ZXItaGVpZ2h0OiAxMjBweDtcblxuJGZ1bGwtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAxMHB4KTtcbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, route, sanitizer) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.route = route;
        this.sanitizer = sanitizer;
        this.scullyImageLowRes = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAgCAMAAABThhoPAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURQEBAUEbDzAQC2s8JQ0HB5iapPns8vLj6PPl6u/g5RwLCVUgD4hNJ1swHu6qk/O2pkcmF9GLbvzQyZhZN7NoQZCSmuWcf+TW28d5TXtGKB4dHd7JypSLhsu8vvnEtf/4+n6Chc+qnEVBQH1YQoVoWjEvLGpoaHIxFr6bjrKoqq56Y6RQKl5TUAvh25IAAAJHSURBVDjLfZSJsqIwEEWzyUsIIQSQfRMQVOb/v286PGUUqemqYCUcbm6606Kf/4QQAsZrhp6L22PDAOIO/+H8BaO3d++cBXl5r9OyhAn/RHd7A2gibxjUcOPin6p4e/wuCyc1yywxDjAJLo6wcawqnDL2MGMMMZe5QSXAAkefDl+7l3Es0TMYI+O9rku0O/76w9NHtjCEsJIBdoF1x9PpdGzglmUKoVz7xsTUBWW1R9dDga/ykcUYET/UfpJ5AaC4OlQV/OZFC0ZS/6IUrJDxEOVlriScX/qNRSMPHLjDhor3RF0wdqkk8yXU2s88j0AW6Lcq2HVqRRiWklLjJxFWOQYDQXVgQDg3TAiBQrm5NrK/UjiXq56oeBvWgARUymiIQkNNZFVdeqxaU4oZnv3MhCaPTQReyfDhVWzHkgEpVARkmHh5bDMQrHn9uFFrpCOlVMVJoxuT52teoVrnoxI4l0W5zDR6VfWgxOjP6XzeFfYpG2GCHk3jm3jOI0gA6/bo6wNeKuIGWifxInMPLm1/PltUfLWhsEmY50iDbOQFzL12XfeuKl79DI2apve6pAlYiD01VlNx7afuq7DccdLTFU1t+9BNksWLqu6T7YUCfTVV10Mei9Rpx0fY+Il53E9VsXbOjjwzq4Cqlrc3CRfLz0JRp9MXCqTlYKStU9cq9+HCVl3a3veo4OnvTqjn3RUVo4yb8MJQMdXFHrWiaxT2FevzRYeT3YaxL/QP2prffjDMSXjdlhD81UFAR8FwevQRvcwubJv9BXt8OG8H1C5zAAAAAElFTkSuQmCC');
        this.scullyImagePrimitives = this.sanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9Ijc2OCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0iI2FlOWE5OCIgZD0iTTAgMGgxMDI0djc2OEgweiIvPjxwYXRoIGQ9Ik05MDEgMzFsMTM5IDc1My0zMzYtMjk3ek00MzYgNTc4bDQ2MyAxOTMtNjEzLTR6Ii8+PHBhdGggZmlsbD0iIzI5MDAwMCIgZD0iTTk4MiAxNTlMNDQ4IDQ5NSA2MjMgNjF6Ii8+PHBhdGggZD0iTTEwNDAgNzU5bC0yNTYgMjEgMTEtMTQ2eiIvPjxwYXRoIGZpbGw9IiNmZmYyY2IiIGQ9Ik04NjEgMjk1bC0yMTAgMjIgMjYtMTQ3eiIvPjxwYXRoIGZpbGw9IiNmZmY5ZGEiIGQ9Ik04MjYgNjA2bC02NyAxNzgtNDEtODF6Ii8+PHBhdGggZD0iTTQzNSA3ODRMMzIxIDY1OWwyNzYtMTA3eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01OTcgNTMwbDU1IDEyMy0xMzcgNDZ6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTU5MiA1NDRMLTE1IDc4MiAxNC0xNXptMjAyIDEwN2wxMzAgMjgtNDUtMTM5eiIvPjxwYXRoIGZpbGw9IiMxNzAwMDAiIGQ9Ik02MjcgNTQ2bDMyIDExOSA3MyA1NXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNzQ1LTE1TC0xNS0xbDI2IDc4M3oiLz48cGF0aCBmaWxsPSIjZmZlNWNhIiBkPSJNNzYwIDQ4NWwtMTQ2IDE1IDExNi0xNzJ6Ii8+PHBhdGggZD0iTTc2MyA3NzRsMjc3LTctOC0yMjR6Ii8+PHBhdGggZmlsbD0iIzE4MDAwMCIgZD0iTTU3OCA2MDNMNzE5IDUzIDQ2MyAzMDl6Ii8+PHBhdGggZmlsbD0iIzIwMCIgZD0iTTUyNyAzNjBsMTQxIDIxMC0xNDgtNTN6Ii8+PHBhdGggZD0iTTc5NCAyNjVsMTg4LTkxLTg2IDQ1NHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMgNzY3bDI4OSAxMiAyMDgtNTUzem01OTItMjM4bDQ4IDEzMy0xMzAgMTN6Ii8+PHBhdGggZmlsbD0iI2ZmZDBiYSIgZD0iTTgxNyAxOTZMNjQ3IDMyMGwxOS0xMjd6Ii8+PHBhdGggZmlsbD0iI2MzNTMxNiIgZD0iTTc5NyA2ODdsLTk2LTE4OSAxNjQtMjM2eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMDQwLTFMNjg2LTE1bDMxOSAyMzJ6Ii8+PHBhdGggZD0iTTcwNSA3NzFsLTcyLTExMi0zMjggMTA5ek04MjkgNThsMTY1IDI5OS0zNTUtMjM5eiIvPjxwYXRoIGZpbGw9IiNjZjVhMGEiIGQ9Ik00ODggMjMwbDg3IDYzIDQ3LTIxMHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOTI4IDY5OGwtMzEtOTctMzggNjV6Ii8+PHBhdGggZD0iTTU2NiA1NjRMMzEwIDcwNmwxODIgNzh6Ii8+PHBhdGggZmlsbD0iI2NmN2Q1MiIgZD0iTTY1NCAyODZsMTk2IDE2NiA0LTcxeiIvPjxwYXRoIGZpbGw9IiM5Y2E0YTYiIGQ9Ik04MzAgNjQ1bDMtODIgMTc5LTEwNnoiLz48cGF0aCBmaWxsPSIjZmZmOWZmIiBkPSJNMTA0MC02djE1MEw0OTktMnoiLz48cGF0aCBmaWxsPSIjNDAwNzAwIiBkPSJNNjA5IDE5OGw5OCAxODEtMTY0LTEyeiIvPjxwYXRoIGZpbGw9IiNmZmY2ZmYiIGQ9Ik0tMTUgMmwzNjggMzAzTDc2NS0xNXoiLz48cGF0aCBkPSJNMzA1IDc4NGw3NS0xNTggMzgxIDE1OHoiLz48cGF0aCBmaWxsPSIjZmZmZmZkIiBkPSJNNjQ1IDY1OGwzMyA1MS0xNC00OHoiLz48cGF0aCBmaWxsPSIjMGIwMDAwIiBkPSJNODE0IDYwOGwxMTMtMjA0LTE2NCAxNjd6Ii8+PHBhdGggZmlsbD0iI2ZmZmFmMCIgZD0iTTcwMiA3ODRsLTE0LTQ3IDE0IDE2eiIvPjxwYXRoIGZpbGw9IiNmZmY0ZmUiIGQ9Ik01ODMgNTU4TDQxMCA0MTBsLTY2IDIyNXoiLz48cGF0aCBmaWxsPSIjZTA3YTNiIiBkPSJNNjk5IDE3OWwxNjcgMTkwLTQyLTE3OHoiLz48cGF0aCBkPSJNOTU5IDc4NGw4MS0xOTEtMTU1LTQ5eiIvPjxwYXRoIGZpbGw9IiM4ODk4YTUiIGQ9Ik0xMDE5IDM4Mkw5MTkgMTUwbDEyMSAxMXoiLz48cGF0aCBmaWxsPSIjZmZmNmYyIiBkPSJNNjQ1IDYxMGwtMTAzLTYzIDg3IDN6Ii8+PHBhdGggZmlsbD0iI2ZmZjRmZiIgZD0iTTM1OCA1ODlsLTQ5IDE5NUgtM3oiLz48cGF0aCBkPSJNODU4IDU1N2wxMjItMjAzLTEyMS0xMjB6bS00MSA5NGwyMjMgOTYtMjc4IDM3eiIvPjxwYXRoIGZpbGw9IiM1ZDE5MDAiIGQ9Ik01MzIgMTg3bC02MSAxMDQgNDggMjEzeiIvPjxwYXRoIGZpbGw9IiM4ZTQwMDYiIGQ9Ik01NDAgMTYwbDE0MC05NCAxNzEtMnoiLz48cGF0aCBmaWxsPSIjM2YwYTAwIiBkPSJNNjI4IDQzNmwtNjYgMTEyLTY3LTg0eiIvPjxwYXRoIGZpbGw9IiM2ZTM2MTciIGQ9Ik00ODQgNDI0bDY2LTI1LTc5LTUzeiIvPjxwYXRoIGQ9Ik04MDMgNzgxbDU5LTExMS04MSAzNnoiLz48cGF0aCBmaWxsPSIjYTY1NDI5IiBkPSJNNjIwIDMxN2wxMyA5OSAyNi0xOTF6Ii8+PHBhdGggZmlsbD0iI2FlMmIwMCIgZD0iTTcwMSAzMjlsLTg2IDEyNSA3OS02M3oiLz48cGF0aCBmaWxsPSIjZmZjM2IzIiBkPSJNODMwIDQxNGwtNTEtNzMtNCAzNHoiLz48cGF0aCBmaWxsPSIjZjZlM2U5IiBkPSJNOTUyLTE1SDQ3Mkw2MTUgOTR6Ii8+PHBhdGggZmlsbD0iI2ZmYjk5NCIgZD0iTTc1NCA3ODRMNTk0IDQzMWwyMDYgMTU0eiIvPjxwYXRoIGQ9Ik01ODYgNTYybC01MyA3OS0yMS02NHptMjgxLTQ1Nkw1ODIgMjM3bDUxLTEyMXoiLz48cGF0aCBmaWxsPSIjYjAxMjBlIiBkPSJNNjg0IDUwNWwyNi0xOSA4MCAzNXoiLz48cGF0aCBmaWxsPSIjZmJlNmVmIiBkPSJNNDgzIDEzMmwtMTAgMzQyLTMzNy02MXoiLz48cGF0aCBkPSJNMzI3IDY5NmwxOTgtMTExLTEzNSAzMnoiLz48cGF0aCBmaWxsPSIjMDQwMDAwIiBkPSJNODMzIDc0bDEwNSAxMzktMzEzLTU2eiIvPjwvc3ZnPg==');
        this.scullyImageTraced = this.sanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9Ijc2OCIgdmlld0JveD0iMCAwIDEwMjQgNzY4IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBkPSJNNzEzIDU3Yy0xIDEgMCAxIDIgMWwzLTEtMi0xLTMgMW0tNSAzbC0xIDJjMCAzLTIgMy0xMiAzLTggMC05IDAtMTMgM2wtNSA1LTcgMy03IDMtNSAzLTUgMi0yIDFhMTE4IDExOCAwIDAwLTM2IDE4bC0xMiA3Yy00IDItNiAzLTUgNGwtNSA1LTYgNS0xIDFjLTItMS0yIDAtMiAybC0xIDJjLTItMi04IDQtMjcgMjNhOTIgOTIgMCAwMC0xNyAyMSA4OSA4OSAwIDAwLTkgMTNjLTIgMS03IDEwLTcgMTJsLTIgMy0xMCAyMWMtNCAxMy0xNCAyOS0yMCAzNWwtMSAyIDItMSAyLTEgNC0zYzMtNSA2LTYgNC0xLTMgNC01IDYtNyA2LTEgMS01IDktNSAxMyAwIDMtMiA1LTMgNWwtMS0yLTEtM2MtMSAwLTItMS0yLTMgMC0xIDAtMi0xLTEtMiAwLTIgMi0yIDZsLTEgNXY2YzAgNi0xIDExLTQgMTF2MTBsMSA0YzIgMyAzIDUgMyAxNnYxNmwxIDMtMi0xLTQtNWMtMi0zLTItMy0yLTF2MTFjMSAyIDIgOCAxIDEwLTEgNCAwIDEyIDMgMTYgMiAyIDIgNCAyIDZ2MWMyLTEgNCA0IDMgNmwtNyAxN3YzbDQtM2M0LTQgOC01IDgtMSAwIDEtMSAyLTMgMi0zIDAtNyAzLTggNXMtMSAzLTQgMmwtMyAxIDIgMmMyIDAgMyAxIDMgNGwzIDRjMiAwIDMgMiAzIDVsNCAxaDN2NWMwIDQgMCA1IDIgNmwyIDJjMCAxIDEgMiAzIDJsMiAxLTIgMWMtMyAwLTQgMC00IDJsMSAxIDEgMiAyIDEgMyAzYzEgMyAzIDQgMyAxIDAtMiAyIDAgMiA0djRsMSAzIDIgMiAxLTRjMS00IDEtNCAxLTEgMCA1IDMgMTggNCAxOGwzIDUgNyAxMCA1IDZjLTEgMiAwIDIgNSA4bDMgMiA1IDdjNiA4IDE0IDE3IDE5IDIwbDE1IDcgOCAxIDEwIDFoNmMxLTIgMjItMiAyMiAwIDAgMSAxIDIgNCAyIDcgMiA5IDUgMTIgMTZsMyAxMSA0IDIxYTI1NCAyNTQgMCAwMDMxIDkwbDIgNiA1IDEyYTUyMCA1MjAgMCAwMDIwIDQ3bDMgMTAgMSAzaDIxYzE5IDAgMjAgMCAyMC0yYTMwMyAzMDMgMCAwMS02LTE3bC0yLTctMy04LTYtMThjLTQtMTItNS0xNy0yLTE5di04bC0xLTNjLTMtNi0xMi0xOC0xNS0xOHMtMjktMzEtMzktNDhjLTEwLTE2LTI1LTQ2LTI3LTU0IDAtMyAyLTQgNC0ybDMgM2MzIDEgMTEgMCAxNy00aDJsMS0xLTItMy04LThjLTIyLTIwLTM1LTM3LTQ0LTU0LTgtMTUtOS0yMS02LTI2bDUtMTFjMi03IDItOCAxMC0xNWwxMy0xMCA5LTYgNS0zIDUtMyA1LTRjMiAwIDgtNSA4LTdsNS00IDgtOCA2LTdjMSAwIDUtNiA1LTEwbDMtNiA0LTcgMy00LTMtMmMtMi0xLTMtNC0xLTRsMS0zIDEtNmMyLTIgMi00IDEtNWwtMS00LTItNGMtMi0zLTItMy0xLTV2LTFsLTEtMmgyYzMgMCAzIDAgMi0yLTItNy03LTEwLTIzLTEzLTE2LTItMTktNy0xOS0yNCAwLTgtMi0yNi00LTMzLTItOSAwLTI5IDQtMzhhODggODggMCAwMTIwLTI3bDUtMiAyLTJjMC0xIDctNCA4LTNoNGMwIDIgMCAyIDEgMSAyLTIgNS0zIDUtMWwtMSAxLTIgMWMwIDIgMyAxIDUtMWg2bDYgMWg2bC00IDJjLTUgMS03IDMtMyAyIDEtMSAyIDAgMyAxbDUgMWEyMjcgMjI3IDAgMDEzOCAybDE5LTEtMSAxYy0yIDEtMSA0IDEgNGwxLTF2LTJjMS0xIDEtMSAxIDFsMSAzdjRjLTEgMyAwIDYgMSA2djFjLTIgMS0zIDQtMSA0IDEgMCAwIDE0LTIgMTctMSAzLTEgMyAxIDVsMSA1djE0bDEgMSAxIDRhMTkwNTUgMTkwNTUgMCAwMC0xIDE3Yy0xIDMtMSA1IDEgNnYzYzAgMiAwIDIgMiAyczQgMiA0IDVsLTEgNC0yIDJjMCAyIDAgMi0yIDJoLTJjMCAzLTcgOC0xMiA5bC02IDJoLTFjLTMgMC0xNyA3LTE3IDEwbC0zIDQtMyAzLTEgNGMtMiAzLTIgNC0yIDIwYTIyOTIgMjI5MiAwIDAxNCA2MmwxIDE2Yy0xIDExLTEgMTEtNyAxNy02IDctNiA4IDQgMTJsOSAzdjZjLTEgMTAtMSAxMC0zIDEwbC0yIDEtMyAxLTIgMWMwIDEtNiAzLTggMi0zLTEtMy0xLTQgMWgtMnYtMmwtMS0xLTIgMWgtMmwtNS0yYy0yIDAtMyAwLTIgMWwxIDItMi0xLTMgMS0zIDFoNWMwIDEtMiAyLTYgMWwtNCAxLTUgMy01IDMtMiAxYy0xIDAtNiAzLTYgNWwtMSAxLTEgMiAyIDEgNCAyaDJjMC0xIDUtMSAxMCAxbDYgMiA0IDEgNSAxYzMgMCA1IDIgNCA0bDEgMSAxLTJjMC0zIDItMyAzIDBsMSAxYzAtMiAyLTMgMyAwbDEtMWMxLTMgMy0xIDMgMi0xIDItOCAzLTEzIDJsLTQtMS00IDFjLTMgMS0zIDEtMiAzdjJsLTEtMS0xLTEtMi0xaC0xbC0xIDFjMyAzIDkgNiAxMCA2bDEgMWMwIDIgOSA0IDI2IDdhNjAwMyA2MDAzIDAgMDExOSA1YzAgMiAxIDMgMiAzIDMgMSAyIDUtMSAxMmwtMSA0LTEgMy0yIDJ2LTJjMC0yIDAtMi0yIDEtMiA0LTIgNCAwIDRoMWwtMSAxLTIgMS0xMSA5LTMgMS01IDEtMiAxLTQgMi03IDItOSAxLTUtMSAzIDIgMjMgMmMxOCAwIDI1IDAgMjIgMnY0YzEgMSA1IDAgOC0yIDctNCAxMC00IDE4LTFzMTAgNCAxMCA3bDIgNGMyIDIgMiAxMCAwIDEybC0xIDUtMiAzdjNsLTEgMS0zIDdjLTIgNC0zIDUtMiA2djNsLTEgMy0yIDNjLTEgMi0yIDMtMSA1bC0xIDMtMiAyYzAgMSA0IDAgNy0ybDMtMSA0LTMgNC0yYzIgMSA5LTE4IDEyLTM0IDMtMTQgNi0yMCA3LTE2bDIgMiAxIDFoNmMzLTEgMy0yIDMtNnYtN2wxLTNjMi0xIDItMiAyLThsMi00IDItMTBhNDA0IDQwNCAwIDAxMi0xMGMwLTIgNy00IDEwLTRsNSA1IDMgM2MzIDAgMyAxIDEgMmwtMSA0YzEgMiAxMS03IDExLTEwbDItMWgxYzAtMiA1LTUgNi00bDItMWMxLTIgNiAxIDcgNWwzIDV2NWwtMS0yYy0xLTItMy0zLTMtMSAwIDMgMSA1IDIgNGwxIDJjLTIgMy0zIDgtMyAxNWwtMSA5LTEgMiAxIDJjMy0xIDUgMiA1IDggMSA1IDIgNiA0IDggMyAyIDUgMyA1IDFsMS0xIDEgMSAxIDFjMSAxIDIgMCAyLTEgMC01IDggMTQgMTAgMjVsNSAxOGMxMCAzNCAxMSAzNSA3IDM3LTMgMi01IDEtMTMtNGE5MyA5MyAwIDAwLTIzLTEwbC0xMy02YTQwOCA0MDggMCAwMS00Ny0yMGMtNC0yLTQtMi02LTFsLTUgM2MtNSAyLTEyIDgtMTMgMTFsLTMgNmMtMiAyLTMgNC0yIDVsLTEgMi0zIDgtMyA2LTEgMy0yIDVjLTMgNi0xNyA1OC0xNyA2NHYyaDI1M1Y2NjdhMjg0NiAyODQ2IDAgMDAtMy0xMDlsLTItM2MtMSAzLTQgNS02IDQtMy0zLTYtNi03LTktMS0yLTItMi01LTJsLTQtMS0yLTJjLTItMS0yLTEgMC0xIDMgMCAzLTMgMC0zLTItMS0zIDAtMyAxbC0xIDJ2LTJjMC0xLTEtMi01LTJsLTYtMmgtMmMtMSAyLTExIDItMTEgMGwyLTJjMS0xIDEtMS0xLTJzLTYgMC02IDFsMiAxYzEgMCAyIDEgMSAyaC02bC0zLTEgMi0xYzItMSAxLTEtNC0xLTYgMC03IDAtOC0yLTItMS0yLTEtMiAxbC0yIDItMi0xYzEtMi0zLTMtOC0zbC00LTJjMC0zLTMtMS0zIDJsLTEgMi0xLTEtMS0xLTIgMWMwIDItMiAxLTQtMmwtNS0yYy0zIDAtNSAwLTQtMWwxLTEgMi0xdi0yYy0yIDAtMS0yIDQtOGw2LTkgMS0zIDEtMiAzLTYgNS03YzEtNyAyLTkgMy04IDEgMCAyIDAgMS0ybDEtMiAxLTQgMi03IDMtMTFjMS0xMCAyLTEzIDQtMTZhMTcxIDE3MSAwIDAwOS0yM2wzLTMgMy01IDMtNSAxLTMgMS0zIDItMyAzLTcgNi0xNCAxLTkgMS0xMyAxLTljMyAxIDMgMjEgMSAyOWwtMSA2YzEgMCAzLTMgMy02bDEtM2MyLTIgMy0xMCAyLTE4YTE2NyAxNjcgMCAwMC0xMi00N2wtMi03Yy0yLTMtNC0xMi01LTIxbC0xLTExLTItNi0xLTQtMS0zLTMtN2MtMy04LTQtMTMtMy0xM2wxLTItMS0yLTEtNC0yLTVjLTEtMS0xLTEtMSAxIDIgMyAyIDUgMSA1cy0yLTMtMi03bC0xLTZ2LTVoLTFjLTIgMi00LTItNC04bC0yLTctMy04LTMtOHYtMmwtMS0yLTItNC01LTZjLTItMS0zLTQtMS00IDEtMSAwLTItMi00LTMtMy01LTQtOC00bC01LTFoLTNjLTIgMC0zLTEtNS0zcy0yLTIgMC0yaDJjMC0xLTMtMi00LTFsLTUtMy0xMC05LTktOS0xNS0xMmMtMTItOS0xNi0xMy0xNC0xNCAxLTEgMS0xLTEtMmwtNC01YTIzNCAyMzQgMCAwMC0xOC0yMWMtOS00LTE3LTQtMjMgMC0yIDEtNCAyLTUgMWwxLTFjMiAwIDEtMi0xLTJsLTUtMmMtNS0zLTEyLTEtMjEgNS01IDMtNiA0LTcgM2gtMmMtMiAyLTQgMS00LTFoLTFjLTEgMi0yIDItMyAyaC0ybC0xIDNjLTIgMS0yIDEtMi0ybC0xLTRjLTItMS0yLTEtMSAzbDIgNXYxYy0yIDEtNi01LTYtOXMtMTAtMTEtMTItOGgtN2wtNC0xaC0xM20xMCAyaC0zYy0yIDAtNCAxLTQgMyAyIDIgMTAgMCAxMC0yLTEtMi0zLTItMy0xbTY2IDVjLTUgNSAxIDkgOCA2IDUtMiA1LTQgMC03LTQtMy01LTItOCAxbS05NyAxYy0yIDAtMyAyIDAgMmgzYzIgMSA1LTEgNC0xLTEtMS01LTItNy0xbTEyNCAxYy05IDItNiA0IDYgNCA2IDAgNyAwIDkgMiA0IDMgNSAyIDItMWwtMTEtNi02IDFtLTczIDJsMiA0aDFsLTEtMXYtMWMzIDAgMi0xIDAtMy0yLTEtMi0xLTIgMW0tMTEgM2w0IDV2LTNjLTItMy00LTQtNC0ybTg5IDFjLTQgMS00IDIgMCAzbDMgMWgtOGwtNy0xYy0xIDEgNiA1IDggNWw1IDIgNyAzIDcgMmM0IDEgNC0yIDAtNC00LTEtNC0yLTQtNiAwLTMtNi02LTExLTVtNDAgMzRjMCAyIDEzIDE0IDE2IDE1IDYgMiA2IDEtMS01LTgtOC0xNS0xMi0xNS0xMG0tMjUzIDEzbC00IDQtMyAzLTIgMiAxNC0xMS01IDJtMTIgMWwtMyAxLTEgMWMtMiAyIDMgMiA2IDAgNC00IDItNS0yLTJtLTEyIDlsLTQgNGMtMSAwLTMgMS0zIDNsLTMgMmMtMyAwLTYgMy01IDVsLTEgMi0xIDJjMCAyLTEgMy0zIDJoLTFjMCAyLTIgNC04IDlsLTIgMS00IDUgNC0yYzQtMyA1LTIgMSAyLTIgMi00IDUtMyA2bC0yIDEtNSA0Yy00IDQtNSA0LTEtMSAzLTUgNC04IDEtNGwtNCAyYzAtMiA1LTYgNi01aDJ2LTNjLTEtMi0xLTMgMS01IDMtMyA0LTQgNC0yaDF2LTdsMSAyYzAgMyAyIDMgNCAwczItMyAxLTR2LTRsNS03IDUtNy0xMiAxMGE1NTc0IDU1NzQgMCAwMS0xOSAyMyAzNjEgMzYxIDAgMDAtMjkgNDNsLTEgMy0xIDItMiA0Yy01IDQtNiA2LTQgN2wtMSAyYy0xIDEtMiAyLTEgM2gybDItMiAxLTEgMy0zIDItMyAyLTUgMi02IDEtMiAxIDIgMSAydi0yYzMtNyAzLTggNS05aDN2LTFsMS0xaDFjMS0xIDEgMCAxIDFsLTIgNS0yIDMgNC0yYzMtNSA0LTMgMSAxbC0yIDQtMiA1LTMgNC0xIDEtMSAxaDNjMy0xIDMtMSAwIDNsLTIgMmgtMmMtMiAxLTMgMyAwIDMgMSAwIDEgMy0xIDZsLTEgM3YtNGMxLTQgMC00LTEgMHY4Yy0yIDUtNCAxMy0yIDEzbDItNGMwLTQgMS00IDMtNCAxIDAgMi0xIDItNHM0LTggNi04bDEtMSAyLTMgMS0zYzAtMiAwLTIgMi0xIDEgMiAxIDIgMSAwczQtMTYgNi0xOWwxLTQgMi02IDItNiA1LTEwYTc0IDc0IDAgMDA2LTE0bDE0LTE5IDctNyAxLTFjMC0xIDEtMyAzLTNsNC00IDMtM3YtMWMwLTMtMS0yLTQgMW0tMSAxOXY3bDQtNmMwLTItMy0zLTQtMW0zMTUgNGMzIDIgMyAyIDQgMSAxLTItMi00LTQtNHMtMiAwIDAgM20tNC0xbDIgNGMyIDMgMyAyIDEtMi0yLTMtMy00LTMtMm0tMzI0IDNjLTQgNS00IDYgMSAybDMtNGMwLTItMi0xLTQgMm00IDVjLTYgMTAtNyAxMi04IDE3bC0yIDhjLTQgMy03IDExLTcgMTcgMCA0LTIgOS0yIDQgMC0zLTQgNi00IDEwIDAgMiAwIDIgMiAxIDEtMyAyLTEgMCAyaC0yYy0xLTEtMS0xLTEgMWwxIDIgMSA1LTIgOXY0bDItNCAyLTEwYzEtMTAgMi00IDEgOGExMjggMTI4IDAgMDA2IDUzbDEgNC0xLTYtMS05YTIyMCAyMjAgMCAwMTgtOTRsLTEtMSAyLTZjMC01IDMtOCA1LThzMiAwIDAgMmwtMyA0YzEgMyAzIDQgMyAxIDEtNCAzLTQgMyAwLTEgNSAxIDQgNC0yIDItNiAyLTggMC02LTQgMi03IDAtNS00czEtNi0yLTJtMzQxIDFsNSA2YzIgMCAxLTMgMC00bC0yLTItMS0xLTIgMW0tMTAgNWwyIDJjMiAxIDMgMiA0IDYgMCA2IDIgOCA0IDUgMS0zLTEtOC02LTEyLTMtMi00LTItNC0xbS0zNjggMTBsLTIgMy0xIDFoLTFjMCAzLTEgNC01IDlsLTQgNmMwIDIgMSAxIDMtMiA3LTggOS0xMSAxMC05bDMgMWMyIDAgMiAwIDAtMmwtMy0xYy0yIDAtMS0xIDEtNCAzLTQgMi01LTEtMm04IDJsLTIgNGMwIDEgNC0yIDQtNGwxLTEgMS0yLTQgM20zNzAgM2MwIDIgNCA5IDUgN2wtMi01LTMtMm0tMzY2IDZ2NmwyLTctMiAxbTE0IDBjLTEgMi0zIDE0LTEgMTQgMSAxIDEgMCAxLTNsMS01IDEtNGMwLTMtMS0zLTItMm0tNDMgMjF2MmMyIDAgNC0yIDQtMy0xLTItMy0xLTQgMW0tMTggMjJ2NGwxLTIgMS0zYzItMyAwLTItMiAxbTQxIDQ2Yy0xIDEgMyAyOCA0IDMxIDEgMiAxLTMtMS0xN2wtMS0xM2MwLTItMi0zLTItMW02OSA0OGwtMSA5IDMgMSAxLTJ2LTJjMiAxIDIgMCAyLTNzMC01LTItNWMtMi0xLTMtMS0zIDJtOCAyYy0xIDIgMCAzIDIgM3YtNGMtMS0xLTIgMC0yIDFtMTQwIDE2Yy0yIDMtMiA1LTIgOCAxIDUgMSA1LTIgNXMtMyAyLTEgNmw1IDEwIDYgMTFhMTQwODEgMTQwODEgMCAwMTE4IDI0bDMgM2MxLTEgMSAwIDIgMSAxIDMgNCA0IDYgMWwxLTQgMS0xYzEgMCAyIDEgMSAyIDAgMyAxIDMgMyAwIDEtNCAyLTcgMS05LTEtMSAwLTIgMS00bDEtMmgtMmMtMi0xLTItMSAwLTQgMC0zLTMtMy01IDBoLTJsMi01IDIgMWMyIDAgMS0yLTEtMmwtMi00YzAtMi0xLTMtNC00bC02LTUtNC0yYy0xIDEtNCAwLTQtMWgybDEtMWMwLTItMi0yLTQtMnYtMmgtMmMtMSAyLTIgMi0yIDFsLTItMmgtM2wtMi0xLTItMWgtMWw0LTJoN2M0IDEgMTAgMCAxMi0zczItNC0xLTJjLTUgNS0xNSAyLTE5LTVsLTItNmMwLTMtMi0yLTQgMW0tMTA0IDExbC0yIDQgNC0zIDEtMmMxLTItMS0yLTMgMW0tMjUgMmwxIDQgMSAyYy0xIDIgMyA0IDQgMmwyLTJjMi0xIDItMS0xLTNhMzQgMzQgMCAwMS02LTRsLTItMiAxIDNtLTE3IDdsLTEgNS0xIDVjMiAwIDQtOCAzLTExLTEtMS0xLTEtMSAxbTE2IDdsLTEgMy01IDktOSAxNWMtNyAxMS0xNyAzOC0xNCA0MiAwIDEgNC0xIDYtNSAyLTUgMTAtMTQgMjYtMjlsNi04IDMtNCA0LThjMi01IDItNSAwLTZsLTUtOGMtMS0yLTEtMi0zLTFoLTJjLTEtMy02LTMtNiAwbS0xMiA2bC00IDYtMiA0YzAgMiAwIDIgMiAwIDYtOCA3LTkgNy0xMi0xLTItMS0yLTMgMm0tOSAxbC0xIDEwYzEtMiA1LTExIDQtMTItMS0yLTItMS0zIDJtLTEzOCAxYzAgMSA4IDcgOSA2bDIgMiAyIDF2LTJsLTQtMi00LTJjLTItMy01LTQtNS0zbTE0MyAxNGMtMyAyLTUgNS01IDZsLTEgMS0xIDNjMCAxIDAgMiAxIDEgMC0yIDUtOCA4LTExbDItNC00IDRtLTk5IDVjMCAxIDQgMiA3IDF2LTFsLTUtMS0yIDFtLTU5IDIxbDIgM2MxIDAgMiAwIDItMyAxLTIgMS0yLTEtMnMtMyAxLTMgMm0xMjggMTVsLTQgNCAzIDExYzMgMTMgMyAxNSA0IDEwIDItOSAzLTE1IDItMjJ2LTdsLTUgNG0tNDIgNHYybDIgMXYxbDEtMSAxLTJjMC0yLTEtMi00LTFtMTUwIDZjMCAxIDUgMyA2IDJsLTEtMmgtNW0tMjE1IDNoOGMzLTEgMi0xLTUtMS0yLTEtMyAwLTMgMW0yOSAzbDYgMmMxLTEgMC0yLTMtM2wtMyAxbS0xMCAzbDEgNyAyIDYgMSA2IDEtNmMwLTggMC0xMC0yLTEzLTMtNC0zLTQtMyAwbS01IDNsMyA5YzIgMCAxLTQtMS03bC0yLTJtMjEwIDQ1YzAgMSA3IDIgMTAgMSAyLTEgMi0xLTEtMWwtNy0xLTIgMW0xOTMgMjBjLTIgMy0yIDUgMSAzbDItNi0zIDNtLTMyNSAzNWwtMjEgMTMtMi0xYy0yLTMtNi0yLTExIDEtNCAzLTEwIDctMTIgN2wtMi0zYy0yLTQtMTAtNi0xMS0yIDAgMi0xIDMtMyAxLTItMy0xNyA1LTE3IDEwIDAgMy0xMCA3LTM4IDE0LTM0IDktNDEgMTAtNTAgMTQtNTIgMTgtODUgNTQtOTcgMTA5LTMgMTQtNiAzNC02IDQzdjZoMTkxbDE5MS0xYTYzNzUgNjM3NSAwIDAwLTUxLTk2IDQzOCA0MzggMCAwMC0xNy04Yy0yLTMtMi0zLTI2IDQtMjggOS00MyAxNi02MyAyNy0xNCA4LTE5IDgtMTgtMWwxMS00NmMzLTkgOS0yMCAxOS0zNmwxMi0yMSAyMi0zMWMzLTQgMi03LTEtMyIgZmlsbD0iIzNBQTg2MCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+');
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();
    /***/

  },

  /***/
  "./src/app/home/home.module.ngfactory.js":
  /*!***********************************************!*\
    !*** ./src/app/home/home.module.ngfactory.js ***!
    \***********************************************/

  /*! exports provided: HomeModuleNgFactory */

  /***/
  function srcAppHomeHomeModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModuleNgFactory", function () {
      return HomeModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _home_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component.ngfactory */
    "./src/app/home/home.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var HomeModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _home_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["HomeComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"], _home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_6__["ROUTES"], function () {
        return [[{
          path: "",
          component: _home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-ngfactory-es5.js.map