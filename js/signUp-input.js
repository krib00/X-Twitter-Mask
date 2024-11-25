// NAME
document.querySelector(".nameS").addEventListener("click", activeNameS);
document.querySelector(".nameS").addEventListener("focusin", activeNameS);
function activeNameS() {
    const nameS = document.querySelector(".nameS");
    const input = nameS.querySelector("input");
    const spanNameSMod = document.querySelector(".spanNameS");
    const errorName = document.querySelector(".errorName");
    const nameRegex = /^[A-Za-z]{3,}$/;

    // obarva border v modro
    nameS.classList.add("nameSmod");
    // obarva ime v modro
    spanNameSMod.classList.add("spanNameSmod");

    // fokus na input kadar kliknes na DIV
    input.focus();
    input.addEventListener('input', function () {
        const nameValue = input.value;

        if (nameRegex.test(nameValue)) { // ce ime uposteva pogoje... ni errorjev
            errorName.style.display = 'none';
            nameS.classList.remove('nameSInvalid');
            spanNameSMod.classList.remove("spanNameSInvalid");

        } else if (nameValue.length > 0) { // ce je ime vneseno, in ne uposteva pogojev.... ERROR!
            errorName.style.display = 'block';
            nameS.classList.add('nameSInvalid');
            spanNameSMod.classList.add("spanNameSInvalid");

        } else { // ce je input prazen... ni errorjev
            errorName.style.display = 'none';
            nameS.classList.remove('nameSInvalid');
            spanNameSMod.classList.remove("spanNameSInvalid");
        }
    });

    function handleClickOutside(event) {    // preveri ce kliknes izven diva
        if (!nameS.contains(event.target)) {
            nameS.classList.remove("nameSmod");

            spanNameSMod.classList.remove("spanNameSmod");
            spanNameSMod.classList.add("spanNameS");

            // doda spanNameSmod2 samo takrat, ko input ni prazen in div je nefokusiran
            if (input.value.length > 0) {
                spanNameSMod.classList.add("spanNameSmod2");
            } else {
                spanNameSMod.classList.remove("spanNameSmod2");
            }
            document.body.focus();
        }
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("focusin", handleClickOutside);
}

// EMAIL
document.querySelector(".emailS").addEventListener("click", activeEmailS);
document.querySelector(".emailS").addEventListener("focusin", activeEmailS);
function activeEmailS() {
    const emailS = document.querySelector(".emailS");
    const input = emailS.querySelector("input");
    const spanEmailSMod = document.querySelector(".spanEmailS");
    const errorMsg = document.querySelector('.errorMsg');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // obarva border v modro
    emailS.classList.add("emailSmod");
    // obarva email ime v modro
    spanEmailSMod.classList.add("spanEmailSmod");

    input.focus();
    input.addEventListener('input', function () {
        const emailValue = input.value;
        if (emailRegex.test(emailValue)) {
            errorMsg.style.display = 'none';
            emailS.classList.remove('emailSInvalid');
            spanEmailSMod.classList.remove("spanEmailSInvalid");

        } else if (emailValue.length > 0) {
            errorMsg.style.display = 'block';
            emailS.classList.add('emailSInvalid');
            spanEmailSMod.classList.add("spanEmailSInvalid");

        } else {
            errorMsg.style.display = 'none';
            emailS.classList.remove('emailSInvalid');
            spanEmailSMod.classList.remove("spanEmailSInvalid");
        }
    });
    function handleClickOutside(event) {
        if (!emailS.contains(event.target)) {

            emailS.classList.remove("emailSmod");
            spanEmailSMod.classList.remove("spanEmailSmod");
            spanEmailSMod.classList.add("spanEmailS");

            if (input.value.length > 0) {
                spanEmailSMod.classList.add("spanEmailSmod2");
            } else {
                spanEmailSMod.classList.remove("spanEmailSmod2");
            }
        }
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("focusin", handleClickOutside);
}

// PASS
document.querySelector(".passS").addEventListener("click", activePassS);
document.querySelector(".passS").addEventListener("focusin", activePassS);
function activePassS() {
    const passS = document.querySelector(".passS");
    const input = passS.querySelector("input");
    const spanPassSMod = document.querySelector(".spanPassS");
    const errorPass = document.querySelector(".errorPass");
    const passRegex = /^(?=(?:.*[A-Za-z]){8,})(?=.*\d)(?!.*\s)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]+$/;

    // obarva border v modro
    passS.classList.add("passSmod");
    // obarva email ime v modro
    spanPassSMod.classList.add("spanPassSmod");

    input.focus();

    input.addEventListener('input', function () {
        const passValue = input.value;

        if (passRegex.test(passValue)) {
            errorPass.style.display = 'none';
            passS.classList.remove('passSInvalid');
            spanPassSMod.classList.remove("spanPassSInvalid");

        } else if (passValue.length > 0) {
            errorPass.style.display = 'block';
            passS.classList.add('passSInvalid');
            spanPassSMod.classList.add("spanPassSInvalid");

        } else {
            errorPass.style.display = 'none';
            passS.classList.remove('passSInvalid');
            spanPassSMod.classList.remove("spanPassSInvalid");
        }
    });
    function handleClickOutside(event) { // preveri ce kliknes izven diva
        if (!passS.contains(event.target)) {
            passS.classList.remove("passSmod");
            spanPassSMod.classList.remove("spanPassSmod");
            spanPassSMod.classList.add("spanPassS");

            // doda spanNameSmod2 samo takrat, ko input ni prazen in div je nefokusiran
            if (input.value.length > 0) {
                spanPassSMod.classList.add("spanPassSmod2");
            } else {
                spanPassSMod.classList.remove("spanPassSmod2");
            }
        }
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("focusin", handleClickOutside);
}