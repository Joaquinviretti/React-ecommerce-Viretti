import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./ItemListContainer.scss"

const ItemListContainer = ({nombre}) =>
    <Container fluid className="itemListContainer">
        <p>Bienvenido a nuestra tienda {nombre}</p>
    </Container>

export default ItemListContainer