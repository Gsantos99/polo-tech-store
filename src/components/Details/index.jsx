import './style.css'
import React from "react";
import Button from "../Button";
import { useLoaderData } from 'react-router-dom'
import { getProduto } from '../../services/getProduto';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { listaDeProdutos } from '../../contexts/cart-context'; 
import { useContext } from 'react';







export async function loader({params}){
  
  const  produto = await getProduto(params.productId)
  return {produto}
}

export default function Details({params}) {

  const { produto } =  useLoaderData()

  const {cartProdutos, setCartProdutos, handleSalveItens} = useContext(listaDeProdutos)
  
  
//  Adicionar ao carrinho 
  function handleClick(){
    
    console.log(cartProdutos)
     
     handleSalveItens(produto)
     setCartProdutos(cartProdutos)
  }

  
  return(<>
   
   
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
         
         {/* <Link to={'/cart'}> */}
        <Button title='Adicionar ao carrinho' cor='blue' onClick={handleClick}/>
         {/* </Link> */}
      
        <Link  to={`/`}>
        <Button title='Voltar'/>
        </Link>
        </div>

 </> )
}