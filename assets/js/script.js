console.log(
    '%cDesign & Code: Giulia Polenta https://www.iampolenta.com/',
    'color: #4c00ff; font-family: sans-serif; font-size: .75rem;'
);

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

// global variables
const footer = document.querySelector(".footer");
const nav = footer.querySelector(".nav");
const navElement = nav.querySelectorAll(".menu-element");
const main = document.querySelectorAll("main");
const scrollContainer = document.querySelectorAll(".scroll-wrapper");

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
            }, 100);
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

const handleScrollButton = () => {
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
};

const homepageShuffle = () => {
    const array = document.querySelectorAll(".main");
    const randomItem = array[Math.floor(Math.random() * array.length)];
    console.log(randomItem)
    randomItem.classList.add("--random");
}

window.addEventListener("load", () => {
    documentHeight();
    homepageShuffle();
    sliderOpener();
    bannerOpener();
    handleScrollDirection();
    handleScrollButton();
});

window.addEventListener("resize", () => {
    documentHeight();
});