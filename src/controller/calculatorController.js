import { adicionarDadosAoHistorico } from '../service/HistoryService'
import { createScoreObj } from "../models/ScoreModel";

const calculateAverage = async (dados) => {
  const { nome, n1, n2, n3} = dados;

  const media = (n1 + n2 + n3) / 3;

  const scoreObj = createScoreObj(nome, n1, n2, n3, media)

  await adicionarDadosAoHistorico(scoreObj);
};

export default calculateAverage