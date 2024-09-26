import { useState } from "react";
import meals from "./meals";
import MealContainer from "./MealContainer";
import MealFilters from "./MealFilters";
import SearchBar from "../../components/searchBar/SearchBar";
import Button from "../../components/buttons/Button";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [filteredMeals, setFilteredMeals] = useState(meals);

  // Filter meals based on search and category
  const filteredMeals = meals.filter(
    (meal) =>
      (selectedCategory === "All" || meal.category === selectedCategory) &&
      (meal.name.toLowerCase().includes(search.toLowerCase()) ||
        meal.description.toLowerCase().includes(search.toLowerCase()))
  );
  //Handle category filter changes
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Reset both the search and the category filters
  function resetFilters() {
    setSearch("");
    setSelectedCategory("All");
  }

  return (
    <>
      <div className="bg-custom-light h-screen w-screen py-8 flex flex-col gap-8 items-center lg:px-20 md:px-20 px-6 font-poppins">
        <div className="text-[32px] font-bold">Menu</div>
        <SearchBar
          placeholder={"Search menu..."}
          search={search}
          setSearch={setSearch}
        />
        <MealFilters onCategoryChange={handleCategoryChange} />
        {filteredMeals.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-poppins">
            {filteredMeals.map((meals) => (
              <MealContainer mealObject={meals} key={meals.id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col h-50% items-center m-auto gap-4">
            <div className="text-2xl font-bold text-custom-black">
              Oops! No meals found
            </div>
            <p className="text-sm font-normal text-custom-grey">
              Try changing your search keywords or filter options.
            </p>
            <Button variant="primary" onClick={resetFilters}>
              Reset search
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;
