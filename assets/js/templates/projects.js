document.querySelectorAll(".item-title a, .item-title p").forEach(title => {
    const thisContent = title.dataset.name;
    splitTitle(title, thisContent);
});

window.addEventListener("load", () => {
    horizontalScroll();
    animateTitle(-100, "none", 0.1);
    handleTitleHover();
});