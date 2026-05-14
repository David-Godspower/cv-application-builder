import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/index.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  return (
    <div className="app-wrapper">
      <aside className="editor-panel">
        <div className="editor-content">
          <h1>CV Builder Pro</h1>
          <GeneralInfo onChange={setPersonalInfo} />
          <Education items={educations} setItems={setEducations} />
          <Experience items={experiences} setItems={setExperiences} />
        </div>
      </aside>

      <main className="preview-panel">
        <div className="paper-container">
          <div className="cv-document">
            <div className="cv-header-preview">
               <h1>{[personalInfo.firstName, personalInfo.middleName, personalInfo.lastName]
                    .filter(Boolean)
                    .join(" ")}
                </h1>
               <div className="contact-info">
                 <span>{personalInfo.email}</span>
                 {personalInfo.email && personalInfo.phoneNumber && <span className="separator">|</span>}
                 <span>{personalInfo.phoneNumber}</span>
               </div>
            </div>

            {educations.length > 0 && (
              <section className="cv-section">
                <h2 className="section-title">Education</h2>
                {educations.map(edu => (
                  <div key={edu.id} className="preview-block">
                    <div className="preview-header">
                      <h3 className="primary-title">{edu.institutionName}</h3>
                      <span className="date-display">{edu.dateFrom} — {edu.dateTo}</span>
                    </div>
                    <p className="secondary-title">{edu.degree} in {edu.fieldOfStudy}</p>
                  </div>
                ))}
              </section>
            )}

            {experiences.length > 0 && (
              <section className="cv-section">
                <h2 className="section-title">Experience</h2>
                {experiences.map(exp => (
                  <div key={exp.id} className="preview-block">
                    <div className="preview-header">
                      <h3 className="primary-title">{exp.companyName}</h3>
                      <span className="date-display">{exp.dateFrom} — {exp.dateTo}</span>
                    </div>
                    <p className="secondary-title">{exp.positionTitle}</p>
                    <p className="description-text">{exp.mainResponsibilities}</p>
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;