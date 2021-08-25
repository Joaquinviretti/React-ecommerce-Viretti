import { useState } from "react"
import "./ItemCount.scss"

const ItemCount = ({ stock, initial, onAdd, item }) => {

    const [counter, setCounter] = useState(initial)

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } else {
            alert('No tenemos más stock')
        }
    }

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = (e) => {
            onAdd(counter, item) 
    }

    return (
        <div className="itemCountContainer">
            <div className="itemCountControls">
                <button onClick={restar} className="itemCount__add-button itemCount__add-button--left">-</button>
                <div className="countDisplay">
                    <p className="count">{counter}</p>
                </div>
                <button onClick={sumar} className="itemCount__add-button itemCount__add-button--right">+</button>
            </div>
            <button className="itemCount__cart-button" onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount