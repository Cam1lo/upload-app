import Validators from "./Validators";

export default interface FormControl<T> {
    value: T;
    onChange: (event: any) => void;
    validators?: Validators[];
}