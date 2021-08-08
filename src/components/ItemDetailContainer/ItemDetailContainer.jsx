import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./itemDetailContainer.scss"
import { useParams } from "react-router-dom"
import data from "../../data/data.json"

const productos = data

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                // eslint-disable-next-line eqeqeq
                resolve(productos.filter(e => e.id == id))
            }, 2000);

        })

        promise.then((producto) => setItem(producto))
        

    });

    return (
        <Container className="mt-5 itemDetailContainer">
            <ItemDetail item={item} />
        </Container>
    )
}

export default ItemDetailContainer