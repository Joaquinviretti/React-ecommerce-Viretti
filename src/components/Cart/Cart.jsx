import cartContext from "../../context/cartContext"
import { useContext, useEffect, useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import "./cart.scss"
import { Row, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, removeItem } = useContext(cartContext)
    const [isEmpty, setIsEmpty] = useState(true)

    useEffect(() => {
        cart.length > 0 ? setIsEmpty(false) : setIsEmpty(true)
    }, [cart.length])

    const onRemove = ev => {
        removeItem(ev.currentTarget.value)
    }

    if (!isEmpty) {
        return (
            <Container className="cartSection">
                <div>
                    {cart.map(p =>
                        <Row key={p.item.id}>
                            <Col>
                                <Row className="cartItem" key={p.item.id}>
                                    <Col xs={2} className="cartItem__pictureUrl" style={{ backgroundImage: `url(/${p.item.pictureUrl})` }}></Col>
                                    <Col xs={2} className="cartItem__quantity"><span>{p.quantity}</span></Col>
                                    <Col className="cartItem__title"><p>{p.item.title}</p></Col>
                                    <Col xs={3} className="cartItem__price"><span>$ {p.item.price}</span></Col>
                                </Row>
                            </Col>
                            <Col xs={2} className="cartItem__delete"><button value={p.item.id} onClick={onRemove}><FaTrashAlt /></button></Col>
                        </Row>
                    )}
                </div>
               <Link to="/checkout"> <button className="cartSection__checkout">Checkout</button></Link>
            </Container>
        )
    } else {
        return (
            <div className="cartEmptyMessage">
                <span>Ups, parece que no tienes ningún producto en el carrito.</span>
            </div>
        )
    }

}

export default Cart