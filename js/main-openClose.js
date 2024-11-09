const signUp = document.querySelector('.signupFunction');
const animationS = document.querySelector('.glavniS');
const glavni = document.querySelector('.glavni');
const login = document.querySelector('.loginFunction');
function openSignup() {
    signUp.style.display = "flex";
    animationS.classList.add("showS");
    animationS.classList.remove("hideS");
    glavni.style.overflow = "hidden";
    glavni.style.paddingRight = "17px"; // ostane ista pozicija, kadar izgine overflow, overflow width=17px
}
function closeSignup() {
    signUp.classList.add("transS");
    animationS.classList.remove("showS");
    animationS.classList.add("hideS");
    setTimeout(() => {
        signUp.style.display = "none";
        glavni.style.overflow = "auto scroll";
        glavni.style.paddingRight = "0";
        refresh();
    }, 300); // 300ms = 0.3s ... display none zamaknjen za 0.3 s, da se bo animacija izvedla prej

} function openLogin() {
    login.style.display = "flex";
    glavni.style.overflow = "hidden";
    glavni.style.paddingRight = "17px";
}
function closeLogin() {
    login.style.display = "none";
    glavni.style.overflow = "auto scroll";
    glavni.style.paddingRight = "0";
    refresh();
}

function dontHaveAnAccount() {
    login.style.display = "none";
    document.querySelectorAll(".comboBoxes select").forEach(select => {
        select.selectedIndex = 0;
    });
    signUp.style.display = "flex";
}