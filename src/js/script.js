
window.addEventListener("load", function() {
    alert("Welcome to my portfolio 🚀");
});


const changeBtn = document.getElementById("changeTextBtn");
const aboutText = document.getElementById("about-text");
const textChanged = document.getElementById("textChanged");

changeBtn.addEventListener("click", function() {
    if (aboutText.style.display === "block") {
        aboutText.style.display = "none";
        textChanged.style.display = "block";
        changeBtn.textContent = "Reset Text";
    } else {
        aboutText.style.display = "block";
        textChanged.style.display = "none";
        changeBtn.textContent = "Change Text";
    }
});


const toggleBtn = document.getElementById("toggleBtn");
const extraText = document.getElementById("extraText");

toggleBtn.addEventListener("click", function() {
    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        toggleBtn.textContent = "Hide";
    } else {
        extraText.style.display = "none";
        toggleBtn.textContent = "Show More";
    }
});