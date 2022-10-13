import './App.css';
import React from "react";
import  {ItemDetailContainer}  from './ItemDetailContainer';



const Detalles = ({data= [ ]}) =>{
   data.map(obj => <ItemDetailContainer key={obj.title} info={obj} />)

    return(  
        <div>
        <h1>Informacion del Producto</h1>
        <h2>{data.title}</h2>

        </div>
    )
}

export default Detalles