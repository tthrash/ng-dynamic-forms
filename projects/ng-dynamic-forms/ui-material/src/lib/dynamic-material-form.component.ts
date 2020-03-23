import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    QueryList,
    ViewChildren,
    AfterContentInit,
    TemplateRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
    DynamicFormComponent,
    DynamicFormComponentService,
    DynamicFormControlEvent,
    DynamicFormLayout,
    DynamicFormModel,
    DynamicTemplateDirective,
    DynamicFormsErrorTemplateDirective
} from "@ng-dynamic-forms2/core";
import { DynamicMaterialFormControlContainerComponent } from "./dynamic-material-form-control-container.component";

@Component({
    selector: "dynamic-material-form",
    templateUrl: "./dynamic-material-form.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicMaterialFormComponent extends DynamicFormComponent {

    @Input() group: FormGroup;
    @Input() model: DynamicFormModel;
    @Input() layout: DynamicFormLayout;

    @Output() blur: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() change: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() focus: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();

    @Output() matEvent: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();

    @ContentChildren(DynamicTemplateDirective) templates: QueryList<DynamicTemplateDirective>;

    @ContentChildren(DynamicFormsErrorTemplateDirective, { descendants: true }) errorTemplates: QueryList<DynamicFormsErrorTemplateDirective>;

    @ViewChildren(DynamicMaterialFormControlContainerComponent) components: QueryList<DynamicMaterialFormControlContainerComponent>;

    errorTemplatesMap: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();

    constructor(protected changeDetectorRef: ChangeDetectorRef,
                protected componentService: DynamicFormComponentService) {
        super(changeDetectorRef, componentService);
    }
}
