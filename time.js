const timerElement = document.getElementById('timer');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateTimer() {
    const savedTime = localStorage.getItem('savedTime');
    if (!savedTime) return;

    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const remainingTime = nextDay - now;

    if (remainingTime > 0) {
        timerElement.textContent = formatTime(remainingTime);
    } else {
        timerElement.textContent = "00:00:00";
    }
}

function startTimer() {
    const now = new Date().toISOString();
    localStorage.setItem('savedTime', now);
}

setInterval(updateTimer, 1000);
updateTimer();