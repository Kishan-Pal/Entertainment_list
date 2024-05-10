const SearchBar = () => {
  return (
    <form className=" bg-[#1a2077]">
      <input
        type="text"
        id="search"
        className="border-2 focus:h-10 focus:text-xl pl-2 ml-2 mt-2"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBar;
