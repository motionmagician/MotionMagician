import { useState } from 'react';
import './toolbar.css';

export default function Toolbar() {
  const [activeTab, setActiveTab] = useState('select');

  return (
    <div className="toolbar-container">

      {/* Tabs */}
      <div className="toolbar-tabs">

        <div className="tab-group">
          <button
            onClick={() => setActiveTab('select')}
            className={activeTab === 'select' ? 'active' : ''}
          >
            Geo
          </button>
          <div className="separator"></div>
        </div>

        <div className="tab-group">
          <button
            onClick={() => setActiveTab('transform')}
            className={activeTab === 'transform' ? 'active' : ''}
          >
            Lights
          </button>
          <div className="separator"></div>
        </div>

        <div className="tab-group">
          <button
            onClick={() => setActiveTab('create')}
            className={activeTab === 'create' ? 'active' : ''}
          >
            Camera
          </button>
          <div className="separator"></div>
        </div>

        <div className="tab-group">
          <button
            onClick={() => setActiveTab('camera')}
            className={activeTab === 'camera' ? 'active' : ''}
          >
            Render
          </button>
        </div>

      </div>

      {/* Tools Content */}
      <div className="toolbar-content">

        {activeTab === 'select' && (
          <>
            <div className="tool">Pointer</div>
            <div className="tool">Box Select</div>
            <div className="tool">Lasso</div>
          </>
        )}

        {activeTab === 'transform' && (
          <>
            <div className="tool">Move</div>
            <div className="tool">Rotate</div>
            <div className="tool">Scale</div>
          </>
        )}

        {activeTab === 'create' && (
          <>
            <div className="tool">Cube</div>
            <div className="tool">Sphere</div>
            <div className="tool">Plane</div>
          </>
        )}

        {activeTab === 'camera' && (
          <>
            <div className="tool">Orbit</div>
            <div className="tool">Pan</div>
            <div className="tool">Zoom</div>
          </>
        )}

      </div>

    </div>
  );
}