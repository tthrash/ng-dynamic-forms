import { DynamicCheckControlModel, DynamicCheckControlModelConfig } from "../dynamic-check-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
import { serializable } from "../../decorator/serializable.decorator";

export const DYNAMIC_FORM_CONTROL_TYPE_SWITCH = "SWITCH";

export interface DynamicSwitchModelConfig extends DynamicCheckControlModelConfig {

    offLabel?: string;
    onLabel?: string;
}

export class DynamicSwitchModel extends DynamicCheckControlModel {

    @serializable() offLabel: string | null;
    @serializable() onLabel: string | null;

    @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_SWITCH;

    constructor(config: DynamicSwitchModelConfig, layout?: DynamicFormControlLayout) {

        super(config, layout);

        this.offLabel = config.offLabel || null;
        this.onLabel = config.onLabel || null;
    }

    clone(withState: boolean = false): DynamicSwitchModel {
        const config = {...this.config};

        if (withState) {
            const copyWithState = this.toJSON();
            for (const key of Object.keys(copyWithState)) {
                if (typeof config[key] !== "undefined") {
                    config[key] = copyWithState[key];
                }
            }
        }

        return new DynamicSwitchModel(this.config, this.layout);
    }
}
