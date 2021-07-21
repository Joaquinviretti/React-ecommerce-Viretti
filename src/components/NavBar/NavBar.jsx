import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.scss"

const NavBar = () =>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container fluid="xxl">
            <Navbar.Brand href="#home">Watch World</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                    <Nav.Link href="#cart" className="navLinkCart"><CartWidget/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar >

export default NavBar;