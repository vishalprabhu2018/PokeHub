import React from 'react'

function Pokedex() {
  return (
    <div className='w-9/12 h-28 mx-44 my-10 flex items-center justify-center'>
        <input type="text" className='border-2 border-black px-2' style={{width:"650px", height:"50px"}} placeholder='Pokemon name...' />
    </div>
  )
}

export default Pokedex