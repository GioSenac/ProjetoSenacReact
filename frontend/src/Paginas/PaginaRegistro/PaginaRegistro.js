import React, {useState} from "react";
import Fundo from "../../Imagens/FundoRegistro.gif";
import { useNavigate } from "react-router-dom";
import { BarraEmail, LabelEmail, PaginaFundo, LabelSenha, BarraSenha, LoginBotao, RegistroLogin, LabelName, BarraName, Header } from "../PaginaRegistro/PaginaRegistro.jsx";
import axios from "axios"
import getConfigs from "../../libs/config.js";

function PaginaRegistro() {

  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [username, setNome] = useState("")

  const navigate = useNavigate();
    const gotoLogin = () => {
      navigate('/Login')
    }


  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email,
        username,
        password,
      };

      const response = await axios.post(getConfigs().serverHost+"/api/users", data);

      if (response.data.success) {
          alert("Usuário criado com sucesso!");
          navigate('/Login');
      }
    };
  


    return (
      <>

        <Header>GameSense</Header>

        <PaginaFundo src={Fundo} />

        <form onSubmit={handleSubmit}>

          <LabelEmail>E-mail</LabelEmail>

          <BarraEmail type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >

          </BarraEmail>

          <LabelName>Nome</LabelName>

          <BarraName type="name"
            placeholder="Digite seu nome"
            value={username}
            onChange={(e) => setNome(e.target.value)}
          ></BarraName>

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

export default PaginaRegistro;