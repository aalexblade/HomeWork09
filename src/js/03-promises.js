import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector("[name='step']"),
  amoun: document.querySelector("[name='amount']"),

}

refs.form.addEventListener('submit', onStart)

function onStart(evt) {
  evt.preventDefault()

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
