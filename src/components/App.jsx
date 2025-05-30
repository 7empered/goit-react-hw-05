import "modern-normalize";
import style from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const MoviesPage = lazy(() => import("../pages/movies/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/moviedetails/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../components/moviecast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../components/moviereviews/MovieReviews")
);
const NotFound = lazy(() => import("../pages/notfound/NotFound"));

import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <div className={style.container}>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}