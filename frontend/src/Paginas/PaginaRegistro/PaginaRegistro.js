import Header from "../../Components/Header/Header.js";
import React, {useState} from "react";
import Fundo from "../../Imagens/FundoRegistro.gif";
import { useNavigate } from "react-router-dom";
import { BarraEmail, LabelEmail, PaginaFundo, LabelSenha, BarraSenha, LoginBotao, RegistroLogin, LabelName, BarraName } from "../PaginaRegistro/PaginaRegistro.jsx";
import axios from "axios"

function PaginaRegistro() {

  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [name, setNome] = useState("")

  const navigate = useNavigate();
    const gotoLogin = () => {
      navigate('/Login')
    }


  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email,
        name,
        password,
      };

      const response = await axios.post("http://localhost:3000/api/user/create", data);
      if(response.data.success){
          alert("Usuário criado com sucesso!");
          navigate('/Login')
      }
    };
  


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

          <LabelName>Nome</LabelName>

          <BarraName type="name"
            placeholder="Digite seu nome"
            value={name}
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