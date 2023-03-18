import React from "react";
import './style.css'

export default function Button({estado, title}) {
  // Variavél de controle 
  let corBtn = 'green'  
  // A lógica 
  if(estado === 'success') corBtn='green'
  if(estado === 'warning') corBtn='yellow'
  if(estado === 'danger') corBtn='red'
      
  return(<>
     <button style={{backgroundColor: corBtn}}>{title}</button>
    </>)
}