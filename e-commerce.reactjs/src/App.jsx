import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { Titulo } from './components/Titulo/Titulo'
import ItemCount from './components/ItemCount/ItemCount'
import { Formulario } from './components/Formulario/Formulario'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';

function App() {

  return (
   // <div className="App">
    <BrowserRouter>
      <Titulo titulo="E-Commerce" subtitulo="React.js" />
      <NavBar />
      <Routes>
        <Route path='' element={<ItemListContainer />}/>
        <Route path='detail' element={<ItemDetailContainer />}/>  
        <Route path='form' element={<Formulario />}/>     
        <Route path='*' element={<Navigate to={'/'} />}/>     
      </Routes>
      <ItemCount />    
    </BrowserRouter>
   // </div>
  )
} 

export default App
 