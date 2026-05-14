import { useState } from "react";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  
  const [currentExp, setCurrentExp] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateTo: "",
    id: Date.now()
  });

  const [isAdding, setIsAdding] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentExp({ ...currentExp, [name]: value });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    setExperiences([...experiences, currentExp]);
    setCurrentExp({
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateTo: "",
      id: Date.now()
    });
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
            <p>Date: {exp.dateFrom} - {exp.dateTo}</p>
            <button onClick={() => setIsAdding(true)}>Edit</button>
          </div>
        ))}
      </div>

      {isAdding && (
        <form onSubmit={handleAddExperience}>
          <input type="text" name="companyName" value={currentExp.companyName} onChange={handleChange} placeholder="Company" required />
          <input type="text" name="positionTitle" value={currentExp.positionTitle} onChange={handleChange} placeholder="Position" required />
          <input type="text" name="mainResponsibilities" value={currentExp.mainResponsibilities} onChange={handleChange} placeholder="Responsibilities" required />
          <input type="date" name="dateFrom" value={currentExp.dateFrom} onChange={handleChange} placeholder="From" required />
          <input type="date" name="dateTo" value={currentExp.dateTo} onChange={handleChange} placeholder="To" required />
          <button type="submit">Save Experience</button>
        </form>
      )}
      
      {!isAdding && (
        <button onClick={() => setIsAdding(true)}>+ Add Another Position</button>
      )}
    </section>
  );
}

export default Experience;