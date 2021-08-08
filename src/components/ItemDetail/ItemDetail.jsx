import "./itemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({item}) => {

    const onAdd = (cantidad) => {
        console.log(`se han agregado ${cantidad} producto/s al carrito`)
    }

    return(
        <div className="itemDetail">
            <div className="detail-img">
                <img src={item.pictureUrl} alt="" />
            </div>
            <div className="detail-info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h4>{item.price}</h4>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail