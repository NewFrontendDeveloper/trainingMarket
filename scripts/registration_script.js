let entranceTitle = document.querySelector(".form_title_entrance")
let registartionTitle = document.querySelector(".form_title_registration")
let entranceTitleReg = document.querySelector(".form_title_entrance_r")
let registrationTitleReg = document.querySelector(".form_title_registration_r")
let formRegistration = document.querySelector(".form_registration")
let formEntrance = document.querySelector(".form_entrance")

let inputName = document.querySelector(".form_input_name")
let inputEmail = document.querySelector(".form_input_email")
let inputPassword = document.querySelector(".form_input_password")
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

function User(inputName, inputEmail, inputPassword) {
    this.name = inputName;
    this.email = inputEmail;
    this.password = inputPassword
}

function createId(users) {
    return Object.keys(users).length
}

buttonReg.addEventListener("click", () => {
    const nameUser = inputName.value;
    const emailUser = inputEmail.value;
    const passwordUser = inputPassword.value;

    const user = new User(nameUser, emailUser, passwordUser)

    const userId = 'User' + createId(users)

    users[userId] = user

    console.log(users)
})