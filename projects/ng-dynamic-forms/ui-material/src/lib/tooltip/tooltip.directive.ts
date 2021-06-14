import { Directive, Renderer2, ComponentRef, Input, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { NgDynamicTooltipComponent } from "./tooltip.component";

@Directive({
  selector: "[ngDynamicTooltip]"
})
export class NgDynamicTooltipDirective {

  private componentInstance: ComponentRef<NgDynamicTooltipComponent> = null;

  @Input("ngDynamicTooltip")
  set message(message: string) {
    this._message = message != null ? `${message}`.trim() : null;
  }

  _message: string;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if (this._message) {
      this.showTooltip(this._message); // important to do this here so the native elements are populated already
    }
  }

  showTooltip(message: string) {
    if (!this.componentInstance) {
      this.createLoaderComponent();
      this.componentInstance.instance.message = message;
      this.appendComponent();
    }
  }

  private appendComponent() {
    this.renderer.addClass(this.viewContainerRef.element.nativeElement, "ng-dynamic-tooltip-container");

    if (this.viewContainerRef.element.nativeElement.children
        && typeof this.viewContainerRef.element.nativeElement.children.length != undefined
        && this.viewContainerRef.element.nativeElement.children.length > 0) {
      for (const child of this.viewContainerRef.element.nativeElement.children) {
        this.renderer.addClass(child, "ng-dynamic-tooltip-container-child");
      }
    }
    this.renderer.appendChild(
       this.viewContainerRef.element.nativeElement,
       this.componentInstance.instance.element.nativeElement
    );

  }

  private createLoaderComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NgDynamicTooltipComponent);
    this.componentInstance = this.viewContainerRef.createComponent(componentFactory);
  }

  // private makeComponentAChild(){
  //   const loaderComponentElement = this.componentInstance.location.nativeElement;
  //   const sibling: HTMLElement = loaderComponentElement.previousSibling;
  //   sibling.insertAdjacentElement("afterend", loaderComponentElement);
  // }

  ngOnDestroy(): void {
    if (this.componentInstance) {
      this.componentInstance.destroy();
    }
  }

}
