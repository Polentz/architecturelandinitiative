const logoAnimation = () => {
    // ARCHITECTURE
    gsap.to("#A", {
        text: {
            value: "ARCHITECTURE",
            type: "diff",
        }
    });
    gsap.to("#A", {
        text: {
            value: "ARCHITECTUR",
            type: "diff",
        },
        delay: .45,
    });
    gsap.to("#A", {
        text: {
            value: "ARCHITECTU",
            type: "diff",
        },
        delay: .5,
    });
    gsap.to("#A", {
        text: {
            value: "ARCHITECT",
            type: "diff",
        },
        delay: .55,
    });
    gsap.to("#A", {
        text: {
            value: "ARCHITEC",
            type: "diff",
        },
        delay: .6,
    });
    gsap.to("#A", {
        text: {
            value: "ARCHITECTU",
            type: "diff",
        },
        delay: .65,
    });
    gsap.to("#A", {
        text: {
            value: "ARCHITE",
            type: "diff",
        },
        delay: .7,
    });
    gsap.to("#A", {
        text: {
            value: "ARCHIT",
            type: "diff",
        },
        delay: .75,
    });
    gsap.to("#A", {
        text: {
            value: "ARCHI",
            type: "diff",
        },
        delay: .8,
    });
    gsap.to("#A", {
        text: {
            value: "ARCH",
            type: "diff",
        },
        delay: .85,
    });
    gsap.to("#A", {
        text: {
            value: "ARC",
            type: "diff",
        },
        delay: .8,
    });
    gsap.to("#A", {
        text: {
            value: "AR",
            type: "diff",
        },
        delay: .95,
    });
    gsap.to("#A", {
        text: {
            value: "A",
            type: "diff",
        },
        delay: 1,
    });
    // LAND
    gsap.to("#L", {
        text: {
            value: "LAND",
            type: "diff",
        },
    });
    gsap.to("#L", {
        text: {
            value: "LAN",
            type: "diff",
        },
        delay: .5,
    });
    gsap.to("#L", {
        text: {
            value: "LA",
            type: "diff",
        },
        delay: .75,
    });
    gsap.to("#L", {
        text: {
            value: "AN",
            type: "diff",
        },
        delay: .9,
    });
    gsap.to("#L", {
        text: {
            value: "L",
            type: "diff",
        },
        delay: 1,
    });
    // INITIATIVE
    gsap.to("#IN", {
        text: {
            value: "INITIATIVE",
            type: "diff",
        },
    });
    gsap.to("#IN", {
        text: {
            value: "INITIATIV",
            type: "diff",
        },
        delay: .6,
    });
    gsap.to("#IN", {
        text: {
            value: "INITIAT",
            type: "diff",
        },
        delay: .65,
    });
    gsap.to("#IN", {
        text: {
            value: "INTIVE",
            type: "diff",
        },
        delay: .7,
    });
    gsap.to("#IN", {
        text: {
            value: "ITVE",
            type: "diff",
        },
        delay: .8,
    });
    gsap.to("#IN", {
        text: {
            value: "ININ",
            type: "diff",
        },
        delay: .9,
    });
    gsap.to("#IN", {
        text: {
            value: "IN",
            type: "diff",
        },
        delay: 1,
        x: 32,
    });

    // setTimeout(() => {
    //     document.getElementById("L").style.margin = "0 2rem";
    // }, 1000);
};

// window.addEventListener("load", () => {
//     setTimeout(() => {
//         logoAnimation();
//     }, 800);
// });

// logo.addEventListener("mouseenter", () => {
//     gsap.to("#A", {
//         text: "ARCHITECTURE",
//     });
//     gsap.to("#L", {
//         text: "LAND",
//     });
//     gsap.to("#IN", {
//         text: "INITIATIVE",
//     });
//     document.getElementById("L").style.margin = "0 0";
// });

// logo.addEventListener("mouseleave", () => {
//     logoAnimation();
// });