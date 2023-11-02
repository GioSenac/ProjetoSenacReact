import Header from "../../Components/Header/Header.js";
import React, { useState } from "react";
import Fundo from "../../Imagens/FundoLogin.gif";
import { useNavigate } from "react-router-dom";
import {BarraEmail, LabelEmail, PaginaFundo, LabelSenha, BarraSenha, LoginBotao, Registro} from "../PaginaLogin/PaginaLogin.jsx";


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
      
      const rotasInfo = (token)=>(
        localStorage.setItem('token', token),
        localStorage.setItem('email', email)
      )

        const handleSubmit = async (e) => {
          e.preventDefault();

          const data = {
            email,
            senha
          }
          //verificar se esta pegando os valores do formulario
          console.log(data);

          const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(data)
            .then(response=>{
              console.log(response.data)
              rotasInfo(response.data.token)
              navigate('Inicio')
            })
          })
          
          console.log(response);
        }

        return(
        <>
       
        <Header/>
        <PaginaFundo src={Fundo}/>
        <form onSubmit={handleSubmit}>
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

          <LoginBotao type="submit" onClick={gotoInicio}>Login</LoginBotao>
          <Registro onClick={gotoRegistro}>Não estou registrado.</Registro>
        </form>    
        

        </>
    )
}

export default PaginaLogin