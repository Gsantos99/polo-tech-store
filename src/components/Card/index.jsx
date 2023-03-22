import React from 'react'
import Button from '../Button'
import './style.css'
import { Link } from 'react-router-dom'

export default function Card({title, price, description, image, id}) {
   
  
  
  return(
    <div className="card">
      <img alt='Foto do produto' src={image} />
        <span>{title}</span><span>R$ {price} </span>
        <p>{description}</p>
        <Link to={`/details/${id}`}>
        <Button title='Ir para produto'  classe='info'/> 
        </Link>
        </div>
  )
}