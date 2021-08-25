import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"
import { firestore } from "../../firebase/firebase"
import "./itemDetailContainer.scss"



const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const db = firestore

        const collection = db.collection("productos")

        const documento = collection.doc(id)

        const query = documento.get()

        query.then((doc) => {
            const data = doc.data()
            const data_final = { id, ...data }
            setItem(data_final)
        })

        setItem(documento)

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)

    }, [id]);

    return (
        <Container className="itemDetailContainer">
            {isLoading ? <Spinner animation="border" role="status" variant="secondary">
                <span className="visually-hidden">Loading...</span>
            </Spinner> : <ItemDetail item={item} />}
        </Container>
    )
}

export default ItemDetailContainer