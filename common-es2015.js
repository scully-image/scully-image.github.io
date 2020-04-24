(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "../scully-image/src/lib/scully-image.component.ts":
/*!*********************************************************!*\
  !*** ../scully-image/src/lib/scully-image.component.ts ***!
  \*********************************************************/
/*! exports provided: PreloaderTypes, PrimitivesShapes, tracedTurnPolicies, SCULLY_IMAGE_URL_MAP, ScullyImageComponent, ScullyBlurImageComponent, ScullyTracedImageComponent, ScullyPrimitivesImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderTypes", function() { return PreloaderTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimitivesShapes", function() { return PrimitivesShapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tracedTurnPolicies", function() { return tracedTurnPolicies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCULLY_IMAGE_URL_MAP", function() { return SCULLY_IMAGE_URL_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScullyImageComponent", function() { return ScullyImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScullyBlurImageComponent", function() { return ScullyBlurImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScullyTracedImageComponent", function() { return ScullyTracedImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScullyPrimitivesImageComponent", function() { return ScullyPrimitivesImageComponent; });
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scullyio/ng-lib */ "../../node_modules/@scullyio/ng-lib/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");



var PreloaderTypes;
(function (PreloaderTypes) {
    PreloaderTypes["blur"] = "base64";
    PreloaderTypes["tracedSVG"] = "tracedSVG";
    PreloaderTypes["primitives"] = "primitives";
})(PreloaderTypes || (PreloaderTypes = {}));
const FULL = 'full';
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
const SCULLY_IMAGE_URL_MAP = 'scullyImageUrlMap';
const template = `
<img
  [style.height]="getHeight()"
  [style.width]="getWidth()"
  [class.blurred]="preloader === PreloaderTypes.blur && !imageLoaded"
  [class.loaded]="imageLoaded"
  class="preloaded-image"
  data-scully-image="something"
  [src]="preloadedSrc"
/>
<img
  [style.height]="getHeight()"
  [style.width]="getWidth()"
  [class.blurred]="preloader === PreloaderTypes.blur && !imageLoaded"
  [class.loaded]="imageLoaded"
  class="preloaded-image-fade-hack"
  data-scully-image="something"
  [src]="preloadedSrc"
/>
<img
  [style.height]="getHeight()"
  [style.width]="getWidth()"
  [class.loaded]="imageLoaded"
  class="loaded-image"
  [src]="loadedSrc"
  [class.blurred]="preloader === PreloaderTypes.blur && !imageLoaded"
/>
`;
const componentStyles = `
:host {
  position: relative;
  display: block;
  overflow: hidden;
}

:host img {
  transition: opacity 300ms, filter 300ms;
  width: 100%;
  height: auto;
}

:host .preloaded-image {
  z-index: 3;
  opacity: 1;
}

:host .preloaded-image.loaded {
  opacity: 0;
}

:host .preloaded-image-fade-hack {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  opacity: 1;
}

:host .preloaded-image-fade-hack.loaded {
  opacity: 0;
}

:host .loaded-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
}

:host .loaded-image.loaded {
  opacity: 1;
}

.blurred {
  filter: blur(20px);
}
`;
class ScullyImageComponent {
    constructor(transferState, sanitizer, visibilityService, elementRef) {
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
    getHeight() {
        if (this.pixelHeight) {
            return this.pixelHeight + 'px';
        }
        else {
            return 'auto';
        }
    }
    getWidth() {
        if (this.pixelWidth) {
            return this.pixelWidth + 'px';
        }
        else {
            return '100%';
        }
    }
    get height() {
        return this.getHeight();
    }
    get width() {
        return this.getWidth();
    }
    baseInit() {
        if (Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_0__["isScullyGenerated"])()) {
            console.log('scully is generated');
            this.transferState
                .getState(SCULLY_IMAGE_URL_MAP)
                .subscribe((scullyImageUrlMap) => {
                console.log('scullyImageUrlMap', { scullyImageUrlMap });
                this.scullyImageUrlMap = scullyImageUrlMap;
                console.log('pluginOptions', this.pluginOptions);
                this.preloadedSrc =
                    scullyImageUrlMap[this.getImageKey(this.preloader)];
                if (this.preloader === PreloaderTypes.primitives) {
                    this.preloadedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.preloadedSrc);
                }
                else if (this.preloader === PreloaderTypes.tracedSVG) {
                    this.preloadedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.preloadedSrc);
                }
                const fullSizeImageUrl = scullyImageUrlMap[this.getImageKey(FULL)] || this.src;
                if (this.lazy) {
                    this.elementInSight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(2000), this.visibilityService.elementInSight(this.elementRef), (counter, visible) => visible)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((visible) => visible), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                        .subscribe(() => {
                        this.fetchImage(fullSizeImageUrl);
                    });
                }
                else {
                    this.fetchImage(fullSizeImageUrl);
                }
            });
        }
        else {
            this.transferState.setState(SCULLY_IMAGE_URL_MAP, {});
        }
    }
    fetchImage(fullSizeImageUrl) {
        const imgElement = document.createElement('img');
        imgElement.onload = () => {
            setTimeout(() => {
                console.log('image has been loaded');
                this.loadedSrc = fullSizeImageUrl;
                this.imageLoaded = true;
            }, 300);
        };
        imgElement.src = fullSizeImageUrl;
        this.loadedSrc = fullSizeImageUrl;
    }
    ngOnChanges(changes) {
        // if (changes.src && changes.src !== '') {
        // }
        // if (isScullyGenerated()) {
        //   console.log('scully is generated');
        //   this.getStateAsPromise();
        // } else {
        //   console.log('setting state', this.src);
        //   this.transferState.setState('src', { src: this.src });
        // }
    }
    baseOnDestroy() {
        if (this.elementInSight$) {
            this.elementInSight$.unsubscribe();
        }
    }
    getImageKey(preloaderType = '') {
        const key = this.src +
            preloaderType +
            JSON.stringify(this.pluginOptions) +
            (this.pixelHeight || 0) +
            (this.pixelWidth || 0) +
            (this.fluidMaxHeight || 0) +
            (this.fluidMaxWidth || 0);
        console.log({ key });
        return key;
    }
}
class ScullyBlurImageComponent extends ScullyImageComponent {
    constructor() {
        super(...arguments);
        this.preloader = PreloaderTypes.blur;
    }
    get height() {
        return this.getHeight();
    }
    get width() {
        return this.getWidth();
    }
    get type() {
        return this.preloader;
    }
    get pluginOptionsAsString() {
        return JSON.stringify(this.pluginOptions);
    }
    ngOnInit() {
        this.baseInit();
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
}
class ScullyTracedImageComponent extends ScullyImageComponent {
    constructor() {
        super(...arguments);
        this.preloader = PreloaderTypes.tracedSVG;
    }
    get height() {
        return this.getHeight();
    }
    get width() {
        return this.getWidth();
    }
    get type() {
        return this.preloader;
    }
    get pluginOptionsAsString() {
        return JSON.stringify(this.pluginOptions);
    }
    ngOnInit() {
        this.baseInit();
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
}
class ScullyPrimitivesImageComponent extends ScullyImageComponent {
    constructor() {
        super(...arguments);
        this.preloader = PreloaderTypes.primitives;
    }
    get height() {
        return this.getHeight();
    }
    get width() {
        return this.getWidth();
    }
    get type() {
        return this.preloader;
    }
    get pluginOptionsAsString() {
        return JSON.stringify(this.pluginOptions);
    }
    ngOnInit() {
        this.baseInit();
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
}


/***/ }),

/***/ "../scully-image/src/lib/scully-image.module.ts":
/*!******************************************************!*\
  !*** ../scully-image/src/lib/scully-image.module.ts ***!
  \******************************************************/
/*! exports provided: ScullyImageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScullyImageModule", function() { return ScullyImageModule; });
/* harmony import */ var _scully_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scully-image.component */ "../scully-image/src/lib/scully-image.component.ts");

