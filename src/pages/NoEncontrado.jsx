import { useEffect } from 'react'

const NoEncontrado = () => {

    useEffect(()=> {
        document.title = 'Tienda ÓNIX - No encontrado'
    }, [])




  return (
    <div>NoEncontrado</div>
  )
}

export default NoEncontrado