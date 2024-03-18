import { ButtonProps, ButtonSize, ButtonType } from "./button.type";
import "./button.scss";

function Button({ children, onclick, size = ButtonSize.MD, backgroundColor, type = ButtonType.PRIMARY }: ButtonProps) {
    return (
        <button onClick={onclick} className={`button ${type} ${size}`}>
            {children}
        </button>
    );
}

export default Button;
