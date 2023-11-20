import { useEffect } from 'react'
import './SobreNosotros.css'

const SobreNosotros = () => {

    useEffect(()=> {
        document.title = 'Tienda ÓNIX - Sobre Nosotros'
    }, [])


  return (
    <main className="container nosotros mt-5">
    <section>
      <div className="row">

        <div className="nosotros-text col-7 my-5">
            <h1 className="titulo-destacado">Sobre <span>nosotros</span></h1>
            <h3 className=' sobre-nosotros'>Lo que necesitas al alcance de tu mano. </h3>
            <p className=' sobre-nosotros'> ÓNIX nació en Campana, Buenos Aires. <br /> Nuestro principal objetivo es poner a tu disposición variedad de accesorios para tus dispositivos.</p>
            <p className=' sobre-nosotros'> <strong>Tenemos la mejor calidad y precio.</strong></p>
            <div className=" mb-3">
              <div className="nosotros-iconos ">
                <ul>
                  <li><a href="https://www.facebook.com/onix.cel.39/"><i className="fa-brands fa-facebook-square fa-3x fb dark-icon light-icon"></i></a></li>
                  <li><a href="https://www.instagram.com/onix_cel/"><i className="fa-brands fa-instagram-square fa-3x dark-icon icon-light"></i></a></li>
                  <li><a href="mailto:trini@gmail.com"><i className="fa fa-envelope-square fa-3x dark-icon icon-light"></i></a></li>
                  <li><a href="https://www.tiktok.com/@onix.cel"><i className="fa-brands fa-tiktok fa-3x dark-icon icon-light"></i></a></li>
                </ul>
              </div>
            </div>
            
        </div>

        <div className="col-5">
            <div className="nosotros-imagen">
              <img className="img-fluid" src="/img/iconos-07.png" alt="" />
            </div>
        </div>

      </div>
    </section>
   </main>
   
  )
}

export default SobreNosotros