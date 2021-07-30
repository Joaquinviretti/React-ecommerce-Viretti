import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import "./base/global.scss"

let nombre = "Emanuel"

const App = () => 
<>
    <NavBar/>
    <ItemListContainer nombre={nombre}/>
</>

export default App