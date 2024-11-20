import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <div className="layout-container">
        <Sidebar setActiveSection={setActiveSection} />
        <Content activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;