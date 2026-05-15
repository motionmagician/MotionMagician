import { useState, useEffect } from 'react';
import Navbar from './nav';
import Toolbar from './toolbar';
import Viewport from './viewport';
import Timeline from './timeline';
import ParameterPanel from './parameter';
import TabMenu from './tabmenu'; // 🔥 NEW
import './App.css';


export default function App() {

  // 🔥 OBJECT STORAGE
  const [objects, setObjects] = useState([]);

  // 🔥 TAB MENU STATE
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 CREATE OBJECT FUNCTION
  const addObject = (type) => {
    const newObject = {
      id: Date.now(),
      type: type,
      position: [0, 0.5, 0]
    };

    setObjects(prev => [...prev, newObject]);
  };

  // 🔥 TAB KEY HANDLER
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        setMenuOpen(true);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="app-container">

      {/* Top UI */}
      <Navbar />
      <Toolbar addObject={addObject} />

      {/* Main Area */}
      <div className="main-layout">
        <Viewport objects={objects} />
        <ParameterPanel />
      </div>

      {/* Bottom Timeline */}
      <Timeline />

      {/* 🔥 TAB MENU OVERLAY */}
      <TabMenu
        visible={menuOpen}
        onClose={() => setMenuOpen(false)}
        addObject={addObject}
      />

    </div>
  );
}