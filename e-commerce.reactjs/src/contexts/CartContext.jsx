import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) => {

        const idx = cartList.findIndex(producto => newProduct.id === producto.id)

        if(idx === -1){
            setCartList([... cartList, newProduct])   

        } else {
            cartList[idx].cantidad = cartList[idx].cantidad + newProduct.cantidad
            setCartList([... cartList])
        }
    }

    const totalAmount = () => (
        cartList.reduce((acc, objProducto) => acc += objProducto.cantidad, 0)
    )

    const totalPrice = () => (
        cartList.reduce((acc, objProducto) => acc += (objProducto.cantidad * objProducto.precio), 0)
    )

    const deleteProduct = (pid) => {
        setCartList(cartList.filter(productos => productos.id != pid))
    }

    const emptyCart = () => {
        setCartList([])
    }

    return (

        <CartContext.Provider value={{
            cartList,
            addToCart, 
            emptyCart, 
            totalAmount,
            totalPrice,
            deleteProduct
        }}>

            {children}
            
        </CartContext.Provider>

    )
}