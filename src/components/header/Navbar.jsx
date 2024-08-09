import Icon from "../../assets/headerIcon.svg";
import { useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Button from "../buttons/Button";
import userAuthContext from "../../pages/authentication/context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openSignUpModal, openLoginModal, isLoggedIn, setIsLoggedIn } =
    useContext(userAuthContext);

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
        <div className="block md:hidden absolute left-0 lg:relative">
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
          className={`bg-custom-black md:flex md:w-4/6 md:px-6 lg:space-x-5 md:space-x-5 xl:text-base justify-center text-custom-light font-semibold md:p-0 cursor-pointer sm:bg-custom-black md:text-custom-black md:bg-custom-white p-10 absolute lg:relative left-0 items-center md:relatve top-0 sm:h-screen md:h-[6rem] lg:h-20  w-1/2 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <p
            onClick={closeMenu}
            className="md:hidden hover:text-red-500 focus:text-red-500 active:text-red-500"
          >
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

          {isLoggedIn ? (
            <li className="lg:hidden m-6">
              <Button variant="primary" className="px-8">
                Logout
              </Button>
            </li>
          ) : (
            <>
              <li className="lg:hidden m-6">
                <Button
                  variant="secondary"
                  onClick={openSignUpModal}
                  className="px-8"
                >
                  Sign Up
                </Button>
              </li>
              <li className="lg:hidden m-6">
                <Button
                  variant="primary"
                  className="px-8"
                  onClick={openLoginModal}
                >
                  Login
                </Button>
              </li>
            </>
          )}
        </ul>
        <div className="flex md:w-1/2 gap-4 space-x-3 items-center justify-end">
          <img src={Icon} alt="Pot Icon" className="relative" />
          {isLoggedIn ? (
            <Button
              variant="primary"
              className="hidden lg:flex px-8"
              onClick={openLoginModal}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                variant="secondary"
                onClick={openSignUpModal}
                className="hidden lg:flex px-8"
              >
                Sign Up
              </Button>
              <Button
                variant="primary"
                className="hidden lg:flex px-8"
                onClick={openLoginModal}
              >
                Login
              </Button>
            </>
          )}
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;
