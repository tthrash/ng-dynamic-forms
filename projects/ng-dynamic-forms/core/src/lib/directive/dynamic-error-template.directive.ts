import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { CdkPortal } from "@angular/cdk/portal";

@Directive({ selector: 'ng-template[dynamicFormsErrorKey]' })
export class DynamicFormsErrorTemplateDirective extends CdkPortal {

  /**
   * The unique key for this element.
   */
  @Input() dynamicFormsErrorKey: string;

  constructor(public templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}
