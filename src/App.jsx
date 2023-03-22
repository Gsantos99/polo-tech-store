import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Loading from '../src/components/Loading'
import { getProdutos } from './services/getProdutos';
import "react-responsive-carousel/lib/styles/carousel.min.css";




export default function App() {
  
  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
   getProdutos().then(dados => setProdutos(dados))
   },[]) 
  
  const listaDeProdutos = produtos.map((produto) => {
     return(
       <Card key={produto.id} image={produto.images[0]} {...produto} />
     )
   })
  
  
  return (
    <div className="App">
     <Header color='rgb(248, 0, 50)' titulo='Polo tech Store' />
     <section>
      {
        produtos.length === 0 ? <Loading type='spin' color='rgb(248, 0, 50)'/> : listaDeProdutos 

      }
     </section>
     <Footer/>
    </div>
  );
}


