
export const DateFormatWithTime = (date: Date) => {

    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
    }


    return date.toLocaleDateString('en-US', options);
}

export const DateFormatShort = (date: Date) => {

    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }

    return date.toLocaleDateString('en-US', options);
}