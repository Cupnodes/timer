const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

let currentTime = 0;

daysElement.innerHTML = `00`;
hoursElement.innerHTML = `00`;
minutesElement.innerHTML = `00`;
secondsElement.innerHTML = `00`;

function countDown() {
    currentTime = currentTime + 1;

    console.log(currentTime);

    const seconds = Math.floor(currentTime) % 60;
    const minutes = Math.floor(currentTime / 60) % 60;
    const hours = Math.floor(currentTime / 3600) % 24;
    const days = Math.floor(currentTime / 3600 / 24);

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

window.setInterval(countDown, 1000);