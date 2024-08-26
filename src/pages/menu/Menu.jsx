import { useState } from "react";
import meals from "./meals";
import MealContainer from "./MealContainer";
import MealFilters from "./MealFilters";

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
      <div className="bg-custom-light h-full w-full px-20 py-8 flex flex-col gap-8 items-center">
        <div className="text-[32px] font-bold">Menu</div>
        <MealFilters onCategoryChange={handleCategoryChange} />
        <div className="grid grid-cols-4 gap-5 font-poppins">
          {filteredMeals.map((meals) => (
            <MealContainer mealObject={meals} key={meals.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
