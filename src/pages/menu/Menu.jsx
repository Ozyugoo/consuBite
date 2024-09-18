import { useState } from "react";
import meals from "./meals";
import MealContainer from "./MealContainer";
import MealFilters from "./MealFilters";
import SearchBar from "../../components/searchBar/SearchBar";

function Menu() {
  const [filteredMeals, setFilteredMeals] = useState(meals);

  function handleCategoryChange(category) {
    if (category === "All") {
      setFilteredMeals(meals);
    } else {
      setFilteredMeals(meals.filter((meal) => meal.category === category));
    }
  }
  return (
    <>
      <div className="bg-custom-light h-full w-screen py-8 flex flex-col gap-8 items-center lg:px-20 md:px-20 px-6">
        <div className="text-[32px] font-bold">Menu</div>
        <SearchBar placeholder={"Search menu..."} />
        <MealFilters onCategoryChange={handleCategoryChange} />
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-poppins">
          {filteredMeals.map((meals) => (
            <MealContainer mealObject={meals} key={meals.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
