import * as i0 from '@angular/core';
import { Injectable, Inject, Component, Input, HostBinding, NgModule } from '@angular/core';
import * as i1 from '@scullyio/ng-lib';
import { isScullyGenerated } from '@scullyio/ng-lib';
import { concat, defer, of, fromEvent, Observable, combineLatest, interval } from 'rxjs';
import { map, flatMap, distinctUntilChanged, filter, take } from 'rxjs/operators';
import * as i2 from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

class VisibilityService {
    constructor(document) {
        this.pageVisible$ = concat(defer(() => of(!document.hidden)), fromEvent(document, 'visibilitychange').pipe(map((e) => !document.hidden)));
    }
    elementInSight(element) {
        const elementVisible$ = Observable.create((observer) => {
            const intersectionObserver = new IntersectionObserver((entries) => {
                observer.next(entries);
            });
            intersectionObserver.observe(element.nativeElement);
            return () => {
                intersectionObserver.disconnect();
            };
        }).pipe(flatMap((entries) => entries), map((entry) => entry.isIntersecting), distinctUntilChanged());
        const elementInSight$ = combineLatest(this.pageVisible$, elementVisible$, (pageVisible, elementVisible) => pageVisible && elementVisible).pipe(distinctUntilChanged());
        return elementInSight$;
    }
}
VisibilityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: VisibilityService, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
VisibilityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: VisibilityService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: VisibilityService, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }];
    } });

