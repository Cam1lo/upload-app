import FormControl from "../../../../core/FormControl";
import IClientAssignation from "../../../../core/interfaces/IClientAssignation";

type ClientAssignationProps = {
    clientAssignation: Array<IClientAssignation>;
    formControl: FormControl<Array<IClientAssignation>>;
};

export type { ClientAssignationProps };