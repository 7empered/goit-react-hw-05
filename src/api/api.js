import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMoviesPerDay = async () => {
  const fethMoviesFavoriteDay = axios.get("/trending/movie/day", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return fethMoviesFavoriteDay;
};

export const fetchMovies = async (value) => {
  const fetchMoviesSearch = axios.get("/search/movie", {
    params: {
      query: value,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  console.log(" fetchMoviesSearch", fetchMoviesSearch.data);
  return fetchMoviesSearch;
};

export const fetchMovieById = async (movieId) => {
  const fetchMovie = axios.get(`/movie/${movieId}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return fetchMovie;
};
export const fetchCreditsForMovie = async (movieId) => {
  const fetchMovie = axios.get(`/movie/${movieId}?append_to_response=credits`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return fetchMovie;
};
export const fetchImgMoviePath = async () => {
  const fetchImgMovie = axios.get("/configuration", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return fetchImgMovie;
};
export const fetchReviewsForMovie = async (movieId) => {
  const fetchImgMovie = axios.get(
    `/movie/${movieId}?append_to_response=reviews`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  return fetchImgMovie;
};