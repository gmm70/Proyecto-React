import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavBar =() =>{
    return(
        <div className='bg-warning '>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={'/inicio'}>
                        <img className='logoNav' src='./GM.png'/>
                    </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <NavLink className="nav-link active" aria-current="page" href="#">Inicio</NavLink>                     
                        <NavLink className="nav-link active dropdown dropdown-toggle " to={'/detalle/:detallesid'}>Catalogo</NavLink>
                            {/* <div>
                            <ul>
                                <li><a href="#">Enlace 2.1</a></li>
                                <li><a href="#">Enlace 2.2</a></li>
                                <li><a href="#">Enlace 2.3</a></li>
                            </ul>
                            </div> */}
                        <NavLink className="nav-link active" href="#">¿Quienes Somos?</NavLink>
 
                    </div>
                    
                    <div> 
                        <CartWidget/>
                    </div>   
                </div>
                </div>
                
            </nav>
        </div>
    )
}

export default NavBar