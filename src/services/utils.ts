const getStartsTime = (eventStarts: string): string => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date(Number(eventStarts));
    const month = date.getMonth();
    const minutes = date.getMinutes().toString()
    const formatMinutes = minutes.length === 1 ? `${minutes}0` : minutes;

    return `${months[month]}, ${date.getDate()}, ${date.getHours()}:${formatMinutes}`;
};

const getRegistrationEndTime = (endTime: string) => {
    const registrationEndTime = Number(endTime) - Date.now() + Date.now();
    const timeDiff = registrationEndTime - Date.now();
    const diffDays = Math.floor(timeDiff / 86400000); // days
    const diffHrs = Math.floor((timeDiff % 86400000) / 3600000); // hours
    const diffMins = Math.round(((timeDiff % 86400000) % 3600000) / 60000);

    return [
        {title: 'days', value: diffDays},
        {title: 'hours', value: diffHrs },
        {title: 'minutes', value: diffMins}
    ]
};

export const utils = {
    getStartsTime,
    getRegistrationEndTime
}