let menu = document.querySelector("#menu")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle("bx-menu-alt-left");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("bx-menu-alt-left");
    navbar.classList.remove("active");
}