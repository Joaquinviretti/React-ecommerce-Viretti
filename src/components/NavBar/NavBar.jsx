import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const NavBar = () =>
    <Navbar bg="dark" variant="dark">
        <Container fluid="xxl">
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Productos</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

export default NavBar;