document.querySelectorAll(".item-title").forEach(title => {
    const thisContent = title.dataset.name + " / " + title.dataset.name;
    splitTitle(title, thisContent);
});


const scrollTitle = () => {
    // document.body.style.overflow = "auto";
    // document.scrollingElement.scrollTo(0, 0);
    gsap.utils.toArray(".vertical .grid-layout-item").forEach((item, index) => {
        const wrapper = item.querySelector(".wrapper");
        const [x, xEnd] = (index % 2) ? ["50%", (wrapper.scrollWidth - item.offsetWidth) * -1] : [wrapper.scrollWidth * -1, 0];
        gsap.fromTo(wrapper, { x }, {
            x: xEnd,
            scrollTrigger: {
                trigger: item,
                scrub: .5,
            }
        });
    });
    gsap.to(".page-intro", {
        y: "0",
        ease: "none",
        scrollTrigger: {
            trigger: ".page-intro",
            start: "35% bottom",
            scrub: .5,
            snap: {
                snapTo: 1,
                duration: .25,
                ease: "power1.inOut"
            },
        },
    });
};

window.addEventListener("load", () => {
    animateTitle("none", 100, 0.05);
    scrollTitle();
});