import React from 'react'
import bulbasur from './../../assets/bulbasur.png'
function Pokemon() {

  return (
    <div className="flex flex-wrap gap-12 items-center mx-10">

      <div className="w-56 ">
       <p className='text-center tracking-[.4em] font-bold'>bulbasur</p>
       <img src={bulbasur} alt="" />
      </div>
     
    </div>

  )
}

export default Pokemon