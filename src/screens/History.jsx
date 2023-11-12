// History.jsx
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Link } from 'react-router-dom'; 
import '../App.css'

const History = () => {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const carregarHistorico = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'historico'));
        const dadosHistorico = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setHistorico(dadosHistorico);
      } catch (error) {
        console.error('Erro ao carregar histórico:', error);
      }
    };

    carregarHistorico();
  }, []);

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
          {historico.map((item) => (
            <tr key={item.id}>
              <td>{item.Nome}</td>
              <td>{item.Nota1}</td>
              <td>{item.Nota2}</td>
              <td>{item.Nota3}</td>
              <td>{item.Media}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
