'use client';

const DateBuilder = (d, format) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let pureMonth = d.getMonth();
    let year = d.getFullYear();
    switch(format) {
        case 1:
            return `${day} | ${date} ${month} ${year}`
        case 2:
            return `${date}/${month}`
    }
}

export default DateBuilder