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
      <img src="/icons/search-normal.svg" alt="search icon"></img>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder={placeholder}
        className="appearance-none bg-opacity-0 border border-custom-blackBorder rounded-[20px] px-4 text-sm font-poppins font-normal text-custom-black w-1/3 h-[44px] hover:border-custom-greyDark  focus:border-custom-black "
      />
    </>
  );
}

export default SearchBar;
