type ButtonProps = {
    children: React.ReactNode;
    onclick?: () => void;
    size?: ButtonSize;
    isSubmit?: boolean;
    type?: ButtonType;
}

enum ButtonSize {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl",
}

enum ButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
}

export type { ButtonProps }
export { ButtonSize, ButtonType }