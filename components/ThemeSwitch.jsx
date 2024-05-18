'use client'

import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const {theme, setTheme, systemTheme} = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
      {currentTheme === 'dark'
      ? <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('light')} />
      : <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('dark')} />
      }
    </div>
  )
}

export default ThemeSwitch