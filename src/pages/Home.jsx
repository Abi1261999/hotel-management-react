import { useContext } from "react";
import { HotelContext } from "../context/HotelContext";

import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <span className="welcome-tag">
              Luxury Hotel & Resort
            </span>

            <h1>
              Grand Palace Hotel
            </h1>

            <p>
              Experience luxury, comfort and world-class hospitality
              in the heart of the city.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">
                Book Now
              </button>

              <button className="btn-secondary">
                Explore Rooms
              </button>
            </div>

          </div>

        </div>

      </section>

      <section className="stats-section">

        <div className="card">
          <h2>50+</h2>
          <p>Total Rooms</p>
        </div>

        <div className="card">
          <h2>120+</h2>
          <p>Happy Guests</p>
        </div>

        <div className="card">
          <h2>85+</h2>
          <p>Bookings</p>
        </div>

        <div className="card">
          <h2>4.8★</h2>
          <p>Customer Rating</p>
        </div>

      </section>

      <section className="about-section">

        <div className="about-content">

          <h2>Why Choose Us?</h2>

          <p>
            Grand Palace Hotel offers premium rooms, luxury suites,
            fine dining, swimming pools and world-class customer service.
          </p>

        </div>

      </section>
    </>
  );
}

export default Home;