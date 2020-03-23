import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import {
    DynamicFormService,
    DynamicCheckboxModel,
    DynamicFormControlModel,
    DynamicFormArrayModel
} from "@ng-dynamic-forms2/core";
import { BASIC_SAMPLE_FORM_MODEL, BASIC_SAMPLE_FORM_ARRAY_MODEL } from "./basic-sample-form.model";

@Component({
    selector: "dynamic-basic-sample-form",
    templateUrl: "./basic-sample-form.component.html"
})
export class BasicSampleFormComponent implements OnInit {

    formModel1: DynamicFormControlModel[];
    formModel2: DynamicFormControlModel[];

    formGroup1: FormGroup;
    formGroup2: FormGroup;

    checkboxControl: FormControl;
    checkboxModel: DynamicCheckboxModel;

    arrayControl: FormArray;
    arrayModel: DynamicFormArrayModel;

    constructor(private formService: DynamicFormService) {

        // this.formModel1 = BASIC_SAMPLE_FORM_MODEL;
        // this.formModel2 = BASIC_SAMPLE_FORM_ARRAY_MODEL;

        this.formModel1 = this.formService.fromJSON(JSON.stringify(BASIC_SAMPLE_FORM_MODEL));
        this.formModel2 = this.formService.fromJSON(JSON.stringify(BASIC_SAMPLE_FORM_ARRAY_MODEL));

        this.formGroup1 = this.formService.createFormGroup(this.formModel1);
        this.formGroup2 = this.formService.createFormGroup(this.formModel2);
    }

    ngOnInit() {

        this.checkboxModel = this.formService.findModelById<DynamicCheckboxModel>("basicCheckbox", this.formModel1);
        this.checkboxControl = this.formService.findControlByModel<FormControl>(this.checkboxModel, this.formGroup1);

        this.arrayModel = this.formService.findModelById<DynamicFormArrayModel>("basicFormArray", this.formModel2);
        this.arrayControl = this.formService.findControlByModel <FormArray>(this.arrayModel, this.formGroup2);
    }

    add() {
        this.formService.addFormArrayGroup(this.arrayControl, this.arrayModel);
    }

    remove(index: number) {
        this.formService.removeFormArrayGroup(index, this.arrayControl, this.arrayModel);
    }

    clear() {
        this.formService.clearFormArray(this.arrayControl, this.arrayModel);
    }

    onBlur($event) {
        console.log(`BLUR event on ${$event.model.id}: `, $event);
    }

    onChange($event) {
        console.log(`CHANGE event on ${$event.model.id}: `, $event);
    }

    onFocus($event) {
        console.log(`FOCUS event on ${$event.model.id}: `, $event);
    }
}
