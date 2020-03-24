import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild, ChangeDetectorRef, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ErrorStateMatcher, LabelOptions, MAT_LABEL_GLOBAL_OPTIONS, MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
import {
    DynamicFormControlComponent,
    DynamicFormControlCustomEvent, DynamicFormControlLayout,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicSelectModel
} from "@ng-dynamic-forms2/core";
import { tap } from "rxjs/operators";

@Component({
    selector: "dynamic-material-select",
    templateUrl: "./dynamic-material-select.component.html"
})
export class DynamicMaterialSelectComponent extends DynamicFormControlComponent implements OnInit {

    @Input() formLayout: DynamicFormLayout;
    @Input() group: FormGroup;
    @Input() layout: DynamicFormControlLayout;
    @Input() model: DynamicSelectModel<string>;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("matSelect", { static: true }) matSelect: MatSelect;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService,
                protected cdr: ChangeDetectorRef,
                @Inject(ErrorStateMatcher) public errorStateMatcher: ErrorStateMatcher,
                @Inject(MAT_LABEL_GLOBAL_OPTIONS) @Optional() public LABEL_OPTIONS: LabelOptions,
                @Inject(MAT_RIPPLE_GLOBAL_OPTIONS) @Optional() public RIPPLE_OPTIONS: RippleGlobalOptions) {

        super(layoutService, validationService);

    }

    ngOnInit(): void {
        if (this.model && this.model.options$) {
            this.model.options$ = this.model.options$.pipe(tap(x => {
                this.cdr.markForCheck();
            }));
        }
    }
}
