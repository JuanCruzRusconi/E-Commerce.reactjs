import { useEffect, useState } from "react"
import { Titulo } from "../Titulo/Titulo"
import { mFetch } from "../../utils/mFetch"
import Filter from "../Filter/Filter"
//


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        mFetch()
        .then(resultado => {
            setProductos(resultado)
        })
        .catch( error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [])
    console.log(productos)

    const handleProductFiltered = ({filterState, handleFilterChange}) => {
        <div>
            <h2>Buscar producto</h2>
            <input type="text" value={filterState} onChange={handleFilterChange} />
        </div>
    }
    

    return(
        <section className="itemListContainer">
            

            <Titulo titulo="Soy ItemListContainer!" subtitulo="Estos son los productos en stock" />
            <div className="containerProductos">
                {loading ?
                    <h2>Cargando...</h2>
                    :
                    productos.map(producto => <div key={producto.id} className="card w-25">
                                                 <img src="" alt="" />
                                                 <div className="card-body">
                                                    <h3>{producto.nombre}</h3>
                                                    <h3>{producto.color}</h3>
                                                    <h3>{producto.precio}</h3>
                                                 </div>
                                                 <div>
                                                    <button></button>
                                                 </div>
                                              </div>
                                 )
                }
                <Filter >
                {handleProductFiltered}
                </Filter>
            </div>
            
           

        </section>
    )
}

