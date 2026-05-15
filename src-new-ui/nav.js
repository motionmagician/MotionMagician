import { useState } from 'react';
import './nav.css';

export default function Nav() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <div className="navbar" onMouseLeave={closeMenu}>
      
      {/* FILE MENU */}
      <div className="menu">
        <button onClick={() => toggleMenu('file')}>File</button>

        {activeMenu === 'file' && (
          <div className="dropdown">
            <div className="item">Open File</div>
            <div className="item">Save File</div>
            <div className="item">Save As</div>
            <div className="divider"></div>
            <div className="item">Export (Alembic)</div>
            <div className="item">Import (Alembic)</div>
          </div>
        )}
      </div>

      {/* CREATE MENU */}
      <div className="menu">
        <button onClick={() => toggleMenu('create')}>Create</button>

        {activeMenu === 'create' && (
          <div className="dropdown">
            <div className="item">Camera</div>
            <div className="item">Geometry</div>
            <div className="item">Light</div>
            <div className="item">Empty Object</div>
            <div className="item">Group</div>
          </div>
        )}
      </div>

    </div>
  );
}