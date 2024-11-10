const nextButton = document.getElementById("nextBtn");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPass = document.getElementById("inputPass");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

function validateName(name) {
    const nameRegex = /^[A-Za-z]{3,}$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
function validatePass(pass) {
    const passRegex = /^(?=(?:.*[A-Za-z]){8,})(?=.*\d)[A-Za-z\d]+$/;
    return passRegex.test(pass);
}
const check = () => {
    const nameValue = inputName.value;
    const emailValue = inputEmail.value;
    const passValue = inputPass.value;

    if (nameValue !== "" && emailValue !== "" && day.value !== "" && month.value !== "" && year.value !== "" && validateEmail(emailValue) && validatePass(passValue) && validateName(nameValue)) {
        nextButton.disabled = false;  // enable
    } else {
        nextButton.disabled = true; 
    }
};

inputName.addEventListener("keyup", check);
inputEmail.addEventListener("keyup", check);
inputPass.addEventListener("keyup", check);
day.addEventListener("change", check);
month.addEventListener("change", check);
year.addEventListener("change", check);