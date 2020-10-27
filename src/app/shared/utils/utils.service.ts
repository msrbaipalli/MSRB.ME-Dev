export function isString(value: string): boolean {
    return typeof value === 'string';
}

export function isFunction(value: any): boolean {
    return typeof value === 'function';
}

export function isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
}

export function isEmptyString(value: string): boolean {
    return isString(value) && value.trim() === '';
}

export function buildDate(beginDate: string, endDate: string): string {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const bDate = beginDate && new Date(beginDate);
    const eDate = endDate && new Date(endDate);
    const beginDateValue = `${monthNames[bDate.getMonth()]} ${bDate.getFullYear()}`;
    const endDateValue = endDate && `${monthNames[eDate.getMonth()]} ${eDate.getFullYear()}`;

    return `${beginDateValue} - ${endDateValue || 'Present'}`;
}