import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import WhatWeServe from "./components/whatServe/whatWeServe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <WhatWeServe />
      <Footer />
    </Router>
  );
}

export default App;
