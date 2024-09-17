import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  CartContext,
  CartProvider,
} from "../authentication/context/CartContext.jsx";
import Button from "../../components/buttons/Button";
import Icons from "/icons/arrow-left.svg";
import Input from "../../components/InputFields/Input";
import State from "../details/State.jsx";
import Flag from "../../assets/emojione_flag-for-nigeria.svg";

function Checkout() {
  const { cart } = useContext(CartContext); // Get the cart from CartContext

  useEffect(() => {
    console.log("Cart in checkout:", cart); // Log cart to ensure it's being populated
  }, [cart]);

  const totalCartItems = cart.length;
  const [cartCount, setCartCount] = useState(cart.length); // Set initial cart count based on the number of items in the cart
  const location = useLocation();
  const meal = location.state?.meal;

  // Function to calculate the total price of all items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div className="bg-custom-greyLight px-10">
      <Button className="flex" onClick={() => window.history.back()}>
        <img src={Icons} alt="Arrow Icon" />
        <span>&nbsp; &nbsp; Back</span>
      </Button>
      <h2 className="font-bold text-6xl text-center">Checkout</h2>
      <div className="md:mx-auto md:w-4/5">
        <div className="flex justify-center items-center">
          <img src="" alt="" />
          <span></span>
          <hr />
          <img src="" alt="" />
          <span></span>
          <hr />
          <img src="" alt="" />
          <span></span>
          <hr />
        </div>
        <div className="md:flex flex-wrap justify-between items-center">
          <div className="mb-6">
            <div className="bg-custom-white py-6 px-14 mb-8 rounded-xl">
              <p className="font-bold">How do you want to get your order?</p>
              <div className="flex justify-between items-center space-x-6 py-4">
                <Button
                  variant="tertiary"
                  className="bg-custom-greyLight w-1/2 "
                >
                  Pickup
                </Button>
                <Button variant="secondary" className="w-1/2 ">
                  Delivery
                </Button>
              </div>
            </div>
            <div className="bg-custom-white p-10">
              <h3 className="font-bold mb-4">Delivery Details</h3>
              <form action="" method="post">
                <Input
                  label="Receivers Name"
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full"
                  required
                />
                <Input
                  label="Receivers Address"
                  type="text"
                  placeholder="Enter Address"
                  className="w-full"
                  required
                />

                <Button className="text-custom-red flex items-center">
                  <img
                    src="/icons/location.svg"
                    alt="Location Icon"
                    className="mr-4"
                  />{" "}
                  Choose from map
                </Button>
                <div>
                  <div className="mb-8">
                    <label htmlFor="state" className="block my-2">
                      State
                    </label>
                    <State />
                  </div>
                  <div className="md:flex justify-between items-center">
                    <div>
                      <label htmlFor="tel" className="block">
                        Receiver&#39;s Phone Number
                      </label>
                      <div className="flex items-center justify-normal w-full space-x-3 border border-custom-greyLight rounded-3xl p-3 mt-5 bg-custom-greyLight">
                        <img src={Flag} className="w-5 mr-3" />
                        <div>|</div>
                        <input
                          name="tele"
                          type="tel"
                          placeholder="&nbsp;&nbsp;&nbsp;Enter Phone Number"
                          required
                          className="border-none outline-0 bg-custom-greyLight"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="tel" className="">
                        Alternate Phone Number
                      </label>
                      <div className="flex items-center justify-normal w-full space-x-3 border rounded-3xl p-3 mt-5 border-custom-greyLight bg-custom-greyLight">
                        <img src={Flag} className="w-5" />
                        <input
                          type="tel"
                          placeholder=" | &nbsp;&nbsp;&nbsp;Enter Phone Number"
                          required
                          className="border-none bg-custom-greyLight"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <Button variant="primary" className="mt-8 mx-16 md:mx-36 ">
                Proceed to Payment
              </Button>
            </div>
          </div>

          <div className="bg-custom-light p-10">
            <h2 className="font-bold">Summary</h2>
            {totalCartItems > 0 ? (
              <span className="px-1 py-0">
                {totalCartItems} {totalCartItems > 1 ? "Orders" : "Order"}
              </span>
            ) : (
              <p>Your cart is empty.</p>
            )}
            {/* Displaying cart items */}
            {cart.length > 0 &&
              cart.map((item, index) => (
                <section key={index}>
                  <div className="flex">
                    <div>
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-[80px] h-[80px] object-cover rounded-xl mx-auto mb-5"
                      />

                      <p>{item.name}</p>
                      <p>
                        Compliments:{" "}
                        {item.selectedCompliments
                          ? Object.keys(item.selectedCompliments).length
                          : 0}
                        <span>{item.selectedCompliments.name}</span>
                      </p>

                      <p>Quantity: {item.count}</p>
                      <p>Total Price: NGN {item.totalPrice}</p>
                    </div>
                  </div>
                </section>
              ))}

            {/* Total price */}
            <div className="font-bold mt-4">
              <p>Total Price: NGN {calculateTotalPrice()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

// import { useState, useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { CartContext } from "../authentication/context/CartContext.jsx"
// import Button from "../../components/buttons/Button";
// import Icons from "/icons/arrow-left.svg";
// import Input from "../../components/InputFields/Input";
// import State from "../details/State.jsx";
// import Flag from "../../assets/emojione_flag-for-nigeria.svg";

// function Checkout() {
//   const [cartCount, setCartCount] = useState(1);
//   const location = useLocation();
//   const meal = location.state?.meal;

//   function addToCart() {
//     setCartCount(cartCount); // Increment the cart count by the current item count
//   }

//   return (
//     <div className="bg-custom-greyLight px-10">
//       <Button className="flex" onClick={() => window.history.back()}>
//         <img src={Icons} alt="Arrow Icon" />
//         <span>&nbsp; &nbsp; Back</span>
//       </Button>
//       <h2 className="font-bold text-6xl text-center">Checkout</h2>
//       <div className="md:mx-auto md:w-4/5">
//         <div className="flex justify-center items-center">
//           <img src="" alt="" />
//           <span></span>
//           <hr />
//           <img src="" alt="" />
//           <span></span>
//           <hr />
//           <img src="" alt="" />
//           <span></span>
//           <hr />
//         </div>
//         <div className="md:flex flex-wrap justify-between items-center">
//           <div className="mb-6">
//             <div className="bg-custom-white py-6 px-14 mb-8 rounded-xl">
//               <p className="font-bold">How do you want to get your order?</p>
//               <div className="flex justify-between items-center space-x-6 py-4">
//                 <Button
//                   variant="tertiary"
//                   className="bg-custom-greyLight w-1/2 "
//                 >
//                   Pickup
//                 </Button>
//                 <Button variant="secondary" className="w-1/2 ">
//                   Delivery
//                 </Button>
//               </div>
//             </div>
//             <div className="bg-custom-white p-10">
//               <h3 className="font-bold mb-4">Delivery Details</h3>
//               <form action="" method="post">
//                 <Input
//                   label="Receivers Name"
//                   type="text"
//                   placeholder="Enter Full Name"
//                   className="w-full"
//                   required
//                 />
//                 <Input
//                   label="Receivers Address"
//                   type=""
//                   placeholder="Enter Address"
//                   className="w-full"
//                   required
//                 />

//                 <Button className="text-custom-red flex items-center">
//                   <img
//                     src="/icons/location.svg"
//                     alt="Location Icon"
//                     className="mr-4"
//                   />{" "}
//                   Choose from map
//                 </Button>
//                 <div>
//                   <div className="mb-8">
//                     <label htmlFor="state" className="block my-2">
//                       State
//                     </label>
//                     <State />
//                   </div>
//                   <div className="md:flex justify-between items-center">
//                     <div>
//                       <label htmlFor="tel" className="block">
//                         Receiver&#39;s Phone Number
//                       </label>
//                       <div className="flex items-center justify-normal w-full space-x-3 border border-custom-greyLight rounded-3xl p-3 mt-5 bg-custom-greyLight">
//                         <img src={Flag} className="w-5 mr-3" />
//                         <div>|</div>
//                         <input
//                           name="tele"
//                           type="tel"
//                           placeholder="&nbsp;&nbsp;&nbsp;Enter Phone Number"
//                           required
//                           className="border-none outline-0 bg-custom-greyLight"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="tel" className="">
//                         Alternate Phone Number
//                       </label>
//                       <div className="flex items-center justify-normal w-full space-x-3 border rounded-3xl p-3 mt-5 border-custom-greyLight bg-custom-greyLight">
//                         <img src={Flag} className="w-5" />
//                         <input
//                           type="tel"
//                           placeholder=" | &nbsp;&nbsp;&nbsp;Enter Phone Number"
//                           required
//                           className="border-none bg-custom-greyLight"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//               <Button variant="primary" className="mt-8 mx-16 md:mx-36 ">
//                 Proceed to Payment
//               </Button>
//             </div>
//           </div>

//           <div className="bg-custom-light p-10">
//             <h2 className="font-bold">Summary</h2>
//             {cartCount > 0 && (
//               <span className="px-1 py-0">{cartCount} Orders</span>
//             )}

//             {meal && (
//               <section>
//                 <div className="flex">
//                   <div>
//                     <img
//                       src={meal.photo}
//                       alt={meal.name}
//                       className="w-[250px] h-[200px] object-cover rounded-xl mx-auto mb-5"
//                     />
//                     <p>{meal.name}</p>
//                     <p>{meal.compliments}</p>
//                     <p>{meal.name}</p>
//                   </div>
//                 </div>
//               </section>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;
