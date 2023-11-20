import { useContext, useEffect } from 'react'
import './Carrito.css'
import CarritoContext from '../contexts/CarritoContext'
import ItemCarrito from '../components/ItemCarrito'


const Carrito = () => {
    const { carrito,ivaTotalCarrito,totalCarritoPrecio, resumenTotalConIvaCarrito,guardarCarritoContext, totalCarritoCantidad} = useContext(CarritoContext)

    useEffect(()=> {
        document.title = 'Tienda ÓNIX - Carrito'
    }, [])


  return (
    <section className="container my-5">
        <div className="row d-flex">
          <div className="col-8">
            <div className="card mb-4">
              <div className="card-header py-4">
                <h5 className="mb-0 articulos-carrito">Carrito {totalCarritoCantidad()} artículos</h5>
              </div>

              <div className="card-body" id="lista-compra">

                 {
                   carrito && carrito.map(item => (
                    <ItemCarrito key={item.id} itemProducto={item} />
                  ))
                 }

                </div>              
                
              </div>

            </div>
            <div className="col-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-2">      Resumen carrito</h5>
                  <h6 className="mb-0"> {totalCarritoCantidad()} articulos</h6>
                </div>
                <div className="card-body">
                  <ul className="fondo2 list-group list-group-flush">
                    <li className="fondo2 list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Productos
                      <span id="sub-total">${totalCarritoPrecio()}</span>
                    </li>
                    <li className="fondo2 list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Envío
                      <span>Gratis</span>
                    </li>
                    <li className="fondo2 list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      <div>
                        
                        <strong>IVA</strong>
                      </div>
                      <p id="iva"><strong> ${ivaTotalCarrito()}</strong></p>
                      
                    </li>
                    <li className="fondo2 list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      <div>
                        <strong>Total de la compra</strong>
                        <strong>(IVA Incluido)</strong>
                      </div>
                      <p id="iva"><strong></strong></p>
                      <p id="total"><strong>${resumenTotalConIvaCarrito()}</strong></p>
                    </li>
                  </ul>
  
                  <button type="button" className="btn btn-finalcompra btn-lg btn-block mt-4" onClick={guardarCarritoContext}>PROCESAR COMPRA</button>
  
                </div>
  
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body tarjetas">
                <p><strong>Métodos de pago aceptados</strong></p>
                <img src="/img/amex.svg" alt="American Express" className="tarjetas me-2"/>
                <img src="/img/master.svg" alt="Mastercard" className="tarjetas me-2"/>
                <img src="/img/visa.svg" alt="Visa" className="tarjetas me-2"/>
                <img src="/img/paypal.svg" alt="PayPal" className="tarjetas me-2"/>
              </div>
            </div>

          </div>

       

        


      </section>
  )
}

export default Carrito