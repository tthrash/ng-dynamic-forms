import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    QueryList,
    ViewChildren
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
    DynamicFormComponent, DynamicFormComponentService,
    DynamicFormControlEvent,
    DynamicFormLayout,
    DynamicFormModel,
    DynamicTemplateDirective
} from "@ng-dynamic-forms2/core";
import { DynamicNGBootstrapFormControlContainerComponent } from "./dynamic-ng-bootstrap-form-control-container.component";

@Component({
    selector: "dynamic-ng-bootstrap-form",
    templateUrl: "./dynamic-ng-bootstrap-form.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicNGBootstrapFormComponent extends DynamicFormComponent {

    @Input() group: FormGroup;
    @Input() model: DynamicFormModel;
    @Input() layout: DynamicFormLayout;

    @Output() blur: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() change: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() focus: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();

    @Output() ngbEvent: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();

    @ContentChildren(DynamicTemplateDirective) templates: QueryList<DynamicTemplateDirective>;

    @ViewChildren(DynamicNGBootstrapFormControlContainerComponent) components: QueryList<DynamicNGBootstrapFormControlContainerComponent>;

    constructor(protected changeDetectorRef: ChangeDetectorRef,
                protected componentService: DynamicFormComponentService) {
        super(changeDetectorRef, componentService);
    }
}
