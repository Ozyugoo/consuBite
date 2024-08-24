import { useState } from "react";
import Input from "../InputFields/Input";
import Button from "../Button";
import Basket from "../../assets/basket.svg";
import Plus from "../../assets/plusSign.svg";
import Minus from "../../assets/minusSign.svg";
import Close from "../../assets/closeBtn.svg"

function Details() {
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function increment() {
    return setCount(count + 1);
  }

  function decrement() {
    return setCount(count > 0 ? count - 1 : 0);
  }

  return (
    <div className="w-1/2 mx-auto relative py-6">
      <img src={Close} onClick={closeMenu} className="py-5 pr-5 cursor-pointer absolute right-4" />
      
      <section>
        <img src="" alt="" />
      </section>
      <section className="flex items-center justify-between">
        <p>
          <p></p>
          <p></p>
        </p>
        <span></span>
      </section>
      <section>
        <p></p>
        <h4></h4>
        <div className="flex justify-between">
          <Input type="checkbox" id="checkbox" checked />
          <p></p>
        </div>
        <div className="flex justify-between">
          <Input type="checkbox" id="checkbox" checked />
          <p></p>
        </div>
        <div className="flex justify-between">
          <Input type="checkbox" id="checkbox" checked />
          <p></p>
        </div>
      </section>
      <div className="flex justify-center items-center cursor-pointer">
        <img src={Minus} onClick={decrement} />
        <span>{count}</span>
        <img src={Plus} onClick={increment} />
      </div>
      <div className="md:flex space-x-6 justify-center my-4">
        <Button variant="secondary" className="md:flex justify-between items-center py-4 md:py-0">
          <img src={Basket} className="mr-5" />
          Add to Basket
        </Button>
        <Button variant="primary">
          Proceed to Pay | NGN <span></span>
        </Button>
      </div>
    </div>
  );
}

export default Details;
