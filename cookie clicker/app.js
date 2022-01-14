let clicked = 0;
let boughtSpade = false;
let boughtGravskopa = false;
let boughtLaser = false;
let boughtNuke = false;
let boughtCPS = false;
let clickPower = 1;
const clickerButton = document.querySelector(".clicker");
const textField = document.querySelector(".clickcount");
const spade = document.querySelector(".spade");
const gravskopa = document.querySelector(".gravskopa");
const laser = document.querySelector(".laser");
const nuke = document.querySelector(".atombomb");
const cps = document.querySelector(".cps");

clickerButton.addEventListener("click", () => {
    clicked = clicked + clickPower;
    textField.innerHTML = clicked;
});

spade.addEventListener("click", () => {
    if (clicked >= 50 && boughtSpade === false) {
        boughtSpade = true;
        clickPower = 3;
        clicked -= 50;
        textField.innerHTML = clicked;
    }
})

gravskopa.addEventListener("click", () => {
    if (clicked >= 100 && boughtGravskopa === false) {
        boughtGravskopa = true;
        clickPower = 20;
        clicked -= 100;
        textField.innerHTML = clicked;
    }
})

laser.addEventListener("click", () => {
    if (clicked >= 1000 && boughtLaser === false) {
        boughtLaser = true;
        clickPower = 10000;
        clicked -= 1000;
        textField.innerHTML = clicked;
    }
})

nuke.addEventListener("click", () => {
    if (clicked >= 200000 && boughtNuke === false) {
        boughtNuke = true;
        clicked += 800000;
        textField.innerHTML = clicked;
    }
})

cps.addEventListener("click", () => {
    if (clicked >= 100000 && boughtCPS === false) {
        boughtCPS = true;
        clicked -= 100000;
        textField.innerHTML = clicked;
    }
})
setInterval(() => {
    if (boughtCPS === true) {
        clicked++
        textField.innerHTML = clicked;
    }
}, 10);



