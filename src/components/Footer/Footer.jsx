import  Container  from "react-bootstrap/Container";
import "./footer.scss"
import {FaFacebook} from "react-icons/fa"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"

const Footer = () => {

    return (
        <footer>
            <Container className="footer" fluid="xs">
                <p>© Todos los derechos reservados.</p>
                <div className="footer__links">
                    <FaFacebook />
                    <AiOutlineInstagram  className="mx-2" />
                    <AiFillTwitterCircle />
                </div>
            </Container>
        </footer>
    )
}

export default Footer;