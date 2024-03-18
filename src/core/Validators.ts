import IClientAssignation from "./interfaces/IClientAssignation";
import { IValidator } from "./interfaces/IValidator";

export default class Validators {
    static required: IValidator = {
        validate: (value: any) => {
            if (value === null || value === undefined) {
                return false;
            }

            if (typeof value === "string" && value.trim() === "") {
                return false;
            }

            return true;

        },
        errorMsg: "This field is required!",
    }

    static allCentersAssignedWithTime: IValidator = {
        validate: (clientAssignations: IClientAssignation[]) => {
            let valid = true;
            clientAssignations.forEach((clientAssignation: IClientAssignation) => {
                if (!clientAssignation.name || !clientAssignation.time) {
                    valid = false;
                    return;
                }
            });
            return valid;
        },
        errorMsg: "Each center must have a client and a time assigned!",
    }
}

