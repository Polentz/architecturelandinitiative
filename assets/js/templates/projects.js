document.querySelectorAll(".item-title").forEach(title => {
    const thisContent = title.dataset.name;
    splitTitle(title, thisContent);
});

window.addEventListener("load", () => {
    horizontalScroll();
    animateTitle(-100, "none", 0.1);
});