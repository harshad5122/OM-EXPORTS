import React, { useState } from 'react'; // Import useState
import emailjs from '@emailjs/browser'; // Import emailjs
import '../styles/contact.css';
// import backgroundImage from '../assets/images/shiping.jpg';
import backgroundImage from '../assets/optimized/images/shiping.webp';
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook
import HeroSection from '../components/HeroSection';

const Contact = () => {
  const { t } = useLanguage(); // Get the translation function

  // State to hold form data
  const [formData, setFormData] = useState({
    user_name: '', 
    user_email: '', 
    country: '',    
    phone_number: '', 
    subject: '',   
    message: '',    
  });

  // State for loading/success/error feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setSubmitMessage('');

    // Replace with your actual EmailJS IDs
    const serviceId = 'service_yklig9u';      // e.g., 'service_abcdefg'
    const templateId = 'template_3qfhnua';    // e.g., 'template_12345'
    const publicKey = 'zjjB58oCmOcwlti_s';      // e.g., 'YOUR_PUBLIC_KEY_STRING'

    // You can validate form data here before sending

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        setSubmitMessage(t('contact.form.successMessage')); // Translate this!
        setFormData({ // Clear form fields after successful submission
          user_name: '',
          user_email: '',
          country: '',
          phone_number: '',
          subject: '',
          message: '',
        });
      }, (error) => {
        console.error('Failed to send email:', error);
        setSubmitMessage(t('contact.form.errorMessage')); // Translate this!
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container">
 {/* Hero Section */}
      {/* <section
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        }}
      >
        <div className="overlay">
          <h1 className="contact-heading">{t('contact.heroHeading')}</h1>
          <p className="contact-subheading">
            {t('contact.heroSubheading')}
          </p>
        </div>
      </section> */}
      <HeroSection backgroundImage={backgroundImage} pageName="contact" />

      {/* Subtitle Below Image */}
      <div className="contact-subtext">
        {/* <h2>{t('contact.subtextHeading')}</h2> */}
        <h2>{t('contact.subtextHeading2')}</h2>
        <p>
          {t('contact.subtextDescription')}
        </p>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="card">
          <div className="icon location-icon"></div>
          <h3>{t('contact.officeTitle')}</h3>
          <p>{t('contact.officeAddress')}</p>
        </div>
        <div className="card">
          <div className="icon phone-icon"></div>
          <h3>{t('contact.phoneTitle')}</h3>
          <p>+91 98765 43210</p> {/* Phone number is likely static */}
        </div>
        <div className="card">
          <div className="icon email-icon"></div>
          <h3>{t('contact.emailTitle')}</h3>
          <p>contact@omexports.com</p> {/* Email is likely static */}
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="user_name" // Match name to EmailJS template variable
              placeholder={t('contact.form.yourNamePlaceholder')}
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email" // Match name to EmailJS template variable
              placeholder={t('contact.form.emailPlaceholder')}
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <div className="select-wrap">
            <select
              name="country" // Match name to EmailJS template variable
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">{t('contact.form.selectCountryPlaceholder')}</option>
              <option value="India">{t('contact.form.countryIndia')}</option>
              <option value="USA">{t('contact.form.countryUSA')}</option>
              <option value="UK">{t('contact.form.countryUK')}</option>
              {/* Add more countries and their translations as needed */}
            </select>
            </div>
            <input
              type="tel"
              name="phone_number" // Match name to EmailJS template variable
              placeholder={t('contact.form.phoneNumberPlaceholder')}
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject" // Match name to EmailJS template variable
            placeholder={t('contact.form.subjectPlaceholder')}
            className="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message" // Match name to EmailJS template variable
            placeholder={t('contact.form.messagePlaceholder')}
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="btn-wrapper">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('contact.form.sendingMessageButton') : t('contact.form.sendMessageButton')}
            </button>
          </div>
          {submitMessage && <p className="submit-feedback">{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

