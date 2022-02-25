const calcBtn = document.getElementById("#calc");
const calc = document.querySelector(".kalkylator");

calcBtn.addEventListener("click", () => {
    calc.classList.toggle("hidden");
    console.log("klickad");
});