const exportedComponents = [
    _scully_image_component__WEBPACK_IMPORTED_MODULE_0__["ScullyBlurImageComponent"],
    _scully_image_component__WEBPACK_IMPORTED_MODULE_0__["ScullyTracedImageComponent"],
    _scully_image_component__WEBPACK_IMPORTED_MODULE_0__["ScullyPrimitivesImageComponent"],
];
class ScullyImageModule {
}


/***/ }),

/***/ "../scully-image/src/lib/visibility.service.ts":
/*!*****************************************************!*\
  !*** ../scully-image/src/lib/visibility.service.ts ***!
  \*****************************************************/
/*! exports provided: VisibilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityService", function() { return VisibilityService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");


class VisibilityService {
    constructor(document) {
        this.pageVisible$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(!document.hidden)), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, 'visibilitychange').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((e) => !document.hidden)));
    }
    elementInSight(element) {
        const elementVisible$ = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((observer) => {
            const intersectionObserver = new IntersectionObserver((entries) => {
                observer.next(entries);
            });
            intersectionObserver.observe(element.nativeElement);
            return () => {
                intersectionObserver.disconnect();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])((entries) => entries), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((entry) => entry.isIntersecting), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        const elementInSight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(this.pageVisible$, elementVisible$, (pageVisible, elementVisible) => pageVisible && elementVisible).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        return elementInSight$;
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map