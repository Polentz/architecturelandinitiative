document.querySelectorAll(".item-title").forEach(title => {
    const thisContent = title.dataset.name;
    splitTitle(title, thisContent);
});

window.addEventListener("load", () => {
    horizontalScroll();
    animateTitle("none", -100, 0.1);
});