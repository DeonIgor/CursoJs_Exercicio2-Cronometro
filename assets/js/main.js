let timerHtml = document.querySelector('.timer');
let startBtt = document.querySelector('.start');
let stopBtt = document.querySelector('.stop');
let resetBtt = document.querySelector('.reset');

let timer;
let seconds = 0;

const createTime = (secs) => new Date(secs * 1000).toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
})

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timerHtml.innerHTML = createTime(++seconds);
    }, 1000);
}


startBtt.addEventListener('click', () => {
    timerHtml.classList.remove('stoped');
    startTimer();
});

stopBtt.addEventListener('click', () => {
    timerHtml.classList.add('stoped');
    clearInterval(timer);
    counting = false;
});

resetBtt.addEventListener('click', () => {
    timerHtml.classList.remove('stoped');
    seconds = 0;
    clearInterval(timer);
    timerHtml.innerHTML = createTime(seconds);
});