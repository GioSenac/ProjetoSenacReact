import logo from "../../Imagens/Logo.png"
import React from "react"
import {HeaderC, StyledLogo, GameSense} from "./StyledHeader.jsx"

function Header() {
    return(
        <HeaderC>
            <StyledLogo src={logo}/>
            <GameSense>GameSense</GameSense>
        </HeaderC>
    )
}

export default Header