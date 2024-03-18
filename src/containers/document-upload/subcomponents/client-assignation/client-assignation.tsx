import Time from "../../../../components/forms/time/time";
import Dropdown from "../../../../components/forms/dropdown/dropdown";
import "./client-assignation.scss";
import { ClientAssignationProps } from "./client-assignation.type";
import IClientAssignation from "../../../../core/interfaces/IClientAssignation";
import FormControl from "../../../../core/FormControl";

function ClientAssignation({ clientAssignation, formControl }: ClientAssignationProps) {
    return (
        <>
            {clientAssignation.map((client: IClientAssignation, index: number) => {
                return (
                    <div className="client-assignation" key={index}>
                        <div className="label">{client.name}</div>
                        <div className="left">
                            <Dropdown
                                bottomBorder={false}
                                options={client.clients}
                                formControl={
                                    new FormControl(client.clients[0].value, [], (e) => {
                                        client.selectedClient = e;
                                        formControl.onChange(clientAssignation);
                                    })
                                }></Dropdown>
                            <Time
                                formControl={
                                    new FormControl(client.time, [], (e) => {
                                        client.time = e;
                                        formControl.onChange(clientAssignation);
                                    })
                                }
                                label={""}
                            />
                        </div>
                    </div>
                );
            })}
            {!formControl.isValid && formControl.touched ? <p className="error-msg">{formControl.errorMsg}</p> : null}
        </>
    );
}
export default ClientAssignation;
