import React, { useContext } from 'react'
import './ItemCarritoInicio.css'
import CarritoContext from '../contexts/CarritoContext'

const ItemCarritoInicio = ({item}) => {
 const {eliminarProductoCarritoContext} = useContext(CarritoContext)
  
 const handleEliminar = (id) => {
    console.log('Estoy eliminado ->', id)
    eliminarProductoCarritoContext(id)
  }
  return (
    <tr>
        <td>
            <img src= {`img/${item.foto}`} alt= {item.nombre} width="100"/>
        </td>
        <td>{item.nombre}</td>
        <td>{item.cantidad}</td>
        <td>${item.precio}</td>
        
        <td>
            <button href="#" className="borrar-producto fas fa-times-circle btn-fondo" onClick={()=>handleEliminar(item.id)}></button>
        </td>
    </tr>
  )
}

export default ItemCarritoInicio