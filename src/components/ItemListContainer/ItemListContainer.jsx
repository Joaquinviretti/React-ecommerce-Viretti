import { useEffect } from "react"
import { useState } from "react"
import data from "../../data/data.json"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.scss"
import Container from "react-bootstrap/Container"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    /* USANDO FETCH
    useEffect(() => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products')
                .then((response)=> response.json())
                .then((myJson) => setProducts(myJson))     
        }, 2000);
    }); */

    useEffect(() => {          
        const promise = new Promise((resolve, reject) => {
            const products = data
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })

        promise.then((products) => setProducts(products))
    })

    return (
        <Container className="mt-5">
            <ItemList products={products} />
        </Container>
    )
}

export default ItemListContainer

