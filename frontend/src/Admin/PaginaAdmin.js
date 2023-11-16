import React from "react";
import { BarraTitulo, LabelTitulo, LabelSinopse, BarraSinopse, LabelNota, BarraNota, LabelImagemFundo, ImagemFundo, LabelIcone, ImagemIcone, LabelPaginaInicial, ImagemPaginaInicial, LabelCorHeader, CorHeader, LabelCorSinopse, CorSinopse, LabelCorComentarios, CorComentarios } from "./StyledAdmin";
import Header from "../Components/Header/Header";

function PaginaAdmin() {
    return (
        <>
            <Header />
            <LabelTitulo>Titulo</LabelTitulo>
            <BarraTitulo
                type="input"
                placeholder="Insira o Titulo"
            />
            <LabelSinopse>Senha</LabelSinopse>
            <BarraSinopse
                type="input"
                placeholder="Digite sua senha"
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
        </>
    );
}

export default PaginaAdmin;