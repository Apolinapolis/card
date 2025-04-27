// // Локализация
// const translations = {
//     en: {
//         nav: {
//             bookshelf: "Bookshelf",
//             works: "Works",
//             mode: "Mode"
//         },
//         h2: "Efficiency-improving software",
//         langToggle: "ru/EN",
//         fiction: "Fiction",
//         "non-fiction": "Non-Fiction",
//     },
//     ru: {
//         nav: {
//             bookshelf: "Библиотека",
//             works: "Проекты",
//             mode: "Тема"
//         },
//         h2: "Нечто не имеющее ничего неинтересного",
//         langToggle: "RU/en",
//         fiction: "Художественная литература",
//         "non-fiction": "Научная литература",
//     }
// };

// //функция установки цветовой темы
// function toggleTheme() {
//     document.body.classList.toggle("dark-theme");
//     const isDarkTheme = document.body.classList.contains("dark-theme");
//     localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
// }

// // Функция подмены текста
// function updateText(language) {
//     document.querySelectorAll('[data-key]').forEach(item => {
//         const key = item.getAttribute('data-key');
//         const link = item.querySelector('a');
//         if (link) {
//             link.textContent = translations[language].nav[key];
//         } else {
//             item.textContent = translations[language].nav[key];
//         }
//     });

//     document.querySelector('h2').textContent = translations[language].h2;
//     document.querySelector('.lang-toggle').textContent = translations[language].langToggle;
// }

// //Функция переключения локализации
// function toggleLanguage() {
//     let currentLanguage = localStorage.getItem('language') || 'en';
//     const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
//     localStorage.setItem('language', newLanguage);
//     updateText(newLanguage);
//     document.body.classList.remove('lang-en', 'lang-ru');
//     document.body.classList.add(`lang-${newLanguage}`);
// }

// // Инициализация при загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
//     const savedLanguage = localStorage.getItem('language') || 'en';
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "dark") {
//         document.body.classList.add("dark-theme");
//     }

//     updateText(savedLanguage);
// });

// Локализация
const translations = {
    en: {
        nav: {
            bookshelf: "Bookshelf",
            works: "Works",
            mode: "Mode"
        },
        h2: "Efficiency-improving software",
        langToggle: "ru/EN",
        fiction: "Fiction",
        "non-fiction": "Non-Fiction",
    },
    ru: {
        nav: {
            bookshelf: "Библиотека",
            works: "Проекты",
            mode: "Тема"
        },
        h2: "Нечто не имеющее ничего неинтересного",
        langToggle: "RU/en",
        fiction: "Художественная литература",
        "non-fiction": "Научная литература",
    }
};

// Функция установки цветовой темы
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

// Функция подмены текста
function updateText(language) {
    document.querySelectorAll('[data-key]').forEach(item => {
        const key = item.getAttribute('data-key');
        const link = item.querySelector('a');
        if (link) {
            link.textContent = translations[language].nav[key];
        } else {
            item.textContent = translations[language].nav[key];
        }
    });

    document.querySelector('h2').textContent = translations[language].h2;
    document.querySelector('.lang-toggle').textContent = translations[language].langToggle;
}

// Функция переключения локализации
function toggleLanguage() {
    let currentLanguage = localStorage.getItem('language') || 'en';
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    localStorage.setItem('language', newLanguage);

    // Удаляем старые классы языка
    document.documentElement.classList.remove('lang-en', 'lang-ru');
    // Добавляем новый класс языка
    document.documentElement.classList.add(`lang-${newLanguage}`);

    // Обновляем текст на странице
    updateText(newLanguage);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Получаем сохранённый язык из localStorage
    const savedLanguage = localStorage.getItem('language') || 'en';

    // Применяем класс языка к <html>
    document.documentElement.classList.add(`lang-${savedLanguage}`);

    // Получаем сохранённую тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Обновляем текст на странице
    updateText(savedLanguage);

    // Дожидаемся загрузки шрифтов
    document.fonts.ready.then(() => {
        console.log("Шрифты успешно загружены");
    });
});