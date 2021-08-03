import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import "./base/global.scss"

let nombre = "Emanuel"

const App = () => 
<>
    <NavBar/>
    <ItemListContainer nombre={nombre}/>
    <ItemDetailContainer />
</>

export default App