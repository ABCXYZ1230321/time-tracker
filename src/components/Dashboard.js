import React, { useState, useEffect } from 'react';
import TimerCard from "./TimerCard";

function Dashboard() {
  const [timers, setTimers] = useState(() => {
    const saved = localStorage.getItem('app_timers');
    return saved ? JSON.parse(saved) : ['DSA', 'GYM', 'COLLEGE'];
  });
  const [newTimer, setNewTimer] = useState('');

  useEffect(() => {
    localStorage.setItem('app_timers', JSON.stringify(timers));
  }, [timers]);

  const addTimer = () => {
    if (newTimer.trim() !== '') {
      setTimers([...timers, newTimer.trim()]);
      setNewTimer('');
    }
  };

  const deleteTimer = (index) => {
    setTimers(timers.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard">
      <div className="input-section">
        <input
          type="text"
          placeholder="New task name..."
          value={newTimer}
          onChange={(e) => setNewTimer(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTimer()}
        />
        <button onClick={addTimer} className="add-btn">
          Add
        </button>
      </div>

      <div className="card-grid">
        {timers.map((name, index) => (
          <TimerCard
            key={index}
            name={name}
            onDelete={() => deleteTimer(index)}
          />
        ))}
      </div>

      <style>{`
        .dashboard { max-width: 800px; margin: 0 auto; }
        .input-section { margin-bottom: 40px; display: flex; gap: 10px; justify-content: center; }
        input { 
          padding: 12px; border-radius: 8px; border: 1px solid #334155;
          background: #1e293b; color: white; width: 250px;
        }
        .add-btn { 
          background: #3b82f6; border: none; padding: 12px 20px; 
          border-radius: 8px; color: white; cursor: pointer; font-weight: 600;
        }
        .card-grid { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
      `}</style>
    </div>
  );
}

export default Dashboard;
