import Container from "react-bootstrap/Container"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemListContainer.scss"

const ItemListContainer = ({ nombre }) => {

    const onAdd = (cantidad) => {
        console.log(`se han agregado ${cantidad} producto/s al carrito`)
    }

    return (
        <Container fluid className="itemListContainer">
            <p className="greetingMessage">Bienvenido a nuestra tienda {nombre}</p>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </Container>
    )
}

export default ItemListContainer

