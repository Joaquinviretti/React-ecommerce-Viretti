import { useEffect } from "react"
import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.scss"
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom"
import data from "../../data/data.json"

const productos = data;

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const { id } = useParams()


  useEffect(() => {
    const promise = getItems()
    promise.then(json => { setProducts(json) })

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const getItems = () => {

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          // eslint-disable-next-line eqeqeq
          resolve(productos.filter(p => p.category == id))
        } else {
          resolve(productos)
        }
      })
    })

    return promise
  }

  return (
    <Container className="mt-5">
      <ItemList products={products} />
    </Container>
  )
}

export default ItemListContainer

