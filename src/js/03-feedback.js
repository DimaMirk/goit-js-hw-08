const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  texarea: document.querySelector('textarea'),
};

const MESSEGE_KEY = 'messege';
messegeToTextarea();

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.texarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(MESSEGE_KEY);
  console.log(formData);
}

function onTextareaInput(evn) {
  const massege = evn.target.value;
  localStorage.setItem(MESSEGE_KEY, massege);
}

function messegeToTextarea() {
  const sevedMessege = localStorage.getItem(MESSEGE_KEY);
  if (sevedMessege) {
    refs.texarea.value = sevedMessege;
  }
}
