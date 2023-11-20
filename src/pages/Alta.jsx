import React, { useContext, useEffect, useState } from 'react'
import { Form } from '../components/Form'
import ProductosContext from '../contexts/ProductosContext'
import TableProductos from '../components/TableProductos'
import '/index.css'






const Alta = () => {
 
 const {productos, crearProductoContext, eliminarProductoContext, actualizarProductoContext} = useContext(ProductosContext)
 const [productoAEditar, setProductoAEditar] = useState(null)

  useEffect(()=> {
        document.title = 'Tienda ÓNIX - Alta'
    }, [])


    const agregarProducto = (nuevoProducto) => {
      console.log (nuevoUsuario)
    }


  return (
   <>
   <h1 className='titulo-alta' >Alta</h1>
   <hr />   
   <Form className='fondo-form' crearProductoContext ={crearProductoContext} actualizarProductoContext={actualizarProductoContext}
    productoAEditar={productoAEditar} />
   <hr />
   <TableProductos className='fondo-tabla text-tabla dark-tabla dark-text' productos={productos} eliminarProductoContext={eliminarProductoContext}
    setProductoAEditar={setProductoAEditar} />
 

   </>
    
  )
}

export default Alta