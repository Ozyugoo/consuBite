import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";
import { Link } from "react-scroll";

function Hero() {
const navigate = useNavigate()

  return (

    <div className="bg-[url('/pictures/Hero-Background.svg')] bg-cover bg-center w-full  mb-20 sm:mb-20 md:mb-3 lg:mb-2 min-h-[400px] flex flex-col items-center justify-center gap-4  sm:min-h-[500px] md:min-h-[600px] lg:h-[631px]">
      
      <div className="w-full max-w-4xl px-4 py-6 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#ffff] font-poppins">
          Savor Every Bite with ConsuBite
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-[#ffff] font-poppins">
          Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam
          quam rhoncus amet at lobortis nec. Morbi ut tincidunt eu tempus
          amet at sit. Bibendum tortor vitae convallis diam pellentesque eu
          est mattis. Vestibulum sit habitant non vitae.
        </p>
      </div>
      <Button variant='primary' onClick={() => navigate("/menu")} className="font-[Poppins] font-[600] text-[14px] leading-[21px] align-[center] bg-custom-red h-[45px] w-[200px] rounded-[24px] gap-[10px] border border-custom-red hover:bg-custom-red text-custom-light hover:text-custom-black focus:bg-custom-red focus:text-custom-light active:bg-custom-red active:text-custom-light py-3 px-6">
              Explore Menu
            </Button>
           
    </div>
  );
}

export default Hero;


