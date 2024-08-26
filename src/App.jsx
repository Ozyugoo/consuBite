import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./pages/authentication/context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/authentication/login/Login";
import Signup from "./pages/authentication/signup/Signup";
import Header from "./components/header/Header";
import Menu from "./pages/menu/Menu";

function App() {
  return (
    <>
        <Router>
      <AuthContextProvider>      
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>        
        <Signup />
        <Login />
      </AuthContextProvider>
          </Router>
    </>
  );
}

export default App;
