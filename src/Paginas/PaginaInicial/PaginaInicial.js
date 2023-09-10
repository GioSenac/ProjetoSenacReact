import Header from "../../Components/Header/Header.js";
import React from "react";
import { Fundo, AreaConteudo, SonicFrontiersTexto, TituloConteudo, SonicFrontiersImagem, FinalFantasyTexto, FinalFantasyImagem, Persona5Texto, Persona5Imagem } from "./PaginaInicial.jsx"
import { useNavigate } from "react-router-dom";
import PaginaFundo from "../../Imagens/FundoInicial.gif"
import SonicFrontiers from "../../Imagens/SonicFrontiersInicial.png";
import FinalFantasy from "../../Imagens/FinalFantasyInicial.png"
import Persona5 from "../../Imagens/Persona5Inicial.png"

function PaginaInicial(){

    const navigate = useNavigate()
        const gotoSonicFrontiers = () => {
          navigate('/SonicFrontiers')
        }
        const gotoFinalFantasyVII = () => {
          navigate('/FinalFantasyVII')
        }

        const gotoPersona5 = () => {
            navigate('/Persona5')
          }
  
    return(
        <>
        <Header/>

        <Fundo src={PaginaFundo}/>

        <AreaConteudo>

            <TituloConteudo>Jogos Recentes</TituloConteudo>

            <SonicFrontiersTexto onClick={gotoSonicFrontiers}>Sonic Frontiers</SonicFrontiersTexto>

            <SonicFrontiersImagem src={SonicFrontiers} onClick={gotoSonicFrontiers}/>

            <FinalFantasyTexto onClick={gotoFinalFantasyVII}>Final Fantasy VII Remake: Intergrade</FinalFantasyTexto>

            <FinalFantasyImagem src={FinalFantasy} onClick={gotoFinalFantasyVII}/>

            <Persona5Texto onClick={gotoPersona5}>Persona 5 Royal</Persona5Texto>

            <Persona5Imagem src={Persona5} onClick={gotoPersona5}/>




        
        
        </AreaConteudo>

        </>
    )
    }

export default PaginaInicial