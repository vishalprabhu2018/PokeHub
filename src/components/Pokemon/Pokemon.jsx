import React from 'react'
import bulbasur from './../../assets/bulbasur.png'
import PokemonList from '../PokemonList/PokemonList'


function Pokemon({name, image} ) {

  return (
    <div className="flex flex-col w-48 ">  
      
       <div className='text-center tracking-[.4em] font-bold'>{name}</div>
      <div> <img src={image} alt="" /></div>
      </div>
      

  )
}

export default Pokemon