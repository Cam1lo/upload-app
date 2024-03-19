import FormControl from "../FormControl";
// import IClientAssignation from "./IClientAssignation";

interface DocumentUploadFormState {
    controls: {
        importName: FormControl<string>;
        file: FormControl<File | null>;
        // elapsedDates: boolean;
        // toleranceWindow: boolean;
        // toleranceWindowTime: Date | null;
        // splitSchedule: boolean;
        // locationChecked: boolean;
        // clientType: ClientType;
        // clientList: IClientAssignation[];
    }
};

enum ClientType {
    SINGLE = "Single",
    MULTIPLE = "Multiple"
}

export { ClientType }
export type { DocumentUploadFormState }