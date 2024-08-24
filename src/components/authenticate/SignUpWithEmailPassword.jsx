import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUpWithEmailPassword = async (email, password) => {
  const navigate = useNavigate();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User signed up:", userCredential.user);
    navigate("/login");
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

export default SignUpWithEmailPassword;
