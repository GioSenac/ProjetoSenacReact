import React from "react";
import { Routes, Route } from "react-router-dom";
import PaginaLogin from "../../Paginas/PaginaLogin/PaginaLogin"
import PaginaRegistro from "../../Paginas/PaginaRegistro/PaginaRegistro";
import PaginaInicial from "../../Paginas/PaginaInicial/PaginaInicial";
import PaginaSonicFrontiers from "../../Paginas/PaginaSonicFrontiers/PaginaSonicFrontiers";
import FinalFantasyVII from "../../Paginas/PaginaFinalFantasy/FinalFantasyVII";
import PaginaPersona5 from "../../Paginas/PaginaPersona5/PaginaPersona5";

function Rota() {

    return (
        <>

            <Routes>
                <Route index element={<PaginaLogin />} />
                <Route path="Login" element={<PaginaLogin/>}/>
                <Route path="Registro" element={<PaginaRegistro/>}/>
                <Route path="Inicial" element={<PaginaInicial/>}/>
                <Route path="SonicFrontiers" element={<PaginaSonicFrontiers/>}/>
                <Route path="FinalFantasyVII" element={<FinalFantasyVII/>}/>
                <Route path="Persona5" element={<PaginaPersona5/>}/>
            </Routes>

        </>

    )
}

export default Rota
