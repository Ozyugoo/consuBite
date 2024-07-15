import Logo from "../../assets/ConsuBiteLogo.svg";
import Navbar from "./Navbar.jsx";

function Header() {
  return (
    <>
      <div className="flex">
        <div>
          <img src={Logo} alt="ConsuBite Logo" />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Header;
