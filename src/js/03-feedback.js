import throttle from 'lodash.throttle';

const submit = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

submit.addEventListener('submit', onSubmit);

storageStatusCheck();

function storageStatusCheck() {
    const currentValue = getFormCurrentValue();

  if (currentValue?.Email) {
   input.value = currentValue.Email;
  }

  if (currentValue?.Message) {
     message.value = currentValue.Message;
  }
}

function getFormCurrentValue() {
  return JSON.parse(localStorage.getItem("feedback-form-state"));
}

function onSubmit(e) {

    e.preventDefault();
    
        console.log({ 'Email': input.value, message: message.value, });
        localStorage.removeItem("feedback-form-state");
        input.value = '';
        message.value = '';
};

const formThrottled = throttle((e) => {

    window.localStorage.setItem("feedback-form-state", JSON.stringify({
        Email: input.value,
        Message: message.value,
    }));
}, 500);

input.addEventListener('input', formThrottled);
message.addEventListener('input', formThrottled);
