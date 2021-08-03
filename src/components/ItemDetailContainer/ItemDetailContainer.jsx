import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./itemDetailContainer.scss"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {

            const producto = { id: 1, title: 'Xiaomi MiBand', description: 'great smartwatch', price: 1250, pictureUrl: 'zapatilla.jpg' }

            setTimeout(() => {
                resolve(producto)
            }, 2000);

        })
        promise.then((producto) => setItem(producto))

    });


    return (
        <Container>
            <ItemDetail item={item} />
        </Container>
    )


}

export default ItemDetailContainer