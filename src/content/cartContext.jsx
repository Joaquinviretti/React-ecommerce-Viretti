import {createContext, useState } from "react";

export const cartContext = createContext();
const { Consumer, Provider } = cartContext

export const CustomProvider = ({defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue)
    
    const addItem = (item, quantity) => {

        if(isInCart(item.id)) {
            
        } else {
            setCart([...cart, {item:item, quantity:quantity}])
        }
    }

    const isInCart = (id) => {
        return cart.find(e => e.item.id === id)
    }

    return (
        <Provider value={{cart, addItem}}>
            {children}
        </Provider>
    )

}

export default cartContext
