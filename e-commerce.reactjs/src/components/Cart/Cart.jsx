import { Button, Card } from "react-bootstrap"

export const Cart = ( {producto, deleteProduct} ) => {

    return (

        <>
            <div key={producto.id} className="contenedorCart">

                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />

                    <Card.Body>

                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Title>${producto.precio}</Card.Title>
                        <Button onClick={() => deleteProduct(producto.id)}>Eliminar del carrito</Button>

                    </Card.Body>
                </Card>

            </div>
        </>
        
    )
}

/*
<h3>{producto.nombre}</h3>
                <h3>Cantidad: {producto.cantidad}</h3>
                <h3>Precio: ${producto.precio}</h3>
                <button onClick={() => deleteProduct(producto.id)}>Eliminar del carrito</button>
                */