import { useState } from "react";
import Button from "../../components/button/button";
import "./document-upload.scss";
import Check from "../../components/check/check";
import { MULTIPLE_TESTING_CENTERS, SINGLE_TESTING_CENTER } from "../../core/constants/document-upload";
import { ClientType, DocumentUploadFormState } from "../../core/interfaces/IDocumentUploadFormState";
import { CheckColors } from "../../components/check/check.type";
import { ButtonType, ButtonSize } from "../../components/button/button.type";
import Dropdown from "../../components/forms/dropdown/dropdown";
import RadioButtonsGroup from "../../components/forms/radio-buttons-group/radio-buttons-group";
import ClientAssignation from "./subcomponents/client-assignation/client-assignation";
import ToleranceWindow from "./subcomponents/tolerance-window/tolerance-window";
import UploadButton from "./subcomponents/upload-button/upload-button";
import Modal from "../../components/modal/modal";
import File from "../file/file";
import FormControl from "../../core/FormControl";
import Validators from "../../core/Validators";
import { touchAllControls } from "../../utils/utils";
import { Form, Formik } from "formik";
import * as Yup from "yup";

function DocumentUpload({ onSubmit }: { onSubmit: (docUploadFormState: DocumentUploadFormState) => void }) {
    // Modal open state
    const [isOpen, setIsOpen] = useState(true);

    const validationSchema = Yup.object().shape({
        importName: Yup.string().required("Import name is required!"),
        file: Yup.mixed().required("File is required!"),
        toleranceWindow: Yup.boolean(),
        clientType: Yup.string().required("Client type is required!"),
    });

    const submit = (state: any) => {
        setIsOpen(false);
        onSubmit(state);
    };

    return (
        <Formik
            initialValues={{
                importName: "",
                file: null,
                elapsedDates: false,
                toleranceWindow: true,
                toleranceWindowTime: null,
                locationChecked: true,
                splitSchedule: "true",
                clientType: ClientType.MULTIPLE,
                clientAssignation: MULTIPLE_TESTING_CENTERS,
            }}
            validate={(values) => {
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
            }}
            onSubmit={(values, { resetForm }) => {
                submit(values);
                resetForm();
            }}
            validationSchema={validationSchema}>
            {({ values, errors, touched }) => (
                <Form>
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
                                    errors={errors.importName}
                                    touched={touched.importName}
                                    id="importName"
                                    options={[
                                        { value: "", label: "Select Import Name:" },
                                        { value: "1", label: "Import 1" },
                                        { value: "2", label: "Import 2" },
                                        { value: "3", label: "Import 3" },
                                    ]}></Dropdown>

                                <File errors={errors.file} touched={touched.file} id="file" />

                                <Check
                                    title="Elapse Data Checking:"
                                    status={{
                                        label: values.elapsedDates ? "Elapsed Dates Found!" : "No Elapsed Dates!",
                                        color: values.elapsedDates ? CheckColors.ERROR : CheckColors.SUCCESS,
                                    }}
                                />

                                <div>
                                    <ToleranceWindow
                                        errors={errors.toleranceWindowTime}
                                        touched={touched.toleranceWindowTime}
                                        toleranceWindowId="toleranceWindow"
                                        toleranceWindowTimeId="toleranceWindowTime"
                                    />
                                </div>
                            </div>
                            <div className="row2">
                                <div className="border-bottom">
                                    <RadioButtonsGroup
                                        title="Split schedule using social distancing?"
                                        id="splitSchedule"
                                        options={[
                                            { value: "true", label: "Yes" },
                                            { value: "false", label: "No" },
                                        ]}></RadioButtonsGroup>
                                </div>
                                <Check
                                    title="Location Checking:"
                                    status={{
                                        label: values.locationChecked ? "All Available!" : "Not Checked",
                                        color: values.locationChecked ? CheckColors.SUCCESS : CheckColors.ERROR,
                                    }}></Check>
                                <RadioButtonsGroup
                                    title="Client:"
                                    id="clientType"
                                    options={[
                                        { value: "Single", label: "Single" },
                                        { value: "Multiple", label: "Multiple" },
                                    ]}></RadioButtonsGroup>
                                {values.clientType === ClientType.SINGLE ? (
                                    <ClientAssignation
                                        touched={touched.clientAssignation}
                                        errors={errors.clientAssignation}
                                        clientAssignation={SINGLE_TESTING_CENTER}
                                        id="clientAssignation"
                                    />
                                ) : (
                                    <ClientAssignation
                                        touched={touched.clientAssignation}
                                        errors={errors.clientAssignation}
                                        clientAssignation={MULTIPLE_TESTING_CENTERS}
                                        id="clientAssignation"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <h3>Data in the import file is correct. Please press Continue to import.</h3>
                            <div className="buttons-container">
                                <Button isSubmit={true} type={ButtonType.PRIMARY} size={ButtonSize.XL}>
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
                </Form>
            )}
        </Formik>
    );
}
export default DocumentUpload;
