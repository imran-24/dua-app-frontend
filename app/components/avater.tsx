'use client'
import Image from 'next/image'
import React from 'react'



const Avater = () => {
  return (
    <div className='relative'>
        <div className='
        relative
        overflow-hidden
        h-8
        w-8
        rounded-full
        cursor-pointer
        '>
          <Image fill src={'/user-placeholder.png'} alt='user' />    
        </div>
        
    </div>
  )
}

export default Avater