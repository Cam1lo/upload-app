import { useState } from "react";
import Button from "../../components/button/button";
import "./document-upload.scss";
import Check from "../../components/check/check";
import {
    DEFAULT_FORM_STATE,
    DEFAULT_VALIDATION,
    DEFAULT_VALIDATION_SCHEMA,
    IMPORT_NAMES,
    MULTIPLE_TESTING_CENTERS,
    SINGLE_TESTING_CENTER,
} from "../../core/constants/document-upload";
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
import { Form, Formik } from "formik";

function DocumentUpload({ onSubmit }: { onSubmit: (docUploadFormState: DocumentUploadFormState) => void }) {
    // Modal open state
    const [isOpen, setIsOpen] = useState(true);

    // Formik validation schema
    const validationSchema = DEFAULT_VALIDATION_SCHEMA;

    return (
        <Formik
            initialValues={DEFAULT_FORM_STATE}
            validate={DEFAULT_VALIDATION}
            onSubmit={(values, { resetForm }) => {
                setIsOpen(false);
                onSubmit(values);
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
                                    options={IMPORT_NAMES}></Dropdown>

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
