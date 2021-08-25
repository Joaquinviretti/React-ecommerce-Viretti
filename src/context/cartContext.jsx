import { createContext, useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext

export const CustomProvider = ({ defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue)

    const addItem = (item, quantity) => {
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

    const isInCart = (id) => {
        return cart.find(p => p.item.id === id)
    }

    const removeItem = (id) => {
        const newCart = [...cart].filter(p => p.item.id !== id)
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }

    const getTotal = () => {

        let total = 0;
        if (cart.length > 0) {
            cart.forEach((p) => {
                total = total + p.item.price * p.quantity;
            })
        }
        return total;
    }

    return (
        <Provider value={{ cart, addItem, removeItem, getTotal, clear }}>
            {children}
        </Provider>
    )
}

export default cartContext
