import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

const googleProvider = new GoogleAuthProvider();

const SignInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User signed in with Google:", result.user);
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
  }
};

export default SignInWithGoogle;
