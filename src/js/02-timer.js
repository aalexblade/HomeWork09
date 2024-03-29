import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    datePicker: document.querySelector('#datetime-picker'),
    startBtm: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

refs.startBtm.disabled = true;
refs.startBtm.addEventListener('click', onStartClick)
let ms = 0;
let selectedTime = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() <= new Date()) {
            Notify.failure("Please choose a date in the future!");
            return;
        }
        refs.startBtm.disabled = false;
        selectedTime = selectedDates[0].getTime();
        Notify.success("Your choice of date is a success!");

    },
};

flatpickr(refs.datePicker, options);

function onStartClick() {
    const delay = 1000;
    const intervalId = setInterval(() => {

        if (selectedTime < new Date()) {
            clearInterval(intervalId);
            return;
        }
        ms = selectedTime - new Date();
        refs.startBtm.disabled = true;

        console.log(convertMs(ms))
        render(convertMs(ms));

    }, delay);
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function render({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
}