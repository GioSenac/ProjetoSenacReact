
import Header from "../../Components/Header/Header.js";
import React from "react";
import Fundo from "../../Imagens/FundoRegistro.gif";
import { useNavigate } from "react-router-dom";
import {BarraEmail, LabelEmail, PaginaFundo, LabelSenha, BarraSenha, LoginBotao, Registro} from "../PaginaRegistro/PaginaRegistro.jsx";

function PaginaRegistro(){

        const navigate = useNavigate()
        const gotoLogin = () => {
          navigate('/Login')
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
        <LoginBotao onClick={gotoInicio}>Registrar</LoginBotao>
        <Registro onClick={gotoLogin}>Já estou registrado.</Registro>

        
        

        </>
    )
}


export default PaginaRegistro