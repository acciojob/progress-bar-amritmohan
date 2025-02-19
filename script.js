//your JS code here. If required.

document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    const progressLine = document.querySelector(".progress-line");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    if (!nextBtn || !prevBtn || !progressLine || circles.length === 0) {
        console.error("Some elements are missing from the DOM.");
        return;
    }

    let currentStep = 1;

    nextBtn.addEventListener("click", () => {
        if (currentStep < circles.length) {
            currentStep++;
            updateProgress();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentStep > 1) {
            currentStep--;
            updateProgress();
        }
    });

    function updateProgress() {
        circles.forEach((circle, index) => {
            if (index < currentStep) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });

        const progressPercentage = ((currentStep - 1) / (circles.length - 1)) * 100;
        progressLine.style.width = `${progressPercentage}%`;

        prevBtn.disabled = currentStep === 1;
        nextBtn.disabled = currentStep === circles.length;
    }
});
