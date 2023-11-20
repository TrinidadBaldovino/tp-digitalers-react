
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { post } from '../utils/http'

//! 1er -> Creacion del contexto
const CarritoContext = createContext()
//! 2do -> El armado del provider

const url = import.meta.env.VITE_ENDPOINT_CARRITO

const CarritoProvider = ({ children })=> {
    // estado
    
     const [agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, guardarCarrito, carrito] = useLocalStorage ('carrito', [])
     const [totalFinal, setTotalFinal] = useState(0)


    function elProductoEstaEnElCarrito (producto){
        return  carrito.filter(prod => prod.id === producto.id).length
       
    }


    function obtenerProductoDeCarrito (producto){
      
        return carrito.find(prod=> prod.id === producto.id)

    }


    const agregarCarritoContext = (producto)=> {
      
        if (!elProductoEstaEnElCarrito(producto)){
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++ 
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }

    }

    const cambiarCantidadCarritoContext = (productoNuevaCantidad) => {
        try {
            const nuevoCarrito = carrito.map(producto => producto.id === productoNuevaCantidad.id ? productoNuevaCantidad : producto)
            guardarCarrito(nuevoCarrito)
        } catch (error) {
            console.log('[cambiarCantidadCarritoContext]: No se pudo guardar el producto con la nueva cantidad', error)
        }
    }

    const eliminarProductoCarritoContext = (id) => {
     eliminarDelCarrito(id)
    }

    const guardarCarritoContext = async () => {
         console.log(carrito)
            try {
                const carritoGuardado = await post(url, carrito[0])
                console.log(carritoGuardado)
            } catch (error) {
                console.error('[guardarCarritoContext]: No se pudo guardar el carrito', error)
            }
    
        
    }

    const vaciarCarritoContext = () => {
        vaciarCarrito()
    }


    const totalCarritoCantidad = () => {
        let cantidadTotal = carrito ? carrito.reduce((total, producto) => { return total + producto.cantidad}, 0): 0;
        return cantidadTotal;

    }

    //console.log(cantidadTotal)
        

        const totalCarritoPrecio = () => {
            
            let totalResumenCarrito = carrito.reduce((total, producto) => { return total + (producto.precio * producto.cantidad)}, 0)
            
            return totalResumenCarrito;}

    //console.log(totalResumenCarrito )

   const ivaTotalCarrito = () =>{ 
    let ivaTotal = carrito.reduce((total, producto) => { 
    return total + (producto.precio * producto.cantidad * 0.18)}, 0)
   
    return ivaTotal}

    //console.log(ivaTotal) 


   const resumenTotalConIvaCarrito = () => {
    let conIvaTotal = carrito.reduce((total, producto) => {
    const iva = producto.precio * producto.cantidad * 0.18;
    return total + (producto.precio * producto.cantidad + iva);
}, 0)
    return conIvaTotal}

    //console.log(conIvaTotal) 

    const data = { carrito,
        agregarCarritoContext,
          eliminarProductoCarritoContext,
          guardarCarritoContext, 
          vaciarCarritoContext,
          cambiarCantidadCarritoContext, 
          totalCarritoPrecio,
          totalCarritoCantidad, 
          ivaTotalCarrito, 
          resumenTotalConIvaCarrito}


    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}


//! 3era -> exportaciones

export { CarritoProvider }

export default CarritoContext