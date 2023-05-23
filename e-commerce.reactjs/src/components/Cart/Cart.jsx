import { Link } from "react-router-dom"

export const Cart = ( {producto, deleteProduct, totalPrice, emptyCart} ) => {

    return (

        <>
            <div key={producto.id} className="contenedorCart">

                <h3>{producto.nombre}</h3>
                <h3>Cantidad: {producto.cantidad}</h3>
                <h3>Precio: ${producto.precio}</h3>
                <button onClick={() => deleteProduct(producto.id)}>Eliminar del carrito</button>
                
            </div>
        </>
        
    )
}
