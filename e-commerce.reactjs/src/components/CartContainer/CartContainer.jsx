
import { useState } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { CartForm } from "../CartForm/CartForm"
import { Cart } from "../Cart/Cart"
import { KeepBuying } from "../KeepBuying/KeepBuying"
import { Title } from "../Title/Title"

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

    let title = "Productos agregados al carrito:"
    let text = "No hay productos agregados al carrito!"

    return (

        <div className="contenedorCartContainer">           
            
            {cartList.length != 0 ?
                <>
                    <Title title={title} />
                    {cartList.map(producto => (
                        <Cart key={producto.id} producto={producto} deleteProduct={deleteProduct} totalPrice={totalPrice} emptyCart={emptyCart} />))}

                    <div>
                        <h3>Precio total:{totalPrice()}</h3>

                        <button onClick={emptyCart}>Vaciar carrito</button>
                    </div>

                    <KeepBuying />

                    <CartForm generateOrder={generateOrder} handleOnChange={handleOnChange} dataForm={dataForm} />
                </>
                :
                <div>
                    <Title text={text} />
                    
                    <KeepBuying />
                </div>
            }
        
        </div>

    )
}

