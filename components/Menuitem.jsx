'use client'

import Link from 'next/link'
import React from 'react'

const Menuitem = ({title, address}) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default Menuitem