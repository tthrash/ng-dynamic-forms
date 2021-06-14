import {
    DynamicCheckboxModel,
    DynamicDatePickerModel,
    DynamicFormGroupModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel,
    DynamicSwitchModel,
    DynamicTextAreaModel,
    MATCH_DISABLED,
    MATCH_REQUIRED
} from "@ng-dynamic-forms2/core";
import { BehaviorSubject } from "rxjs";
import { Validators } from "@angular/forms";

export const STATES_AUTOCOMPLETE_LIST = [
    "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "District of Columbia", "Federated States of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
    "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island",
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia",
    "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export const MATERIAL_SAMPLE_FORM_MODEL = [

    new DynamicFormGroupModel({

        id: "stay",
        group: [
            new DynamicDatePickerModel({

                id: "arrivalDate",
                inline: false,
                placeholder: "Date of Arrival",
                labelTooltip: "Number of Weeks Required to have Scheduled",
                ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
            }),

            new DynamicDatePickerModel({
                id: "departureDate",
                inline: false,
                placeholder: "Date of Departure",
                labelTooltip: "Number of Weeks Required to have Scheduled",
                ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
            })
        ],
        validators: {
            customDateRangeValidator: null
        },
        errorMessages: {
            customDateRangeValidator: "Invalid period of time selected"
        }
    }),

    new DynamicFormGroupModel({

        id: "room",
        group: [
            new DynamicSelectModel<string>({

                id: "roomSize",
                placeholder: "Room Size",
                hint: "Choose a room type",
                labelTooltip: "Number of Weeks Required to have Scheduled",
                ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
                // options: [
                //     {
                //         label: "Single Room",
                //         value: "single-room"
                //     },
                //     {
                //         label: "Double Room",
                //         value: "double-room"
                //     },
                //     {
                //         label: "Business Suite",
                //         value: "business-suite"
                //     },
                //     {
                //         label: "Presidential Suite",
                //         value: "presidential-suite"
                //     },
                //     {
                //         label: "Storeroom",
                //         value: "storeroom"
                //     }
                // ]
            }),

            new DynamicInputModel({

                id: "roomQuantity",
                inputType: "number",
                placeholder: "Room Quantity",
                labelTooltip: "Number of Weeks Required to have Scheduled",
                ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
                hint: "Maximum: 5",
                max: 5,
                min: 0
            })
        ]
    }),

    new DynamicInputModel({

        id: "firstName",
        maxLength: 25,
        placeholder: "First Name",
        labelTooltip: "Number of Weeks Required to have Scheduled",
        ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
        validators: [Validators.required]
    }),

    new DynamicInputModel({

        id: "lastName",
        maxLength: 50,
        placeholder: "Last Name",
        labelTooltip: "Number of Weeks Required to have Scheduled",
        ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
        validators: {
            required: null
        },
        errorMessages: {
            required: "Field is required"
        },
        additional: {
            color: "accent"
        }
    }),

    new DynamicInputModel({

        id: "email",
        placeholder: "E-Mail",
        labelTooltip: "Number of Weeks Required to have Scheduled",
        ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
        validators: {
            email: null
        },
        errorMessages: {
            email: "Field has no valid email"
        }
    }),

    new DynamicInputModel({

        id: "phone",
        inputType: "tel",
        placeholder: "Phone Number",
        hint: "Add your country code first",
        labelTooltip: "Number of Weeks Required to have Scheduled",
        ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
        prefix: "+",
        validators: {
            required: null
        },
        errorMessages: {
            required: "Field is required"
        }
    }),

    new DynamicFormGroupModel({

        id: "addressStreet",
        group: [

            new DynamicInputModel({
                id: "streetName",
                placeholder: "Street Name"
            }),

            new DynamicInputModel({
                id: "streetNumber",
                placeholder: "Street Number"
            })
        ]
    }),

    new DynamicFormGroupModel({

        id: "addressLocation",
        group: [
            new DynamicInputModel({

                id: "zipCode",
                placeholder: "ZIP",
                ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
            }),

            new DynamicInputModel({

                id: "state",
                hint: "Autocomplete",
                placeholder: "State",
                list: new BehaviorSubject(STATES_AUTOCOMPLETE_LIST),
                ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
            }),

            new DynamicInputModel({

                id: "city",
                placeholder: "City",
                ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
            })
        ]
    }),

    new DynamicSelectModel<string>({

        id: "extras",
        placeholder: "Extras",
        multiple: true,
        options: [
            {
                label: "Breakfast",
                value: "extraBreakfast"
            },
            {
                label: "TV",
                value: "extraTV"
            },
            {
                label: "WiFi",
                value: "extraWiFi"
            },
            {
                label: "Parking Lot",
                value: "extraParking"
            },
            {
                label: "Balcony",
                value: "extraBalcony"
            }
        ],
        ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
    }),

    new DynamicRadioGroupModel<string>({

        id: "payment",
        labelTooltip: "Number of Weeks Required to have Scheduled",
        ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
        options: [
            {
                label: "Credit Card",
                value: "cc"
            },
            {
                label: "PayPal",
                value: "paypal"
            },
            {
                label: "Cash",
                value: "cash"
            },
            {
                label: "Bitcoin",
                value: "bitcoin"
            }
        ],
        value: "cc"
    }),

    new DynamicTextAreaModel({

        id: "note",
        rows: 3,
        labelTooltip: "Number of Weeks Required to have Scheduled",
        ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
        placeholder: "Personal Note",
        relations: [
            {
                match: MATCH_DISABLED,
                when: [{id: "payment", value: "bitcoin"}]
            },
            {
                match: MATCH_REQUIRED,
                when: [{id: "payment", value: "paypal"}]
            }
        ]
    }),

    new DynamicInputModel({

        id: "tags",
        placeholder: "Tags",
        labelTooltip: "Number of Weeks Required to have Scheduled",
        ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
        multiple: true,
        value: ["hotel", "booking"]
    }),

    new DynamicSwitchModel({

        id: "reminder",
        offLabel: "Send me a reminder",
        onLabel: "Send me a reminder",
        value: false

    }),

    new DynamicSwitchModel({

        id: "newsletter",
        labelTooltip: "Number of Weeks Required to have Scheduled",
        ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
        offLabel: "Subscribe to newsletter",
        onLabel: "Subscribe to newsletter",
        value: true
    }),

    new DynamicCheckboxModel({

        id: "confirm",
        labelTooltip: "Number of Weeks Required to have Scheduled",
        ngDynamicTooltip: "Number of Weeks Required to have Scheduled",
        label: "I confirm the information given above"
    })
];
