// Локализация
const translations = {
    en: {
        nav: {
            bookshelf: "Bookshelf",
            works: "Works",
            mode: "Mode"
        },
        h2: "Efficiency-improving software",
        langToggle: "ru/EN"
    },
    ru: {
        nav: {
            bookshelf: "Книги",
            works: "Работы",
            mode: "Режим"
        },
        h2: "Нечто не имеющее ничего неинтересного",
        langToggle: "RU/en"
    }
};

//функция установки цветовой темы
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

// Функция подмены текста
function updateText(language) {
    document.querySelectorAll('[data-key]').forEach(item => {
        const key = item.getAttribute('data-key');
        if (translations[language].nav[key]) {
            item.textContent = translations[language].nav[key];
        }
    });

    document.querySelector('h2').textContent = translations[language].h2;
    document.querySelector('.lang-toggle').textContent = translations[language].langToggle;
}

//Функция переключения локализации
// function toggleLanguage() {
//     let currentLanguage = localStorage.getItem('language') || 'en';
//     const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
//     localStorage.setItem('language', newLanguage);
//     updateText(newLanguage);
// }

function toggleLanguage() {
    // Получаем текущий язык из localStorage или используем 'en' по умолчанию
    let currentLanguage = localStorage.getItem('language') || 'en';

    // Переключаем язык
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';

    // Сохраняем новый язык в localStorage
    localStorage.setItem('language', newLanguage);

    // Обновляем текст на странице
    updateText(newLanguage);

    // Обновляем класс для body
    document.body.classList.remove('lang-en', 'lang-ru'); // Удаляем старые классы
    document.body.classList.add(`lang-${newLanguage}`); // Добавляем новый класс
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    updateText(savedLanguage);
});