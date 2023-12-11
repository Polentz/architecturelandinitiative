// console.log(
//     '%cDesign & Code: Giulia Polenta https://www.iampolenta.com/',
//     'color: #4c00ff; font-family: sans-serif; font-size: .75rem;'
// );

gsap.registerPlugin(ScrollTrigger, Flip);

const footer = document.querySelector(".footer");
const nav = footer.querySelector(".nav");
const navElement = nav.querySelectorAll(".menu-element");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const logo = document.querySelector(".logo");

const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

const documentWidth = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-width", `${window.innerWidth}px`);
};

const loader = () => {
    document.scrollingElement.scrollTo(0, 0);
    gsap.to(document.querySelector(".loader"), {
        autoAlpha: 0,
        duration: 1,
        onComplete: () => {
            document.querySelector(".loader").remove();
        },
    });
};

const cursor = () => {
    const letters = ["A", "L", "I", "N"];
    letters.forEach(letter => {
        const follower = document.createElement("span");
        follower.classList.add("follower");
        follower.innerHTML = letter;
        document.querySelector(".cursor-wrapper").appendChild(follower);
    });
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    document.querySelector(".cursor-wrapper").appendChild(cursor);

    window.addEventListener("mousemove", (e) => {
        gsap.set(".cursor", {
            xPercent: -50,
            yPercent: -50,
        });
        gsap.set(".follower", {
            xPercent: -50,
            yPercent: -50,
        });
        gsap.to(".cursor", 0, {
            display: "block",
            x: e.clientX,
            y: e.clientY,
        });
        gsap.to(".follower", 0.8, {
            display: "block",
            x: e.clientX,
            y: e.clientY,
            stagger: 0.1,
        });
    });

    const anchorTags = document.querySelectorAll("a, .menu-element, button, .filter, .deselect-filters");
    anchorTags.forEach(a => {
        a.addEventListener("mouseenter", () => {
            gsap.to(".cursor", {
                duration: 1,
                scale: 0.4,
                opacity: 1,
                ease: "power1.out",
            });
            gsap.to(".follower", {
                scale: 0,
            });
        });

        a.addEventListener("mouseleave", () => {
            gsap.to(".cursor", {
                duration: 1,
                delay: 0.2,
                scale: 1,
                opacity: 1,
                ease: "power1.out",
            });
            gsap.to(".follower", {
                scale: 1,
            });
        });
    });

    const blackBox = document.querySelectorAll(".inner-box");
    blackBox.forEach(box => {
        box.addEventListener("mouseenter", () => {
            gsap.to(".cursor", {
                duration: 0,
                background: "var(--white)",
                ease: "none",
            });
            gsap.to(".follower", {
                duration: 0,
                autoAlpha: 0,
                ease: "none",
            });
        });
        box.addEventListener("mouseleave", () => {
            gsap.to(".cursor", {
                duration: 0,
                background: "var(--black)",
                ease: "none",
            });
            gsap.to(".follower", {
                duration: 0,
                autoAlpha: 1,
                ease: "none",
            });
        });
    });
};

const split = (domElement) => {
    let words = domElement.textContent.split(' ');
    words = words.map(word => {
        let letters = word.split('');
        letters = letters.map(letter => `<span class="letter">${letter}</span>`);
        return letters.join('');
    });
    domElement.innerHTML = words.join(' ');
};

split(document.querySelector(".logo-word-1"));
split(document.querySelector(".logo-word-2"));
split(document.querySelector(".logo-word-3"));
split(document.querySelector(".logo-element"));

const architecture = Array.from(document.querySelectorAll(".logo-word-1 .letter"));
const land = Array.from(document.querySelectorAll(".logo-word-2 .letter"));
const initiative = Array.from(document.querySelectorAll(".logo-word-3 .letter"));
const elements = Array.from(document.querySelectorAll(".logo-element .letter"));
const a = architecture.splice(1, 11);
const l = land.splice(1, 3);
const i = initiative.splice(2, 8);
const all = [a, l, i];

