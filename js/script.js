let receiveBtn = document.querySelector('#receive');
let modal = document.querySelector('.modal');
let modalBtnClose = document.querySelector('.modal button');
let message = document.querySelector('.modal_contact textarea');
let nameInput = document.querySelector('.contactform_name');

receiveBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

modalBtnClose.addEventListener('click', function () {
    modal.style.display = 'none';
});

nameInput.addEventListener('input', function () {
    message.value = `Привет, меня зовут ${nameInput.value}. Хочу задать вопрос:`;
    if (nameInput.value == '') {
        message.value = '';
    }
});

