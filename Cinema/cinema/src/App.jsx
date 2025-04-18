import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cartelera from './components/cartelera/Cartelera'
import NavBar from './components/navBar/NavBar'
import NuevaPelicula from './components/nuevaPelicula/NuevaPelicula'
import filmsInitial from './Data/Films'
import { useState } from 'react'



const App = () => {
  const [peliculas, setPeliculas] = useState(filmsInitial)

  const agregarPelicula = (nueva) => {
    setPeliculas([...peliculas, nueva])
  }
  return (
    <>
    <h1>Bienvenidos</h1>
    <NavBar />
    <Routes>
      <Route path='/' element={<Cartelera />} />
      <Route path="/nueva" element={<NuevaPelicula onFilmsAdded={agregarPelicula} />} />

      
    </Routes>
    
    </>
  )
}

export default App