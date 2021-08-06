import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./NavBar.scss"

const NavBar = () => {

    return (

        <nav>
            <div className="nav__brand">
                <Link to="/">WatchWorld</Link>
            </div>
            <div className="nav__links">
                <Link to="/category/1"><span className="nav__link">Elegantes</span></Link>
                <Link to="/category/2"><span className="nav__link">Deportivos</span></Link>
                <CartWidget />
            </div>
        </nav>

    )
}

export default NavBar;