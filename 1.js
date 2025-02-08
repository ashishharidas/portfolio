// Smooth scrolling effect on scroll
window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    document.body.style.backgroundPositionY = scrollPosition * 0.2 + "px";
});
