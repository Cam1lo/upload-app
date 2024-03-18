import IClientAssignation from "../../../../core/interfaces/IClientAssignation";
import IFormControl from "../../../../core/interfaces/IFormControl";

type ClientAssignationProps = {
    clientAssignation: IClientAssignation;
    dropDownformControl: IFormControl<string>;
    timeFormControl: IFormControl<Date | null>;
};

export type { ClientAssignationProps };