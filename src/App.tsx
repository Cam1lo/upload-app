import DocumentUpload from "./containers/DocumentUpload/DocumentUpload";
import DocumentUploadFormState from "./core/interfaces/IDocumentUploadFormState";

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