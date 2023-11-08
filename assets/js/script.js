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

const handleLayoutsShuffle = () => {
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
                    // mainEl.classList.add("--translateX");
                    // logo.classList.add("--left");
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
                // mainEl.classList.remove("--translateX");
                // logo.classList.remove("--left");
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
    const bannerContainer = document.querySelectorAll(".banner");
    bannerContainer.forEach(banner => {
        const bannerContent = banner.querySelectorAll(".banner-block");
        const bannerButton = banner.querySelector(".banner-button");
        const offset = banner.innerHeight
        const addClasses = () => {
            nav.classList.add("--hide");
            banner.classList.add("--display");
            main.forEach(mainEl => {
                mainEl.style.transform = `translateY(-${banner.clientHeight}px)`;
            });
            setTimeout(() => {
                bannerContent.forEach(content => {
                    content.classList.add("--opacity");
                });
                bannerButton.classList.add("--opacity");
            }, 100);
        };
        const removeClasses = () => {
            main.forEach(mainEl => {
                mainEl.style.transform = "translateY(0)";
            });
            setTimeout(() => {
                bannerContent.forEach(content => {
                    content.classList.remove("--opacity");
                });
                bannerButton.classList.remove("--opacity");
                banner.classList.remove("--display");
                nav.classList.remove("--hide");
            }, 150);
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

// const handleScrollDirection = () => {
//     const scrollContainer = document.querySelector(".grid-layout .scroll-wrapper");
//     window.addEventListener("resize", () => {
//         scrollContainer.scrollTo(0, 0);
//     });
//     scrollContainer.addEventListener("wheel", (event) => {
//         event.preventDefault();
//         scrollContainer.scrollLeft += event.deltaY;
//     });
// };

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
    const galleryCaption = galleryContainer.querySelectorAll("figcaption");
    const galleryCaptionItem = galleryContainer.querySelectorAll("figcaption div");
    const sliderContainer = document.querySelector(".info-slider");
    const sliderWrapper = sliderContainer.querySelector(".info-slider-wrapper");
    const sliderCloseButton = sliderContainer.querySelector(".slider-button");
    const sliderContent = sliderContainer.querySelector(".slider-content");
    const infoButton = document.querySelector(".i-button");

    sliderCloseButton.addEventListener("click", () => {
        sliderWrapper.classList.add("--translateX");
        galleryContainer.classList.add("--width");
        setTimeout(() => {
            sliderContent.scrollTo(0, 0);
            galleryCaption.forEach(itemInfo => {
                itemInfo.classList.add("--display");
            });
        }, 450);
        setTimeout(() => {
            galleryCaptionItem.forEach(item => {
                item.classList.add("--opacity");
            });
            sliderContainer.classList.add("--hide");
        }, 500);
        setTimeout(() => {
            infoButton.classList.add("--opacity");
        }, 1000);
    });
    const parentContainer = document.querySelectorAll(".box-wrapper");
    parentContainer.forEach(element => {
        const boxOpenButton = element.querySelector("button");
        const boxContainer = element.querySelector(".inner-box");
        const boxContent = element.querySelectorAll(".inner-box-column");
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
                sliderWrapper.classList.remove("--translateX");
                galleryContainer.classList.remove("--width");
                boxContent.forEach(content => {
                    content.classList.remove("--opacity");
                });
                galleryCaptionItem.forEach(item => {
                    item.classList.remove("--opacity");
                });
                boxOpenButton.classList.remove("--scale-out");

                setTimeout(() => {
                    boxContainer.classList.remove("--scale-in");
                    boxCloseButton.classList.remove("--opacity");
                }, 150);
                setTimeout(() => {
                    galleryCaption.forEach(caption => {
                        caption.classList.remove("--display");
                    });
                }, 500);
                setTimeout(() => {
                    boxContainer.classList.remove("--display");
                }, 650);
            });
        };
    });
};

const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".gallery-item");
const filterClear = document.querySelector(".deselect-filters");

const handleFilters = () => {
    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            [...filters].filter(i => i !== filter).forEach(i => i.classList.remove("--target"));
            filter.classList.add("--target");
            const filterName = filter.dataset.filter;
            filterClear.classList.add("--display");
            setTimeout(() => {
                filterClear.classList.add("--opacity");
            }, 100);

            items.forEach(item => {
                const itemFilterSetA = item.dataset.filterseta;
                const itemFilterSetB = item.dataset.filtersetb;
                const itemFilters = [itemFilterSetA, itemFilterSetB];
                if (itemFilters.includes(filterName)) {
                    item.classList.remove("--unfiltered");
                    item.classList.add("--filtered");
                } else {
                    item.classList.add("--unfiltered");
                    item.classList.remove("--filtered");
                };
            });
            filterClear.addEventListener("click", () => {
                items.forEach(item => {
                    item.classList.remove("--unfiltered");
                    item.classList.add("--filtered");
                });
                filterClear.classList.remove("--opacity");
                filterClear.classList.remove("--display");
                filter.classList.remove("--target");
            });
        });
    });
};

window.addEventListener("load", () => {
    documentHeight();
    sliderOpener();
    bannerOpener();
    handleColorsShuffle();
});

window.addEventListener("resize", () => {
    documentHeight();
});