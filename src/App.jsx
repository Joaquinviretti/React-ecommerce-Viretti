import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./style/main.scss"
import Footer from "./components/Footer/Footer"

const App = () =>
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/item/:id">
                <ItemDetailContainer />
            </Route>
        </Switch>
        <Footer />
    </BrowserRouter>

export default App