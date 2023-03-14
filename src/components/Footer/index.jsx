import React from 'react'
import logoImg from '../../assets/americanas.png'
import './style.css'

export default function Footer() {
  return(<>
  <footer>
    <a href="https://polotech.americanas.io/" target="_blank" rel="noreferrer" >
        <img src={logoImg} alt="Logo Polo Tech" height="50"/>
    </a>
</footer>

 </>)
}