var PreloaderTypes;
(function (PreloaderTypes) {
    PreloaderTypes["blur"] = "blur";
    PreloaderTypes["tracedSVG"] = "tracedSVG";
    PreloaderTypes["primitives"] = "primitives";
    PreloaderTypes["pixels"] = "pixels";
})(PreloaderTypes || (PreloaderTypes = {}));
const FULL = 'full';
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
  pointer-events: none;
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
    get pixelWidthAsAttr() {
        return this.pixelWidth;
    }
    get pixelHeightAsAttr() {
        return this.pixelHeight;
    }
    get fluidMaxWidthAsAttr() {
        return this.fluidMaxWidth;
    }
    get fluidMaxHeightAsAttr() {
        return this.fluidMaxHeight;
    }
    baseInit() {
        if (isScullyGenerated()) {
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
                else if (this.preloader === PreloaderTypes.pixels) {
                    this.preloadedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.preloadedSrc);
                }
                const fullSizeImageUrl = scullyImageUrlMap[this.getImageKey(FULL)] || this.src;
                if (this.lazy) {
                    this.elementInSight$ = combineLatest(interval(2000), this.visibilityService.elementInSight(this.elementRef), (counter, visible) => visible)
                        .pipe(filter((visible) => visible), take(1))
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
ScullyImageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyImageComponent, deps: [{ token: i1.TransferStateService }, { token: i2.DomSanitizer }, { token: VisibilityService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ScullyImageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ScullyImageComponent, selector: "scully-image", inputs: { src: "src", pixelHeight: "pixelHeight", pixelWidth: "pixelWidth", fluidMaxWidth: "fluidMaxWidth", fluidMaxHeight: "fluidMaxHeight", lazy: "lazy", pluginOptions: "pluginOptions", preloader: "preloader" }, host: { properties: { "style.height": "this.height", "style.width": "this.width", "attr.data-pixel-width": "this.pixelWidthAsAttr", "attr.data-pixel-height": "this.pixelHeightAsAttr", "attr.data-fluid-max-width": "this.fluidMaxWidthAsAttr", "attr.data-fluid-max-height": "this.fluidMaxHeightAsAttr" } }, usesOnChanges: true, ngImport: i0, template: "\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image-fade-hack\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"loaded-image\"\n  [src]=\"loadedSrc\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n/>\n", isInline: true, styles: [":host{position:relative;display:block;overflow:hidden}:host img{transition:opacity .3s,filter .3s;width:100%;height:auto}:host .preloaded-image{z-index:3;opacity:1}:host .preloaded-image.loaded{opacity:0}:host .preloaded-image-fade-hack{position:absolute;pointer-events:none;top:0;left:0;z-index:3;opacity:1}:host .preloaded-image-fade-hack.loaded{opacity:0}:host .loaded-image{position:absolute;top:0;left:0;z-index:2;opacity:0}:host .loaded-image.loaded{opacity:1}.blurred{filter:blur(20px)}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyImageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'scully-image',
                    template,
                    styles: [componentStyles],
                }]
        }], ctorParameters: function () { return [{ type: i1.TransferStateService }, { type: i2.DomSanitizer }, { type: VisibilityService }, { type: i0.ElementRef }]; }, propDecorators: { src: [{
                type: Input
            }], pixelHeight: [{
                type: Input
            }], pixelWidth: [{
                type: Input
            }], fluidMaxWidth: [{
                type: Input
            }], fluidMaxHeight: [{
                type: Input
            }], lazy: [{
                type: Input
            }], pluginOptions: [{
                type: Input
            }], preloader: [{
                type: Input
            }], height: [{
                type: HostBinding,
                args: ['style.height']
            }], width: [{
                type: HostBinding,
                args: ['style.width']
            }], pixelWidthAsAttr: [{
                type: HostBinding,
                args: ['attr.data-pixel-width']
            }], pixelHeightAsAttr: [{
                type: HostBinding,
                args: ['attr.data-pixel-height']
            }], fluidMaxWidthAsAttr: [{
                type: HostBinding,
                args: ['attr.data-fluid-max-width']
            }], fluidMaxHeightAsAttr: [{
                type: HostBinding,
                args: ['attr.data-fluid-max-height']
            }] } });
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
    get pixelWidthAsAttr() {
        return this.pixelWidth;
    }
    get pixelHeightAsAttr() {
        return this.pixelHeight;
    }
    get fluidMaxWidthAsAttr() {
        return this.fluidMaxWidth;
    }
    get fluidMaxHeightAsAttr() {
        return this.fluidMaxHeight;
    }
    ngOnInit() {
        this.baseInit();
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
}
ScullyBlurImageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyBlurImageComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ScullyBlurImageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ScullyBlurImageComponent, selector: "scully-blur-image", inputs: { preloader: "preloader" }, host: { properties: { "style.height": "this.height", "style.width": "this.width", "attr.data-type": "this.type", "attr.data-plugin-options": "this.pluginOptionsAsString", "attr.data-pixel-width": "this.pixelWidthAsAttr", "attr.data-pixel-height": "this.pixelHeightAsAttr", "attr.data-fluid-max-width": "this.fluidMaxWidthAsAttr", "attr.data-fluid-max-height": "this.fluidMaxHeightAsAttr" } }, usesInheritance: true, ngImport: i0, template: "\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image-fade-hack\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"loaded-image\"\n  [src]=\"loadedSrc\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n/>\n", isInline: true, styles: [":host{position:relative;display:block;overflow:hidden}:host img{transition:opacity .3s,filter .3s;width:100%;height:auto}:host .preloaded-image{z-index:3;opacity:1}:host .preloaded-image.loaded{opacity:0}:host .preloaded-image-fade-hack{position:absolute;pointer-events:none;top:0;left:0;z-index:3;opacity:1}:host .preloaded-image-fade-hack.loaded{opacity:0}:host .loaded-image{position:absolute;top:0;left:0;z-index:2;opacity:0}:host .loaded-image.loaded{opacity:1}.blurred{filter:blur(20px)}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyBlurImageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'scully-blur-image',
                    template,
                    styles: [componentStyles],
                }]
        }], propDecorators: { preloader: [{
                type: Input
            }], height: [{
                type: HostBinding,
                args: ['style.height']
            }], width: [{
                type: HostBinding,
                args: ['style.width']
            }], type: [{
                type: HostBinding,
                args: ['attr.data-type']
            }], pluginOptionsAsString: [{
                type: HostBinding,
                args: ['attr.data-plugin-options']
            }], pixelWidthAsAttr: [{
                type: HostBinding,
                args: ['attr.data-pixel-width']
            }], pixelHeightAsAttr: [{
                type: HostBinding,
                args: ['attr.data-pixel-height']
            }], fluidMaxWidthAsAttr: [{
                type: HostBinding,
                args: ['attr.data-fluid-max-width']
            }], fluidMaxHeightAsAttr: [{
                type: HostBinding,
                args: ['attr.data-fluid-max-height']
            }] } });
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
    get pixelWidthAsAttr() {
        return this.pixelWidth;
    }
    get pixelHeightAsAttr() {
        return this.pixelHeight;
    }
    get fluidMaxWidthAsAttr() {
        return this.fluidMaxWidth;
    }
    get fluidMaxHeightAsAttr() {
        return this.fluidMaxHeight;
    }
    ngOnInit() {
        this.baseInit();
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
}
ScullyTracedImageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyTracedImageComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ScullyTracedImageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ScullyTracedImageComponent, selector: "scully-traced-image", inputs: { preloader: "preloader" }, host: { properties: { "style.height": "this.height", "style.width": "this.width", "attr.data-type": "this.type", "attr.data-plugin-options": "this.pluginOptionsAsString", "attr.data-pixel-width": "this.pixelWidthAsAttr", "attr.data-pixel-height": "this.pixelHeightAsAttr", "attr.data-fluid-max-width": "this.fluidMaxWidthAsAttr", "attr.data-fluid-max-height": "this.fluidMaxHeightAsAttr" } }, usesInheritance: true, ngImport: i0, template: "\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image-fade-hack\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"loaded-image\"\n  [src]=\"loadedSrc\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n/>\n", isInline: true, styles: [":host{position:relative;display:block;overflow:hidden}:host img{transition:opacity .3s,filter .3s;width:100%;height:auto}:host .preloaded-image{z-index:3;opacity:1}:host .preloaded-image.loaded{opacity:0}:host .preloaded-image-fade-hack{position:absolute;pointer-events:none;top:0;left:0;z-index:3;opacity:1}:host .preloaded-image-fade-hack.loaded{opacity:0}:host .loaded-image{position:absolute;top:0;left:0;z-index:2;opacity:0}:host .loaded-image.loaded{opacity:1}.blurred{filter:blur(20px)}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyTracedImageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'scully-traced-image',
                    template,
                    styles: [componentStyles],
                }]
        }], propDecorators: { preloader: [{
                type: Input
            }], height: [{
                type: HostBinding,
                args: ['style.height']
            }], width: [{
                type: HostBinding,
                args: ['style.width']
            }], type: [{
                type: HostBinding,
                args: ['attr.data-type']
            }], pluginOptionsAsString: [{
                type: HostBinding,
                args: ['attr.data-plugin-options']
            }], pixelWidthAsAttr: [{
                type: HostBinding,
                args: ['attr.data-pixel-width']
            }], pixelHeightAsAttr: [{
                type: HostBinding,
                args: ['attr.data-pixel-height']
            }], fluidMaxWidthAsAttr: [{
                type: HostBinding,
                args: ['attr.data-fluid-max-width']
            }], fluidMaxHeightAsAttr: [{
                type: HostBinding,
                args: ['attr.data-fluid-max-height']
            }] } });
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
    get pixelWidthAsAttr() {
        return this.pixelWidth;
    }
    get pixelHeightAsAttr() {
        return this.pixelHeight;
    }
    get fluidMaxWidthAsAttr() {
        return this.fluidMaxWidth;
    }
    get fluidMaxHeightAsAttr() {
        return this.fluidMaxHeight;
    }
    ngOnInit() {
        this.baseInit();
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
}
ScullyPrimitivesImageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyPrimitivesImageComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ScullyPrimitivesImageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ScullyPrimitivesImageComponent, selector: "scully-primitives-image", inputs: { preloader: "preloader" }, host: { properties: { "style.height": "this.height", "style.width": "this.width", "attr.data-type": "this.type", "attr.data-plugin-options": "this.pluginOptionsAsString", "attr.data-pixel-width": "this.pixelWidthAsAttr", "attr.data-pixel-height": "this.pixelHeightAsAttr", "attr.data-fluid-max-width": "this.fluidMaxWidthAsAttr", "attr.data-fluid-max-height": "this.fluidMaxHeightAsAttr" } }, usesInheritance: true, ngImport: i0, template: "\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image-fade-hack\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"loaded-image\"\n  [src]=\"loadedSrc\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n/>\n", isInline: true, styles: [":host{position:relative;display:block;overflow:hidden}:host img{transition:opacity .3s,filter .3s;width:100%;height:auto}:host .preloaded-image{z-index:3;opacity:1}:host .preloaded-image.loaded{opacity:0}:host .preloaded-image-fade-hack{position:absolute;pointer-events:none;top:0;left:0;z-index:3;opacity:1}:host .preloaded-image-fade-hack.loaded{opacity:0}:host .loaded-image{position:absolute;top:0;left:0;z-index:2;opacity:0}:host .loaded-image.loaded{opacity:1}.blurred{filter:blur(20px)}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyPrimitivesImageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'scully-primitives-image',
                    template,
                    styles: [componentStyles],
                }]
        }], propDecorators: { preloader: [{
                type: Input
            }], height: [{
                type: HostBinding,
                args: ['style.height']
            }], width: [{
                type: HostBinding,
                args: ['style.width']
            }], type: [{
                type: HostBinding,
                args: ['attr.data-type']
            }], pluginOptionsAsString: [{
                type: HostBinding,
                args: ['attr.data-plugin-options']
            }], pixelWidthAsAttr: [{
                type: HostBinding,
                args: ['attr.data-pixel-width']
            }], pixelHeightAsAttr: [{
                type: HostBinding,
                args: ['attr.data-pixel-height']
            }], fluidMaxWidthAsAttr: [{
                type: HostBinding,
                args: ['attr.data-fluid-max-width']
            }], fluidMaxHeightAsAttr: [{
                type: HostBinding,
                args: ['attr.data-fluid-max-height']
            }] } });
