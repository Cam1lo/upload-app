export interface IValidator {
    validate(value: any, ...props: any): boolean;
    errorMsg: string;
}