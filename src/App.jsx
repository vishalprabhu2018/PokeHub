import { useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import Pokemon from './components/Pokemon/Pokemon'
import PokemonList from './components/PokemonList/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' bg-slate-300'>
      <h1 className='py-4 px-4 text-4xl text-center tracking-[1em]'>POKEDEX</h1>
    <Pokedex/>
      <PokemonList/>
     </div>
    </>
  )
}

export default App
