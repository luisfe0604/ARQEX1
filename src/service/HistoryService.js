import { addDoc, collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useEffect, useState } from 'react';

const adicionarDadosAoHistorico = async (dados) => {
  try {
    const docRef = await addDoc(collection(db, 'historico'), dados);
    console.log('Notas foram adicionadas ao histórico no Firestore. ID: ' + docRef);
  } catch (error) {
    console.error('Erro ao adicionar notas ao histórico:', error);
  }
}

const carregarHistorico = () => {
  const [historico, setHistorico] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'historico'))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const dadosHistorico = []
      querySnapshot.forEach((doc) => {
        dadosHistorico.push({id: doc.id, ...doc.data()})
      })
      setHistorico(dadosHistorico)
    })

  }, [])
  
  return(historico);
}

export { adicionarDadosAoHistorico, carregarHistorico }