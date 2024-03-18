export function getTimeGivenDate(date: Date): string {
    // Return the time in the format HH:MM
    const formatedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return formatedTime;
}