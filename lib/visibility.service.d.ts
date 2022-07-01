import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class VisibilityService {
    private pageVisible$;
    constructor(document: any);
    elementInSight(element: ElementRef): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<VisibilityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<VisibilityService>;
}
