import IClientAssignation from "./IClientAssignation";

interface DocumentUploadFormState {
    importName: string;
    file: File | null;
    elapsedDates: boolean;
    toleranceWindow: boolean;
    toleranceWindowTime: Date | null;
    splitSchedule: boolean;
    locationChecked: boolean;
    clientType: ClientType;
    clientAssignation: IClientAssignation[];
};

enum ClientType {
    SINGLE = "Single",
    MULTIPLE = "Multiple"
}

export { ClientType }
export type { DocumentUploadFormState }