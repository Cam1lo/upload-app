import { IValidator } from "./interfaces/IValidator";

class FormControl<T> {
    value: T;
    onChange: (event: any) => void;
    validators: Array<IValidator>;
    isValid: boolean;
    errorMsg?: string;
    touched: boolean;

    constructor(
        value: T,
        validators: Array<IValidator> = [],
        onChange?: (value: any) => void,
    ) {

        this.value = value;
        this.onChange = (value: any) => {
            this.value = value;
            this.isValid = this.validate();
            if (onChange) {
                onChange(value);
            }
        };
        this.validators = validators;
        this.isValid = this.validate();
        this.touched = false;

    }

    private validate(): boolean {
        let valid = true;

        this.validators.forEach((validator) => {
            if (!validator.validate(this.value)) {

                valid = false;
                this.errorMsg = validator.errorMsg;

                return;
            }
        });
        return valid;
    }
}

export default FormControl;
