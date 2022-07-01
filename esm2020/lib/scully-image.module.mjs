import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScullyImageComponent, ScullyBlurImageComponent, ScullyTracedImageComponent, ScullyPrimitivesImageComponent, ScullyPixelsImageComponent, } from './scully-image.component';
import { VisibilityService } from './visibility.service';
import * as i0 from "@angular/core";
const exportedComponents = [
    ScullyBlurImageComponent,
    ScullyTracedImageComponent,
    ScullyPrimitivesImageComponent,
    ScullyPixelsImageComponent,
];
export class ScullyImageModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2N1bGx5LWltYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NjdWxseS1pbWFnZS9zcmMvbGliL3NjdWxseS1pbWFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIsOEJBQThCLEVBQzlCLDBCQUEwQixHQUMzQixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV6RCxNQUFNLGtCQUFrQixHQUFHO0lBQ3pCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLDBCQUEwQjtDQUMzQixDQUFDO0FBUUYsTUFBTSxPQUFPLGlCQUFpQjs7OEdBQWpCLGlCQUFpQjsrR0FBakIsaUJBQWlCLGlCQUxiLG9CQUFvQixFQVBuQyx3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5QiwwQkFBMEIsYUFLaEIsZ0JBQWdCLGFBUjFCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsOEJBQThCO1FBQzlCLDBCQUEwQjsrR0FTZixpQkFBaUIsYUFGakIsQ0FBQyxpQkFBaUIsQ0FBQyxZQUZyQixDQUFDLGdCQUFnQixDQUFDOzJGQUloQixpQkFBaUI7a0JBTjdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQztvQkFDM0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzNCLE9BQU8sRUFBRSxDQUFDLEdBQUcsa0JBQWtCLENBQUM7b0JBQ2hDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgU2N1bGx5SW1hZ2VDb21wb25lbnQsXG4gIFNjdWxseUJsdXJJbWFnZUNvbXBvbmVudCxcbiAgU2N1bGx5VHJhY2VkSW1hZ2VDb21wb25lbnQsXG4gIFNjdWxseVByaW1pdGl2ZXNJbWFnZUNvbXBvbmVudCxcbiAgU2N1bGx5UGl4ZWxzSW1hZ2VDb21wb25lbnQsXG59IGZyb20gJy4vc2N1bGx5LWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaXNpYmlsaXR5U2VydmljZSB9IGZyb20gJy4vdmlzaWJpbGl0eS5zZXJ2aWNlJztcblxuY29uc3QgZXhwb3J0ZWRDb21wb25lbnRzID0gW1xuICBTY3VsbHlCbHVySW1hZ2VDb21wb25lbnQsXG4gIFNjdWxseVRyYWNlZEltYWdlQ29tcG9uZW50LFxuICBTY3VsbHlQcmltaXRpdmVzSW1hZ2VDb21wb25lbnQsXG4gIFNjdWxseVBpeGVsc0ltYWdlQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2N1bGx5SW1hZ2VDb21wb25lbnQsIC4uLmV4cG9ydGVkQ29tcG9uZW50c10sXG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlXSxcbiAgZXhwb3J0czogWy4uLmV4cG9ydGVkQ29tcG9uZW50c10sXG4gIHByb3ZpZGVyczogW1Zpc2liaWxpdHlTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2N1bGx5SW1hZ2VNb2R1bGUge31cbiJdfQ==