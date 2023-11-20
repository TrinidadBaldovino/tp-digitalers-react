import { useContext, useEffect } from 'react'
import Footer from '../components/Footer'
import ProductosContext from '../contexts/ProductosContext'
import Card from '../components/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SliderNovedades from '../components/SliderNovedades'



const Inicio = () => {

    const { productos } = useContext (ProductosContext)

    useEffect(()=> {
        document.title = 'Tienda ÓNIX - Inicio'
    }, [])



  return (
    <section id="lista-productos" className="row my-5">
    <SliderNovedades />
    <h1 className="titulo">LOS + VENDIDOS</h1>
    {
        productos && productos.map (producto => (
            <Card key={producto.id} producto={producto} />
          ))
    }

    </section>
  )
}

export default Inicio