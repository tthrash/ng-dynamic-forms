import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormService, DynamicFormControlModel, DynamicFormLayout, DynamicSelectModel, DynamicFormGroupModel } from "@ng-dynamic-forms2/core";
import { MATERIAL_SAMPLE_FORM_MODEL } from "./material-sample-form.model";
import { MATERIAL_SAMPLE_FORM_LAYOUT } from "./material-sample-form.layout";
import { Subject } from "rxjs";

@Component({
    selector: "dynamic-material-sample-form",
    styleUrls: ["../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css"],
    templateUrl: "./material-sample-form.component.html",
    encapsulation: ViewEncapsulation.None
})
export class MaterialSampleFormComponent implements OnInit {

    formModel: DynamicFormControlModel[] = MATERIAL_SAMPLE_FORM_MODEL;
    formGroup: FormGroup;
    formLayout: DynamicFormLayout = MATERIAL_SAMPLE_FORM_LAYOUT;

    private testSubject = new Subject();

    constructor(private formService: DynamicFormService) {
    }

    ngOnInit() {
        const x = (this.formModel.find(f => f.id === "room") as DynamicFormGroupModel).group.find(x => x.id === "roomSize") as DynamicSelectModel<string>;
        x.options = this.testSubject.asObservable();

        this.formModel.push(x.clone(true));

        this.formGroup = this.formService.createFormGroup(this.formModel);

        setTimeout(() => {
            this.testSubject.next([
                {
                    label: "Single Room",
                    value: "single-room"
                },
                {
                    label: "Double Room",
                    value: "double-room"
                },
                {
                    label: "Business Suite",
                    value: "business-suite"
                },
                {
                    label: "Presidential Suite",
                    value: "presidential-suite"
                },
                {
                    label: "Storeroom",
                    value: "storeroom"
                }
            ]);
        }, 3000);
    }

    onClick() {
        this.formService.detectChanges();
    }

    onBlur($event) {
        console.log(`Material blur event on: ${$event.model.id}: `, $event);
    }

    onChange($event) {
        console.log(`Material change event on: ${$event.model.id}: `, $event);
    }

    onFocus($event) {
        console.log(`Material focus event on: ${$event.model.id}: `, $event);
    }

    onMatEvent($event) {
        console.log(`Material ${$event.type} event on: ${$event.model.id}: `, $event);
    }
}
