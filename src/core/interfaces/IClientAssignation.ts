import { DropdownOption } from "../../components/forms/dropdown/dropdown.type";

export default interface IClientAssignation {
    name: string;
    clients: Array<DropdownOption>;
    time: Date | null;
};