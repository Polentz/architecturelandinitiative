console.log(
    '%cDesign & Code: Giulia Polenta https://www.iampolenta.com/',
    'color: #4c00ff; font-family: sans-serif; font-size: .75rem;'
);

gsap.registerPlugin(Observer, TextPlugin, Flip);

const footer = document.querySelector(".footer");
const nav = footer.querySelector(".nav");
const navElement = nav.querySelectorAll(".menu-element");
const main = document.querySelectorAll(".main");
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

const handleColorsShuffle = () => {
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
                main.forEach(mainEl => {
                    mainEl.classList.add("--blur");
                });
            }, 200);
            setTimeout(() => {
                sliderButton.classList.add("--opacity");
            }, 600);
        };
        const removeClasses = () => {
            sliderWrapper.classList.remove("--translateX");
            main.forEach(mainEl => {
                mainEl.classList.remove("--blur");
            });
            sliderButton.classList.remove("--opacity");
            setTimeout(() => {
                sliderContent.scrollTo(0, 0);
                slider.classList.remove("--display");
            }, 500);
        };
        navElement.forEach(element => {
            element.addEventListener("click", () => {
                if (element.id.includes(slider.id)) {
                    if (slider.classList.contains("--display")) {
                        element.classList.remove("--target");
                        removeClasses();
                    } else {
                        element.classList.add("--target");
                        addClasses();
                    };
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
    const bannerContentElements = banner.querySelectorAll(".contact-block");
    const bannerButton = banner.querySelector(".banner-button");
    const bodyElements = document.querySelectorAll(".main, .box-container");
    const addClasses = () => {
        nav.classList.add("--hide");
        banner.classList.add("--display");
        bodyElements.forEach(element => {
            element.style.transform = `translateY(-${bannerContent.clientHeight}px)`;
        });
        setTimeout(() => {
            bannerContentElements.forEach(content => {
                content.classList.add("--opacity");
            });
            bannerButton.classList.add("--opacity");
        }, 100);
    };
    const removeClasses = () => {
        bodyElements.forEach(element => {
            element.style.transform = "translateY(0)";
        });
        setTimeout(() => {
            bannerContentElements.forEach(content => {
                content.classList.remove("--opacity");
            });
            bannerButton.classList.remove("--opacity");
            banner.classList.remove("--display");
            nav.classList.remove("--hide");
        }, 150);
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
    const galleryGrid = document.querySelector(".gallery-grid");
    const slider = document.querySelector(".info-slider");
    const sliderButton = slider.querySelector(".slider-button");
    const sliderContent = slider.querySelector(".slider-content");
    const infoButton = document.querySelector(".i-button");
    const innerBox = document.querySelectorAll(".inner-box");
    const readMoreButton = document.querySelector(".read-more-button");

    sliderButton.addEventListener("click", () => {
        const state = Flip.getState(".gallery, .gallery-item, .gallery-item");
        gallery.classList.add("--width");
        slider.classList.add("--translateX");
        infoButton.classList.remove("--scale-out");
        setTimeout(() => {
            slider.classList.add("--hide");
            sliderContent.scrollTo(0, 0);
        }, 500);
        setTimeout(() => {
            infoButton.classList.add("--opacity");
        }, 1000);

        Flip.from(state, {
            duration: 0.5,
            stagger: {
                from: "start",
                axis: "x",
                amount: 0.5,
            },
            ease: "power1.out",
        });
    });

    readMoreButton.addEventListener("click", () => {
        const state = Flip.getState(".gallery, .gallery-item, .gallery-item");
        slider.classList.remove("--hide");
        gallery.classList.remove("--width");
        infoButton.classList.remove("--opacity");
        innerBox.forEach(box => {
            if (box.classList.contains("--scale-in")) {
                box.classList.remove("--scale-in")
            };
        });
        setTimeout(() => {
            slider.classList.remove("--translateX");
        }, 250);
        Flip.from(state, {
            duration: 0.5,
            stagger: {
                from: "start",
                axis: "x",
                amount: 0,
            },
            ease: "power1.out",
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

const carousel = () => {
    const elementsArray = Array.from(document.querySelectorAll(".cover-layout-title"));
    const scrollButton = document.querySelector(".cover-button");

    if (elementsArray.length < 1 && scrollButton) {
        scrollButton.style.display = "none";
    } else if (scrollButton) {
        const parentElement = scrollButton.parentElement;
        const scrollContanier = parentElement.querySelector(".scroll-wrapper");
        const scrollWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const firstElement = elementsArray[0];
        const lastElement = elementsArray.pop();
        const observer = new window.IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                scrollButton.style.transform = "rotate(180deg)"
                scrollButton.addEventListener("click", () => {
                    firstElement.scrollIntoView({
                        // behavior: "smooth",
                    });
                });
            } else {
                scrollButton.style.transform = "rotate(0deg)";
                scrollButton.addEventListener("click", () => {
                    scrollContanier.scrollBy({
                        left: scrollWidth,
                        // behavior: "smooth",
                    });
                });
            };
        }, {
            root: null,
            threshold: .75,
        });
        observer.observe(lastElement);
    };
};

const accordion = () => {
    const accordion = document.querySelectorAll(".accordion");
    accordion.forEach(item => {
        const openers = item.querySelectorAll(".accordion-title, .accordion-topbar");
        openers.forEach(opener => {
            opener.addEventListener("click", () => {
                [...accordion].filter(i => i !== item).forEach(i => i.classList.remove("--open"));
                item.classList.toggle("--open");
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
    animateAll();
    sliderOpener();
    bannerOpener();
    // handleColorsShuffle();
});

window.addEventListener("resize", () => {
    documentHeight();
});


