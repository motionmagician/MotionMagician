import { Play, Pause, SkipBack, SkipForward, Circle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './timeline.css';

export default function Timeline() {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [startFrame, setStartFrame] = useState(1);
  const [endFrame, setEndFrame] = useState(250);
  const [playing, setPlaying] = useState(false);

  const fps = 24;
  const intervalRef = useRef(null);
  const timelineRef = useRef(null);
  const isDragging = useRef(false);

  // ✅ SAFE frame range
  const frameRange = Math.max(1, endFrame - startFrame);
  const playheadPosition = ((currentFrame - startFrame) / frameRange) * 100;

  /* ================= PLAYBACK ================= */
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setCurrentFrame((prev) => {
          if (prev >= endFrame) return startFrame;
          return prev + 1;
        });
      }, 1000 / fps);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [playing, startFrame, endFrame]);

  /* ================= GLOBAL MOUSE UP ================= */
  useEffect(() => {
    const handleUp = () => (isDragging.current = false);
    window.addEventListener("mouseup", handleUp);
    return () => window.removeEventListener("mouseup", handleUp);
  }, []);

  /* ================= SCRUB ================= */
  const updateFrameFromMouse = (clientX) => {
    if (!timelineRef.current) return;

    const rect = timelineRef.current.getBoundingClientRect();
    const percent = (clientX - rect.left) / rect.width;

    const newFrame = Math.round(startFrame + percent * frameRange);

    setCurrentFrame(
      Math.max(startFrame, Math.min(endFrame, newFrame))
    );
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    updateFrameFromMouse(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    updateFrameFromMouse(e.clientX);
  };

  /* ================= UI ================= */
  return (
    <div className="timeline-container">

      {/* Controls */}
      <div className="timeline-controls">
        <button onClick={() => setCurrentFrame(startFrame)}>
          <SkipBack size={14} />
        </button>

        <button onClick={() => setPlaying(true)}>
          <Play size={14} />
        </button>

        <button onClick={() => setPlaying(false)}>
          <Pause size={14} />
        </button>

        <button onClick={() => setCurrentFrame(endFrame)}>
          <SkipForward size={14} />
        </button>

        <div className="divider" />

        <div className="inputs">
          <label>Start</label>
          <input
            type="number"
            value={startFrame}
            onChange={(e) => setStartFrame(Number(e.target.value))}
          />

          <label>Current</label>
          <input
            type="number"
            value={currentFrame}
            onChange={(e) => setCurrentFrame(Number(e.target.value))}
          />

          <label>End</label>
          <input
            type="number"
            value={endFrame}
            onChange={(e) => setEndFrame(Number(e.target.value))}
          />
        </div>

        <div className="flex-grow" />

        <button className="record">
          <Circle size={10} fill="#e74c3c" stroke="none" />
          Record
        </button>
      </div>

      {/* Ruler */}
      <div className="timeline-ruler">
        {Array.from({ length: Math.ceil(frameRange / 10) + 1 }).map((_, i) => {
          const frame = startFrame + i * 10;
          if (frame > endFrame) return null;

          const position = ((frame - startFrame) / frameRange) * 100;

          return (
            <div key={i} className="tick" style={{ left: `${position}%` }}>
              <div className="major" />
              <span>{frame}</span>
            </div>
          );
        })}
      </div>

      {/* Track */}
      <div
        className="timeline-track"
        ref={timelineRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >

        {/* Grid */}
        {Array.from({ length: Math.ceil(frameRange / 10) + 1 }).map((_, i) => {
          const frame = startFrame + i * 10;
          if (frame > endFrame) return null;

          const position = ((frame - startFrame) / frameRange) * 100;

          return (
            <div
              key={i}
              className="grid-line"
              style={{ left: `${position}%` }}
            />
          );
        })}

        {/* Playhead */}
        <div
          className="playhead"
          style={{ left: `${playheadPosition}%` }}
        >
          <div className="diamond" />
          <div className="label">{currentFrame}</div>
        </div>

        {/* Keyframes */}
        {[25, 62, 125, 187].map((f, i) => (
          <div
            key={i}
            className="keyframe"
            style={{
              left: `${((f - startFrame) / frameRange) * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
}