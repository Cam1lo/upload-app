import "./progress.scss";
import FileIcon from "../../assets/icons/file-image.png";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { firstToUpper } from "../../utils/utils";

function Progress({ file }: { file: File | null }) {
    const [progress, setProgress] = useState(0);
    const [fileName, setFileName] = useState("");
    const [fileSize, setFileSize] = useState("");

    useEffect(() => {
        if (file) {
            setFileName(file.name);
            setFileSize((file.size / 1024 / 1024).toFixed(1) + "MB");

            setProgress(0);
            setTimeout(() => {
                setProgress(2);
            }, 100);

            setTimeout(() => {
                setProgress(100);
                toast.success(`${firstToUpper(file.name)} File uploaded successfully`);
            }, 2000);
        }
    }, [file]);

    return file ? (
        <div className="border-bottom">
            <div className="progress">
                <div className="col1">
                    <img src={FileIcon} alt="" />
                </div>
                <div className="col2">
                    <div className="top">
                        <div className="name">{fileName}</div>
                        <div className="size">{fileSize}</div>
                    </div>
                    <div className="bottom">
                        <div className="bar">
                            <div
                                className="fill"
                                style={{
                                    width: progress + "%",
                                    transition: progress !== 0 ? "width .5s" : "none",
                                }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

export default Progress;
