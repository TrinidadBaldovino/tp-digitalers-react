import React from 'react'
import TableRow from './TableRow'

const TableProductos = ({productos, eliminarProductoContext, setProductoAEditar}) => {
  return (
    <>
    <h2 className='titulo-alta2'>
      Alta - Nuevos Productos
    </h2>
    <table className="dark-table table table-hover t-orginal">
     <thead className=' dark-table'>
       <tr className='tr-th items-alta'>
         <th>Nombre</th>
         <th>Color</th>
         <th>Caracteristicas</th>
         <th>Precio</th>
         <th>Imagenes</th>
         <th>Acciones</th>
 
   
       </tr>
     </thead>
     <tbody>
    {
      productos && productos.map((productos)=>(
            <TableRow productos={productos} eliminarProductoContext={eliminarProductoContext} setProductoAEditar={setProductoAEditar}/>
      ))
    }
 </tbody>
    </table>
 
    </>
  )
}

export default TableProductos