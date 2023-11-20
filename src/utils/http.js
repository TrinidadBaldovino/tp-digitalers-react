// ! CRUD -> R: READ ->

export const get = async (url) => {
  try {
    const respuesta = await fetch(url)
    console.log(respuesta)
    if (!respuesta.ok) {
      throw new Error(`Algo paso: ${respuesta.status}, ${respuesta.statusText}`)
    }
    const data = await respuesta.json() // array de productos disponibles
    return data
  } catch (error) {
    console.log(`ERROR GET ->`, error)
  }
}

//! CRUD -> C: CREATE => POST

export const post = async (url, data) => {
  console.log(data)
  const fechConfig = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }

  try {
    const respuesta = await fetch(url, fechConfig) // objeto de respuesta
    console.log(respuesta)
    if (!respuesta.ok) {
      throw new Error(`Algo pago: ${respuesta.status} ${respuesta.statusText}`)
    }
    const datos = await respuesta.json() // Acá tenemos el array de productos

    return datos
  } catch (error) {
    console.log(`ERROR POST -> `, error)
  }
}

export const put = async (url, data) => {
  const fechConfig = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }

  try {
    const respuesta = await fetch(url, fechConfig) // objeto de respuesta
    console.log(respuesta)
    if (!respuesta.ok) {
      throw new Error(`${respuesta.status} ${respuesta.statusText}`)
    }
    const datos = await respuesta.json() // Acá tenemos el array de productos

    return datos
  } catch (error) {
    console.log(`ERROR PUT -> `, error)
  }
}

export const deleteAction = async (url) => {
  const fechConfig = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }

  try {
    const respuesta = await fetch(url, fechConfig) // objeto de respuesta
    console.log(respuesta)
    if (!respuesta.ok) {
      throw new Error(`Algo pago: ${respuesta.status} ${respuesta.statusText}`)
    }
    const res = await respuesta.json()
    console.log(res)

    return {}
  } catch (error) {
    console.log(`ERROR DELETE -> `, error)
  }
}
