
import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"
import { Button } from "react-bootstrap"

export const KeepBuying = () => {

    const {cartList} = useCartContext()

    return (

        <Link to={"/"}>

            {cartList.length != 0 ?
                <Button>Continuar comprando</Button>
                :
                <Button>Visualizar productos</Button>
            }

        </Link>

    )
}