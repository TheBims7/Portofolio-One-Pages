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