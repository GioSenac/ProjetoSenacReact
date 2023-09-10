import Header from "../../Components/Header/Header.js";
import React from "react";
import Fundo from "../../Imagens/FundoLogin.gif";
import { useNavigate } from "react-router-dom";
import {BarraEmail, LabelEmail, PaginaFundo, LabelSenha, BarraSenha, LoginBotao, Registro} from "../PaginaLogin/PaginaLogin.jsx";


function PaginaLogin(){

        const navigate = useNavigate()
        const gotoRegistro = () => {
          navigate('/Registro')
        }
        const gotoInicio = () => {
          navigate('/Inicial')
        }

        return(
        <>
       
        <Header/>
        <PaginaFundo src={Fundo}/>
        <LabelEmail>E-mail</LabelEmail>
        <BarraEmail type="email" placeholder="Digite seu E-mail"></BarraEmail>
        <LabelSenha>Senha</LabelSenha>
        <BarraSenha type="password" placeholder="Digite sua senha"></BarraSenha>
        <LoginBotao onClick={gotoInicio}>Login</LoginBotao>
        <Registro onClick={gotoRegistro}>Não estou registrado.</Registro>

        
        

        </>
    )
}

export default PaginaLogin