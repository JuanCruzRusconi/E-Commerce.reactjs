
import { useState } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"
import { addDoc, collection, getFirestore } from "firebase/firestore"

export const CartContainer = () => {

    const { cartList, emptyCart, totalPrice, deleteProduct } = useCartContext()

    const [dataForm, setDataForm] = useState({
        nombre: "",
        telefono: "",
        email: ""
    })

    const generateOrder = (evt) => {

        evt.preventDefault()

        const order = {}
        order.buyer = dataForm
        order.products = cartList.map(({ id, nombre, precio, cantidad }) => ({ id, nombre, precio, cantidad }))
        order.total = totalPrice()

        // Insertar order a firebase 
        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, "orders")

        addDoc(ordersCollection, order)
            .then(Response => alert(`El ID de su compra es: ${Response.id}`))
            .catch(err => console.log(err))
            .finally(() => {
                setDataForm({})
                emptyCart()
            })
    }

    const handleOnChange = (evt) => {
        console.log(evt.target.name)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }

    return (

        <div>
            {cartList.length != 0 ?
                <>
                    <h2>Productos agregados al carrito:</h2>
                    {cartList.map(producto => (
                        <div key={producto.id}>
                            <h3>{producto.nombre}</h3>
                            <h3>Cantidad: {producto.cantidad}</h3>
                            <h3>Precio: ${producto.precio}</h3>
                            <button onClick={() => deleteProduct(producto.id)}>Eliminar del carrito</button>
                        </div>

                    ))}

                    <div>
                        <h3>Precio total:{totalPrice()}</h3>

                        <button onClick={emptyCart}>Vaciar carrito</button>
                    </div>

                    <Link to={"/"}>
                        <button>Continuar la compra</button>
                    </Link>

                    <form onSubmit={generateOrder}>

                        <input type="text" name="nombre" onChange={handleOnChange} value={dataForm.nombre} placeholder="Ingrese su nombre" />
                        <input type="text" name="telefono" onChange={handleOnChange} value={dataForm.telefono} placeholder="Ingrese su numero de telefono" />
                        <input type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="Ingrese su email" />
                        <input type="text" name="nombre" onChange={handleOnChange} value={""} placeholder="Ingrese su nombre" />

                        <button>Generar orden</button>

                    </form>
                </>
                :
                <div>
                    <h3>No hay productos agregados en el carrito!</h3>
                    <Link to={"/"}>
                        <button>Quiero ver los productos disponibles</button>
                    </Link>
                </div>
            }
        </div>

    )
}