import { useState } from "react";
import "../styles/index.css";

function GeneralInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    isSubmitted: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cleanedData = {
      ...formData,
      firstName: formData.firstName.trim(),
      middleName: formData.middleName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      phoneNumber: formData.phoneNumber.trim(),
      isSubmitted: true,
    };
    
    setFormData(cleanedData);
  }

  return (
    <section>
      {formData.isSubmitted ? (
        <div className="cv-header-preview">
          <h1>
            {[formData.firstName, formData.middleName, formData.lastName]
              .filter(Boolean)
              .join(" ")}
          </h1>
          <div className="contact-info">
            <span>{formData.email}</span>
            <span className="separator">|</span>
            <span>{formData.phoneNumber}</span>
          </div>

          <div className="admin-controls">
            <button
              type="button" 
              className="edit-button"
              onClick={() => setFormData({ ...formData, isSubmitted: false })}
            >
              Edit Contact Info
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2>General Information</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label htmlFor="middleName">Middle Name:</label>
            <input
              id="middleName"
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <button type="submit">Save Information</button>
          </form>
        </>
      )}
    </section>
  );
}

export default GeneralInfo;