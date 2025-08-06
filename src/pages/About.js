import '../styles/about.css';
import slide2 from '../assets/images/slide2.jpg';
import product1 from '../assets/images/slide2.jpg';
import product2 from '../assets/images/slide2.jpg';

const About = () => {
  return (
    <div className="about-page">
      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide2})`,
        }}
      >
        <div className="overlay">
          <h1 className="about-heading">About OM EXPORTS</h1>
          <p className="about-subheading">
            Delivering the finest quality of Dals, Pulses, and Whole Spices to the world.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="content-wrapper">
          <div className="image-section">
            <img src={product1} alt="Dals & Pulses" />
          </div>
          <div className="text-section">
            <h2>Who We Are</h2>
            <p>
              OM EXPORTS is a premium exporter of high-quality agricultural products including Dals, Pulses, and Whole Spices.
              We are committed to maintaining top-notch quality and delivering our products across global markets with trust
              and integrity.
            </p>
          </div>
        </div>
      </section>

      <section className="about-content reverse">
        <div className="content-wrapper">
          <div className="text-section">
            <h2>Our Mission</h2>
            <p>
              We aim to provide pure, fresh, and natural food products that meet international standards.
              Our mission is to contribute to a healthier world through quality exports that reflect our values of excellence and sustainability.
            </p>
          </div>
          <div className="image-section">
            <img src={product2} alt="Whole Spices" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
