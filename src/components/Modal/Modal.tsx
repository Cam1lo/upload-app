import Button from "../Button/Button";
import "./Modal.scss";

type Props = {
    title: string;
    children?: React.ReactNode;
    onClose?: () => void;
    isOpen?: boolean;
};

function Modal({ title, children, onClose, isOpen }: Props) {
    return isOpen ? (
        <div className="wrapper">
            <div className="modal">
                <Button type="tertiary" backgroundColor="#041d58" onclick={onClose}>
                    <img src="/assets/icons/close.png" alt="" height={18} width={19} />
                </Button>
                <div className="content">
                    <h1 className="border-bottom">{title}</h1>
                    <div className="body">{children}</div>
                </div>
            </div>
        </div>
    ) : null;
}

export default Modal;
