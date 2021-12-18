import { useContext, useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./checkout.scss"
import Spinner from "react-bootstrap/Spinner"
import cartContext from "../../context/cartContext"
import { firestore } from "../../firebase/firebase"
import Alert from "react-bootstrap/Alert"
import { Link } from "react-router-dom"


const Checkout = () => {

    const { cart, getTotal, clear } = useContext(cartContext)
    const [userData, setUserData] = useState({ })
    const [isLoading, setIsLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [confirmationId, setConfirtmationId] = useState()

    useEffect(() => {
        setTotal(getTotal())
    }, [cart]);

    const selectFewerProps = (show) => {
        const { id, title, price } = show.item;
        const { quantity } = show;
        return { id, title, price, quantity };
    }

    const sendForm = (e) => {
        e.preventDefault()

        setIsLoading(true)
        const date = new Date()

        const order = {
            buyer: userData,
            items: cart.map(selectFewerProps),
            date: date,
            total: total
        }

        const db = firestore
        db.collection("pedidos").add(order)
            .then(setIsLoading(false))
            .then((docRef) => {
                setConfirtmationId(docRef.id)
            })
            .then(clear()).then(setIsLoading(false))
    }


    return (
        <Container className="checkoutContainer pb-4">
            {confirmationId ? <>
                <Alert variant="success">
                    <Alert.Heading>Muchas gracias por tu compra !</Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        Tu código de confirmación es: {confirmationId}
                    </p>
                </Alert>
                <Link to="/"><button className="checkoutItem__empty ms-auto">Seguir comprando</button></Link> </> : <></>
            }

            {isLoading ?
                <Alert variant="warning">
                    <Alert.Heading>Procesando pedido...</Alert.Heading>
                </Alert> : <></>
            }

            {cart.length > 0 ?
                <Row>
                    <Col xs={7} className="checkoutForm">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control name="name" type="fname" placeholder="Juan Pérez" onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        userName: e.target.value
                                    })
                                }
                                } required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control name="telefono" type="phone" placeholder="011 9 1111 - 1111" onChange={(e) => {
                                    setUserData({ ...userData, userPhone: e.target.value })
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control name="email" type="email" placeholder="nombre@ejemplo.com" onChange={(e) => {
                                    setUserData({ ...userData, userEmail: e.target.value })
                                }} required />
                            </Form.Group>
                            <button className="checkoutForm__confirm" type="submit" onClick={sendForm}>Confirmar</button>
                        </Form>
                    </Col>
                    <Col xs={5} className="checkoutList">
                        {cart.map((p) =>
                            <Row key={p.item.id} className="mb-3">
                                <Col xs={2} className="checkoutItem__quantity"><span>{p.quantity}</span></Col>
                                <Col className="checkoutItem__title"><p>{p.item.title}</p></Col>
                                <Col xs={3} className="checkoutItem__price"><span>$ {p.item.price}</span></Col>
                            </Row>
                        )}
                        <h2 className="checkoutItem__total">$ {total}</h2>
                    </Col>
                </Row> : <></>
            }
        </Container>
    )
}



export default Checkout