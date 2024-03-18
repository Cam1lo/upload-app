import IFormControl from "../../../core/interfaces/IFormControl";

type DropdownProps = {
    options: Array<DropdownOption>;
    formControl: IFormControl<string>;
    bottomBorder?: boolean;
};

type DropdownOption = {
    value: string;
    label: string;
}

export type { DropdownProps, DropdownOption };