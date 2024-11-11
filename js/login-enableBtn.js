const nextBtnLogin = document.querySelector(".nextBtnL");
const inputNameL = document.getElementById("inputNameL");
const inputPassL = document.getElementById("inputPassL");

function validateNameL(nameL) {
    const nameRegex = /(?=(.*[a-zA-Z]){3,}).*/;
    return nameRegex.test(nameL);
}

function validatePassL(passL) {
    const passRegex = /^(?=(?:.*[A-Za-z]){8,})(?=.*\d)[A-Za-z\d]+$/;
    return passRegex.test(passL);
}

function activeButton() {
    const nameValue = inputNameL.value;
    const passValue = inputPassL.value;

    if (validateNameL(nameValue) && validatePassL(passValue)) {
        nextBtnLogin.disabled = false;  
    } else {
        nextBtnLogin.disabled = true; 
    }
}

inputNameL.addEventListener("input", activeButton);
inputPassL.addEventListener("input", activeButton);