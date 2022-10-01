// Cambio de color del navbar
const navbar = document.getElementById("navbar-fixed");
window.onscroll = function funcionNav() {
    if (document.documentElement.scrollTop >= 210) {
        navbar.classList.add("bg-opacity-100");
        navbar.classList.remove("bg-opacity-10");
    }
    else {
        navbar.classList.add("bg-opacity-10");
        navbar.classList.remove("bg-opacity-100");
    }
};

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})