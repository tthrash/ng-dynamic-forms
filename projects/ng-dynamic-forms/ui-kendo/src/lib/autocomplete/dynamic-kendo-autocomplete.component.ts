import { Component, EventEmitter, Input, Output, QueryList, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AutoCompleteComponent } from "@progress/kendo-angular-dropdowns";
import {
    DynamicFormControlCustomEvent, DynamicFormControlLayout,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicInputModel,
    DynamicTemplateDirective
} from "@ng-dynamic-forms2/core";
import { KENDO_TEMPLATE_DIRECTIVES } from "../dynamic-kendo-form.const";
import { DynamicKendoFormControlWithTemplateComponent } from "../dynamic-kendo-form-control-with-template.component";

@Component({
    selector: "dynamic-kendo-autocomplete",
    templateUrl: "./dynamic-kendo-autocomplete.component.html"
})
export class DynamicKendoAutoCompleteComponent extends DynamicKendoFormControlWithTemplateComponent {

    readonly templateDirectives = KENDO_TEMPLATE_DIRECTIVES;

    @Input() formLayout: DynamicFormLayout;
    @Input() group: FormGroup;
    @Input() layout: DynamicFormControlLayout;
    @Input() model: DynamicInputModel;
    @Input() templates: QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("kendoAutoComplete", {static: true}) kendoAutoComplete: AutoCompleteComponent;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {

        super(layoutService, validationService);
    }

    get viewChild(): AutoCompleteComponent {
        return this.kendoAutoComplete;
    }
}
