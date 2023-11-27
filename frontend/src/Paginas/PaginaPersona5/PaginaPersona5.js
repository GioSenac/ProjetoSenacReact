import React from "react";
import { HeaderC, StyledLogo, GameSense, Persona5Fundo, SecaoNota, Nota1, Titulo1, Divisao1, Nota2, Titulo2, Divisao2, Nota3, Titulo3, Divisao3, Nota4, Titulo4, Persona5Icon, Sinopse, SinopseTexto, SecaoComentario, ComentarioTitulo, NomeUsuario1, IconUsuario1, CirculoPerfil1, ComentarioTexto1, NomeUsuario2, IconUsuario2, CirculoUsuario2, TextoComentario2, ModalButton, LabelNotaAntiConsumidora, BarraNotaAntiConsumidor, LabelNotaEmocional, BarraNotaEmocional, BarraComentarios, ModalTexto, ModalButtonComentarios, BotaoPostar, BotaoPostarNota } from "./PaginaPersona5.jsx";
import { useNavigate } from "react-router-dom";
import logo from "../../Imagens/Logo.png";
import FundoPersona5 from "../../Imagens/Persona5Fundo.png";
import Icon from "../../Imagens/Persona5Logo.png";
import UsuarioIcon from "../../Imagens/UsuarioIcon.png";
import Modal from "../../Components/Modal/Modal.jsx"
import { useState } from "react"

function Persona5() {

    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [NotaAntiConsumidora, setNotaAntiConsumidora] = useState("")
    const [NotaEmocional, setNotaEmocional] = useState("")
    const [Comentarios, setComentarios] = useState()
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

    const gotoPerfil = () => {
        navigate('/Perfil')
    }

    const openModalNota = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModalNota = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto'
    };

    const openCommentModal = () => {
        setIsCommentModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeCommentModal = () => {
        setIsCommentModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>

            <HeaderC>
                <StyledLogo src={logo} />
                <GameSense>GameSense</GameSense>
            </HeaderC>

            <Persona5Fundo src={FundoPersona5} />

            <Persona5Icon src={Icon} />

            <SecaoNota>

                <Nota1>0</Nota1>

                <Titulo1>Nota de Exploração do Site</Titulo1>

                <Divisao1 />

                <Nota2>0</Nota2>

                <Titulo2>Nota para o psicológico do jogador dada pelo site</Titulo2>

                <Divisao2 />

                <Nota3>0</Nota3>

                <Titulo3>Nota de Exploração dada pelos jogadores</Titulo3>

                <Divisao3 />

                <Nota4>0</Nota4>

                <Titulo4>Nota para o psicológico do jogador dada pelos usuários</Titulo4>

            </SecaoNota>

            <ModalButton onClick={openModalNota} style={{ backgroundColor: '#790606' }}>Avalie o jogo</ModalButton>

            {/* Componente Modal */}

            <Modal isOpen={isModalOpen} onClose={closeModalNota}>

                {/* Conteúdo do modal */}

                <LabelNotaAntiConsumidora>Que nota você avalia o anti-consumidorismo do jogo?</LabelNotaAntiConsumidora>

                <BarraNotaAntiConsumidor
                    type="number"
                    value={NotaAntiConsumidora}
                    onChange={(e) =>  setNotaAntiConsumidora(e.target.value)}
                    min="0"
                    max="10"
                />

                <LabelNotaEmocional>Que nota você avalia o impacto emocional causado pelo jogo?</LabelNotaEmocional>

                <BarraNotaEmocional
                    type="number"
                    value={NotaEmocional}
                    onChange={(e) => setNotaEmocional(e.target.value)}
                    min="0"
                    max="10"
                />

                <BotaoPostarNota>Postar</BotaoPostarNota>

            </Modal>

            <Sinopse>
                <SinopseTexto>“Persona 5 acontece na Tóquio de hoje e segue o protagonista Joker após sua transferência para a Academia Shujin após ser colocado em liberdade condicional por um assalto do qual ele foi falsamente acusado. Durante o curso de um ano escolar, ele e outros estudantes despertam seus poderes de Persona, tornando-se um grupo de justiceiros secretos conhecidos como os “Phantom Thieves”. Eles exploram o Metaverso, um reino sobrenatural que consiste na manifestação física dos desejos subconscientes da humanidade, para mudar a intenção maléfica dos corações dos adultos.”</SinopseTexto>
            </Sinopse>

            <ModalButtonComentarios onClick={openCommentModal} style={{ backgroundColor: '#430303' }}>Adicionar Comentário</ModalButtonComentarios>

            {/* Componente Modal de Comentários */}
            <Modal isOpen={isCommentModalOpen} onClose={closeCommentModal}>

                <ModalTexto>Adicione um comentário</ModalTexto>
                <BarraComentarios
                    type='text'
                    value={Comentarios}
                    maxLength={200}
                    onChange={(e) => {
                        const newValue = e.target.value.slice(0, 200);
                        setComentarios(newValue);
                    }}
                    style={{ whiteSpace: 'pre-wrap' }}
                />

                <BotaoPostar>Postar</BotaoPostar>
            </Modal>


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

export default Persona5