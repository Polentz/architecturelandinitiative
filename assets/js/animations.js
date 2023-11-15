gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(Flip);

const logoAnimation = () => {
    // ARCHITECTURE
    gsap.to("#A", {
        text: "ARCHITECTURE",
    });
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARCHITECTUR",
        });
    }, 400);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARCHITECTU",
        });
    }, 650);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARCHITECT",
        });
    }, 600);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARCHITEC",
        });
    }, 850);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARCHITE",
        });
    }, 700);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARCHIT",
        });
    }, 750);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARCHI",
        });
    }, 800);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARCH",
        });
    }, 850);
    setTimeout(() => {
        gsap.to("#A", {
            text: "ARC",
        });
    }, 900);
    setTimeout(() => {
        gsap.to("#A", {
            text: "AR",
        });
    }, 950);
    setTimeout(() => {
        gsap.to("#A", {
            text: "A",
        });
    }, 1000);
    // LAND
    gsap.to("#L", {
        text: "LAND",
        ease: "elastic",
    });
    setTimeout(() => {
        gsap.to("#L", {
            text: "LAN",
        });
    }, 500);
    setTimeout(() => {
        gsap.to("#L", {
            text: "LA",
        });
    }, 750);
    setTimeout(() => {
        gsap.to("#L", {
            text: "AN",
        });
    }, 900);
    setTimeout(() => {
        gsap.to("#L", {
            text: "L",
        });
    }, 1000);
    // INITIATIVE
    gsap.to("#IN", {
        text: "INITIATIVE",
        ease: "elastic",
    });
    setTimeout(() => {
        gsap.to("#IN", {
            text: "INITIATI",
        });
    }, 600);
    setTimeout(() => {
        gsap.to("#IN", {
            text: "INTIVE",
        });
    }, 700);
    setTimeout(() => {
        gsap.to("#IN", {
            text: "ITVE",
        });
    }, 800);
    setTimeout(() => {
        gsap.to("#IN", {
            text: "ININ",
        });
    }, 900);
    setTimeout(() => {
        gsap.to("#IN", {
            text: "IN",
        });
    }, 1000);

    setTimeout(() => {
        document.getElementById("L").style.margin = "0 2rem";
    }, 1000);
};

gsap.registerPlugin(Flip);






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