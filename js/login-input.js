function loginInputL(element) {
    element.classList.add("nameLmod");

    const input = element.querySelector("input");
    const spanNameLMod = element.querySelector(".spanNameL");
    const errorNameL = element.querySelector(".errorNameL");
    const nameRegex = /(?=(.*[a-zA-Z]){3,}).*/;

    if (spanNameLMod) {
        spanNameLMod.classList.add("spanNameLmod");
        spanNameLMod.classList.remove("spanNameL");
    }

    if (input) {
        input.focus();  // fokus na input kadar kliknes na DIV

        input.addEventListener('input', function () {
            const nameValueL = input.value;

            if (nameRegex.test(nameValueL)) {
                errorNameL.style.display = 'none';
                element.classList.remove('nameLInvalid');
                spanNameLMod.classList.remove("spanNameLInvalid");
               
                
            } else if (nameValueL.length > 0) {
                errorNameL.style.display = 'block';
                element.classList.add('nameLInvalid');
                spanNameLMod.classList.add("spanNameLInvalid");
                
            } else {
                errorNameL.style.display = 'none';
                element.classList.remove('nameLInvalid');
                spanNameLMod.classList.remove("spanNameLInvalid");

            }
        });
    } 

    function handleClickOutside(event) {
        if (!element.contains(event.target)) {
            element.classList.remove("nameLmod");

            if (spanNameLMod) {
                spanNameLMod.classList.remove("spanNameLmod");
                spanNameLMod.classList.add("spanNameL");

                if (input.value.length > 0) {
                    spanNameLMod.classList.add("spanNameLmod2");
                } else {
                    spanNameLMod.classList.remove("spanNameLmod2");
                }
            }

            document.removeEventListener("click", handleClickOutside);
        }
    }

    setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
    }, 0);
}

// PASS

function activePassL(element) {
    element.classList.add("passLmod");
    const input = element.querySelector("input");
    const spanPassLMod = element.querySelector(".spanPassL");
    const errorPassL = document.querySelector(".errorPassL");

    const passRegexL = /^(?=(?:.*[A-Za-z]){8,})(?=.*\d)[A-Za-z\d]+$/ ; // regex za vsaj 8 črk in 1 številko

    if (spanPassLMod) {
        spanPassLMod.classList.add("spanPassLmod");
        spanPassLMod.classList.remove("spanPassL");
    }

    if (input) {
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
    } 

    function handleClickOutside(event) { // preveri ce kliknes izven diva
        if (!element.contains(event.target)) { 
            element.classList.remove("passLmod");

            if (spanPassLMod) {
                spanPassLMod.classList.remove("spanPassLmod");
                spanPassLMod.classList.add("spanPassL");

                // doda spanPassLmod2 samo takrat, ko input ni prazen in div je nefokusiran
                if (input.value.length > 0) {
                    spanPassLMod.classList.add("spanPassLmod2");
                } else {
                    spanPassLMod.classList.remove("spanPassLmod2");
                }
            }

            document.body.focus();
            document.removeEventListener("click", handleClickOutside);
        }
    }
    setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
    }, 0);
}
