import React from "react";
import './App.css';

const ItemListContainer = (props) => {
    console.log(props);
    return (
      <div className="link">
        <h1>{props.saludo}</h1>
        <h3 className="categorias" >{props.categoria}</h3>
      </div>
    );
  };
  
function Catalogo(){
    return(
        <div>
            <ItemListContainer saludo="Bienvenidos a GM!" categoria="Liga Argentina" />
            <ItemListContainer categoria="Premier League"/>
            <ItemListContainer categoria="LaLiga" />
            <ItemListContainer categoria="Selecciones" />
        
        {/* <div id="carouselExampleInterval" className="carousel slide carrusel" data-bs-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="./camisetasarg.jpg" className="d-block w-100" alt="..."/>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <img src="./camisetaspl.jpg" className="d-block w-100" alt="..."/>
              </div>
              
              <div className="carousel-item">
                <img src="./camisetasmundial.jpg" className="d-block w-100" alt="..."/>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div> */}
         </div>
    )
}
  export default Catalogo;