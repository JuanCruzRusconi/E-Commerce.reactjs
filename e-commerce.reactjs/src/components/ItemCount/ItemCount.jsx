import { useCounter } from "../../hooks/useCounter"

const ItemCount = ({initial=1, stock=10, onAdd}) => {

  const {counter, handleSumar, handleRestar} = useCounter(initial, 1, stock)

    return (
        <div>
            <p>Productos agregados al carrito: {counter}</p>
            <button onClick={handleSumar}>Agregar 1</button>
            <button onClick={handleRestar}>Restar 1</button>
        </div>
    )
}

export default ItemCount