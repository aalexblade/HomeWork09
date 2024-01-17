import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector("[name='step']"),
  amoun: document.querySelector("[name='amount']"),

}

refs.form.addEventListener('submit', onCreatePromises)

function onCreatePromises(evt) {
  evt.preventDefault()

  const delay = Number(refs.delay.value)
  const step = Number(refs.step.value)
  const amoun = Number(refs.amoun.value)

  for (let i = 1; i < amoun; i += 1) {
    const specialDelay = Number(delay + step * (i - 1))
    createPromise(i, specialDelay).then(onSuccess).catch(onError)
  }
}

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  })
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
