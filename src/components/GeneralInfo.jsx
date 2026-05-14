import { useState } from "react";

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
    setFormData({ ...formData, isSubmitted: true });
  }

  return (
    <div>
      <section>
        <h2>General Information</h2>
        <p>This is where we will collect your name, email and phone number</p>
        {formData.isSubmitted ? (
          <div className="preview">
            <p>
              <strong>Name: </strong>
              {formData.firstName} {formData.middleName} {formData.lastName}
            </p>
            <p>
              <strong>Email: </strong>
              {formData.email}
            </p>
            <p>
              <strong>Phone Number:</strong>
              {formData.phoneNumber}
            </p>

            <button
              type="button"
              onClick={() => setFormData({ ...formData, isSubmitted: false })}
            >
              Edit Information
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label htmlFor="middleName">Middle Name:</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              required
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>
          </form>
        )}
      </section>
    </div>
  );
}

export default GeneralInfo;
