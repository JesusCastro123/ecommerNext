import React from 'react'
import "./header.css"
import Image from 'next/image'

export const Header = () => {
  return (
    <header className='header'>
      <div className='containerLogo1'>
        <Image
        src='/dragonball.gif'
        alt='logo'
        width={90}
        height={95}
        />
      </div>
      <div className='containerLogo2'>
        <Image
        src='/gokudos.gif'
        alt='logo'
        width={50}
        height={95}
        />
      </div>
      <h1 className='titulo'>
        TORNEO DEL PAPU CELL
      </h1>
    </header>
  )
}
