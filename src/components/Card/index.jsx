import React from 'react'
import './style.css'

export default function Card() {
  return(
    <div class="card">
      <img alt='Foto do produto' src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" width='280'/>
        <span>Practical Wooden Computer</span><span>R$ 53,00</span>
        <p>The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J</p>
        <button class="btn-success">Adicionar ao Carrinho</button>
        </div>
  )
}