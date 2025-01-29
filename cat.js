const cat = document.querySelector(".cat-container");
const envelopeContainer = document.querySelector(".container");
const timer = document.querySelector(".timer");

const STORAGE_KEY = "catLastShown";
const lastShown = localStorage.getItem(STORAGE_KEY);
const now = new Date();
const lastShownDate = lastShown ? new Date(lastShown) : null;

const shouldShowCat =
    !lastShownDate ||
    now.toDateString() !== lastShownDate.toDateString();

if (window.window > 800) {
    if (shouldShowCat) {
        setTimeout(() => {
            cat.classList.add("active-cat");
            envelopeContainer.classList.add("hidden");
            timer.classList.add("hidden");

            setTimeout(() => {
                cat.classList.remove("active-cat");
                envelopeContainer.classList.remove("hidden");
                timer.classList.remove("hidden");

                localStorage.setItem(STORAGE_KEY, now.toISOString());
            }, 7000);
        }, 1000);
    }
}
else {
    if (shouldShowCat) {
        setTimeout(() => {
            cat.style.display = "block";
            envelopeContainer.classList.add("hidden");
            timer.classList.add("hidden");

            setTimeout(() => {
                cat.style.display = "none";
                envelopeContainer.classList.remove("hidden");
                timer.classList.remove("hidden");

                localStorage.setItem(STORAGE_KEY, now.toISOString());
            }, 7000);
        }, 1000);
    }

}