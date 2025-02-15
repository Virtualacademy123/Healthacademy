let progress = 40;
let language = "English";

function toggleLanguage() {
    language = language === "English" ? "Amharic" : "English";
    document.getElementById("language").textContent = language;
}

function increaseProgress() {
    if (progress < 100) {
        progress += 10;
        document.getElementById("progress").textContent = progress + "%";
        document.getElementById("progress-fill").style.width = progress + "%";
    }
}
