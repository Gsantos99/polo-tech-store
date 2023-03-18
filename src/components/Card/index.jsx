import React from 'react'
import Button from '../Button'
import './style.css'

export default function Card({title, price, description, image}) {
  return(
    <div className="card">
      <img alt='Foto do produto' src={image} width='280'/>
        <span>{title}</span><span>R$ {price} </span>
        <p>{description}</p>
        <Button title='Adicionar ao carrinho' estado='sucess'/>
        </div>
  )
}