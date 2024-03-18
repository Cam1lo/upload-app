import IClientAssignation from "./IClientAssignation";

interface DocumentUploadFormState {
    importName: string;
    file?: File;
    elapsedDates: boolean;
    toleranceWindow: boolean;
    toleranceWindowTime: Date | null;
    splitSchedule: boolean;
    locationChecked: boolean;
    clientType: ClientType;
    clientList: IClientAssignation[];
};

enum ClientType {
    SINGLE = "Single",
    MULTIPLE = "Multiple"
}

export { ClientType }
export type { DocumentUploadFormState }