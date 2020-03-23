import { DynamicInputModel } from "@ng-dynamic-forms2/core";

export const LAZY_LOADED_FORM_MODEL = [

    new DynamicInputModel({

        id: "asyncInput",
        label: "Sample Async Input",
        validators: {
            // customLazyLoadedValidator: null
        },
        errorMessages: {
            // customLazyLoadedValidator: "Lazy invalid"
        }
    })
];
