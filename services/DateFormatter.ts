export class DateFormatter {
    static deleteTimeZoneName (date: Date) : string {
        return date.toString().replace(/.\((.*)\)/, "");
    }
    static twoDigitDate (date: Date) : string {
        return date.toLocaleString([], { hour: "2-digit", minute: "2-digit" });
    }
}