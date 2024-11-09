const signUp = document.querySelector('.signupFunction');
const animationS = document.querySelector('.glavniS');
const animationL = document.querySelector('.glavniL');
const glavni = document.querySelector('.glavni');
const login = document.querySelector('.loginFunction');
function openSignup() {
    signUp.style.opacity = "1";
    signUp.style.display = "flex";
    animationS.classList.add("showS");
    animationS.classList.remove("hideS");
    glavni.style.overflow = "hidden";
    glavni.style.paddingRight = "17px"; // ostane ista pozicija, kadar izgine overflow, overflow width=17px
}
function closeSignup() {
    signUp.style.opacity = "0";
    animationS.classList.remove("showS");
    animationS.classList.add("hideS"); 
    setTimeout(() => {
        signUp.style.display = "none";
        glavni.style.overflow = "auto scroll";
        glavni.style.paddingRight = "0";
        refresh();
    }, 300); // 300ms = 0.3s ... display none zamaknjen za 0.3 s, da se bo animacija izvedla prej
}
function openLogin() {
    login.style.opacity = "1";
    login.style.display = "flex";
    glavni.style.overflow = "hidden";
    glavni.style.paddingRight = "17px";
    animationL.classList.add("showL");
    animationL.classList.remove("hideL"); 
}
function closeLogin() {
    login.style.opacity = "0";
    animationL.classList.remove("showL");
    animationL.classList.add("hideL"); 
    setTimeout(() => {
        glavni.style.overflow = "auto scroll";
        glavni.style.paddingRight = "0";
        login.style.display = "none";
        refresh();
    }, 300); 
}
function dontHaveAnAccount() {
    login.style.display = "none";
    document.querySelectorAll(".comboBoxes select").forEach(select => {
        select.selectedIndex = 0;
    });
    signUp.style.display = "flex";
    signUp.style.opacity = "1";
    animationS.classList.add("showS");
    animationS.classList.remove("hideS");
}