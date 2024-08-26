import Icon from "../../assets/headerIcon.svg";
import { useState, useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Logo from "../../assets/ConsuBiteLogo.svg";
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
    <>
      <div className="flex justify-between items-center space-x-6 px-16 md:px-12 2xl:px-24 md:py-6">
        <div className="w-full justify-center items-center pl-12 lg:pl-0">
          <img src={Logo} alt="ConsuBite Logo" />
        </div>
        <div className="w-full flex items-center">
          <div
            onClick={toggleMenu}
            className="block absolute left-8 cursor-pointer lg:hidden"
          >
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
          <div className="md:flex md:justify-center md:items-center md:h-5 py-5">
            <nav className="cursor-pointer flex justify-center items-center">
              <ul
                className={`max-[780px]:bg-custom-black absolute top-0 left-0 w-1/2 lg:w-1/3 lg:flex justify-between items-center max-[780px]h-screen md:relative lg:mr-4 text-custom-light font-semibold md:text-custom-black p-10 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <p onClick={closeMenu} className="lg:hidden pb-5">
                  &#10006;
                </p>
                <li className="hover:text-custom-redHover focus:text-custom-redFocus active:text-custom-red focus:font-bold m-6">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-custom-red font-bold" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hover:text-custom-redHover focus:text-custom-redFocus active:text-custom-red focus:font-bold m-6">
                  <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                      isActive ? "text-custom-red font-bold" : ""
                    }
                  >
                    Menu
                  </NavLink>
                </li>
                <li className="hover:text-custom-redHover focus:text-custom-redFocus active:text-custom-red focus:font-bold m-6">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="hover:text-custom-redHover focus:text-custom-redFocus active:text-custom-red focus:font-bold m-6 ">
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
                    <li className="md:hidden m-6">
                      <Button
                        variant="secondary"
                        onClick={openSignUpModal}
                        className="px-8"
                      >
                        Sign Up
                      </Button>
                    </li>
                    <li className="md:hidden m-6 ">
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
              <div className="flex md:w-full md:space-x-4 justify-end items-center md:ml-8 lg:ml-4">
                <div className="">
                  <img src={Icon} alt="Pot Icon" className="ml-48 md:ml-0" />
                </div>
                {isLoggedIn ? (
                  <Button
                    variant="primary"
                    className="hidden md:flex px-8"
                    onClick={openLoginModal}
                  >
                    Logout
                  </Button>
                ) : (
                  <div className="flex justify-between items-center space-x-6">
                    <Button
                      variant="secondary"
                      onClick={openSignUpModal}
                      className="hidden md:flex px-8 md:text-sm md:font-bold"
                    >
                      Sign Up
                    </Button>
                    <Button
                      variant="primary"
                      className="hidden md:flex px-8"
                      onClick={openLoginModal}
                    >
                      Login
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
