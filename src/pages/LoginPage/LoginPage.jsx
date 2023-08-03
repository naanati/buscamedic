import "./Login.css"

const LoginPage = () => {
  return (
    // Container principal da página de login. 
    <div className="login-page-container"> 
      <div className="login-content-container">
        {/* Div com um retângulo à esquerda*/}
        <div className="retangulo-esquerdo">
          <div className="contato-image">
            <img src="src/img/loginposto.png" alt="Imagem de contato" />
            <h2>BuscMed</h2>
          </div>
          
        </div>
        {/* Div com um retângulo à direita, login */}
        <div className="retangulo-direito">
        <div className="logo-image">
            <img src="src/img/LOGO BUSCMED.png" alt="Imagemlogo" />
            </div>
            {/* Formulário de login. */}
          <form className="login-form">
          <p className="acesso-title">Acesse sua conta</p>
            <div className="login-input">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className="input" placeholder="seuemail@exemplo.com" />
            </div>
            <div className="login-input">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" className="input" placeholder="********" />
              <div className="login-password">
              </div>
            </div>
            <button className="login-btn">Login</button>
            <button className="btn-volta">Voltar</button>
          </form>
          <div className="social-login">
            <p>Ou faça login com:</p>
            {/* Div para login com redes sociais. */}
            <div className="social-icons">
              <a href="#google-login">
                <img src="src/img/google-plus.jpg" alt="Google Icon" />
              </a>
              <a href="#facebook-login">
                <img src='src/img/facebook-logo-fundo.png' alt="Facebook Icon" />
              </a>
            </div>
          </div>
          <div className="register-link">
            <span>Não tem login?</span>
            <a href="#">Cadastre-se</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;



