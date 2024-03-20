import { FormikErrors, FormikTouched } from "formik/dist/types";
import IClientAssignation from "../../../../core/interfaces/IClientAssignation";

type ClientAssignationProps = {
    clientAssignation: Array<IClientAssignation>;
    id: string,
    errors?: string | string[] | FormikErrors<IClientAssignation>[],
    touched?: FormikTouched<IClientAssignation>[]
};

export type { ClientAssignationProps };