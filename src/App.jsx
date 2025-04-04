import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Camera from './pages/Camera';
import Preview from './pages/Preview';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;
