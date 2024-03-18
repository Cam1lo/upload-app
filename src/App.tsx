import DocumentUpload from "./containers/document-upload/document-upload";
import { DocumentUploadFormState } from "./core/interfaces/IDocumentUploadFormState";

function App() {
    const onSubmit = (docUploadFormState: DocumentUploadFormState) => {
        console.log(docUploadFormState);
    };

    return (
        <div>
            <DocumentUpload onSubmit={onSubmit}></DocumentUpload>
        </div>
    );
}

export default App;
