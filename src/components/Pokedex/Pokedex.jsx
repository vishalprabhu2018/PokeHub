import React from 'react'
import PokemonList from '../PokemonList/PokemonList'
function Pokedex() {
  return (
    <div>
      {/* <div className='w-9/12 h-28 mx-44 my-10 flex items-center justify-center'>
        <input type="text" className='border-2 border-black px-2' style={{width:"650px", height:"50px"}} placeholder='Pokemon name...' />
    </div> */}
   <div className='mt-24'>
   <PokemonList/>
   </div>
    </div>
  )
}

export default Pokedex