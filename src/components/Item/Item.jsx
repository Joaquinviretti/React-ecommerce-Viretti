import Col from "react-bootstrap/Col"
import "./item.scss"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const Item = ({ products }) => {

    const onAdd = (cantidad) => {
        console.log(`se han agregado ${cantidad} producto/s al carrito`)
    }

    const formatMoney = (num) => {
        return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return (
        <>
            {
                products.map(p =>
                    <Col key={p.id} sm={6} md={4} lg={4} xxl={3}>
                        <Link to={`/item/${p.id}`}  style={{ textDecoration: 'none' }}>
                            <div className="itemContainer">
                                <div className="itemContainer__image" style={{ backgroundImage: `url(${p.pictureUrl})`}}></div>
                                <div className="itemContainer__info">
                                    <span className="item__price">{formatMoney(p.price)}</span>
                                    <h2 className="item__name">{p.title}</h2>
                                    <ItemCount initial={1} stock={5} onAdd={onAdd} />
                                </div>
                            </div>
                        </Link>
                    </Col>)
            }
        </>
    )
}

export default Item