import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, QueryList, TemplateRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlContainerComponent } from "./dynamic-form-control-container.component";
import { DynamicFormControlEvent } from "./dynamic-form-control-event";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormModel } from "../model/dynamic-form.model";
import { DynamicTemplateDirective } from "../directive/dynamic-template.directive";
import { DynamicFormLayout } from "../service/dynamic-form-layout.service";
import { DynamicFormComponentService } from "../service/dynamic-form-component.service";
import { DynamicFormsErrorTemplateDirective } from "../core";

export abstract class DynamicFormComponent implements OnInit, OnDestroy {

    group: FormGroup;
    model: DynamicFormModel;
    layout: DynamicFormLayout;

    components: QueryList<DynamicFormControlContainerComponent>;
    templates: QueryList<DynamicTemplateDirective>;
    errorTemplates: QueryList<DynamicFormsErrorTemplateDirective>;

    blur: EventEmitter<DynamicFormControlEvent>;
    change: EventEmitter<DynamicFormControlEvent>;
    focus: EventEmitter<DynamicFormControlEvent>;

    errorTemplatesMap: Map<string, TemplateRef<any>>;

    protected constructor(protected changeDetectorRef: ChangeDetectorRef,
                          protected componentService: DynamicFormComponentService) {
    }

    ngOnInit(): void {
        this.componentService.registerForm(this);
    }

    ngOnDestroy(): void {
        this.componentService.unregisterForm(this);
    }

    trackByFn(_index: number, model: DynamicFormControlModel): string {
        return model.id;
    }

    markForCheck(): void {
        this.changeDetectorRef.markForCheck();

        if (this.components instanceof QueryList) {
            this.components.forEach(component => component.markForCheck());
        }
    }

    detectChanges(): void {
        this.changeDetectorRef.detectChanges();
    }

    onBlur($event: DynamicFormControlEvent) {
        this.blur.emit($event);
    }

    onChange($event: DynamicFormControlEvent) {
        this.change.emit($event);
    }

    onFocus($event: DynamicFormControlEvent) {
        this.focus.emit($event);
    }

    onCustomEvent($event: DynamicFormControlEvent, customEventEmitter: EventEmitter<DynamicFormControlEvent>) {
        customEventEmitter.emit($event);
    }

    ngAfterContentInit(): void {
        this._updateErrorTemplates();
    }

     /**
     * Getter method for error template references
     */
    getErrorTemplate(name: string): TemplateRef<any> {
        return this.errorTemplatesMap.get(name);
    }

    /**
     * Loads error templates and sets them in a map for faster access.
     */
    private _updateErrorTemplates(): void {
        this.errorTemplatesMap = new Map<string, TemplateRef<any>>();
        if (this.errorTemplates) {
            for (const errorTemplate of this.errorTemplates.toArray()) {
                this.errorTemplatesMap.set(errorTemplate.dynamicFormsErrorKey, errorTemplate.templateRef);
            }
        }
    }
}
