import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as bootstrap from 'bootstrap';




import '/index.css'
import Inicio from './pages/Inicio.jsx'
import SobreNosotros from './pages/SobreNosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import Carrito from './pages/Carrito.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import {ProductosProvider} from './contexts/ProductosContext.jsx'
import Alta from './pages/Alta.jsx'
import { CarritoProvider } from './contexts/CarritoContext.jsx'
import { DarkModeContextProvider } from './contexts/DarkModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <ProductosProvider>
<CarritoProvider>

<BrowserRouter>
    <Navbar />
     <main className="container">
       <Routes>
        <Route path="/" element={ <Inicio />} />
        <Route path="/sobreNosotros" element={ <SobreNosotros />} />
        <Route path="/contacto" element={ <Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/alta" element={ <Alta />} />
        <Route path="*" element={ <NoEncontrado />} />
       </Routes>
     </main>
    <Footer/>
  </BrowserRouter>
 
 </CarritoProvider>

 </ProductosProvider>
  


  </React.StrictMode>,
)