const animateAll = () => {
    elements.forEach(element => {
        element.parentElement.style.display = "inline-block";
    });
    let tl = gsap.timeline();
    tl.from(elements, {
        autoAlpha: 0,
        stagger: 0.1,
        scale: 0,
    });
    tl.to(all, {
        duration: 1.5,
        autoAlpha: 0,
        stagger: 0.2,
        scale: 0,
    });

    let loopTl = gsap.timeline({ delay: 12, repeat: -1, repeatDelay: 8 });
    loopTl.to(all, {
        duration: 1.5,
        autoAlpha: 1,
        stagger: 0.2,
        scale: 1,
    });
    loopTl.to(all, {
        duration: 1.5,
        autoAlpha: 0,
        stagger: 0.2,
        scale: 0,
    });

};

const animateName = () => {
    gsap.to(all, {
        duration: 1.5,
        autoAlpha: 0,
        stagger: 0.2,
        scale: 0,
    });
};

const reverseAnimateName = () => {
    gsap.to(all, {
        duration: 1.5,
        autoAlpha: 1,
        stagger: 0.2,
        scale: 1,
    });
};

logo.addEventListener("mouseenter", () => {
    reverseAnimateName();
});

logo.addEventListener("mouseleave", () => {
    animateName();
});

const splitTitle = (element, content) => {
    const eachWord = content.match(/([\w-/]+)/g);
    eachWord.forEach(word => {
        let div = document.createElement("div");
        div.classList.add("word");
        let text = document.createTextNode(word);
        div.appendChild(text);
        element.appendChild(div);
        split(div);
    });
};

const animateTitle = (x, y, stagger) => {
    document.querySelectorAll(".word").forEach(word => {
        const letters = word.querySelectorAll(".letter");
        const labels = gsap.utils.toArray(".item-title-label");
        let tl = gsap.timeline();
        tl.to(letters, {
            autoAlpha: 1,
            duration: 0.3,
        });
        tl.from(letters, {
            duration: 0.3,
            delay: 0.25,
            xPercent: x,
            yPercent: y,
            stagger: stagger,
        });
        tl.to(word, {
            clipPath: "none"
        });
        labels.forEach(label => {
            if (label) {
                tl.to(label, {
                    opacity: 1,
                    duration: 0.3,
                });
            };
        });
    });
};

const handleTitleHover = () => {
    document.querySelectorAll(".item-title a").forEach(title => {
        title.addEventListener("mouseenter", () => {
            const letters = title.querySelectorAll(".word .letter");
            gsap.to(letters, {
                duration: 0.1,
                color: "var(--main-color)",
                stagger: 0.01,
            });
        });
        title.addEventListener("mouseleave", () => {
            const letters = title.querySelectorAll(".word .letter");
            gsap.to(letters, {
                duration: 0.1,
                color: "var(--black)",
                stagger: 0.01,
            });
        });
    });
}

const shuffleColors = () => {
    const colors = [
        // ["#4864f9", "#eeeddb"],
        // ["#239a5a", "#eeeddb"],
        // ["#a867fd", "#eeeddb"],

        ["#4864f9", "#f0eceb"],
        ["#9fbd58", "#f0eceb"],
        ["#a867fd", "#f0eceb"],

    ];
    const randomColorSet = colors[Math.floor(Math.random() * colors.length)];
    const randomDeg = Math.floor(Math.random() * (350 - 10) + 10);
    const mainColor = document.documentElement;
    const accentColor = document.documentElement;
    const mainBackground = document.documentElement;
    mainColor.style.setProperty("--main-color", `${randomColorSet[0]}`);
    accentColor.style.setProperty("--acc-color", `${randomColorSet[1]}`);
    mainBackground.style.setProperty("--background", `linear-gradient(0deg, ${randomColorSet[1]} 0%, ${randomColorSet[1]} 10%, ${randomColorSet[0]} 100%)`);
};

const horizontalScroll = (textSnapStart) => {
    let items = gsap.utils.toArray(".scroll-items");
    let pageWrapper = document.querySelector("main");

    gsap.to(".page-intro", {
        x: "0",
        ease: "none",
        scrollTrigger: {
            trigger: ".page-intro",
            start: textSnapStart,
            scrub: 0.5,
            snap: {
                snapTo: 1,
                duration: 0.5,
                ease: "power1.inOut",
            },
        },
    });

    items.forEach((container, i) => {
        let localItems = container.querySelectorAll(".scroll-item");
        let distance = () => {
            let lastItemBounds = localItems[localItems.length - 1].getBoundingClientRect();
            let containerBounds = container.getBoundingClientRect();
            return Math.max(0, lastItemBounds.right - containerBounds.right);
        };
        gsap.to(container, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                pinnedContainer: pageWrapper,
                end: () => "+=" + distance(),
                pin: pageWrapper,
                scrub: true,
                invalidateOnRefresh: true,
                snap: {
                    snapTo: 1,
                    duration: 0.5,
                    ease: "power1.inOut",
                },
            },
        });
    });
};

