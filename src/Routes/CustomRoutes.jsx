import React from 'react'
import {Route , Routes} from 'react-router-dom'
import App from '../App'
import PokemonDetail from '../components/PokemonDetail/PokemonDetail'
import Pokedex from '../components/Pokedex/Pokedex'
function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Pokedex/>}></Route>
        <Route path='/pokemon/:id' element={<PokemonDetail/>}></Route>
        </Routes>
  )
}

export default CustomRoutes