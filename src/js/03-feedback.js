
const submitBtn = document.querySelector('.feedback-form button');
const input = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea')

submitBtn.addEventListener('click', onSubmit);

function onSubmit(e) {

    e.preventDefault();
    
        console.log({ 'Email': input.value, message: message.value, });
        localStorage.clear("feedback-form-state");
        input.value = '';
        message.value = '';
};

input.addEventListener('input', onTyping);
message.addEventListener('input', onTyping);

function onTyping(e) {
    const formEl = {
    Email: input.value,
    Message: message.value,
};
    window.localStorage.setItem("feedback-form-state", JSON.stringify(formEl));
};
