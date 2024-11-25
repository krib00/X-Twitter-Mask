const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const danMod = document.getElementsByClassName('dan')[0]; 
const mesecMod = document.getElementsByClassName('mesec')[0]; 
const letoMod = document.getElementsByClassName('leto')[0]; 

const danSpanMod = document.getElementsByClassName('danSpan')[0];
const mesecSpanMod = document.getElementsByClassName('mesecSpan')[0];
const letoSpanMod = document.getElementsByClassName('letoSpan')[0];

const danSvgMod = document.getElementsByClassName('danSvg')[0];
const mesecSvgMod = document.getElementsByClassName('mesecSvg')[0];
const letoSvgMod = document.getElementsByClassName('letoSvg')[0];

// doda styling za DAN
dayElement.addEventListener("click", danActive);
dayElement.addEventListener("focusin", danActive);
function danActive() {
    danMod.classList.add('danMod'); 
    danSvgMod.classList.add('danSvgMod');
    danSpanMod.classList.add('danSpanMod');
}
// odstrani styling za DAN
document.addEventListener('click', DanEvent);
document.addEventListener('focusin', DanEvent);
function DanEvent(event) {
    if (!dayElement.contains(event.target)) {
        danMod.classList.remove('danMod');
        danSvgMod.classList.remove('danSvgMod');
        danSpanMod.classList.remove('danSpanMod');
    }
}

monthElement.addEventListener("click", mesecActive);
monthElement.addEventListener("focusin", mesecActive);
function mesecActive() {
    mesecMod.classList.add('mesecMod'); 
    mesecSpanMod.classList.add('mesecSvgMod');
    mesecSvgMod.classList.add('mesecSpanMod');
};
document.addEventListener('click', MesecEvent);
document.addEventListener('focusin', MesecEvent);
function MesecEvent(event) {
    if (!monthElement.contains(event.target)) {
        mesecMod.classList.remove('mesecMod');
        mesecSpanMod.classList.remove('mesecSvgMod');
        mesecSvgMod.classList.remove('mesecSpanMod');
    }
}

yearElement.addEventListener("click", letoActive);
yearElement.addEventListener("focusin", letoActive);
function letoActive() {
    letoMod.classList.add('letoMod'); 
    letoSvgMod.classList.add('letoSvgMod');
    letoSpanMod.classList.add('letoSpanMod');
};
document.addEventListener('click', LetoEvent);
document.addEventListener('focusin', LetoEvent);
function LetoEvent(event) {
    if (!yearElement.contains(event.target)) {
        letoMod.classList.remove('letoMod');
        letoSvgMod.classList.remove('letoSvgMod');
        letoSpanMod.classList.remove('letoSpanMod');
    }
}