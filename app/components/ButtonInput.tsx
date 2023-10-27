'use client';
import React from 'react'

const ButtonInput = () => {
  return (
    <button onClick={()=>console.log("click here")
      } className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Click Here</button>
  )
}

export default ButtonInput