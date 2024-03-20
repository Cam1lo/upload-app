import Time from "../../../../components/forms/time/time";
import Dropdown from "../../../../components/forms/dropdown/dropdown";
import "./client-assignation.scss";
import IClientAssignation from "../../../../core/interfaces/IClientAssignation";
import { useFormikContext } from "formik";
import { ClientAssignationProps } from "./client-assignation.type";

function ClientAssignation({ clientAssignation, id, errors, touched }: ClientAssignationProps) {
    const { values, setFieldValue } = useFormikContext<any>();
    const dropdownChange = (newClient: any) => {
        setFieldValue(
            "clientAssignation",
            values.clientAssignation.map((client: any) =>
                client.name === newClient.name
                    ? {
                          ...client,
                          selectedClient: newClient.selectedClient,
                      }
                    : client
            )
        );
    };

    const timeChange = (newClient: any) => {
        setFieldValue(
            "clientAssignation",
            values.clientAssignation.map((client: any) =>
                client.name === newClient.name
                    ? {
                          ...client,
                          time: newClient.time,
                      }
                    : client
            )
        );

        console.log(newClient);
    };

    return (
        <div className="clients">
            {clientAssignation.map((client: IClientAssignation, index: number) => {
                return (
                    <div className="client-assignation" key={index}>
                        <div className="label">{client.name}</div>
                        <div className="left">
                            <Dropdown
                                bottomBorder={false}
                                options={client.clients}
                                onChange={(e: any) => {
                                    dropdownChange({
                                        ...client,
                                        selectedClient: String(e),
                                    });
                                }}></Dropdown>
                            <Time
                                id={id + index}
                                onChange={(e: Date) => {
                                    timeChange({
                                        ...client,
                                        time: e,
                                    });
                                }}
                                label={""}
                            />
                        </div>
                    </div>
                );
            })}
            {touched && errors && (
                <p className="error-msg">{typeof errors === "string" ? errors : errors.join(", ")}</p>
            )}
        </div>
    );
}
export default ClientAssignation;
