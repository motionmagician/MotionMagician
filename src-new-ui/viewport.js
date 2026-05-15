import { Grid3x3, Eye, Maximize2, MoreHorizontal } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { createMesh } from './geofact'; // 🔥 IMPORTANT
import './viewport.css';

/* ================= MAIN VIEWPORT ================= */
export default function Viewport({ objects = [] }) {
  return (
    <div className="viewport-container" style={{ width: '100%', height: '100%' }}>

      {/* THREE.JS CANVAS */}
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Grid (like Maya/Houdini) */}
        <Grid 
          args={[30, 30]} 
          cellSize={1} 
          cellThickness={1}
          cellColor="#333333"
          sectionColor="#4b4848"
        />

        {/* Controls */}
        <OrbitControls />

        {/* 🔥 DYNAMIC OBJECTS FROM APP */}
        {objects.map(function(obj) {
          return createMesh(obj);
        })}

      </Canvas>

      {/* UI Overlay */}
      <div className="viewport-controls">
        <button><Grid3x3 size={16} /></button>
        <button><Eye size={16} /></button>
        <button><Maximize2 size={16} /></button>
        <button><MoreHorizontal size={16} /></button>
      </div>

      <div className="viewport-label">
        Perspective View
      </div>

      {/* Axis */}
      <div className="viewport-axis">
        <svg width="60" height="60">
          <line x1="30" y1="30" x2="50" y2="30" stroke="#e74c3c" strokeWidth="2" />
          <text x="52" y="34" fill="#e74c3c" fontSize="10">X</text>

          <line x1="30" y1="30" x2="30" y2="10" stroke="#2ecc71" strokeWidth="2" />
          <text x="26" y="8" fill="#2ecc71" fontSize="10">Y</text>

          <line x1="30" y1="30" x2="15" y2="42" stroke="#3498db" strokeWidth="2" />
          <text x="10" y="46" fill="#3498db" fontSize="10">Z</text>

          <circle cx="30" cy="30" r="3" fill="#fff" />
        </svg>
      </div>

    </div>
  );
}