import { useState } from "react";
import '../styles/index.css';

const initialExperienceState = {
  companyName: "",
  positionTitle: "",
  mainResponsibilities: "",
  dateFrom: "",
  dateTo: "",
};
function Experience({ items, setItems }) {
  
  const [currentExp, setCurrentExp] = useState({
    ...initialExperienceState,
    id: Date.now()
  });

  const [isAdding, setIsAdding] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentExp({ ...currentExp, [name]: value });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    
    const exists = items.find(exp => exp.id === currentExp.id);
  
    if (exists) {
      setItems(items.map(item => item.id === currentExp.id ? currentExp : item));
    } else {
      setItems([...items, currentExp]);
    }

    setCurrentExp({ ...initialExperienceState, id: Date.now() });
    setIsAdding(false);
  };

  return (
    <section className="editor-section">
      <h2>Practical Experience</h2>

      <div className="experience-list-admin">
        {items.map((exp) => (
          <div key={exp.id} className="admin-item-card">
            <p><strong>{exp.companyName}</strong> - {exp.positionTitle}</p>
            <div className="admin-controls">
              <button className="edit-button" onClick={() => { 
                setCurrentExp(exp); 
                setIsAdding(true); 
              }}>Edit</button>
              
              <button className="delete-btn" onClick={() => 
                setItems(items.filter(item => item.id !== exp.id))
              }>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {isAdding && (
        <form onSubmit={handleAddExperience}>
          <label htmlFor="companyName">Company Name:</label>
          <input id="companyName" type="text" name="companyName" value={currentExp.companyName} onChange={handleChange} placeholder="e.g. Google" required />
          
          <label htmlFor="positionTitle">Position Title:</label>
          <input id="positionTitle" type="text" name="positionTitle" value={currentExp.positionTitle} onChange={handleChange} placeholder="e.g. Software Engineer" required />
          
          <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
          <textarea id="mainResponsibilities" name="mainResponsibilities" value={currentExp.mainResponsibilities} onChange={handleChange} placeholder="What did you achieve?" required />
          
          <div className="form-row">
            <div>
              <label htmlFor="dateFrom">From:</label>
              <input id="dateFrom" type="date" name="dateFrom" value={currentExp.dateFrom} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="dateTo">To:</label>
              <input id="dateTo" type="date" name="dateTo" value={currentExp.dateTo} onChange={handleChange} required />
            </div>
          </div>
          
          <button type="submit" className="save-btn">Save Experience</button>
          {items.length > 0 && (
            <button type="button" className="cancel-btn" onClick={() => setIsAdding(false)}>Cancel</button>
          )}
        </form>
      )}
      
      {!isAdding && (
        <div className="button-group">
          <button className="add-btn" onClick={() => setIsAdding(true)}>+ Add Work Experience</button>
        </div>
      )}
    </section>
  );
}

export default Experience;