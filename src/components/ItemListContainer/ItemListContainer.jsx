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
  const [loading, setLoading] = useState(false)
  const { id } = useParams()


  useEffect(() => {
    const promise = getItems()
    promise.then(json => { setProducts(json) })

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, products])

  const getItems = () => {

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          // eslint-disable-next-line eqeqeq
          resolve(productos.filter(p => p.category == id))
        } else {
          resolve(productos)
        }
        setLoading(true)
      }, 3000)
    })

    return promise
  }

  return (
    <Container className="mt-5 itemListContainer">
      <ItemList products={products} loading={loading} />
    </Container>
  )
}

export default ItemListContainer

