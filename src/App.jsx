import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import WhatWeServe from "./components/whatServe/whatWeServe";
import Hero from "./components/heroes/Hero";
import Footer from "./components/footer/Footer";
import Ourservices from "./components/ourServices/Ourservices";


function App() {
  return (

    <Router>
      <Header />
      <Hero />
      <WhatWeServe />
      <Ourservices />
      <Footer />
    </Router>
  );
}

export default App;
