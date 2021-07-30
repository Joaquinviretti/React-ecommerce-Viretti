import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.scss"

const NavBar = () => {

    return (

        <nav>
            <div className="nav__brand">
                <a href="home">WatchWorld</a>
            </div>
            <div className="nav__links">
                <a className="nav__link" href="productos">Productos</a>
                <a className="nav__link" href="contacto">Contacto</a>
                <CartWidget />
            </div>
        </nav>
          
    )
}

export default NavBar;