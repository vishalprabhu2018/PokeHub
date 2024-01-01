import { useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import Pokemon from './components/Pokemon/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1 className='my-4 mx-4 text-4xl text-center tracking-[1em]'>POKEDEX</h1>
    <Pokedex/>
<Pokemon/>
     </div>
    </>
  )
}

export default App
