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
            }, 100);
            setTimeout(() => {
                sliderButton.classList.add("--opacity");
            }, 600);
        };
        const removeClasses = () => {
            sliderWrapper.classList.remove("--translateX");
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
            // setTimeout(() => {
            //     banner.classList.remove("--display");
            //     nav.classList.remove("--hide");
            // }, 500);
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

window.addEventListener("load", () => {
    documentHeight();
    sliderOpener();
    bannerOpener();
});

window.addEventListener("resize", () => {
    documentHeight();
});