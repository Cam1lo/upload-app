import IFormControl from "../../../core/interfaces/IFormControl";

type RadioButtonsGroupProps = {
    options: { value: string; label: string }[];
    formControl: IFormControl<string>;
    title: string;
};

export type { RadioButtonsGroupProps };