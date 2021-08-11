import { MdShoppingCart } from 'react-icons/md';
import { IconContext } from "react-icons";
import { useContext, useEffect, useState } from 'react';
import './CartWidget.scss'
import cartContext from '../../content/cartContext';

const CartWidget = () => {

    const {cart} = useContext(cartContext)
    const [itemsInCart, setItemsInCart] = useState(0)
    
    useEffect(() => {

        let sum = cart.reduce(function(prev, curr){
            return prev + curr.quantity;
        }, 0)

        setItemsInCart(sum)
        console.log(cart);

    }, [cart]);

    return (

        <IconContext.Provider value={{ size: "1.3em" }}>
            <div className="cartWidgetContainer">
                <MdShoppingCart /><span>{itemsInCart} items</span>
            </div>
        </IconContext.Provider>
    )
}

export default CartWidget