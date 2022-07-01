import { Injectable, Inject } from '@angular/core';
import { Observable, concat, defer, of, fromEvent, combineLatest, } from 'rxjs';
import { map, flatMap, distinctUntilChanged } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
export class VisibilityService {
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
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2N1bGx5LWltYWdlL3NyYy9saWIvdmlzaWJpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxFQUFFLEVBQ0YsU0FBUyxFQUNULGFBQWEsR0FFZCxNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUczQyxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLFlBQThCLFFBQWE7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQ3hCLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDakMsU0FBUyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQzNFLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQW1CO1FBQ2hDLE1BQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNyRCxNQUFNLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDaEUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztZQUVILG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFcEQsT0FBTyxHQUFHLEVBQUU7Z0JBQ1Ysb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNMLE9BQU8sQ0FBQyxDQUFDLE9BQTZCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUNuRCxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFDekMsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztRQUVGLE1BQU0sZUFBZSxHQUFHLGFBQWEsQ0FDbkMsSUFBSSxDQUFDLFlBQVksRUFDakIsZUFBZSxFQUNmLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxFQUFFLENBQUMsV0FBVyxJQUFJLGNBQWMsQ0FDL0QsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBd0IsQ0FBQztRQUV0RCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDOzs4R0FsQ1UsaUJBQWlCLGtCQUdSLFFBQVE7a0hBSGpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzswQkFJSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIGNvbmNhdCxcbiAgZGVmZXIsXG4gIG9mLFxuICBmcm9tRXZlbnQsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIE9ic2VydmFibGVJbnB1dCxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZsYXRNYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlzaWJpbGl0eVNlcnZpY2Uge1xuICBwcml2YXRlIHBhZ2VWaXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG4gICAgdGhpcy5wYWdlVmlzaWJsZSQgPSBjb25jYXQoXG4gICAgICBkZWZlcigoKSA9PiBvZighZG9jdW1lbnQuaGlkZGVuKSksXG4gICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICd2aXNpYmlsaXR5Y2hhbmdlJykucGlwZShtYXAoKGUpID0+ICFkb2N1bWVudC5oaWRkZW4pKVxuICAgICk7XG4gIH1cblxuICBlbGVtZW50SW5TaWdodChlbGVtZW50OiBFbGVtZW50UmVmKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgZWxlbWVudFZpc2libGUkID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGVudHJpZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIGludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfTtcbiAgICB9KS5waXBlKFxuICAgICAgZmxhdE1hcCgoZW50cmllczogT2JzZXJ2YWJsZUlucHV0PGFueT4pID0+IGVudHJpZXMpLFxuICAgICAgbWFwKChlbnRyeTogYW55KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZyksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcblxuICAgIGNvbnN0IGVsZW1lbnRJblNpZ2h0JCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLnBhZ2VWaXNpYmxlJCxcbiAgICAgIGVsZW1lbnRWaXNpYmxlJCxcbiAgICAgIChwYWdlVmlzaWJsZSwgZWxlbWVudFZpc2libGUpID0+IHBhZ2VWaXNpYmxlICYmIGVsZW1lbnRWaXNpYmxlXG4gICAgKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpIGFzIE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgICByZXR1cm4gZWxlbWVudEluU2lnaHQkO1xuICB9XG59XG4iXX0=