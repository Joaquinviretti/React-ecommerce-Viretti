import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"
import "./NavBar.scss"

const NavBar = () => {

  
    return (

        <nav>
            <div className="nav__brand">
                <NavLink to="/">WatchWorld</NavLink>
            </div>
            <div className="nav__links">
                <NavLink to="/category/2" className="nav__link" activeClassName="nav__link--selected">Deportivos</NavLink>
                <NavLink to="/category/1" className="nav__link" activeClassName="nav__link--selected">Elegantes</NavLink>
                <CartWidget />
            </div>
        </nav>

    )
}

export default NavBar;