import { DropdownOption } from "../../components/forms/dropdown/dropdown.type";
import IClientAssignation from "../interfaces/IClientAssignation";
import { ClientType, DocumentUploadFormState } from "../interfaces/IDocumentUploadFormState";

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
    { name: "Testing Center 1", clients: CLIENT_ASSIGNATIONS, time: null },
    { name: "Testing Center 2", clients: CLIENT_ASSIGNATIONS, time: null },
    { name: "Testing Center 3", clients: CLIENT_ASSIGNATIONS, time: null },
    { name: "Testing Center 4", clients: CLIENT_ASSIGNATIONS, time: null },
];

export const SINGLE_TESTING_CENTER: Array<IClientAssignation> = [
    { name: "Testing Center 1", clients: CLIENT_ASSIGNATIONS, time: null },
];

export const DEFAULT_FORM_STATE: DocumentUploadFormState = {
    importName: "",
    elapsedDates: false,
    file: undefined,
    toleranceWindow: true,
    toleranceWindowTime: null,
    splitSchedule: true,
    locationChecked: true,
    clientType: ClientType.MULTIPLE,
    clientList: MULTIPLE_TESTING_CENTERS
}

