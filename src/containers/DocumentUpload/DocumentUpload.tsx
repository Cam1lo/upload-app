import { useState } from "react";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import "./DocumentUpload.scss";
import Dropdown from "../../components/Forms/Dropdown/Dropdown";
import UploadButton from "./subcomponents/UploadButton";
import Validators from "../../models/Validators";
import Radio from "../../components/Forms/Radio/Radio";

type DocumentUploadFormState = {
    importName: string;
    file: File;
    elapsedDates: boolean;
    toleranceWindow: boolean;
    splitSchedule: boolean;
    locationChecked: boolean;
    clientType: "Single" | "Multiple";
    clientList: string[];
};

function DocumentUpload() {
    const [isOpen, setIsOpen] = useState(true);

    const modalOnClose = () => {
        setIsOpen(false);
    };

    const uploadDocumentOnClick = () => {
        setIsOpen(true);
    };

    const [formState, setFormState] = useState<Partial<DocumentUploadFormState>>({
        importName: "",
        // file: new File([""], "filename"),
        elapsedDates: false,
        toleranceWindow: false,
        splitSchedule: false,
        locationChecked: false,
        clientType: "Single",
        clientList: [],
    });

    const onImportNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.options[event.target.selectedIndex].value;
        setFormState((prev) => ({ ...prev, importName: selectedValue }));
    };

    const onClientTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setFormState((prev) => ({ ...prev, splitSchedule: selectedValue === "true" }));
    };

    const submit = () => {
        console.log(formState);
    };

    return (
        <>
            <UploadButton uploadDocumentOnClick={uploadDocumentOnClick}></UploadButton>
            <Modal title="Document Upload" isOpen={isOpen} onClose={modalOnClose}>
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
                    </div>
                    <div className="row2">
                        <Radio
                            title="Client Type"
                            formControl={{ value: formState.splitSchedule, onChange: onClientTypeChange }}
                            options={[
                                { value: true, label: "Yes" },
                                { value: false, label: "No" },
                            ]}></Radio>
                    </div>
                </div>
                <div className="modal-footer">
                    <h3>Data in the import file is correct. Please press Continue to import.</h3>
                    <div className="buttons-container">
                        <Button onclick={submit} type="primary" size="xl">
                            Continue Import
                        </Button>
                        <Button type="secondary" size="xl" onclick={modalOnClose}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default DocumentUpload;
