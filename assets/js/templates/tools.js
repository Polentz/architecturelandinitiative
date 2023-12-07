document.querySelectorAll(".item-title a").forEach(title => {
    const thisContent = title.dataset.name;
    splitTitle(title, thisContent);
});

window.addEventListener("load", () => {
    animateTitle("none", 100, 0.05);
    horizontalScroll("bottom bottom");
});