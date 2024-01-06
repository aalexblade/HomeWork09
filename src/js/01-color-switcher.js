const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
}


refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);
let intervalId = null;

function onStart() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.disabled = true;
}

function onStop() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}