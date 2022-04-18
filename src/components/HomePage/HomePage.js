import React from "react";
import "./HomePage.css";
import banner from "../../images/banner.png";
import useServices from "../../Hooks/useServices";
import Service from "../Service/Service";

const HomePage = () => {
  const [services] = useServices([]);

  return (
    <main>
      <section className="banner">
        <img src={banner} alt="" />
        <div className="banner-details">
          <div>
            <h1>Hello World</h1>
            <h3>Amazing Travel With Me</h3>
          </div>
          <button className="banner-btn">Book Now</button>
        </div>
      </section>

      <section className="services-section">
        <h2>Awesome Package, what you are looking for!!!</h2>
        <div className="services">
            {
                services.map(service => <Service
                    key={service.id} 
                    service={service}
                ></Service>)
            }
        </div>
      </section>

      <section className="newsletter">
        <h1>
          Subscribe To Our Newsletter <br />
          For Latest Update
        </h1>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            id="email"
          />
          <button className="banner-btn">Subscribe Now</button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
