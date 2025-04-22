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

// document.querySelectorAll('.nav-item', '.telegram-logo').forEach(item => {
//     let timeoutId = null;

//     item.addEventListener('touchstart', (event) => {
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }
//         item.classList.add('active');
//     });

//     item.addEventListener('touchend', () => {
//         timeoutId = setTimeout(() => {
//             item.classList.remove('active');
//         }, 1000);
//     });
// });


// Функция для проверки поддержки hover
function isHoverUnsupported() {
    return window.matchMedia('(hover: none)').matches;
}

// Добавляем класс в <body>, если hover не поддерживается
if (isHoverUnsupported()) {
    document.body.classList.add('no-hover');
}

// Логика для устройств без поддержки hover
if (document.body.classList.contains('no-hover')) {
    document.querySelectorAll('.nav-item, .telegram-logo').forEach(item => {
        let timeoutId = null;

        // При касании или клике добавляем класс active
        item.addEventListener('click', () => {
            if (timeoutId) {
                clearTimeout(timeoutId); // Очищаем предыдущий таймер
            }
            item.classList.add('active');

            // Удаляем класс active через 1 секунду
            timeoutId = setTimeout(() => {
                item.classList.remove('active');
            }, 1000);
        });
    });
}