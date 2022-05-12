function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../dist/scully-image/fesm2015/scully-image.js":
  /*!*********************************************************************************!*\
    !*** /Volumes/T7/repos/scully-image/dist/scully-image/fesm2015/scully-image.js ***!
    \*********************************************************************************/

  /*! exports provided: PreloaderTypes, PrimitivesShapes, SCULLY_IMAGE_URL_MAP, ScullyBlurImageComponent, ScullyImageComponent, ScullyImageModule, ScullyPixelsImageComponent, ScullyPrimitivesImageComponent, ScullyTracedImageComponent, tracedTurnPolicies, ɵa */

  /***/
  function distScullyImageFesm2015ScullyImageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreloaderTypes", function () {
      return PreloaderTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimitivesShapes", function () {
      return PrimitivesShapes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCULLY_IMAGE_URL_MAP", function () {
      return SCULLY_IMAGE_URL_MAP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyBlurImageComponent", function () {
      return ScullyBlurImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyImageComponent", function () {
      return ScullyImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyImageModule", function () {
      return ScullyImageModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyPixelsImageComponent", function () {
      return ScullyPixelsImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyPrimitivesImageComponent", function () {
      return ScullyPrimitivesImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyTracedImageComponent", function () {
      return ScullyTracedImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tracedTurnPolicies", function () {
      return tracedTurnPolicies;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return VisibilityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "../../node_modules/@scullyio/ng-lib/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");

    var VisibilityService =
    /*#__PURE__*/
    function () {
      function VisibilityService(document) {
        _classCallCheck(this, VisibilityService);

        this.pageVisible$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(!document.hidden);
        }), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'visibilitychange').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) {
          return !document.hidden;
        })));
      }

      _createClass(VisibilityService, [{
        key: "elementInSight",
        value: function elementInSight(element) {
          var elementVisible$ = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var intersectionObserver = new IntersectionObserver(function (entries) {
              observer.next(entries);
            });
            intersectionObserver.observe(element.nativeElement);
            return function () {
              intersectionObserver.disconnect();
            };
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (entries) {
            return entries;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (entry) {
            return entry.isIntersecting;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          var elementInSight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.pageVisible$, elementVisible$, function (pageVisible, elementVisible) {
            return pageVisible && elementVisible;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          return elementInSight$;
        }
      }]);

      return VisibilityService;
    }();

    VisibilityService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    VisibilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))], VisibilityService);
    var PreloaderTypes;

    (function (PreloaderTypes) {
      PreloaderTypes["blur"] = "base64";
      PreloaderTypes["tracedSVG"] = "tracedSVG";
      PreloaderTypes["primitives"] = "primitives";
      PreloaderTypes["pixels"] = "pixels";
    })(PreloaderTypes || (PreloaderTypes = {}));

    var FULL = 'full';
    var PrimitivesShapes;

    (function (PrimitivesShapes) {
      PrimitivesShapes["triangle"] = "triangle";
      PrimitivesShapes["ellipse"] = "ellipse";
      PrimitivesShapes["rotatedEellipse"] = "rotated-ellipse";
      PrimitivesShapes["rectangle"] = "rectangle";
      PrimitivesShapes["rotatedRectangle"] = "rotatedRectangle";
      PrimitivesShapes["random"] = "random";
    })(PrimitivesShapes || (PrimitivesShapes = {}));

    var tracedTurnPolicies;

    (function (tracedTurnPolicies) {
      tracedTurnPolicies["TURNPOLICY_BLACK"] = "black";
      tracedTurnPolicies["TURNPOLICY_WHITE"] = "white";
      tracedTurnPolicies["TURNPOLICY_LEFT"] = "left";
      tracedTurnPolicies["TURNPOLICY_RIGHT"] = "right";
      tracedTurnPolicies["TURNPOLICY_MINORITY"] = "minority";
      tracedTurnPolicies["TURNPOLICY_MAJORITY"] = "majority";
    })(tracedTurnPolicies || (tracedTurnPolicies = {}));

    var SCULLY_IMAGE_URL_MAP = 'scullyImageUrlMap';
    var template = "\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image-fade-hack\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"loaded-image\"\n  [src]=\"loadedSrc\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n/>\n";
    var componentStyles = "\n:host {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\n:host img {\n  transition: opacity 300ms, filter 300ms;\n  width: 100%;\n  height: auto;\n}\n\n:host .preloaded-image {\n  z-index: 3;\n  opacity: 1;\n}\n\n:host .preloaded-image.loaded {\n  opacity: 0;\n}\n\n:host .preloaded-image-fade-hack {\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  opacity: 1;\n}\n\n:host .preloaded-image-fade-hack.loaded {\n  opacity: 0;\n}\n\n:host .loaded-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n:host .loaded-image.loaded {\n  opacity: 1;\n}\n\n.blurred {\n  filter: blur(20px);\n}\n";

    var ScullyImageComponent =
    /*#__PURE__*/
    function () {
      function ScullyImageComponent(transferState, sanitizer, visibilityService, elementRef) {
        _classCallCheck(this, ScullyImageComponent);

        this.transferState = transferState;
        this.sanitizer = sanitizer;
        this.visibilityService = visibilityService;
        this.elementRef = elementRef;
        this.src = '';
        this.lazy = true;
        this.pluginOptions = {};
        this.preloader = PreloaderTypes.blur;
        this.PreloaderTypes = PreloaderTypes;
        this.imageLoaded = false;
        this.scullyImageUrlMap = {};
        this.preloadedSrc = '';
        this.loadedSrc = '';
      }

      _createClass(ScullyImageComponent, [{
        key: "getHeight",
        value: function getHeight() {
          if (this.pixelHeight) {
            return this.pixelHeight + 'px';
          } else {
            return 'auto';
          }
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          if (this.pixelWidth) {
            return this.pixelWidth + 'px';
          } else {
            return '100%';
          }
        }
      }, {
        key: "baseInit",
        value: function baseInit() {
          var _this = this;

          if (Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["isScullyGenerated"])()) {
            console.log('scully is generated');
            this.transferState.getState(SCULLY_IMAGE_URL_MAP).subscribe(function (scullyImageUrlMap) {
              console.log('scullyImageUrlMap', {
                scullyImageUrlMap: scullyImageUrlMap
              });
              _this.scullyImageUrlMap = scullyImageUrlMap;
              console.log('pluginOptions', _this.pluginOptions);
              _this.preloadedSrc = scullyImageUrlMap[_this.getImageKey(_this.preloader)];

              if (_this.preloader === PreloaderTypes.primitives) {
                _this.preloadedSrc = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.preloadedSrc);
              } else if (_this.preloader === PreloaderTypes.tracedSVG) {
                _this.preloadedSrc = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.preloadedSrc);
              } else if (_this.preloader === PreloaderTypes.pixels) {
                _this.preloadedSrc = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.preloadedSrc);
              }

              var fullSizeImageUrl = scullyImageUrlMap[_this.getImageKey(FULL)] || _this.src;

              if (_this.lazy) {
                _this.elementInSight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000), _this.visibilityService.elementInSight(_this.elementRef), function (counter, visible) {
                  return visible;
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (visible) {
                  return visible;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
                  _this.fetchImage(fullSizeImageUrl);
                });
              } else {
                _this.fetchImage(fullSizeImageUrl);
              }
            });
          } else {
            this.transferState.setState(SCULLY_IMAGE_URL_MAP, {});
          }
        }
      }, {
        key: "fetchImage",
        value: function fetchImage(fullSizeImageUrl) {
          var _this2 = this;

          var imgElement = document.createElement('img');

          imgElement.onload = function () {
            setTimeout(function () {
              console.log('image has been loaded');
              _this2.loadedSrc = fullSizeImageUrl;
              _this2.imageLoaded = true;
            }, 300);
          };

          imgElement.src = fullSizeImageUrl;
          this.loadedSrc = fullSizeImageUrl;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {// if (changes.src && changes.src !== '') {
          // }
          // if (isScullyGenerated()) {
          //   console.log('scully is generated');
          //   this.getStateAsPromise();
          // } else {
          //   console.log('setting state', this.src);
          //   this.transferState.setState('src', { src: this.src });
          // }
        }
      }, {
        key: "baseOnDestroy",
        value: function baseOnDestroy() {
          if (this.elementInSight$) {
            this.elementInSight$.unsubscribe();
          }
        }
      }, {
        key: "getImageKey",
        value: function getImageKey() {
          var preloaderType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var key = this.src + preloaderType + JSON.stringify(this.pluginOptions) + (this.pixelHeight || 0) + (this.pixelWidth || 0) + (this.fluidMaxHeight || 0) + (this.fluidMaxWidth || 0);
          console.log({
            key: key
          });
          return key;
        }
      }, {
        key: "height",
        get: function get() {
          return this.getHeight();
        }
      }, {
        key: "width",
        get: function get() {
          return this.getWidth();
        }
      }]);

      return ScullyImageComponent;
    }();

    ScullyImageComponent.ctorParameters = function () {
      return [{
        type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["TransferStateService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: VisibilityService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyImageComponent.prototype, "src", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyImageComponent.prototype, "pixelHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyImageComponent.prototype, "pixelWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyImageComponent.prototype, "fluidMaxWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyImageComponent.prototype, "fluidMaxHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyImageComponent.prototype, "lazy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyImageComponent.prototype, "pluginOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyImageComponent.prototype, "preloader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], ScullyImageComponent.prototype, "height", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], ScullyImageComponent.prototype, "width", null);
    ScullyImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'scully-image',
      template: template,
      styles: [componentStyles]
    })], ScullyImageComponent);

    var ScullyBlurImageComponent =
    /*#__PURE__*/
    function (_ScullyImageComponent) {
      _inherits(ScullyBlurImageComponent, _ScullyImageComponent);

      var _super = _createSuper(ScullyBlurImageComponent);

      function ScullyBlurImageComponent() {
        var _this3;

        _classCallCheck(this, ScullyBlurImageComponent);

        _this3 = _super.apply(this, arguments);
        _this3.preloader = PreloaderTypes.blur;
        return _this3;
      }

      _createClass(ScullyBlurImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.baseInit();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.baseOnDestroy();
        }
      }, {
        key: "height",
        get: function get() {
          return this.getHeight();
        }
      }, {
        key: "width",
        get: function get() {
          return this.getWidth();
        }
      }, {
        key: "type",
        get: function get() {
          return this.preloader;
        }
      }, {
        key: "pluginOptionsAsString",
        get: function get() {
          return JSON.stringify(this.pluginOptions);
        }
      }]);

      return ScullyBlurImageComponent;
    }(ScullyImageComponent);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyBlurImageComponent.prototype, "preloader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], ScullyBlurImageComponent.prototype, "height", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], ScullyBlurImageComponent.prototype, "width", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.data-type')], ScullyBlurImageComponent.prototype, "type", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.data-plugin-options')], ScullyBlurImageComponent.prototype, "pluginOptionsAsString", null);
    ScullyBlurImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'scully-blur-image',
      template: template,
      styles: [componentStyles]
    })], ScullyBlurImageComponent);

    var ScullyTracedImageComponent =
    /*#__PURE__*/
    function (_ScullyImageComponent2) {
      _inherits(ScullyTracedImageComponent, _ScullyImageComponent2);

      var _super2 = _createSuper(ScullyTracedImageComponent);

      function ScullyTracedImageComponent() {
        var _this4;

        _classCallCheck(this, ScullyTracedImageComponent);

        _this4 = _super2.apply(this, arguments);
        _this4.preloader = PreloaderTypes.tracedSVG;
        return _this4;
      }

      _createClass(ScullyTracedImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.baseInit();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.baseOnDestroy();
        }
      }, {
        key: "height",
        get: function get() {
          return this.getHeight();
        }
      }, {
        key: "width",
        get: function get() {
          return this.getWidth();
        }
      }, {
        key: "type",
        get: function get() {
          return this.preloader;
        }
      }, {
        key: "pluginOptionsAsString",
        get: function get() {
          return JSON.stringify(this.pluginOptions);
        }
      }]);

      return ScullyTracedImageComponent;
    }(ScullyImageComponent);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyTracedImageComponent.prototype, "preloader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], ScullyTracedImageComponent.prototype, "height", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], ScullyTracedImageComponent.prototype, "width", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.data-type')], ScullyTracedImageComponent.prototype, "type", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.data-plugin-options')], ScullyTracedImageComponent.prototype, "pluginOptionsAsString", null);
    ScullyTracedImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'scully-traced-image',
      template: template,
      styles: [componentStyles]
    })], ScullyTracedImageComponent);

    var ScullyPrimitivesImageComponent =
    /*#__PURE__*/
    function (_ScullyImageComponent3) {
      _inherits(ScullyPrimitivesImageComponent, _ScullyImageComponent3);

      var _super3 = _createSuper(ScullyPrimitivesImageComponent);

      function ScullyPrimitivesImageComponent() {
        var _this5;

        _classCallCheck(this, ScullyPrimitivesImageComponent);

        _this5 = _super3.apply(this, arguments);
        _this5.preloader = PreloaderTypes.primitives;
        return _this5;
      }

      _createClass(ScullyPrimitivesImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.baseInit();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.baseOnDestroy();
        }
      }, {
        key: "height",
        get: function get() {
          return this.getHeight();
        }
      }, {
        key: "width",
        get: function get() {
          return this.getWidth();
        }
      }, {
        key: "type",
        get: function get() {
          return this.preloader;
        }
      }, {
        key: "pluginOptionsAsString",
        get: function get() {
          return JSON.stringify(this.pluginOptions);
        }
      }]);

      return ScullyPrimitivesImageComponent;
    }(ScullyImageComponent);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyPrimitivesImageComponent.prototype, "preloader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], ScullyPrimitivesImageComponent.prototype, "height", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], ScullyPrimitivesImageComponent.prototype, "width", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.data-type')], ScullyPrimitivesImageComponent.prototype, "type", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.data-plugin-options')], ScullyPrimitivesImageComponent.prototype, "pluginOptionsAsString", null);
    ScullyPrimitivesImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'scully-primitives-image',
      template: template,
      styles: [componentStyles]
    })], ScullyPrimitivesImageComponent);

    var ScullyPixelsImageComponent =
    /*#__PURE__*/
    function (_ScullyImageComponent4) {
      _inherits(ScullyPixelsImageComponent, _ScullyImageComponent4);

      var _super4 = _createSuper(ScullyPixelsImageComponent);

      function ScullyPixelsImageComponent() {
        var _this6;

        _classCallCheck(this, ScullyPixelsImageComponent);

        _this6 = _super4.apply(this, arguments);
        _this6.preloader = PreloaderTypes.pixels;
        return _this6;
      }

      _createClass(ScullyPixelsImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.baseInit();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.baseOnDestroy();
        }
      }, {
        key: "height",
        get: function get() {
          return this.getHeight();
        }
      }, {
        key: "width",
        get: function get() {
          return this.getWidth();
        }
      }, {
        key: "type",
        get: function get() {
          return this.preloader;
        }
      }, {
        key: "pluginOptionsAsString",
        get: function get() {
          return JSON.stringify(this.pluginOptions);
        }
      }]);

      return ScullyPixelsImageComponent;
    }(ScullyImageComponent);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScullyPixelsImageComponent.prototype, "preloader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], ScullyPixelsImageComponent.prototype, "height", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], ScullyPixelsImageComponent.prototype, "width", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.data-type')], ScullyPixelsImageComponent.prototype, "type", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.data-plugin-options')], ScullyPixelsImageComponent.prototype, "pluginOptionsAsString", null);
    ScullyPixelsImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'scully-pixels-image',
      template: template,
      styles: [componentStyles]
    })], ScullyPixelsImageComponent);
    var exportedComponents = [ScullyBlurImageComponent, ScullyTracedImageComponent, ScullyPrimitivesImageComponent, ScullyPixelsImageComponent];

    var ScullyImageModule = function ScullyImageModule() {
      _classCallCheck(this, ScullyImageModule);
    };

    ScullyImageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [ScullyImageComponent].concat(exportedComponents),
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
      exports: [].concat(exportedComponents),
      providers: [VisibilityService]
    })], ScullyImageModule);
    /*
     * Public API Surface of scully-image
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=scully-image.js.map

    /***/
  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, ɵ0, ɵ1, ɵ2 */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
      return ɵ1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
      return ɵ2;
    });

    var ɵ0 = function ɵ0() {
      return __webpack_require__.e(
      /*! import() | home-home-module-ngfactory */
      "home-home-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./home/home.module.ngfactory */
      "./src/app/home/home.module.ngfactory.js")).then(function (m) {
        return m.HomeModuleNgFactory;
      });
    },
        ɵ1 = function ɵ1() {
      return Promise.all(
      /*! import() | docs-docs-module-ngfactory */
      [__webpack_require__.e("default~docs-docs-module-ngfactory~examples-examples-module-ngfactory"), __webpack_require__.e("docs-docs-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./docs/docs.module.ngfactory */
      "./src/app/docs/docs.module.ngfactory.js")).then(function (m) {
        return m.DocsModuleNgFactory;
      });
    },
        ɵ2 = function ɵ2() {
      return Promise.all(
      /*! import() | examples-examples-module-ngfactory */
      [__webpack_require__.e("default~docs-docs-module-ngfactory~examples-examples-module-ngfactory"), __webpack_require__.e("examples-examples-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./examples/examples.module.ngfactory */
      "./src/app/examples/examples.module.ngfactory.js")).then(function (m) {
        return m.ExamplesModuleNgFactory;
      });
    };

    var routes = [{
      path: '',
      loadChildren: ɵ0
    }, {
      path: 'docs',
      loadChildren: ɵ1
    }, {
      path: 'examples',
      loadChildren: ɵ2
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "../../node_modules/@scullyio/ng-lib/fesm2015/scullyio-ng-lib.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "footer", [["class", "main-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "nav", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "a", [["fxFlex", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](5, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Getting Started"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "a", [["fxFlex", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](10, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Config"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "a", [["fxFlex", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](15, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Components"]))], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 2, 0, currVal_0);

        var currVal_3 = _ck(_v, 5, 0, "/docs/getting-started");

        _ck(_v, 4, 0, currVal_3);

        var currVal_4 = "";

        _ck(_v, 6, 0, currVal_4);

        var currVal_7 = _ck(_v, 10, 0, "/docs/config");

        _ck(_v, 9, 0, currVal_7);

        var currVal_8 = "";

        _ck(_v, 11, 0, currVal_8);

        var currVal_11 = _ck(_v, 15, 0, "/docs/components");

        _ck(_v, 14, 0, currVal_11);

        var currVal_12 = "";

        _ck(_v, 16, 0, currVal_12);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href;

        _ck(_v, 3, 0, currVal_1, currVal_2);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).target;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).href;

        _ck(_v, 8, 0, currVal_5, currVal_6);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).target;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).href;

        _ck(_v, 13, 0, currVal_9, currVal_10);
      });
    }

    function View_AppComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 32, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 26, "header", [["class", "main-header"], ["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "a", [["class", "logo"], ["fxFlex", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](5, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" scully-image"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 19, "nav", [["class", "main-nav"], ["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "a", [["fxFlex", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](12, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Getting Started"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "a", [["fxFlex", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](17, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Config"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "a", [["fxFlex", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](22, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Components"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "a", [["fxFlex", ""], ["href", "https://www.github.com/cmgriffing/scully-image"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "img", [["_ngcontent-oga-c12", ""], ["alt", "github"], ["heigth", "40px"], ["src", "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"], ["width", "40px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "main", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "row";

        _ck(_v, 2, 0, currVal_0);

        var currVal_3 = _ck(_v, 5, 0, "/");

        _ck(_v, 4, 0, currVal_3);

        var currVal_4 = "";

        _ck(_v, 6, 0, currVal_4);

        var currVal_5 = "";

        _ck(_v, 9, 0, currVal_5);

        var currVal_8 = _ck(_v, 12, 0, "/docs/getting-started");

        _ck(_v, 11, 0, currVal_8);

        var currVal_9 = "";

        _ck(_v, 13, 0, currVal_9);

        var currVal_12 = _ck(_v, 17, 0, "/docs/config");

        _ck(_v, 16, 0, currVal_12);

        var currVal_13 = "";

        _ck(_v, 18, 0, currVal_13);

        var currVal_16 = _ck(_v, 22, 0, "/docs/components");

        _ck(_v, 21, 0, currVal_16);

        var currVal_17 = "";

        _ck(_v, 23, 0, currVal_17);

        var currVal_18 = "";

        _ck(_v, 26, 0, currVal_18);

        _ck(_v, 30, 0);

        var currVal_19 = _co.isHome;

        _ck(_v, 32, 0, currVal_19);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href;

        _ck(_v, 3, 0, currVal_1, currVal_2);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).target;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).href;

        _ck(_v, 10, 0, currVal_6, currVal_7);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).target;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).href;

        _ck(_v, 15, 0, currVal_10, currVal_11);

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).target;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).href;

        _ck(_v, 20, 0, currVal_14, currVal_15);
      });
    }

    function View_AppComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        _ck(_v, 2, 0);
      }, null);
    }

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.isExamplePage;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.isExamplePage;

        _ck(_v, 3, 0, currVal_1);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_7__["ScullyRoutesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  align-self: center;\n  position: relative;\n  text-decoration: none;\n  font-weight: 600;\n  color: #000;\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]::after {\n  content: \"\";\n  bottom: -1px;\n  left: 15px;\n  border: 1px solid #3aa860;\n  border-radius: 4px;\n  position: absolute;\n  height: 0px;\n  width: 32px;\n}\n[_nghost-%COMP%]   .main-nav[_ngcontent-%COMP%] {\n  justify-self: flex-end;\n}\n[_nghost-%COMP%]   .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  align-self: center;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 12px;\n}\n[_nghost-%COMP%]   .main-header[_ngcontent-%COMP%] {\n  height: 50px;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  background: url(\"/assets/scully-bg-s.svg\");\n  background-size: cover;\n}\n[_nghost-%COMP%]   .main-footer[_ngcontent-%COMP%] {\n  height: 120px;\n  background: rgba(58, 168, 96, 0.05);\n}\n[_nghost-%COMP%]   .main-footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  max-width: 480px;\n  margin: 0 auto;\n  padding-top: 40px;\n}\n[_nghost-%COMP%]   .main-footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Q3L3JlcG9zL3NjdWxseS1pbWFnZS9wcm9qZWN0cy9kb2N1bWVudGF0aW9uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1ZvbHVtZXMvVDcvcmVwb3Mvc2N1bGx5LWltYWdlL3Byb2plY3RzL2RvY3VtZW50YXRpb24vc3JjL192YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL2RvY3VtZW50YXRpb24vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0NGVztBQ0FmO0FGSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRUZOO0FGTUU7RUFDRSxzQkFBQTtBRUpKO0FGTUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBRUpOO0FGT0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FFTE47QUZTRTtFQUNFLFlDdkJZO0FDZ0JoQjtBRlVFO0VBQ0UsMENBQUE7RUFDQSxzQkFBQTtBRVJKO0FGV0U7RUFDRSxhQy9CWTtFRGdDWixtQ0MxQ2dCO0FDaUNwQjtBRldJO0VBQ0UsZ0JDM0NjO0VENENkLGNBQUE7RUFDQSxpQkFBQTtBRVROO0FGV007RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FFVFIiLCJmaWxlIjoicHJvamVjdHMvZG9jdW1lbnRhdGlvbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi92YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICAubG9nbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICRzY3VsbHktYmxhY2s7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYm90dG9tOiAtMXB4O1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzY3VsbHktZ3JlZW47XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYWluLW5hdiB7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcblxuICAgIGEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgICBhOmxhc3QtY2hpbGQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYWluLWhlYWRlciB7XG4gICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgfVxuXG4gIG1haW4ge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc2N1bGx5LWJnLXMuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAubWFpbi1mb290ZXIge1xuICAgIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZDogJHNjdWxseS1ncmVlbi13YXNoO1xuXG4gICAgbmF2IHtcbiAgICAgIG1heC13aWR0aDogJGJyZWFrcG9pbnQtbW9iaWxlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nLXRvcDogNDBweDtcblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJHNjdWxseS1ncmVlbjogIzNhYTg2MDtcbiRzY3VsbHktYnJpZ2h0Z3JlZW46ICM2Y2NlN2E7XG4kc2N1bGx5LW5pZ2h0OiAjMjMyZDJhO1xuJHNjdWxseS1kYXJrZ3JheTogIzRjNjE1YjtcbiRzY3VsbHktbGlnaHRncmF5OiAjZDNkM2QzO1xuJHNjdWxseS1vZmZ3aGl0ZTogI2ZhZmJmYztcbiRzY3VsbHktd2hpdGU6ICNmZmY7XG4kc2N1bGx5LWJsYWNrOiAjMDAwO1xuJHNjdWxseS1ncmVlbi13YXNoOiByZ2JhKDU4LCAxNjgsIDk2LCAwLjA1KTtcblxuJGJyZWFrcG9pbnQtbW9iaWxlOiA0ODBweDtcbiRicmVha3BvaW50LXRhYmxldDogNzIwcHg7XG4kYnJlYWtwb2ludC1tZWRpdW06IDk2MHB4O1xuJGJyZWFrcG9pbnQtbGFyZ2U6IDEyMDBweDtcbiRicmVha3BvaW50LXhsOiAxMzYwcHg7XG4kYnJlYWtwb2ludC14eGw6IDE2MDBweDtcblxuJGhlYWRlci1oZWlnaHQ6IDUwcHg7XG4kZm9vdGVyLWhlaWdodDogMTIwcHg7XG5cbiRmdWxsLWhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gMTBweCk7XG4iLCI6aG9zdCAubG9nbyB7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDA7XG59XG46aG9zdCAubG9nbzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3R0b206IC0xcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYWE4NjA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDBweDtcbiAgd2lkdGg6IDMycHg7XG59XG46aG9zdCAubWFpbi1uYXYge1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xufVxuOmhvc3QgLm1haW4tbmF2IGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOmhvc3QgLm1haW4tbmF2IGE6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuOmhvc3QgLm1haW4taGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuOmhvc3QgbWFpbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc2N1bGx5LWJnLXMuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuOmhvc3QgLm1haW4tZm9vdGVyIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSg1OCwgMTY4LCA5NiwgMC4wNSk7XG59XG46aG9zdCAubWFpbi1mb290ZXIgbmF2IHtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuOmhvc3QgLm1haW4tZm9vdGVyIG5hdiBhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(scully, router, activatedRoute) {
        _classCallCheck(this, AppComponent);

        this.scully = scully;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'documentation';
        this.isHome = true;
        this.isExamplePage = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
              _this7.isHome = event.url === '/';
              _this7.isExamplePage = event.url.indexOf('/examples/') > -1;
            }
          });
        }
      }]);

      return AppComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var scully_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! scully-image */
    "../../dist/scully-image/fesm2015/scully-image.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "../../node_modules/@scullyio/ng-lib/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_7__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_7__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_7__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_7__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p1_1) {
        return [p0_0, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["removeStyles"](p1_0, p1_1)];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_INITIALIZER"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, scully_image__WEBPACK_IMPORTED_MODULE_10__["ɵa"], scully_image__WEBPACK_IMPORTED_MODULE_10__["ɵa"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_7__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () {
        return [[{
          path: "",
          loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["ɵ0"]
        }, {
          path: "docs",
          loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["ɵ1"]
        }, {
          path: "examples",
          loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["ɵ2"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_12__["ScullyContentModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_12__["ScullyContentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_12__["ScullyLibModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_12__["ScullyLibModule"], [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_12__["IdleMonitorService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_20__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_20__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, scully_image__WEBPACK_IMPORTED_MODULE_10__["ScullyImageModule"], scully_image__WEBPACK_IMPORTED_MODULE_10__["ScullyImageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    }); // dev
    // import { ScullyImageModule } from '../../../../dist/scully-image';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/T7/repos/scully-image/projects/documentation/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map