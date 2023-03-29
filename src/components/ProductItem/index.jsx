import React from "react";
import Button from "../Button";
import './style.css'

export default function ProductItem({title, price, avatar,id}) {
   
  function onRemove(){
    alert('Item removido!')
  }

  
  return(
    <div className="card productItem" id={id}>
      <img alt='Foto do produto' src={avatar} />
        <span>{title}</span><span>R$ {price} </span>
         <Button title='Remover do carinho' onClick={onRemove} />
        </div>
  )

}