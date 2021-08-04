import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./itemDetailContainer.scss"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {

            const producto =   {
                "id": 1,
                "title": "Apple Watch Series 3",
                "description": "Apple Watch Series 3 con altímetro integrado, coaching inteligente, una app Frecuencia Cardiaca más poderosa y un procesador más potente. Además, siempre tendrás tus playlists favoritas en la muñeca. Es el dispositivo perfecto para que estés más activo, motivado y conectado que nunca.",
                "price": 47999,
                "pictureUrl": "apple-watch-series3.png"
              }

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