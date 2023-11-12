import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export async function adicionarDadosAoHistorico(dados) {
  try {
    for (const dado of dados) {
      await addDoc(collection(db, 'historico'), dado);
    }

    console.log('Notas foram adicionadas ao histórico no Firestore');
  } catch (error) {
    console.error('Erro ao adicionar notas ao histórico:', error);
  }
}
