import React from 'react';
import { Route, Routes } from 'react-router-dom';
import History from '../screens/History';

function HistoryRoute() {
  return (
    <Routes>
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default HistoryRoute;
