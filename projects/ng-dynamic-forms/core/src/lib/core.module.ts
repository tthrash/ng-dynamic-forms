import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicListDirective } from "./directive/dynamic-list.directive";
import { DynamicTemplateDirective } from "./directive/dynamic-template.directive";
import { DynamicFormService } from "./service/dynamic-form.service";
import { DynamicFormLayoutService } from "./service/dynamic-form-layout.service";
import { DynamicFormValidationService } from "./service/dynamic-form-validation.service";
import { DynamicFormComponentService } from "./service/dynamic-form-component.service";
import { DynamicFormRelationService } from "./service/dynamic-form-relation.service";
import { DynamicFormsErrorTemplateDirective } from "./directive/dynamic-error-template.directive";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        DynamicListDirective,
        DynamicTemplateDirective,
        DynamicFormsErrorTemplateDirective
    ],
    exports: [
        DynamicListDirective,
        DynamicTemplateDirective,
        DynamicFormsErrorTemplateDirective
    ]
})
export class DynamicFormsCoreModule {

    /*@deprecated*/
    static forRoot(): ModuleWithProviders {

        return {
            ngModule: DynamicFormsCoreModule,
            providers: [
                DynamicFormService,
                DynamicFormLayoutService,
                DynamicFormValidationService,
                DynamicFormComponentService,
                DynamicFormRelationService
            ]
        };
    }
}
