import React from 'react'
import icons from '../icons/index'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='w-full flex lg:hidden items-center justify-between bg-neutral-100 px-4 py-3 md:px-8 md:py-6'>

      <NavLink to={'/'} >
        <img src={icons.logo} alt="logo-svg" />
      </NavLink>
    </header>
  )
}

export default Header
