import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import 'notiflix/dist/notiflix-3.2.7.min.css';

const refs = {
    datePicker: document.querySelector('#datetime-picker'),
    startBtm: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

refs.startBtm.disabled = true;
// refs.startBtm.addEventListener('click', onStartClick)

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() <= new Date()) {
            window.alert("Please choose a date in the future")
            return;
        }
    },
};



flatpickr(refs.datePicker, options);
