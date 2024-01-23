import React from 'react'
import "./footer.css"
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='imagen1'>
        <Image
        src='/cell1.gif'
        alt='cell'
        width={160}
        height={170}
        />
      </div>
      <div className='imagen2'>
        <Image
        src='/cell2.gif'
        alt='cell'
        width={160}
        height={170}
        />
      </div>
    </footer>
  )
}
