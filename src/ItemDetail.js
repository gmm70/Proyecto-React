import React from "react";
import './App.css';
import Item from "./Item"
import './App.css';



export const ItemDetail = ({data= [ ]}) =>{
    return(
        data.map(obj => <Item key={obj.id} info={obj} />)
    )
}

export default ItemDetail;