function refresh() {
    // reset all inputs
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });


    // reset comboboxes - birth date selections
    document.querySelectorAll(".comboBoxes select").forEach(select => {
        select.selectedIndex = 0;
    });


    // remove the modified small texts in inputs 
    document.querySelector(".spanNameS").classList.remove("spanNameSmod", "spanNameSmod2");
    document.querySelector(".spanEmailS").classList.remove("spanEmailSmod", "spanEmailSmod2");
    document.querySelector(".spanPassS").classList.remove("spanPassSmod", "spanPassSmod2");
    document.querySelector(".spanNameL").classList.remove("spanNameLmod", "spanNameLmod2");


    // remove invalid email input styling
    document.querySelector(".emailS").classList.remove('emailSInvalid');
    document.querySelector(".spanEmailS").classList.remove("spanEmailSInvalid");
    document.querySelector('.emailS .errorMsg').style.display = "none";


    // remove invalid password input styling
    document.querySelector(".passS").classList.remove('passSInvalid');
    document.querySelector(".spanPassS").classList.remove("spanPassSInvalid");
    document.querySelector('.errorPass').style.display = "none";


    // remove invalid name input styling
    document.querySelector(".nameS").classList.remove('nameSInvalid');
    document.querySelector(".spanNameS").classList.remove("spanNameSInvalid");
    document.querySelector('.errorName').style.display = "none";


    // remove invalid name input styling - LOGIN FORM
    document.querySelector(".nameL").classList.remove('nameLInvalid');
    document.querySelector(".spanNameL").classList.remove("spanNameLInvalid");
    document.querySelector('.errorNameL').style.display = "none";


    // unable all the buttons
    nextButton.disabled = true;
    nextBtnLogin.disabled = true;


}