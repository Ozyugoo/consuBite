import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../authentication/context/CartContext.jsx";
import Button from "../../components/buttons/Button";
import Icons from "/icons/arrow-left.svg";
import Input from "../../components/InputFields/Input";
import State from "../details/State.jsx";
import Flag from "../../assets/emojione_flag-for-nigeria.svg";
import Plus from "../../assets/plusSign.svg";
import Minus from "../../assets/minusSign.svg";

function Checkout() {
  const { cart } = useContext(CartContext); // Get the cart from CartContext

  const totalCartItems = cart.length;
  const [cartCount, setCartCount] = useState(cart.length); // Set initial cart count based on the number of items in the cart
  const location = useLocation();
  const meal = location.state?.meal;

  useEffect(() => {
    console.log("Cart in checkout:", cart);
    console.log("Location state:", location.state); // To check if selected compliments are passed correctly
  }, [cart, location.state]);

  // Function to calculate the total price of all items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice * count, 0);
  };

  const [count, setCount] = useState(1);

  function increment() {
    return setCount(count + 1);
  }

  function decrement() {
    return setCount(count > 1 ? count - 1 : 1);
  }

  return (
    <div className="bg-custom-greyLight">
      <Button className="flex " onClick={() => window.history.back()}>
        <img src={Icons} alt="Arrow Icon" />
        <span>&nbsp; &nbsp; Back</span>
      </Button>
      <h2 className="font-bold text-6xl text-center mb-6">Checkout</h2>
      <div className="px-14 mx-auto w-full">
        <div className="flex justify-center items-center">
          <div>
            <img src="" alt="" />
            <span></span>
            <hr />
          </div>
          <div>
            <img src="" alt="" />
            <span></span>
            <hr />
          </div>
          <div>
            <img src="" alt="" />
            <span></span>
            <hr />
          </div>
        </div>
        <div className="px-6 md:flex justify-between items-center w-full">
          <div className="mb-6 md:w-2/3">
            <div className="bg-custom-white py-6 px-14 mb-8 rounded-xl">
              <p className="font-bold">How do you want to get your order?</p>
              <div className="md:flex justify-between items-center md:space-x-2 py-4">
                <Button
                  variant="tertiary"
                  className="bg-custom-greyLight md:w-1/2 w-full my-3"
                >
                  Pickup
                </Button>
                <Button variant="secondary" className="md:w-1/2 w-full">
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
                  <div className="lg:flex justify-between items-center">
                    <div>
                      <label htmlFor="tel" className="block">
                        Receiver&#39;s Phone Number
                      </label>
                      <div className="flex items-center justify-normal w-full space-x-3 border border-custom-greyLight rounded-3xl p-3 mt-3 bg-custom-greyLight">
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

                    <div className="mt-4">
                      <label htmlFor="tel" className="">
                        Alternate Phone Number
                      </label>
                      <div className="flex items-center justify-normal w-full space-x-3 border rounded-3xl p-3 mt-3 border-custom-greyLight bg-custom-greyLight">
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
              <Button
                variant="primary"
                className="mt-8 mx-auto flex justify-center items-center"
              >
                Proceed to Payment
              </Button>
            </div>
          </div>

          <div className="bg-custom-light md:w-2/5 md:ml-8 p-8">
            <h2 className="font-bold p">Summary</h2>
            {totalCartItems > 0 ? (
              <span className="px-1 text-custom-greyDark ">
                {count} {count > 1 ? "Orders" : "Order"}
              </span>
            ) : (
              <p className="bg-custom-red p-10 mx-auto text-custom-light font-extrabold mt-4 rounded-3xl text-center text-2xl">
                Your cart is empty.
              </p>
            )}
            {/* Displaying cart items */}
            {cart.length > 0 &&
              cart.map((item, index) => (
                <section key={index} className="mt-6 mx-auto">
                  <div className="flex">
                    <div className="flex">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-[80px] h-[80px] object-cover rounded-xl mx-auto mb-5"
                      />

                      <p className="ml-4">{item.name}</p>
                      <p>
                        {item.selectedCompliments
                          ? Object.values(item.selectedCompliments).map(
                              (compliment, idx) => (
                                <span key={idx}>
                                  {item.selectedCompliments.name}
                                </span>
                              )
                            )
                          : "None"}
                      </p>

                      <p>Quantity: {item.count}</p>
                      <p>Total Price: NGN {item.totalPrice}</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center cursor-pointer">
                    <img src={Minus} onClick={decrement} />
                    <span className="px-6">{count}</span>
                    <img src={Plus} onClick={increment} />
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
