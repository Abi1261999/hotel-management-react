import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-overlay">
          <h1>About Grand Palace Hotel</h1>
          <p>
            Experience luxury, comfort, and world-class hospitality.
          </p>
        </div>
      </section>

      <section className="about-content">

        <div className="about-text">
          <h2>Welcome To Grand Palace Hotel</h2>

          <p>
            Grand Palace Hotel is one of the finest luxury hotels,
            offering exceptional accommodation, premium services,
            and unforgettable experiences for guests from around
            the world.
          </p>

          <p>
            Our commitment is to provide elegant rooms,
            modern facilities, gourmet dining, and
            outstanding customer service that exceeds
            expectations.
          </p>
        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <h3>🏨 Luxury Rooms</h3>
          <p>
            Spacious and beautifully designed rooms with modern amenities.
          </p>
        </div>

        <div className="feature-card">
          <h3>🍽 Fine Dining</h3>
          <p>
            Enjoy delicious cuisine prepared by expert chefs.
          </p>
        </div>

        <div className="feature-card">
          <h3>🏊 Swimming Pool</h3>
          <p>
            Relax and unwind in our premium outdoor pool.
          </p>
        </div>

        <div className="feature-card">
          <h3>💼 Conference Hall</h3>
          <p>
            Perfect venue for business meetings and events.
          </p>
        </div>

      </section>

      <section className="stats-section">

        <div className="stat-card">
          <h2>50+</h2>
          <p>Luxury Rooms</p>
        </div>

        <div className="stat-card">
          <h2>1200+</h2>
          <p>Happy Guests</p>
        </div>

        <div className="stat-card">
          <h2>15+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>4.9★</h2>
          <p>Guest Rating</p>
        </div>

      </section>

      <section className="mission">

        <h2>Our Mission</h2>

        <p>
          To create memorable experiences through exceptional hospitality,
          luxury accommodations, and personalized service for every guest.
        </p>

      </section>

    </div>
  );
}

export default About;