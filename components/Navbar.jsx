'use client'

import NavbarItem from "./NavbarItem"

const sortData = [
  {
    title: 'Trending',
    param: 'fetchTrending'
  },
  {
    title: 'Top Rated',
    param: 'fetchTopRated'
  },
]

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-500 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      {sortData.map((item, i) => {
        return <NavbarItem key={i} title={item.title} param={item.param} />
      })}
    </div>
  )
}

export default Navbar