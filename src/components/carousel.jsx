function Carousel (){
    return(
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_YJgo-klDV6nn6z1dBabIkt08J_bH4wjLPDn0AMly0ylo89YQaaVkqwurDY2xc5I4X7Q&usqp=CAU" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHcUsoR-qO3KYda3f7iTLWRZjrMWiS95j3QOKEvey03tl5uKv3wQHX8zhB7n88l8LjyQ&usqp=CAU" className="d-block w-100" alt=".." />
            </div>
            <div className="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiOZnNmmvojEeT4DfKmajJrJymahJjrwckk3dLxs3XCmqXtoI2wSIC0E6kdYWNw68tl4&usqp=CAU" className="d-block w-100" alt="..." />
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