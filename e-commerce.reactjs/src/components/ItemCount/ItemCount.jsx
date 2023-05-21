import { useCounter } from "../../hooks/useCounter"

const ItemCount = ({initial=1, stock=10, onAdd}) => {

  const {counter, handleSumar, handleRestar} = useCounter(initial, 1, stock)

    return (
        <div>
            <p>Productos agregados al carrito: {counter}</p>
            <button onClick={handleSumar}>Añadir producto</button>
            <button onClick={handleRestar}>Restar producto</button>
            <button onClick={()=>{onAdd(counter)}}>Agregar al carrito {counter}</button>
        </div>
    )
}

export default ItemCount