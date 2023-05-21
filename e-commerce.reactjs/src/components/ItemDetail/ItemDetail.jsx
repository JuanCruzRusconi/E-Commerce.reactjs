import { Link, useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { useCartContext } from "../../contexts/CartContext"


export const ItemDetail = ({producto}) => {

    const [isAmount, setIsAmount] = useState(true)

    const {pid} = useParams()
    
    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        addToCart({ ...producto, cantidad })
        setIsAmount(false)
    }

    return (
        <>
            <h2>ItemDetail</h2>
            <div>
                <div className="contenedorItem">
                    <h3>Producto: {producto.nombre}</h3>
                    <h3>Marca: {producto.categoria}</h3>
                    <h3>Precio: ${producto.precio}</h3>
                    <h3>ID de producto: {pid}</h3>
                    <h3>Stock disponible: {producto.stock}</h3>
                </div>
            </div>
            {isAmount ?
                <ItemCount onAdd={onAdd} />
                :
                <>
                    <Link to={"/cart"}>
                        <button>Finalizar la compra</button>
                    </Link>
                    <Link to={"/"}>
                        <button>Continuar la compra</button> 
                    </Link>
                </>
            }

        </>
    )
}

/*
            
            */