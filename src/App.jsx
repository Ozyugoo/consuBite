import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./pages/authentication/context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/authentication/login/Login";
import Signup from "./pages/authentication/signup/Signup";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact={true} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
