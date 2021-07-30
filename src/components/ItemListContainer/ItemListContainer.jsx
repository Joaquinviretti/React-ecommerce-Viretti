import { useEffect } from "react"
import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.scss"
import Container from "react-bootstrap/Container"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {

            const products = [
                { id: 1, title: 'Xiaomi MiBand', description: 'great smartwatch', price: 1250, pictureUrl: 'zapatilla.jpg' },
                { id: 2, title: 'Apple Watch', description: 'great smartwatch', price: 1250, pictureUrl: 'zapatilla.jpg' },
                { id: 4, title: 'Galaxy Watch', description: 'great smartwatch', price: 1250, pictureUrl: 'zapatilla.jpg' },
                { id: 5, title: 'Galaxy Watch', description: 'great smartwatch', price: 1250, pictureUrl: 'zapatilla.jpg' },
                { id: 6, title: 'Galaxy Watch', description: 'great smartwatch', price: 1250, pictureUrl: 'zapatilla.jpg' },
                { id: 7, title: 'Galaxy Watch', description: 'great smartwatch', price: 1250, pictureUrl: 'zapatilla.jpg' },
                { id: 8, title: 'Galaxy Watch', description: 'great smartwatch', price: 1250, pictureUrl: 'zapatilla.jpg' }]

            setTimeout(() => {
                resolve(products)
            }, 2000)

        })
        promise.then((products) => setProducts(products))
    });

    return (
        <Container className="mt-5">
            <ItemList products={products} />
        </Container>
    )
}

export default ItemListContainer

