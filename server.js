const themeToggleText = document.getElementById("theme-toggle");
const themeToggleIcon = document.getElementById("theme-icon");


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

document.querySelectorAll('.nav-item').forEach(item => {
    let timeoutId = null;


    item.addEventListener('touchstart', (event) => {
        event.preventDefault();
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        item.classList.add('active');
    });

    item.addEventListener('touchend', () => {
        timeoutId = setTimeout(() => {
            item.classList.remove('active');
        }, 1000);
    });
});