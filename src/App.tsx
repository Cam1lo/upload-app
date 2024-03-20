import toast, { Toaster } from "react-hot-toast";
import DocumentUpload from "./containers/document-upload/document-upload";

function App() {
    const onSubmit = () => {
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
