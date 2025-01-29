const restart = document.getElementById("restart");
const close = document.getElementById("close");
const modal = document.querySelector(".background");

function validation() {
    const name = document.querySelector(".name");
    const password = document.querySelector(".password");
    const submit = document.querySelector(".submit");

    submit.addEventListener("click", (e) => {
        if (name.value === "ekaterina" && password.value === "pookie") {
            modal.style.display = "none";
            localStorage.removeItem("dailyMessage");
            localStorage.removeItem('savedTime');
            Restart();

            setTimeout(function () {
                Open();
            }, 1200);
        }
        else {
            alert("Invalid credentials.");
        }
    });
}
validation();

restart.addEventListener("click", (e) => {
    modal.style.display = "flex";
});

close.addEventListener("click", (e) => {
    modal.style.display = "none";
});
