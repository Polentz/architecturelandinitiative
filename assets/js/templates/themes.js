const animateTitleYAxis = () => {

    document.querySelectorAll(".item-title").forEach(title => {
        let content = title.dataset.name
        let cloneContent = content + " / " + content;
        const eachWord = cloneContent.match(/([\w-/]+)/g);
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
            yPercent: 100,
            stagger: 0.1,
        });
        tl.to(word, {
            clipPath: "none",
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

// gsap.utils.toArray(".item-title").forEach(title => {
//     let tl = gsap.timeline();
//     tl.from(title, {
//         xPercent: 0,
//     });
//     tl.to(title, {
//         xPercent: -100,
//         ease: "linear",
//         scrollTrigger: {
//             trigger: ".main",
//             start: "top top",
//             // end: "+=500",
//             end: "center center",
//             scrub: false,
//         },
//     });
// });


// document.querySelectorAll(".item-title").forEach(title => {
//     title.addEventListener("mouseenter", () => {
//         const letters = title.parentNode.querySelectorAll(".letter");
//         gsap.to(letters, {
//             duration: 0.1,
//             color: "var(--main-color)",
//             stagger: 0.01,
//         });
//     });
//     title.addEventListener("mouseleave", () => {
//         const letters = title.parentNode.querySelectorAll(".letter");
//         gsap.to(letters, {
//             duration: 0.1,
//             color: "var(--black)",
//             stagger: 0.01,
//         });
//     });
// });

window.addEventListener("load", () => {
    animateTitleYAxis();
});