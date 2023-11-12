import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h2>Calculadora</h2>
      
      <div className="buttons-container">
        <Link to="/calculator">
          <button className="button">Ir para a Calculadora</button>
        </Link>

        <Link to="/history">
          <button className="button">Ver Histórico</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;