const themeToggleText = document.getElementById("theme-toggle");
const themeToggleIcon = document.getElementById("theme-toggle-icon");


function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    const isDarkTheme = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

if (themeToggleText) {
    themeToggleText.addEventListener("click", toggleTheme);
}

if (themeToggleIcon) {
    themeToggleIcon.addEventListener("click", toggleTheme);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
});