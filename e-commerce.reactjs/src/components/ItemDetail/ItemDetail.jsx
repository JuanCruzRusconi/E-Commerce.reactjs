import { Link, useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { KeepBuying } from "../KeepBuying/KeepBuying"
import { Button, Card } from "react-bootstrap"


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
            <div className="contenedorItemDetail">
                
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />

                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>
                            {producto.categoria} {producto.nombre} disponibles acutalmente en color {producto.color}.
                        </Card.Text>
                        <Card.Title>${producto.precio}</Card.Title>
                        <Card.Text>Stock disponible: {producto.stock}</Card.Text>
                        <Card.Text>ID: {pid}</Card.Text>

                    </Card.Body>
                </Card>

            </div>    

            {isAmount ?
                <ItemCount onAdd={onAdd} />
                :
                <>
                    <div className="contenedorBoton">
                        <KeepBuying />
                        <Link to={"/cart"}>
                            <Button>Finalizar la compra</Button>
                        </Link>
                    </div>
                </>
            }
        </>

    )
}

/*
 <div className="contenedorItem">

                <div className="item">
                    <h3>Producto: {producto.nombre}</h3>
                    <h3>Marca: {producto.categoria}</h3>
                    <h3>Precio: ${producto.precio}</h3>
                    <h3>ID de producto: {pid}</h3>
                    <h3>Stock disponible: {producto.stock}</h3>
                </div>
            </div>
            */