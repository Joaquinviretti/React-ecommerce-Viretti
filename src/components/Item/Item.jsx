import Col from "react-bootstrap/Col"
import "./item.scss"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({ products }) => {

    const onAdd = (cantidad) => {
        console.log(`se han agregado ${cantidad} producto/s al carrito`)
    }

    return (
        <>
            {
                products.map(p =>
                    <Col key={p.id} sm={6} md={4} lg={4} xxl={3}> 
                        <div className="itemContainer">
                            <div className="itemContainer__image" style={{ backgroundImage: "url(apple-watch-series3.png)" }}></div>
                            <div className="itemContainer__info">
                                <span className="item__price">${p.price}</span>
                                <h2 className="item__name">{p.title}</h2>
                                <ItemCount initial={1} stock={5} onAdd={onAdd} />
                            </div>
                        </div>
                    </Col>)
            }
        </>
    )
}

export default Item