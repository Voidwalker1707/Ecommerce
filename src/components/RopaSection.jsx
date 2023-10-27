import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RopaSection(){

    const {id} = useParams() 
    const url = `https://ecommerce-back-test.onrender.com/api/v1/ropa/${id}`
    const [ropa, setRopa] = useState({})

    useEffect(()=>{
        async function getRopa(){
            const response = await fetch(url)
            const json = await response.json()
            setRopa(json)
        }
        getRopa()
    },[])

    return (
        <>
            <div className='container' >
                    
                <div className="card mx-auto text-dark mb-3" style={{ maxWidth: '30rem', marginTop: '5%'}}>
                        <div className="card-header">{ropa.nombre}</div>
                        <div className="card-body">
                            <p className="card-text">{ropa.descripcion}</p>
                            <p className="card-text">Precio: {ropa.precio}</p>
                            <p className="card-text"><small className="text-secondary">Disponible: {ropa.cantidad_en_stock} unidades</small></p>
                        </div>
                        <div className="image-container mx-auto">
                            <img src={ropa.imagen} className="img-fluid" alt={ropa.nombre} />
                        </div>
                        <div className="d-flex justify-content-center bg-primary-border-subtle" style={{marginBottom: '3%', paddingBottom: '7%', paddingTop:'10px'}}>
                            <button type="button" className="btn btn-outline-primary mx-2">Agregar al carrito</button>
                            <button type="button" className="btn btn-outline-primary mx-2">Comprar ahora</button>
                        </div>
                </div>
            
            </div>


        </>
    )
}

export default RopaSection