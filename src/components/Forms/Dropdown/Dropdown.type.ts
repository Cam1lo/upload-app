import FormControl from "../../../core/FormControl";

type DropdownProps = {
    options: Array<DropdownOption>;
    formControl: FormControl<string>;
    bottomBorder?: boolean;
};

type DropdownOption = {
    value: string;
    label: string;
}

export type { DropdownProps, DropdownOption };