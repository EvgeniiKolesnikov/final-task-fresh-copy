import React from 'react';
import './App.scss';
import SpeedMatch from './Games/GameSpeedMatch/SpeedMatch';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/" style={{ color: 'white' }}>
          Link - /
        </Link>
      </div>
      <div>
        <Link to="/speedmatch" style={{ color: 'white' }}>
          Link - /speedmatch
        </Link>
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/speedmatch" element={<SpeedMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
