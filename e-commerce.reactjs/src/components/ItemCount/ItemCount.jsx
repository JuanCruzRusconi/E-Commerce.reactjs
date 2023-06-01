import { Button } from "react-bootstrap"
import { useCounter } from "../../hooks/useCounter"
import { Title } from "../Title/Title"

const ItemCount = ({initial=1, stock=10, onAdd}) => {

  const {counter, handleAdd, handleSubtract} = useCounter(initial, 1, stock)

  let title = "Agregar al carrito"

    return (
        
        <div className="contenedorCounter">

            <Title title={title} />
            <div className="contenedorBoton">
                <Button onClick={handleAdd}>Añadir producto</Button>
                <Button onClick={handleSubtract}>Restar producto</Button>
                <Button onClick={() => { onAdd(counter) }}>Agregar al carrito {counter}</Button>
            </div>

        </div>

    )
}

export default ItemCount