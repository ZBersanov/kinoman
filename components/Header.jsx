'use client'
import Menuitem from './Menuitem'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'

const navData = [
  {
    title: 'home',
    address: '/'
  },
  {
    title: 'about',
    address: '/about'
  },
]

const Header = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        {navData.map((item, index) => {
          return <Menuitem key={index} title={item.title} address={item.address} />
        })}
      </div>
      <dir className='flex items-center gap-4'>
        <ThemeSwitch />
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>Kino</span>
          <span className='text-xl hidden sm:inline'>man</span>
        </Link>
      </dir>
    </div>
  )
}

export default Header