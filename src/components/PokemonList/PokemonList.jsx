import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon';
import Loading from '../Loading/Loading';
import './PokemonList.css'
function PokemonList() {
const [isLoading,setIsLoading]=useState(true)
const [pokemonList,setPokemonList]=useState([])
const [pokedexUrl,setPokedexUrl]=useState('https://pokeapi.co/api/v2/pokemon/');
const [prevUrl, setPrevUrl]=useState('');
const [nextUrl, setNextUrl]=useState('')

   async function downloadPokemon(){
    setIsLoading(true)
    
        const response=await axios.get(pokedexUrl);
        const results=response.data.results;
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const pokemonResultPromise=results.map(pokemon=>axios.get(pokemon.url));

        const pokemonData=await axios.all(pokemonResultPromise);
        const pokemonListResult=pokemonData.map((pokedata)=>{
        const pokemon=pokedata.data
            return{
              id:pokemon.id,
              name:pokemon.name,
              image: pokemon.sprites.other.dream_world.front_default,
              types:pokemon.types

            }


        })
        setPokemonList(pokemonListResult)
        setIsLoading(false)

       }

    

    useEffect(()=>{
        downloadPokemon();
    },[pokedexUrl])
    return (
      <div>
          <div className="grid  grid-cols-5  ml-24  gap-10 ">
              {(isLoading)?  <Loading/>: 
              pokemonList.map((el)=><Pokemon name={el.name} image={el.image} id={el.id}  key={el.id}    />)
              }

          </div>

          <div className="text-2xl  flex justify-center gap-10">
            <button disabled={prevUrl==null}  onClick={()=>setPokedexUrl(prevUrl)} className="border rounded border-red-600 bg-red-600 cursor-pointer text-white px-4 py-1 mb-10 mt-8">Prev</button>
            <button disabled={nextUrl==null}  onClick={()=>setPokedexUrl(nextUrl)} className="border rounded border-red-600 bg-red-600 cursor-pointer text-white px-4 py-1 mb-10 mt-8">Next</button>
        
          </div>
         
      </div>
    )
 
}

export default PokemonList