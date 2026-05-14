import { useState } from "react";
import "../styles/index.css";

function GeneralInfo({ onChange }) {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onChange(updatedData);
  }

  return (
    <section className="editor-section">
      <h2>General Information</h2>
      
      {!isEditing ? (
        <div className="admin-item-card">
          <p><strong>{[formData.firstName, formData.lastName].join(" ")}</strong></p>
          <p>{formData.email}</p>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Details
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setIsEditing(false); }}>
          <div className="form-row">
            <div>
              <label>First Name</label>
              <input name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
              <label>Last Name</label>
              <input name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>
          
          <label>Middle Name (Optional)</label>
          <input name="middleName" value={formData.middleName} onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

          <button type="submit" className="save-btn">Save Contact Info</button>
        </form>
      )}
    </section>
  );
}

export default GeneralInfo;