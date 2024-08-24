import meals from "./meals";
import MealContainer from "./MealContainer";

function Menu() {
  return (
    <>
      <div className="bg-custom-light h-full w-full px-20 py-8 flex flex-col gap-8 items-center">
        <div className="text-[32px] font-bold">Menu</div>
        <div className="grid grid-cols-4 gap-5 font-poppins">
          {meals.map((meals) => (
            <MealContainer mealObject={meals} key={meals.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
