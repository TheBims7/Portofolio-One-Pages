const header = document.querySelector("header");
const checkbox = document.getElementById("nav-button");
const ul = document.querySelector("ul");

window.addEventListener("scroll", function () {
    if (!checkbox.checked) {
        if (window.scrollY > 50) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    }
});

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        header.classList.remove("active");
    } else {
        // balik ke kondisi scroll
        if (window.scrollY > 50) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    }
});

ul.addEventListener("click", function () {
    checkbox.checked = false;

    // balik ke kondisi scroll
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

const sections = document.querySelectorAll("section, .service");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const words = ["Fariz Bima Prayoga "];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    const target = document.getElementById("typing");

    if (i < words.length) {
        currentWord = words[i];
        if (!isDeleting && j <= currentWord.length) {
            target.textContent = currentWord.substring(0, j);
            j++;
        } else if (isDeleting && j >= 0) {
            target.textContent = currentWord.substring(0, j);
            j--;
        }

        if (j === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause after typing
            return;
        }

        if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, isDeleting ? 200 : 200);
}


document.addEventListener("DOMContentLoaded", type);
