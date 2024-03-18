import FormControl from "../../../core/FormControl";

type RadioButtonsGroupProps = {
    options: { value: string; label: string }[];
    formControl: FormControl<string>;
    title: string;
};

export type { RadioButtonsGroupProps };