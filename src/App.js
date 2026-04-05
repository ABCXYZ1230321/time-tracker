import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>⏱ Time-Tracker</h1>
        <h2>ACTIVITY</h2>
      </header>
      <Dashboard />

      <style>{`
        .app-container {
          background: #0f172a;
          min-height: 100vh;
          color: white;
          padding: 50px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }
        h1 { font-size: 2.5rem; margin-bottom: 10px; color: #f8fafc; }
        p { color: #94a3b8; margin-bottom: 30px; }
      `}</style>
    </div>
  );
}

export default App;
