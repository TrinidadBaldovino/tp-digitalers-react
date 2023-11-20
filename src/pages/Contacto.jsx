import { useEffect } from 'react'
import './Contacto.css'

const Contacto = () => {

  useEffect(()=> {
    document.title = 'Tienda ÓNIX - Contacto'
}, [])

  return (
    <main className="formulario">
        <section className="container">
          <form action="" id="formContacto">
            <h2 className="my-6 p-5">Contacto</h2>
             <div className="input-group row my-5">
              <label for="name">Nombre</label>
              <input className="input" type="text"  name="name" id="name" placeholder="Nombre"/>
    
              <label for="phone">Celular</label>
              <input type="tel"  name="phone" id="phone" placeholder="Celular" />
    
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" />
    
              <label for="message">Mensaje</label>
              <textarea name="message" id="message" cols="30" rows="5" placeholder="Mensaje"></textarea>
             </div>
          <input className="btn btn-primary"  type="submit" value="Enviar"/>
          </form>
        </section>

        <section className="modalb" id="modalGracias">
          <div className="modal-container">
              <img src="/imagenes/Done-pana.png" className="modal-img" />
              <h2 className="modal-title">¡Gracias por contactarnos!</h2>
              <p className="modal-paragraph">Te responderemos a la brevedad</p>
              <a href="#" className="modal-close">Cerrar</a>
          </div>
      </section>

       </main>
  )
}

export default Contacto