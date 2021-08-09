import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./itemDetailContainer.scss"
import { useParams } from "react-router-dom"
import data from "../../data/data"
import Spinner from "react-bootstrap/Spinner"

const productos = data

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                // eslint-disable-next-line eqeqeq
                resolve(productos.find(e => e.id == id))
                setLoading(true)
            }, 2000);

        })

        promise.then((producto) => setItem(producto))


    }, [item, id]);

    return (
        <Container className="itemDetailContainer">
            {loading ? <ItemDetail item={item} /> :
                <Spinner animation="border" role="status" variant="secondary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
        </Container>
    )
}

export default ItemDetailContainer