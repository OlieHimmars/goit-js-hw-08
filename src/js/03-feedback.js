import throttle from 'lodash.throttle';

const submitBtn = document.querySelector('.feedback-form button');
const input = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea')

submitBtn.addEventListener('click', onSubmit);

function onSubmit(e) {

    e.preventDefault();
    
        console.log({ 'Email': input.value, message: message.value, });
        localStorage.removeItem("feedback-form-state");
        input.value = '';
        message.value = '';
};

const formThrottled = throttle(() => {
    window.localStorage.setItem("feedback-form-state", JSON.stringify({
        Email: input.value,
        Message: message.value,
    }));
}, 500);

input.addEventListener('input', formThrottled);
message.addEventListener('input', formThrottled);
