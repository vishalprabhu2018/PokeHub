import { useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import Pokemon from './components/Pokemon/Pokemon'
import PokemonList from './components/PokemonList/PokemonList'
import PokemonDetail from './components/PokemonDetail/PokemonDetail'
import CustomRoutes from './Routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' bg-slate-300 min-h-screen w-screen'>
    <Link to="/">
    <h1 className='py-4 px-4 text-4xl text-center tracking-[1em]'>POKEDEX</h1>
    </Link>
    
    <CustomRoutes></CustomRoutes>
     </div>
    </>
  )
}

export default App
