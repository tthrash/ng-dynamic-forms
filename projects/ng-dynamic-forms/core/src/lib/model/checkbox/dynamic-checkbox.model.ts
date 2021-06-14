import { DynamicCheckControlModel, DynamicCheckControlModelConfig } from "../dynamic-check-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean } from "../../utils/core.utils";
import { DynamicFormControlModel } from "../dynamic-form-control.model";

export const DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX = "CHECKBOX";

export interface DynamicCheckboxModelConfig extends DynamicCheckControlModelConfig {

    indeterminate?: boolean;
}

export class DynamicCheckboxModel extends DynamicCheckControlModel {

    @serializable() indeterminate: boolean;

    @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX;

    constructor(config: DynamicCheckboxModelConfig, layout?: DynamicFormControlLayout) {

        super(config, layout);

        this.indeterminate = isBoolean(config.indeterminate) ? config.indeterminate : false;
    }

    clone(withState: boolean = false): DynamicCheckboxModel {
        const config = {...this.config};

        if (withState) {
            const copyWithState = this.toJSON();
            for (const key of Object.keys(copyWithState)) {
                if (typeof config[key] !== "undefined") {
                    config[key] = copyWithState[key];
                }
            }
        }

        return new DynamicCheckboxModel(this.config, this.layout);
    }
}
