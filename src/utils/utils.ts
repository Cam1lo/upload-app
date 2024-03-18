import FormControl from "../core/FormControl";

export function getTimeGivenDate(date: Date): string {
    // Return the time in the format HH:MM
    const formatedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return formatedTime;
}

export function firstToUpper(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function touchAllControls(controls: any) {
    // loop key values
    for (const key in controls) {
        if (controls.hasOwnProperty(key)) {
            const control = controls[key];
            if (control instanceof FormControl) {
                control.touched = true;
            }
        }
    }

    return controls;
}

export function isFormValid(controls: any): boolean {
    // loop key values
    for (const key in controls) {
        if (controls.hasOwnProperty(key)) {
            const control = controls[key];
            if (control instanceof FormControl) {
                if (!control.isValid) {
                    return false;
                }
            }
        }
    }

    return true;
}