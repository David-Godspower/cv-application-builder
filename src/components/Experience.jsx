import { useState } from "react";

const initialExperienceState = {
  companyName: "",
  positionTitle: "",
  mainResponsibilities: "",
  dateFrom: "",
  dateTo: "",
};

function Experience() {
  const [experiences, setExperiences] = useState([]);
  
  const [currentExp, setCurrentExp] = useState({
    ...initialExperienceState,
    id: Date.now()
  });

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const [isAdding, setIsAdding] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentExp({ ...currentExp, [name]: value });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();

    const exists = experiences.find(exp => exp.id === currentExp.id);
  
    if (exists) {
      setExperiences(experiences.map(item => item.id === currentExp.id ? currentExp : item));
    } else {
      setExperiences([...experiences, currentExp]);
    }

    setCurrentExp({ ...initialExperienceState, id: Date.now() });
    setIsAdding(false);
  };

  return (
    <section>
      <h2>Practical Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="preview-block">
            <h3>Company Name: {exp.companyName}</h3>
            <p>Position: {exp.positionTitle}</p>
            <p>Date: {formatDate(exp.dateFrom)} - {formatDate(exp.dateTo)}</p>
            <button onClick={() => { setCurrentExp(exp); setIsAdding(true); }}>
              Edit
            </button>
            
            <button onClick={() => setExperiences(experiences.filter(item => item.id !== exp.id))}>
              Delete
            </button>
          </div>
        ))}
      </div>

      {isAdding && (
        <form onSubmit={handleAddExperience}>
          <label htmlFor="companyName">Company Name:</label>
          <input id="companyName" type="text" name="companyName" value={currentExp.companyName} onChange={handleChange} placeholder="Company" required />
          
          <label htmlFor="positionTitle">Position Title:</label>
          <input id="positionTitle" type="text" name="positionTitle" value={currentExp.positionTitle} onChange={handleChange} placeholder="Position" required />
          
          <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
          <textarea id="mainResponsibilities" name="mainResponsibilities" value={currentExp.mainResponsibilities} onChange={handleChange} placeholder="Responsibilities" required />
          
          <label htmlFor="dateFrom">From:</label>
          <input id="dateFrom" type="date" name="dateFrom" value={currentExp.dateFrom} onChange={handleChange} required />
          
          <label htmlFor="dateTo">To:</label>
          <input id="dateTo" type="date" name="dateTo" value={currentExp.dateTo} onChange={handleChange} required />
          
          <button type="submit">Save Experience</button>
        </form>
      )}
      
      {(!isAdding || experiences.length === 0) && (
        <div className="button-group">
          {experiences.length === 0 && !isAdding && (
             <p className="hint-text">No work history added yet.</p>
          )}
          {!isAdding && (
            <button onClick={() => setIsAdding(true)}>+ Add Position</button>
          )}
        </div>
      )}
    </section>
  );
}

export default Experience;