// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
        darkModeToggle.innerHTML = `<i class="fas fa-moon"></i>`;
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Typing Animation for AI-Powered Text
const textElement = document.querySelector(".hero h1 span");
const phrases = ["AI-Powered Task Management", "Effortless Productivity", "Smart Planning & Scheduling"];
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 100;

function typeEffect() {
    if (charIndex < phrases[phraseIndex].length) {
        textElement.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        textElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);

    // Redirect to Dashboard on "Get Started" Click
    const startButton = document.querySelector(".btn-start");
    startButton.addEventListener("click", () => {
        window.location.href = "dashboard.html";
    });

    // Placeholder for Future Login & Signup Logic
    document.querySelector(".btn-login").addEventListener("click", () => {
        alert("Login feature coming soon!");
    });

    document.querySelector(".btn-signup").addEventListener("click", () => {
        alert("Sign-up feature coming soon!");
    });
});
