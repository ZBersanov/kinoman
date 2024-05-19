'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchBox = () => {
  const [search,setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${search}`)
  }
  return (
    <form 
      onSubmit={handleSubmit}
      className="flex justify-between px-5 max-w-6xl mx-auto relative">
      <input 
        type="text" 
        placeholder='Название фильма...' 
        className='w-full h-14 rounded-lg placeholder-gray-500 outline-none flex-1 px-3 my-3'
        onChange={e => setSearch(e.target.value)}
      />
      <button className='text-amber-600 disabled:text-gray-500 absolute top-[34%] right-9' disabled={search === ''}>Поиск</button>
    </form>
  )
}

export default SearchBox