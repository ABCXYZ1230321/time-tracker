import React, { useState, useEffect } from 'react';

function TimerCard({ name, onDelete }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const hrs = String(Math.floor(time / 3600)).padStart(2, '0');
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const secs = String(time % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className={`card ${isRunning ? 'running' : ''}`}>
      <span className="task-name">{name}</span>
      <div className="timer-display">{formatTime()}</div>

      <div className="controls">
        {!isRunning ? (
          <button className="btn btn-play" onClick={() => setIsRunning(true)}>
            ▶
          </button>
        ) : (
          <button className="btn btn-pause" onClick={() => setIsRunning(false)}>
            ⏸
          </button>
        )}

        
        <button
          className="btn btn-reset"
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
        >
          🔄
        </button>

        <button className="btn btn-delete" onClick={onDelete}>
          ✖
        </button>
      </div>

      <style>{`
        .card {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 16px;
          padding: 20px;
          width: 200px;
          transition: all 0.3s ease;
        }
        .card.running { border-color: #10b981; box-shadow: 0 0 15px rgba(16, 185, 129, 0.2); }
        .task-name { font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; font-weight: bold; }
        .timer-display { font-size: 1.8rem; margin: 15px 0; font-family: 'Courier New', Courier, monospace; }
        
        .controls { display: flex; justify-content: center; gap: 8px; }
        .btn {
          border: none; border-radius: 8px; width: 35px; height: 35px;
          color: white; cursor: pointer; transition: 0.2s;
          display: flex; align-items: center; justify-content: center; font-size: 1rem;
        }
        .btn-play { background: #10b981; }
        .btn-pause { background: #64748b; }
        .btn-reset { background: #3b82f6; }
        .btn-delete { background: #ef4444; }
        .btn:hover { opacity: 0.8; transform: translateY(-2px); }
      `}</style>
    </div>
  );
}

export default TimerCard;
 