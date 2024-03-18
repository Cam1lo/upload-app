import { useState } from "react";
import Button from "../../components/button/button";
import "./document-upload.scss";
import Check from "../../components/check/check";
import {
    DEFAULT_FORM_STATE,
    MULTIPLE_TESTING_CENTERS,
    SINGLE_TESTING_CENTER,
} from "../../core/constants/document-upload";
import { ClientType, DocumentUploadFormState } from "../../core/interfaces/IDocumentUploadFormState";
import { CheckColors } from "../../components/check/check.type";
import { ButtonType, ButtonSize } from "../../components/button/button.type";
import IClientAssignation from "../../core/interfaces/IClientAssignation";
import Dropdown from "../../components/forms/dropdown/dropdown";
import RadioButtonsGroup from "../../components/forms/radio-buttons-group/radio-buttons-group";
import Validators from "../../core/Validators";
import ClientAssignation from "./subcomponents/client-assignation/client-assignation";
import ToleranceWindow from "./subcomponents/tolerance-window/tolerance-window";
import UploadButton from "./subcomponents/upload-button/upload-button";
import Modal from "../../components/modal/modal";
import File from "../file/file";
import FormControl from "../../core/FormControl";
import { isFormValid, touchAllControls } from "../../utils/utils";

function DocumentUpload({ onSubmit }: { onSubmit: (docUploadFormState: DocumentUploadFormState) => void }) {
    // Modal open state
    const [isOpen, setIsOpen] = useState(true);
    // Modal form state
    const [formState, setFormState] = useState<DocumentUploadFormState>(DEFAULT_FORM_STATE);

    const getFormState = (): DocumentUploadFormState => {
        return {
            touched: true,
            file: controls.fileFormControl.value,
            importName: controls.dropDownformControl.value,
            elapsedDates: formState.elapsedDates,
            locationChecked: formState.locationChecked,
            splitSchedule: controls.splitScheduleFormControl.value === "true",
            clientType: controls.clientTypeFormControl.value,
            clientList: controls.clientListFormControl.value,
            toleranceWindow: controls.toggleFormControl.value,
            toleranceWindowTime: controls.timeFormControl.value,
        };
    };

    // Initialize form controls
    const initControls = () => {
        return {
            dropDownformControl: new FormControl("", [Validators.required], (value: string) => {
                setFormState({ ...getFormState(), importName: value });
            }),
            fileFormControl: new FormControl<File | null>(null, [Validators.required], (value: File) => {
                setFormState({ ...getFormState(), file: value });
            }),
            toggleFormControl: new FormControl<boolean>(formState.toleranceWindow, [], (value: boolean) => {
                setFormState({ ...getFormState(), toleranceWindow: value });
            }),
            timeFormControl: new FormControl<Date | null>(formState.toleranceWindowTime, [], (value: Date) => {
                setFormState({ ...getFormState(), toleranceWindowTime: value });
            }),
            splitScheduleFormControl: new FormControl<string>(String(formState.splitSchedule)),
            clientTypeFormControl: new FormControl<ClientType>(formState.clientType, [], (value: ClientType) => {
                setFormState({
                    ...getFormState(),
                    clientType: value,
                });
            }),
            clientListFormControl: new FormControl<Array<IClientAssignation>>(
                formState.clientList,
                [Validators.allCentersAssignedWithTime],
                (value: Array<IClientAssignation>) => {
                    setFormState({
                        ...getFormState(),
                        clientList: getFormState().clientType === ClientType.SINGLE ? [value[0]] : value,
                    });
                }
            ),
        };
    };

    const [controls, setControls] = useState(initControls);

    const submit = () => {
        // Get the current form state from the controls and set it to the form state
        const formState = getFormState();
        // Set the controls as touched to show the errors
        setControls(touchAllControls(controls));
        // Set the form state
        setFormState(formState);

        // If the form is valid, submit the form and close the modal and reset the form
        if (isFormValid(controls)) {
            onSubmit(formState);
            setIsOpen(false);
        }
    };

    return (
        <>
            <UploadButton
                uploadDocumentOnClick={() => {
                    setFormState(DEFAULT_FORM_STATE);
                    setControls(initControls);
                    setIsOpen(true);
                }}></UploadButton>
            <Modal
                title="Document Upload"
                isOpen={isOpen}
                onClose={() => {
                    setFormState(DEFAULT_FORM_STATE);
                    setControls(initControls());
                    setIsOpen(false);
                }}>
                <div className="modal-body">
                    <div className="row1">
                        <Dropdown
                            formControl={controls.dropDownformControl}
                            options={[
                                { value: "", label: "Select Import Name:" },
                                { value: "1", label: "Import 1" },
                                { value: "2", label: "Import 2" },
                                { value: "3", label: "Import 3" },
                            ]}></Dropdown>

                        <File formControl={controls.fileFormControl} />

                        <Check
                            title="Elapse Data Checking:"
                            status={{
                                label: formState.elapsedDates ? "Elapsed Dates Found!" : "No Elapsed Dates!",
                                color: formState.elapsedDates ? CheckColors.ERROR : CheckColors.SUCCESS,
                            }}
                        />

                        <div>
                            <ToleranceWindow
                                toggleformControl={controls.toggleFormControl}
                                timeFormControl={controls.timeFormControl}
                            />
                        </div>
                    </div>
                    <div className="row2">
                        <div className="border-bottom">
                            <RadioButtonsGroup
                                title="Split schedule using social distancing?"
                                formControl={controls.splitScheduleFormControl}
                                options={[
                                    { value: "true", label: "Yes" },
                                    { value: "false", label: "No" },
                                ]}></RadioButtonsGroup>
                        </div>
                        <Check
                            title="Location Checking:"
                            status={{
                                label: formState.locationChecked ? "All Available!" : "Not Checked",
                                color: formState.locationChecked ? CheckColors.SUCCESS : CheckColors.ERROR,
                            }}></Check>
                        <RadioButtonsGroup
                            title="Client:"
                            formControl={controls.clientTypeFormControl}
                            options={[
                                { value: "Single", label: "Single" },
                                { value: "Multiple", label: "Multiple" },
                            ]}></RadioButtonsGroup>
                        {formState.clientType === ClientType.SINGLE ? (
                            <ClientAssignation
                                clientAssignation={SINGLE_TESTING_CENTER}
                                formControl={controls.clientListFormControl}
                            />
                        ) : (
                            <ClientAssignation
                                clientAssignation={MULTIPLE_TESTING_CENTERS}
                                formControl={controls.clientListFormControl}
                            />
                        )}
                    </div>
                </div>
                <div className="modal-footer">
                    <h3>Data in the import file is correct. Please press Continue to import.</h3>
                    <div className="buttons-container">
                        <Button
                            onclick={() => {
                                submit();
                            }}
                            type={ButtonType.PRIMARY}
                            size={ButtonSize.XL}>
                            Continue Import
                        </Button>
                        <Button
                            type={ButtonType.SECONDARY}
                            size={ButtonSize.XL}
                            onclick={() => {
                                setFormState(DEFAULT_FORM_STATE);
                                setControls(initControls());
                                setIsOpen(false);
                            }}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
export default DocumentUpload;
