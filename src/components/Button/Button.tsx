import "./Button.scss";

type Props = {
    children: React.ReactNode;
    onclick?: () => void;
    size?: "sm" | "md" | "lg" | "xl";
    backgroundColor?: string;
    type?: "primary" | "secondary" | "tertiary";
};

function Button({ children, onclick, size, backgroundColor, type = "primary" }: Props) {
    return (
        <button onClick={onclick} className={`button ${type} ${size}`}>
            {children}
        </button>
    );
}

export default Button;
