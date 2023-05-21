import { useCartContext } from "../../contexts/CartContext"

export const CartWidget = () => {

    const {totalAmount} = useCartContext()

    return (
        <div>
            <h3 className="navBar">Carrito {totalAmount() != 0  && totalAmount()}</h3>
        </div>
    )
}