import { Link, useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

export const ItemDetail = ({producto}) => {

    const [isCant, setIsCnt] = useState(true)

    const onAdd = (cantidad) => {
        console.log('cantidad: ', cantidad)
        setIsCnt(false)
    }

    const {pid} = useParams()

    return (
        <>
            <h2>ItemDetail</h2>
            <div>
                <div className="contenedorItem">
                    <h3>ID de producto: {pid}</h3>
                    <h3>Producto: {producto.nombre}</h3>
                    <h3>Categoría: {producto.categoria}</h3>
                    <h3>Precio: ${producto.precio}</h3>
                    <h3>Stock disponible: {producto.stock}</h3>
                </div>
            </div>
            {isCant ?
                <ItemCount onAdd={onAdd} />
                :
                <>
                    <Link to={"/cart"}>Finalizar la compra</Link>
                    <Link to={"/"}>Continuar la compra</Link>
                </>
            }

        </>
    )
}

/*
            
            */