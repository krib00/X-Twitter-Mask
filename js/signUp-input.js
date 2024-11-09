// NAME

function activeNameS(element) {
    element.classList.add("nameSmod");

    const input = element.querySelector("input");
    const spanNameSMod = element.querySelector(".spanNameS");

    if (spanNameSMod) {
        spanNameSMod.classList.add("spanNameSmod");
        spanNameSMod.classList.remove("spanNameS");
    }

    if (input) {
        input.focus();  // fokus na input kadar kliknes na DIV
    }

    // Listen for clicks outside the div
    function handleClickOutside(event) {
        if (!element.contains(event.target)) { // preveri ce kliknes izven diva
            element.classList.remove("nameSmod");

            if (spanNameSMod) {
                spanNameSMod.classList.remove("spanNameSmod");
                spanNameSMod.classList.add("spanNameS");

                // doda spanNameSmod2 samo takrat, ko input ni prazen in div je nefokusiran
                if (input.value.length > 0) {
                    spanNameSMod.classList.add("spanNameSmod2");
                } else {
                    spanNameSMod.classList.remove("spanNameSmod2");
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

// EMAIL

function activeNameS(element) {
    element.classList.add("nameSmod");
    const input = element.querySelector("input");
    const spanNameSMod = element.querySelector(".spanNameS");

    if (spanNameSMod) {
        spanNameSMod.classList.add("spanNameSmod");
        spanNameSMod.classList.remove("spanNameS");
    }

    if (input) {
        input.focus();
    }

    function handleClickOutside(event) {
        if (!element.contains(event.target)) {
            element.classList.remove("nameSmod");

            if (spanNameSMod) {
                spanNameSMod.classList.remove("spanNameSmod");
                spanNameSMod.classList.add("spanNameS");

                if (input.value.length > 0) {
                    spanNameSMod.classList.add("spanNameSmod2");
                } else {
                    spanNameSMod.classList.remove("spanNameSmod2");
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

function activeEmailS(element) {
    element.classList.add("emailSmod");
    const input = element.querySelector("input");
    const spanEmailSMod = element.querySelector(".spanEmailS");
    const errorMsg = element.querySelector('.errorMsg');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (spanEmailSMod) {
        spanEmailSMod.classList.add("spanEmailSmod");
        spanEmailSMod.classList.remove("spanEmailS");
    }

    if (input) {
        input.focus();

        input.addEventListener('input', function () {
            const emailValue = input.value;

            if (emailRegex.test(emailValue)) {
                errorMsg.style.display = 'none';
                element.classList.remove('emailSInvalid');
                spanEmailSMod.classList.remove("spanEmailSInvalid");
               
                
            } else if (emailValue.length > 0) {
                errorMsg.style.display = 'block';
                element.classList.add('emailSInvalid');
                spanEmailSMod.classList.add("spanEmailSInvalid");
                
            } else {
                errorMsg.style.display = 'none';
                element.classList.remove('emailSInvalid');
                spanEmailSMod.classList.remove("spanEmailSInvalid");

            }
        });
    }

    function handleClickOutside(event) {
        if (!element.contains(event.target)) {
            element.classList.remove("emailSmod");

            if (spanEmailSMod) {
                spanEmailSMod.classList.remove("spanEmailSmod");
                spanEmailSMod.classList.add("spanEmailS");
                if (input.value.length > 0) {
                    spanEmailSMod.classList.add("spanEmailSmod2");
                } else {
                    spanEmailSMod.classList.remove("spanEmailSmod2");
                }
            }

            document.removeEventListener("click", handleClickOutside);
        }
    }

    setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
    }, 0);
}

