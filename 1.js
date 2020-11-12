document.getElementById("hamburger").onclick = function() {open()};

function open() {
    document.getElementById("hamburger").classList.toggle("isactive");
    document.getElementById("mobile-menu").classList.toggle("show");
}
