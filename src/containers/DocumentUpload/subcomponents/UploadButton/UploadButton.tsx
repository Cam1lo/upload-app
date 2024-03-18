import "./UploadButton.scss";
import UploadIcon from "../../../../assets/icons/file-upload.png";

function UploadButton({ uploadDocumentOnClick }: { uploadDocumentOnClick: () => void }) {
    return (
        <div className="container">
            <img onClick={uploadDocumentOnClick} src={UploadIcon} alt="" height={100} width={100}></img>
            <h2>Upload Document</h2>
        </div>
    );
}

export default UploadButton;
