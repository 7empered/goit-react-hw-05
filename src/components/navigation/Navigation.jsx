import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";

const getActiveClassLink = ({ isActive }) => {
  return clsx(style.link, isActive && style.isActive);
};

const Navigation = () => {
  return (
    <div className={style.blokNav}>
      <NavLink to="/" className={getActiveClassLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getActiveClassLink}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;