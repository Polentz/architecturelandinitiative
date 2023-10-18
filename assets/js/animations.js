gsap.registerPlugin(TextPlugin)
logo.addEventListener("mouseenter", () => {
    // ARCHITECTURE
    gsap.to("#A", {
        text: "R",
        ease: "elastic",
    });
    setTimeout(() => {
        gsap.to("#A", {
            text: "C",
            ease: "elastic",
        });
    }, 100);
    setTimeout(() => {
        gsap.to("#A", {
            text: "H",
            ease: "elastic",
        });
    }, 150);
    setTimeout(() => {
        gsap.to("#A", {
            text: "I",
            ease: "elastic",
        });
    }, 200);
    setTimeout(() => {
        gsap.to("#A", {
            text: "T",
            ease: "elastic",
        });
    }, 250);
    setTimeout(() => {
        gsap.to("#A", {
            text: "E",
            ease: "elastic",
        });
    }, 300);
    setTimeout(() => {
        gsap.to("#A", {
            text: "C",
            ease: "elastic",
        });
    }, 350);
    setTimeout(() => {
        gsap.to("#A", {
            text: "T",
            ease: "elastic",
        });
    }, 400);
    setTimeout(() => {
        gsap.to("#A", {
            text: "U",
            ease: "elastic",
        });
    }, 450);
    setTimeout(() => {
        gsap.to("#A", {
            text: "R",
            ease: "elastic",
        });
    }, 500);
    setTimeout(() => {
        gsap.to("#A", {
            text: "E",
            ease: "elastic",
        });
    }, 550);
    setTimeout(() => {
        gsap.to("#A", {
            text: "A",
            ease: "elastic",
        });
    }, 600);
    // LAND
    gsap.to("#L", {
        text: "A",
        ease: "elastic",
    });
    setTimeout(() => {
        gsap.to("#L", {
            text: "A",
            ease: "elastic",
        });
    }, 100);
    setTimeout(() => {
        gsap.to("#L", {
            text: "N",
            ease: "elastic",
        });
    }, 250);
    setTimeout(() => {
        gsap.to("#L", {
            text: "D",
            ease: "elastic",
        });
    }, 500);
    setTimeout(() => {
        gsap.to("#L", {
            text: "L",
            ease: "elastic",
        });
    }, 600);
    // INITIATIVE
    gsap.to("#I", {
        text: "I",
        ease: "elastic",
    });
    gsap.to("#N", {
        text: "T",
        ease: "elastic",
    });
    setTimeout(() => {
        gsap.to("#I", {
            text: "I",
            ease: "elastic",
        });
        gsap.to("#N", {
            text: "A",
            ease: "elastic",
        });
    }, 200);
    setTimeout(() => {
        gsap.to("#I", {
            text: "T",
            ease: "elastic",
        });
        gsap.to("#N", {
            text: "I",
            ease: "elastic",
        });
    }, 300);
    setTimeout(() => {
        gsap.to("#I", {
            text: "I",
            ease: "elastic",
        });
        gsap.to("#N", {
            text: "V",
            ease: "elastic",
        });
    }, 400);
    setTimeout(() => {
        gsap.to("#I", {
            text: "V",
            ease: "elastic",
        });
        gsap.to("#N", {
            text: "E",
            ease: "elastic",
        });
    }, 500);
    setTimeout(() => {
        gsap.to("#I", {
            text: "I",
            ease: "elastic",
        });
        gsap.to("#N", {
            text: "N",
            ease: "elastic",
        });
    }, 600);
});

logo.addEventListener("mouseleave", () => {
    gsap.to("#A", {
        text: "A",
        ease: "elastic",
    });
    gsap.to("#L", {
        text: "L",
        ease: "elastic",
    });
    gsap.to("#I", {
        text: "I",
        ease: "elastic",
    });
    gsap.to("#N", {
        text: "N",
        ease: "elastic",
    });
});


