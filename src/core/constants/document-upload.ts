import { DropdownOption } from "../../components/forms/dropdown/dropdown.type";
import IClientAssignation from "../interfaces/IClientAssignation";
import { ClientType, DocumentUploadFormState } from "../interfaces/IDocumentUploadFormState";
import * as Yup from "yup";

export const IMPORT_NAMES: Array<DropdownOption> = [
    { value: "", label: "Select Import Name:" },
    { value: "1", label: "Import 1" },
    { value: "2", label: "Import 2" },
    { value: "3", label: "Import 3" },
];

export const CLIENT_TYPES: Array<DropdownOption> = [
    { value: "Single", label: "Single" },
    { value: "Multiple", label: "Multiple" },
];

export const CLIENT_ASSIGNATIONS: Array<DropdownOption> = [
    { value: "", label: "Select Client:" },
    { value: "1", label: "Client 1" },
    { value: "2", label: "Client 2" },
    { value: "3", label: "Client 3" },
    { value: "4", label: "Client 4" },
];

export const MULTIPLE_TESTING_CENTERS: Array<IClientAssignation> = [
    { name: "Testing Center 1", clients: CLIENT_ASSIGNATIONS, time: null, selectedClient: null },
    { name: "Testing Center 2", clients: CLIENT_ASSIGNATIONS, time: null, selectedClient: null },
    { name: "Testing Center 3", clients: CLIENT_ASSIGNATIONS, time: null, selectedClient: null },
    { name: "Testing Center 4", clients: CLIENT_ASSIGNATIONS, time: null, selectedClient: null },
];

export const SINGLE_TESTING_CENTER: Array<IClientAssignation> = [
    { name: "Testing Center 1", clients: CLIENT_ASSIGNATIONS, time: null, selectedClient: null },
];

export const DEFAULT_FORM_STATE: DocumentUploadFormState = {
    importName: "",
    file: null,
    elapsedDates: false,
    toleranceWindow: true,
    toleranceWindowTime: null,
    locationChecked: true,
    splitSchedule: true,
    clientType: ClientType.MULTIPLE,
    clientAssignation: MULTIPLE_TESTING_CENTERS,
}

export const DEFAULT_VALIDATION = (values: DocumentUploadFormState) => {
    const errors: any = {};

    if (values.toleranceWindow && !values.toleranceWindowTime) {
        errors.toleranceWindowTime = "Tolerance window time is required!";
    }

    if (values.clientType === ClientType.SINGLE) {
        if (!values.clientAssignation[0].selectedClient) {
            errors.clientAssignation = "Client is required!";
        } else if (!values.clientAssignation[0].time) {
            errors.clientAssignation = "Time is required!";
        }
    } else {
        values.clientAssignation.forEach((client: any, index: number) => {
            if (!client.selectedClient) {
                errors.clientAssignation = "Client is required!";
            } else if (!client.time) {
                errors.clientAssignation = "Time is required!";
            }
        });
    }
    return errors;
}

export const DEFAULT_VALIDATION_SCHEMA =
    Yup.object().shape({
        importName: Yup.string().required("Import name is required!"),
        file: Yup.mixed().required("File is required!"),
        toleranceWindow: Yup.boolean(),
        clientType: Yup.string().required("Client type is required!"),
    })