const sliderOpener = () => {
    const sliderContainer = document.querySelectorAll(".slider");
    sliderContainer.forEach(slider => {
        const sliderWrapper = slider.querySelector(".slider-wrapper");
        const sliderButton = sliderWrapper.querySelector(".slider-button");
        const sliderContent = sliderWrapper.querySelector(".slider-content");

        const addClasses = () => {
            slider.classList.add("--display");
            setTimeout(() => {
                sliderWrapper.classList.add("--translateX");
                main.classList.add("--blur");
            }, 200);
            setTimeout(() => {
                sliderButton.classList.add("--opacity");
            }, 600);
        };

        const removeClasses = () => {
            sliderWrapper.classList.remove("--translateX");
            main.classList.remove("--blur");
            sliderButton.classList.remove("--opacity");
            setTimeout(() => {
                sliderContent.scrollTo(0, 0);
                slider.classList.remove("--display");
            }, 500);
        };

        navElement.forEach(element => {
            element.addEventListener("click", () => {
                if (element.id.includes(slider.id)) {
                    element.classList.add("--target");
                    addClasses();
                };
            });
        });
        sliderButton.addEventListener("click", () => {
            navElement.forEach(element => {
                element.classList.remove("--target");
            })
            removeClasses();
        });
    });
};

const bannerOpener = () => {
    const banner = document.querySelector(".banner");
    const bannerContent = document.querySelector(".banner-content");
    const bannerButton = banner.querySelector(".banner-button");
    const bodyElements = gsap.utils.toArray(".main, .box-container, .info-slider, .slider");
    const bannerelements = gsap.utils.toArray(bannerContent, bannerButton);

    const addClasses = () => {
        nav.classList.add("--hide");
        banner.classList.add("--display");
        // footer.classList.add("--blur");
        const tl = gsap.timeline();
        gsap.set(bannerelements, {
            opacity: 0
        });
        tl.to(bodyElements, {
            y: `-${bannerContent.clientHeight}`,
        });
        tl.to(bannerelements, {
            duration: 0.5,
            opacity: 1,
        }, "-=75%");
        tl.from(".contact-block", {
            y: 20,
            stagger: 0.1,
        }, "<");
    };

    const removeClasses = () => {
        gsap.to(bodyElements, {
            y: 0,
        });
        banner.classList.remove("--display");
        nav.classList.remove("--hide");
        // footer.classList.remove("--blur");
    };

    navElement.forEach(element => {
        element.addEventListener("click", () => {
            if (element.id.includes(banner.id)) {
                addClasses();
            };
        });
    });
    bannerButton.addEventListener("click", () => {
        removeClasses();
    });
};

const handleBoxElements = () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        const openButton = box.querySelector(".button");
        const innerBox = box.querySelector(".inner-box");
        const innerBoxItems = box.querySelectorAll(".inner-box-column");
        const closeButton = box.querySelector(".x-button");

        const addClasses = () => {
            innerBox.classList.add("--scale-in");
            openButton.classList.add("--scale-out");
            setTimeout(() => {
                innerBoxItems.forEach(content => {
                    content.classList.add("--opacity");
                });
                closeButton.classList.add("--opacity");
            }, 500);
        };

        const removeClasses = () => {
            innerBoxItems.forEach(content => {
                content.classList.remove("--opacity");
            });
            setTimeout(() => {
                closeButton.classList.remove("--opacity");
                innerBox.classList.remove("--scale-in");
                openButton.classList.remove("--scale-out");
            }, 250);
        }

        openButton.addEventListener("click", () => {
            addClasses();
        });

        closeButton.addEventListener("click", () => {
            removeClasses();
        });
    });
};

