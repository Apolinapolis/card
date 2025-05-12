const originalTexts = {};

const translations = {
  // Навигация
  "nav.bookshelf": "Библиотека",
  "nav.works": "Проекты",
  "nav.mode": "Тема",

  // Заголовки страниц
  "bookshelf.title": "Годное чтиво",

  // Категории
  "bookshelf.dev": "Разработка",
  "bookshelf.personal": "Личная Эффективность",
  "bookshelf.psychology": "Психология и Эзотерика",
  "bookshelf.fiction": "Научпоп и Прочее",

  // Книги: Разработка
  "bookshelf.dev.1": '"JavaScript" — Эрик Фримен, Элизабет Робсон',
  "bookshelf.dev.2": '"Грокаем Алгоритмы" — Адитья Бхаргава',
  "bookshelf.dev.3": '"Python" — Эрик Мэтиз',
  "bookshelf.dev.4": '"Чистый код" — Роберт Мартин',
  "bookshelf.dev.5": '"Программист-фанатик" — Чад Фаулер',
  "bookshelf.dev.6": '"Тестирование ПО" — Канер, Фолк, Нгуен',
  "bookshelf.dev.7": '"Гид по Computer Science" — Вильям Спрингер',

  // Книги: Личная эффективность
  "bookshelf.personal.1": '"Законы победителей" — Бодо Шефер',
  "bookshelf.personal.2": '"Атомные привычки" — Джеймс Клир',
  "bookshelf.personal.3": '"Никогда-нибудь" — Елена Резанова',
  "bookshelf.personal.4": '"Как завоёвывать друзей..." — Дейл Карнеги',
  "bookshelf.personal.5": '"45 татуировок продавана" — М. Батырев',
  "bookshelf.personal.6": '"Богатый папа, бедный папа" — Р. Кийосаки',
  "bookshelf.personal.7": '"Работа, деньги и Любовь" — Наташа Грейс',

  // Книги: Психология и эзотерика
  "bookshelf.psychology.1": '"Путешествие души" — Майкл Ньютон',
  "bookshelf.psychology.2": '"Любовь, свобода, одиночество" — ОШО',
  "bookshelf.psychology.3": '"Учение Дона Хуана" — Карлос Кастанеда',
  "bookshelf.psychology.4": '"Нет Эго, нет проблем" — Крин Нибауэр',
  "bookshelf.psychology.5": '"Кармический менеджмент" — Майкл Роуч',
  "bookshelf.psychology.6": '"Путь настоящего мужчины" — Дэвид Дэйда',
  "bookshelf.psychology.7": '"Психологическое айкидо" — Михаил Литвак',

  // Книги: Fiction & Science
  "bookshelf.fiction.1": '"Краткая история времени" — Стивен Хокинг',
  "bookshelf.fiction.2": '"Очаровательный кишечник" — Джулия Эндерс',
  "bookshelf.fiction.3": '"Граф Монте-Кристо" — Александр Дюма',
  "bookshelf.fiction.4": '"Метод Мистери" — Эрик фон Марковик',
  "bookshelf.fiction.5": '"Sapiens" — Юваль Ной Харари',
  "bookshelf.fiction.6": '"Матадор" — Луис Ривера',
  "bookshelf.fiction.7": '"Источник" — Айн Рэнд',

  // Прочее
  "lang-toggle": "RU/en",
  'slogan': "Нечто не имеющее ничего неинтересного",
  "bookshelf.back-btn": "Назад",
};

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const isDarkTheme = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

function updateText(language) {
  if (language === "en") {
    document.querySelectorAll("[data-key]").forEach((item) => {
      const key = item.getAttribute("data-key");
      if (originalTexts[key]) {
        item.textContent = originalTexts[key];
      }
    });
    return;
  }

  document.querySelectorAll("[data-key]").forEach((item) => {
    const key = item.getAttribute("data-key");
    const translation = translations[key];

    if (translation !== undefined) {
      item.textContent = translation;
    } else {
      console.warn(`Translation not found for "${key}"`);
    }
  });

}

function toggleLanguage() {
  let currentLanguage = localStorage.getItem("language") || "en";
  const newLanguage = currentLanguage === "en" ? "ru" : "en";
  localStorage.setItem("language", newLanguage);
  document.documentElement.classList.remove("lang-en", "lang-ru");
  document.documentElement.classList.add(`lang-${newLanguage}`);
  updateText(newLanguage);
}

function disableDetailsOnDesktop() {
  document.querySelectorAll('summary').forEach(summary => {
      if (window.innerWidth > 768) {
          summary.style.pointerEvents = 'none';
      } else {
        summary.style.pointerEvents = 'auto';
      }
  });
}

// always open list on desktop
function syncDetailsWithScreenSize() {
  const detailsList = document.querySelectorAll('details');

  if (window.innerWidth > 768) {
      detailsList.forEach(details => {
          details.setAttribute('open', '');
      });
  } else {
      detailsList.forEach(details => {
          details.removeAttribute('open');
      });
  }
}

function initSingleOpenAccordion() {
  const detailsList = document.querySelectorAll("details");

  detailsList.forEach(details => {
      details.addEventListener("toggle", () => {
          if (details.open && window.innerWidth <= 768) {
              // Если этот блок открывается
              detailsList.forEach(other => {
                  if (other !== details) {
                      other.open = false;
                  }
              });
          }
      });
  });
}

//Create object for return to english language
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-key]").forEach((item) => {
    const key = item.getAttribute("data-key");
    originalTexts[key] = item.textContent;
  });
  
  updateText(savedLanguage);
  disableDetailsOnDesktop();
  syncDetailsWithScreenSize();
  initSingleOpenAccordion();
});

window.addEventListener("resize", () => {
  disableDetailsOnDesktop();
  syncDetailsWithScreenSize();
});