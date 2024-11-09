function loginInputL(element) {
    element.classList.add("nameLmod");

    const input = element.querySelector("input");
    const spanNameLMod = element.querySelector(".spanNameL");

    if (spanNameLMod) {
        spanNameLMod.classList.add("spanNameLmod");
        spanNameLMod.classList.remove("spanNameL");
    }

    if (input) {
        input.focus();
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
