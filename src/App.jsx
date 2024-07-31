import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import WhatWeServe from "./components/whatServe/whatWeServe";
import Hero from "./components/heroes/Hero";
import Footer from "./components/footer/Footer";


function App() {
  return (

    <Router>
      <Header />
      <Hero />
      <WhatWeServe />
      <Footer />
    </Router>
  );
}

export default App;
