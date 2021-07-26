import { useState } from "react"
import Button from "react-bootstrap/Button"
import "./ItemCount.scss"

const ItemCount = ({ stock, initial, onAdd }) => {

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

    return (
        <div className="itemCountContainer">
            <div className="itemCountControls">
                <Button onClick={restar}>-</Button>
                <div className="countDisplay">
                    <p className="count">{counter}</p>
                </div>
                <Button onClick={sumar}>+</Button>
            </div>
            <Button className="itemCount__button--add" onClick={onAdd}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount