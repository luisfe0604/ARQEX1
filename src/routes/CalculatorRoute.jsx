import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from '../screens/Calculator';

function CalculatorRoute() {
  return (
    <Routes>
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  );
}

export default CalculatorRoute;
