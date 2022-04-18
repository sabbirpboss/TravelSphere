import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="footer-details">
        <p>
          A travel agency is a private retailer or public service that provides
          travel and tourism-related services to the general public on behalf of
          accommodation or travel suppliers to offer different kinds of
          travelling packages for each destination.
        </p>
      </div>
      <div className="copyright">
        <p>
          {" "}
          Copyright to &copy;2021 |{" "}
          <span>
            <Link to="/home">TravelSphere</Link>{" "}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
