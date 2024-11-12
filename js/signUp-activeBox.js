document.querySelector(".cont1").addEventListener("click", function () {
    const svg = document.querySelector(".cont1 div svg ");
    const computedStyle = window.getComputedStyle(svg); // prebere external CSS od svg-ja, ker default prebere inline
    if (computedStyle.display === "none") {
        svg.style.display = "block";
    } else {
        svg.style.display = "none";
    }
});


document.querySelector(".cont2").addEventListener("click", function () {
    const svg = document.querySelector(".cont2 div svg ");
    const computedStyle = window.getComputedStyle(svg);
    if (computedStyle.display === "none") {
        svg.style.display = "block";
    } else {
        svg.style.display = "none";
    }
});

document.querySelector(".cont3").addEventListener("click", function() {
    const svg=document.querySelector(".cont3 div svg ");
    const computedStyle = window.getComputedStyle(svg);
    if (computedStyle.display === "none") {
        svg.style.display = "block";
    } else {
      svg.style.display = "none";
    }
  });