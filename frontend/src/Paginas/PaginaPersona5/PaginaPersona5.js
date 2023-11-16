import React from "react";
import { HeaderC, StyledLogo, GameSense, Persona5Fundo, SecaoNota, Nota1, Titulo1, Divisao1, Nota2, Titulo2, Divisao2, Nota3, Titulo3, Divisao3, Nota4, Titulo4, Persona5Icon, Sinopse, SinopseTexto, SecaoComentario, ComentarioTitulo, NomeUsuario1, IconUsuario1, CirculoPerfil1, ComentarioTexto1, NomeUsuario2, IconUsuario2, CirculoUsuario2, TextoComentario2  } from "./PaginaPersona5.jsx";
import { useNavigate } from "react-router-dom";
import logo from "../../Imagens/Logo.png";
import FundoPersona5 from "../../Imagens/Persona5Fundo.png";
import Icon from "../../Imagens/Persona5Logo.png";
import UsuarioIcon from "../../Imagens/UsuarioIcon.png";


function Persona5 () {
    return(
    <>

        <HeaderC>
            <StyledLogo src={logo}/>
            <GameSense>GameSense</GameSense>
        </HeaderC>

        <Persona5Fundo src={FundoPersona5}/>

        <Persona5Icon src={Icon}/>

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
            <SinopseTexto>“Persona 5 acontece na Tóquio de hoje e segue o protagonista Joker após sua transferência para a Academia Shujin após ser colocado em liberdade condicional por um assalto do qual ele foi falsamente acusado. Durante o curso de um ano escolar, ele e outros estudantes despertam seus poderes de Persona, tornando-se um grupo de justiceiros secretos conhecidos como os “Phantom Thieves”. Eles exploram o Metaverso, um reino sobrenatural que consiste na manifestação física dos desejos subconscientes da humanidade, para mudar a intenção maléfica dos corações dos adultos.”</SinopseTexto>
        </Sinopse>

        <SecaoComentario>

            <ComentarioTitulo>Comentários</ComentarioTitulo>

            <NomeUsuario1>Anônimo</NomeUsuario1>

            <ComentarioTexto1>A minha experiencia com o jogo foi muito bacana, ele é bem feito e não me cobrou dinheiro de verdade para joga-lo inteiro que nem os jogos que estou acostumado a jogar</ComentarioTexto1>

            <IconUsuario1 src={UsuarioIcon}/>

            <CirculoPerfil1/>

            <NomeUsuario2>Anônimo</NomeUsuario2>

            <TextoComentario2>Adorei o jogo, toda vez que eu jogo sempre consigo relaxar.</TextoComentario2>

            <IconUsuario2 src={UsuarioIcon}/>

            <CirculoUsuario2/>



        </SecaoComentario>

    </>

    )
}

export default Persona5