import React, { createContext, useState } from "react";



export const listaDeProdutos = createContext([])



export function CartProvider({children}) {
   

  let itensDB = JSON.parse(localStorage.getItem('ListaDeProdutos')) ?? []


  const [cartProdutos, setCartProdutos] = useState(itensDB)
  
  
  function handleSalveItens(produto){
     
    console.log(produto)
     
    itensDB.push(produto)

    localStorage.setItem('ListaDeProdutos', JSON.stringify(itensDB))
  }
   
  
  
  return(
     < listaDeProdutos.Provider value={{cartProdutos, setCartProdutos, handleSalveItens}}> 
      {children}
     </listaDeProdutos.Provider>
  )
}

