import React from "react";
import './style.css'

export default function Button({title, classe='button', onClick}) {
  // let corBtn = 'green'  

  // if(estado === 'success') corBtn='green'
  // if(estado === 'warning') corBtn='yellow'
  // if(estado === 'danger') corBtn='red'

  // style={{backgroundColor: corBtn}}
      
  return(<>
     <button  className={classe} onClick={onClick}>{title}</button>
    </>)
}