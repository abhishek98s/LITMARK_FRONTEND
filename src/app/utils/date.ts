export const getCurrentDate = (data: any) => {
    const currentDate: Date = new Date(data);
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}