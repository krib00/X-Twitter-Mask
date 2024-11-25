document.querySelector(".cont1").addEventListener("click", contMod1);
document.querySelector(".cont1").addEventListener("focusin", contMod1);
function contMod1() {
    const svg = document.querySelector(".cont1 div svg");
    const computedStyle = window.getComputedStyle(svg);
    if (computedStyle.display === "none") {
        svg.style.display = "block";
    } else {
        svg.style.display = "none";
    }
}

document.querySelector(".cont2").addEventListener("click", contMod2);
document.querySelector(".cont2").addEventListener("focusin", contMod2);
function contMod2() {
    const svg = document.querySelector(".cont2 div svg");
    const computedStyle = window.getComputedStyle(svg);
    if (computedStyle.display === "none") {
        svg.style.display = "block";
    } else {
        svg.style.display = "none";
    }
}

document.querySelector(".cont3").addEventListener("click", contMod3);
document.querySelector(".cont3").addEventListener("focusin", contMod3);
function contMod3() {
    const svg = document.querySelector(".cont3 div svg");
    const computedStyle = window.getComputedStyle(svg);
    if (computedStyle.display === "none") {
        svg.style.display = "block";
    } else {
        svg.style.display = "none";
    }
}