const handleProjectInfo = () => {
    const gallery = document.querySelector(".gallery");
    const slider = document.querySelector(".info-slider");
    const sliderButton = slider.querySelector(".slider-button");
    const sliderContent = slider.querySelector(".slider-content");
    const infoButton = document.querySelector(".i-button");
    const innerBox = document.querySelectorAll(".inner-box");
    const readMoreButton = document.querySelector(".read-more-button");
    let tl = gsap.timeline();

    sliderButton.addEventListener("click", () => {
        const state = Flip.getState(".gallery, .gallery-item");
        gallery.classList.add("--width");
        infoButton.classList.remove("--scale-out");

        tl.to(slider, {
            duration: 0.5,
            xPercent: 100,
            ease: "power1.out",
        });

        tl.to(slider, {
            display: "none",
            onUpdate: () => sliderContent.scrollTo(0, 0),
        });

        Flip.from(state, {
            absolute: true,
            duration: 0.75,
            stagger: {
                from: "start",
                axis: "x",
                amount: 0.25,
            },
            ease: "power1.out",
            simple: true,
        });

        gsap.to(infoButton, {
            duration: 0.5,
            delay: 1,
            opacity: 1,
            pointerEvents: "all",
            ease: "power1.out",
        });
    });

    readMoreButton.addEventListener("click", () => {
        const state = Flip.getState(".gallery, .gallery-item");
        gallery.classList.remove("--width");
        innerBox.forEach(box => {
            if (box.classList.contains("--scale-in")) {
                box.classList.remove("--scale-in");
            };
        });

        gsap.to(infoButton, {
            duration: 0.5,
            opacity: 0,
            pointerEvents: "none",
            ease: "power1.out",
        });

        tl.to(slider, {
            duration: 0.15,
            display: "flex",
        });

        tl.to(slider, {
            duration: 0.5,
            xPercent: 0,
            ease: "power1.out",
        });

        Flip.from(state, {
            absolute: true,
            duration: 0.5,
            stagger: {
                from: "start",
                axis: "x",
                amount: 0,
            },
            ease: "power1.out",
            simple: true,
        });
    });
};

const handleFilters = () => {
    const filters = document.querySelectorAll(".filter");
    const items = document.querySelectorAll(".gallery-item, .accordion");
    const filterClear = document.querySelector(".deselect-filters");

    const applyFilters = (filter) => {
        const filterByType = filter.dataset.type;
        const filterByCategory = filter.dataset.category;

        items.forEach(item => {
            const itemType = item.dataset.type;
            const itemCategory = item.dataset.category;
            if (itemType == filterByType) {
                item.classList.remove("--unfiltered");
                item.classList.add("--filtered");
            } else if (itemCategory == filterByCategory) {
                item.classList.remove("--unfiltered");
                item.classList.add("--filtered");
            } else {
                item.classList.add("--unfiltered");
                item.classList.remove("--filtered");
            };
        });

    };

    const removeFilters = () => {
        filterClear.classList.remove("--opacity");
        filterClear.classList.remove("--display");
        filters.forEach(filter => {
            filter.classList.remove("--target");
        });
        items.forEach(item => {
            item.classList.remove("--unfiltered");
            item.classList.add("--filtered");
        });
    }

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            [...filters].filter(i => i !== filter).forEach(i => i.classList.remove("--target"));
            filter.classList.add("--target");
            filterClear.classList.add("--display");
            setTimeout(() => {
                filterClear.classList.add("--opacity");
            }, 100);

            applyFilters(filter);
        });
    });

    filterClear.addEventListener("click", () => {
        removeFilters();
    });
};

const accordion = () => {
    const accordion = document.querySelectorAll(".accordion");
    accordion.forEach(item => {
        const openers = item.querySelectorAll(".accordion-title, .accordion-topbar");
        const elements = item.querySelectorAll(".accordion-image, .accordion-content-block");
        openers.forEach(opener => {
            opener.addEventListener("click", () => {
                [...accordion].filter(i => i !== item).forEach(i => i.classList.remove("--open"));
                item.classList.toggle("--open");
                const paddingOffset = 128;
                const itemPosition = item.getBoundingClientRect().top;
                const offsetPosition = itemPosition + window.scrollY - paddingOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
                gsap.from(elements, {
                    duration: 0.5,
                    opacity: 0,
                });
            });
        });
    });
};

window.addEventListener("load", () => {
    documentHeight();
    documentWidth();
    loader();
    cursor();
    animateAll();
    sliderOpener();
    bannerOpener();
    shuffleColors();
});

window.addEventListener("resize", () => {
    documentHeight();
    documentWidth();
});


