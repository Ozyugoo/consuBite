import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../authentication/context/CartContext.jsx";
import Modal from "./Modal.jsx";
import Input from "../../components/InputFields/Input";
import Button from "../../components/buttons/Button";
import Basket from "../../assets/basket.svg";
import Plus from "../../assets/plusSign.svg";
import Minus from "../../assets/minusSign.svg";
import Close from "../../assets/closeBtn.svg";
import rating from "/icons/rating.svg";
import meals from "../menu/meals.js";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext); // Use CartContext to add items to the cart
  const meal = location.state?.meal; // Retrieve the passed meal data

  const [count, setCount] = useState(1);
  // const [cartCount, setCartCount] = useState(1); // State to track items in cart
  const [selectedCompliments, setSelectedCompliments] = useState({});

  function increment() {
    return setCount(count + 1);
  }

  function decrement() {
    return setCount(count > 1 ? count - 1 : 1);
  }

  function toggleCompliment(complimentId, price) {
    setSelectedCompliments((prev) => ({
      ...prev,
      [complimentId]: !prev[complimentId] ? price : 0,
    }));
  }

  const totalComplimentPrice = Object.values(selectedCompliments).reduce(
    (acc, price) => acc + price,
    0
  );

  const totalPrice = meal.price * count + totalComplimentPrice;

  function handleAddToCart() {
    addToCart({
      ...meal,
      count,
      selectedCompliments,
      totalPrice,
    });

    // Log cart to ensure it's being added correctly
    console.log("Added to cart:", {
      ...meal,
      count,
      selectedCompliments,
      totalPrice,
    });
  }

  function togglePayment() {
    console.log("Cart before payment:", cart); // Log the cart to check items
    navigate("/checkout"); // No need to pass the cart state if it's available in context
  }

  return (
    <div className="text-base">
      {meal && (
        <Modal isOpen={true}>
          <img
            src={Close}
            onClick={() => window.history.back()}
            className="py-3 pr-5 cursor-pointer ml-auto"
          />
          <section>
            <img
              src={meal.photo}
              alt={meal.name}
              className="w-[250px] h-[200px] object-cover rounded-xl mx-auto mb-5"
            />
          </section>
          <section className="items-center justify-between">
            <p className="mb-4">
              <span className="flex justify-between font-semibold mb-4">
                {meal.name}
                <span className="flex">
                  <img src={rating} alt="Rating" />
                  {meal.rating}
                </span>
              </span>
              <span className="font-bold">NGN {meal.price * count}</span>
            </p>
            <span>{meal.description}</span>
          </section>
          {meal.compliments && (
            <section>
              <h4 className="font-bold my-3">Compliment with</h4>
              {meal.compliments.map((compliment) => (
                <div
                  key={compliment.id}
                  className="flex justify-between items-center mb-3"
                >
                  <div className="flex items-center">
                    <Input
                      type="checkbox"
                      id={`compliment-${compliment.id}`}
                      className="gap-[5px] h-[2.5rem] mr-5"
                      onChange={() =>
                        toggleCompliment(
                          compliment.id,
                          compliment.mealComplimentPrice
                        )
                      }
                    />
                    <img
                      src={compliment.mealComplimentPhoto}
                      alt={compliment.mealComplimentName}
                      className="w-[50px] h-[35px] object-cover hidden md:flex mr-5 rounded-full mt-2"
                    />
                    <p className="mt-3">{compliment.mealComplimentName}</p>
                  </div>
                  <div>
                    <p className="font-bold">
                      NGN {compliment.mealComplimentPrice}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          )}
          <div className="flex justify-center items-center cursor-pointer">
            <img src={Minus} onClick={decrement} />
            <span className="px-6">{count}</span>
            <img src={Plus} onClick={increment} />
          </div>
          <div className="flex flex-wrap justify-between items-center font-bold mb-4 mx-24 md:mx-0">
            <Button
              variant="secondary"
              className="flex justify-center items-center text-sm md:w-2/5 w-full"
              onClick={handleAddToCart} // Add to cart
            >
              <img src={Basket} className="mx-2" />
              <span className="font-bold">Add to Basket</span>
            </Button>
            <Button
              variant="primary"
              className="text-xs md:text-sm md:w-1/2 w-full mt-3"
              onClick={togglePayment}
            >
              Proceed to Pay | NGN <span>{totalPrice}</span>
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Details;

//   function renderCompliments() {
//     if (meal.compliments && meal.compliments.length > 0) {
//       return (
//         <section>
//           <h4 className="font-bold my-3">Compliment with</h4>
//           {meal.compliments.map((compliment) => (
//             <div
//               key={compliment.id}
//               className="flex justify-between items-center mb-3"
//             >
//               <div className="flex items-center">
//                 <Input
//                   type="checkbox"
//                   id={`compliment-${compliment.id}`}
//                   className="gap-[5px] h-[2.5rem] mr-5"
//                   onChange={() =>
//                     toggleCompliment(
//                       compliment.id,
//                       compliment.mealComplimentPrice
//                     )
//                   }
//                 />{" "}
//                 <img
//                   src={compliment.mealComplimentPhoto}
//                   alt={compliment.mealComplimentName}
//                   className="w-[50px] h-[35px] object-cover hidden md:flex mr-5 rounded-full mt-2"
//                 />
//                 <p className="mt-3">{compliment.mealComplimentName}</p>
//               </div>
//               <div>
//                 <p className="font-bold">
//                   NGN {compliment.mealComplimentPrice}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </section>
//       );
//     }
//     return null;
//   }

//   return (
//     <div className="text-base">
//       {meal && (
//         <Modal isOpen={true}>
//           <img
//             src={Close}
//             onClick={() => window.history.back()}
//             className="py-3 pr-5 cursor-pointer ml-auto"
//           />

//           <section>
//             <img
//               src={meal.photo}
//               alt={meal.name}
//               className="w-[250px] h-[200px] object-cover rounded-xl mx-auto mb-5"
//             />
//           </section>
//           <section className="items-center justify-between">
//             <p className="mb-4">
//               <span className="flex justify-between font-semibold mb-4">
//                 {meal.name}
//                 <span className="flex">
//                   <img src={rating} alt="Rating" />
//                   {meal.rating}
//                 </span>
//               </span>
//               <span className="font-bold">NGN {meal.price * count}</span>
//             </p>
//             <span>{meal.description}</span>
//           </section>
//           {renderCompliments()}
//           <div className="flex justify-center items-center cursor-pointer">
//             <img src={Minus} onClick={decrement} />
//             <span className="px-6">{count}</span>
//             <img src={Plus} onClick={increment} />
//           </div>
//           <div className="flex flex-wrap justify-between items-center font-bold mb-4 mx-24 md:mx-0">
//             <Button
//               variant="secondary"
//               className="flex justify-center items-center text-sm md:w-2/5 w-full "
//             >
//               <img src={Basket} className=" mx-2 " />
//               {/* {cartCount > 0 && (
//                 <span className="absolute z-50 top-4 right-32 md:right-28 transform translate-x-1 -translate-y-1 bg-custom-red text-custom-background-pink text-xs font-bold px-1 py-0 rounded-full">
//                   {count}
//                 </span>
//               )} */}
//               <span className="font-bold">Add to Basket</span>
//             </Button>
//             <Button
//               variant="primary"
//               className="text-xs md:text-sm md:w-1/2 w-full mt-3"
//               onClick={togglePayment}
//             >
//               Proceed to Pay | NGN <span>{totalPrice}</span>
//             </Button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default Details;
