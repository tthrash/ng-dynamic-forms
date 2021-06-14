import { DynamicInputControlModel, DynamicInputControlModelConfig } from "../dynamic-input-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
import { serializable } from "../../decorator/serializable.decorator";

export const DYNAMIC_FORM_CONTROL_TYPE_EDITOR = "EDITOR";

export interface DynamicEditorModelConfig extends DynamicInputControlModelConfig<string> {
}

export class DynamicEditorModel extends DynamicInputControlModel<string> {

    @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_EDITOR;

    constructor(config: DynamicEditorModelConfig, layout?: DynamicFormControlLayout) {

        super(config, layout);
    }

    clone(withState: boolean = false): DynamicEditorModel {
        const config = {...this.config};

        if (withState) {
            const copyWithState = this.toJSON();
            for (const key of Object.keys(copyWithState)) {
                if (typeof config[key] !== "undefined") {
                    config[key] = copyWithState[key];
                }
            }
        }

        return new DynamicEditorModel(this.config, this.layout);
    }
}
