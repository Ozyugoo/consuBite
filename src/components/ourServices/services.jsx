function Services({ heading }) {
    const serviceImg = '/pictures/Service icon.svg';
  
    return (

      <div className="service-ctr min-w-[312px] min-h-[79px] gap-[16px] flex lg:w-[55vw]  lg:max-h-[61px]">
      <div className="service-img min-w-[32px] min-h-[32px] lg:max-w-[40px] lg:max-h-[40px]"><img src="/pictures/Service icon.svg" alt="icon" /></div>
      <div className="service-cont flex flex-col justify-start min-w-[264px] min-h-[79px] lg:max-w-[494px] lg:max-h-[61px] lg:gap-[4px] ">
        <h1 className="min-w-[264px] min-h-[21px] font-[Poppins] font-[600] text-[14px] leading-[21px] text-[#1B1B1B] lg:max-w-[494px] lg:max-h-[21px]">{heading}</h1>
        <p className="min-w-[254px] min-h-[54px] font-[Poppins] font-[400] text-[12px] leading-[18px] text-[#7C7C7C]  lg:max-h-[36px] b-2 lg:w-[45vw] flex flex-wrap">Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec</p>
      </div>

    </div>
    );
  }
  
  export default Services;
