import React, { useContext } from "react";
import { CartProvider, listaDeProdutos } from "../../contexts/cart-context";
import Header from "../Header";
import ProductItem from "../ProductItem";
import './style.css'

// TODO Melhorar CSS da página de carrinhos 
// TODO Fazer função para retirar item do carrinho




export default function CartPage() {

   // Pegando array do carrinho 
  const {cartProdutos, setCartProdutos} = useContext(listaDeProdutos)

   
  

   const carrinhoItens = cartProdutos.map((item)=>{
     return(
      <ProductItem  key={item.id} title={item.title} price={item.price} avatar={item.images}/>
     )
   })



   const totalItens = cartProdutos.reduce(
    (accumulator, item ) => accumulator + item.price,
   0
  );


  return(<>
  
  <Header  color='rgb(248, 0, 50)' title='Polo tech Store'/>

   <CartProvider > 


   
   <section className='cart-container'> 
   
   <h1>Meu carrinho</h1>
   <h2>Produtos</h2>
   
   <section className="produtos-container">
    {
    cartProdutos.length > 0 ? carrinhoItens : 'Insira algum item!'
   }
   </section>
   
   

   </section>
   
   <section className="cart-container price">
    <h2>Total</h2>
    <h2>{totalItens}</h2>

   </section>

  </CartProvider > 
  
  </>)

}


