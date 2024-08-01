let entranceTitle = document.querySelector(".form_title_entrance")
let registartionTitle = document.querySelector(".form_title_registration")
let entranceTitleReg = document.querySelector(".form_title_entrance_r")
let registrationTitleReg = document.querySelector(".form_title_registration_r")
let formRegistration = document.querySelector(".form_registration")
let formEntrance = document.querySelector(".form_entrance")

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

