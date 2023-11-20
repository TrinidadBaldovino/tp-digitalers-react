import React, { useEffect, useState } from 'react'

const formInicial = {
  id: '',
  nombre: '',
  color: '',
  caracteristicas: '',
  precio: '',
  foto: '',
  foto2: '',
  foto3: '',
}

export const Form = ({ crearProductoContext, productoAEditar, actualizarProductoContext, setProductoAEditar }) => {
  const [form, setForm] = useState(formInicial)

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  }, [productoAEditar])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.id === null) {
      crearProductoContext(form)
    } else {
      actualizarProductoContext(form)
    }
  }

  const handleReset = (e) => {
    setForm(formIncial)
    setProductoAEditar(null)
  }

  return (
    <>
      <h3 className='titulo-alta3'>Agregar : Editar</h3>
      <form onSubmit={handleSubmit} action=''>
        <div>
          <input type='text' name='nombre' placeholder='nombre de producto' onChange={handleChange} value={form.nombre} />
          <input type='text' name='color' placeholder='color producto' onChange={handleChange} value={form.color} />
          <input
            type='text'
            name='caracteristicas'
            placeholder='descripción del producto'
            onChange={handleChange}
            value={form.caracteristicas}
          />
          <input type='text' name='precio' placeholder='precio del producto' onChange={handleChange} value={form.precio} />
          <input type='url' name='foto' placeholder='cargue imagenes de producto' onChange={handleChange} value={form.foto} />
          <input type='url' name='foto2' placeholder='cargue imagenes de producto' onChange={handleChange} value={form.foto2} />
          <input type='url' name='foto3' placeholder='cargue imagenes de producto' onChange={handleChange} value={form.foto3} />
        </div>
        <button type='submit' className='btn btn-sucess'>
          Enviar
        </button>
        <button type='reset' className='btn btn-dark'>
          Limpiar
        </button>
      </form>
    </>
  )
}

export default Form
