import Logo from "../../assets/ConsuBiteLogo.svg";
import Navbar from "./Navbar.jsx";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center py-6 px-6 md:px-8 lg:px-12 xl:px-24 w-full">
        <div className="md:w-2/6 xl:w-2/5 pl-7 lg:pl-0">
          <img src={Logo} alt="ConsuBite Logo" />
        </div>
        <div className="md:w-4/6 xl:w-3/5">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Header;
