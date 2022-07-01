import { VisibilityService } from './visibility.service';
import { OnInit, OnChanges, ElementRef, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TransferStateService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare enum PreloaderTypes {
    blur = "blur",
    tracedSVG = "tracedSVG",
    primitives = "primitives",
    pixels = "pixels"
}
export interface blurOptions {
    width: number;
}
export declare type PrimitivesShapes = 'triangle' | 'ellipse' | 'rotated-ellipse' | 'rectangle' | 'rotatedRectangle' | 'random';
export interface primitivesOptions {
    numSteps?: number;
    minEnergy?: number;
    shapeAlpha?: number;
    shapeType?: PrimitivesShapes;
    numCandidates?: number;
    numCandidateShapes?: number;
    numCandidateMutations?: number;
    numCandidateExtras?: number;
}
export interface tracedOptions {
    turnPolicy?: tracedTurnPolicies;
    turdSize?: number;
    alphaMax?: number;
    optCurve?: boolean;
    optTolerance?: number;
    threshold?: number;
    blackOnWhite?: boolean;
    color?: string;
    background?: string;
}
export declare type tracedTurnPolicies = 'black' | 'white' | 'left' | 'right' | 'minority' | 'majority';
export interface pixelsOptions {
    width?: number;
    pixelSize?: number;
}
export declare const SCULLY_IMAGE_URL_MAP = "scullyImageUrlMap";
export declare class ScullyImageComponent {
    private transferState;
    private sanitizer;
    private visibilityService;
    private elementRef;
    src: string;
    pixelHeight: number;
    pixelWidth: number;
    fluidMaxWidth: number;
    fluidMaxHeight: number;
    lazy: boolean;
    pluginOptions: blurOptions | primitivesOptions | tracedOptions | pixelsOptions;
    preloader: PreloaderTypes;
    PreloaderTypes: typeof PreloaderTypes;
    getHeight(): string;
    getWidth(): string;
    get height(): string;
    get width(): string;
    get pixelWidthAsAttr(): number;
    get pixelHeightAsAttr(): number;
    get fluidMaxWidthAsAttr(): number;
    get fluidMaxHeightAsAttr(): number;
    imageLoaded: boolean;
    scullyImageUrlMap: {};
    preloadedSrc: any;
    loadedSrc: string;
    elementInSight$: Subscription;
    constructor(transferState: TransferStateService, sanitizer: DomSanitizer, visibilityService: VisibilityService, elementRef: ElementRef);
    baseInit(): void;
    fetchImage(fullSizeImageUrl: any): void;
    ngOnChanges(changes: any): void;
    baseOnDestroy(): void;
    getImageKey(preloaderType?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScullyImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScullyImageComponent, "scully-image", never, { "src": "src"; "pixelHeight": "pixelHeight"; "pixelWidth": "pixelWidth"; "fluidMaxWidth": "fluidMaxWidth"; "fluidMaxHeight": "fluidMaxHeight"; "lazy": "lazy"; "pluginOptions": "pluginOptions"; "preloader": "preloader"; }, {}, never, never>;
}
export declare class ScullyBlurImageComponent extends ScullyImageComponent implements OnInit, OnChanges, OnDestroy {
    preloader: PreloaderTypes;
    get height(): string;
    get width(): string;
    get type(): PreloaderTypes;
    get pluginOptionsAsString(): string;
    get pixelWidthAsAttr(): number;
    get pixelHeightAsAttr(): number;
    get fluidMaxWidthAsAttr(): number;
    get fluidMaxHeightAsAttr(): number;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScullyBlurImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScullyBlurImageComponent, "scully-blur-image", never, { "preloader": "preloader"; }, {}, never, never>;
}
export declare class ScullyTracedImageComponent extends ScullyImageComponent implements OnInit, OnChanges, OnDestroy {
    preloader: PreloaderTypes;
    get height(): string;
    get width(): string;
    get type(): PreloaderTypes;
    get pluginOptionsAsString(): string;
    get pixelWidthAsAttr(): number;
    get pixelHeightAsAttr(): number;
    get fluidMaxWidthAsAttr(): number;
    get fluidMaxHeightAsAttr(): number;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScullyTracedImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScullyTracedImageComponent, "scully-traced-image", never, { "preloader": "preloader"; }, {}, never, never>;
}
export declare class ScullyPrimitivesImageComponent extends ScullyImageComponent implements OnInit, OnChanges, OnDestroy {
    preloader: PreloaderTypes;
    get height(): string;
    get width(): string;
    get type(): PreloaderTypes;
    get pluginOptionsAsString(): string;
    get pixelWidthAsAttr(): number;
    get pixelHeightAsAttr(): number;
    get fluidMaxWidthAsAttr(): number;
    get fluidMaxHeightAsAttr(): number;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScullyPrimitivesImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScullyPrimitivesImageComponent, "scully-primitives-image", never, { "preloader": "preloader"; }, {}, never, never>;
}
export declare class ScullyPixelsImageComponent extends ScullyImageComponent implements OnInit, OnChanges, OnDestroy {
    preloader: PreloaderTypes;
    get height(): string;
    get width(): string;
    get type(): PreloaderTypes;
    get pluginOptionsAsString(): string;
    get pixelWidthAsAttr(): number;
    get pixelHeightAsAttr(): number;
    get fluidMaxWidthAsAttr(): number;
    get fluidMaxHeightAsAttr(): number;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScullyPixelsImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScullyPixelsImageComponent, "scully-pixels-image", never, { "preloader": "preloader"; }, {}, never, never>;
}
