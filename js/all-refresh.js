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


    // remove invalid pass input styling - LOGIN FORM
    document.querySelector(".passL").classList.remove('passLInvalid');
    document.querySelector(".spanPassL").classList.remove("spanPassLInvalid");
    document.querySelector(".spanPassL").classList.remove("spanPassLmod2");
    document.querySelector('.errorPassL').style.display = "none";


    // unable all the buttons
    nextButton.disabled = true;
    nextBtnLogin.disabled = true;

    // ----- telo V2 ------
    // reset checkboxes 
    document.querySelector(".cont1 div svg").style.display = "none";
    document.querySelector(".cont2 div svg").style.display = "none";
    document.querySelector(".cont3 div svg").style.display = "none";


    // reset - SIGNUP
    document.querySelector('.nazaj').style.display = "none";
    document.querySelector('.zapri').style.display = "flex";
    document.querySelector('.finish').style.display = "none";
    document.querySelector('.naprej').style.display = "block";
    document.querySelector('.teloV2').style.display = "none";
    document.querySelector('.teloS').style.display = "flex";

}