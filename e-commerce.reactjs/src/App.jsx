import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { Titulo } from './components/Titulo/Titulo'
import ItemCount from './components/ItemCount/ItemCount'
import { Formulario } from './components/Formulario/Formulario'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './contexts/CartContext'
import { CartContainer } from './components/CartContainer/CartContainer'

function App() {

  return (

    <CartContextProvider>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route
            path='/'
            element={<ItemListContainer />} />
          <Route
            path='/categoria/:cid'
            element={<ItemListContainer />} />
          <Route
            path='detail/:pid'
            element={<ItemDetailContainer />} />
          <Route
            path='/cart'
            element={<CartContainer />} />
          <Route
            path='form'
            element={<Formulario />} />
          <Route
            path='*'
            element={<Navigate to={'/'} />} />
        </Routes>

      </BrowserRouter>

    </CartContextProvider>

  )
} 

export default App
 