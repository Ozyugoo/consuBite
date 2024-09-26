import Services from "../ourServices/services";

function Ourservices() {
  return (
    <>
      <div className="main-ctr contain-content  min-w-[360px] min-h-[567px] pt-[50px] pl-[24px] pr-[40px] pb-[34px] gap-[1px] flex flex-col flex-wrap  lg:justify-around lg:items-start lg:flex-row md:flex-col md:justify-around md:items-center lg:mt-0 md:mt-[2%] mt-0  sm:mt-[2%] md:w-[100%] md:h-[20%] lg:w-[100%] lg:h-[13%]  lg:gap-[120px] box-border">
        <div className="cont-ctr min-w-[312px] min-h-[462px] sm:gap-[32px] flex flex-col lg:w-[550px]  lg:h-[420px]  lg:gap-[32px]">
          <div className="header-ctr flex flex-col justify-center items-center lg:justify-start lg:items-start ">
            <h1 className="min-w-[312px] min-h-[30px] font-[Poppins] font-[800] text-[20px] leading-[30px] text-center mb-[8px] lg:max-w-[262px] lg:max-h-[60px] lg:font-[800] lg:text-[40px] lg:leading-[60px] lg:text-left" >Our  <span className="font-poppins font-[800] text-[20px] leading-[30px] text-center text-[#F45156] lg:font-[800] lg:text-[40px] lg:leading-[60px]">Services</span></h1>
            <p className="min-w-[312px] min-h-[36px] font-[Poppins] font-[400] text-[12px] leading-[18px] text-center text-[#7C7C7C] mb-2 lg:max-w-[550px] lg:max-h-[36px] lg:font-[400] lg:text-[12px] lg:leading-[18px] lg:text-left ">Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec</p>
          </div>
          <div className="component-ctr min-w-[321px]  min-h-[374px] gap-[0px] lg:w-[750px] md:w-[550px] lg:h-[410px] ">
            <Services heading={'Place and Order Online'}/>
            <Services heading={'Place and Order Online'}/>
            <Services heading={'Place and Order Online'}/>
            <Services heading={'Place and Order Online'}/>
          </div>
        </div>

        <div className=" img-ctr contain-size  top-[5px] rounded-[40px] lg:border-l-[5px] lg:border-b-[5px] lg:border-[#FFE5E6] md:border-l-[5px] md:border-[#FFE5E6] z-[1000] min-w-[304px] min-h-[351px] relative  lg:w-[500px] lg:h-[501px] md:w-[218px] md:h-[275px]">
            <img className=' contain-size min-w-[314px] min-h-[351px] top-[-35px] left-[12px] z-[1] absolute lg:w-[550px] lg:h-[521px] md:w-[268px] md:h-[401px] sm:w-[314px] sm:h-[410px]
             rounded-[32px] ' src="/pictures/Rectangle 6.svg" alt="waitress" />
  
        </div>


      </div>
    </>
  );
}

export default Ourservices;



