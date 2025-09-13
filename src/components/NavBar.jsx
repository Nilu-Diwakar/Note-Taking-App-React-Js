import React from 'react'
import { NavLink } from 'react-router-dom'
import icons from "../icons/index"

function NavBar() {
  return (
    <nav className='w-full fixed bottom-0 px-4 py-3 bg-white lg:hidden'>
        <ul className='grid grid-cols-5'>
            <li>
                <NavLink to={"/"} className="flex flex-col justify-center items-center">
                    <img src={icons.home} alt="home-icon" />
                    <p className='hidden md:block text-neutral-500 text-xs font-normal'>Home</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={`/?search=${true}`} className="flex flex-col justify-center items-center">
                    <img src={icons.search} alt="home-icon" />
                    <p className='hidden md:block text-neutral-500 text-xs font-normal'>Search</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/archives"} className="flex flex-col justify-center items-center">
                    <img src={icons.archive} alt="home-icon" />
                    <p className='hidden md:block text-neutral-500 text-xs font-normal'>Archive</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={`/?tag=${true}`} className="flex flex-col justify-center items-center">
                    <img src={icons.tag} alt="home-icon" />
                    <p className='hidden md:block text-neutral-500 text-xs font-normal'>Tag</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/settings"} className="flex flex-col justify-center items-center">
                    <img src={icons.setting} alt="home-icon" />
                    <p className='hidden md:block text-neutral-500 text-xs font-normal'>Setting</p>
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
