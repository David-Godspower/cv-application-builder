import { useState } from "react";
import '../styles/index.css';

function Education({ items, setItems }) {
  
  const [currentEdu, setCurrentEdu] = useState({
    institutionName: "",
    degree: "",
    fieldOfStudy: "",
    dateFrom: "",
    dateTo: "",
    id: Date.now()
  });

  const [isAdding, setIsAdding] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdu({ ...currentEdu, [name]: value });
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    const exists = items.find(edu => edu.id === currentEdu.id);
    
    if (exists) {
      setItems(items.map(item => item.id === currentExp.id ? currentEdu : item));
    } else {
      setItems([...items, currentEdu]);
    }

    setCurrentEdu({
      institutionName: "",
      degree: "",
      fieldOfStudy: "",
      dateFrom: "",
      dateTo: "",
      id: Date.now()
    });
    setIsAdding(false);
  };

  return (
    <section className="editor-section">
      <h2>Education Background</h2>
      <div className="education-list-admin">
        {items.map((edu) => (
          <div key={edu.id} className="admin-item-card">
            <p><strong>{edu.institutionName}</strong></p>
            <div className="admin-controls">
              <button className="edit-button" onClick={() => {
                setCurrentEdu(edu); 
                setIsAdding(true);
              }}>Edit</button>
              
              <button className="delete-btn" onClick={() => 
                setItems(items.filter(item => item.id !== edu.id))
              }>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {isAdding && (
        <form onSubmit={handleAddEducation}>
          <label htmlFor="institutionName">Institution Name:</label>
          <input type="text" name="institutionName" value={currentEdu.institutionName} onChange={handleChange} placeholder="e.g. LAUTECH" required />
          
          <label htmlFor="degree">Degree:</label>
          <input type="text" name="degree" value={currentEdu.degree} onChange={handleChange} placeholder="e.g. B.Tech" required />
          
          <label htmlFor="fieldOfStudy">Field of Study:</label>
          <input type="text" name="fieldOfStudy" value={currentEdu.fieldOfStudy} onChange={handleChange} placeholder="e.g. Computer Engineering" required />
          
          <div className="form-row">
            <div>
              <label htmlFor="dateFrom">From:</label>
              <input type="date" name="dateFrom" value={currentEdu.dateFrom} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="dateTo">To:</label>
              <input type="date" name="dateTo" value={currentEdu.dateTo} onChange={handleChange} required />
            </div>
          </div>
          
          <button type="submit" className="save-btn">Save Education</button>
          {items.length > 0 && <button type="button" onClick={() => setIsAdding(false)}>Cancel</button>}
        </form>
      )}

      {!isAdding && (
        <div className="button-group">
          <button className="add-btn" onClick={() => setIsAdding(true)}>+ Add Education</button>
        </div>
      )}
    </section>
  );
}

export default Education;