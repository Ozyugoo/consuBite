import { useState, useContext } from "react";
import userAuthContext from "../context/AuthContext";
import Input from "../../../components/InputFields/Input";
import Button from "../../../components/buttons/Button";
import GoogleButton from "../../../components/buttons/GoogleButton";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const {
    signUp,
    googleSignIn,
    setIsLoggedIn,
    closeSignUpModal,
    isSignUpOpen,
    alertMessage,
    showAlert,
  } = useContext(userAuthContext);

  if (!isSignUpOpen) return null;

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const handleCreatePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const validatePassword = () => {
    const passwordRegex = /^.{6,}$/;
    const isValid = passwordRegex.test(password);
    setIsPasswordValid(isValid); // Update password validity state
    if (!isValid) {
      setError("Password does not follow the password requirement.");
    } else {
      setError(""); // Clear error message
    }
  };

  const getPasswordRequirements = () => {
    return (
      <div className="text-xs text-custom-redHover font-normal font-poppins">
        Password must be at least 6 characters long
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const userCredential = await signUp(email, password, username);
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userCredential.user));
        }
        setIsLoggedIn(true);
        showAlert("Sign Up successful!");
        setTimeout(() => {
          closeSignUpModal();
        }, 1000);
      } catch (error) {
        console.error("Error during sign-up:", error);
        setError("Sorry, something went wrong. Please try again");
      }
    } else {
      setError("Passwords do not match. Please check and try again");
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await googleSignIn();
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(userCredential.user));
      }
      setIsLoggedIn(true);
      showAlert("Sign Up successful!");
      setTimeout(() => {
        closeSignUpModal();
      }, 1000);
    } catch (error) {
      console.log(error.message);
      setError("Sorry, something went wrong. Please try again");
    }
  };
  const handlePasswordBlur = () => {
    setIsPasswordFocused(false); // Reset isPasswordFocused state when the password field loses focus
    validatePassword(password); // Validate password when the password field loses focus
  };

  return (
    <>
      {isSignUpOpen && (
        <div>
          <div className="fixed inset-0 z-50 overflow-y-auto bg-custom-black opacity-50"></div>
          <div className="fixed inset-0 z-50 overflow-y-auto bg-custom-white w-[40%] h-90vh mx-auto px-[48px] py-[32px] rounded-[24px] flex flex-col gap-[24px] font-poppins max-md:w-full max-md:h-full max-md:rounded-none">
            <div className="flex flex-row w-full place-content-end gap-10">
              <img
                src="/icons/close modal icon.svg"
                alt="close modal icon"
                onClick={closeSignUpModal}
              />
            </div>
            {/* Alert message */}
            {alertMessage && (
              <div className="p-3 bg-[#4CAF50] text-custom-white text-center text-xs z-[9999] w-fit h-fit rounded-lg">
                {alertMessage}
              </div>
            )}
            <div className="text-center text-2xl text-custom-black font-semibold">
              Hi There!
            </div>
            <GoogleButton onClick={handleGoogleSignIn}>
              Sign up with Google
            </GoogleButton>
            <div className="flex flex-col gap-[24px] w-full">
              <Input
                label="Username"
                placeholder="Enter Username"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
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
                  onChange={handleCreatePassword}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={handlePasswordBlur}
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
              {isPasswordFocused &&
                !isPasswordValid &&
                getPasswordRequirements()}
              <div className="relative">
                <Input
                  label="Confirm Password"
                  placeholder="Password"
                  type={confirmShowPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <img
                  src={
                    confirmShowPassword
                      ? "/icons/eye-slash.svg"
                      : "/icons/eye.svg"
                  }
                  alt={
                    confirmShowPassword
                      ? "hide password icon"
                      : "show password icon"
                  }
                  className="absolute top-1/2 bottom-1/2 right-4 cursor-pointer"
                  onClick={() => setConfirmShowPassword(!confirmShowPassword)}
                />
              </div>
              <div className="text-xs text-custom-redHover font-normal font-poppins">
                {error && error}
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex items-center w-full">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 "
                />
                <label className="ml-2 text-xs">Remember Me</label>
              </div>
              <Button
                variant="primary"
                onClick={handleSubmit}
                className="w-full"
              >
                Sign Up
              </Button>
            </div>

            <div className="flex flex-row gap-[4px] w-full place-items-center justify-center">
              <div className="text-xs font-normal text-custom-black">
                Already have an Account?
              </div>
              <div className="text-xs font-semibold text-custom-red">LOGIN</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
