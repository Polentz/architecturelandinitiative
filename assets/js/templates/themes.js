document.querySelectorAll(".item-title a, .item-title p").forEach(title => {
    const thisContent = title.dataset.name + " / " + title.dataset.name;
    splitTitle(title, thisContent);
});

const scrollTitle = () => {
    gsap.utils.toArray(".marquee-layout-item").forEach((item, index) => {
        const wrapper = item.querySelector(".item-title");
        const [x, xEnd] = (index % 2) ? ["50%", (wrapper.scrollWidth - item.offsetWidth) * -1] : [wrapper.scrollWidth * -1, 0];
        gsap.fromTo(wrapper, { x }, {
            x: xEnd,
            scrollTrigger: {
                trigger: item,
                scrub: 0.5,
            },
        });
    });
    gsap.to(".page-intro", {
        y: "0",
        ease: "none",
        scrollTrigger: {
            trigger: ".page-intro",
            start: "50% bottom",
            scrub: 0.5,
            snap: {
                snapTo: 1,
                duration: 0.5,
                ease: "power1.inOut"
            },
        },
    });
};

window.addEventListener("load", () => {
    animateTitle("none", 100, 0.05);
    handleTitleHover();
    scrollTitle();
});