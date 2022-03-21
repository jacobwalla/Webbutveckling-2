let form = document.querySelector("form");
let tryAgain = document.querySelector(".result-box button")

form.addEventListener("submit", handleForm);
tryAgain.addEventListener("click", resetForm);

function handleForm(event) {
    let totalPoints = 0;
    console.log(event);
    event.preventDefault();
    let answers = document.querySelectorAll("input");
    answers.forEach((answer) => {
        if (answer.checked) {
            totalPoints += Number.parseInt(answer.getAttribute("data-points"));
        }
    });

    form.classList.toggle("hidden");

    if (totalPoints === 4) {
        resultHeading.innerHTML = "🎉Perfect score!🎉"
    } else if (totalPoints === 3) {
        resultHeading.innerHTML = "Very close"
    } else if (totalPoints === 2) {
        resultHeading.innerHTML = "Do better!"
    } else if (totalPoints === 1) {
        resultHeading.innerHTML = "Atleast one correct..."
    } else {
        resultHeading.innerHTML = "Come on..."
    }

    resultP.innerHTML = `You got ${totalPoints}/4 points correct!`;
}

function resetForm() {
    form.classList.toggle("hidden");
    form.reset();
}