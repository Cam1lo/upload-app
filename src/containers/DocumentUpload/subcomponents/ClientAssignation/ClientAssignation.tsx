import IClientAssignation from "../../../../core/interfaces/IClientAssignation";
import Dropdown from "../../../../components/Forms/Dropdown/Dropdown";
import Time from "../../../../components/Forms/Time/Time";
import "./ClientAssignation.scss";

type Props = {
    clientAssignation: IClientAssignation;
    formControl: any;
};

function ClientAssignation({ clientAssignation, formControl }: Props) {
    return (
        <div className="client-assignation">
            <div className="label">{clientAssignation.name}</div>
            <div className="left">
                <Dropdown bottomBorder={false} options={clientAssignation.clients} formControl={formControl}></Dropdown>
                <Time label={""} />
            </div>
        </div>
    );
}
export default ClientAssignation;
