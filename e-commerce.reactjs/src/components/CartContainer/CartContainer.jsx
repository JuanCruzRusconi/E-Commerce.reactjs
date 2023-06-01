
import { useState } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { CartForm } from "../CartForm/CartForm"
import { Cart } from "../Cart/Cart"
import { KeepBuying } from "../KeepBuying/KeepBuying"
import { Title } from "../Title/Title"
import { Button } from "react-bootstrap"

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
                    <div className="contenedorCartContainer">
                        {cartList.map(producto => (
                            <Cart key={producto.id} producto={producto} deleteProduct={deleteProduct} totalPrice={totalPrice} emptyCart={emptyCart} />))}

                    </div> 
                    <div>
                        <h3>Precio total: ${totalPrice()}</h3>

                    </div>

                    <div className="contenedorBoton">

                        <KeepBuying />

                        <Button onClick={emptyCart}>Vaciar carrito</Button>

                    </div>

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

