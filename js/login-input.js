document.querySelector(".nameL").addEventListener("click", loginInputL);
document.querySelector(".nameL").addEventListener("focusin", loginInputL);
function loginInputL() {
    const nameL = document.querySelector(".nameL");
    const input = nameL.querySelector("input");
    const spanNameLMod = document.querySelector(".spanNameL");
    const errorNameL = document.querySelector(".errorNameL");
    const nameRegex = /(?=(.*[a-zA-Z]){3,}).*/;

    // name styling
    spanNameLMod.classList.add("spanNameLmod");
    // styling za border
    nameL.classList.add("nameLmod");

    input.focus();  // fokus na input kadar kliknes na DIV

    input.addEventListener('input', function () {
        const nameValueL = input.value;

        if (nameRegex.test(nameValueL)) {
            errorNameL.style.display = 'none';
            nameL.classList.remove('nameLInvalid');
            spanNameLMod.classList.remove("spanNameLInvalid");


        } else if (nameValueL.length > 0) {
            errorNameL.style.display = 'block';
            nameL.classList.add('nameLInvalid');
            spanNameLMod.classList.add("spanNameLInvalid");

        } else {
            errorNameL.style.display = 'none';
            nameL.classList.remove('nameLInvalid');
            spanNameLMod.classList.remove("spanNameLInvalid");

        }
    });

    function handleClickOutside(event) {
        if (!nameL.contains(event.target)) {
            nameL.classList.remove("nameLmod");

            spanNameLMod.classList.remove("spanNameLmod");
            spanNameLMod.classList.add("spanNameL");

            if (input.value.length > 0) {
                spanNameLMod.classList.add("spanNameLmod2");
            } else {
                spanNameLMod.classList.remove("spanNameLmod2");
            }
            document.body.focus();
        }
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("focusin", handleClickOutside);

}

// PASS

document.querySelector(".passL").addEventListener("click", passInputL);
document.querySelector(".passL").addEventListener("focusin", passInputL);
function passInputL() {
    const passL = document.querySelector(".passL");
    const input = passL.querySelector("input");
    const spanPassLMod = document.querySelector(".spanPassL");
    const errorPassL = document.querySelector(".errorPassL");

    const passRegexL = /^(?=(?:.*[A-Za-z]){8,})(?=.*\d)(?!.*\s)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]+$/;

    spanPassLMod.classList.add("spanPassLmod");
    passL.classList.add("passLmod");

    input.focus();

    input.addEventListener('input', function () {
        const passValueL = input.value;

        if (passRegexL.test(passValueL)) {
            errorPassL.style.display = 'none';
            element.classList.remove('passLInvalid');
            spanPassLMod.classList.remove("spanPassLInvalid");

        } else if (passValueL.length > 0) {
            errorPassL.style.display = 'block';
            element.classList.add('passLInvalid');
            spanPassLMod.classList.add("spanPassLInvalid");

        } else {
            errorPassL.style.display = 'none';
            element.classList.remove('passLInvalid');
            spanPassLMod.classList.remove("spanPassLInvalid");
        }
    });

    function handleClickOutside(event) { // preveri ce kliknes izven diva
        if (!passL.contains(event.target)) {
            passL.classList.remove("passLmod");

            spanPassLMod.classList.remove("spanPassLmod");
            spanPassLMod.classList.add("spanPassL");

            // doda spanPassLmod2 samo takrat, ko input ni prazen in div je nefokusiran
            if (input.value.length > 0) {
                spanPassLMod.classList.add("spanPassLmod2");
            } else {
                spanPassLMod.classList.remove("spanPassLmod2");
            }

            document.body.focus();
        }
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("focusin", handleClickOutside);
}
