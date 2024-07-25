import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import GoogleIcon from "../../assets/icons8-google.svg";
import SignUpWithEmailPassword from "./SignUpWithEmailPassword";
import SignInWithGoogle from "./SignInWithGoogle.jsx";
import Input from "../InputFields/Input.jsx";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await SignUpWithEmailPassword(email, password);
  };

  const handleGoogleSignIn = async () => {
    await SignInWithGoogle();
  };

  return (
    <main>
      <section className="bg-custom-light absolute">
        <div>
          <div>
            <h1>Hi There!</h1>
            <form onSubmit={onSubmit}>
              <p style={{ color: "red" }}></p>
              <div>
                <Button type="button" onClick={handleGoogleSignIn}>
                  <img src={GoogleIcon} alt="Google icon" />
                  Sign up with Google
                </Button>
              </div>
              <div>
                <Input
                  label="Name or Username"
                  placeholder="Enter Name or Username"
                  type="text"
                  value=""
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  label="Email"
                  placeholder="Email Address"
                  type="email"
                  // value={password}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>
              <button type="submit">Sign up</button>
            </form>
            <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Signup;
