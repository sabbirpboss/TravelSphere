import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import banner from "../../images/banner.png";
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
      <div className="banner">
        <img src={banner} alt="" />
        <div className="banner-details">
          <div>
            <h1>Hello World</h1>
            <h3>Amazing Travel With Me</h3>
          </div>
          <button className="banner-btn">Book Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
