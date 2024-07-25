import Icon from "../../assets/headerIcon.svg";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Button from "../Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div>
      <nav
        className={`flex items-center justify-between cursor-pointer w-full md:text-sm `}
      >
        <div className="block absolute left-4 md:hidden">
          <div onClick={toggleMenu}>
            <svg
              className=""
              width="44"
              height="40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 16h32M6 28h32" stroke="#000" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <ul
          className={`md:flex md:w-4/6 md:px-4 lg:space-x-6 md:space-x-4 xl:text-base justify-center text-custom-light font-semibold md:p-0 cursor-pointer bg-custom-black md:text-custom-black md:bg-custom-light py-10 px-14 absolute lg:relative right-0 items-center md:relatve sm:z-50 top-0 h-screen md:h-[6rem] lg:h-20  w-1/2 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <p onClick={closeMenu} className="md:hidden">
            &#10006;
          </p>
          <li className="hover:text-custom-red focus:text-custom-red active:text-custom-red focus:font-bold m-6">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="hover:text-custom-red focus:text-custom-red active:text-custom-red focus:font-bold m-6">
            <Link to="/Menu" onClick={closeMenu}>
              Menu
            </Link>
          </li>
          <li className="hover:text-custom-red focus:text-custom-red active:text-custom-red focus:font-bold m-6">
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className="hover:text-custom-red focus:text-custom-red active:text-custom-red focus:font-bold m-6">
            <Scroll
              onClick={closeMenu}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Scroll>
          </li>
          <li className="lg:hidden m-6">
            <Button className="bg-white border border-custom-red hover:bg-custom-red text-custom-red hover:text-custom-light focus:bg-custom-red focus:text-custom-light active:bg-custom-red active:text-custom-light py-2 px-6">
              Sign Up
            </Button>
          </li>
          <li className="lg:hidden m-6">
            <Button className="bg-white border border-custom-red bg-custom-red text-custom-light hover:text-custom-light focus:bg-custom-red focus:text-custom-light active:bg-custom-red active:text-custom-light py-2 px-5">
              Login
            </Button>
          </li>
        </ul>
        <div className="flex md:w-1/2 justify-between items-center">
          <img
            src={Icon}
            alt="Pot Icon"
            className="absolute right-3 md:left-3 lg:relative"
          />
          <div className="flex justify-between md:space-x-6">
            <Button className="hidden lg:flex border border-custom-red hover:bg-custom-red text-custom-red hover:text-custom-light focus:bg-custom-red focus:text-custom-light active:bg-custom-red active:text-custom-light py-2 px-5">
              Sign Up
            </Button>
            <Button className="hidden lg:flex border border-custom-red bg-custom-red text-custom-light hover:text-custom-light focus:text-custom-light active:bg-custom-red active:text-custom-light py-2 px-5">
              Login
            </Button>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;
