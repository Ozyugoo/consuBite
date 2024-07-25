import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import WhatWeServe from "./components/whatServe/whatWeServe";
import Hero from "./components/Hero";
import Footer from "./components/footer/Footer";
import Signup from "./components/authenticate/SignUp";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Hero />
        <Signup />
        <WhatWeServe />
        <Footer />
      </Router>
    </>
  );
}

export default App;
