export function getTimeGivenDate(date: Date): string {
    const formatedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return formatedTime;
}

export function firstToUpper(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
