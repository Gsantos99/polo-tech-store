import './style.css'
import React from "react";
import Button from "../Button";
import { useLoaderData } from 'react-router-dom'
import { getProduto } from '../../services/getProduto';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';




export async function loader({params}){
  
  const  produto = await getProduto(params.productId)
  
  
console.log(produto)

  return {produto}
}

export default function Details({params}) {

  const { produto } =  useLoaderData()
  
  console.log(produto.images)
  
  return(
    
    <div className="details">
     
      <Carousel>
        {produto?.images?.map((link, index) => {
          return(
            <div key={`${link}-${index}`}>
                    <img  src={link} alt='foto do produto' />
                    <p className="legend">{`Foto do produto ${index + 1 }`}</p>
                </div>
          )
        })}
                
            </Carousel>
        <span>{produto.title}</span><span>R$ {produto.price} </span>
        <p>{produto.description}</p>
        <Button title='Adicionar ao carrinho'/>
        <Link  to={`/`}>
        <Button title='Voltar'/>
        </Link>
        </div>
  )
}