document.getElementById("hamburger").onclick = function() {open()};

function open() {
    document.getElementById("stripe1").classList.toggle("isactive");
    document.getElementById("stripe2").classList.toggle("isactive");
    document.getElementById("stripe3").classList.toggle("isactive");
    document.getElementById("mobile-menu").classList.toggle("show");
}