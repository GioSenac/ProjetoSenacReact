
import Header from "../../Components/Header/Header.js";
import React from "react";
import Fundo from "../../Imagens/FundoRegistro.gif";
import { useNavigate } from "react-router-dom";
import { BarraEmail, LabelEmail, PaginaFundo, LabelSenha, BarraSenha, LoginBotao, RegistroLogin } from "../PaginaRegistro/PaginaRegistro.jsx";

function PaginaRegistro() {


  const Registro = () => {
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email,
        password,
      };
      await api.post("/user/create", data);
      alert("Usuário criado com sucesso!");
    };


  const navigate = useNavigate()
    const gotoLogin = () => {
      navigate('/Login')
    }
    const gotoInicio = () => {
      navigate('/Inicial')
    }

    return (
      <>

        <Header />

        <PaginaFundo src={Fundo} />

        <form onSubmit={handleSubmit}>

          <LabelEmail>E-mail</LabelEmail>

          <BarraEmail type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >

          </BarraEmail>

          <LabelSenha>Senha</LabelSenha>

          <BarraSenha type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setSenha(e.target.value)}>

          </BarraSenha>

          <LoginBotao type="submit">Registrar</LoginBotao>

          <RegistroLogin onClick={gotoLogin}>Já estou registrado.</RegistroLogin>

        </form>




      </>
    )
  }
}

export default PaginaRegistro