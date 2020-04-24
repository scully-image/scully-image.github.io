function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "../scully-image/src/lib/scully-image.component.ts":
  /*!*********************************************************!*\
    !*** ../scully-image/src/lib/scully-image.component.ts ***!
    \*********************************************************/

  /*! exports provided: PreloaderTypes, PrimitivesShapes, tracedTurnPolicies, SCULLY_IMAGE_URL_MAP, ScullyImageComponent, ScullyBlurImageComponent, ScullyTracedImageComponent, ScullyPrimitivesImageComponent */

  /***/
  function scullyImageSrcLibScullyImageComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    __webpack_require__.d(__webpack_exports__, "tracedTurnPolicies", function () {
      return tracedTurnPolicies;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCULLY_IMAGE_URL_MAP", function () {
      return SCULLY_IMAGE_URL_MAP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyImageComponent", function () {
      return ScullyImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyBlurImageComponent", function () {
      return ScullyBlurImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyTracedImageComponent", function () {
      return ScullyTracedImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyPrimitivesImageComponent", function () {
      return ScullyPrimitivesImageComponent;
    });
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "../../node_modules/@scullyio/ng-lib/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var PreloaderTypes;

    (function (PreloaderTypes) {
      PreloaderTypes["blur"] = "base64";
      PreloaderTypes["tracedSVG"] = "tracedSVG";
      PreloaderTypes["primitives"] = "primitives";
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
    var componentStyles = "\n:host {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\n:host img {\n  transition: opacity 300ms, filter 300ms;\n  width: 100%;\n  height: auto;\n}\n\n:host .preloaded-image {\n  z-index: 3;\n  opacity: 1;\n}\n\n:host .preloaded-image.loaded {\n  opacity: 0;\n}\n\n:host .preloaded-image-fade-hack {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  opacity: 1;\n}\n\n:host .preloaded-image-fade-hack.loaded {\n  opacity: 0;\n}\n\n:host .loaded-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n:host .loaded-image.loaded {\n  opacity: 1;\n}\n\n.blurred {\n  filter: blur(20px);\n}\n";

    var ScullyImageComponent = /*#__PURE__*/function () {
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

          if (Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_0__["isScullyGenerated"])()) {
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
              }

              var fullSizeImageUrl = scullyImageUrlMap[_this.getImageKey(FULL)] || _this.src;

              if (_this.lazy) {
                _this.elementInSight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(2000), _this.visibilityService.elementInSight(_this.elementRef), function (counter, visible) {
                  return visible;
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (visible) {
                  return visible;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
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

    var ScullyBlurImageComponent = /*#__PURE__*/function (_ScullyImageComponent) {
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

    var ScullyTracedImageComponent = /*#__PURE__*/function (_ScullyImageComponent2) {
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

    var ScullyPrimitivesImageComponent = /*#__PURE__*/function (_ScullyImageComponent3) {
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
    /***/

  },

  /***/
  "../scully-image/src/lib/scully-image.module.ts":
  /*!******************************************************!*\
    !*** ../scully-image/src/lib/scully-image.module.ts ***!
    \******************************************************/

  /*! exports provided: ScullyImageModule */

  /***/
  function scullyImageSrcLibScullyImageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyImageModule", function () {
      return ScullyImageModule;
    });
    /* harmony import */


    var _scully_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./scully-image.component */
    "../scully-image/src/lib/scully-image.component.ts");

    var exportedComponents = [_scully_image_component__WEBPACK_IMPORTED_MODULE_0__["ScullyBlurImageComponent"], _scully_image_component__WEBPACK_IMPORTED_MODULE_0__["ScullyTracedImageComponent"], _scully_image_component__WEBPACK_IMPORTED_MODULE_0__["ScullyPrimitivesImageComponent"]];

    var ScullyImageModule = function ScullyImageModule() {
      _classCallCheck(this, ScullyImageModule);
    };
    /***/

  },

  /***/
  "../scully-image/src/lib/visibility.service.ts":
  /*!*****************************************************!*\
    !*** ../scully-image/src/lib/visibility.service.ts ***!
    \*****************************************************/

  /*! exports provided: VisibilityService */

  /***/
  function scullyImageSrcLibVisibilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisibilityService", function () {
      return VisibilityService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var VisibilityService = /*#__PURE__*/function () {
      function VisibilityService(document) {
        _classCallCheck(this, VisibilityService);

        this.pageVisible$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(!document.hidden);
        }), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, 'visibilitychange').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (e) {
          return !document.hidden;
        })));
      }

      _createClass(VisibilityService, [{
        key: "elementInSight",
        value: function elementInSight(element) {
          var elementVisible$ = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            var intersectionObserver = new IntersectionObserver(function (entries) {
              observer.next(entries);
            });
            intersectionObserver.observe(element.nativeElement);
            return function () {
              intersectionObserver.disconnect();
            };
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (entries) {
            return entries;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (entry) {
            return entry.isIntersecting;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
          var elementInSight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(this.pageVisible$, elementVisible$, function (pageVisible, elementVisible) {
            return pageVisible && elementVisible;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
          return elementInSight$;
        }
      }]);

      return VisibilityService;
    }();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map