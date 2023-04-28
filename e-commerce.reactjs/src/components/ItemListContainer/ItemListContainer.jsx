import { useEffect, useState } from "react"
import { Titulo } from "../Titulo/Titulo"
import { mFetch } from "../../utils/mFetch"
import Filter from "../Filter/Filter"
import { Link, useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {cid} = useParams()

    useEffect(() => {
        if (cid) {
            mFetch()
                .then(resultado => {
                    setProductos(resultado.filter(producto => producto.categoria === cid))
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })

        } else { 
            mFetch()
                .then(resultado => {
                    setProductos(resultado)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [cid])

    console.log(productos)
   
   
    return(
        <section className="contenedorItemListContainer">
            
            <Titulo titulo="Soy ItemListContainer!" subtitulo="Estos son los productos en stock" />
              
            {loading ?
                <h2>Cargando...</h2>
                :
                <ItemList productos={productos} />
            }    

        </section>
    )
}

// ------- CODIGO ANTERIOR ------- // 
/*
const handleProductFiltered = ({filterState, handleFilterChange}) => (
    <div>
        <h2>Buscar producto</h2>
        <input type="text" value={filterState} onChange={handleFilterChange} />

        <div className="containerProductos">
            {loading ?
                <h2>Cargando...</h2>
                :
                <>
                    {filterState === '' 
                        ?   productos.map(producto => <div key={producto.id} className="card w-25">
                                                 <img src="" alt="" />
                                                 <div className="card-body">
                                                     <h3>{producto.nombre}</h3>
                                                     <h3>{producto.color}</h3>
                                                     <h3>{producto.precio}</h3>
                                                 </div>
                                                 <div>
                                                     <Link to={`/detail/${producto.id}`}>
                                                     <button>Ver detalle de producto</button>
                                                     </Link>
                                                 </div>
                                              </div>
                            )
                    
                           
                        :
                            productos.filter(producto => producto.nombre.toLowerCase().includes(filterState.toLowerCase())).map(producto => <div key={producto.id} className="card w-25">
                                                 <img src="" alt="" />
                                                 <div className="card-body">
                                                     <h3>{producto.nombre}</h3>
                                                     <h3>{producto.color}</h3>
                                                     <h3>{producto.precio}</h3>
                                                 </div>
                                                 <div>
                                                     <Link to={`/detail/${producto.id}`}>
                                                     <button>Ver detalle de producto</button>
                                                     </Link>
                                                 </div>
                                              </div>
                            )
                    }
                    
                </>             
            }
        </div>
    </div>        
) 

    <Filter >
            {handleProductFiltered}
    </Filter>   
            
*/