import { Component, Input, HostBinding, } from '@angular/core';
import { isScullyGenerated, } from '@scullyio/ng-lib';
import { interval, combineLatest } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@scullyio/ng-lib";
import * as i2 from "@angular/platform-browser";
import * as i3 from "./visibility.service";
export var PreloaderTypes;
(function (PreloaderTypes) {
    PreloaderTypes["blur"] = "blur";
    PreloaderTypes["tracedSVG"] = "tracedSVG";
    PreloaderTypes["primitives"] = "primitives";
    PreloaderTypes["pixels"] = "pixels";
})(PreloaderTypes || (PreloaderTypes = {}));
const FULL = 'full';
export const SCULLY_IMAGE_URL_MAP = 'scullyImageUrlMap';
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
export class ScullyImageComponent {
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
ScullyImageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyImageComponent, deps: [{ token: i1.TransferStateService }, { token: i2.DomSanitizer }, { token: i3.VisibilityService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ScullyImageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ScullyImageComponent, selector: "scully-image", inputs: { src: "src", pixelHeight: "pixelHeight", pixelWidth: "pixelWidth", fluidMaxWidth: "fluidMaxWidth", fluidMaxHeight: "fluidMaxHeight", lazy: "lazy", pluginOptions: "pluginOptions", preloader: "preloader" }, host: { properties: { "style.height": "this.height", "style.width": "this.width", "attr.data-pixel-width": "this.pixelWidthAsAttr", "attr.data-pixel-height": "this.pixelHeightAsAttr", "attr.data-fluid-max-width": "this.fluidMaxWidthAsAttr", "attr.data-fluid-max-height": "this.fluidMaxHeightAsAttr" } }, usesOnChanges: true, ngImport: i0, template: "\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"preloaded-image-fade-hack\"\n  data-scully-image=\"something\"\n  [src]=\"preloadedSrc\"\n/>\n<img\n  [style.height]=\"getHeight()\"\n  [style.width]=\"getWidth()\"\n  [class.loaded]=\"imageLoaded\"\n  class=\"loaded-image\"\n  [src]=\"loadedSrc\"\n  [class.blurred]=\"preloader === PreloaderTypes.blur && !imageLoaded\"\n/>\n", isInline: true, styles: [":host{position:relative;display:block;overflow:hidden}:host img{transition:opacity .3s,filter .3s;width:100%;height:auto}:host .preloaded-image{z-index:3;opacity:1}:host .preloaded-image.loaded{opacity:0}:host .preloaded-image-fade-hack{position:absolute;pointer-events:none;top:0;left:0;z-index:3;opacity:1}:host .preloaded-image-fade-hack.loaded{opacity:0}:host .loaded-image{position:absolute;top:0;left:0;z-index:2;opacity:0}:host .loaded-image.loaded{opacity:1}.blurred{filter:blur(20px)}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ScullyImageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'scully-image',
                    template,
                    styles: [componentStyles],
                }]
        }], ctorParameters: function () { return [{ type: i1.TransferStateService }, { type: i2.DomSanitizer }, { type: i3.VisibilityService }, { type: i0.ElementRef }]; }, propDecorators: { src: [{
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
export class ScullyBlurImageComponent extends ScullyImageComponent {
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
export class ScullyTracedImageComponent extends ScullyImageComponent {
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
export class ScullyPrimitivesImageComponent extends ScullyImageComponent {
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
export class ScullyPixelsImageComponent extends ScullyImageComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2N1bGx5LWltYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NjdWxseS1pbWFnZS9zcmMvbGliL3NjdWxseS1pbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBRUwsV0FBVyxHQUdaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFFTCxpQkFBaUIsR0FFbEIsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBb0IsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLE1BQU0sRUFBYSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFekQsTUFBTSxDQUFOLElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN4QiwrQkFBYSxDQUFBO0lBQ2IseUNBQXVCLENBQUE7SUFDdkIsMkNBQXlCLENBQUE7SUFDekIsbUNBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUxXLGNBQWMsS0FBZCxjQUFjLFFBS3pCO0FBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBa0RwQixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQztBQUV4RCxNQUFNLFFBQVEsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkJoQixDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0R2QixDQUFDO0FBT0YsTUFBTSxPQUFPLG9CQUFvQjtJQW1GL0IsWUFDVSxhQUFtQyxFQUNuQyxTQUF1QixFQUN2QixpQkFBb0MsRUFDcEMsVUFBc0I7UUFIdEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDdkIsc0JBQWlCLEdBQWpCLGlC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QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVE7b0JBQ1IsTUFBTSxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUMxQjs4QkFNQyxTQUFTO3NCQURSLEtBQUs7Z0JBSUYsTUFBTTtzQkFEVCxXQUFXO3VCQUFDLGNBQWM7Z0JBTXZCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxhQUFhO2dCQU10QixJQUFJO3NCQURQLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQU16QixxQkFBcUI7c0JBRHhCLFdBQVc7dUJBQUMsMEJBQTBCO2dCQU1uQyxnQkFBZ0I7c0JBRG5CLFdBQVc7dUJBQUMsdUJBQXVCO2dCQU1oQyxpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsd0JBQXdCO2dCQU1qQyxtQkFBbUI7c0JBRHRCLFdBQVc7dUJBQUMsMkJBQTJCO2dCQU1wQyxvQkFBb0I7c0JBRHZCLFdBQVc7dUJBQUMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlzaWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuL3Zpc2liaWxpdHkuc2VydmljZSc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgSG9zdEJpbmRpbmcsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7XG4gIGlzU2N1bGx5UnVubmluZyxcbiAgaXNTY3VsbHlHZW5lcmF0ZWQsXG4gIFRyYW5zZmVyU3RhdGVTZXJ2aWNlLFxufSBmcm9tICdAc2N1bGx5aW8vbmctbGliJztcbmltcG9ydCB7IGludGVydmFsLCBjb21iaW5lTGF0ZXN0LCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGVudW0gUHJlbG9hZGVyVHlwZXMge1xuICBibHVyID0gJ2JsdXInLFxuICB0cmFjZWRTVkcgPSAndHJhY2VkU1ZHJyxcbiAgcHJpbWl0aXZlcyA9ICdwcmltaXRpdmVzJyxcbiAgcGl4ZWxzID0gJ3BpeGVscycsXG59XG5cbmNvbnN0IEZVTEwgPSAnZnVsbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgYmx1ck9wdGlvbnMge1xuICB3aWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBQcmltaXRpdmVzU2hhcGVzID1cbiAgfCAndHJpYW5nbGUnXG4gIHwgJ2VsbGlwc2UnXG4gIHwgJ3JvdGF0ZWQtZWxsaXBzZSdcbiAgfCAncmVjdGFuZ2xlJ1xuICB8ICdyb3RhdGVkUmVjdGFuZ2xlJ1xuICB8ICdyYW5kb20nO1xuXG5leHBvcnQgaW50ZXJmYWNlIHByaW1pdGl2ZXNPcHRpb25zIHtcbiAgbnVtU3RlcHM/OiBudW1iZXI7IC8vIDEgLSAxMDAwLCBkZWZhdWx0IDIwMFxuICBtaW5FbmVyZ3k/OiBudW1iZXI7IC8vIDAtMVxuICBzaGFwZUFscGhhPzogbnVtYmVyOyAvLyAgMC0yNTUgZGVmYXVsdCAxMjhcbiAgc2hhcGVUeXBlPzogUHJpbWl0aXZlc1NoYXBlczsgLy8gZGVmYXVsdCB0cmlhbmdsZVxuICBudW1DYW5kaWRhdGVzPzogbnVtYmVyOyAvLyAxLTMyLCBkZWZhdWx0IDFcbiAgbnVtQ2FuZGlkYXRlU2hhcGVzPzogbnVtYmVyOyAvLyAxMC0xMDAwLCA1MFxuICBudW1DYW5kaWRhdGVNdXRhdGlvbnM/OiBudW1iZXI7IC8vIDEwLTUwMCwgMTAwXG4gIG51bUNhbmRpZGF0ZUV4dHJhcz86IG51bWJlcjsgLy8gMC0xNiwgMFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIHRyYWNlZE9wdGlvbnMge1xuICB0dXJuUG9saWN5PzogdHJhY2VkVHVyblBvbGljaWVzO1xuICB0dXJkU2l6ZT86IG51bWJlcjtcbiAgYWxwaGFNYXg/OiBudW1iZXI7XG4gIG9wdEN1cnZlPzogYm9vbGVhbjtcbiAgb3B0VG9sZXJhbmNlPzogbnVtYmVyO1xuICB0aHJlc2hvbGQ/OiBudW1iZXI7XG4gIGJsYWNrT25XaGl0ZT86IGJvb2xlYW47XG4gIGNvbG9yPzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSB0cmFjZWRUdXJuUG9saWNpZXMgPVxuICB8ICdibGFjaydcbiAgfCAnd2hpdGUnXG4gIHwgJ2xlZnQnXG4gIHwgJ3JpZ2h0J1xuICB8ICdtaW5vcml0eSdcbiAgfCAnbWFqb3JpdHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIHBpeGVsc09wdGlvbnMge1xuICB3aWR0aD86IG51bWJlcjtcbiAgcGl4ZWxTaXplPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgU0NVTExZX0lNQUdFX1VSTF9NQVAgPSAnc2N1bGx5SW1hZ2VVcmxNYXAnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxpbWdcbiAgW3N0eWxlLmhlaWdodF09XCJnZXRIZWlnaHQoKVwiXG4gIFtzdHlsZS53aWR0aF09XCJnZXRXaWR0aCgpXCJcbiAgW2NsYXNzLmJsdXJyZWRdPVwicHJlbG9hZGVyID09PSBQcmVsb2FkZXJUeXBlcy5ibHVyICYmICFpbWFnZUxvYWRlZFwiXG4gIFtjbGFzcy5sb2FkZWRdPVwiaW1hZ2VMb2FkZWRcIlxuICBjbGFzcz1cInByZWxvYWRlZC1pbWFnZVwiXG4gIGRhdGEtc2N1bGx5LWltYWdlPVwic29tZXRoaW5nXCJcbiAgW3NyY109XCJwcmVsb2FkZWRTcmNcIlxuLz5cbjxpbWdcbiAgW3N0eWxlLmhlaWdodF09XCJnZXRIZWlnaHQoKVwiXG4gIFtzdHlsZS53aWR0aF09XCJnZXRXaWR0aCgpXCJcbiAgW2NsYXNzLmJsdXJyZWRdPVwicHJlbG9hZGVyID09PSBQcmVsb2FkZXJUeXBlcy5ibHVyICYmICFpbWFnZUxvYWRlZFwiXG4gIFtjbGFzcy5sb2FkZWRdPVwiaW1hZ2VMb2FkZWRcIlxuICBjbGFzcz1cInByZWxvYWRlZC1pbWFnZS1mYWRlLWhhY2tcIlxuICBkYXRhLXNjdWxseS1pbWFnZT1cInNvbWV0aGluZ1wiXG4gIFtzcmNdPVwicHJlbG9hZGVkU3JjXCJcbi8+XG48aW1nXG4gIFtzdHlsZS5oZWlnaHRdPVwiZ2V0SGVpZ2h0KClcIlxuICBbc3R5bGUud2lkdGhdPVwiZ2V0V2lkdGgoKVwiXG4gIFtjbGFzcy5sb2FkZWRdPVwiaW1hZ2VMb2FkZWRcIlxuICBjbGFzcz1cImxvYWRlZC1pbWFnZVwiXG4gIFtzcmNdPVwibG9hZGVkU3JjXCJcbiAgW2NsYXNzLmJsdXJyZWRdPVwicHJlbG9hZGVyID09PSBQcmVsb2FkZXJUeXBlcy5ibHVyICYmICFpbWFnZUxvYWRlZFwiXG4vPlxuYDtcblxuY29uc3QgY29tcG9uZW50U3R5bGVzID0gYFxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCBpbWcge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCBmaWx0ZXIgMzAwbXM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbjpob3N0IC5wcmVsb2FkZWQtaW1hZ2Uge1xuICB6LWluZGV4OiAzO1xuICBvcGFjaXR5OiAxO1xufVxuXG46aG9zdCAucHJlbG9hZGVkLWltYWdlLmxvYWRlZCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbjpob3N0IC5wcmVsb2FkZWQtaW1hZ2UtZmFkZS1oYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzO1xuICBvcGFjaXR5OiAxO1xufVxuXG46aG9zdCAucHJlbG9hZGVkLWltYWdlLWZhZGUtaGFjay5sb2FkZWQge1xuICBvcGFjaXR5OiAwO1xufVxuXG46aG9zdCAubG9hZGVkLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbjpob3N0IC5sb2FkZWQtaW1hZ2UubG9hZGVkIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmJsdXJyZWQge1xuICBmaWx0ZXI6IGJsdXIoMjBweCk7XG59XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzY3VsbHktaW1hZ2UnLFxuICB0ZW1wbGF0ZSxcbiAgc3R5bGVzOiBbY29tcG9uZW50U3R5bGVzXSxcbn0pXG5leHBvcnQgY2xhc3MgU2N1bGx5SW1hZ2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBzcmMgPSAnJztcblxuICBASW5wdXQoKVxuICBwaXhlbEhlaWdodDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHBpeGVsV2lkdGg6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBmbHVpZE1heFdpZHRoOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZmx1aWRNYXhIZWlnaHQ6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBsYXp5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwbHVnaW5PcHRpb25zOlxuICAgIHwgYmx1ck9wdGlvbnNcbiAgICB8IHByaW1pdGl2ZXNPcHRpb25zXG4gICAgfCB0cmFjZWRPcHRpb25zXG4gICAgfCBwaXhlbHNPcHRpb25zID0ge307XG5cbiAgQElucHV0KClcbiAgcHJlbG9hZGVyID0gUHJlbG9hZGVyVHlwZXMuYmx1cjtcblxuICBQcmVsb2FkZXJUeXBlcyA9IFByZWxvYWRlclR5cGVzO1xuXG4gIGdldEhlaWdodCgpIHtcbiAgICBpZiAodGhpcy5waXhlbEhlaWdodCkge1xuICAgICAgcmV0dXJuIHRoaXMucGl4ZWxIZWlnaHQgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2F1dG8nO1xuICAgIH1cbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGlmICh0aGlzLnBpeGVsV2lkdGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBpeGVsV2lkdGggKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJzEwMCUnO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXBpeGVsLXdpZHRoJylcbiAgZ2V0IHBpeGVsV2lkdGhBc0F0dHIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGl4ZWxXaWR0aDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXBpeGVsLWhlaWdodCcpXG4gIGdldCBwaXhlbEhlaWdodEFzQXR0cigpIHtcbiAgICByZXR1cm4gdGhpcy5waXhlbEhlaWdodDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLWZsdWlkLW1heC13aWR0aCcpXG4gIGdldCBmbHVpZE1heFdpZHRoQXNBdHRyKCkge1xuICAgIHJldHVybiB0aGlzLmZsdWlkTWF4V2lkdGg7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1mbHVpZC1tYXgtaGVpZ2h0JylcbiAgZ2V0IGZsdWlkTWF4SGVpZ2h0QXNBdHRyKCkge1xuICAgIHJldHVybiB0aGlzLmZsdWlkTWF4SGVpZ2h0O1xuICB9XG5cbiAgaW1hZ2VMb2FkZWQgPSBmYWxzZTtcbiAgc2N1bGx5SW1hZ2VVcmxNYXAgPSB7fTtcbiAgcHJlbG9hZGVkU3JjOiBhbnkgPSAnJztcbiAgbG9hZGVkU3JjID0gJyc7XG4gIGVsZW1lbnRJblNpZ2h0JDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIHZpc2liaWxpdHlTZXJ2aWNlOiBWaXNpYmlsaXR5U2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIGJhc2VJbml0KCk6IHZvaWQge1xuICAgIGlmIChpc1NjdWxseUdlbmVyYXRlZCgpKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2N1bGx5IGlzIGdlbmVyYXRlZCcpO1xuXG4gICAgICB0aGlzLnRyYW5zZmVyU3RhdGVcbiAgICAgICAgLmdldFN0YXRlKFNDVUxMWV9JTUFHRV9VUkxfTUFQKVxuICAgICAgICAuc3Vic2NyaWJlKChzY3VsbHlJbWFnZVVybE1hcCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzY3VsbHlJbWFnZVVybE1hcCcsIHsgc2N1bGx5SW1hZ2VVcmxNYXAgfSk7XG4gICAgICAgICAgdGhpcy5zY3VsbHlJbWFnZVVybE1hcCA9IHNjdWxseUltYWdlVXJsTWFwO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdwbHVnaW5PcHRpb25zJywgdGhpcy5wbHVnaW5PcHRpb25zKTtcbiAgICAgICAgICB0aGlzLnByZWxvYWRlZFNyYyA9XG4gICAgICAgICAgICBzY3VsbHlJbWFnZVVybE1hcFt0aGlzLmdldEltYWdlS2V5KHRoaXMucHJlbG9hZGVyKV07XG4gICAgICAgICAgaWYgKHRoaXMucHJlbG9hZGVyID09PSBQcmVsb2FkZXJUeXBlcy5wcmltaXRpdmVzKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRlZFNyYyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChcbiAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkZWRTcmNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZWxvYWRlciA9PT0gUHJlbG9hZGVyVHlwZXMudHJhY2VkU1ZHKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRlZFNyYyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChcbiAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkZWRTcmNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZWxvYWRlciA9PT0gUHJlbG9hZGVyVHlwZXMucGl4ZWxzKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRlZFNyYyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChcbiAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkZWRTcmNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZ1bGxTaXplSW1hZ2VVcmwgPVxuICAgICAgICAgICAgc2N1bGx5SW1hZ2VVcmxNYXBbdGhpcy5nZXRJbWFnZUtleShGVUxMKV0gfHwgdGhpcy5zcmM7XG5cbiAgICAgICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRJblNpZ2h0JCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICAgIGludGVydmFsKDIwMDApLFxuICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHlTZXJ2aWNlLmVsZW1lbnRJblNpZ2h0KHRoaXMuZWxlbWVudFJlZiksXG4gICAgICAgICAgICAgIChjb3VudGVyLCB2aXNpYmxlKSA9PiB2aXNpYmxlXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcigodmlzaWJsZTogYm9vbGVhbikgPT4gdmlzaWJsZSksXG4gICAgICAgICAgICAgICAgdGFrZSgxKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hJbWFnZShmdWxsU2l6ZUltYWdlVXJsKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hJbWFnZShmdWxsU2l6ZUltYWdlVXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyYW5zZmVyU3RhdGUuc2V0U3RhdGUoU0NVTExZX0lNQUdFX1VSTF9NQVAsIHt9KTtcbiAgICB9XG4gIH1cblxuICBmZXRjaEltYWdlKGZ1bGxTaXplSW1hZ2VVcmwpIHtcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nRWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIGhhcyBiZWVuIGxvYWRlZCcpO1xuICAgICAgICB0aGlzLmxvYWRlZFNyYyA9IGZ1bGxTaXplSW1hZ2VVcmw7XG4gICAgICAgIHRoaXMuaW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgfSwgMzAwKTtcbiAgICB9O1xuICAgIGltZ0VsZW1lbnQuc3JjID0gZnVsbFNpemVJbWFnZVVybDtcbiAgICB0aGlzLmxvYWRlZFNyYyA9IGZ1bGxTaXplSW1hZ2VVcmw7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gaWYgKGNoYW5nZXMuc3JjICYmIGNoYW5nZXMuc3JjICE9PSAnJykge1xuICAgIC8vIH1cbiAgICAvLyBpZiAoaXNTY3VsbHlHZW5lcmF0ZWQoKSkge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3NjdWxseSBpcyBnZW5lcmF0ZWQnKTtcbiAgICAvLyAgIHRoaXMuZ2V0U3RhdGVBc1Byb21pc2UoKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3NldHRpbmcgc3RhdGUnLCB0aGlzLnNyYyk7XG4gICAgLy8gICB0aGlzLnRyYW5zZmVyU3RhdGUuc2V0U3RhdGUoJ3NyYycsIHsgc3JjOiB0aGlzLnNyYyB9KTtcbiAgICAvLyB9XG4gIH1cblxuICBiYXNlT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRJblNpZ2h0JCkge1xuICAgICAgdGhpcy5lbGVtZW50SW5TaWdodCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXRJbWFnZUtleShwcmVsb2FkZXJUeXBlID0gJycpIHtcbiAgICBjb25zdCBrZXkgPVxuICAgICAgdGhpcy5zcmMgK1xuICAgICAgcHJlbG9hZGVyVHlwZSArXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbk9wdGlvbnMpICtcbiAgICAgICh0aGlzLnBpeGVsSGVpZ2h0IHx8IDApICtcbiAgICAgICh0aGlzLnBpeGVsV2lkdGggfHwgMCkgK1xuICAgICAgKHRoaXMuZmx1aWRNYXhIZWlnaHQgfHwgMCkgK1xuICAgICAgKHRoaXMuZmx1aWRNYXhXaWR0aCB8fCAwKTtcbiAgICBjb25zb2xlLmxvZyh7IGtleSB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjdWxseS1ibHVyLWltYWdlJyxcbiAgdGVtcGxhdGUsXG4gIHN0eWxlczogW2NvbXBvbmVudFN0eWxlc10sXG59KVxuZXhwb3J0IGNsYXNzIFNjdWxseUJsdXJJbWFnZUNvbXBvbmVudFxuICBleHRlbmRzIFNjdWxseUltYWdlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveVxue1xuICBASW5wdXQoKVxuICBwcmVsb2FkZXIgPSBQcmVsb2FkZXJUeXBlcy5ibHVyO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXR5cGUnKVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVsb2FkZXI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1wbHVnaW4tb3B0aW9ucycpXG4gIGdldCBwbHVnaW5PcHRpb25zQXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luT3B0aW9ucyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1waXhlbC13aWR0aCcpXG4gIGdldCBwaXhlbFdpZHRoQXNBdHRyKCkge1xuICAgIHJldHVybiB0aGlzLnBpeGVsV2lkdGg7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1waXhlbC1oZWlnaHQnKVxuICBnZXQgcGl4ZWxIZWlnaHRBc0F0dHIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGl4ZWxIZWlnaHQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1mbHVpZC1tYXgtd2lkdGgnKVxuICBnZXQgZmx1aWRNYXhXaWR0aEFzQXR0cigpIHtcbiAgICByZXR1cm4gdGhpcy5mbHVpZE1heFdpZHRoO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtZmx1aWQtbWF4LWhlaWdodCcpXG4gIGdldCBmbHVpZE1heEhlaWdodEFzQXR0cigpIHtcbiAgICByZXR1cm4gdGhpcy5mbHVpZE1heEhlaWdodDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmFzZUluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjdWxseS10cmFjZWQtaW1hZ2UnLFxuICB0ZW1wbGF0ZSxcbiAgc3R5bGVzOiBbY29tcG9uZW50U3R5bGVzXSxcbn0pXG5leHBvcnQgY2xhc3MgU2N1bGx5VHJhY2VkSW1hZ2VDb21wb25lbnRcbiAgZXh0ZW5kcyBTY3VsbHlJbWFnZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3lcbntcbiAgQElucHV0KClcbiAgcHJlbG9hZGVyID0gUHJlbG9hZGVyVHlwZXMudHJhY2VkU1ZHO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXR5cGUnKVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVsb2FkZXI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1wbHVnaW4tb3B0aW9ucycpXG4gIGdldCBwbHVnaW5PcHRpb25zQXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luT3B0aW9ucyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1waXhlbC13aWR0aCcpXG4gIGdldCBwaXhlbFdpZHRoQXNBdHRyKCkge1xuICAgIHJldHVybiB0aGlzLnBpeGVsV2lkdGg7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1waXhlbC1oZWlnaHQnKVxuICBnZXQgcGl4ZWxIZWlnaHRBc0F0dHIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGl4ZWxIZWlnaHQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1mbHVpZC1tYXgtd2lkdGgnKVxuICBnZXQgZmx1aWRNYXhXaWR0aEFzQXR0cigpIHtcbiAgICByZXR1cm4gdGhpcy5mbHVpZE1heFdpZHRoO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtZmx1aWQtbWF4LWhlaWdodCcpXG4gIGdldCBmbHVpZE1heEhlaWdodEFzQXR0cigpIHtcbiAgICByZXR1cm4gdGhpcy5mbHVpZE1heEhlaWdodDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmFzZUluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjdWxseS1wcmltaXRpdmVzLWltYWdlJyxcbiAgdGVtcGxhdGUsXG4gIHN0eWxlczogW2NvbXBvbmVudFN0eWxlc10sXG59KVxuZXhwb3J0IGNsYXNzIFNjdWxseVByaW1pdGl2ZXNJbWFnZUNvbXBvbmVudFxuICBleHRlbmRzIFNjdWxseUltYWdlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveVxue1xuICBASW5wdXQoKVxuICBwcmVsb2FkZXIgPSBQcmVsb2FkZXJUeXBlcy5wcmltaXRpdmVzO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXR5cGUnKVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVsb2FkZXI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1wbHVnaW4tb3B0aW9ucycpXG4gIGdldCBwbHVnaW5PcHRpb25zQXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luT3B0aW9ucyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1waXhlbC13aWR0aCcpXG4gIGdldCBwaXhlbFdpZHRoQXNBdHRyKCkge1xuICAgIHJldHVybiB0aGlzLnBpeGVsV2lkdGg7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1waXhlbC1oZWlnaHQnKVxuICBnZXQgcGl4ZWxIZWlnaHRBc0F0dHIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGl4ZWxIZWlnaHQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1mbHVpZC1tYXgtd2lkdGgnKVxuICBnZXQgZmx1aWRNYXhXaWR0aEFzQXR0cigpIHtcbiAgICByZXR1cm4gdGhpcy5mbHVpZE1heFdpZHRoO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtZmx1aWQtbWF4LWhlaWdodCcpXG4gIGdldCBmbHVpZE1heEhlaWdodEFzQXR0cigpIHtcbiAgICByZXR1cm4gdGhpcy5mbHVpZE1heEhlaWdodDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmFzZUluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjdWxseS1waXhlbHMtaW1hZ2UnLFxuICB0ZW1wbGF0ZSxcbiAgc3R5bGVzOiBbY29tcG9uZW50U3R5bGVzXSxcbn0pXG5leHBvcnQgY2xhc3MgU2N1bGx5UGl4ZWxzSW1hZ2VDb21wb25lbnRcbiAgZXh0ZW5kcyBTY3VsbHlJbWFnZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3lcbntcbiAgQElucHV0KClcbiAgcHJlbG9hZGVyID0gUHJlbG9hZGVyVHlwZXMucGl4ZWxzO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXR5cGUnKVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVsb2FkZXI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1wbHVnaW4tb3B0aW9ucycpXG4gIGdldCBwbHVnaW5PcHRpb25zQXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luT3B0aW9ucyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1waXhlbC13aWR0aCcpXG4gIGdldCBwaXhlbFdpZHRoQXNBdHRyKCkge1xuICAgIHJldHVybiB0aGlzLnBpeGVsV2lkdGg7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1waXhlbC1oZWlnaHQnKVxuICBnZXQgcGl4ZWxIZWlnaHRBc0F0dHIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGl4ZWxIZWlnaHQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1mbHVpZC1tYXgtd2lkdGgnKVxuICBnZXQgZmx1aWRNYXhXaWR0aEFzQXR0cigpIHtcbiAgICByZXR1cm4gdGhpcy5mbHVpZE1heFdpZHRoO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtZmx1aWQtbWF4LWhlaWdodCcpXG4gIGdldCBmbHVpZE1heEhlaWdodEFzQXR0cigpIHtcbiAgICByZXR1cm4gdGhpcy5mbHVpZE1heEhlaWdodDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmFzZUluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=