import { useEffect, useState } from 'react';
import { MENU } from './menuConfig';
import './tabmenu.css';

export default function TabMenu({ visible, onClose, addObject }) {
  const [search, setSearch] = useState('');

  // 🔥 ESC CLOSE
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // 🔥 RESET SEARCH WHEN OPEN
  useEffect(() => {
    if (visible) setSearch('');
  }, [visible]);

  if (!visible) return null;

  // 🔥 FILTER LOGIC
  const filteredMenu = MENU.map(group => ({
    ...group,
    items: group.items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <div className="tabmenu-overlay" onClick={onClose}>
      <div className="tabmenu" onClick={(e) => e.stopPropagation()}>

        {/* 🔍 SEARCH BAR */}
        <input
          type="text"
          placeholder="Search..."
          className="tabmenu-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />

        {/* 🔥 MENU */}
        {filteredMenu.map((group, i) => (
          <div key={i} className="tabmenu-group">
            <div className="group-title">{group.group}</div>

            {group.items.map((item, j) => (
              <div
                key={j}
                className="tabmenu-item"
                onClick={() => {
                  addObject(item.type);
                  onClose();
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        ))}

        {/* 🔥 EMPTY STATE */}
        {filteredMenu.length === 0 && (
          <div className="no-results">No results found</div>
        )}

      </div>
    </div>
  );
}