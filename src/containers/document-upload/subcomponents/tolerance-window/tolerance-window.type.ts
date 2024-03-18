import IFormControl from "../../../../core/interfaces/IFormControl";

type ToleranceWindowProps = {
    toggleformControl: IFormControl<boolean>;
    timeFormControl: IFormControl<Date | null>;
};

export type { ToleranceWindowProps };