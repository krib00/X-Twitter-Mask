// NAME

function activeNameS(element) {
    element.classList.add("nameSmod");

    const input = element.querySelector("input");
    const spanNameSMod = element.querySelector(".spanNameS");
    const errorName = element.querySelector(".errorName");
    const nameRegex = /^[A-Za-z]{3,}$/;
    if (spanNameSMod) {
        spanNameSMod.classList.add("spanNameSmod");
        spanNameSMod.classList.remove("spanNameS");
    }

    if (input) {
        input.focus();  // fokus na input kadar kliknes na DIV

        input.addEventListener('input', function () {
            const nameValue = input.value;

            if (nameRegex.test(nameValue)) {
                errorName.style.display = 'none';
                element.classList.remove('nameSInvalid');
                spanNameSMod.classList.remove("spanNameSInvalid");
               
                
            } else if (nameValue.length > 0) {
                errorName.style.display = 'block';
                element.classList.add('nameSInvalid');
                spanNameSMod.classList.add("spanNameSInvalid");
                
            } else {
                errorName.style.display = 'none';
                element.classList.remove('nameSInvalid');
                spanNameSMod.classList.remove("spanNameSInvalid");

            }
        });
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

// PASS


function activePassS(element) {
    element.classList.add("passSmod");
    const input = element.querySelector("input");
    const spanPassSMod = element.querySelector(".spanPassS");
    const errorPass = document.querySelector(".errorPass");

    const passRegex = /^(?=(?:.*[A-Za-z]){8,})(?=.*\d)(?!.*\s)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]+$/;

    if (spanPassSMod) {
        spanPassSMod.classList.add("spanPassSmod");
        spanPassSMod.classList.remove("spanPassS");
    }

    if (input) {
        input.focus(); 

        input.addEventListener('input', function () {
            const passValue = input.value;

            if (passRegex.test(passValue)) {
                errorPass.style.display = 'none';
                element.classList.remove('passSInvalid');
                spanPassSMod.classList.remove("spanPassSInvalid");
               
                
            } else if (passValue.length > 0) {
                errorPass.style.display = 'block';
                element.classList.add('passSInvalid');
                spanPassSMod.classList.add("spanPassSInvalid");
                
            } else {
                errorPass.style.display = 'none';
                element.classList.remove('passSInvalid');
                spanPassSMod.classList.remove("spanPassSInvalid");

            }
        });
    } 

    function handleClickOutside(event) { // preveri ce kliknes izven diva
        if (!element.contains(event.target)) { 
            element.classList.remove("passSmod");

            if (spanPassSMod) {
                spanPassSMod.classList.remove("spanPassSmod");
                spanPassSMod.classList.add("spanPassS");

                // doda spanNameSmod2 samo takrat, ko input ni prazen in div je nefokusiran
                if (input.value.length > 0) {
                    spanPassSMod.classList.add("spanPassSmod2");
                } else {
                    spanPassSMod.classList.remove("spanPassSmod2");
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
