import { useState } from "react";
import Progress from "../../components/progess/progress";
import Upload from "../../components/upload/upload";
import { FileProps } from "./file.type";

function File({ errors, touched, id }: FileProps) {
    const [file, setFile] = useState<File | null>(null);

    return (
        <div>
            <Upload
                id={id}
                onFileChange={(file: File) => {
                    setFile(file);
                }}
            />
            {errors && touched ? <p className="error-msg">{errors}</p> : null}

            <Progress file={file} />
        </div>
    );
}
export default File;
