const addZero = (value: string): string => {
    return value.length === 1 ? `0${value}` : value;
}

const getStartsTime = (eventStarts: string): string => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date(Number(eventStarts));
    const month = date.getMonth();
    const minutes = date.getMinutes().toString();
    const formatMinutes = addZero(minutes);

    return `${months[month]}, ${date.getDate()}, ${date.getHours()}:${formatMinutes}`;
};

const getRegistrationEndTime = (endTime: string) => {
    const registrationEndTime = Number(endTime) - Date.now() + Date.now();
    const timeDiff = registrationEndTime - Date.now();
    const diffDays = Math.floor(timeDiff / 86400000);
    const diffHrs = Math.floor((timeDiff % 86400000) / 3600000);
    const diffMins = Math.round(((timeDiff % 86400000) % 3600000) / 60000);
    const formatDays = addZero(diffDays.toString());
    const formatHours = addZero(diffHrs.toString());
    const formatMinutes = addZero(diffMins.toString());

    return [
        {title: 'days', value: formatDays},
        {title: 'hours', value: formatHours },
        {title: 'minutes', value: formatMinutes}
    ]
};

export const utils = {
    getStartsTime,
    getRegistrationEndTime
}