import { useEffect } from "react"
import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.scss"
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom"
import data from "../../data/data"

const productos = data;

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()


  useEffect(() => {
    const promise = getItems()
    promise.then(json => setProducts(json))

  }, [id])

  const getItems = () => {

    const promise = new Promise((resolve, reject) => {

      setTimeout(() => {
        id ? resolve(productos.filter(p => p.categoryId == id)) : resolve(productos)
        setIsLoading(false)
      }, 2000)

    })

    return promise
  }

  return (
    <Container className="mt-5 itemListContainer">
      <ItemList products={products} isLoading={isLoading} />
    </Container>
  )
}

export default ItemListContainer

