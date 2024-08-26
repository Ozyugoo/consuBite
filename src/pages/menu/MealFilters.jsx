import { useState } from "react";

const categories = [
  "All",
  "Pasta",
  "Rice",
  "Swallow",
  "Soups",
  "Grills",
  "Protein",
  "Snacks",
  "Drinks",
  "Side dishes",
  "Others",
];

function MealFilters({ onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState("All");

  function handleCategoryClick(category) {
    setActiveCategory(category);
    onCategoryChange(category);
  }

  return (
    <div className="w-full overflow-x-scroll scroll-p-2 lg:px-20 md:px-20 sm:px-4 ">
      <div className="flex flex-row gap-3 whitespace-nowrap lg:justify-center md:justify-start sm:justify-start py-4">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={` bg-custom-white drop-shadow-sm px-6 py-1.5 rounded-2xl text-sm font-normal text-custom-greyDark cursor-pointer ${
              activeCategory === category
                ? "bg-secondary-focus text-custom-red border border-custom-red"
                : ""
            }`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealFilters;
