import React from 'react'

const TableRow = ({ productos, eliminarProductoContext, actualizarProductoContext, setProductoAEditar }) => {
  // console.log(setProductoAEditar)
  //console.log(productos)
  return (
    <tr key={productos.id}>
      <td>{productos.nombre}</td>
      <td>{productos.color}</td>
      <td>{productos.caracteristicas}</td>
      <td>{productos.precio}</td>
      <td>{[productos.foto1, productos.foto2, productos.foto3]}</td>
      <td>
        <button className='btn btn-dark mt-2 mb-3 ms-1' onClick={() => setProductoAEditar(productos)}>
          Modificar/Editar
        </button>
        <button className='btn-sm  mb-3 ms-3 fa-solid fa-trash-can' onClick={() => eliminarProductoContext(productos.id)}>
          {' '}
          Eliminar{' '}
        </button>
      </td>
    </tr>
  )
}

export default TableRow
