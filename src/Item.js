import React from "react";
import './App.css';
import { Link } from "react-router-dom"


const Item = ({info}) =>{
    return(
        <div>
        <img src={info.image}/>
        <p>{info.title}</p>
        <p>{info.category}</p>
        <Link to={"/detalle/info"}><buttom className="boton">Click Acá para mas info</buttom></Link>
        </div>
    )
}

export default Item