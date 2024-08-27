import Hero from "../../components/hero/Hero";
import WhatWeServe from "../../components/whatServe/whatWeServe";
// import Ourservices from "../../components/Ourservices";
import Ourservices from "../../components/ourServices/Ourservices";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <WhatWeServe />
      <Ourservices />
      <Footer />
    </>
  );
}

export default Home;
