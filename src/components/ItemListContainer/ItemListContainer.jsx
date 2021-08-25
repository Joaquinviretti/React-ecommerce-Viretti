import { useEffect } from "react"
import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.scss"
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom"
import { firestore } from "../../firebase/firebase"


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    const db = firestore
    const collection = db.collection("productos")

    let query = [];

    if (id) {

      const filtro = collection.where("categoryId", "==", parseInt(id))
      query = filtro.get()

    } else {
      query = collection.get()
    }

    query.then((resultados) => {

      const resultado_parseado = []

      resultados.forEach((documento) => {
        const id = documento.id
        const data = documento.data()
        const data_final = { id, ...data }
        resultado_parseado.push(data_final)

      })

      setProducts(resultado_parseado)
      setIsLoading(false)
    }, [id])

  })

  return (
    <Container className="mt-5 itemListContainer">
      <ItemList products={products} isLoading={isLoading} />
    </Container>
  )
}

export default ItemListContainer

