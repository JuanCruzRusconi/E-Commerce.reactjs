import { Link } from "react-router-dom"

const Item = ({producto}) => {

    return(
        <div>
            <h3>Item</h3>
            <div key={producto.id} className="contenedorItem">
                                                 <img src="" alt="" />
                                                 <div className="card-body">
                                                     <h3>{producto.nombre}</h3>
                                                     <h3>${producto.precio}</h3>
                                                 </div>
                                                 <div>
                                                     <Link to={`/detail/${producto.id}`}>
                                                     <button>Ver detalle de producto</button>
                                                     </Link>
                                                 </div>
                                              </div>
        </div>
    )
}

export default Item