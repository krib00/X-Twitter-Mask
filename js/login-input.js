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
