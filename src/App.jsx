import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

let nombre = "Emanuel"

const App = () => 
<>
    <NavBar/>
    <ItemListContainer nombre={nombre}/>
</>

export default App