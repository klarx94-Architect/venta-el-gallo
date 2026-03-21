import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './features/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="historia" element={<div className="pt-40 text-center">Página en construcción</div>} />
          <Route path="artistas" element={<div className="pt-40 text-center">Página en construcción</div>} />
          <Route path="restaurante" element={<div className="pt-40 text-center">Página en construcción</div>} />
          <Route path="contacto" element={<div className="pt-40 text-center">Página en construcción</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
