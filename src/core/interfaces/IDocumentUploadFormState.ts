import IClientAssignation from "./IClientAssignation";

export default interface DocumentUploadFormState {
    importName: string;
    file?: File;
    elapsedDates: boolean;
    toleranceWindow: boolean;
    toleranceWindowTime: string;
    splitSchedule: boolean;
    locationChecked: boolean;
    clientType: "Single" | "Multiple";
    clientList: IClientAssignation[];
};