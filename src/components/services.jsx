function Services({ heading }) {
    const serviceImg = '/pictures/Service icon.svg';
  
    return (
      <div className="w-full md:w-[550px] h-auto gap-4 flex md:flex-row lg:mb-6 md:mb-8 sm:mb-1">
      <img className="w-[40px] h-[40px]" src={serviceImg} alt="Service-Icon " />
      <div className="w-full md:w-[494px] h-auto md:h-[61px] flex flex-col lg:gap-0 md:gap-1 sm:gap-2">
        <h1 className="w-full h-auto md:h-[21px] font-poppins font-semibold text-[14px] leading-[20px] text-[#1B1B1B]">
          {heading}
        </h1>
        <p className="w-full  h-auto md:h-[36px] font-poppins font-normal text-[16px] leading-[20px] text-[#7C7C7C]  ">
          Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec
        </p>
      </div>
    </div>
    )
  }
  
  export default Services;