import { Link } from "react-router-dom"
import Filter from "../Filter/Filter"
import Item from "../Item/Item"

const ItemList = ({ productos }) => {
   
    return (

        <div>
        <h2>ItemList</h2>
        <div className="contenedorItemList">
        {productos.map(producto => <Item key={producto.id} producto={producto}/> )}
        </div>
        </div>
    )

}

export default ItemList

/*
const handleProductFiltered = ({filterState, handleFilterChange}) => (
    <div>
        <h2>Buscar producto</h2>
        <input type="text" value={filterState} onChange={handleFilterChange} />

        <div className="containerProductos">
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
            
        </div>
    </div>        
) 



        <Filter >
        {handleProductFiltered}
        </Filter>  
        
*/