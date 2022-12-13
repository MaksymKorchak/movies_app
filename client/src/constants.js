const GQL_SERVER_URL = "http://localhost:4000/graphql";
const MAX_SELECTED_MOVIES = 20;
const STORAGE_KEY = "locale";
const LOCALES = {
  ENGLISH: "en-us",
  UKRAINIAN: "uk",
};
const SORT_OPTIONS = [
  { label: "popularity", value: "popularity" },
  { label: "release_date", value: "release_date" },
  { label: "revenue", value: "revenue" },
  { label: "primary_release_date", value: "primary_release_date" },
  { label: "original_title", value: "original_title" },
  { label: "vote_average", value: "vote_average" },
  { label: "vote_count", value: "vote_count" },
];

const SORT_DIRECTION = {
  DESC: "desc",
  ASC: "asc",
};

export {
  GQL_SERVER_URL,
  MAX_SELECTED_MOVIES,
  LOCALES,
  STORAGE_KEY,
  SORT_OPTIONS,
  SORT_DIRECTION,
};
