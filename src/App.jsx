import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./pages/authentication/context/AuthContext";
import Header from "./components/header/Header";
import WhatWeServe from "./components/whatServe/whatWeServe";
import Hero from "./components/Hero";
import Footer from "./components/footer/Footer";
import Login from "./pages/authentication/login/Login";
import Signup from "./pages/authentication/signup/Signup";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Header />
          <Hero />
          <WhatWeServe />
          <Login />
          <Signup />
          <Footer />
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
