import { useState } from "react";

function Education() {
  const [educations, setEducations] = useState([]);
  
  const [currentEdu, setCurrentEdu] = useState({
    institutionName: "",
    degree: "",
    fieldOfStudy: "",
    dateFrom: "",
    dateTo: "",
    id: Date.now()
  });

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US',{month: 'short', year: 'numeric'});
  };

  const [isAdding, setIsAdding] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdu({ ...currentEdu, [name]: value });
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    setEducations([...educations, currentEdu]);
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
    <section>
      <h2>Education</h2>
      <div className="education-list">
        {educations.map((edu) => (
          <div key={edu.id} className="preview-block">
            <h3>Institution: {edu.institutionName}</h3>
            <p>Degree: {edu.degree}</p>
            <p>Field of Study: {edu.fieldOfStudy}</p>
            <p>Date: {formatDate(edu.dateFrom)} - {formatDate(edu.dateTo)}</p>
            <button onClick={() => {setCurrentEdu(edu); const filteredList = educations.filter(item => item.id !== edu.id);
              setEducations(filteredList); setIsAdding(true);}}>Edit</button>
            <button onClick={() => setEducations(educations.filter(item => item.id !== edu.id))}>
                Delete
            </button>
          </div>
        ))}
      </div>

      {isAdding && (
        <form onSubmit={handleAddEducation}>
          <label htmlFor="institutionName">Institution Name:</label>
          <input type="text" name="institutionName" value={currentEdu.institutionName} onChange={handleChange} placeholder="Institution" required />
          <label htmlFor="degree">Degree:</label>
          <input type="text" name="degree" value={currentEdu.degree} onChange={handleChange} placeholder="Degree" required />
          <label htmlFor="fieldOfStudy">Field of Study:</label>
          <input type="text" name="fieldOfStudy" value={currentEdu.fieldOfStudy} onChange={handleChange} placeholder="Field of Study" required />
          <label htmlFor="dateFrom">From:</label>
          <input type="date" name="dateFrom" value={currentEdu.dateFrom} onChange={handleChange} placeholder="From" required />
          <label htmlFor="dateTo">To:</label>
          <input type="date" name="dateTo" value={currentEdu.dateTo} onChange={handleChange} placeholder="To" required />
          <button type="submit">Save Education</button>
        </form>
      )}
      {educations.length === 0 && !isAdding && (
        <> 
          <p className="hint-text">No education history added yet. Click below to add your school!</p>
          <button onClick={() => setIsAdding(true)}>+ Add Another Education</button>
        </>
      )}

      {educations.length > 0 && !isAdding && (
        <button onClick={() => setIsAdding(true)}>+ Add Another Education</button>
      )}
    </section>
  );
}

export default Education;