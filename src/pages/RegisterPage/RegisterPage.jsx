import "./RegisterPage.css";

 const RegisterPage = () => {
    return (
        <div className="container-cadastro">

            <div className= "form-header">
                <form action="#">
                    <div className= "form-post">
                        <div className="title">
                            <br />
                            <div className="post-form">
                                <h1>Cadastre-se</h1>
                                <div className="login-button">
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                <div className="phone-box">
                    <div className="input-box">
                        <label htmlFor= "name">Funcionário responsável</label>
                        <input id="name" type="text" name="name"  required/>
                    </div>
                </div>
                 <div className="senhas-box">
                    <div className="input-box">
                        <label htmlFor= "name">Nome posto de saúde</label>
                        <input id="name" type="text" name="name"  required/>
                    </div>  
                    <div className="input-box">
                        <label htmlFor= "name">Unidade posto de saúde</label>
                        <input id="name" type="text" name="name"  required/>
                    </div>
                </div>
                    <div className="senhas-box">
                        <div className="input-box">
                            <label htmlFor= "name">CEP</label>
                            <input id="name" type="text" name="xxxxx-xxx" placeholder="xxxxx-xxx"  required/>
                        </div>  
                        <div className="input-box">
                            <label htmlFor= "name">Endereço</label>
                            <input id="name" type="text" name="name"  required/>
                        </div>
                    </div>
                    <div className="senhas-box">
                         <div className="input-box">
                            <label htmlFor= "name">Estado</label>
                            <input id="name" type="text" name="name"  required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor= "">Cidade</label>
                            <input id="estado" type="text" name="estado"  required/>
                        </div>
                    </div>
                    <div className="senhas-box">
                        <div className="input-box">
                            <label htmlFor= "name">E-mail</label>
                            <input id="name" type="text" name="name"  required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor= "number">Telefone</label>
                            <input id="number" type="phone" name="phone" placeholder="(xx) xxxxx-xxxx" required/>
                        </div>
                    </div>
                    <div className="senhas-box">
                        <div className="input-box">
                            <label htmlFor= "password">Senha</label>
                            <input id="password" type="password" name="password"  required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor= "password">Confirme sua senha</label>
                            <input id="Confirmpassword" type="password" name="Confirmpassword" required/>
                        </div>
                    </div>
                    <div className="continue-button">
                        <button><a href="#">Cadastrar</a></button>
                    </div>
                    <div className="voltar-button">
                        <button><a href="#">Voltar</a></button>
                        <p>Já tem cadastro? <span>Faça seu login</span></p>
                        <h5>Excluir cadastro</h5>
                    </div>
                </form>
             </div>
            </div>

    );
}

export default RegisterPage;