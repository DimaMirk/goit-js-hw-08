const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  texarea: document.querySelector('textarea'),
  email: document.querySelector('input'),
};

const MESSEGE_KEY = 'messege';
const EMAIL_KEY = 'email';
messegeToTextarea();
emailToTEmail();

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.texarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.email.addEventListener('input', throttle(onEmailInput, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(MESSEGE_KEY);
  localStorage.removeItem(EMAIL_KEY);
  console.log(formData);
}

function onTextareaInput(evn) {
  const massege = evn.target.value;
  localStorage.setItem(MESSEGE_KEY, massege);
}
function onEmailInput(evn) {
  const email = evn.target.value;
  localStorage.setItem(EMAIL_KEY, email);
}

function messegeToTextarea() {
  const sevedMessege = localStorage.getItem(MESSEGE_KEY);
  if (sevedMessege) {
    refs.texarea.value = sevedMessege;
  }
}
function emailToTEmail() {
  const sevedEmail = localStorage.getItem(EMAIL_KEY);
  if (sevedEmail) {
    refs.email.value = sevedEmail;
  }
}
