import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon';

function PokemonList() {
const [isLoading,setIsLoading]=useState(true)
const [pokemonList,setPokemonList]=useState([])
const pokedexUrl='https://pokeapi.co/api/v2/pokemon/';

   async function downloadPokemon(){
        const response=await axios.get(pokedexUrl);
        console.log(response.data.results);
        const results=response.data.results;

        const pokemonResultPromise=results.map(pokemon=>axios.get(pokemon.url));
        console.log(pokemonResultPromise)

        const pokemonData=await axios.all(pokemonResultPromise);
        console.log(pokemonData)
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
    })
    return (
      <div>
          <div className="grid  grid-cols-5  ml-24  gap-10">
              {(isLoading)? '...Loading': 
              pokemonList.map((el)=><Pokemon name={el.name} image={el.image} id={el.id}  key={el.id}    />)
              }
          </div>
      </div>
    )
 
}

export default PokemonList