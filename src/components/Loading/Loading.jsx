import React from 'react'
import myGif from './pokemon.gif'

function Loading() {
  return (
    <div className='min-h-[10vh]  w-[85em] flex  justify-center'>
       
            {/* <h1 className='font-bold text-4xl  tracking-[.1em]'>Loading...........</h1> */}

            <img src={myGif} alt="img" />
      
    </div>
  )
}

export default Loading