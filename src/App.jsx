import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import WhatWeServe from "./components/whatServe/whatWeServe";
import Hero from "./components/Hero";
import Footer from "./components/footer/Footer";
import Login from "./pages/authentication/login/Login";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <WhatWeServe />
      <Login />
      <Footer />
    </Router>
  );
}

export default App;
