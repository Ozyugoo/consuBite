import Button from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";

function MealContainer({ mealObject }) {
   const navigate = useNavigate();

   function addToOrder() {
    navigate("/details", { state: { meal: mealObject } });
   }
  return (
    <>
      <div className="flex flex-col bg-custom-white rounded-2xl">
        <img
          src={mealObject.photo}
          className="rounded-t-2xl h-[208px] object-cover"
        />
        <div className="flex flex-col gap-3 p-4">
          <div className="flex flex-col gap-1">
            <div className="text-sm font-semibold">{mealObject.name}</div>
            <div className="flex flex-row gap-1 items-center">
              <img src="icons/rating.svg" />
              <div className="text-xs font-medium">{mealObject.rating}</div>
            </div>
          </div>
          <div className="text-xs h-9 text-custom-greyDark">
            {mealObject.description}
          </div>
          <div className="flex flex-row place-content-between items-center">
            <div className="text-sm font-bold">NGN {mealObject.price}</div>

            <Button
              variant="secondary"
              className="py-2 text-xs"
              onClick={addToOrder}
            >
              Add to Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealContainer;
