const spanEmailSMod = document.querySelector(".spanEmailS");
const errorMsg = document.querySelector('.errorMsg');
const emailSInvalid = document.querySelector('.emailSInvalid');
function refresh() {
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });


    document.querySelectorAll(".comboBoxes select").forEach(select => {
        select.selectedIndex = 0;
    });

    document.querySelector(".nameS").classList.remove("nameSmod");
    document.querySelector(".emailS").classList.remove("emailSmod");

    document.querySelector(".spanNameS").classList.remove("spanNameSmod", "spanNameSmod2");
    document.querySelector(".spanEmailS").classList.remove("spanEmailSmod", "spanEmailSmod2");

    errorMsg.style.display = 'none';
    if(emailSInvalid){
        emailSInvalid.classList.remove('emailSInvalid');
    }
    spanEmailSMod.classList.remove("spanEmailSInvalid");
}
document.addEventListener("DOMContentLoaded", function () { // kadar zapres stran in ponovno odpres
    if (sessionStorage.getItem("resetSignupFormOnLoad") !== "false") {
        refresh();
    }
    sessionStorage.setItem("resetSignupFormOnLoad", "false");
});