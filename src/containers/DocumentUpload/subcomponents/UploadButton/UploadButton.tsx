import "./UploadButton.scss";

function UploadButton({ uploadDocumentOnClick }: { uploadDocumentOnClick: () => void }) {
    return (
        <div className="container">
            <img
                onClick={uploadDocumentOnClick}
                src="/assets/icons/file-upload.png"
                alt=""
                height={100}
                width={100}></img>
            <h2>Upload Document</h2>
        </div>
    );
}

export default UploadButton;
