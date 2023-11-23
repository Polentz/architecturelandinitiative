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
const logo = document.querySelector(".header h1");

// const handleLayoutsShuffle = () => {
//     const layouts = document.querySelectorAll(".grid-layout, .cover-layout");
//     const randomLayout = layouts[Math.floor(Math.random() * layouts.length)];
//     randomLayout.classList.add("--random");
//     const currentLayout = document.querySelector(".--random");
//     const shuffleButton = document.querySelectorAll(".header-button");
//     const projectsButton = document.getElementById("to-projects");
//     const toolsButton = document.getElementById("to-tools");
//     const projectsMenu = document.querySelector(".grid-layout");
//     const toolsMenu = document.querySelector(".cover-layout");
//     const scrollElements = document.querySelectorAll(".scroll-wrapper");
//     shuffleButton.forEach(button => {
//         button.addEventListener("click", () => {
//             layouts.forEach(layout => {
//                 if (layout.classList.contains("--random")) {
//                     layout.classList.remove("--random");
//                 } else {
//                     layout.classList.add("--random");
//                     logoAnimation();
//                 };
//             });
//             scrollElements.forEach(scrollElement => {
//                 scrollElement.scrollTo({
//                     left: 0,
//                 });
//             });
//         });
//     });

//     if (projectsButton.id == `to-${currentLayout.id}`) {
//         toolsButton.style.display = "none";
//     } else if (toolsButton.id == `to-${currentLayout.id}`) {
//         projectsButton.style.display = "none";
//     };

//     toolsButton.addEventListener("click", () => {
//         if (projectsMenu.classList.contains("--random")) {
//             projectsMenu.classList.remove("--random");
//             toolsButton.style.display = "none";
//             projectsButton.style.display = "flex";
//         };
//         toolsMenu.classList.add("--random");
//     });

//     projectsButton.addEventListener("click", () => {
//         if (toolsMenu.classList.contains("--random")) {
//             toolsMenu.classList.remove("--random");
//             projectsButton.style.display = "none";
//             toolsButton.style.display = "flex";

//         };
//         projectsMenu.classList.add("--random");
//     });
// };

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
                scale: 0.2,
                opacity: 1,
                // filter: "invert(1)",
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
                // filter: "invert(0)",
                ease: "power1.out"
            });
            gsap.to(".follower", {
                scale: 1
            });
        });
    });
};

const shuffleColors = () => {
    const colors = [
        ["#FEFF8A", "#F1F1F1"],
        ["#FA7660", "#FFE1E8"],
        ["#D9A1F8", "#C2FFC8"],
        ["#7B8EF2", "#F9E7CF"]
    ]
    const randomColorSet = colors[Math.floor(Math.random() * colors.length)];
    const mainColor = document.documentElement;
    const accentColor = document.documentElement;
    const mainBackground = document.documentElement;
    const sideBackground = document.documentElement;
    mainColor.style.setProperty("--main-color", `${randomColorSet[0]}`);
    accentColor.style.setProperty("--acc-color", `${randomColorSet[1]}`);
    mainBackground.style.setProperty("--background", `linear-gradient(180deg, ${randomColorSet[1]} 0%, ${randomColorSet[0]} 100%)`);
    sideBackground.style.setProperty("--side-background", `linear-gradient(180deg, ${randomColorSet[0]} 0%, ${randomColorSet[1]} 100%)`);
};

const verticalScroll = () => {
    let sections = gsap.utils.toArray(".main div");
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".main",
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".main").offsetWidth
        }
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
            sliderButton.addEventListener("click", () => {
                element.classList.remove("--target");
                removeClasses();
            });
        });
    });
};

const bannerOpener = () => {
    const banner = document.querySelector(".banner");
    const bannerContent = document.querySelector(".banner-content");
    const bannerButton = banner.querySelector(".banner-button");
    const bodyElements = gsap.utils.toArray(".main, .box-container, .info-slider");
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
        })
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

// const carousel = () => {
//     const elementsArray = Array.from(document.querySelectorAll(".cover-layout-item"));
//     const scrollButton = document.querySelector(".cover-button");

//     if (elementsArray.length < 1 && scrollButton) {
//         scrollButton.style.display = "none";
//     } else if (scrollButton) {
//         const scrollContanier = document.querySelector(".cover-layout");
//         const scrollWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//         const firstElement = elementsArray[0];
//         const lastElement = elementsArray.pop();
//         const observer = new window.IntersectionObserver(([entry]) => {
//             if (entry.isIntersecting) {
//                 scrollButton.style.transform = "rotate(180deg)"
//                 scrollButton.addEventListener("click", () => {
//                     firstElement.scrollIntoView();
//                 });
//             } else {
//                 scrollButton.style.transform = "rotate(0deg)";
//                 scrollButton.addEventListener("click", () => {
//                     scrollContanier.scrollBy({
//                         left: scrollWidth
//                     });
//                 });
//             };
//         }, {
//             root: null,
//             threshold: .75,
//         });
//         observer.observe(lastElement);
//     };
// };

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

const split = (h1) => {
    let words = h1.textContent.split(' ');
    words = words.map(word => {
        let letters = word.split('');
        letters = letters.map(letter => `<span class="letter">${letter}</span>`);
        return letters.join('');
    });
    h1.innerHTML = words.join(' ');
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

const undoAnimation = () => {
    gsap.to(all, {
        duration: 1.5,
        autoAlpha: 1,
        stagger: 0.1,
        scale: 1,
    });
};

logo.addEventListener("mouseenter", () => {
    undoAnimation();
});

logo.addEventListener("mouseleave", () => {
    animateName();
});

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


