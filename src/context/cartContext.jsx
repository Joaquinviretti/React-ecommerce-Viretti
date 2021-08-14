import { createContext, useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext

export const CustomProvider = ({ defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue)

    /* add */
    const addItem = (item, quantity) => {
        //si ya está en el carrito, lo busco y le sumo la cantidad
        if (isInCart(item.id)) {

            const newCart = [...cart]
            for (const it of newCart) {
                if (it.item.id === item.id) {
                    it.quantity = it.quantity + quantity
                }
            }
            setCart(newCart)

        } else {
            setCart([...cart, { item: item, quantity: quantity }])
        }
    }

    /* is in cart */
    const isInCart = (id) => {
        return cart.find(e => e.item.id === id)
    }

    /* remove  */
    const removeItem = (id) => {
        const newCart = [...cart].map(item => item.id !== id)
        setCart(newCart)

    }

    /* clear */
    const clear = () => {
        setCart([])
    }

    return (
        <Provider value={{ cart, addItem }}>
            {children}
        </Provider>
    )
}

export default cartContext
