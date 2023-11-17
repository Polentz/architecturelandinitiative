window.addEventListener("load", () => {
    handleBoxElements();
    handleProjectInfo();
    handleFilters();
});



// const gallery = document.querySelector(".gallery");
// const galleryGrid = gallery.querySelector(".gallery-grid");
// const galleryCaption = gallery.querySelectorAll("figcaption");
// const galleryCaptionItem = gallery.querySelectorAll("figcaption div");
// const sliderContainer = document.querySelector(".info-slider");
// const sliderWrapper = sliderContainer.querySelector(".info-slider-wrapper");
// const sliderCloseButton = sliderContainer.querySelector(".slider-button");
// const sliderContent = sliderContainer.querySelector(".slider-content");
// const infoButton = document.querySelector(".i-button");

// document.querySelector(".slider-button").addEventListener("click", () => {
//     const state = Flip.getState(".gallery, .gallery-item, .galleryCaption");
//     gallery.classList.add("--width");
//     Flip.from(state, {
//         duration: 0.75,
//         stagger: {
//             from: "start",
//             axis: "x",
//             amount: 0.5,
//         },
//         ease: "power2.inOut",
//     });
// });

