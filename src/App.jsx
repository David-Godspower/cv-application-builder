import {useState} from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>CV Builder Pro</h1>
        <p>Build a professional resume in minutes</p>
      </header>
      
      <main className="cv-sections-wrapper">
        <GeneralInfo />
        <Education />
        <Experience />
      </main>

      <footer>
        <p>&copy; 2026 Power Creative Network</p>
      </footer>
    </div>
  );
}

export default App;