const minutesEl = document.querySelector("#minutes"); 
const secondsEl = document.querySelector("#seconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn"); 

let interval;
let minutes = 0;
let seconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pausarTimer);
resetBtn.addEventListener("click", resetarTimer);

function startTimer() {
    if (!interval) { 
        interval = setInterval(() => {
            if (!isPaused) {
                seconds += 1;

                if (seconds === 60) {
                    minutes++;
                    seconds = 0;
                }

                minutesEl.textContent = formatarTimer(minutes);
                secondsEl.textContent = formatarTimer(seconds);
            }
        }, 1000);
    }
    isPaused = false;
}

function pausarTimer() {
    isPaused = true;
}

function resetarTimer() {
    clearInterval(interval);
    interval = null; // Reinicializa o intervalo
    minutes = 0;
    seconds = 0;
    isPaused = false;
    
    minutesEl.textContent = formatarTimer(minutes);
    secondsEl.textContent = formatarTimer(seconds);
}

function formatarTimer(time) {
    return time < 10 ? `0${time}` : time;
}
