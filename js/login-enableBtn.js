const nextBtnLogin = document.querySelector(".nextBtnL");
const inputNameL = document.getElementById("inputNameL");
function activeButton() {
    const nameValue = inputNameL.value;

    if (nameValue != "") {
        nextBtnLogin.disabled = false;  
    } else {
        nextBtnLogin.disabled = true; 
    }
}

inputNameL.addEventListener("input", activeButton);