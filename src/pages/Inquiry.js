import React, { useState, useEffect, useRef } from "react";
import '../styles/inquiry.css';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    phone: "", 
    importedBefore: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [countries, setCountries] = useState([]); 
  const [selectedCountryCode, setSelectedCountryCode] = useState(""); 
  const [selectedCountryFlag, setSelectedCountryFlag] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false); 

  const countryDropdownRef = useRef(null); // Ref for closing dropdown on outside click

  
  useEffect(() => {
    
    const dummyCountryData = [
      { name: "India", code: "IN", dial_code: "+91", flag: "🇮🇳" },
      { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸" },
      { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
      { name: "United Arab Emirates", code: "AE", dial_code: "+971", flag: "🇦🇪" },
      { name: "Canada", code: "CA", dial_code: "+1", flag: "🇨🇦" },
      { name: "Australia", code: "AU", dial_code: "+61", flag: "🇦🇺" },
      { name: "Germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
      { name: "France", code: "FR", dial_code: "+33", flag: "🇫🇷" },
      { name: "Japan", code: "JP", dial_code: "+81", flag: "🇯🇵" },
      { name: "China", code: "CN", dial_code: "+86", flag: "🇨🇳" },
      // Add more countries as needed
    ];

    setCountries(dummyCountryData);
    // Set a default country for the phone input, e.g., India
    const defaultCountry = dummyCountryData.find(c => c.code === "IN");
    if (defaultCountry) {
      setSelectedCountryCode(defaultCountry.dial_code);
      setSelectedCountryFlag(defaultCountry.flag);
    }
  }, []);

  // Handle outside click to close country dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    // Only update the 'phone' part of the formData, not the dial code
    setFormData({ ...formData, phone: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    validateField(e.target.name, e.target.value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";
    if (!value.trim()) {
      errorMsg = "This field is required";
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMsg = "Invalid email format";
    }
    // Add validation for phone (simple check for now)
    if (name === "phone" && !/^\d+$/.test(value)) {
      errorMsg = "Phone number must contain only digits";
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleCountryCodeSelect = (country) => {
    setSelectedCountryCode(country.dial_code);
    setSelectedCountryFlag(country.flag);
    setShowCountryDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      let valueToValidate = formData[key];
      if (key === "phone") {
        valueToValidate = selectedCountryCode + formData.phone;
      }
      
      let errorMsg = "";
      if (!valueToValidate.trim()) {
        errorMsg = "This field is required";
        formIsValid = false;
      } else if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valueToValidate)) {
        errorMsg = "Invalid email format";
        formIsValid = false;
      } else if (key === "phone" && !/^\+\d+$/.test(selectedCountryCode + formData.phone)) {
          errorMsg = "Invalid phone number format"; 
          formIsValid = false;
      }

      newErrors[key] = errorMsg;
    });

    // Ensure Imported Before is selected
    if (!formData.importedBefore) {
      newErrors.importedBefore = "Please select an option";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      const submittedData = {
        ...formData,
        phone: selectedCountryCode + formData.phone // Combine for submission
      };
      console.log("Form Submitted:", submittedData);
      alert("Thank you! Your inquiry has been submitted.");
      // You might want to reset the form here
      setFormData({
        firstName: "", lastName: "", email: "", company: "", country: "",
        phone: "", importedBefore: "", message: ""
      });
      setSelectedCountryCode("");
      setSelectedCountryFlag("");
      setErrors({});
      setTouched({});
    } else {
      alert("Please correct the errors in the form.");
    }
  };

  return (
    <div className="inquiry-page">
      <div className="inquiry-container">
        <h1 className="form-title">Inquiry Now</h1>
        <p className="form-subtitle">
          Effortless Connection: Your Premium Gateway to Global Trade
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* First Name */}
          <div className={`form-group ${errors.firstName ? "error" : touched.firstName && "success"}`}>
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
          </div>

          {/* Last Name */}
          <div className={`form-group ${errors.lastName ? "error" : touched.lastName && "success"}`}>
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
          </div>

          {/* Email */}
          <div className={`form-group ${errors.email ? "error" : touched.email && "success"}`}>
            <label>Email ID *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/* Company */}
          <div className={`form-group ${errors.company ? "error" : touched.company && "success"}`}>
            <label>Company Name *</label>
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.company && <span className="error-msg">{errors.company}</span>}
          </div>

          {/* Country */}
          <div className={`form-group ${errors.country ? "error" : touched.country && "success"}`}>
            <label>Country *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select your Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
            {errors.country && <span className="error-msg">{errors.country}</span>}
          </div>

          {/* Phone with Country Code */}
          <div className={`form-group ${errors.phone ? "error" : touched.phone && "success"}`}>
            <label>Phone (WhatsApp No.) *</label>
            <div className="phone-input-group">
              <div className="country-code-selector" ref={countryDropdownRef}>
                <div className="selected-code" onClick={() => setShowCountryDropdown(!showCountryDropdown)}>
                  {selectedCountryFlag && <span className="flag">{selectedCountryFlag}</span>}
                  <span>{selectedCountryCode}</span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                {showCountryDropdown && (
                  <div className="country-code-dropdown">
                    {countries.map((country, index) => (
                      <div
                        key={index}
                        className="country-option"
                        onClick={() => handleCountryCodeSelect(country)}
                      >
                        <span className="flag">{country.flag}</span>
                        <span>{country.name} ({country.dial_code})</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="9876543210"
                value={formData.phone}
                onChange={handlePhoneChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          {/* Imported Before */}
          <div className={`form-group ${errors.importedBefore ? "error" : ""}`}>
            <label>Before this have you Imported this product? *</label>
            <div className="radio-group">
              <label className={`radio-option ${formData.importedBefore === "Yes" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="importedBefore"
                  value="Yes"
                  checked={formData.importedBefore === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className={`radio-option ${formData.importedBefore === "No" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="importedBefore"
                  value="No"
                  checked={formData.importedBefore === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
            {errors.importedBefore && <span className="error-msg">{errors.importedBefore}</span>}
          </div>

          {/* Message */}
          <div className="form-group">
            <label>Message (If Any)</label>
            <textarea
              name="message"
              placeholder="Enter any additional details..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;