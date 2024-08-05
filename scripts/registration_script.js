let entranceTitle = document.querySelector(".form_title_entrance")
let registartionTitle = document.querySelector(".form_title_registration")
let entranceTitleReg = document.querySelector(".form_title_entrance_r")
let registrationTitleReg = document.querySelector(".form_title_registration_r")
let formRegistration = document.querySelector(".form_registration")
let formEntrance = document.querySelector(".form_entrance")

let inputName = document.querySelector(".form_input_name")
let inputEmail = document.querySelector(".form_input_email")
let inputPassword = document.querySelector(".form_input_password1")
let buttonReg = document.querySelector(".form_button_reg")

entranceOrRegistration()

function entranceOrRegistration() {
    if (formRegistration.classList.contains("hide")) {
        entranceTitle.style.color = "white"
        window.location.hash = "authentication"
    } else {
        registrationTitleReg.style.color = "white"
        window.location.hash = "registration"
    }
}

if (window.location.hash) {
    entranceOrRegistration(window.location.hash.slice(1));
}

entranceTitleReg.addEventListener("click", () => {
    formEntrance.classList.remove("hide");
    formEntrance.classList.add("show");
    formRegistration.classList.remove('show')
    formRegistration.classList.add('hide')
    entranceOrRegistration()
})

registartionTitle.addEventListener("click", () => {
    formRegistration.classList.remove('hide');
    formRegistration.classList.add('show');
    formEntrance.classList.remove('show')
    formEntrance.classList.add('hide');
    entranceOrRegistration()
})

let users = {};

/* конструктор для создания пользователя */
function User(inputName, inputEmail, inputPassword) {
    this.name = inputName;
    this.email = inputEmail;
    this.password = inputPassword
}

/* создание id пользователя */
function createId(users) {
    return Object.keys(users).length
}

/* добавление нового пользователя при нажатии на кнопку регистрации */
buttonReg.addEventListener("click", () => {
    const nameUser = inputName.value;
    const emailUser = inputEmail.value;
    const passwordUser = inputPassword.value;

    const user = new User(nameUser, emailUser, passwordUser)

    const userId = 'User' + createId(users)

    users[userId] = user

    console.log(users)
})

// Универсальная функция для показа/скрытия пароля и переключения иконки
function togglePasswordVisibility(inputSelector, eyeSelector) {
    let input = document.querySelector(inputSelector);
    let eye = document.querySelector(eyeSelector);

    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        eye.src = '/pic/visual.png';
    } else {
        input.setAttribute('type', 'password');
        eye.src = '/pic/eye.png';
    }
}

// Привязываем функцию показа/скрытия пароля к соответствующим элементам
document.querySelector(".eye_btn_entrance").addEventListener("click", () => {
    togglePasswordVisibility(".form_input_entrance", ".eye_btn_entrance");

});

document.querySelector(".eye_btn1").addEventListener("click", () => {
    togglePasswordVisibility(".form_input_password1", ".eye_btn1");
});

document.querySelector(".eye_btn2").addEventListener("click", () => {
    togglePasswordVisibility(".form_input_password2", ".eye_btn2");
});

$('body').on('input', '.form_input_entrance', function () {
    this.value = this.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-\,]/g, '');
});

$('body').on('input', '.form_input_password1', function () {
    this.value = this.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-\,]/g, '');
});

$('body').on('input', '.form_input_password2', function () {
    this.value = this.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-\,]/g, '');
});

password_hint = function passwordHint() {
    alert("Пароль может содержать только символы: A-z, 0-9, ! @ # $ % ^ & * ( ) _ - + ,")
}

$('.form_input_entrance').one('click', password_hint)
$('.form_input_password1').one('click', password_hint)
$('.form_input_password2').one('click', password_hint)

email_hint = function passwordHint() {
    alert("Поле может содержать латинские буквы, цифры, символы . @ ! # $ % & ' * + - / = ? ^ _ ` { | } ~ \n \nПример: vtact-store@gmail.com")
}

$('.form_input').one('click', email_hint)
$('.form_input_email').one('click', email_hint)