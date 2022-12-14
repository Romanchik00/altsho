// Существуют разные способы получить DOM-узел; здесь мы определяем саму форму и
// поле ввода email и элемент span, в который поместим сообщение об ошибке
const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
const name = document.getElementById('name');
const tel = document.getElementById('tel');

email.addEventListener('input', function (event) {
  // Каждый раз, когда пользователь что-то вводит,
  // мы проверяем, являются ли поля формы валидными

  if (email.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    emailError.textContent = ''; // Сбросить содержимое сообщения
    emailError.className = 'error'; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // Если поле email валдно, позволяем форме отправляться

  if(!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // Если поле пустое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) { 
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  // Задаём соответствующую стилизацию
  emailError.className = 'error active';
}
