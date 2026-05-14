import { useState } from "react";

function Experience() {
  const [expData, setExpData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateTo: "",
    isSubmitted: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setExpData({
      ...expData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setExpData({ ...expData, isSubmitted: true });
  }

  return (
    <div>
      <section>
        <h2>Experience</h2>
        <p>
          This is where we will collect your company name, positon title, start
          date and end date
        </p>
        {expData.isSubmitted ? (
          <div className="preview">
            <p>
              <strong>Company Name: </strong>
              {expData.companyName}
            </p>
            <p>
              <strong>Position Title:</strong>
              {expData.positionTitle}
            </p>
            <p>
              <strong>Main Responsibilities</strong>
              {expData.mainResponsibilities}
            </p>
            <p>
              <strong>Start Date:</strong>
              {expData.dateFrom}
            </p>
            <p>
              <strong>End Date:</strong>
              {expData.dateTo}
            </p>

            <button
              type="button"
              onClick={() => setExpData({ ...expData, isSubmitted: false })}
            >
              Edit Information
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={expData.companyName}
              onChange={handleChange}
              required
            />
            <label htmlFor="positionTitle">Position Title:</label>
            <input
              type="text"
              name="positionTitle"
              value={expData.positionTitle}
              onChange={handleChange}
              required
            />
            <label htmlFor="mainResponsibilties">Main Responsibilities</label>
            <textarea
              type="text"
              name="mainResponsibilities"
              value={expData.mainResponsibilities}
              onChange={handleChange}
              required
            />
            <label htmlFor="dateFrom">Start Date:</label>
            <input
              type="date"
              name="dateFrom"
              value={expData.dateFrom}
              onChange={handleChange}
              required
            />
            <label htmlFor="dateTo">End Date:</label>
            <input
              type="date"
              name="dateTo"
              value={expData.dateTo}
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

export default Experience;
