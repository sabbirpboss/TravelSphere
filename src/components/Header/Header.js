import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../../images/logo.png";
import "./Header.css";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <header className="header-container">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <Link to="/Home">Home</Link>
          <Link to="/checkOut">Check Out</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
          <span className="login-signup">
            {user ? (
              <button className="banner-btn" onClick={logout}>
                Signout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
