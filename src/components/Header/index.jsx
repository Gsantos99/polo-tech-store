import React from "react";
import "./style.css"
import logoImg from '../../assets/americanas.png'
import { Link } from "react-router-dom";

// TODO Inserir icone de carrinho com número de itens dentro (que atualiza)
// TODO Colocar os componentes para serem rederizados no HEADER

export default function Header({color,title}) {
return(<>
<header style={{backgroundColor:color}}>
        <div className="header-left">
            <img src={logoImg} alt="Logo Polo Tech" height="30"/>
            <div>
                <Link to={`/`}>
                <h1 >{title}</h1>
                </Link>
            </div>
        </div>
    </header>
</>)
}