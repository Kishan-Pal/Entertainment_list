import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul class="flex flex-row *:p-2 bg-[#1a2077] *:text-[#fff]">
        <Link to="/anime" class="hover:bg-[#ff8383c4]">
          Anime
        </Link>
        <Link to="/movies" class="hover:bg-[#ff8383c4]">
          Movies
        </Link>
        <Link to="/web-series" class="hover:bg-[#ff8383c4]">
          Web series
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
