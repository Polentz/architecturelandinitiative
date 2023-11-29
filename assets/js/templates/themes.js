const animateTitleYAxis = () => {
    document.querySelectorAll(".item-title").forEach(title => {
        let content = title.dataset.name
        let cloneContent = content + " / " + content;
        const eachWord = cloneContent.match(/([\w-/]+)/g);
        eachWord.forEach(word => {
            let div = document.createElement("div");
            div.classList.add("word");
            let text = document.createTextNode(word);
            div.appendChild(text);
            title.appendChild(div);
        });
    });
    document.querySelectorAll(".word").forEach(word => {
        split(word);
        const letters = word.querySelectorAll(".letter");
        let tl = gsap.timeline();
        tl.from(letters, {
            duration: 0.3,
            delay: 0.25,
            yPercent: 100,
            stagger: 0.1,
        });
        tl.to(word, {
            clipPath: "none",
        });
    });
    document.querySelectorAll(".item-title").forEach(title => {
        title.addEventListener("mouseenter", () => {
            const letters = title.querySelectorAll(".word .letter");
            gsap.to(letters, {
                duration: 0.1,
                color: "var(--main-color)",
                stagger: 0.02,
            });
        });
        title.addEventListener("mouseleave", () => {
            const letters = title.querySelectorAll(".word .letter");
            gsap.to(letters, {
                duration: 0.1,
                color: "var(--black)",
                stagger: 0.02,
            });
        });
    });
};

const scrollTitle = () => {
    document.body.style.overflow = "auto";
    document.scrollingElement.scrollTo(0, 0);
    gsap.utils.toArray(".grid-layout-item").forEach((item, index) => {
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
    animateTitleYAxis();
    scrollTitle();
});