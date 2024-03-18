export default class Validators {
    static required(value: string): boolean {
        return value.trim() !== "";
    }
    static minLength(value: string, minLength: number): boolean {
        return value.length >= minLength;
    }
    static maxLength(value: string, maxLength: number): boolean {
        return value.length <= maxLength;
    }
    static isEmail(value: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    static isNumber(value: string): boolean {
        return /^[0-9]+$/.test(value);
    }
}