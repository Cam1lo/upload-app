import Dropdown from "../../../../components/Forms/Dropdown/Dropdown";
import Time from "../../../../components/Forms/Time/Time";
import "./ClientAssignation.scss";
import { ClientAssignationProps } from "./ClientAssignation.type";

function ClientAssignation({ clientAssignation, dropDownformControl, timeFormControl }: ClientAssignationProps) {
    return (
        <div className="client-assignation">
            <div className="label">{clientAssignation.name}</div>
            <div className="left">
                <Dropdown
                    bottomBorder={false}
                    options={clientAssignation.clients}
                    formControl={dropDownformControl}></Dropdown>
                <Time formControl={timeFormControl} label={""} />
            </div>
        </div>
    );
}
export default ClientAssignation;
