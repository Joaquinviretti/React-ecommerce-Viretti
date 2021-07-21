import { MdShoppingCart } from 'react-icons/md';
import { IconContext } from "react-icons";
import './CartWidget.scss'

const CartWidget = () =>
    <IconContext.Provider value={{size:"1.3em"}}>
        <div className="cartWidgetContainer">
            <MdShoppingCart /> <span>0 items</span>
        </div>
    </IconContext.Provider>

export default CartWidget