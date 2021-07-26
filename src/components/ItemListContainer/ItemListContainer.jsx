import Container from "react-bootstrap/Container"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemListContainer.scss"

const ItemListContainer = ({nombre}) =>
    <Container fluid className="itemListContainer">
        <p className="greetingMessage">Bienvenido a nuestra tienda {nombre}</p>
        <ItemCount initial={1} stock={5}/>
    </Container>

export default ItemListContainer