class ScullyPixelsImageComponent extends ScullyImageComponent {
    constructor() {
        super(...arguments);
        this.preloader = PreloaderTypes.pixels;
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
    get pixelWidthAsAttr() {
        return this.pixelWidth;
    }
    get pixelHeightAsAttr() {
        return this.pixelHeight;
    }
    get fluidMaxWidthAsAttr() {
        return this.fluidMaxWidth;
    }
    get fluidMaxHeightAsAttr() {
        return this.fluidMaxHeight;
    }
    ngOnInit() {
        this.baseInit();
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
}
ScullyPixelsImageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyPixelsImageComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ScullyPixelsImageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ScullyPixelsImageComponent, selector: "scully-pixels-image", inputs: { preloader: "preloader" }, host: { properties: { "style.height": "this.height", "style.width": "this.width", "attr.data-type": "this.type", "attr.data-plugin-options": "this.pluginOptionsAsString", "attr.data-pixel-width": "this.pixelWidthAsAttr", "attr.data-pixel-height": "this.pixelHeightAsAttr", "attr.data-fluid-max-width": "this.fluidMaxWidthAsAttr", "attr.data-fluid-max-height": "this.fluidMaxHeightAsAttr" } }, usesInheritance: true, ngImport: i0, template: "\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image-fade-hack\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"loaded-image\"\n  [src]=\"loadedSrc\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n/>\n", isInline: true, styles: [":host{position:relative;display:block;overflow:hidden}:host img{transition:opacity .3s,filter .3s;width:100%;height:auto}:host .preloaded-image{z-index:3;opacity:1}:host .preloaded-image.loaded{opacity:0}:host .preloaded-image-fade-hack{position:absolute;pointer-events:none;top:0;left:0;z-index:3;opacity:1}:host .preloaded-image-fade-hack.loaded{opacity:0}:host .loaded-image{position:absolute;top:0;left:0;z-index:2;opacity:0}:host .loaded-image.loaded{opacity:1}.blurred{filter:blur(20px)}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyPixelsImageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'scully-pixels-image',
                    template,
                    styles: [componentStyles],
                }]
        }], propDecorators: { preloader: [{
                type: Input
            }], height: [{
                type: HostBinding,
                args: ['style.height']
            }], width: [{
                type: HostBinding,
                args: ['style.width']
            }], type: [{
                type: HostBinding,
                args: ['attr.data-type']
            }], pluginOptionsAsString: [{
                type: HostBinding,
                args: ['attr.data-plugin-options']
            }], pixelWidthAsAttr: [{
                type: HostBinding,
                args: ['attr.data-pixel-width']
            }], pixelHeightAsAttr: [{
                type: HostBinding,
                args: ['attr.data-pixel-height']
            }], fluidMaxWidthAsAttr: [{
                type: HostBinding,
                args: ['attr.data-fluid-max-width']
            }], fluidMaxHeightAsAttr: [{
                type: HostBinding,
                args: ['attr.data-fluid-max-height']
            }] } });

