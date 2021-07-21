import Container from "react-bootstrap/Container"
import "./ItemListContainer.scss"

const ItemListContainer = ({nombre}) =>
    <Container fluid className="itemListContainer">
        <p>Bienvenido a nuestra tienda {nombre}</p>
    </Container>

export default ItemListContainer