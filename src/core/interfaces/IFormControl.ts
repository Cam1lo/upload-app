import Validators from "../Validators";

export default interface IFormControl<T> {
    value: T;
    onChange: (event: any) => void;
    validators?: Array<Validators>;
    isValid?: boolean;
    errorMsg?: string;
    touched?: boolean;
}