import React, { useState, useEffect, useRef } from "react";
import '../styles/inquiry.css';
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook
import emailjs from '@emailjs/browser'; // Import emailjs

const Inquiry = () => {
  const { t } = useLanguage(); // Get the translation function

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "", // This will store the translated country name
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

  // States for EmailJS submission feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const countryDropdownRef = useRef(null); // Ref for closing dropdown on outside click

  useEffect(() => {
    // Modify dummyCountryData to include a nameKey for translation
    const dummyCountryData = [
      { nameKey: "inquiry.country.india", code: "IN", dial_code: "+91", flag: "🇮🇳" },
      { nameKey: "inquiry.country.unitedStates", code: "US", dial_code: "+1", flag: "🇺🇸" },
      { nameKey: "inquiry.country.unitedKingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
      { nameKey: "inquiry.country.unitedArabEmirates", code: "AE", dial_code: "+971", flag: "🇦🇪" },
      { nameKey: "inquiry.country.canada", code: "CA", dial_code: "+1", flag: "🇨🇦" },
      { nameKey: "inquiry.country.australia", code: "AU", dial_code: "+61", flag: "🇦🇺" },
      { nameKey: "inquiry.country.germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
      { nameKey: "inquiry.country.france", code: "FR", dial_code: "+33", flag: "🇫🇷" },
      { nameKey: "inquiry.country.japan", code: "JP", dial_code: "+81", flag: "🇯🇵" },
      { nameKey: "inquiry.country.china", code: "CN", dial_code: "+86", flag: "🇨🇳" },
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
    setFormData({ ...formData, phone: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    validateField(e.target.name, e.target.value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";
    if (!value.trim()) {
      errorMsg = t('inquiry.validation.required');
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMsg = t('inquiry.validation.invalidEmailFormat');
    }
    if (name === "phone" && !/^\d+$/.test(value)) {
      errorMsg = t('inquiry.validation.phoneDigitsOnly');
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return errorMsg === ""; // Return true if valid, false if invalid
  };

  const handleCountryCodeSelect = (country) => {
    setSelectedCountryCode(country.dial_code);
    setSelectedCountryFlag(country.flag);
    setShowCountryDropdown(false);
  };

  const handleSubmit = async (e) => { // Added 'async'
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    let formIsValid = true;
    const newErrors = {};

    // Validate all fields on submit
    Object.keys(formData).forEach((key) => {
      // Skip message validation if it's optional
      if (key === "message" && !t('inquiry.label.message').includes('*')) { // Check if message label has '*' (is required)
        return; // Skip validation for optional message field
      }

      let valueToValidate = formData[key];
      if (key === "phone") {
        valueToValidate = selectedCountryCode + formData.phone;
      }

      let errorMsg = "";
      if (!valueToValidate.trim() && key !== "message") { // Message field is explicitly optional based on original code
        errorMsg = t('inquiry.validation.required');
        formIsValid = false;
      } else if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valueToValidate)) {
        errorMsg = t('inquiry.validation.invalidEmailFormat');
        formIsValid = false;
      } else if (key === "phone" && !/^\+\d{1,4}\d+$/.test(selectedCountryCode + formData.phone)) {
          errorMsg = t('inquiry.validation.invalidPhoneNumberFormat');
          formIsValid = false;
      }
      newErrors[key] = errorMsg;
      if (errorMsg) formIsValid = false;
    });

    if (!formData.importedBefore) {
      newErrors.importedBefore = t('inquiry.validation.selectAnOption');
      formIsValid = false;
    }

    setErrors(newErrors);

    if (!formIsValid) {
      setSubmitMessage(t('inquiry.alert.correctErrors'));
      setIsSubmitting(false);
      return;
    }

    // Prepare data for EmailJS (map to template variable names)
    const templateParams = {
      user_firstName: formData.firstName,
      user_lastName: formData.lastName,
      user_email: formData.email,
      company_name: formData.company,
      country_selected: formData.country,
      phone_number: selectedCountryCode + formData.phone, 
      imported_before: formData.importedBefore,
      user_message: formData.message,
    };

    const serviceId = 'service_yklig9u';    // e.g., 'service_bdyp8ja'
    const templateId = 'template_69scb8m';  // e.g., 'template_rcsnzgc'
    const publicKey = 'zjjB58oCmOcwlti_s';    // e.g., 'lYA8VraKgY03mHr2y'


    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email successfully sent!', response.status, response.text);
      setSubmitMessage(t('inquiry.alert.submittedSuccessfully'));
      // Reset form fields after successful submission
      setFormData({
        firstName: "", lastName: "", email: "", company: "", country: "",
        phone: "", importedBefore: "", message: ""
      });
      setSelectedCountryCode("");
      setSelectedCountryFlag("");
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage(t('inquiry.alert.submissionError')); // New translation key for error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="inquiry-page">
      <div className="inquiry-container">
        <h1 className="form-title">{t('inquiry.formTitle')}</h1>
        <p className="form-subtitle">
          {t('inquiry.formSubtitle')}
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* First Name */}
          <div className={`form-group ${errors.firstName ? "error" : touched.firstName && "success"}`}>
            <label>{t('inquiry.label.firstName')} *</label>
            <input
              type="text"
              name="firstName"
              placeholder={t('inquiry.placeholder.firstName')}
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
          </div>

          {/* Last Name */}
          <div className={`form-group ${errors.lastName ? "error" : touched.lastName && "success"}`}>
            <label>{t('inquiry.label.lastName')} *</label>
            <input
              type="text"
              name="lastName"
              placeholder={t('inquiry.placeholder.lastName')}
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
          </div>

          {/* Email */}
          <div className={`form-group ${errors.email ? "error" : touched.email && "success"}`}>
            <label>{t('inquiry.label.emailId')} *</label>
            <input
              type="email"
              name="email"
              placeholder={t('inquiry.placeholder.emailId')}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/* Company */}
          <div className={`form-group ${errors.company ? "error" : touched.company && "success"}`}>
            <label>{t('inquiry.label.companyName')} *</label>
            <input
              type="text"
              name="company"
              placeholder={t('inquiry.placeholder.companyName')}
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.company && <span className="error-msg">{errors.company}</span>}
          </div>

          {/* Country */}
          <div className={`form-group ${errors.country ? "error" : touched.country && "success"}`}>
            <label>{t('inquiry.label.country')} *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">{t('inquiry.placeholder.selectCountry')}</option>
              {countries.map((country) => (
                <option key={country.code} value={t(country.nameKey)}> {/* Pass the translated country name */}
                  {country.flag} {t(country.nameKey)}
                </option>
              ))}
            </select>
            {errors.country && <span className="error-msg">{errors.country}</span>}
          </div>

          {/* Phone with Country Code */}
          <div className={`form-group ${errors.phone ? "error" : touched.phone && "success"}`}>
            <label>{t('inquiry.label.phone')} *</label>
            <div className="phone-input-group">
              <div className="country-code-selector" ref={countryDropdownRef}>
                <div className="selected-code" onClick={() => setShowCountryDropdown(!showCountryDropdown)}>
                  {selectedCountryFlag && <span className="flag">{selectedCountryFlag}</span>}
                  <span>{selectedCountryCode}</span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                {showCountryDropdown && (
                  <div className="country-code-dropdown">
                    {countries.map((country) => (
                      <div
                        key={country.code}
                        className="country-option"
                        onClick={() => handleCountryCodeSelect(country)}
                      >
                        <span className="flag">{country.flag}</span>
                        <span>{t(country.nameKey)} ({country.dial_code})</span> {/* Use t() for country name */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                name="phone"
                placeholder={t('inquiry.placeholder.phone')}
                value={formData.phone}
                onChange={handlePhoneChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          {/* Imported Before */}
          <div className={`form-group ${errors.importedBefore ? "error" : ""}`}>
            <label>{t('inquiry.label.importedBefore')} *</label>
            <div className="radio-group">
              <label className={`radio-option ${formData.importedBefore === "Yes" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="importedBefore"
                  value="Yes"
                  checked={formData.importedBefore === "Yes"}
                  onChange={handleChange}
                />
                {t('inquiry.importedBefore.yes')}
              </label>
              <label className={`radio-option ${formData.importedBefore === "No" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="importedBefore"
                  value="No"
                  checked={formData.importedBefore === "No"}
                  onChange={handleChange}
                />
                {t('inquiry.importedBefore.no')}
              </label>
            </div>
            {errors.importedBefore && <span className="error-msg">{errors.importedBefore}</span>}
          </div>

          {/* Message */}
          <div className="form-group">
            {/* The label has a '*' in your original code, implying required.
                If it's truly optional, remove '*' from translations.js for this label. */}
            <label>{t('inquiry.label.message')}</label>
            <textarea
              name="message"
              placeholder={t('inquiry.placeholder.message')}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? t('inquiry.submitButtonSending') : t('inquiry.submitButton')}
          </button>
          {submitMessage && <p className={`submit-feedback ${submitMessage.includes(t('inquiry.alert.submittedSuccessfully')) ? 'success' : 'error'}`}>{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Inquiry;




// import React, { useState, useEffect, useRef } from "react";
// import '../styles/inquiry.css';
// import { useLanguage } from '../LanguageContext'; // Import useLanguage hook

// const Inquiry = () => {
//   const { t } = useLanguage(); // Get the translation function

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     company: "",
//     country: "",
//     phone: "",
//     importedBefore: "",
//     message: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [countries, setCountries] = useState([]);
//   const [selectedCountryCode, setSelectedCountryCode] = useState("");
//   const [selectedCountryFlag, setSelectedCountryFlag] = useState("");
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false);

//   const countryDropdownRef = useRef(null); // Ref for closing dropdown on outside click

//   useEffect(() => {
//     // Modify dummyCountryData to include a nameKey for translation
//     const dummyCountryData = [
//       { nameKey: "inquiry.country.india", code: "IN", dial_code: "+91", flag: "🇮🇳" },
//       { nameKey: "inquiry.country.unitedStates", code: "US", dial_code: "+1", flag: "🇺🇸" },
//       { nameKey: "inquiry.country.unitedKingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
//       { nameKey: "inquiry.country.unitedArabEmirates", code: "AE", dial_code: "+971", flag: "🇦🇪" },
//       { nameKey: "inquiry.country.canada", code: "CA", dial_code: "+1", flag: "🇨🇦" },
//       { nameKey: "inquiry.country.australia", code: "AU", dial_code: "+61", flag: "🇦🇺" },
//       { nameKey: "inquiry.country.germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
//       { nameKey: "inquiry.country.france", code: "FR", dial_code: "+33", flag: "🇫🇷" },
//       { nameKey: "inquiry.country.japan", code: "JP", dial_code: "+81", flag: "🇯🇵" },
//       { nameKey: "inquiry.country.china", code: "CN", dial_code: "+86", flag: "🇨🇳" },
//       // Add more countries as needed
//     ];

//     setCountries(dummyCountryData);
//     // Set a default country for the phone input, e.g., India
//     const defaultCountry = dummyCountryData.find(c => c.code === "IN");
//     if (defaultCountry) {
//       setSelectedCountryCode(defaultCountry.dial_code);
//       setSelectedCountryFlag(defaultCountry.flag);
//     }
//   }, []);

//   // Handle outside click to close country dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
//         setShowCountryDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePhoneChange = (e) => {
//     // Only update the 'phone' part of the formData, not the dial code
//     setFormData({ ...formData, phone: e.target.value });
//   };

//   const handleBlur = (e) => {
//     setTouched({ ...touched, [e.target.name]: true });
//     validateField(e.target.name, e.target.value);
//   };

//   const validateField = (name, value) => {
//     let errorMsg = "";
//     if (!value.trim()) {
//       errorMsg = t('inquiry.validation.required');
//     } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//       errorMsg = t('inquiry.validation.invalidEmailFormat');
//     }
//     // Add validation for phone (simple check for now)
//     if (name === "phone" && !/^\d+$/.test(value)) {
//       errorMsg = t('inquiry.validation.phoneDigitsOnly');
//     }
//     setErrors((prev) => ({ ...prev, [name]: errorMsg }));
//   };

//   const handleCountryCodeSelect = (country) => {
//     setSelectedCountryCode(country.dial_code);
//     setSelectedCountryFlag(country.flag);
//     setShowCountryDropdown(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let formIsValid = true;
//     const newErrors = {};

//     Object.keys(formData).forEach((key) => {
//       let valueToValidate = formData[key];
//       // For phone, the value to validate includes the dial code for format check
//       if (key === "phone") {
//         valueToValidate = selectedCountryCode + formData.phone;
//       }

//       let errorMsg = "";
//       if (!valueToValidate.trim()) {
//         errorMsg = t('inquiry.validation.required');
//         formIsValid = false;
//       } else if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valueToValidate)) {
//         errorMsg = t('inquiry.validation.invalidEmailFormat');
//         formIsValid = false;
//       } else if (key === "phone" && !/^\+\d{1,4}\d+$/.test(selectedCountryCode + formData.phone)) { // More robust phone regex
//           errorMsg = t('inquiry.validation.invalidPhoneNumberFormat');
//           formIsValid = false;
//       }

//       newErrors[key] = errorMsg;
//     });

//     // Ensure Imported Before is selected
//     if (!formData.importedBefore) {
//       newErrors.importedBefore = t('inquiry.validation.selectAnOption');
//       formIsValid = false;
//     }

//     setErrors(newErrors);

//     if (formIsValid) {
//       const submittedData = {
//         ...formData,
//         phone: selectedCountryCode + formData.phone // Combine for submission
//       };
//       console.log("Form Submitted:", submittedData);
//       alert(t('inquiry.alert.submittedSuccessfully'));
//       // You might want to reset the form here
//       setFormData({
//         firstName: "", lastName: "", email: "", company: "", country: "",
//         phone: "", importedBefore: "", message: ""
//       });
//       setSelectedCountryCode("");
//       setSelectedCountryFlag("");
//       setErrors({});
//       setTouched({});
//     } else {
//       alert(t('inquiry.alert.correctErrors'));
//     }
//   };

//   return (
//     <div className="inquiry-page">
//       <div className="inquiry-container">
//         <h1 className="form-title">{t('inquiry.formTitle')}</h1>
//         <p className="form-subtitle">
//           {t('inquiry.formSubtitle')}
//         </p>

//         <form onSubmit={handleSubmit} noValidate>
//           {/* First Name */}
//           <div className={`form-group ${errors.firstName ? "error" : touched.firstName && "success"}`}>
//             <label>{t('inquiry.label.firstName')} *</label>
//             <input
//               type="text"
//               name="firstName"
//               placeholder={t('inquiry.placeholder.firstName')}
//               value={formData.firstName}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
//           </div>

//           {/* Last Name */}
//           <div className={`form-group ${errors.lastName ? "error" : touched.lastName && "success"}`}>
//             <label>{t('inquiry.label.lastName')} *</label>
//             <input
//               type="text"
//               name="lastName"
//               placeholder={t('inquiry.placeholder.lastName')}
//               value={formData.lastName}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
//           </div>

//           {/* Email */}
//           <div className={`form-group ${errors.email ? "error" : touched.email && "success"}`}>
//             <label>{t('inquiry.label.emailId')} *</label>
//             <input
//               type="email"
//               name="email"
//               placeholder={t('inquiry.placeholder.emailId')}
//               value={formData.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.email && <span className="error-msg">{errors.email}</span>}
//           </div>

//           {/* Company */}
//           <div className={`form-group ${errors.company ? "error" : touched.company && "success"}`}>
//             <label>{t('inquiry.label.companyName')} *</label>
//             <input
//               type="text"
//               name="company"
//               placeholder={t('inquiry.placeholder.companyName')}
//               value={formData.company}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.company && <span className="error-msg">{errors.company}</span>}
//           </div>

//           {/* Country */}
//           <div className={`form-group ${errors.country ? "error" : touched.country && "success"}`}>
//             <label>{t('inquiry.label.country')} *</label>
//             <select
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             >
//               <option value="">{t('inquiry.placeholder.selectCountry')}</option>
//               {countries.map((country, index) => (
//                 <option key={country.code} value={t(country.nameKey)}> {/* Use t() for country name */}
//                   {country.flag} {t(country.nameKey)}
//                 </option>
//               ))}
//             </select>
//             {errors.country && <span className="error-msg">{errors.country}</span>}
//           </div>

//           {/* Phone with Country Code */}
//           <div className={`form-group ${errors.phone ? "error" : touched.phone && "success"}`}>
//             <label>{t('inquiry.label.phone')} *</label>
//             <div className="phone-input-group">
//               <div className="country-code-selector" ref={countryDropdownRef}>
//                 <div className="selected-code" onClick={() => setShowCountryDropdown(!showCountryDropdown)}>
//                   {selectedCountryFlag && <span className="flag">{selectedCountryFlag}</span>}
//                   <span>{selectedCountryCode}</span>
//                   <span className="dropdown-arrow">▼</span>
//                 </div>
//                 {showCountryDropdown && (
//                   <div className="country-code-dropdown">
//                     {countries.map((country, index) => (
//                       <div
//                         key={country.code}
//                         className="country-option"
//                         onClick={() => handleCountryCodeSelect(country)}
//                       >
//                         <span className="flag">{country.flag}</span>
//                         <span>{t(country.nameKey)} ({country.dial_code})</span> {/* Use t() for country name */}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder={t('inquiry.placeholder.phone')}
//                 value={formData.phone}
//                 onChange={handlePhoneChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             {errors.phone && <span className="error-msg">{errors.phone}</span>}
//           </div>

//           {/* Imported Before */}
//           <div className={`form-group ${errors.importedBefore ? "error" : ""}`}>
//             <label>{t('inquiry.label.importedBefore')} *</label>
//             <div className="radio-group">
//               <label className={`radio-option ${formData.importedBefore === "Yes" ? "selected" : ""}`}>
//                 <input
//                   type="radio"
//                   name="importedBefore"
//                   value="Yes"
//                   checked={formData.importedBefore === "Yes"}
//                   onChange={handleChange}
//                 />
//                 {t('inquiry.importedBefore.yes')}
//               </label>
//               <label className={`radio-option ${formData.importedBefore === "No" ? "selected" : ""}`}>
//                 <input
//                   type="radio"
//                   name="importedBefore"
//                   value="No"
//                   checked={formData.importedBefore === "No"}
//                   onChange={handleChange}
//                 />
//                 {t('inquiry.importedBefore.no')}
//               </label>
//             </div>
//             {errors.importedBefore && <span className="error-msg">{errors.importedBefore}</span>}
//           </div>

//           {/* Message */}
//           <div className="form-group">
//             <label>{t('inquiry.label.message')} *</label>
//             <textarea
//               name="message"
//               placeholder={t('inquiry.placeholder.message')}
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           {/* Submit */}
//           <button type="submit" className="submit-btn">{t('inquiry.submitButton')}</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Inquiry;