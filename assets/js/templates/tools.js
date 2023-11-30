document.querySelectorAll(".item-title").forEach(title => {
    const thisContent = title.dataset.name;
    splitTitle(title, thisContent);
});

window.addEventListener("load", () => {
    animateTitle("none", 100, 0.05);
    horizontalScroll();
});