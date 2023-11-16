import React from "react";
import { HeaderC, StyledLogo, GameSense, FinalFantasyFundo, SecaoNota, Nota1, Titulo1, Divisao1, Nota2, Titulo2, Divisao2, Nota3, Titulo3, Divisao3, Nota4, Titulo4, FinalFantasyIcon, Sinopse, SinopseTexto, SecaoComentario, ComentarioTitulo, NomeUsuario1, IconUsuario1, CirculoPerfil1, ComentarioTexto1, NomeUsuario2, IconUsuario2, CirculoUsuario2, TextoComentario2  } from "./FinalFantasyVII.jsx"
import { useNavigate } from "react-router-dom";
import logo from "../../Imagens/Logo.png";
import FundoFinalFantasy from "../../Imagens/FinalFantasyFundo.jpg";
import Icon from "../../Imagens/FinalFantasyVIILogo.png"
import UsuarioIcon from "../../Imagens/UsuarioIcon.png"


function FinalFantasyVII () {

    const navigate = useNavigate()
        const gotoPerfil = () => {
            navigate('/Perfil')
        }

    return(
    <>

        <HeaderC>
            <StyledLogo src={logo}/>
            <GameSense>GameSense</GameSense>
        </HeaderC>

        <FinalFantasyFundo src={FundoFinalFantasy}/>

        <FinalFantasyIcon src={Icon}/>

        <SecaoNota>
        
            <Nota1>0</Nota1>

            <Titulo1>Nota de Exploração do Site</Titulo1>

            <Divisao1/>

            <Nota2>0</Nota2>

            <Titulo2>Nota para o psicológico do jogador dada pelo site</Titulo2>

            <Divisao2/>

            <Nota3>0</Nota3>

            <Titulo3>Nota de Exploração dada pelos jogadores</Titulo3>

            <Divisao3/>

            <Nota4>0</Nota4>

            <Titulo4>Nota para o psicológico do jogador dada pelos usuários</Titulo4>

        </SecaoNota>

        <Sinopse>
            <SinopseTexto>“A história se passa na metrópole de Midgar e acompanha o mercenário Cloud Strife, que se junta a um grupo ecoterrorista em uma tentativa de impedir que a poderosa megacorporação Shinra use a essência vital do planeta como fonte de energia.”</SinopseTexto>
        </Sinopse>

        <SecaoComentario>

            <ComentarioTitulo>Comentários</ComentarioTitulo>

            <NomeUsuario1 onClick={gotoPerfil}>Anônimo</NomeUsuario1>

            <ComentarioTexto1>A minha experiencia com o jogo foi muito bacana, ele é bem feito e não me cobrou dinheiro de verdade para joga-lo inteiro que nem os jogos que estou acostumado a jogar</ComentarioTexto1>

            <IconUsuario1 src={UsuarioIcon} onClick={gotoPerfil}/>

            <CirculoPerfil1 onClick={gotoPerfil}/>

            <NomeUsuario2 onClick={gotoPerfil}>Anônimo</NomeUsuario2>

            <TextoComentario2>Adorei o jogo, toda vez que eu jogo sempre consigo relaxar.</TextoComentario2>

            <IconUsuario2 src={UsuarioIcon} onClick={gotoPerfil}/>

            <CirculoUsuario2 onClick={gotoPerfil}/>



        </SecaoComentario>

    </>

    )
}

export default FinalFantasyVII