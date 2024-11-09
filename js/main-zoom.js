function getZoomLevel() {
    return Math.round((window.outerWidth / window.innerWidth) * 100);
}
function checkZoom() {
    const zoomLevel = getZoomLevel();
    const maliX = document.querySelector('.maliX');
    const velikX = document.querySelector('.levo');
    const glavaMod = document.querySelector('.glava');
    const glavniMod = document.querySelector('.glavni');
    if (zoomLevel >= 200) {
        maliX.style.display = 'flex';
        velikX.style.display = 'none';
    } else {
        maliX.style.display = 'none';
        velikX.style.display = 'flex';
    }
    if (zoomLevel >= 200 && zoomLevel <= 300) {
        glavaMod.classList.add('glavaMod');
    } else {
        glavaMod.classList.remove('glavaMod');
    }
    if (window.innerWidth < 1015) {
        glavaMod.classList.add('glavaMod');
        maliX.style.display = 'flex';
        velikX.style.display = 'none';
        glavniMod.style.display = 'block';
    }
    else {
        glavaMod.classList.remove('glavaMod');
        maliX.style.display = 'none';
        velikX.style.display = 'flex';
        glavniMod.style.display = 'flex';
    }
}
window.addEventListener('resize', checkZoom);
window.addEventListener('load', checkZoom);