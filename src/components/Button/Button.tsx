import { ButtonProps, ButtonSize, ButtonType } from "./button.type";
import "./button.scss";

function Button({
    children,
    onclick,
    size = ButtonSize.MD,
    backgroundColor,
    type = ButtonType.PRIMARY,
    isSubmit = false,
}: ButtonProps) {
    return (
        <button type={isSubmit ? "submit" : "button"} onClick={onclick} className={`button ${type} ${size}`}>
            {children}
        </button>
    );
}

export default Button;
