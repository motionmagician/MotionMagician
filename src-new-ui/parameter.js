import { useState } from 'react';
import './parameter.css';

export default function ParameterPanel() {
  const [sections, setSections] = useState([
    { id: 1, name: 'Transform', open: true },
    { id: 2, name: 'Material', open: false },
    { id: 3, name: 'Render', open: false }
  ]);

  const toggleSection = (id) => {
    setSections(sections.map(sec =>
      sec.id === id ? { ...sec, open: !sec.open } : sec
    ));
  };

  const closeSection = (id) => {
    setSections(sections.filter(sec => sec.id !== id));
  };

  return (
    <div className="param-panel">

      {sections.map(section => (
        <div key={section.id} className="param-section">

          {/* Header */}
          <div
            className="param-header"
            onClick={() => toggleSection(section.id)}
          >
            <span>{section.open ? '▼' : '▶'} {section.name}</span>

            <button
              className="close-btn"
              onClick={(e) => {
                e.stopPropagation();
                closeSection(section.id);
              }}
            >
              ×
            </button>
          </div>

          {/* Content */}
          {section.open && (
            <div className="param-body">

              {section.name === 'Transform' && (
                <>
                  <div className="field">
                    <label>X</label>
                    <input type="number" defaultValue="0" />
                  </div>
                  <div className="field">
                    <label>Y</label>
                    <input type="number" defaultValue="0" />
                  </div>
                  <div className="field">
                    <label>Z</label>
                    <input type="number" defaultValue="0" />
                  </div>
                </>
              )}

              {section.name === 'Material' && (
                <>
                  <div className="field">
                    <label>Color</label>
                    <input type="color" />
                  </div>
                  <div className="field">
                    <label>Roughness</label>
                    <input type="range" min="0" max="1" step="0.1" />
                  </div>
                </>
              )}

              {section.name === 'Render' && (
                <>
                  <div className="field">
                    <label>Samples</label>
                    <input type="number" defaultValue="64" />
                  </div>
                  <div className="field">
                    <label>Output</label>
                    <input type="text" placeholder="path..." />
                  </div>
                </>
              )}

            </div>
          )}

        </div>
      ))}

    </div>
  );
}