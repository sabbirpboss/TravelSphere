import React from "react";
import { Link } from "react-router-dom";

const Service = ({service}) => {

    const {name, img, title, price} = service;

  return (
      <div className="service">
        <div>
          <img src={img} alt="" />
        </div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p className="service-description">
          {title}
        </p>
        <div>
          <button className="banner-btn">
            <Link to="/checkOut">Book Now</Link>
          </button>
        </div>
      </div>
  );
};

export default Service;
