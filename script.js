function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

// DARK NODE

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

// type effect

var typingEffect  = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed:80,
    backDelay: 2000,

})

// Scroll Animation

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
})

sr.reveal(".featured-name", { delay: 100});
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });


sr.reveal(".project-box", { interval: 200});
sr.reveal(".project-detail-card", { interval: 100});
sr.reveal(".certificate-card", { interval: 100});
sr.reveal(".location-container", { delay: 200});
sr.reveal(".map-card", { delay: 200});

sr.reveal(".top-header", {});


const srleft = ScrollReveal({
    origin: "left",
    distance: "80px",
    durationn: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delayy: 100});
srLeft.reveal(".contact-info", { delayy: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    durationn: 2000,
    reset: true,
})

srRight.reveal(".skill", { delayy: 100});
srRight.reveal(".skill-box", { delayy: 100});

// active link

const sections = document.querySelectorAll(".section[id)");

function scrollActive() {
    const scrollY = window.scrollY;
    
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}


window.addEventListener("scroll", scrollActive);


