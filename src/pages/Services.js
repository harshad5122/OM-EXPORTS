// import "../styles/services.css";
// import backgroundImage from "../assets/images/shiping.jpg"; 

// const Services = () => {
//     return(
//         <div className="services-container">

//              {/* Hero Section */}
//       <section
//         className="services-hero"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
//         }}
//       >
//         <div className="overlay">
//           <h1 className="services-heading">Services</h1>
//           <p className="services-subheading">
            
// Providing expert solutions with quality and reliability.
//           </p>
//         </div>
//       </section>
//         </div>
//     );
// }

// export default Services;

// src/pages/Services.js
import React, { useEffect } from "react";
import "../styles/services.css";
import backgroundImage from "../assets/images/shiping.jpg";
import {
  FaBoxes,
  FaCheckCircle,
  FaBoxOpen,
  FaFileInvoice,
  FaTruckMoving,
  FaTags,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaBoxes />,
    title: "Product Sourcing & Procurement",
    description:
      "We source premium products directly from trusted suppliers, ensuring international quality standards.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Inspection & Assurance",
    description:
      "Every shipment is checked by our expert quality control team to meet client requirements.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Packaging & Labeling",
    description:
      "We provide tailored packaging and labeling to match your brand and compliance needs.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Export Documentation & Compliance",
    description:
      "We handle all export paperwork to ensure smooth customs clearance worldwide.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Logistics & Shipping",
    description:
      "Our global logistics ensure on-time delivery via sea, air, or land — with real-time tracking.",
  },
  {
    icon: <FaTags />,
    title: "Private Label Services",
    description:
      "From design to delivery, we produce goods under your brand with full confidentiality.",
  },
];

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const revealOnScroll = () => {
      const triggerPoint = window.innerHeight * 0.85;
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerPoint) {
          card.classList.add("show");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section
        className="services-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        }}
      >
        <div className="overlay">
          <h1 className="services-heading">Services</h1>
          <p className="services-subheading">
            Providing expert solutions with quality and reliability.
          </p>
        </div>
      </section>

      {/* Our Services Grid */}
      <section className="our-services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-bg-shape">
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              className="service-card"
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Partner With Us?</h2>
        <p className="cta-text">
          Discover how our seamless global solutions can empower your business.
        </p>
        <button className="cta-button">Inquiry Now</button>
      </section>
    </div>
  );
};

export default Services;
