type DropdownProps = {
    errors?: string;
    touched?: boolean;
    id?: string;
    options: Array<DropdownOption>;
    bottomBorder?: boolean;
    onChange?: (value: string) => void;
};

type DropdownOption = {
    value: string;
    label: string;
}

export type { DropdownProps, DropdownOption };