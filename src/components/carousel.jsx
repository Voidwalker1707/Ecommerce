function Carousel (){
    return(
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
        </>
    )
}

export default Carousel