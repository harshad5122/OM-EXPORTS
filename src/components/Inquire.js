import React, { useState } from "react";
import "../styles/Inquire.css";
import { FaTimes } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import emailjs from "@emailjs/browser"; 

const Inquire = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    importedBefore: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // ✅ Prepare EmailJS params
    const templateParams = {
      user_firstName: formData.firstName,
      user_lastName: formData.lastName,
      user_email: formData.email,
      company_name: formData.company,
      country_selected: formData.country,
      phone_number: formData.phone,
      imported_before: formData.importedBefore,
      user_message: formData.message,
    };

    // ✅ Your EmailJS credentials
    const serviceId = "service_yklig9u";
    const templateId = "template_69scb8m";
    const publicKey = "zjjB58oCmOcwlti_s";

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully!", response.status, response.text);
      setSubmitMessage(t("inquiry.alert.submittedSuccessfully"));

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        country: "",
        phone: "",
        importedBefore: "",
        message: "",
      });

      // Close modal after success
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitMessage(t("inquiry.alert.submissionError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="inquire-overlay">
      <div className="inquire-modal">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="inquire-title">{t("inquire.title")}</h2>
        <p className="inquire-subtitle">{t("inquire.subtitle")}</p>

        <form className="inquire-form" onSubmit={handleSubmit}>
          {/* Row 1: First + Last Name */}
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder={t("inquire.firstName")}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder={t("inquire.lastName")}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 2: Email + Company */}
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder={t("inquire.email")}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder={t("inquire.company")}
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Row 3: Country + Phone */}
          <div className="form-row">
            <div className="select-wrap">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">{t("inquire.country")}</option>
              <option value="India">{t("inquire.countries.india")}</option>
              <option value="USA">{t("inquire.countries.usa")}</option>
              <option value="UK">{t("inquire.countries.uk")}</option>
              <option value="Australia">{t("inquire.countries.australia")}</option>
              <option value="Canada">{t("inquire.countries.canada")}</option>
            </select>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder={t("inquire.phone")}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 4: Imported Product Question */}
          <div className="form-row imported-row">
            <label>{t("inquire.importQuestion")}</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="importedBefore"
                  value="Yes"
                  checked={formData.importedBefore === "Yes"}
                  onChange={handleChange}
                />
                {t("inquire.yes")}
              </label>
              <label>
                <input
                  type="radio"
                  name="importedBefore"
                  value="No"
                  checked={formData.importedBefore === "No"}
                  onChange={handleChange}
                />
                {t("inquire.no")}
              </label>
            </div>
          </div>

          {/* Row 5: Message */}
          <textarea
            name="message"
            placeholder={t("inquire.message")}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {/* Submit */}
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? t("inquiry.submitButtonSending") : t("inquire.submit")}
          </button>

          {submitMessage && (
            <p
              className={`submit-feedback ${
                submitMessage.includes(t("inquiry.alert.submittedSuccessfully"))
                  ? "success"
                  : "error"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Inquire;
