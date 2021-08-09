import "./itemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({item}) => {

    const onAdd = (cantidad) => {
        console.log(`se han agregado ${cantidad} producto/s al carrito`)
    }

    const formatMoney = (num) => {
        if(num) {
            return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        }
    }

    return(
        <div className="itemDetail">
            <div className="detail-img__container">  
            <div className="detail-img" style={{ backgroundImage: `url(/${item.pictureUrl})`}}></div>
            </div>
            <div className="detail-info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h4>{formatMoney(item.price)}</h4>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>    
        </div>
    )
}

export default ItemDetail