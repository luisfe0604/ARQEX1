import React, { useState } from "react";
import LabelInput from "../components/InputLabel";
import calculateAverage from "../controller/calculatorController"
import { createNavigationFunctions } from "../service/RoutingService";

function Calculator() {
  const [score, setScore] = useState({nome: "", n1: 0, n2: 0, n3: 0});
  const { navigateToHistory, navigateToBack } = createNavigationFunctions();

  const onClickCalculate = async () => {

    await calculateAverage(
      {
        nome: score.nome, 
        n1: score.n1, 
        n2: score.n2, 
        n3: score.n3
      }
    )

    onClickClear()

  };

  const onClickClear = () => {
    setScore({nome: "", n1: 0, n2: 0, n3: 0});
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

      <div className="div-button">
        <button id="b1" onClick={onClickCalculate}>
          Calcular
        </button>
        <button id="b2" onClick={onClickClear}>
          Limpar
        </button>
        <button id="b4" onClick={navigateToBack}>
          Voltar
        </button>
        <button id="b3" onClick={navigateToHistory}>
          Histórico
        </button>
      </div>
    </div>
  );
}

export default Calculator;
