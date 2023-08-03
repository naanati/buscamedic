import "./MedRegister.css";

 const MedRegister = () => {
    return (
        <div className="container-medicamentos">

            <div className= "form-register">
                <form action="#">
                    <div className= "form-register">
                        <div className="title">
                            <div className="register-form">
                                <h1>Cadastro Medicamentos</h1>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="one-box">
                        <div className="input-container">
                            <label htmlFor= "name">Nome do medicamento</label>
                            <input id="name" type="text" name="name" required/>
                        </div>
                    </div>
                    <div className="one-box">
                        <div className="input-container">
                            <label htmlFor= "date">Data de validade</label>
                            <input id="validade" type="date" name="date"  required/>
                        </div>  
                    </div>
                    <div className="two-box">
                        <div className="input-container">
                            <label htmlFor= "name">Quantidade</label>
                            <input id="name" type="text" name="name"  required/>
                        </div>
                        <div className="input-container">
                            <label htmlFor= "">Unidade Posto de Saúde</label>
                            <input id="name" type="text" name="estado"  required/>
                        </div>
                    </div>
                    <div className="descr-box">
                        <div className="input-container">
                            <label htmlFor= "name">Descrição</label>
                            <input id="description-medication" type="text" name="name" placeholder="" required/>
                        </div>
                    </div>
                    <div className="one-box">
                        <div className="input-container">
                            <label htmlFor= "name">Funcionário responsável</label>
                            <input id="name" type="text" name="name" required/>
                        </div>
                    </div>
                    <div className="cadastrar-button">
                        <button><a href="#">Cadastrar</a></button>
                        <div className="voltar-button">
                            <button><a href="#">Voltar</a></button>
                            <p>Já tem cadastro? <span>Faça seu login</span></p>
                            <h5>Excluir cadastro</h5>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MedRegister;