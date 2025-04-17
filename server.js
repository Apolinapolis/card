const themeToggle = document.getElementById("theme-toggle");


themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
});

// При загрузке страницы проверяем сохраненную тему
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
});