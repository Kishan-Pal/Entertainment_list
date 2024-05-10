import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul class="flex flex-row">
        <Link to="/anime" class="p-2">
          Anime
        </Link>
        <Link to="/movies" class="p-2">
          Movies
        </Link>
        <Link to="/web-series" class="p-2">
          Web series
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