const exportedComponents = [
    ScullyBlurImageComponent,
    ScullyTracedImageComponent,
    ScullyPrimitivesImageComponent,
    ScullyPixelsImageComponent,
];
class ScullyImageModule {
}
ScullyImageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyImageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScullyImageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyImageModule, declarations: [ScullyImageComponent, ScullyBlurImageComponent,
        ScullyTracedImageComponent,
        ScullyPrimitivesImageComponent,
        ScullyPixelsImageComponent], imports: [HttpClientModule], exports: [ScullyBlurImageComponent,
        ScullyTracedImageComponent,
        ScullyPrimitivesImageComponent,
        ScullyPixelsImageComponent] });
ScullyImageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyImageModule, providers: [VisibilityService], imports: [[HttpClientModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyImageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ScullyImageComponent, ...exportedComponents],
                    imports: [HttpClientModule],
                    exports: [...exportedComponents],
                    providers: [VisibilityService],
                }]
        }] });

/*
 * Public API Surface of scully-image
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PreloaderTypes, SCULLY_IMAGE_URL_MAP, ScullyBlurImageComponent, ScullyImageComponent, ScullyImageModule, ScullyPixelsImageComponent, ScullyPrimitivesImageComponent, ScullyTracedImageComponent };
//# sourceMappingURL=scully-image.mjs.map
