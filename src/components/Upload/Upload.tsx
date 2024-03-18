import Button from "../Button/Button";
import "./Upload.scss";
import FileIcon from "../../assets/icons/file.png";

function Upload() {
    const triggerInputFile = () => {
        const inputFile = document.getElementById("input-file");
        if (inputFile) {
            inputFile.click();
        }
    };

    return (
        <div className="upload-container">
            <span className="title">Select a manifest that you'd like to import</span>

            <div className="upload">
                <div className="drag-drop">
                    <img src={FileIcon} alt="" />
                    <span>
                        Drag & Drop Here Or{" "}
                        <strong className="text-primary" onClick={triggerInputFile}>
                            Browse
                        </strong>
                    </span>
                </div>
                <Button type="primary" size="xl" onclick={triggerInputFile}>
                    Upload Manifest
                </Button>
                <input
                    id="input-file"
                    style={{
                        display: "none",
                    }}
                    type="file"
                />
            </div>
        </div>
    );
}

export default Upload;
