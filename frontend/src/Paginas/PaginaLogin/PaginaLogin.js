import Header from "../../Components/Header/Header.js";
import Fundo from "../../Imagens/FundoLogin.gif";
import { useNavigate } from "react-router-dom";
import {BarraEmail, LabelEmail, PaginaFundo, LabelSenha, BarraSenha, LoginBotao, Registro} from "../PaginaLogin/PaginaLogin.jsx";
import { useState } from "react"
import axios from 'axios';

function PaginaLogin(){

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

        const navigate = useNavigate()
        const gotoRegistro = () => {
          navigate('/Registro')
        }

        const gotoInicio = () => {
          navigate('/Inicial')
        }

      const saveUserInfoLocalStorage =(token)=> {
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
      }

  const handleSubmit = async (e) => {
          e.preventDefault();

          const data = {
            email,
            senha
          }
          //verificar se esta pegando os valores do formulario
          console.log(data);

    const response = await axios.post('http://localhost:3008/api/auth/login', data);
      
    if(response.data.success) {
      localStorage.setItem('token', response.data.data[0].token);
      // pegar token
      // localStorage.getItem('token')
      navigate('/Inicial')
    }
    console.log(response.data);
    
  }

  return(
        <>
       
        <Header/>
        <PaginaFundo src={Fundo}/>
        <form>
          <LabelEmail>E-mail</LabelEmail>
          
          <BarraEmail 
            type="email" 
            placeholder="Digite seu E-mail"
            value={ email }
            onChange={(e) => setEmail(e.target.value)}>
          </BarraEmail>
          
          <LabelSenha>Senha</LabelSenha>
          <BarraSenha 
            type="password" 
            placeholder="Digite sua senha"
            value={ senha }
            onChange={(e) => setSenha(e.target.value)}>

          </BarraSenha>

          <LoginBotao onClick={handleSubmit}>Login</LoginBotao>
          <Registro onClick={gotoRegistro}>Não estou registrado.</Registro>
        </form>    
        

        </>
    )
}

export default PaginaLogin