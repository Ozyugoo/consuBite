import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./pages/authentication/context/AuthContext";
import { CartProvider } from "./pages/authentication/context/CartContext";
import Home from "./pages/home/Home";
import Login from "./pages/authentication/login/Login";
import Signup from "./pages/authentication/signup/Signup";
import Header from "./components/header/Header";
import Menu from "./pages/menu/Menu";
import Details from "./pages/details/Details";
import Checkout from "./pages/details/Checkout";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <AuthContextProvider>
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} exact={true} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/details" element={<Details />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
