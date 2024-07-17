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
        <div className="block md:hidden">
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
          className={`md:flex md:w-4/6 md:px-6 lg:space-x-8 md:space-x-5 lg:text-base font-semibold md:p-0 cursor-pointer md:text-black p-10 absolute lg:relative right-0 items-center md:relatve md:bg-inherit sm:z-50 top-0 w-1/2 lg:flex ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <p
            onClick={closeMenu}
            className="md:hidden hover:text-red-500 focus:text-red-500 active:text-red-500"
          >
            &#10006;
          </p>
          <li className="hover:text-red-500 focus:text-red-500 active:text-red-500 focus:font-bold m-6">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="hover:text-red-500 focus:text-red-500 active:text-red-500 focus:font-bold m-6">
            <Link to="/Menu" onClick={closeMenu}>
              Menu
            </Link>
          </li>
          <li className="hover:text-red-500 focus:text-red-500 active:text-red-500 focus:font-bold m-6">
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className="hover:text-red-500 focus:text-red-500 active:text-red-500 focus:font-bold m-6">
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
            <Button className="bg-white border border-red-500 hover:bg-red-500 text-red-500 hover:text-white focus:bg-red-500 focus:text-white active:bg-red-500 active:text-white py-2 px-6">
              Sign Up
            </Button>
          </li>
          <li className="lg:hidden m-6">
            <Button className="bg-white border border-red-500 hover:bg-red-500 text-red-500 hover:text-white focus:bg-red-500 focus:text-white active:bg-red-500 active:text-white py-2 px-5">
              Login
            </Button>
          </li>
        </ul>
        <div className="flex md:w-1/2 justify-between space-x-6 items-center">
          <img
            src={Icon}
            alt="Pot Icon"
            className="pl-3 absolute left-0 lg:relative"
          />
          <Button className="hidden lg:flex bg-white border border-red-500 hover:bg-red-500 text-red-500 hover:text-white focus:bg-red-500 focus:text-white active:bg-red-500 active:text-white py-2 px-6">
            Sign Up
          </Button>
          <Button className="hidden lg:flex bg-white border border-red-500 hover:bg-red-500 text-red-500 hover:text-white focus:bg-red-500 focus:text-white active:bg-red-500 active:text-white py-2 px-5">
            Login
          </Button>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;
