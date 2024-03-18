export default class Validators {
    static required(value: string) {
        return value.trim() !== "";
    }
    static minLength(value: string, minLength: number) {
        return value.length >= minLength;
    }
    static maxLength(value: string, maxLength: number) {
        return value.length <= maxLength;
    }
    static isEmail(value: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    static isNumber(value: string) {
        return /^[0-9]+$/.test(value);
    }
}