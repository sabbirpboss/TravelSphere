import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

console.log(resetError);

  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.form?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(form, { replace: true });
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Please Login!!!</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id="user-email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id="user-password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error ? "User Not Found" : ""}</p>
          {loading && <p>Loading...</p>}
          <input type="submit" className="form-submit" value="Login" />
        </form>
        <button onClick={() => signInWithGoogle()}>Sign In</button>
        <p>
          New to Here?{" "}
          <Link className="form-link" to="/signUp">
            Create An Account Very Soon
          </Link>{" "}
        </p>
        <button
        onClick={async () => {
          await sendPasswordResetEmail(email);
          toast('Sent email');
        }}
      >
        Reset password
      </button>
      <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
