import React, { useState } from "react";
import LabelInput from "../components/InputLabel";
import ScoreModel from "../models/ScoreModel";
import { adicionarDadosAoHistorico } from "../service/HistoryService";
import { createNavigationFunctions } from "../service/RoutingService";

function Calculator() {
  const [score, setScore] = useState(new ScoreModel("", 0, 0, 0));
  const { navigateToHistory, navigateToBack } = createNavigationFunctions();

  const handleNavigateToHistory = () => {
    navigateToHistory();
  };

  const handleNavigateToBack = () => {
    navigateToBack();
  };

  const calculateAverage = (score) => {
    return (score.n1 + score.n2 + score.n3) / 3;
  };

  const handleCalculate = async () => {
    const media = calculateAverage(score);

    const result = {
      Nome: score.nome,
      Nota1: score.n1,
      Nota2: score.n2,
      Nota3: score.n3,
      Media: media,
    };

    setScore({
      ...score,
      me: media,
    });

    await adicionarDadosAoHistorico([result]);
  };

  const handleClear = () => {
    setScore(new ScoreModel("", 0, 0, 0));
  };


  return (
    <div className="container">
      <h2>ES46A-ES61</h2>

      <LabelInput
  label="Nome do aluno"
  type="text"
  name="nome"
  value={score.nome}
  onChange={(e) => setScore({ ...score, nome: e.target.value })}
/>

<LabelInput
  label="Nota 1"
  type="number"
  name="n1"
  value={score.n1}
  onChange={(e) => setScore({ ...score, n1: Number(e.target.value) })}
/>

<LabelInput
  label="Nota 2"
  type="number"
  name="n2"
  value={score.n2}
  onChange={(e) => setScore({ ...score, n2: Number(e.target.value) })}
/>

<LabelInput
  label="Nota 3"
  type="number"
  name="n3"
  value={score.n3}
  onChange={(e) => setScore({ ...score, n3: Number(e.target.value) })}
/>

<LabelInput
  label="Média dos exercícios"
  type="number"
  name="me"
  value={score.me}
  onChange={(e) => setScore({ ...score, me: Number(e.target.value) })}
/>

      <div className="div-button">
        <button id="b1" onClick={handleCalculate}>
          Calcular
        </button>
        <button id="b2" onClick={handleClear}>
          Limpar
        </button>
        <button id="b4" onClick={handleNavigateToBack}>
          Voltar
        </button>
        <button id="b3" onClick={handleNavigateToHistory}>
          Histórico
        </button>
      </div>
    </div>
  );
}

export default Calculator;
