import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { Titulo } from './components/Titulo/Titulo'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <div className="App">
     <Titulo titulo="E-Commerce" subtitulo="React.js"/>
     <NavBar>
     </NavBar>
     <ItemCount />
     <ItemListContainer />
    </div>
  )
}

export default App
 