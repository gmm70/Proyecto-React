import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const obj= [{id:1, image:"./GM.png", title:"boca", category:"argentina"}, 
            {id:2, image:"./carrito.png", title:"carro", category:"seleccion"},
            {id:3, image:"./camisetaspl.jpg", title:"premier", category:"premier"}];
            
export const ItemDetailContainer = () =>{
    const [data, setData] = useState ([])

    const {detallesId} = useParams

    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout(()=>{
                resolve (obj)
            }, 1000 )
        });
        if (detallesId){
            getData.then  (res => res.filtrer(obj => obj.category === detallesId))
        } else {
        getData.then  (res => setData(res))}

    }, [detallesId])

    return(
        <ItemDetail data={data}/>
        
    )
}