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

const homeLayoutsShuffle = () => {
    const layouts = document.querySelectorAll(".grid-layout, .cover-layout");
    const randomLayout = layouts[Math.floor(Math.random() * layouts.length)];
    randomLayout.classList.add("--random");
    const shuffleButton = document.querySelectorAll(".header-button");
    const scrollElements = document.querySelectorAll(".scroll-wrapper");
    shuffleButton.forEach(button => {
        button.addEventListener("click", () => {
            layouts.forEach(layout => {
                if (layout.classList.contains("--random")) {
                    layout.classList.remove("--random");
                } else {
                    layout.classList.add("--random");
                    logoAnimation();
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

const handleScrollDirection = () => {
    const scrollContainer = document.querySelector(".grid-layout .scroll-wrapper");
    window.addEventListener("resize", () => {
        scrollContainer.scrollTo(0, 0);
    });
    scrollContainer.addEventListener("wheel", (event) => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
    });
};

const handleCarousel = () => {
    const scrollButton = document.querySelector(".cover-button");
    const parentElement = scrollButton.parentElement;
    const scrollContanier = parentElement.querySelector(".scroll-wrapper");
    const scrollWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const elementsArray = Array.from(document.querySelectorAll(".cover-layout-title"));
    const firstElement = elementsArray[0];
    const lastElement = elementsArray.pop();

    const observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            scrollButton.style.transform = "rotate(180deg)"
            scrollButton.addEventListener("click", () => {
                firstElement.scrollIntoView({
                    behavior: "smooth",
                });
            });
        } else {
            scrollButton.style.transform = "rotate(0deg)";
            scrollButton.addEventListener("click", () => {
                scrollContanier.scrollBy({
                    left: scrollWidth,
                    behavior: "smooth",
                });
            });
        };
    }, {
        root: null,
        threshold: .75,
    });
    observer.observe(lastElement);
};

const handleProjectButtons = () => {
    const galleryContainer = document.querySelector(".gallery");
    const galleryGrid = galleryContainer.querySelector(".gallery-grid");
    const sliderContainer = document.querySelector(".info-slider");
    const sliderWrapper = sliderContainer.querySelector(".info-slider-wrapper");
    const sliderCloseButton = sliderContainer.querySelector(".slider-button");
    const sliderContent = sliderContainer.querySelector(".slider-content");
    const iButton = document.querySelector(".i-button");

    sliderCloseButton.addEventListener("click", () => {
        sliderWrapper.classList.add("--translateX");
        setTimeout(() => {
            galleryGrid.classList.add("--change-grid");
            galleryContainer.classList.add("--width");
        }, 300);
        setTimeout(() => {
            sliderContent.scrollTo(0, 0);
            sliderContainer.classList.add("--hide");
        }, 500);
        setTimeout(() => {
            iButton.classList.add("--opacity");
        }, 900);
    });

    const parentContainer = document.querySelectorAll(".box-wrapper");
    parentContainer.forEach(element => {
        const boxOpenButton = element.querySelector("button");
        const boxContainer = element.querySelector(".inner-box");
        const boxContent = element.querySelectorAll(".inner-box div");
        const boxReadMore = element.querySelector(".read-more-button");
        const boxCloseButton = element.querySelector(".x-button");

        boxOpenButton.addEventListener("click", () => {
            boxContainer.classList.add("--display");
            boxOpenButton.classList.remove("--opacity");
            setTimeout(() => {
                boxContainer.classList.add("--scale-in");
                boxOpenButton.classList.add("--scale-out");
            }, 100);
            setTimeout(() => {
                boxContent.forEach(content => {
                    content.classList.add("--opacity");
                });
                boxCloseButton.classList.add("--opacity");
            }, 500);
        });

        boxCloseButton.addEventListener("click", () => {
            boxContent.forEach(content => {
                content.classList.remove("--opacity");
            });
            setTimeout(() => {
                boxCloseButton.classList.remove("--opacity");
                boxContainer.classList.remove("--scale-in");
                boxOpenButton.classList.remove("--scale-out");
                boxOpenButton.classList.add("--opacity");
            }, 250);

            setTimeout(() => {
                boxContainer.classList.remove("--display");
            }, 750);
        });

        if (boxReadMore) {
            boxReadMore.addEventListener("click", () => {
                sliderContainer.classList.remove("--hide");
                boxContent.forEach(content => {
                    content.classList.remove("--opacity");
                });
                boxCloseButton.classList.remove("--opacity");
                setTimeout(() => {
                    boxContainer.classList.remove("--scale-in");
                    galleryGrid.classList.remove("--change-grid");
                    galleryContainer.classList.remove("--width");
                }, 100);
                setTimeout(() => {
                    sliderWrapper.classList.remove("--translateX");
                    boxOpenButton.classList.remove("--opacity");
                    boxOpenButton.classList.remove("--scale-out");
                }, 500);
            });
        };
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