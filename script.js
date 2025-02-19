//your JS code here. If required.

const circles = document.querySelectorAll(".circle");
const progressLine = document.querySelector(".progress-line");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

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

    // Update progress line width dynamically
    const progressPercentage = ((currentStep - 1) / (circles.length - 1)) * 100;
    progressLine.style.width = `${progressPercentage}%`;

    // Disable/Enable buttons accordingly
    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === circles.length;
}
