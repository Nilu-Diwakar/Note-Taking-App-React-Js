import React from 'react'
import icons from '../icons/index'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='w-full flex items-center justify-between bg-neutral-100 px-4 py-3 md:px-8 md:py-6 lg:py-3 lg:px-4 lg:bg-neutral-0 lg:border-b border-neutral-200'>

      <NavLink to={'/'} >
        <img src={icons.logo} alt="logo-svg" />
      </NavLink>

      <div className='flex-1 ml-40 hidden lg:flex items-center justify-between px-3 py-2'>
        <h1 className='font-bold text-2xl'>All Notes</h1>
        <div className='flex items-center gap-4'>
          <form className='relative'>
            <input type="text" name='query' placeholder='Search by title, content, or tags...' className="w-[300px] h-9 px-4 py-3 pl-10 bg-transparent font-normal border border-borderClr focus:border-black rounded-md text-xs shadow-sm focus:outline-none placeholder:text-xs placeholder:font-normal"/>
            <button className='inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium focus:outline-none hover:bg-accent h-9 w-9 absolute left-0'>
              <img src={icons.search} alt="search-icon" className='w-4'/>
            </button>
          </form>
          <NavLink>
            <img src={icons.setting} alt="setting-icon" />
          </NavLink>
        </div>
      </div>
      
    </header>
  )
}

export default Header
