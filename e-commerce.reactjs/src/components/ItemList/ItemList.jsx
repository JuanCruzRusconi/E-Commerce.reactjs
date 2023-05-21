
import Item from "../Item/Item"
import { memo } from "react"

const ItemList = memo(({ productos }) => {

    return (

        <div>
            <h2>ItemList</h2>
            <div className="contenedorItemList">
                {productos.map(producto => <Item key={producto.id} producto={producto} />)}
            </div>
        </div>
    
    )
})

export default ItemList