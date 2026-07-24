// ===============================
// Day 7 - Portfolio JavaScript
// ===============================

// Welcome Message
window.onload = function () {
    alert("👋 Welcome to Vinay Pardeshi's Portfolio!");
};

// ===============================
// Contact Button Scroll
// ===============================
const contactBtn = document.getElementById("contactBtn");

if (contactBtn) {
    contactBtn.addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// ===============================
// Active Navigation Link
// ===============================
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });
});

// ===============================
// Scroll To Top Button
// ===============================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop > 250) {
        if (topBtn) {
            topBtn.style.display = "block";
        }
    } else {
        if (topBtn) {
            topBtn.style.display = "none";
        }
    }

});

if (topBtn) {
    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

// ===============================
// Button Hover Animation
// ===============================
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.08)";
        this.style.transition = "0.3s";
    });

    button.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });

});

// ===============================
// Typing Effect
// ===============================
const title = document.querySelector(".hero h1");

if (title) {

    const text = title.innerText;
    title.innerText = "";

    let i = 0;

    function typing() {

        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 100);
        }

    }

    typing();
}

// ===============================
// Fade-in Animation on Scroll
// ===============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});