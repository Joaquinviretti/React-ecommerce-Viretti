import { MdShoppingCart } from 'react-icons/md';
import { IconContext } from "react-icons";
import { useContext, useEffect, useState } from 'react';
import './CartWidget.scss'
import cartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { cart } = useContext(cartContext)
    const [itemsInCart, setItemsInCart] = useState(0)

    useEffect(() => {

        let sum = cart.reduce(function (prev, curr) {
            return prev + curr.quantity;
        }, 0)

        setItemsInCart(sum)

    }, [cart]);

    return (

        <Link to="/cart" className="cartWidgetContainer">
            <IconContext.Provider value={{ size: "1.3em" }}>
                <div className="cartWidget">
                    <MdShoppingCart />{itemsInCart > 0 ? <span>{itemsInCart} items</span> : <></>}
                </div>
            </IconContext.Provider>
        </Link>
    )
}

export default CartWidget