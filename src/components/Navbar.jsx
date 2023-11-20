import { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import CarritoContext from '../contexts/CarritoContext';
import ItemCarritoInicio from './ItemCarritoInicio';
import DarkMode from './DarkMode';



const Navbar = () => {
    const {carrito, vaciarCarritoContext} = useContext(CarritoContext)

    const navigate = useNavigate()

    const handleComprar =() => {
      if (carrito.length !== 0){
         navigate('/carrito')
      } else {
        console.log ('No hay productos')
      }
    }
    

    const handleVaciarCarrito =() => {
      vaciarCarritoContext()
    }
   
    const location = useLocation()
  console.log(location.pathname)

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/"> <img src="img/iconos-06.png" alt="icono" className="icono" /> </Link>
          <NavLink className="navbar-brand text-reset" to="/">ÓNIX.CEL</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item-inicio">
                <NavLink className="nav-link text-reset" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active text-reset" aria-current="page" to="/sobreNosotros">Sobre Nosotros</NavLink>
              </li>
              <li className="nav-item-contacto">
                <NavLink className="nav-link text-reset" to="/contacto">Contacto</NavLink>
              </li>
              <li className="nav-item-contacto">
                <NavLink className="nav-link text-reset" to="/alta">Alta</NavLink>
              </li>
            </ul>
             <div>
              <DarkMode  />
             </div>

            <div className="d-flex me-5">
            
            </div>
            {location.pathname  !== '/carrito' && 
                        <div className="d-flex">
                        <div className="dropdown dropstart">
                          <NavLink type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-cart-shopping fa-xl" ></i>
                          </NavLink>
                          <ul id="carrito" className="dropdown-menu mx-2 dark-carrito">
                            <table id="lista-carrito" className="table dark-carrito">
                              <thead>
                                <tr>
                                  <th scope="col">Imagen</th>
                                  <th scope="col">Nombre</th>
                                  <th scope="col">Cantidad</th>
                                  <th scope="col">Precio</th>
                                </tr>
                              </thead>
                              <tbody>
                               {
                                   carrito && carrito.map(item => (
                                      <ItemCarritoInicio key={item.id} item={item} />
                                    ))
                               }
          
                              </tbody>
                            </table>
                            <div className="d-grid gap-2 d-md-block justify-content-md-center ms-1">
                              <button id="vaciar-carrito" className="btn btn-onix3" onClick={handleVaciarCarrito}>Vaciar Carrito</button>
                              <button id="procesar-carrito" className="btn btn-onix2" onClick={handleComprar} /*disabled={ </div>carrito.length === 0 }*/>Ir a Carrito</button>
                            </div>
                          </ul>
                        </div>
                      </div>  
          }
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar