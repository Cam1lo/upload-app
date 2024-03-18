import Time from "../../../../components/forms/time/time";
import Dropdown from "../../../../components/forms/dropdown/dropdown";
import "./client-assignation.scss";
import { ClientAssignationProps } from "./client-assignation.type";

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
