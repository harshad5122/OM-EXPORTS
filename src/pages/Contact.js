import '../styles/contact.css';
import backgroundImage from '../assets/images/shiping.jpg';

const Contact = () => {
  return (
    <div className="contact-container">

      <section
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        }}
      >
        <div className="overlay">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-subheading">
            Connect with Om Exports — your trusted partner in global trade solutions.
          </p>
        </div>
      </section>

      {/* Subtitle Below Image */}
      <div className="contact-subtext">
        <h2>Please don't Hesitate<br /> To Contact Us</h2>
        <p>
          You can also reach out to us by phone or email — we’re always happy to assist you!
        </p>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="card">
          <div className="icon location-icon"></div>
          <h3>Our Office</h3>
          <p>628, Level 6, 150 Feet Ring Rd, BRTS, near West zone, Rajkot, Gujarat, India</p>
        </div>
        <div className="card">
          <div className="icon phone-icon"></div>
          <h3>Make a Call</h3>
          <p>+91 98765 43210</p>
        </div>
        <div className="card">
          <div className="icon email-icon"></div>
          <h3>Email Address</h3>
          <p>contact@omexports.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="">Select Your Country</option>
              <option value="in">India</option>
              <option value="us">USA</option>
              <option value="uk">UK</option>
            </select>
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <input type="text" placeholder="Subject" className="subject" required />
          <textarea placeholder="Your message here..." rows="6" required></textarea>
          <div className="btn-wrapper">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
