import { useState } from "react";

function Education() {
  const [eduData, setEduData] = useState({
    schoolName: "",
    courseOfStudy: "",
    dateOfStudy: "",
    isSubmitted: false,
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setEduData({
      ...eduData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEduData({ ...eduData, isSubmitted: true });
  }

  return (
    <div>
      <section>
        <h2>Education Background</h2>
        <p>
          This is where we will collect your school name, course of Study and
          Date
        </p>
        {eduData.isSubmitted ? (
          <div className="preview">
            <p>
              <strong>School Name: </strong>
              {eduData.schoolName}
            </p>
            <p>
              <strong>Course of Study:</strong>
              {eduData.courseOfStudy}
            </p>
            <p>
              <strong>Date of Study:</strong>
              {eduData.dateOfStudy}
            </p>

            <button
              type="button"
              onClick={() => setEduData({ ...eduData, isSubmitted: false })}
            >
              Edit Information
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="schoolName">School Name:</label>
            <input
              type="text"
              name="schoolName"
              value={eduData.schoolName}
              onChange={handleChange}
              required
            />
            <label htmlFor="courseOfStudy">Course of Study:</label>
            <input
              type="text"
              name="courseOfStudy"
              value={eduData.courseOfStudy}
              onChange={handleChange}
              required
            />
            <label htmlFor="dateOfStudy">Date of Study:</label>
            <input
              type="date"
              name="dateOfStudy"
              value={eduData.dateOfStudy}
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

export default Education;
