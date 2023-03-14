import React from "react";
import "./style.css"
import logoImg from '../../assets/americanas.png'

export default function Header() {
return(<>
<header>
        <div className="header-left">
            <img src={logoImg} alt="Logo Polo Tech" height="30"/>
            <div>
                <h1>Loja Online</h1>
            </div>
        </div>
    </header>
</>)
}