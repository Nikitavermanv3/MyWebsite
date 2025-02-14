document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", toggleButton);
});

function toggleButton() {
    let hiddenDiv = document.getElementById("hidden");
    let button = document.getElementById("toggleButton");
    if (hiddenDiv.style.display === "none") {
        hiddenDiv.style.display = "flex";
        setTimeout(() => {
            hiddenDiv.style.maxHeight = hiddenDiv.scrollHeight + "px"; // Expand to full height
        }, 10);
        button.textContent = "LESS";
    } else {
        hiddenDiv.style.display = "none";
        setTimeout(() => {
            hiddenDiv.style.display = "none"; 
        }, 300);
        button.textContent = "MORE";
    }
}
