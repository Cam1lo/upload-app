import { useState } from "react";
import Progress from "../../components/progess/progress";
import Upload from "../../components/upload/upload";

function File({ onFileChange }: { onFileChange: (file: File) => void }) {
    const [file, setFile] = useState<File | null>(null);

    return (
        <div>
            <Upload
                onFileChange={(file: File) => {
                    onFileChange(file);
                    setFile(file);
                }}
            />
            <Progress file={file} />
        </div>
    );
}
export default File;
