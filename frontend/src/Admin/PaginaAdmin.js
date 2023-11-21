import React from "react";
import { Fundo, BarraTitulo, LabelTitulo, LabelSinopse, BarraSinopse, LabelNota, BarraNota, LabelImagemFundo, ImagemFundo, LabelIcone, ImagemIcone, LabelPaginaInicial, ImagemPaginaInicial, LabelCorHeader, CorHeader, LabelCorSinopse, CorSinopse, LabelCorComentarios, CorComentarios, Container, Botao } from "./StyledAdmin";
import Header from "../Components/Header/Header";
import FundoAdmin from "../Imagens/FundoAdmin.gif"
import { useState } from "react";
import axios from "axios"
import getConfigs from "../libs/config";

function PaginaAdmin() {

    const [Titulo, setTitulo] = useState("")
    const [Sinopse, setSinopse] = useState("")
    const [Nota, setNota] = useState("")
    const [ImagemDoFundo, setImagemDoFundo] = useState("")
    const [ImagemDoIcone, setImagemDoIcone] = useState("")
    const [ImagemPaginaPrincipal, setImagemPaginaPrincipal] = useState("")
    const [CorDoHeader, setCorDoHeader] = useState("")
    const [CorDaSinopse, setCorDaSinopse] = useState("")
    const [CorDosComentarios, setCorDosComentarios] = useState("")

    const [valor, setValor] = useState();

    const handleChange = (event) => {
        let novoValor = parseInt(event.target.value, 10);

        if (novoValor < 0) {
            novoValor = 0;
        } else if (novoValor > 10) {
            novoValor = 10;
        }

        setValor(novoValor);
    }

    const handleUpload = async (e) => {
        e.preventDefault();

        const data = {
            Titulo,
            Sinopse,
            Nota,
            ImagemDoFundo,
            ImagemDoIcone,
            ImagemPaginaPrincipal,
            CorDoHeader,
            CorDaSinopse,
            CorDosComentarios
        }

        console.log(data);

        const response = await axios.post(getConfigs().serverHost+"/api/posts", data);
    }

    return (
        <>

            <Fundo src={FundoAdmin} />

            <Header />

            <Container>
                
                <form onSubmit={handleUpload}>

                <LabelTitulo>Titulo</LabelTitulo>

                <BarraTitulo
                    type="input"
                    placeholder="Insira o Titulo"
                    value={Titulo}
                    onChange={(e) => setTitulo}
                />

                <LabelSinopse>Sinopse</LabelSinopse>

                <BarraSinopse
                    type="input"
                    placeholder="Insira a sua sinopse"
                    onChange={(e) => setSinopse}
                    value={Sinopse}
                />


                <LabelNota>Atribuir uma nota</LabelNota>
                <BarraNota
                    type="number"
                    value={Nota}
                    onChange={handleChange}
                    min="0"
                    max="10"
                />

                <LabelImagemFundo>Selecione um Fundo</LabelImagemFundo>
                <ImagemFundo
                    type="file"
                    value={ImagemDoFundo}
                    onChange={(e) => setImagemDoFundo(e.target.value)}
                />


                <LabelIcone>Escolha um Ícone</LabelIcone>
                <ImagemIcone
                    type="file"
                    value={ImagemDoIcone}
                    onChange={(e) => setImagemDoIcone(e.target.value)}
                />

                <LabelPaginaInicial>Escolha uma foto para a pagina inicial</LabelPaginaInicial>
                <ImagemPaginaInicial
                    type="file"
                    value={ImagemPaginaPrincipal}
                    onChange={(e) => setImagemPaginaPrincipal(e.target.value)}
                />

                <LabelCorHeader>Escolha uma cor pro header</LabelCorHeader>
                <CorHeader
                    type="color"
                    value={CorDoHeader}
                    onChange={(e) => setCorDoHeader(e.target.value)}
                />

                <LabelCorSinopse>Escolha a cor da sessão da sinopse</LabelCorSinopse>
                <CorSinopse
                    type="color"
                    value={CorDaSinopse}
                    onChange={(e) => setCorDaSinopse(e.target.value)}
                />


                <LabelCorComentarios>Insira uma cor para os comentarios</LabelCorComentarios>
                <CorComentarios
                    type="color"
                    value={CorDosComentarios}
                    onChange={(e) => setCorDosComentarios(e.target.value)}
                />

                <Botao type="submit">Postar</Botao>

            </form>

            </Container>

        </>
    );
}

export default PaginaAdmin;