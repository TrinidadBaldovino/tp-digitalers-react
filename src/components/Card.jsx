import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


const Card = ({producto}) => {
 const {agregarCarritoContext } = useContext(CarritoContext)
 const handleComprar = (producto)=> {
    console.log('Comprando -> ', producto)
    agregarCarritoContext(producto)
 }
  return (
    <div className="producto-1 card col-3 m-3">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper swiper-slide swiper-container .swiper-button-next">
        <SwiperSlide>
          <img  className="img" src={`/img/${producto.foto}`} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={`/img/${producto.foto2}`} />
        </SwiperSlide>
        <SwiperSlide>
          <img  className="img" src={`/img/${producto.foto3}`} />
        </SwiperSlide>
      </Swiper>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
      </div>
      <ul className="list-unstyled mt-3 mb-4">
        <li className="list-group-item">{producto.color}</li>
        <li className="list-group-item">{producto.caracteristicas}</li>
        <li className="precio list-group-item precio">${producto.precio}</li>
      </ul>
      <div className="card-button">
        <button type="button" className="btn btn-onix mt-2 mb-3 agregar-carrito" onClick={()=> handleComprar(producto)} >Comprar</button>
      </div>
    </div>
  )
}

export default Card