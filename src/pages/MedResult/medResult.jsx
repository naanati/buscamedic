import { useState } from 'react';
import './medResult.css';

function MedResult() {
   // definindo 'medic' para armazenar os resultados da pesquisa
  const [medic, resultMedic] = useState(null);
   // definindo uma função para realizar a pesquisa do medicamento
  const medicDisp = (medicamento) => {
    // conectando a pesquisa e o resultado
    console.log('Pesquisando medicamento:', medicamento);

    // inserindo dados para aparecer no resultado da pesquisa
    resultMedic({
      nome: 'Dipirona',
      dataValidade: '31/12/2023',
      unidadePosto: '1 - medic',
      quantidade: 10,
      descricao: 'Medic medic medic medic medic medic medic medic',
    });
  };

    // função para voltar à página de pesquisa
  const retornVolt = () => {
    // limpar o resultado da pesquisa ao voltar para página de pesquisa
    resultMedic(null);
  };

  return (
    <div className="container-Research">
      {medic ? (
        // retornando os resultados da Pesquisa
        <div className="result-container">
          <h2>Resultados da Pesquisa</h2>
          <div>
            <p>Nome: {medic.nome}</p>
            <p>Data de Validade: {medic.dataValidade}</p>
            <p>Unidade do Posto: {medic.unidadePosto}</p>
            <p>Quantidade: {medic.quantidade}</p>
            <p>Descrição do Medicamento: {medic.descricao}</p>
          </div>
          <button onClick={retornVolt} className="back-button">
            Voltar
          </button>
        </div>
      ) : (
        // página para input de pesquisa de Medicamento
        <div className="rectangle-Research">
          <img src="src/img/pesquisa.png" alt="Ícone do Medicamento" className="icon-Research" />
          <h2 className="title-Research">Pesquisa de Medicamento</h2>
          <div className="search-Research-box">
            <input
              type="text"
              placeholder="Digite o nome do medicamento"
              className="search-Research"
            />
            <button
              onClick={() => medicDisp(document.querySelector('.search-Research').value)}
              className="search-Research-btn"> Pesquisa</button>
          </div>
        </div>
       )}
       </div>
  );
}

export default MedResult;