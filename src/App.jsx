import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './features/home/Home';
import History from './features/history/History';
import Artists from './features/artists/Artists';
import Restaurant from './features/restaurant/Restaurant';
import Booking from './features/booking/Booking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="historia" element={<History />} />
          <Route path="artistas" element={<Artists />} />
          <Route path="restaurante" element={<Restaurant />} />
          <Route path="contacto" element={<Booking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
