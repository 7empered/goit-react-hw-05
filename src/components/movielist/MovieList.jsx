import { Link, useLocation } from "react-router-dom";
import style from "./MovieList.module.css";

const MovieList = ({ collection }) => {
  const location = useLocation();
  const uniqueMovies = Array.from(
    new Map(collection.map(movie => [movie.title, movie])).values()
  );

  return (
    <ul className={style.content}>
      {uniqueMovies.map(({ id, title }) => (
        <li className={style.item} key={id}>
          <Link to={`/movies/${id}`} className={style.link} state={location}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
