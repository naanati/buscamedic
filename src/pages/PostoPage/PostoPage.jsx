import './PostoPage.css';

const PostoPage = () => {
  const handleSair = () => {
    // Aqui você pode adicionar a lógica para efetuar o logout do usuário ou qualquer outra ação de sair do sistema
    // Por exemplo, redirecionar o usuário para a tela de login ou fazer uma chamada para o backend para encerrar a sessão
    // Implemente a ação de sair de acordo com a sua aplicação
    console.log('Usuário saiu do sistema');
  };

  return (
    // Contêiner principal da página de perfil do posto
    <div className="profile-page">
      {/* Retângulo com o logo, título e botões do perfil */}
      <div className="profile-box">
        <img src="src/img/LOGO BUSCMED.png" alt="Ícone" width="80px" height="80px" />
        <h2>Busca de Medicamentos</h2>

        <div className="buttons-container">
          {/* Primeira fileira de botões */}
          <div className="button-row">
            <div className="button">
              <img src="src/img/hospital.png" alt="Ícone de perfil" width="25px" height="25px" />
              <p>Perfil</p>
            </div>
            <div className="button">
              <img src="src/img/remedio.png" alt="Ícone de medicamentos" width="25px" height="25px" />
              <p>Medicamentos</p>
            </div>
            <div className="button">
              <img src="src/img/comprimido.png" alt="Ícone de cadastro medicamento" width="25px" height="25px" />
              <p>Cadastro Medicamento</p>
            </div>
          </div>
          {/* Botão de sair */}
          <div className="btn-sair" onClick={handleSair}>
          <button className="bttn-sair">Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostoPage;
