import { DropdownOption } from "../../components/Forms/Dropdown/Dropdown.type";

export default interface IClientAssignation {
    name: string;
    clients: Array<DropdownOption>;
    time: Date | null;
};