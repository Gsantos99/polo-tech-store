import React from "react";
import './style.css'

export default function Button({title, classe='button', onClick, cor}) {
      
  return(<>
     <button  className={classe} onClick={onClick} style={{backgroundColor:cor}}>{title}</button>
    </>)
}