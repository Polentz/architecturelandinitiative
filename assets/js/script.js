console.log(
    '%cDesign & Code: Giulia Polenta https://www.iampolenta.com/',
    'color: #4c00ff; font-family: sans-serif; font-size: .75rem;'
);

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

const cursor = () => {
    const letters = ["A", "L", "I", "N"];
    letters.forEach(letter => {
        const follower = document.createElement("span");
        follower.classList.add("follower");
        follower.innerHTML = letter;
        document.body.appendChild(follower);
    });
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    window.addEventListener("mousemove", (e) => {
        gsap.set(".cursor", {
            xPercent: -50,
            yPercent: -50,
        });
        gsap.set(".follower", {
            xPercent: -50,
            yPercent: -50,
        });
        gsap.to(".cursor", 0.2, {
            display: "block",
            x: e.clientX,
            y: e.clientY,
        });
        gsap.to(".follower", 0.8, {
            display: "block",
            x: e.clientX,
            y: e.clientY,
            stagger: 0.1
        });
    });

    const anchorTags = document.querySelectorAll("a, .menu-element, button, .filter, .deselect-filters");
    anchorTags.forEach(a => {
        a.addEventListener("mouseenter", () => {
            gsap.to(".cursor", {
                duration: 1,
                scale: 0.4,
                opacity: 1,
                ease: "power1.out"
            });
            gsap.to(".follower", {
                scale: 0
            });
        });

        a.addEventListener("mouseleave", () => {
            gsap.to(".cursor", {
                duration: 1,
                delay: 0.2,
                scale: 1,
                opacity: 1,
                ease: "power1.out"
            });
            gsap.to(".follower", {
                scale: 1
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
}

const animateName = () => {
    gsap.to(all, {
        duration: 1.5,
        autoAlpha: 0,
        stagger: 0.1,
        scale: 0,
    });
};

const reverseAnimateName = () => {
    gsap.to(all, {
        duration: 1.5,
        autoAlpha: 1,
        stagger: 0.1,
        scale: 1,
    });
};

logo.addEventListener("mouseenter", () => {
    reverseAnimateName();
});

logo.addEventListener("mouseleave", () => {
    animateName();
});

const animateTitle = () => {
    document.querySelectorAll(".item-title").forEach(title => {
        let content = title.dataset.name
        // const eachWord = content.match(/(\w+)/g);
        const eachWord = content.match(/([\w-/]+)/g);
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
            xPercent: -100,
            stagger: 0.1,
        });
        tl.to(word, {
            clipPath: "none"
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

const shuffleColors = () => {
    const colors = [
        ["#4864f9", "#eeeddb"],
        ["#5dd5ae", "#eeeddb"],
        ["#a867fd", "#eeeddb"],
        ["#c4854b", "#eeeddb"]
    ]

    const randomColorSet = colors[Math.floor(Math.random() * colors.length)];
    const randomDeg = Math.floor(Math.random() * (350 - 10) + 10);
    const mainColor = document.documentElement;
    const accentColor = document.documentElement;
    const mainBackground = document.documentElement;
    mainColor.style.setProperty("--main-color", `${randomColorSet[0]}`);
    accentColor.style.setProperty("--acc-color", `${randomColorSet[1]}`);
    mainBackground.style.setProperty("--background", `linear-gradient(${randomDeg}deg, ${randomColorSet[1]} 20%, ${randomColorSet[0]} 100%)`);
};

const horizontalScroll = () => {
    let sections = gsap.utils.toArray(".grid-layout div");
    gsap.to(sections, {
        xPercent: -100 * (sections.length),
        ease: "none",
        scrollTrigger: {
            trigger: ".grid-layout",
            pin: true,
            scrub: .5,
            snap: {
                snapTo: 1 / (sections.length),
                duration: .25,
                ease: "power1.inOut"
            },
        },
    });
    gsap.to(".page-intro", {
        y: "0",
        ease: "none",
        scrollTrigger: {
            trigger: ".grid-layout",
            start: "bottom bottom",
            pin: false,
            scrub: .5,
            snap: {
                snapTo: 1,
                duration: .5,
                ease: "power1.inOut"
            },
        },
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
                document.body.style.overflow = "hidden";
            }, 200);
            setTimeout(() => {
                sliderButton.classList.add("--opacity");
            }, 600);
        };

        const removeClasses = () => {
            sliderWrapper.classList.remove("--translateX");
            main.classList.remove("--blur");
            document.body.style.overflow = "inherit";
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
    const bodyElements = gsap.utils.toArray(".main section, .box-container, .info-slider, .slider");
    const bannerelements = gsap.utils.toArray(bannerContent, bannerButton);

    const addClasses = () => {
        nav.classList.add("--hide");
        banner.classList.add("--display");
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
            duration: 1,
            stagger: {
                from: "start",
                axis: "x",
                amount: 0.5,
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
                    behavior: "smooth"
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
    cursor();
    animateAll();
    sliderOpener();
    bannerOpener();
    shuffleColors();
});

window.addEventListener("resize", () => {
    documentHeight();
});


