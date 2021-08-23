import Row from "react-bootstrap/Row"
import Item from "../Item/Item"
import "./itemList.scss"
import Spinner from "react-bootstrap/Spinner"

const ItemList = ({ products, isLoading }) => {

    return (
        <Row className="item-list gy-4">

            {!isLoading ? <Item products={products}></Item> :
                <Spinner animation="border" className="spinner" role="status" variant="secondary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}

        </Row>
    )
}

export default ItemList
