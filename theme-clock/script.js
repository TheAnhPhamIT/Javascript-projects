const toggle = document.querySelector('.toggle');
const hourNeedle = document.querySelector('.needle.hour');
const minuteNeedle = document.querySelector('.needle.minute');
const secondNeedle = document.querySelector('.needle.second');
const timeEle = document.querySelector('.clock-container > .time');
const dateEle = document.querySelector('.clock-container > .date');

const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setTime();

setInterval(setTime, 1000);

toggle.addEventListener('click', e => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerText = 'Dark mode'
    } else {
        html.classList.add('dark');
        e.target.innerText = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const hoursForClock = hours % 12;

    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    timeEle.innerHTML = `${hours}:${minutes > 9 ? minutes : '0'+minutes} ${ampm}`;
    dateEle.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

function scale(num, inStart, inEnd, outStart, outEnd) {
    return outStart + ((num - inStart) * (outEnd - outStart)) / (inEnd - inStart)
}