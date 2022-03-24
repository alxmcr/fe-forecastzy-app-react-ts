const options: Intl.DateTimeFormatOptions = { timeZone: 'UTC', weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

export const convertTimeUTCToDate = (timeUTC: number): Date => {
    const date = new Date(timeUTC * 1000); // convert to milliseconds
    return date;
}

export const formatDataPoint = (dataPoint: number, locale: string = 'en-US') => {
    const date = convertTimeUTCToDate(dataPoint);
    return date.toLocaleDateString(locale, options);
}