import Button from "../button/button";
import "./modal.scss";
import CloseIcon from "../../assets/icons/close.png";
import { ModalProps } from "./modal.type";
import { ButtonSize, ButtonType } from "../button/button.type";

function Modal({ title, children, onClose, isOpen }: ModalProps) {
    return isOpen ? (
        <div className="wrapper">
            <div className="modal">
                <Button type={ButtonType.TERTIARY} size={ButtonSize.XS} onclick={onClose}>
                    <img src={CloseIcon} alt="" height={18} width={19} />
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
