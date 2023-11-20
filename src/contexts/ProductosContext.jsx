import { createContext, useEffect, useState } from 'react'
import { deleteAction, get, post, put } from '../utils/http'

const ProductosContext = createContext()

const url = import.meta.env.VITE_ENDPOINT_PRODUCTOS
console.log(url)

const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState(null)

  useEffect(() => {
    obtenerProductos()
  }, [])

  const obtenerProductos = async () => {
    try {
      const productsBack = await get(url)
      setProductos(productsBack)
    } catch (error) {
      console.log(`[obtenerProductos] -> Algo no funcionó -> ${error}`)
    }
  }
  //! post -> creación de productos
  const crearProductoContext = async (productoNuevo) => {
    //console.log( 'se esta agregando un nuevo producto',productoNuevo)

    try {
      const productoCreado = await post(url, productoNuevo)
      let nuevaDB = [...productos, productoCreado]

      setProductos(nuevaDB)
    } catch (error) {
      console.log('error [crearProductoContext] linea 32')
    }
  }

  // ! put -> edición de productos

  const actualizarProductoContext = async (form) => {
    console.log(form)
    try {
      const productoModificado = await put(`${url}/${form.id}`, form)
      let nuevaDB = productos.map((producto) => (producto.id === form.id ? productoModificado : producto))
      setProductos(nuevaDB)
    } catch (error) {
      console.log(error)
    }
  }

  //! Delete => Eliminar Productos
  const eliminarProductoContext = async (id) => {
    console.log(id)
    let isDelete = window.confirm(`¿Estás seguro de eliminar el elemento con el id: ${id}`)
    if (isDelete) {
      const nuevaDB = productos.filter((el) => el.id !== id)
      setProductos(nuevaDB)
      await deleteAction(`${url}/${id}`)
    } else {
      return
    }
  }

  const data = { productos, crearProductoContext, actualizarProductoContext, eliminarProductoContext }

  return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

export { ProductosProvider }

export default ProductosContext
