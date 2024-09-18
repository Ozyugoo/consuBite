function SearchBar({ search, setSearch, placeholder, className, onSearch }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);
    if (onSearch) {
      onSearch(newValue);
    }
  };
  return (
    <>
      <div className="relative w-full sm:w-full md:w-1/2 lg:w-1/3  mx-auto">
        <img
          src="/icons/search-normal.svg"
          alt="search icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 "
        />

        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder={placeholder}
          className="appearance-none bg-custom-transparent border border-custom-blackBorder rounded-[20px] pl-12 pr-4 text-sm font-poppins font-normal text-custom-black w-full h-[44px] hover:border-custom-greyDark  focus:border-custom-black "
        />
      </div>
    </>
  );
}

export default SearchBar;
