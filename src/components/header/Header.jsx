import Logo from "../../assets/ConsuBiteLogo.svg";
import Navbar from "./Navbar.jsx";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center w-full bg-custom-light h-24 md:px-16 lg:px-20 xl-px-28">
        <div className="w-1/4 pl-4">
          <img src={Logo} alt="ConsuBite Logo" className="px-2" />
        </div>
        <div className="w-3/4">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Header;
