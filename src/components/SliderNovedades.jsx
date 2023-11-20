import React, { useEffect } from 'react'

const SliderNovedades = () => {

    useEffect(()=> {
        document.title = 'Tienda ÓNIX - Inicio'
    }, [])



  return (
    <section className="carrusel">
    <div id="carouselExampleInterval" className="carousel slide carousel-size" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="img/CARROUSEL1.jpg" className="d-flex" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="img/feedprod-15A.jpg" className="d-flex" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/feedprod-03A.jpg" className="d-flex" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  )
}

export default SliderNovedades