import { useCounter } from "../../hooks/useCounter"
import { Title } from "../Title/Title"

const ItemCount = ({initial=1, stock=10, onAdd}) => {

  const {counter, handleAdd, handleSubtract} = useCounter(initial, 1, stock)

  let title = "Productos agregados al carrito"

    return (
        
        <div className="contenedorCounter">

            <Title title={title} />
            <button onClick={handleAdd}>Añadir producto</button>
            <button onClick={handleSubtract}>Restar producto</button>
            <button onClick={()=>{onAdd(counter)}}>Agregar al carrito {counter}</button>
        
        </div>

    )
}

export default ItemCount