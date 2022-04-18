import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
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
            <Link to="/login">Login</Link>
            <Link to="/signUp">SIgn Up</Link>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
