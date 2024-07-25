
import Services from "./services";

function Ourservices() {
  return (
    <>
      <div className=" w-[100vw] min-w-[380px] max-h-[1021px]  flex lg:justify-around md:justify-around sm:justify-center lg:items-start md:items-center p-1  lg:mt-0 md:mt-1 sm:mt-2 mb-12 flex-wrap">
        <div className="w-[550px]  h-[420px] p-1 flex-col ">
          <h1 className="font-poppins w-full text-4xl  font-[800] leading-[30px] flex md:mb-3 ">
            Our <span className=" ml-[8px] text-[#F45156]"> Services </span>
          </h1>
          <p className=" overflow-clip  min-w-[180px] text-[20px] h-[36px] font-poppins font-[400]  leading-[18px] text-[#7C7C7C] mb-4 lg:text-nowrap md:text-wrap sm:text-wrap  ">
            Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus <br />amet at lobortis nec.
          </p>

          
            <Services heading="Place an Order Online" />
            <Services heading="Pick-up Orders" />
            <Services heading="Fast Delivery" />
            <Services heading="Open Hours" />
          
        </div>
        <div className=" max-w-[466px] max-h-[521px]   relative">
          <div className=" w-[437px] md:min-h-[492px] sm:min-h-[292px] rounded-[40px] border-[5px] border-[#FFE5E6] absolute left-[-26px] top-[29px] z-[-2]"></div>
          <img className=" lg:max-w-[437px] md:max-w-[337px] sm:max-w-[237px] lg:max-h-[492px] lg:mt-0 md:mt-5 sm:mt-5  " src="/pictures/Rectangle 6.svg" alt="Waitress" />
        </div>
      </div>
    </>
  );
}

export default Ourservices;


