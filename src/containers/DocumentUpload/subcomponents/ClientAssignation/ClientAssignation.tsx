import IClientAssignation from "../../../../core/interfaces/IClientAssignation";
import Dropdown from "../../../../components/Forms/Dropdown/Dropdown";
import Time from "../../../../components/Forms/Time/Time";
import "./ClientAssignation.scss";
import IFormControl from "../../../../core/interfaces/IFormControl";

type Props = {
    clientAssignation: IClientAssignation;
    dropDownformControl: IFormControl<string>;
    timeFormControl: IFormControl<Date | null>;
};

function ClientAssignation({ clientAssignation, dropDownformControl, timeFormControl }: Props) {
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
