import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import {api} from '../src/services/api'
import Loading from '../src/components/Loading'



export default function App() {
  
  const [produtos, setProdutos] = useState([])

   async function getProdutos() {
    try {
      const { data } = await api.get("/products")
      setProdutos(data)
    } catch (e) {
      console.log(e)
    }
  }

   const listaDeProdutos = produtos.map((produto) => {
     return(
       <Card key={produto.id} image={produto.category.image} {...produto} />
     )
   })
  

   useEffect(()=>{
    getProdutos()
   },[])

  
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


