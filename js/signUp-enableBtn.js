const nextButton = document.getElementById("nextBtn");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
const check = () => {
    const nameValue = inputName.value;
    const emailValue = inputEmail.value;

    if (nameValue !== "" && emailValue !== "" && day.value !== "" && month.value !== "" && year.value !== "" && validateEmail(emailValue)) {
        nextButton.disabled = false;  // enable
    } else {
        nextButton.disabled = true; 
    }
};

inputName.addEventListener("keyup", check);
inputEmail.addEventListener("keyup", check);
day.addEventListener("change", check);
month.addEventListener("change", check);
year.addEventListener("change", check);