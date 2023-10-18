console.log(
    '%cDesign & Code: Giulia Polenta https://www.iampolenta.com/',
    'color: #4c00ff; font-family: sans-serif; font-size: .75rem;'
);

// global variables
const footer = document.querySelector(".footer");
const nav = footer.querySelector(".nav");
const navElement = nav.querySelectorAll(".menu-element");
const main = document.querySelectorAll(".main");
const logo = document.querySelector(".logo");

const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

const handleAnchorTags = () => {
    const aTags = document.querySelectorAll(".js-href");
    aTags.forEach(a => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
            const href = a.getAttribute("href");
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
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
                main.forEach(mainEl => {
                    mainEl.classList.add("--blur");
                    mainEl.classList.add("--translateX");
                    logo.classList.add("--left");
                });
            }, 100);
            setTimeout(() => {
                sliderButton.classList.add("--opacity");
            }, 600);
        };
        const removeClasses = () => {
            sliderWrapper.classList.remove("--translateX");
            main.forEach(mainEl => {
                mainEl.classList.remove("--blur");
                mainEl.classList.remove("--translateX");
                logo.classList.remove("--left");
            });
            sliderButton.classList.remove("--opacity");
            setTimeout(() => {
                sliderContent.scrollTo(0, 0);
                slider.classList.remove("--display");
            }, 500);
        };
        navElement.forEach(element => {
            element.addEventListener("click", () => {
                if (element.innerHTML.toLowerCase().includes(slider.id)) {
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
    const bannerContainer = document.querySelectorAll(".banner");
    bannerContainer.forEach(banner => {
        const bannerContent = banner.querySelectorAll(".banner-block");
        const bannerButton = banner.querySelector(".banner-button");
        const addClasses = () => {
            nav.classList.add("--hide");
            banner.classList.add("--display");
            setTimeout(() => {
                bannerContent.forEach(content => {
                    content.classList.add("--opacity");
                });
                bannerButton.classList.add("--opacity");
            }, 100);
        };
        const removeClasses = () => {
            bannerContent.forEach(content => {
                content.classList.remove("--opacity");
            });
            bannerButton.classList.remove("--opacity");
            banner.classList.remove("--display");
            nav.classList.remove("--hide");
        };
        navElement.forEach(element => {
            element.addEventListener("click", () => {
                if (element.innerHTML.toLowerCase().includes(banner.id)) {
                    addClasses();
                };
            });
        });
        bannerButton.addEventListener("click", () => {
            removeClasses();
        });
        window.addEventListener("scroll", () => {
            removeClasses();
        });
    });
};

const handleScrollDirection = () => {
    const scrollContainer = document.querySelectorAll(".scroll-wrapper");
    scrollContainer.forEach(container => {
        window.addEventListener("resize", () => {
            container.scrollTo(0, 0);
        })
        container.addEventListener("wheel", (event) => {
            event.preventDefault();
            container.scrollLeft += event.deltaY;
        });
    });
};

const handleCarousel = () => {
    const scrollButton = document.querySelector(".cover-button");
    const parentElement = scrollButton.parentElement;
    const scrollElement = parentElement.querySelector(".scroll-wrapper");
    const scrollWidth = document.querySelector(".cover-layout-title").offsetWidth;
    scrollButton.addEventListener("click", () => {
        scrollElement.scrollBy({
            left: scrollWidth,
            behavior: "smooth",
        });
    });
    // const inViewport = (e) => {
    //     scrollElement.addEventListener("scroll", () => {
    //         const elementRect = e.getBoundingClientRect();
    //         return (elementRect.left < innerWidth && elementRect.right > 0);
    //     });
    // };
    // const lastContainer = Array.from(document.querySelectorAll(".cover-layout-title")).pop();
    // if (inViewport(lastContainer)) {
    //     scrollButton.style.transform = "rotate(180deg)"
    //     scrollButton.addEventListener("click", () => {
    //         scrollElement.scrollTo({
    //             left: 0,
    //         });
    //     });
    // };
    // setInterval(() => {
    //     scrollElement.scrollBy({
    //         left: scrollWidth,
    //         behavior: "smooth",
    //     });
    // }, 3000);
};

const homeLayoutsShuffle = () => {
    const layouts = document.querySelectorAll(".grid-layout, .cover-layout");
    const randomLayout = layouts[Math.floor(Math.random() * layouts.length)];
    randomLayout.classList.add("--random");
    const shuffleButton = document.querySelectorAll(".header-button");
    const scrollElements = document.querySelectorAll(".scroll-wrapper")
    shuffleButton.forEach(button => {
        button.addEventListener("click", () => {
            layouts.forEach(layout => {
                if (layout.classList.contains("--random")) {
                    layout.classList.remove("--random");
                } else {
                    layout.classList.add("--random");
                };
            });
            scrollElements.forEach(scrollElement => {
                scrollElement.scrollTo({
                    left: 0,
                });
            });
        });
    });
};

window.addEventListener("load", () => {
    documentHeight();
    sliderOpener();
    bannerOpener();
});

window.addEventListener("resize", () => {
    documentHeight();
});