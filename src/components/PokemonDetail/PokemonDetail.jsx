import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function PokemonDetail() {

const {id}=useParams();
const [pokemon,setPokemon]=useState({});
console.log(id);

async function downloadPokemon(){
  const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  console.log(response.data);
  setPokemon(
    {
      name:response.data.name,
      image:response.data.sprites.other.dream_world.front_default,
      weight:response.data.weight,
      height:response.data.height,
      types:response.data.types.map((t)=>t.type.name)
    }
  )
}

useEffect(()=>{
  downloadPokemon();
},[])
  return (
    <div className=' min-h-[38em]'>
      <div className="grid place-items-center mt-20 gap-14 ">
        <img src={pokemon.image} alt="" height={"250rem"} width={"250rem"}   />
        <h1 className='text-center tracking-[.2em] font-bold text-4xl'>{pokemon.name}</h1>
      </div>
      <div className='flex justify-center itemcenter gap-20 mt-12'>
        <div className="text-2xl bg-lime-500 pl-3 rounded">Height: <span className=' bg-lime-200 px-3'>{pokemon.height}ft</span></div>
        <div className="text-2xl bg-lime-500 pl-3 rounded">Weight: <span  className=' bg-lime-200 px-3'>{pokemon.weight}kg  </span></div>
      </div>
      
       <div className='flex justify-center items-center flex-col mt-10 gap-6'>
       <p className='text-3xl text-slate-500'>Types</p>
      <div className='flex gap-4  text-xl '>
        {pokemon.types && pokemon.types.map((t)=><div className=' bg-yellow-200 px-5 mb-14' key={t}>{t}</div>)}
      </div>
       </div>
    </div>
  )
}

export default PokemonDetail