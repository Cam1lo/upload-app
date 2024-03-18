import Button from "../button/button";
import "./upload.scss";
import FileIcon from "../../assets/icons/file.png";
import { ButtonSize, ButtonType } from "../button/button.type";

function Upload({ onFileChange }: { onFileChange: (file: File) => void }) {
    const triggerInputFile = () => {
        const inputFile = document.getElementById("input-file");
        if (inputFile) {
            inputFile.click();
        }
    };

    const handleDrop = (event: any) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        onFileChange(file);
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
    };

    return (
        <div className="upload-container">
            <span className="title">Select a manifest that you'd like to import</span>

            <div className="upload">
                <div className="drag-drop" onDrop={handleDrop} onDragOver={handleDragOver}>
                    <img src={FileIcon} alt="" />
                    <span>
                        Drag & Drop Here Or{" "}
                        <strong className="text-primary" onClick={triggerInputFile}>
                            Browse
                        </strong>
                    </span>
                </div>
                <Button type={ButtonType.PRIMARY} size={ButtonSize.XL} onclick={triggerInputFile}>
                    Upload Manifest
                </Button>
                <input
                    id="input-file"
                    style={{
                        display: "none",
                    }}
                    onChange={(event) => {
                        const file = event.target.files && event.target.files[0];
                        if (file) {
                            onFileChange(file);
                        }
                    }}
                    type="file"
                />
            </div>
        </div>
    );
}

export default Upload;
