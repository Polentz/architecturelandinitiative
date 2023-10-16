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

const sliderOpener = () => {
    const sliderContainer = document.querySelectorAll(".slider");
    const navElement = document.querySelectorAll(".menu-element");
    sliderContainer.forEach(slider => {
        const sliderWrapper = slider.querySelector(".slider-wrapper");
        const sliderButton = sliderWrapper.querySelector(".slider-button");
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
                slider.classList.remove("--display");
            }, 500);
        }
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

window.addEventListener("load", () => {
    documentHeight();
    sliderOpener();
});

window.addEventListener("resize", () => {
    documentHeight();
});