import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css'
import { carregarHistorico } from '../service/HistoryService'

const History = () => {

  const historico = carregarHistorico()

  return (
    <div>
    <Link to="/" className="backButton">Voltar</Link>      
    <h2>Histórico</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Média</th>
          </tr>
        </thead>
        <tbody>
          {
            historico ?
            historico.map((item) => (
              <tr key={item.id}>
                <td>{item.Nome}</td>
                <td>{item.Nota1}</td>
                <td>{item.Nota2}</td>
                <td>{item.Nota3}</td>
                <td>{item.Media}</td>
              </tr>
            ))
            :
            null
          }
        </tbody>
      </table>
    </div>
  );
};

export default History;
