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

dayElement.addEventListener('mousedown', function () {
    danMod.classList.add('danMod'); 
    danSvgMod.classList.add('danSvgMod');
    danSpanMod.classList.add('danSpanMod');
});
dayElement.addEventListener('change', function () {
    danMod.classList.remove('danMod');
    danSvgMod.classList.remove('danSvgMod');
    danSpanMod.classList.remove('danSpanMod');
});
document.addEventListener('click', function (event) {
    if (!dayElement.contains(event.target)) {
        danMod.classList.remove('danMod');
        danSvgMod.classList.remove('danSvgMod');
        danSpanMod.classList.remove('danSpanMod');
    }
});

monthElement.addEventListener('mousedown', function () {
    mesecMod.classList.add('mesecMod'); 
    mesecSpanMod.classList.add('mesecSvgMod');
    mesecSvgMod.classList.add('mesecSpanMod');
});
monthElement.addEventListener('change', function () {
    mesecMod.classList.remove('mesecMod'); 
    mesecSpanMod.classList.remove('mesecSvgMod');
    mesecSvgMod.classList.remove('mesecSpanMod');
});
document.addEventListener('click', function (event) {
    if (!monthElement.contains(event.target)) {
        mesecMod.classList.remove('mesecMod'); 
        mesecSpanMod.classList.remove('mesecSvgMod');
        mesecSvgMod.classList.remove('mesecSpanMod');
    }
});

yearElement.addEventListener('mousedown', function () {
    letoMod.classList.add('letoMod'); 
    letoSvgMod.classList.add('letoSvgMod');
    letoSpanMod.classList.add('letoSpanMod');
});
yearElement.addEventListener('change', function () {
    letoMod.classList.remove('letoMod');
    letoSvgMod.classList.remove('letoSvgMod');
    letoSpanMod.classList.remove('letoSpanMod');
});
document.addEventListener('click', function (event) {
    if (!yearElement.contains(event.target)) {
        letoMod.classList.remove('letoMod');
        letoSvgMod.classList.remove('letoSvgMod');
        letoSpanMod.classList.remove('letoSpanMod');
    }
});