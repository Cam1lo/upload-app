import IFormControl from "../../../core/interfaces/IFormControl";

type TimeProps = {
    label: string;
    formControl: IFormControl<Date | null>;
};

export type { TimeProps };