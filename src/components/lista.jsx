import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Ropa() {
  const url = "https://ecommerce-back-test.onrender.com/api/v1/ropa/";
  const [ropa, setRopa] = useState([]);

  useEffect(() => {
    async function getRopa() {
      const response = await fetch(url);
      const data = await response.json();
      setRopa(data);
    }
    getRopa();
  }, []);

  return (
    <>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src="https://cachemirasss.cl/wp-content/uploads/2018/02/slider-012-cachemiras-ss-chalecos-sueter-ropa-chile-santiago-moda-lana.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src="https://cachemirasss.cl/wp-content/uploads/2018/03/slider-013-cachemiras-ss-chalecos-sueter-ropa-chile-santiago-moda-lana-1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="https://cachemirasss.cl/wp-content/uploads/2018/05/slider-020-cachemiras-ss-chalecos-sueter-ropa-chile-santiago-moda-lana.jpg" className="d-block w-100" alt="..." />
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
      <div className="tarjetas-container">
        {ropa.map((item, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={item.imagen} className="card-img-top" alt={item.nombre}style={{ width: '286px', height: '288px' }} />
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">Precio: {item.precio.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</p>
              <Link to={`/ropa/${item.id}`} className="btn btn-primary">Ver detalles</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Ropa;
