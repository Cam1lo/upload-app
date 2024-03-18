import { useState } from "react";
import Button from "../../components/button/button";
import "./document-upload.scss";
import Check from "../../components/check/check";
import {
    DEFAULT_FORM_STATE,
    MULTIPLE_TESTING_CENTERS,
    SINGLE_TESTING_CENTER,
} from "../../core/constants/document-upload";
import { DocumentUploadFormState } from "../../core/interfaces/IDocumentUploadFormState";
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

function DocumentUpload({ onSubmit }: { onSubmit: (docUploadFormState: DocumentUploadFormState) => void }) {
    const [isOpen, setIsOpen] = useState(true);

    const [formState, setFormState] = useState<DocumentUploadFormState>(DEFAULT_FORM_STATE);

    const onImportNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.options[event.target.selectedIndex].value;
        setFormState((prev: DocumentUploadFormState) => ({ ...prev, importName: selectedValue }));
    };

    return (
        <>
            <UploadButton
                uploadDocumentOnClick={() => {
                    setIsOpen(true);
                }}></UploadButton>
            <Modal
                title="Document Upload"
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}>
                <div className="modal-body">
                    <div className="row1">
                        <Dropdown
                            formControl={{
                                value: formState.importName || "",
                                onChange: onImportNameChange,
                                validators: [Validators.required],
                            }}
                            options={[
                                { value: "", label: "Select Import Name:" },
                                { value: "1", label: "Import 1" },
                                { value: "2", label: "Import 2" },
                                { value: "3", label: "Import 3" },
                            ]}></Dropdown>

                        <File
                            onFileChange={(file: File) => {
                                console.log(file);
                                setFormState((prev: DocumentUploadFormState) => ({ ...prev, file: file }));
                            }}
                        />

                        <Check
                            title="Elapse Data Checking:"
                            status={{
                                label: formState.elapsedDates ? "Elapsed Dates Found!" : "No Elapsed Dates!",
                                color: formState.elapsedDates ? CheckColors.ERROR : CheckColors.SUCCESS,
                            }}
                        />

                        <ToleranceWindow
                            toggleformControl={{
                                value: formState.toleranceWindow || false,
                                onChange: (value: boolean) => {
                                    setFormState((prev: DocumentUploadFormState) => ({
                                        ...prev,
                                        toleranceWindow: value === true,
                                    }));
                                },
                                validators: [Validators.required],
                            }}
                            timeFormControl={{
                                value: formState.toleranceWindowTime || null,
                                onChange: (value: Date) => {
                                    setFormState((prev: DocumentUploadFormState) => ({
                                        ...prev,
                                        toleranceWindowTime: value,
                                    }));
                                },
                                validators: [Validators.required],
                            }}
                        />
                    </div>
                    <div className="row2">
                        <div className="border-bottom">
                            <RadioButtonsGroup
                                title="Split schedule using social distancing ?"
                                formControl={{
                                    value: String(formState.splitSchedule),
                                    onChange: (event: any) => {
                                        setFormState((prev: DocumentUploadFormState) => ({
                                            ...prev,
                                            splitSchedule: event.target.value === "true",
                                        }));
                                    },
                                    validators: [Validators.required],
                                }}
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
                            formControl={{
                                value: formState.clientType || "Single",
                                onChange: (event: any) => {
                                    setFormState((prev: DocumentUploadFormState) => ({
                                        ...prev,
                                        clientType: event.target.value,
                                        clientList:
                                            event.target.value === "Single"
                                                ? SINGLE_TESTING_CENTER
                                                : MULTIPLE_TESTING_CENTERS,
                                    }));
                                },
                                validators: [Validators.required],
                            }}
                            options={[
                                { value: "Single", label: "Single" },
                                { value: "Multiple", label: "Multiple" },
                            ]}></RadioButtonsGroup>
                        {formState.clientList && formState.clientList.length > 0
                            ? formState.clientList.map((client: IClientAssignation, index: number) => (
                                  <ClientAssignation
                                      dropDownformControl={{
                                          value: client.name || "",
                                          onChange: (event: any) => {
                                              setFormState((prev: DocumentUploadFormState) => {
                                                  const newClientList = [...(prev.clientList || [])];
                                                  newClientList[index].time = event.target.value;
                                                  return { ...prev, clientList: newClientList };
                                              });
                                          },
                                          validators: [Validators.required],
                                      }}
                                      clientAssignation={client}
                                      timeFormControl={{
                                          value: client.time || null,
                                          onChange: (value: Date) => {
                                              setFormState((prev: DocumentUploadFormState) => {
                                                  const newClientList = [...(prev.clientList || [])];
                                                  newClientList[index].time = value;
                                                  return { ...prev, clientList: newClientList };
                                              });
                                          },
                                          validators: [Validators.required],
                                      }}
                                      key={index}
                                  />
                              ))
                            : null}
                    </div>
                </div>
                <div className="modal-footer">
                    <h3>Data in the import file is correct. Please press Continue to import.</h3>
                    <div className="buttons-container">
                        <Button
                            onclick={() => {
                                onSubmit(formState);
                            }}
                            type={ButtonType.PRIMARY}
                            size={ButtonSize.XL}>
                            Continue Import
                        </Button>
                        <Button
                            type={ButtonType.SECONDARY}
                            size={ButtonSize.XL}
                            onclick={() => {
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
