gsap.registerPlugin(TextPlugin)

const logoAnimation = () => {
    // ARCHITECTURE
    gsap.to("#A", {
        text: "ARCHITECTURE",
    });
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARCHITCTURE",
        });
    }, 200);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARHITCTURE",
        });
    }, 250);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARHTETURE",
        });
    }, 400);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARCITTRE",
        });
    }, 650);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARHTCUE",
        });
    }, 500);
    setTimeout(() => {
        gsap.to("#A", {
            text: "AHECTR",
        });
    }, 550);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARITE",
        });
    }, 600);
    setTimeout(() => {
        gsap.to("#A", {
            text: "TCUR",
        });
    }, 650);
    setTimeout(() => {
        gsap.to("#A", {
            text: "AUE",
        });
    }, 700);
    setTimeout(() => {
        gsap.to("#A", {
            text: "AR",
        });
    }, 750);
    setTimeout(() => {
        gsap.to("#A", {
            text: "A",
        });
    }, 800);
    // LAND
    gsap.to("#L", {
        text: "LAND",
        ease: "elastic",
    });
    setTimeout(() => {
        gsap.to("#L", {
            text: "LAN",
        });
    }, 300);
    setTimeout(() => {
        gsap.to("#L", {
            text: "LA",
        });
    }, 550);
    setTimeout(() => {
        gsap.to("#L", {
            text: "AN",
        });
    }, 700);
    setTimeout(() => {
        gsap.to("#L", {
            text: "L",
        });
    }, 800);
    // INITIATIVE
    gsap.to("#IN", {
        text: "INITIATIVE",
        ease: "elastic",
    });
    setTimeout(() => {
        gsap.to("#IN", {
            text: "INITIATI",
        });
    }, 400);
    setTimeout(() => {
        gsap.to("#IN", {
            text: "INTIVE",
        });
    }, 500);
    setTimeout(() => {
        gsap.to("#IN", {
            text: "ITVE",
        });
    }, 600);
    setTimeout(() => {
        gsap.to("#IN", {
            text: "ININ",
        });
    }, 700);
    setTimeout(() => {
        gsap.to("#IN", {
            text: "IN",
        });
    }, 800);

    setTimeout(() => {
        document.getElementById("L").style.margin = "0 2rem";
    }, 800);
};

window.addEventListener("load", () => {
    setTimeout(() => {
        logoAnimation();
    }, 1000);
});

logo.addEventListener("mouseenter", () => {
    gsap.to("#A", {
        text: "ARCHITECTURE",
    });
    gsap.to("#L", {
        text: "LAND",
    });
    gsap.to("#IN", {
        text: "INITIATIVE",
    });
    document.getElementById("L").style.margin = "0 0";
});

logo.addEventListener("mouseleave", () => {
    logoAnimation();
});

// gsap.registerPlugin(ScrollTrigger)

// let scrollSections = gsap.utils.toArray(".scroll-wrapper li");

// gsap.to(scrollSections, {
//     xPercent: -100 * (scrollSections.length - 1),
//     ease: "none",
//     ScrollTrigger: {
//         trigger: ".scroll-wrapper",
//         pin: true,
//         scrub: 1,
//         snap: 1 / (scrollSections.length - 1),
//         end: () => "+=" + document.querySelector(".scroll-wrapper").offsetWidth
//     }
// });

