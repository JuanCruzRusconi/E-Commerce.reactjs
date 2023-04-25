import { useParams } from "react-router-dom"

export const ItemDetail = () => {

    const {pid} = useParams()

    return (
        <div>
            <h2>ItemDetail</h2>
            <h3>Detalle de producto seleccionado: Producto {pid}</h3>
        </div>
    )
}