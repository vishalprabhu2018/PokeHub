import React from 'react'
import bulbasur from './../../assets/bulbasur.png'
import PokemonList from '../PokemonList/PokemonList'
import { Link } from 'react-router-dom'

function Pokemon({name, image,id} ) {

  return (
    <div className="flex flex-col w-48 ">  
      
      <Link to={`/pokemon/${id}`}>
      
      <div className='text-center tracking-[.4em] font-bold'>{name}</div>
      <div> <img src={image} alt="" /></div>

          </Link>

      </div>
 

      
      

  )
}

export default Pokemon