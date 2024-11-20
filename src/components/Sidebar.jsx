import { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ setActiveSection }) => {
  const [activeButton, setActiveButton] = useState('home');

  const handleNavClick = (section) => {
    setActiveButton(section);
    setActiveSection(section);
  };

  return (
    <div className="sidebar">
      <div className="intro-section">
        <h1>Hey I'm Josh and I build things.</h1>
        <div className="profile-image">
          <img src="https://via.placeholder.com/200" alt="Profile" />
        </div>
        <h2>Josh Sapirstein</h2>
        <h3>Software Engineer</h3>
        <p>Boca Raton, Florida</p>
      </div>
      
      <nav className="sidebar-nav">
        <button 
          className={`nav-button ${activeButton === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
        >
          <span className="icon">🏠</span>
          Home
        </button>
        <button 
          className={`nav-button ${activeButton === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
        >
          <span className="icon">👤</span>
          About
        </button>
        <button 
          className={`nav-button ${activeButton === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavClick('projects')}
        >
          <span className="icon">💻</span>
          Projects
        </button>
        <button 
          className={`nav-button ${activeButton === 'work' ? 'active' : ''}`}
          onClick={() => handleNavClick('work')}
        >
          <span className="icon">💼</span>
          Work
        </button>
        <button 
          className={`nav-button ${activeButton === 'education' ? 'active' : ''}`}
          onClick={() => handleNavClick('education')}
        >
          <span className="icon">📚</span>
          Education
        </button>
        <button 
          className={`nav-button ${activeButton === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
        >
          <span className="icon">📞</span>
          Contact
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;