document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope");
    const openBtn = document.getElementById("openBtn");
    const resetBtn = document.getElementById("resetBtn");

    openBtn.addEventListener("click", function () {
        envelope.classList.add("open");
    });

    resetBtn.addEventListener("click", function () {
        envelope.classList.remove("open");
    });
});
