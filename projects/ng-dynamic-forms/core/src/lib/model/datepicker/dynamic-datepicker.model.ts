import {
    DynamicDateControlModel,
    DynamicDateControlModelConfig,
    DynamicDateControlValue
} from "../dynamic-date-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isString } from "../../utils/core.utils";

export const DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER = "DATEPICKER";

export interface DynamicDatePickerModelConfig extends DynamicDateControlModelConfig {

    autoFocus?: boolean;
    focusedDate?: DynamicDateControlValue;
    inline?: boolean;
    prefix?: string;
    readOnly?: boolean;
    suffix?: string;
    toggleIcon?: string;
    toggleLabel?: string;
    dateFilter?: (date: Date) => boolean,
}

export class DynamicDatePickerModel extends DynamicDateControlModel {

    @serializable() autoFocus: boolean;
    @serializable() focusedDate: DynamicDateControlValue | null;
    @serializable() inline: boolean;
    @serializable() prefix: string | null;
    @serializable() readOnly: boolean;
    @serializable() suffix: string | null;
    @serializable() toggleIcon: string | null;
    @serializable() toggleLabel: string | null;
    @serializable() dateFilter: (date: Date) => boolean;

    @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER;

    constructor(config: DynamicDatePickerModelConfig, layout?: DynamicFormControlLayout) {

        super(config, layout);

        this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        this.focusedDate = config.focusedDate || null;
        this.inline = isBoolean(config.inline) ? config.inline : false;
        this.prefix = config.prefix || null;
        this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        this.toggleIcon = isString(config.toggleIcon) ? config.toggleIcon : null;
        this.toggleLabel = isString(config.toggleLabel) ? config.toggleLabel : null;
        this.suffix = config.suffix || null;
        this.dateFilter = config.dateFilter || null;
    }

    clone(withState: boolean = false): DynamicDatePickerModel {
        const config = {...this.config};

        if (withState) {
            const copyWithState = this.toJSON();
            for (const key of Object.keys(copyWithState)) {
                if (typeof config[key] !== "undefined") {
                    config[key] = copyWithState[key];
                }
            }
        }

        return new DynamicDatePickerModel(this.config, this.layout);
    }
}
