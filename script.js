const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const targetDate = new Date("November 30 2025 00:00:00").getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const m = Math.floor((distance / (1000 * 60)) % 60);
    const s = Math.floor((distance / 1000) % 60);

    daysEl.innerHTML = d < 0 ? "00" : d;
    hoursEl.innerHTML = h < 0 ? "00" : h;
    minutesEl.innerHTML = m < 0 ? "00" : m;
    secondsEl.innerHTML = s < 0 ? "00" : s;
}

setInterval(timer, 1000);
