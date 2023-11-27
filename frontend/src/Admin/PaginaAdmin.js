import React from "react";
import { Fundo, BarraTitulo, LabelTitulo, LabelSinopse, BarraSinopse, LabelNotaAntiConsumidora, LabelNotaEmocional, BarraNotaAntiConsumidor, BarraNotaEmocional, LabelImagemFundo, ImagemFundo, LabelIcone, ImagemIcone, LabelPaginaInicial, ImagemPaginaInicial, LabelCorHeader, CorHeader, LabelCorSinopse, CorSinopse, LabelCorComentarios, CorComentarios, Container, Botao } from "./StyledAdmin";
import Header from "../Components/Header/Header";
import FundoAdmin from "../Imagens/FundoAdmin.gif"
import { useState } from "react";
import axios from "axios";

function PaginaAdmin() {
    const [Titulo, setTitulo] = useState("")
    const [Sinopse, setSinopse] = useState("")
    const [NotaAntiConsumidora, setNotaAntiConsumidora] = useState(null)
    const [NotaEmocional, setNotaEmocional] = useState(null)
    const [ImagemDoFundo, setImagemDoFundo] = useState()
    const [ImagemDoIcone, setImagemDoIcone] = useState()
    const [ImagemPaginaPrincipal, setImagemPaginaPrincipal] = useState()
    const [CorDoHeader, setCorDoHeader] = useState("")
    const [CorDaSinopse, setCorDaSinopse] = useState("")
    const [CorDosComentarios, setCorDosComentarios] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let formData = new FormData();
    
        // colocar os formData para todas as informações da tabela de posts
        formData.append('files', ImagemDoFundo);
        formData.append('files', ImagemDoIcone);
        formData.append('files', ImagemPaginaPrincipal);
        formData.append('titulo', Titulo);
        formData.append('notasAntiConsumidoras', NotaAntiConsumidora);
        formData.append('notasEmocionais', NotaEmocional)
        formData.append('sinopse', Sinopse);
        formData.append('corHeader', CorDoHeader);
        formData.append('corSinopse', CorDaSinopse);
        formData.append('corComentarios', CorDosComentarios);
    console.log(formData);
        try {
            const response = await axios.post("http://localhost:3008/api/posts/posts/create", formData);
            console.log(response);
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                console.log("server responded");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        }
    };
    
    return (
        <>

            <Fundo src={FundoAdmin} />

            <Header />

            <Container>

                <form>

                    <LabelTitulo>Titulo</LabelTitulo>

                    <BarraTitulo
                        type="input"
                        placeholder="Insira o Titulo"
                        value={Titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />

                    <LabelSinopse>Sinopse</LabelSinopse>

                    <BarraSinopse
                        type="input"
                        placeholder="Insira a sua sinopse"
                        onChange={(e) => setSinopse(e.target.value)}
                        value={Sinopse}
                    />


                    <LabelNotaAntiConsumidora>Atribuir uma nota</LabelNotaAntiConsumidora>
                    <BarraNotaAntiConsumidor
                        type="number"
                        value={NotaAntiConsumidora}
                        onChange={(e) => setNotaAntiConsumidora(e.target.value)}
                        min="0"
                        max="10"
                    />

                    <LabelNotaEmocional>Atribua uma nota pro emocional</LabelNotaEmocional>

                    <BarraNotaEmocional
                        type="number"
                        value={NotaEmocional}
                        onChange={(e) => setNotaEmocional(e.target.value)}
                        min="0"
                        max="10"
                    />

                    <LabelImagemFundo>Selecione um Fundo</LabelImagemFundo>
                    <ImagemFundo
                        type="file"
                        //value={ImagemDoFundo}
                        onChange={(e) => setImagemDoFundo(e.target.files[0])}
                    />


                    <LabelIcone>Escolha um Ícone</LabelIcone>
                    <ImagemIcone
                        type="file"
                        // value={ImagemDoIcone}
                        onChange={(e) => setImagemDoIcone(e.target.files[0])}
                    />

                    <LabelPaginaInicial>Escolha uma foto para a pagina inicial</LabelPaginaInicial>
                    <ImagemPaginaInicial
                        type="file"
                        // value={ImagemPaginaPrincipal}
                        onChange={(e) => setImagemPaginaPrincipal(e.target.files[0])}
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

                    <Botao onClick={handleSubmit}>Postar</Botao>

                </form>

            </Container>

        </>
    );
}

export default PaginaAdmin;