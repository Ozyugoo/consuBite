import WhatWeServe from "../../components/whatServe/whatWeServe";
import Ourservices from "../../components/ourServices/Ourservices";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import WhatCustomersSay from "../../components/WhatCustomersSay";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <WhatWeServe />
      <Ourservices />
      <WhatCustomersSay />
      <Footer />
    </>
  );
}

export default Home;
