import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', onFormSubmit)
const { delay, step, amount } = refs.form.elements;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
};
  
function onFormSubmit(evt) {
  evt.preventDefault();

  let delayValue = Number(delay.value);
  const amountValue = Number(amount.value);

  for (let i = 1; i <= amountValue; i += 1){
    createPromise(i, delayValue).then(({ position, delay }) => {
   Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delayValue += Number(step.value);
};
  };
  



