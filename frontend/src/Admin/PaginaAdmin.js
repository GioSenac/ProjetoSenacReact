import React from "react";
import { Fundo, BarraTitulo, LabelTitulo, LabelSinopse, BarraSinopse, LabelNota, BarraNota, LabelImagemFundo, ImagemFundo, LabelIcone, ImagemIcone, LabelPaginaInicial, ImagemPaginaInicial, LabelCorHeader, CorHeader, LabelCorSinopse, CorSinopse, LabelCorComentarios, CorComentarios, Container, Botao } from "./StyledAdmin";
import Header from "../Components/Header/Header";
import FundoAdmin from "../Imagens/FundoAdmin.gif"

function PaginaAdmin() {
    return (
        <>

            <Fundo src={FundoAdmin} />

            <Header />

            <Container>

                <LabelTitulo>Titulo</LabelTitulo>

                <BarraTitulo
                    type="input"
                    placeholder="Insira o Titulo"
                />

                <LabelSinopse>Sinopse</LabelSinopse>

                <BarraSinopse
                    type="input"
                    placeholder="Insira a sua sinopse"
                />


                <LabelNota>Atribuir uma nota</LabelNota>
                <BarraNota
                    type="number"
                />

                <LabelImagemFundo>Selecione um Fundo</LabelImagemFundo>
                <ImagemFundo
                    type="file"
                />


                <LabelIcone>Escolha um Ícone</LabelIcone>
                <ImagemIcone
                    type="file"
                />

                <LabelPaginaInicial>Escolha uma foto para a pagina inicial</LabelPaginaInicial>
                <ImagemPaginaInicial
                    type="file"
                />
                <LabelCorHeader>Escolha uma cor pro header</LabelCorHeader>
                <CorHeader
                    type="color"
                />

                <LabelCorSinopse>Escolha a cor da sessão da sinopse</LabelCorSinopse>
                <CorSinopse
                    type="color"
                />


                <LabelCorComentarios>Insira uma cor para os comentarios</LabelCorComentarios>
                <CorComentarios
                    type="color"
                />

                <Botao>Postar</Botao>

            </Container>
        </>
    );
}

export default PaginaAdmin;