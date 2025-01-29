document.addEventListener('DOMContentLoaded', function () {
    if (timerElement.textContent !== "00:00:00") {
        displayMessage();
        Open();
    }
});

function displayMessage() {
    setRandomMessage();
}

const container = document.querySelector('.lid');
const card = document.querySelector(".card");
const btn = document.querySelector(".button");
const btnText = document.querySelector(".btn-text");

btn.addEventListener("click", function () {
    if (btnText.innerText === "Restart") {
        if (timerElement.textContent === "00:00:00") {
            Restart();
        } else {
            alert("Give some time to take another one.");
        }
    } else {
        Open();
    }
});

function Open() {
    container.classList.add("open");
    container.classList.remove("close");

    setTimeout(function () {
        card.classList.add("slide");
        card.classList.remove("slide-close");
    }, 200);

    btnText.innerText = "Restart";
    startTimer();
}

function Restart() {
    card.classList.remove("slide");

    setTimeout(function () {
        container.classList.add("close");
        container.classList.remove("open");
    }, 200);

    btnText.innerText = "Click here";
    setRandomMessage();
}
