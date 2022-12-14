import { LOCALES } from "../../../constants";

export default {
  [LOCALES.ENGLISH]: {
    navigation: {
      home: "Movies recommendation",
      settings: {
        headline: "Settings",
        additional_text: "Here should be new future features. 🚀🚀🚀"
      },
    },
    selectedMovies_input_placeholder: "List name...",
    no_movies_selected: "No movies selected yet...",
    something_wrong: "Something went wrong ;( ...Please reload a page.",
    delete: "Delete",
    loading: "Loading...",
    required: "Required",
    filters: {
      sort_by: "Sort by",
      sort_direction: "Sort direction",
      include_adult: "Include adult",
      year: "Year",
      release_year: "Release year",
      genre: "Genre",
      submit: "Submit",
      reset: "Reset Filters",
      sort: {
        popularity: "Popularity",
        release_date: "Release date",
        revenue: "Revenue",
        primary_release_date: "Primary release date",
        original_title: "Original title",
        vote_average: "Vote average",
        vote_count: "Vote count",
      },
      sort_direction_options: {
        asc: "ASC",
        desc: "DESC",
      },
    },
  },
};
