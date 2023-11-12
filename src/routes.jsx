import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './screens/Calculator';
import History from './screens/History';
import Home from './screens/Home';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
