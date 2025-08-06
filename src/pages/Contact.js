
// import '../styles/contact.css';

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <div className="contact-header">
//         <div className="overlay">
//           <h2>Please don't Hesitate<br />To Contact Us</h2>
//           <p>You can also reach out to us by phone or email – there are many ways to connect with us.</p>
//         </div>
//       </div>

//       <div className="info-cards">
//         <div className="card">
//           <div className="icon location-icon"></div>
//           <h3>Our Office</h3>
//           <p>123 Business Street, City, Country</p>
//         </div>
//         <div className="card">
//           <div className="icon phone-icon"></div>
//           <h3>Make a Call</h3>
//           <p>+91 98765 43210</p>
//         </div>
//         <div className="card">
//           <div className="icon email-icon"></div>
//           <h3>Email Address</h3>
//           <p>contact@example.com</p>
//         </div>
//       </div>

//       <div className="contact-form-section">
//         <form className="contact-form">
//           <div className="form-group">
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Email" required />
//           </div>
//           <div className="form-group">
//             <select required>
//               <option value="">Select Your Country</option>
//               <option value="in">India</option>
//               <option value="us">USA</option>
//               <option value="uk">UK</option>
//             </select>
//             <input type="tel" placeholder="Phone Number" required />
//           </div>
//           <input type="text" placeholder="Subject" className="subject" required />
//           <textarea placeholder="Your message here..." rows="6" required></textarea>
//           <button type="submit">Send a Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-header">
        <div className="overlay">
          <h1 className="contact-title">Contact Us</h1>
        </div>
      </div>

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
          <p>123 Business Street, Ahmedabad, Gujarat, India</p>
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
