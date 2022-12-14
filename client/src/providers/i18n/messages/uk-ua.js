import { LOCALES } from "../../../constants";

export default {
  [LOCALES.UKRAINIAN]: {
    navigation: {
      home: "Рекомендації для перегляду",
      settings: {
        headline: "Налаштування",
        additional_text: "Тут має бути новий функціонал 🚀🚀🚀"
      },
    },
    selectedMovies_input_placeholder: "Ім'я списку ...",
    no_movies_selected: "Ще немає обраних фільмів...",
    something_wrong:
      "Щось пішло не так ;( ...Будь ласка перезавантажте сторінку.",
    delete: "Видалити",
    loading: "Завантаження...",
    required: "Обов'язкове поле",
    filters: {
      sort_by: "Сортувати по",
      sort_direction: "Напрямок",
      include_adult: "Включно 18+",
      year: "Рік",
      release_year: "Рік випуску",
      genre: "Жанр",
      submit: "Пошук",
      reset: "Скинути фільтри",
      sort: {
        popularity: "Популярність",
        release_date: "Дата випуску",
        revenue: "Дохід",
        primary_release_date: "Першочергова дата релізу",
        original_title: "Оригінальна назва",
        vote_average: "Середня оцінка",
        vote_count: "Кількість оцінок",
      },
      sort_direction_options: {
        asc: "ASC",
        desc: "DESC",
      },
    },
  },
};
