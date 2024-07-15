import Icon from "../../assets/headerIcon.svg";

import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav">
      <nav>
        <div className="btn-menu">
          <div onClick={toggleMenu}>
            <svg
              className="hambugBar"
              width="44"
              height="40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 16h32M6 28h32" stroke="#C7C7C7" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <ul className={`md:flex md:visible ${isOpen ? "block" : "hidden"}`}>
          <p onClick={closeMenu} className="toggle">
            &#10006;
          </p>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Menu" onClick={closeMenu}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Scroll
              className="navList"
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
        </ul>
        <img src={Icon} alt="Pot Icon" />
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
