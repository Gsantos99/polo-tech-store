import React from "react";
import "./style.css"
import logoImg from '../../assets/americanas.png'

export default function Header(props) {
return(<>
<header style={{backgroundColor:props.color}}>
        <div className="header-left">
            <img src={logoImg} alt="Logo Polo Tech" height="30"/>
            <div>
                <h1>{props.titulo}</h1>
            </div>
        </div>
    </header>
</>)
}