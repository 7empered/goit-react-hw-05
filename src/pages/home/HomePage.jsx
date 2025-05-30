import style from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { fetchMoviesPerDay } from "../../api/api.js";
import MovieList from "../../components/movielist/MovieList";

const HomePage = () => {
  const [collection, setCollction] = useState([]);

  useEffect(() => {
    async function fetchDataMovies() {
      try {
        const res = await fetchMoviesPerDay();
        setCollction((prevFilms) => [...prevFilms, ...res.data.results]);
      } catch (error) {
        console.log(" error", error);
      }
    }
    fetchDataMovies();
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.title}>Trending Today</h2>
      {collection.length > 0 && <MovieList collection={collection} />}
    </div>
  );
};

export default HomePage;