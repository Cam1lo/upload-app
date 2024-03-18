import { useState } from "react";
import Progress from "../../components/progess/progress";
import Upload from "../../components/upload/upload";
import FormControl from "../../core/FormControl";

function File({ formControl }: { formControl: FormControl<File | null> }) {
    const [file, setFile] = useState<File | null>(formControl.value);

    return (
        <div>
            <Upload
                onFileChange={(file: File) => {
                    formControl.onChange(file);
                    setFile(file);
                }}
            />
            {!formControl.isValid && formControl.touched ? <p className="error-msg">{formControl.errorMsg}</p> : null}

            <Progress file={file} />
        </div>
    );
}
export default File;
