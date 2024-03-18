import toast, { Toaster } from "react-hot-toast";
import DocumentUpload from "./containers/document-upload/document-upload";
import { DocumentUploadFormState } from "./core/interfaces/IDocumentUploadFormState";

function App() {
    const onSubmit = (docUploadFormState: DocumentUploadFormState) => {
        toast.success(JSON.stringify(docUploadFormState), {
            duration: 10000,
        });
        toast.success("Document uploaded successfully");
    };

    return (
        <div>
            <DocumentUpload onSubmit={onSubmit}></DocumentUpload>
            <Toaster toastOptions={{ duration: 5000 }} position="bottom-center" />
        </div>
    );
}

export default App;
