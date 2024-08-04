import { useState, useContext } from "react";
import userAuthContext from "../context/AuthContext";

import Input from "../../../components/InputFields/Input";
import Button from "../../../components/buttons/Button";
import GoogleButton from "../../../components/buttons/GoogleButton";

function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    logIn,
    googleSignIn,
    setIsLoggedIn,
    isLoginOpen,
    closeLoginModal,
    alertMessage,
    showAlert,
  } = useContext(userAuthContext);

  if (!isLoginOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      setIsLoggedIn(true);
      showAlert("Sign Up successful!");
      setTimeout(() => {
        closeLoginModal();
      }, 1000);
    } catch (error) {
      console.log("Error during login:", error.message);
      setError("Your username or password is incorrect");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      setIsLoggedIn(true);
      showAlert("Sign Up successful!");
      setTimeout(() => {
        closeLoginModal();
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isLoginOpen && (
        <>
          <div className="fixed inset-0 z-100 overflow-y-auto bg-custom-black opacity-50"></div>
          <div className="fixed inset-0 overflow-y-auto bg-custom-white w-[40%] h-fit m-auto px-[48px] py-[32px] rounded-[24px] flex flex-col gap-[24px] font-poppins max-md:w-full max-md:h-full max-md:rounded-none">
            <div className="flex flex-row w-full place-content-end">
              <img
                src="/icons/close modal icon.svg"
                alt="close modal icon"
                onClick={closeLoginModal}
              />
            </div>
            {/* Alert message */}
            {alertMessage && (
              <div className="p-3 bg-[#4CAF50] text-custom-white text-center text-xs z-[9999] w-fit h-fit rounded-lg">
                {alertMessage}
              </div>
            )}
            <div className="text-center text-2xl text-custom-black font-semibold">
              Welcome Back!
            </div>
            <GoogleButton onClick={handleGoogleSignIn}>
              Login with Google
            </GoogleButton>
            <div className="flex flex-col gap-[24px] w-full">
              <Input
                label="Email"
                placeholder="Email Address"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <Input
                  label="Password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={showPassword ? "/icons/eye-slash.svg" : "/icons/eye.svg"}
                  alt={
                    showPassword ? "hide password icon" : "show password icon"
                  }
                  className="absolute top-1/2 bottom-1/2 right-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <div className="text-xs text-custom-redHover font-normal font-poppins">
                {error && error}
              </div>
            </div>
            <Button variant="primary" onClick={handleSubmit}>
              Login
            </Button>

            <div className="w-full p-[10px] text-custom-red text-xs font-normal text-center">
              Forgot Password?
            </div>
            <div className="flex flex-row gap-[4px] w-full place-items-center justify-center">
              <div className="text-xs font-normal text-custom-black">
                No Account yet?
              </div>
              <div className="text-xs font-semibold text-custom-red">
                SIGN UP
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
