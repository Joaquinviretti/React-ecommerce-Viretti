import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./itemDetailContainer.scss"
import { useParams } from "react-router-dom"
import data from "../../data/data"

const productos = data

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                // eslint-disable-next-line eqeqeq
                resolve(productos.find(e => e.id == id))
            },1000);

        })

        promise.then((producto) => setItem(producto))
        

    },[item,id]);

    return (
        <Container className="itemDetailContainer">
            <ItemDetail item={item} />
        </Container>
    )
}

export default ItemDetailContainer