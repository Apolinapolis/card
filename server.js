const translations = {
    en: {
        nav: {
            bookshelf: "Bookshelf",
            works: "Works",
            mode: "Mode"
        },
        h2: "Efficiency-improving software",
        langToggle: "ru/EN",
    },
    ru: {
        nav: {
            bookshelf: "Библиотека",
            works: "Проекты",
            mode: "Тема"
        },
        h2: "Нечто не имеющее ничего неинтересного",
        langToggle: "RU/en",
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
    document.documentElement.classList.remove('lang-en', 'lang-ru');
    document.documentElement.classList.add(`lang-${newLanguage}`);
    updateText(newLanguage);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    document.documentElement.classList.add(`lang-${savedLanguage}`);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    updateText(savedLanguage);
});