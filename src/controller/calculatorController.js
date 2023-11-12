import { adicionarDadosAoHistorico } from "../../services/HistoryService";
import { navigateToHistory } from "../../services/RoutingService";

const handleCalculate = async (state, setState) => {
  const { nome, n1, n2, n3, me } = state;
  const media = (n1 + n2 + n3) / 3 + me;
  setState({ ...state, me: media });

  const result = {
    Nome: nome,
    Nota1: n1,
    Nota2: n2,
    Nota3: n3,
    Media: media,
  };
  await adicionarDadosAoHistorico([result]);
};

const handleClear = (setState) => {
  setState({
    nome: "",
    n1: 0,
    n2: 0,
    n3: 0,
    me: 0,
  });
};

const handleNavigateToHistory = () => {
  navigateToHistory();
};

export { handleCalculate, handleClear, handleNavigateToHistory };
