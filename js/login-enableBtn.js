const nextBtnLogin = document.querySelector(".nextBtnL");
const inputNameL = document.getElementById("inputNameL");

function validateNameL(nameL) {
    const nameRegex = /^[A-Za-z]{3,}$/;
    return nameRegex.test(nameL);
}

function activeButton() {
    const nameValue = inputNameL.value;

    if (validateNameL(nameValue)) {
        nextBtnLogin.disabled = false;  
    } else {
        nextBtnLogin.disabled = true; 
    }
}

inputNameL.addEventListener("input", activeButton);