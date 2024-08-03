import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase";

const userAuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Stop body from scrolling when sign up modal has been opened
  useEffect(() => {
    if (isSignUpOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to ensure we remove the overflow hidden effect when the modal is closed
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSignUpOpen]);

  // Stop body from scrolling when login modal has been opened
  useEffect(() => {
    if (isLoginOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLoginOpen]);

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage("");
    }, 20000); // Clear alert message after 5 seconds
  };

  const openSignUpModal = () => setIsSignUpOpen(true);
  const closeSignUpModal = () => setIsSignUpOpen(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }
  function logIn(email, password) {
    signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
      setIsLoggedIn(!!currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        isLoggedIn,
        setIsLoggedIn,
        isSignUpOpen,
        openSignUpModal,
        closeSignUpModal,
        isLoginOpen,
        openLoginModal,
        closeLoginModal,
        alertMessage,
        setAlertMessage,
        showAlert,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export default userAuthContext;
